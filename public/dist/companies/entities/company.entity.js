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
exports.Company = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const mae_entity_1 = require("../../mae/entities/mae.entity");
let Company = class Company {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Identifier field autogenerate' }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Company.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Company\'s name' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Company\'s ambient licence', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "licence", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Company\'s address', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Company\'s place', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "place", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { description: 'Company\'s status' }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Company.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => [mae_entity_1.Mae], { description: 'List of maes of company' }),
    (0, typeorm_1.ManyToMany)(() => mae_entity_1.Mae, { eager: true }),
    (0, typeorm_1.JoinTable)({ name: 'company_mae', joinColumn: { name: 'company_id' }, inverseJoinColumn: { name: 'mae_id' } }),
    __metadata("design:type", Array)
], Company.prototype, "maes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Date of creation' }),
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Date of creation' }),
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
Company = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('companies')
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map