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
exports.FixReceptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const fix_reception_entity_1 = require("./entities/fix-reception.entity");
const typeorm_2 = require("@nestjs/typeorm");
const request_detail_mae_service_1 = require("../request-detail-mae/request-detail-mae.service");
const websocket_gateway_1 = require("../websocket/websocket.gateway");
let FixReceptionService = class FixReceptionService {
    constructor(fixReceptionRepository, requestDetailMaeService, webSocketGateway) {
        this.fixReceptionRepository = fixReceptionRepository;
        this.requestDetailMaeService = requestDetailMaeService;
        this.webSocketGateway = webSocketGateway;
    }
    async create(createFixReceptionInput) {
        try {
            const data = this.fixReceptionRepository.create(createFixReceptionInput);
            this.webSocketGateway.sendNotification(data.request);
            await this.fixReceptionRepository.save(data);
            return data;
        }
        catch (e) {
            console.log('[ERROR] Can not crated fix reception');
            console.log(e);
            throw new common_1.BadRequestException('No se pudo completar la transaccion', { cause: e });
        }
    }
    async findAll() {
        try {
            return this.fixReceptionRepository.find({ loadRelationIds: { relations: ['request'] } });
        }
        catch (e) {
            console.log('[ERROR] Can not find all fix reception');
            console.log(e);
            throw new common_1.BadRequestException('No se pudo completar la transaccion', { cause: e });
        }
    }
    async findOne(id) {
        const data = await this.fixReceptionRepository.findOne({ where: { id }, loadRelationIds: { relations: ['request'] } });
        if (!data)
            throw new common_1.NotFoundException('No se encontro ningun resultado');
        return data;
    }
    async update(id, updateFixReceptionInput) {
        const reception = await this.findOne(id);
        if (updateFixReceptionInput.status)
            await this.requestDetailMaeService.updateWeight(reception.request);
        const data = Object.assign(Object.assign(Object.assign({}, reception), updateFixReceptionInput), { updatedAt: new Date() });
        await this.fixReceptionRepository.save(data);
        return 'La transaccion se completo correctamente';
    }
    remove(id) {
        return `This action removes a #${id} fixReception`;
    }
};
FixReceptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(fix_reception_entity_1.FixReception)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        request_detail_mae_service_1.RequestDetailMaeService,
        websocket_gateway_1.WebsocketGateway])
], FixReceptionService);
exports.FixReceptionService = FixReceptionService;
//# sourceMappingURL=fix-reception.service.js.map