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
exports.RequestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const request_entity_1 = require("./entities/request.entity");
const request_detail_mae_service_1 = require("../request-detail-mae/request-detail-mae.service");
const handlebars = require("handlebars");
const fs = require("fs");
const fs_1 = require("fs");
const puppeteer = require("puppeteer");
const path = require("path");
const os = require("os");
const config_1 = require("@nestjs/config");
const websocket_gateway_1 = require("../websocket/websocket.gateway");
let RequestService = class RequestService {
    constructor(requestRepository, requestDetailService, configService, webSocketGateway) {
        this.requestRepository = requestRepository;
        this.requestDetailService = requestDetailService;
        this.configService = configService;
        this.webSocketGateway = webSocketGateway;
    }
    async create(createRequestDto, user) {
        const request = this.requestRepository.create(createRequestDto);
        request.user = user;
        try {
            await this.requestRepository.save(request);
            return { request: this.formatData([request])[0] };
        }
        catch (e) {
            console.log('ERROR TO CREATE REQUEST');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
    }
    async findAll(user, initialDate, endDate, status, city, vehicle, plate) {
        const parseInitialDate = new Date(initialDate);
        const parseEndDate = new Date(endDate);
        const isAdmin = user.roles.some(rol => rol.name.includes('ADMIN'));
        let requests = await this.requestRepository.find({
            where: {
                user: !isAdmin ? user : undefined,
                withdrawalDate: initialDate && endDate ? (0, typeorm_2.Between)(parseInitialDate, parseEndDate) : undefined,
                status: { id: status },
                addressId: city ? { city: (0, typeorm_2.Like)(`%${city}%`) } : undefined,
                typeVehicle: vehicle ? { name: (0, typeorm_2.Like)(`%${vehicle}%`) } : undefined,
                vehicle: plate ? { plate: (0, typeorm_2.Like)(`%${plate.toUpperCase()}%`) } : undefined,
            },
            relations: {
                status: true,
                user: true,
                customer: true,
            },
        });
        return { requests: this.formatData(requests) };
    }
    async findOne(id) {
        const request = await this.requestRepository.findOne({
            where: { id }, relations: {
                status: true,
                addressId: true,
                company: true,
                assistants: true,
                user: true,
                contract: true,
                detail: true,
                externalAddress: true,
                requirements: true,
                instruments: true,
                vehicle: true,
                customer: true,
                driver: true,
                typeVehicle: true,
                capacityVehicle: true,
                unity: true,
                tools: true,
            },
        });
        if (!request)
            throw new common_1.NotFoundException(`Request not found`);
        return { request: this.formatData([request])[0] };
    }
    async findOneToReception(id) {
        const request = await this.requestRepository.findOne({ where: { id }, relations: { vehicle: true, detail: true } });
        if (!request)
            throw new common_1.NotFoundException(`Request not found`);
        return request;
    }
    async update(id, updateRequestDto) {
        const { request } = await this.findOne(id);
        const params = Object.assign(Object.assign(Object.assign({}, request), updateRequestDto), { updatedAt: new Date() });
        try {
            await this.requestRepository.save(params);
            return { message: 'Request updated successfully' };
        }
        catch (e) {
            throw new common_1.BadRequestException('An occurred a error. Try again later', e.message);
        }
    }
    async remove(id) {
        await this.findOne(id);
        await this.requestDetailService.deleteByRequest(id);
        await this.requestRepository.delete({ id });
        return { message: 'Request delete successfully' };
    }
    async getByStatus() {
        try {
            return this.requestRepository
                .createQueryBuilder('request')
                .leftJoinAndSelect('request.status', 'status')
                .where('status.name = :status', { status: 'PROGRAMADO' })
                .getMany();
        }
        catch (e) {
            console.log('ERROR TO GET REQUESTS BY STATUS');
            console.log(e);
            return [];
        }
    }
    async getByDriver(user) {
        return this.requestRepository
            .createQueryBuilder('request')
            .leftJoinAndSelect('request.driver', 'driver')
            .leftJoinAndSelect('request.status', 'status')
            .leftJoinAndSelect('request.addressId', 'address')
            .leftJoinAndSelect('request.detail', 'detail')
            .leftJoinAndSelect('detail.maeId', 'mae')
            .leftJoinAndSelect('request.unity', 'unity')
            .where('status.name like :status AND driver.user = :userId', {
            status: '%PROGRAMADO%',
            userId: user.id,
        })
            .getMany();
    }
    async generatePdf(id) {
        const source = fs.readFileSync(`${this.configService.get('PATH_TEMPLATES')}/manifest.html`, 'utf-8');
        const data = await this.dataToDocuments(id);
        handlebars.registerHelper('inc', function (value, options) {
            return parseInt(value) + 1;
        });
        const template = handlebars.compile(source);
        const html = template(data);
        const date = new Date().getTime();
        const name = path.join(os.tmpdir(), `Proforma ${data.proforma} ${date}.pdf`);
        const browser = await puppeteer.launch({
            args: ['--no-sandbox'],
            headless: true,
        });
        const page = await browser.newPage();
        await page.goto(`data:text/html;charset=UTF-8,${html}`, { waitUntil: 'networkidle0' });
        const buffer = await page.pdf({ path: name, width: 1000, height: 1850, margin: { top: 20, bottom: 30 } });
        const base64 = buffer.toString('base64');
        return { data: `data:application/pdf;base64,${base64}` };
    }
    async generateXML(id) {
        const data = await this.dataToDocuments(id);
        const { generatedXml: xml, nameFile: name } = this.generateDataToXML(data);
        const path = `./${data.numRequest}.xml`;
        (0, fs_1.writeFileSync)(path, xml);
        const buffer = (0, fs_1.readFileSync)(path);
        (0, fs_1.rmSync)(path);
        return { data: buffer.toString('base64'), name: 'GR' + `${name}.xml` };
    }
    async findByPlate(plate) {
        const currentDate = new Date().toLocaleString('eu-EU', {
            timeZone: 'America/Guayaquil',
        });
        const initialDate = new Date(currentDate);
        initialDate.setDate(initialDate.getDate() - 1);
        const endDate = new Date(initialDate);
        endDate.setDate(endDate.getDate() + 1);
        const request = await this.requestRepository.findOne({
            where: {
                vehicle: { plate },
                status: { name: (0, typeorm_2.Like)('%PROGRAMADO%') },
                estimatedDate: (0, typeorm_2.Between)(initialDate, endDate),
            },
        });
        if (!request && !(request === null || request === void 0 ? void 0 : request.estimatedDate))
            throw new common_1.BadRequestException('El vehiculo no se encuentra');
        return request;
    }
    async sendAlert(body) {
        try {
            this.webSocketGateway.sendPanicAlert(body);
        }
        catch (error) {
            console.log(error);
        }
        return { message: "Alerta enviada" };
    }
    async sendLocation(body) {
        try {
            this.webSocketGateway.sendLocation(body);
        }
        catch (error) {
            console.log(error);
        }
        return { message: "Ubicacion enviada" };
    }
    generateDataToXML(data) {
        const [day, month, year] = new Date().toLocaleString('es-EC', {
            timeZone: 'America/Guayaquil',
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        }).split('/');
        const [hour, minutes, seconds] = new Date(data.createdAt).toLocaleString('es-EC', {
            timeZone: 'America/Guayaquil',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).split(':');
        const formatWithdrawalDate = this.formatDate(data.withdrawalDate);
        const formatCreatedDate = this.formatDate(data.createdAt);
        console.log(data.estimatedDate);
        const estimatedDate = data.estimatedDate || data.withdrawalDate;
        const formatEstimatedDate = this.formatDate(estimatedDate);
        const formatDay = `${day}${month}${year}`;
        const formatHour = `${hour}${minutes}${seconds}`;
        const TYPE_DOCUMENT = '06';
        const TYPE_ENVIROMENT = '2';
        const TYPE_EMSION = '1';
        const sequentialNumber = this.generateSerial(data.id, 9);
        const nameFile = `1791414713001` + '001' + '001' + `${sequentialNumber}` + `${formatDay}` + `${formatHour}`;
        const generatedXml = this.formatXml(TYPE_ENVIROMENT, TYPE_EMSION, data.razonSocial, data.commercialName, data.ruc, TYPE_DOCUMENT, sequentialNumber, data.mainAddress, data.direction, data.companyAddress, data.company, data.companyRuc, formatWithdrawalDate, data.placa, data.addressName, data.driverRUC, data.driverPhone, data.driverEmail, data.numRequest, data.requests, formatCreatedDate, formatEstimatedDate);
        return { generatedXml, nameFile };
    }
    formatDate(date) {
        return new Date(date).toLocaleString('es-EC', {
            timeZone: 'America/Guayaquil',
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });
    }
    formatData(requests) {
        return requests.map(function (request) {
            const date = new Date(request.createdAt).toLocaleString('se-SE', { timeZone: 'America/Guayaquil' });
            return Object.assign(Object.assign({}, request), { user: { id: request.user.id, name: request.user.fullName }, createdAt: date });
        });
    }
    formatXml(environment, emision, razonSocial, commercialName, ruc, document, sequence, mainAddress, address, companyAddress, company, transportRuc, withdrawalDate, placa, companyName, driverRUC, driverPhone, driverEmail, numRequest, detail, createdAt, estimatedDate) {
        let setDetail = '';
        detail.forEach(item => {
            setDetail += `  
     <detalle>
          <codigoInterno>${item.maeId.name}</codigoInterno> 
          <codigoAdicional>${item.maeId.name}</codigoAdicional> 
          <descripcion>${item.maeId.description}</descripcion> 
          <cantidad>${item.weight}</cantidad>
      </detalle> `;
        });
        return `<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
    <guiaRemision id="comprobante" version="1.1.0">
    <infoTributaria>
    <razonSocial>INCINERACION RESIDUOS TOXICOS PELIGROSOS INCINEROX CIA. LTDA.</razonSocial>
    <nombreComercial>INCINEROX CIA. LTDA.</nombreComercial >
    <ruc>1791414713001</ruc>
    <estab>001</estab>
    <ptoEmi>001</ptoEmi>
    <secuencial>${sequence}</secuencial>
    <dirMatriz>${companyAddress}</dirMatriz>
    </infoTributaria>
    
    
    <infoGuiaRemision>
    <dirEstablecimiento> </dirEstablecimiento>
    <dirPartida>${commercialName}</dirPartida>
    <razonSocialTransportista>${company}</razonSocialTransportista>
    <tipoIdentificacionTransportista>04</tipoIdentificacionTransportista>
    <rucTransportista>1792419611001</rucTransportista>
    <obligadoContabilidad>SI</obligadoContabilidad>
    <contribuyenteEspecial>181</contribuyenteEspecial>
    <fechaIniTransporte>${withdrawalDate}</fechaIniTransporte>
    <fechaFinTransporte>${estimatedDate}</fechaFinTransporte>
    <placa>${placa}</placa>
    </infoGuiaRemision>
    
    <destinatarios>
    <destinatario>
    <identificacionDestinatario>1791414713001</identificacionDestinatario>
    <razonSocialDestinatario>${companyName}</razonSocialDestinatario>
    <dirDestinatario>${companyAddress}</dirDestinatario>
    <motivoTraslado>Tratamiento de residuos peligrosos</motivoTraslado>
    <ruta>QUITO, PANAMERICANA SUR KM 10 1/2, SECTOR EL BLANQUEADO - BARROTIETA</ruta>
    <fechaEmisionDocSustento>${createdAt}</fechaEmisionDocSustento>
    <detalles>` +
            setDetail
            +
                `
    </detalles> 
    </destinatario> 
    </destinatarios>
    <infoAdicional>
    <campoAdicional nombre="NOMBRE">${driverPhone}</campoAdicional>
    <campoAdicional nombre="CI">${driverRUC}</campoAdicional>
    <campoAdicional nombre="EMAIL">tecnologia@incinerox.com.ec</campoAdicional>
    <campoAdicional nombre="MANIFIESTO">${numRequest}</campoAdicional>
    </infoAdicional>
    </guiaRemision>
    `;
    }
    moduleEleven(code) {
        const values = code.split('').reverse();
        const mod = 11;
        let valueToMultiply = 2;
        const calculate = values.map((item) => +item).map((item) => {
            if (valueToMultiply === 8)
                valueToMultiply = 2;
            const total = +item * valueToMultiply;
            valueToMultiply++;
            return total;
        }).reduce((a, b) => a + b);
        const digit = calculate % mod;
        const total = mod - digit;
        console.log(total);
        if (total === 11)
            return 0;
        if (total === 10)
            return 1;
        return total;
    }
    generateSerial(id, size) {
        let serial = `${id}`;
        let total = id.toString().length;
        let zeros = '';
        while (total < size) {
            zeros += '0';
            total++;
        }
        return zeros + serial;
    }
    async dataToDocuments(id) {
        const { request } = await this.findOne(id);
        const customer = request.customer;
        const address = request.addressId;
        const mainAddress = customer.addresses.filter(item => item.isMain)[0];
        const vehicle = request.vehicle;
        const driver = request.driver;
        const typeVehicle = vehicle === null || vehicle === void 0 ? void 0 : vehicle.typeVehicle;
        const addVehicle = request.detail.map(item => (Object.assign(Object.assign({}, item), { unity: request.unity })));
        const companyTransport = vehicle.company;
        const externalAddress = request.externalAddress;
        const company = request.company;
        return {
            id: request.id,
            numRequest: `B${this.generateSerial(request.numRequest, 7)}`,
            proforma: request === null || request === void 0 ? void 0 : request.proforma,
            razonSocial: customer === null || customer === void 0 ? void 0 : customer.businessName,
            commercialName: customer === null || customer === void 0 ? void 0 : customer.commercialName,
            mainAddress: mainAddress === null || mainAddress === void 0 ? void 0 : mainAddress.instructions,
            licence: address === null || address === void 0 ? void 0 : address.licence,
            wastedRegister: address === null || address === void 0 ? void 0 : address.wastedRegister,
            ruc: address === null || address === void 0 ? void 0 : address.ruc,
            addressName: company === null || company === void 0 ? void 0 : company.name,
            companyAddress: company === null || company === void 0 ? void 0 : company.address,
            companyLicence: company === null || company === void 0 ? void 0 : company.licence,
            direction: address === null || address === void 0 ? void 0 : address.instructions,
            directionWithdrawal: request === null || request === void 0 ? void 0 : request.addressBranch,
            province: request.provincia || (address === null || address === void 0 ? void 0 : address.province),
            canton: (request === null || request === void 0 ? void 0 : request.canton) || (address === null || address === void 0 ? void 0 : address.canton),
            parroquia: (request === null || request === void 0 ? void 0 : request.city) || (address === null || address === void 0 ? void 0 : address.city),
            technicalName: address === null || address === void 0 ? void 0 : address.technicalName,
            technicalPhone: address === null || address === void 0 ? void 0 : address.technicalPhone,
            technicalEmail: address === null || address === void 0 ? void 0 : address.technicalEmail,
            requests: addVehicle,
            vehicle: vehicle === null || vehicle === void 0 ? void 0 : vehicle.id,
            placa: vehicle === null || vehicle === void 0 ? void 0 : vehicle.plate,
            vehicleLicence: companyTransport === null || companyTransport === void 0 ? void 0 : companyTransport.licence,
            vehicleDirection: companyTransport === null || companyTransport === void 0 ? void 0 : companyTransport.address,
            driver: driver === null || driver === void 0 ? void 0 : driver.fullName,
            driverPhone: driver === null || driver === void 0 ? void 0 : driver.phone,
            driverRUC: driver === null || driver === void 0 ? void 0 : driver.ci,
            driverEmail: driver === null || driver === void 0 ? void 0 : driver.email,
            typeVehicle: typeVehicle === null || typeVehicle === void 0 ? void 0 : typeVehicle.name,
            observation: request === null || request === void 0 ? void 0 : request.observation,
            company: companyTransport === null || companyTransport === void 0 ? void 0 : companyTransport.name,
            companyRuc: companyTransport === null || companyTransport === void 0 ? void 0 : companyTransport.ruc,
            licenceCompany: companyTransport === null || companyTransport === void 0 ? void 0 : companyTransport.licence,
            companyDirection: companyTransport === null || companyTransport === void 0 ? void 0 : companyTransport.address,
            externalName: externalAddress === null || externalAddress === void 0 ? void 0 : externalAddress.name,
            externalPhone: externalAddress === null || externalAddress === void 0 ? void 0 : externalAddress.phone,
            externalRepresentative: externalAddress === null || externalAddress === void 0 ? void 0 : externalAddress.representative,
            externalLicence: externalAddress === null || externalAddress === void 0 ? void 0 : externalAddress.licence,
            withdrawalDate: request.withdrawalDate,
            createdAt: request.createdAt,
            estimatedDate: request === null || request === void 0 ? void 0 : request.estimatedDate,
        };
    }
};
RequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(request_entity_1.Requests)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        request_detail_mae_service_1.RequestDetailMaeService,
        config_1.ConfigService,
        websocket_gateway_1.WebsocketGateway])
], RequestService);
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map