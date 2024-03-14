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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../auth/entities/user.entity");
const swagger_1 = require("@nestjs/swagger");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
const address_entity_1 = require("../../address/entities/address.entity");
const request_entity_1 = require("../../request/entities/request.entity");
const contact_entity_1 = require("../../contact/entities/contact.entity");
const remember_entity_1 = require("../../remember/entities/remember.entity");
const graphql_1 = require("@nestjs/graphql");
let Customer = class Customer {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Customer.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ name: 'business_name' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Customer.prototype, "businessName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ name: 'commercial_name' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Customer.prototype, "commercialName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, swagger_1.ApiProperty)({ name: 'type_document' }),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'document_id' }),
    __metadata("design:type", String)
], Customer.prototype, "documentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ name: 'number_document', unique: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Customer.prototype, "numberDocument", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contact_entity_1.Contact, contact => contact.customer, { eager: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Customer.prototype, "contacts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.customers, { lazy: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", Object)
], Customer.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => address_entity_1.Address, address => address.customer, { eager: true, cascade: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], Customer.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'group_id' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], Customer.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_entity_1.Requests, request => request.customer),
    __metadata("design:type", Array)
], Customer.prototype, "requests", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)({ default: new Date(), name: 'created_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Customer.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.OneToMany)(() => remember_entity_1.Remember, remember => remember.customer, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Customer.prototype, "remembers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true, cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'requirements_customer',
        joinColumn: { name: 'customer_id' },
        inverseJoinColumn: { name: 'detail_catalog_id' },
    }),
    __metadata("design:type", Array)
], Customer.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'updated_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Customer.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Customer.prototype, "status", void 0);
Customer = __decorate([
    (0, typeorm_1.Entity)('customers'),
    (0, graphql_1.ObjectType)()
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map