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
exports.Vehicle = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const detail_catalog_entity_1 = require("../../../detail-catalog/entities/detail-catalog.entity");
const request_entity_1 = require("../../../request/entities/request.entity");
const transport_company_entity_1 = require("../../transport-company/entities/transport-company.entity");
const driver_entity_1 = require("../../driver/entities/driver.entity");
let Vehicle = class Vehicle {
    formatData() {
        this.plate = this.plate.toUpperCase();
    }
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Vehicle.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "plate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vehicle.prototype, "cylinder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'type_vehicle_id' }),
    __metadata("design:type", Object)
], Vehicle.prototype, "typeVehicle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'brand_id' }),
    __metadata("design:type", String)
], Vehicle.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'unity_id' }),
    __metadata("design:type", String)
], Vehicle.prototype, "unity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Vehicle.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: new Date(), name: 'created_at' }),
    __metadata("design:type", Date)
], Vehicle.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_entity_1.Requests, request => request.vehicle),
    __metadata("design:type", Array)
], Vehicle.prototype, "request", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: new Date(), name: 'updated_at' }),
    __metadata("design:type", Date)
], Vehicle.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => transport_company_entity_1.TransportCompany, transport => transport.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", Object)
], Vehicle.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true, type: 'float' }),
    __metadata("design:type", Number)
], Vehicle.prototype, "weigth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.OneToMany)(() => driver_entity_1.Driver, driver => driver.vehicle, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'driver_id' }),
    __metadata("design:type", Array)
], Vehicle.prototype, "drivers", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Vehicle.prototype, "formatData", null);
Vehicle = __decorate([
    (0, typeorm_1.Entity)('vehicles')
], Vehicle);
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.entity.js.map