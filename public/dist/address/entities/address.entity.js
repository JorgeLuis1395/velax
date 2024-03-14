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
exports.Address = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../../customer/entities/customer.entity");
const request_entity_1 = require("../../request/entities/request.entity");
const swagger_1 = require("@nestjs/swagger");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
let Address = class Address {
    parseAddressData() {
        this.city = this.city.toLowerCase();
        this.province = this.province.toLowerCase();
        this.canton = this.canton.toLowerCase();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "ruc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Address.prototype, "canton", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "coords", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "instructions", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', name: 'technical_name' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "technicalName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', name: 'technical_phone' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "technicalPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', name: 'technical_email' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "technicalEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'phone_office' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "phoneOffice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "representative", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'S/L' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "licence", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'S/N', name: 'wasted_register' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Address.prototype, "wastedRegister", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, customer => customer.addresses),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", String)
], Address.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_entity_1.Requests, (requests) => requests.addressId),
    __metadata("design:type", Array)
], Address.prototype, "request", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date(), name: 'created_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Address.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'segment_id' }),
    __metadata("design:type", String)
], Address.prototype, "segment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Address.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Address.prototype, "isMain", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Address.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Address.prototype, "parseAddressData", null);
Address = __decorate([
    (0, typeorm_1.Entity)('addresses')
], Address);
exports.Address = Address;
//# sourceMappingURL=address.entity.js.map