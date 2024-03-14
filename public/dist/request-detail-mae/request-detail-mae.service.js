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
exports.RequestDetailMaeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const request_detail_mae_entity_1 = require("./entities/request-detail-mae.entity");
const typeorm_2 = require("typeorm");
const contract_detail_service_1 = require("../contract-detail/contract-detail.service");
let RequestDetailMaeService = class RequestDetailMaeService {
    constructor(requestMaeDetailRepository, contractDetailService) {
        this.requestMaeDetailRepository = requestMaeDetailRepository;
        this.contractDetailService = contractDetailService;
    }
    async create(createRequestDetailMaeDto) {
        if (createRequestDetailMaeDto.detailContractId) {
            await this.contractDetailService.updateBalance(createRequestDetailMaeDto.detailContractId, createRequestDetailMaeDto.weight);
        }
        try {
            const detail = this.requestMaeDetailRepository.create(createRequestDetailMaeDto);
            detail.originalTotalWeight = createRequestDetailMaeDto.weight;
            await this.requestMaeDetailRepository.save(detail);
            return { detail };
        }
        catch (e) {
            console.log('ERROR TO CREATE DETAIL');
            console.log(e);
            throw new common_1.BadRequestException(e.detail);
        }
    }
    async getByRequest(id) {
        try {
            return await this.requestMaeDetailRepository.findBy({ requestId: { id }, status: true });
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async update(id, updateRequestDetailMaeDto) {
        const detail = await this.requestMaeDetailRepository.findOneBy({ id });
        if (!detail)
            throw new common_1.NotFoundException(`Detail not  found`);
        if (updateRequestDetailMaeDto.detailContractId && updateRequestDetailMaeDto.weightReception) {
            const lastWeight = detail.weight;
            const newWeight = updateRequestDetailMaeDto.weightReception;
            const totalDiscount = newWeight - lastWeight;
            await this.contractDetailService.updateBalance(updateRequestDetailMaeDto.detailContractId, totalDiscount);
        }
        const params = Object.assign(Object.assign({}, detail), updateRequestDetailMaeDto);
        await this.requestMaeDetailRepository.save(params);
        return { message: 'Detail updated successfully ' };
    }
    async deleteByRequest(id) {
        await this.requestMaeDetailRepository.findOneBy({ requestId: +id });
        try {
            await this.requestMaeDetailRepository.delete({ requestId: +id });
        }
        catch (e) {
            console.log('error to delete detail catalog');
            console.log(e);
            throw new common_1.BadRequestException(`Can't not delete detail request`);
        }
    }
    async updateWeight(id) {
        try {
            const detail = await this.getByRequest(id);
            const updateDetail = detail.filter((item) => item.weightReception).map((item) => (Object.assign(Object.assign({}, item), { weight: item.weightReception, originalTotalWeight: item.weight })));
            await this.requestMaeDetailRepository.save(updateDetail);
            return 'Transaction completed successfully';
        }
        catch (e) {
            console.log('[ERROR]: Can not updated weight reception');
            console.log(e);
            throw new common_1.BadRequestException('No se pudo completar la transaccion', { cause: e });
        }
    }
};
RequestDetailMaeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(request_detail_mae_entity_1.RequestDetailMae)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        contract_detail_service_1.ContractDetailService])
], RequestDetailMaeService);
exports.RequestDetailMaeService = RequestDetailMaeService;
//# sourceMappingURL=request-detail-mae.service.js.map