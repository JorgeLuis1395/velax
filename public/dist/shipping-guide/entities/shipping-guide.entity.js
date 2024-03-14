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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingGuide = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
const worksheet_entity_1 = require("../../worksheet/entities/worksheet.entity");
let ShippingGuide = class ShippingGuide {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ShippingGuide.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShippingGuide.prototype, "clientName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShippingGuide.prototype, "guideAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShippingGuide.prototype, "lat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShippingGuide.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => worksheet_entity_1.Worksheet, (worksheet) => worksheet.guide, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'worksheet_id' }),
    __metadata("design:type", Object)
], ShippingGuide.prototype, "worksheetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShippingGuide.prototype, "guideNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'delivery_status' }),
    __metadata("design:type", Object)
], ShippingGuide.prototype, "deliveryStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShippingGuide.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShippingGuide.prototype, "detail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: new Date(), name: 'created_at' }),
    __metadata("design:type", Date)
], ShippingGuide.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: new Date(), name: 'updated_at' }),
    __metadata("design:type", Date)
], ShippingGuide.prototype, "updatedAt", void 0);
ShippingGuide = __decorate([
    (0, typeorm_1.Entity)('shipping_guide')
], ShippingGuide);
exports.ShippingGuide = ShippingGuide;
//# sourceMappingURL=shipping-guide.entity.js.map