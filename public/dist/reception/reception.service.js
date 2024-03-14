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
exports.ReceptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reception_entity_1 = require("./entities/reception.entity");
const request_service_1 = require("../request/request.service");
let ReceptionService = class ReceptionService {
    constructor(receptionRepository, requestService) {
        this.receptionRepository = receptionRepository;
        this.requestService = requestService;
    }
    async create(createReceptionInput) {
        const request = await this.requestService.findByPlate(createReceptionInput.plate);
        const data = Object.assign(Object.assign({}, createReceptionInput), { request: +request.id, numRequest: request.numRequest });
        const reception = this.receptionRepository.create(data);
        try {
            await this.receptionRepository.save(reception);
        }
        catch (e) {
            console.log(e);
            throw new common_1.BadRequestException(e === null || e === void 0 ? void 0 : e.detail);
        }
        return reception;
    }
    async findAll() {
        const receptions = await this.receptionRepository.find();
        return receptions.map((item) => this.parseIdRequestToInt(item));
    }
    async findOne(id) {
        console.log(id);
        const reception = await this.receptionRepository.findOneByOrFail({ id });
        return this.parseIdRequestToInt(reception);
    }
    async update(id, updateReceptionInput) {
        var _a, _b;
        const reception = await this.findOne(id);
        const request = await this.requestService.findOneToReception(reception.request);
        const vehicle = request.vehicle;
        const totalWeightRequest = (_a = request.detail) === null || _a === void 0 ? void 0 : _a.map((item) => item.weight).reduce((a, b) => a + b);
        this.validateTotalWeight((_b = vehicle === null || vehicle === void 0 ? void 0 : vehicle.weigth) !== null && _b !== void 0 ? _b : 0, totalWeightRequest, updateReceptionInput.totalWeight);
        const data = Object.assign(Object.assign(Object.assign({}, reception), updateReceptionInput), { updatedAt: new Date() });
        await this.receptionRepository.save(data);
        return data;
    }
    async remove(id) {
        await this.findOne(id);
        await this.receptionRepository.delete({ id });
        return `Transacción procesada con éxito`;
    }
    parseIdRequestToInt(reception) {
        const request = reception.request;
        reception.request = +request.id;
        return reception;
    }
    validateTotalWeight(weightVehicle, weightRequest, weightReception) {
        const estimatedWeight = weightRequest + weightVehicle;
        const marginError = estimatedWeight * 0.05;
        const maxTotal = estimatedWeight + marginError;
        const minTotal = estimatedWeight - marginError;
        const isValidWeight = weightReception <= maxTotal && weightReception >= minTotal;
        if (!isValidWeight) {
            throw new common_1.BadRequestException('El peso esta fuera del rango permitido');
        }
    }
};
ReceptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reception_entity_1.Reception)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        request_service_1.RequestService])
], ReceptionService);
exports.ReceptionService = ReceptionService;
//# sourceMappingURL=reception.service.js.map