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
exports.TransportCompany = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let TransportCompany = class TransportCompany {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Id\'s compnay' }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TransportCompany.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Name of the company' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransportCompany.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Ambient licence\'s company' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], TransportCompany.prototype, "licence", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Ambient identification\'s company' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransportCompany.prototype, "ruc", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Address of company' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransportCompany.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { description: "Company is active or not", nullable: true }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], TransportCompany.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Created At', nullable: true, defaultValue: new Date() }),
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    __metadata("design:type", Date)
], TransportCompany.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Updated At', nullable: true }),
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TransportCompany.prototype, "updatedAt", void 0);
TransportCompany = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('transport_company')
], TransportCompany);
exports.TransportCompany = TransportCompany;
//# sourceMappingURL=transport-company.entity.js.map