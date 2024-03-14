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
exports.Driver = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const detail_catalog_entity_1 = require("../../../detail-catalog/entities/detail-catalog.entity");
const request_entity_1 = require("../../../request/entities/request.entity");
const user_entity_1 = require("../../../auth/entities/user.entity");
const vehicle_entity_1 = require("../../vehicle/entities/vehicle.entity");
let Driver = class Driver {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Driver.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'full_name' }),
    __metadata("design:type", String)
], Driver.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Driver.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Driver.prototype, "ci", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Driver.prototype, "licence", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Driver.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Driver.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'type_id' }),
    __metadata("design:type", String)
], Driver.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Driver.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_entity_1.Requests, requests => requests.driver),
    __metadata("design:type", Array)
], Driver.prototype, "requests", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", Object)
], Driver.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => vehicle_entity_1.Vehicle, vehicle => vehicle.drivers, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'vehicle_id' }),
    __metadata("design:type", Object)
], Driver.prototype, "vehicle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: new Date(), name: 'created_at' }),
    __metadata("design:type", Date)
], Driver.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: new Date(), name: 'updated_at' }),
    __metadata("design:type", Date)
], Driver.prototype, "updatedAt", void 0);
Driver = __decorate([
    (0, typeorm_1.Entity)('drivers')
], Driver);
exports.Driver = Driver;
//# sourceMappingURL=driver.entity.js.map