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
exports.ContractDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const contract_detail_entity_1 = require("./entities/contract-detail.entity");
const typeorm_2 = require("typeorm");
let ContractDetailService = class ContractDetailService {
    constructor(contractDetailRepository) {
        this.contractDetailRepository = contractDetailRepository;
    }
    async create(createContractDetailInput) {
        const contract = this.contractDetailRepository.create(createContractDetailInput);
        contract.balance = contract.weight;
        return this.contractDetailRepository.save(contract);
    }
    async findOne(id) {
        const detail = await this.contractDetailRepository.findOneBy({ id });
        if (!detail)
            throw new common_1.NotFoundException(`El mae ingresado no se pudo encontrar en el contrato indicado`);
        return detail;
    }
    async findByGroupId(id) {
        return await this.contractDetailRepository.find({ where: { groupId: id } });
    }
    async updateBalance(id, total) {
        const detail = await this.findOne(id);
        const balance = detail.balance - (total);
        const mae = detail.mae;
        if (balance < 0) {
            throw new common_1.BadRequestException(`No tienes saldo para realizar la transación con el mae  ${mae.name}`);
        }
        let data;
        if (detail.groupId) {
            await this.contractDetailRepository.update({ groupId: detail.groupId }, { balance, updatedAt: new Date() });
        }
        else {
            data = Object.assign(Object.assign({}, detail), { balance, updatedAt: new Date() });
            await this.contractDetailRepository.save(data);
        }
        return `Balance actualizado correctamente`;
    }
    async updateContractDetail(id, updateContractDetail) {
        const detail = await this.findOne(id);
        const data = Object.assign(Object.assign({}, detail), updateContractDetail);
        await this.contractDetailRepository.save(data);
        return 'Detalle actualizado correctamente';
    }
    async remove(id) {
        await this.findOne(id);
        await this.contractDetailRepository.delete({ id });
        return `Detalle borrado correctamente`;
    }
};
ContractDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contract_detail_entity_1.ContractDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContractDetailService);
exports.ContractDetailService = ContractDetailService;
//# sourceMappingURL=contract-detail.service.js.map