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
exports.MaeService = void 0;
const common_1 = require("@nestjs/common");
const mae_entity_1 = require("./entities/mae.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const class_validator_1 = require("class-validator");
let MaeService = class MaeService {
    constructor(maeRepository) {
        this.maeRepository = maeRepository;
    }
    async create(createMaeDto) {
        try {
            const mae = this.maeRepository.create(createMaeDto);
            await this.maeRepository.save(mae);
            return { mae };
        }
        catch (e) {
            console.log('ERROR TO CREATE MAE');
            console.log(e.detail);
            throw new common_1.BadRequestException(e.detail);
        }
    }
    async findAll() {
        const mae = await this.maeRepository.find();
        return { mae };
    }
    async findOne(param) {
        if ((0, class_validator_1.isUUID)(param)) {
            const mae = await this.maeRepository.findOneBy({ id: param });
            if (!mae)
                throw new common_1.NotFoundException(`Mae not found`);
            return { mae };
        }
        const maeByName = await this.maeRepository
            .createQueryBuilder('mae')
            .leftJoinAndSelect('mae.waste', 'waste')
            .where('LOWER(mae.name) like LOWER(:name)', { name: `%${param}%` })
            .getMany();
        if (maeByName.length !== 0)
            return { mae: maeByName };
        throw new common_1.NotFoundException(`Mae not found`);
    }
    async update(id, updateMaeDto) {
        const { mae } = await this.findOne(id);
        const params = Object.assign(Object.assign({}, mae), { updateMaeDto, updatedAt: new Date() });
        await this.maeRepository.save(params);
        return { message: 'Mae updated successfully' };
    }
    async remove(id) {
        await this.findOne(id);
        await this.maeRepository.delete({ id });
        return { message: 'Mae deleted successfully' };
    }
};
MaeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(mae_entity_1.Mae)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MaeService);
exports.MaeService = MaeService;
//# sourceMappingURL=mae.service.js.map