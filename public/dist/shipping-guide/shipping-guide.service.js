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
exports.ShippingGuideService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const shipping_guide_entity_1 = require("./entities/shipping-guide.entity");
let ShippingGuideService = class ShippingGuideService {
    constructor(shippingGuideRepository) {
        this.shippingGuideRepository = shippingGuideRepository;
    }
    async create(createWorksheetDto) {
        try {
            const shippingGuide = this.shippingGuideRepository.create(createWorksheetDto);
            await this.shippingGuideRepository.save(shippingGuide);
            return { shippingGuide };
        }
        catch (e) {
            console.log('Error to create shippingGuide');
            console.log(e);
            throw new common_1.BadRequestException({ error: e.detail });
        }
    }
    async findAll() {
        const shippingGuides = await this.shippingGuideRepository.find();
        return { shippingGuides };
    }
    async findOne(id) {
        const shippingGuide = await this.shippingGuideRepository.findOneBy({ id });
        if (!shippingGuide)
            throw new common_1.NotFoundException(`Worksheet not found`);
        return { shippingGuide };
    }
    async update(id, updateWorksheetDto) {
        const { shippingGuide } = await this.findOne(id);
        const params = Object.assign(Object.assign(Object.assign({}, shippingGuide), updateWorksheetDto), { updatedAt: new Date() });
        await this.shippingGuideRepository.save(params);
        return { message: 'Worksheet updated successfully' };
    }
    ;
    async remove(id) {
        await this.findOne(id);
        await this.shippingGuideRepository.delete({ id });
        return { message: 'Worksheet deleted successfully' };
    }
};
ShippingGuideService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shipping_guide_entity_1.ShippingGuide)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ShippingGuideService);
exports.ShippingGuideService = ShippingGuideService;
//# sourceMappingURL=shipping-guide.service.js.map