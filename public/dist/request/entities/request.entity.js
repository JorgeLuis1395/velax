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
exports.Requests = void 0;
const typeorm_1 = require("typeorm");
const address_entity_1 = require("../../address/entities/address.entity");
const customer_entity_1 = require("../../customer/entities/customer.entity");
const swagger_1 = require("@nestjs/swagger");
const request_detail_mae_entity_1 = require("../../request-detail-mae/entities/request-detail-mae.entity");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
const user_entity_1 = require("../../auth/entities/user.entity");
const vehicle_entity_1 = require("../../logistics/vehicle/entities/vehicle.entity");
const instruments_request_entity_1 = require("../../instruments-request/entities/instruments-request.entity");
const driver_entity_1 = require("../../logistics/driver/entities/driver.entity");
const external_address_entity_1 = require("../../external-addresses/entities/external-address.entity");
const company_entity_1 = require("../../companies/entities/company.entity");
const contract_entity_1 = require("../../contract/contract/entities/contract.entity");
let Requests = class Requests {
    setDate() {
        const date = new Date().toLocaleString('en-US', { timeZone: 'America/Guayaquil' });
        this.createdAt = new Date(date);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Requests.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id, { cascade: true, }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Requests.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.requests, { cascade: true, }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", Object)
], Requests.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Requests.prototype, "proforma", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, { cascade: true, }),
    (0, typeorm_1.JoinColumn)({ name: 'type_vehicle_id' }),
    __metadata("design:type", Object)
], Requests.prototype, "typeVehicle", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => address_entity_1.Address, (address) => address.request, { cascade: true, }),
    (0, typeorm_1.JoinColumn)({ name: 'address_id' }),
    __metadata("design:type", Object)
], Requests.prototype, "addressId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => external_address_entity_1.ExternalAddress, externalAddress => externalAddress.id),
    (0, typeorm_1.JoinColumn)({ name: 'external_address_id' }),
    __metadata("design:type", Object)
], Requests.prototype, "externalAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'withdrawal_time', nullable: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Requests.prototype, "withdrawalTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'withdrawal_date', nullable: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Requests.prototype, "withdrawalDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estimated_date', nullable: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Requests.prototype, "estimatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Requests.prototype, "confirmation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { cascade: true, }),
    (0, typeorm_1.JoinColumn)({ name: 'capacity_vehicle_id' }),
    __metadata("design:type", Object)
], Requests.prototype, "capacityVehicle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Requests.prototype, "observation", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Requests.prototype, "news", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_detail_mae_entity_1.RequestDetailMae, detail => detail.requestId),
    (0, typeorm_1.JoinColumn)({ name: 'detail' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Requests.prototype, "detail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => instruments_request_entity_1.InstrumentsRequest, instrumentRequest => instrumentRequest.request, { cascade: true, }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Requests.prototype, "instruments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog),
    (0, typeorm_1.JoinColumn)({ name: 'status_id' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], Requests.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vehicle_entity_1.Vehicle, vehicle => vehicle.request, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'vehicle_id' }),
    __metadata("design:type", Object)
], Requests.prototype, "vehicle", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { cascade: true, }),
    (0, typeorm_1.JoinTable)({ name: 'requirements_request' }),
    __metadata("design:type", Array)
], Requests.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { cascade: true, }),
    (0, typeorm_1.JoinTable)({ name: 'machinery_request' }),
    __metadata("design:type", Array)
], Requests.prototype, "machinery", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { cascade: true, }),
    (0, typeorm_1.JoinTable)({ name: 'tools_request' }),
    __metadata("design:type", Array)
], Requests.prototype, "tools", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Requests.prototype, "link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => driver_entity_1.Driver, driver => driver.requests, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'driver_id' }),
    __metadata("design:type", Object)
], Requests.prototype, "driver", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToMany)(() => driver_entity_1.Driver, assistant => assistant.id),
    (0, typeorm_1.JoinTable)({
        name: 'request_assistants',
        joinColumn: { name: 'request_id' },
        inverseJoinColumn: { name: 'assistant_id' },
    }),
    __metadata("design:type", Array)
], Requests.prototype, "assistants", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { cascade: true }),
    __metadata("design:type", Object)
], Requests.prototype, "unity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: false, name: 'confirmation_logistics' }),
    __metadata("design:type", Boolean)
], Requests.prototype, "confirmationLogistic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.id),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", Object)
], Requests.prototype, "company", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => contract_entity_1.Contract, contract => contract.id, { cascade: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'contract_id', }),
    __metadata("design:type", Object)
], Requests.prototype, "contract", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Requests.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Requests.prototype, "provincia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Requests.prototype, "canton", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'address_branch', nullable: true }),
    __metadata("design:type", String)
], Requests.prototype, "addressBranch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'num_request', generated: 'increment' }),
    __metadata("design:type", Number)
], Requests.prototype, "numRequest", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Requests.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Requests.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Requests.prototype, "setDate", null);
Requests = __decorate([
    (0, typeorm_1.Entity)('request')
], Requests);
exports.Requests = Requests;
//# sourceMappingURL=request.entity.js.map