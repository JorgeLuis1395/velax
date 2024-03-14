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
exports.InstrumentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const instrument_entity_1 = require("./entities/instrument.entity");
const typeorm_2 = require("typeorm");
let InstrumentsService = class InstrumentsService {
    constructor(instrumentRepository) {
        this.instrumentRepository = instrumentRepository;
    }
    async create(createInstrumentDto) {
        try {
            const instrument = this.instrumentRepository.create(createInstrumentDto);
            await this.instrumentRepository.save(instrument);
            return { instrument };
        }
        catch (e) {
            console.log('Error to create instrument');
            console.log(e);
            throw new common_1.BadRequestException({ error: e.detail });
        }
    }
    async findAll() {
        const instruments = await this.instrumentRepository.find();
        return { instruments };
    }
    async findOne(id) {
        const instrument = await this.instrumentRepository.findOneBy({ id });
        if (!instrument)
            throw new common_1.NotFoundException(`Instrument not found`);
        return { instrument };
    }
    async update(id, updateInstrumentDto) {
        const { instrument } = await this.findOne(id);
        const params = Object.assign(Object.assign(Object.assign({}, instrument), updateInstrumentDto), { updatedAt: new Date() });
        await this.instrumentRepository.save(params);
        return { message: 'Instrument updated successfully' };
    }
    ;
    async remove(id) {
        await this.findOne(id);
        await this.instrumentRepository.delete({ id });
        return { message: 'Instrument deleted successfully' };
    }
};
InstrumentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instrument_entity_1.Instrument)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InstrumentsService);
exports.InstrumentsService = InstrumentsService;
//# sourceMappingURL=instruments.service.js.map