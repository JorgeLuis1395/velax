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
exports.Worksheet = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
const shipping_guide_entity_1 = require("../../shipping-guide/entities/shipping-guide.entity");
let Worksheet = class Worksheet {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Worksheet.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'worksheet_status' }),
    __metadata("design:type", Object)
], Worksheet.prototype, "worksheetStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.OneToMany)(() => shipping_guide_entity_1.ShippingGuide, (shippingGuide) => shippingGuide.worksheetId, { nullable: true, cascade: ['insert', 'update', 'remove'] }),
    (0, typeorm_1.JoinColumn)({ name: 'guide' }),
    __metadata("design:type", Array)
], Worksheet.prototype, "guide", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'fecha' }),
    __metadata("design:type", Date)
], Worksheet.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'placa' }),
    __metadata("design:type", String)
], Worksheet.prototype, "placa", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'numero' }),
    __metadata("design:type", String)
], Worksheet.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'chofer' }),
    __metadata("design:type", String)
], Worksheet.prototype, "chofer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: new Date(), name: 'created_at' }),
    __metadata("design:type", Date)
], Worksheet.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: new Date(), name: 'updated_at' }),
    __metadata("design:type", Date)
], Worksheet.prototype, "updatedAt", void 0);
Worksheet = __decorate([
    (0, typeorm_1.Entity)('worksheet')
], Worksheet);
exports.Worksheet = Worksheet;
//# sourceMappingURL=worksheet.entity.js.map