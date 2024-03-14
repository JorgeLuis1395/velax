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
exports.InstrumentsRequestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const instruments_request_entity_1 = require("./entities/instruments-request.entity");
const typeorm_2 = require("typeorm");
let InstrumentsRequestService = class InstrumentsRequestService {
    constructor(instrumentRequest) {
        this.instrumentRequest = instrumentRequest;
    }
    async create(createInstrumentsRequestInput) {
        try {
            const instruments = this.instrumentRequest.create(createInstrumentsRequestInput);
            await this.instrumentRequest.save(instruments);
            return instruments;
        }
        catch (e) {
            console.log('ERROR TO CREATE INSTRUMENT');
            console.log(e.detail);
            throw new common_1.BadRequestException(e.detail);
        }
    }
    async findAll(id) {
        return this.instrumentRequest.find({ where: { request: id } });
    }
    async findOne(id) {
        const data = await this.instrumentRequest.findOneBy({ id });
        if (!data)
            throw new common_1.NotFoundException('Instrument request not found');
        return data;
    }
    async update(id, updateInstrumentsRequestInput) {
        const data = await this.findOne(id);
        const updatedInstrument = Object.assign(Object.assign(Object.assign({}, data), updateInstrumentsRequestInput), { updatedAt: new Date() });
        await this.instrumentRequest.save(updatedInstrument);
        return updatedInstrument;
    }
};
InstrumentsRequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instruments_request_entity_1.InstrumentsRequest)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InstrumentsRequestService);
exports.InstrumentsRequestService = InstrumentsRequestService;
//# sourceMappingURL=instruments-request.service.js.map