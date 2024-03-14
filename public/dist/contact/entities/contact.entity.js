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
exports.Contact = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
const customer_entity_1 = require("../../customer/entities/customer.entity");
let Contact = class Contact {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Contact.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ name: 'full_name' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Contact.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ unique: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)({ unique: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Contact.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => detail_catalog_entity_1.DetailCatalog),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'payment_id' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Contact.prototype, "payment", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, typeorm_1.Column)({ name: 'credit_days', nullable: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Contact.prototype, "creditDays", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, customer => customer.id),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Contact.prototype, "customer", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Contact.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)({ default: new Date(), name: 'created_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Contact.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)({ nullable: true, name: 'updated_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Contact.prototype, "updatedAt", void 0);
Contact = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('contact')
], Contact);
exports.Contact = Contact;
//# sourceMappingURL=contact.entity.js.map