"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const contract_entity_1 = require("./entities/contract.entity");
const typeorm_2 = require("typeorm");
const fs = require("fs");
const handlebars = require("handlebars");
const path = require("path");
const os = require("os");
const puppeteer = require("puppeteer");
const moment = require("moment");
const class_validator_1 = require("class-validator");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const customer_service_1 = require("../../customer/customer.service");
const config_1 = require("@nestjs/config");
let ContractService = class ContractService {
    constructor(contractRepository, customerService, configService) {
        this.contractRepository = contractRepository;
        this.customerService = customerService;
        this.configService = configService;
    }
    async create(createContractInput) {
        const contract = this.contractRepository.create(createContractInput);
        return this.contractRepository.save(contract);
    }
    async findAll(customer) {
        if ((0, class_validator_1.isUUID)(customer)) {
            return this.contractRepository.find({ where: { customer: { id: customer } } });
        }
        return this.contractRepository.find();
    }
    async findOne(id) {
        const contract = await this.contractRepository.findOneBy({ id });
        if (!contract) {
            throw new common_1.NotFoundException('Contrato no encontrado');
        }
        return contract;
    }
    async remove(id) {
        await this.findOne(id);
        await this.contractRepository.delete({ id });
        return 'Contrato borrado correctamente';
    }
    async updated(updatedContract) {
        const contract = await this.findOne(updatedContract.id);
        const data = Object.assign(Object.assign(Object.assign({}, contract), { hasDocument: true }), updatedContract);
        await this.contractRepository.save(data);
        return 'Contract updated successfully';
    }
    async generateDocument(id) {
        var _a;
        const source = fs.readFileSync(`${this.configService.get('PATH_TEMPLATES')}/publicContract.html`, 'utf-8');
        const contract = await this.findOne(id);
        if (!contract || ((_a = contract.detail) === null || _a === void 0 ? void 0 : _a.length) <= 0) {
            return new common_1.BadRequestException('El contrato no cuenta con un detalle. Asegurate de agregar almenos un elemento.');
        }
        const data = this.documentData(contract);
        handlebars.registerHelper('inc', function (value, options) {
            return parseInt(value) + 1;
        });
        const template = handlebars.compile(source);
        const html = template(data);
        const name = path.join(os.tmpdir(), `Contrato-${contract.processNumber}.pdf`);
        const browser = await puppeteer.launch({
            args: ['--no-sandbox'],
            headless: true,
        });
        const page = await browser.newPage();
        await page.goto(`data:text/html;charset=UTF-8,${html}`, { waitUntil: 'networkidle0' });
        const buffer = await page.pdf({ path: name, format: 'A4', height: 1200, margin: { top: 20 } });
        const base64 = buffer.toString('base64');
        return { detailDocument: `data:application/pdf;base64,${base64}`, document: contract.document };
    }
    async downloadPrivateContractTemplate(customerId) {
        var _a, _b;
        const data = await this.customerService.findOne(customerId);
        const path = `${this.configService.get('PATH_TEMPLATES')}/contract-private.docx`;
        const template = fs.readFileSync(path, 'binary');
        const zip = new PizZip(template);
        const doc = new Docxtemplater(zip, { errorLogging: true, linebreaks: true });
        doc.render({
            customer: (_a = data.customer.commercialName) === null || _a === void 0 ? void 0 : _a.toUpperCase(),
            customerBusiness: (_b = data.customer.businessName) === null || _b === void 0 ? void 0 : _b.toUpperCase(),
            numberDocument: data.customer.numberDocument,
        });
        const buffer = doc.getZip().generate({
            type: 'base64',
            compression: 'DEFLATE',
        });
        return `${buffer}`;
    }
    documentData(contract) {
        const customer = contract.customer;
        const newDetail = this.groupDetail(contract.detail);
        const detail = newDetail.map((item) => (Object.assign(Object.assign({}, item), { total: parseFloat((item.price * item.weight).toFixed(2)) })));
        const weights = detail.map(item => item.weight ? item.weight : 0);
        const totals = detail.map(item => item.total ? item.total : 0);
        moment.locale('es');
        let totalWeight = 0;
        let subTotal = 0;
        weights.forEach(item => {
            totalWeight = totalWeight + item;
        });
        totals.forEach(item => {
            subTotal = subTotal + item;
        });
        const IVA = parseFloat((subTotal * 0.12).toFixed(2));
        const total = IVA + subTotal;
        return {
            entityContract: customer.businessName,
            processNum: contract.processNumber,
            duration: moment(contract.duration).format('LL'),
            createdAt: moment(contract.createdAt).format('LL'),
            detail,
            totalWeight: totalWeight === 0 ? '' : totalWeight,
            subTotal: subTotal === 0 ? '' : parseFloat(subTotal.toFixed(2)),
            IVA: IVA === 0 ? '' : parseFloat(IVA.toFixed(2)),
            total: total === 0 ? '' : parseFloat(total.toFixed(2)),
        };
    }
    groupDetail(detail) {
        const newDetail = [];
        detail.forEach((item) => {
            const haveGroup = item.groupId;
            if (!haveGroup)
                return newDetail.push(item);
            const existGroup = newDetail.some((item) => (item === null || item === void 0 ? void 0 : item.groupId) === item.groupId);
            if (existGroup)
                return;
            const groupDetails = detail.filter((element) => element.groupId === item.groupId);
            const groupNames = groupDetails.map((element) => {
                const mae = element.mae;
                return mae.name;
            });
            let maesGroup = `${groupNames.join()}`;
            const mae = item.mae;
            newDetail.push(Object.assign(Object.assign({}, item), { mae: Object.assign(Object.assign({}, mae), { name: maesGroup, description: item.groupName }) }));
        });
        return newDetail;
    }
};
ContractService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contract_entity_1.Contract)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        customer_service_1.CustomerService,
        config_1.ConfigService])
], ContractService);
exports.ContractService = ContractService;
//# sourceMappingURL=contract.service.js.map