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
exports.WorksheetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const worksheet_entity_1 = require("./entities/worksheet.entity");
let WorksheetService = class WorksheetService {
    constructor(worksheetRepository) {
        this.worksheetRepository = worksheetRepository;
    }
    async create(createWorksheetDto) {
        try {
            let worksheet = this.worksheetRepository.create(createWorksheetDto);
            worksheet.guide = createWorksheetDto.guide;
            await this.worksheetRepository.save(worksheet);
            return { worksheet };
        }
        catch (e) {
            console.log('Error to create worksheet');
            console.log(e);
            throw new common_1.BadRequestException({ error: e.detail });
        }
    }
    async findAll(status) {
        const worksheets = await this.worksheetRepository.find({
            where: { worksheetStatus: { id: status } },
            relations: { guide: true, worksheetStatus: true }
        });
        return { worksheets };
    }
    async findOne(id) {
        const worksheet = await this.worksheetRepository.findOne({ where: { id }, relations: { guide: true } });
        if (!worksheet)
            throw new common_1.NotFoundException(`Worksheet not found`);
        return { worksheet };
    }
    async update(id, updateWorksheetDto) {
        const { worksheet } = await this.findOne(id);
        const params = Object.assign(Object.assign(Object.assign({}, worksheet), updateWorksheetDto), { updatedAt: new Date() });
        await this.worksheetRepository.save(params);
        return { message: 'Worksheet updated successfully' };
    }
    ;
    async remove(id) {
        await this.findOne(id);
        await this.worksheetRepository.delete({ id });
        return { message: 'Worksheet deleted successfully' };
    }
};
WorksheetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(worksheet_entity_1.Worksheet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WorksheetService);
exports.WorksheetService = WorksheetService;
//# sourceMappingURL=worksheet.service.js.map