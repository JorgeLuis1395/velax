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
exports.DetailCatalogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const detail_catalog_entity_1 = require("./entities/detail-catalog.entity");
const typeorm_2 = require("typeorm");
let DetailCatalogService = class DetailCatalogService {
    constructor(detailCatalogRepository) {
        this.detailCatalogRepository = detailCatalogRepository;
    }
    async create(createDetailCatalogDto) {
        const detailCatalog = this.detailCatalogRepository.create(createDetailCatalogDto);
        try {
            await this.detailCatalogRepository.save(detailCatalog);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message.toString());
        }
        return { detailCatalog };
    }
    async findAll() {
        const detailsCatalog = await this.detailCatalogRepository.find();
        return { detailsCatalog };
    }
    async findOne(id) {
        const detailCatalog = await this.detailCatalogRepository.findOneBy({ id });
        if (!detailCatalog)
            throw new common_1.NotFoundException(`Detail catalog not found`);
        return { detailCatalog };
    }
    async update(id, updateDetailCatalogDto) {
        const { detailCatalog } = await this.findOne(id);
        const params = Object.assign(Object.assign(Object.assign({}, detailCatalog), updateDetailCatalogDto), { updatedAt: new Date() });
        await this.detailCatalogRepository.save(params);
        return { message: 'Detail Catalog updated successfully' };
    }
    async remove(id) {
        await this.findOne(id);
        await this.detailCatalogRepository.delete({ id });
        return { message: 'Detail catalog deleted successfully' };
    }
};
DetailCatalogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(detail_catalog_entity_1.DetailCatalog)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DetailCatalogService);
exports.DetailCatalogService = DetailCatalogService;
//# sourceMappingURL=detail-catalog.service.js.map