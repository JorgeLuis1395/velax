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
exports.ExternalAddress = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let ExternalAddress = class ExternalAddress {
    formatData() {
        this.name = this.name.toUpperCase();
        this.licence = this.licence.toUpperCase();
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Id  External company' }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ExternalAddress.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Name  External company' }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], ExternalAddress.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Ambient licence  External company', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ExternalAddress.prototype, "licence", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Phone licence  External company', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ExternalAddress.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Representative  External company', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ExternalAddress.prototype, "representative", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { description: 'Status  External company', nullable: true }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ExternalAddress.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Created at External company' }),
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    __metadata("design:type", Date)
], ExternalAddress.prototype, "cratedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Created at External company', nullable: true }),
    (0, typeorm_1.Column)({ name: 'updatedAt', default: new Date() }),
    __metadata("design:type", Date)
], ExternalAddress.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExternalAddress.prototype, "formatData", null);
ExternalAddress = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('external_address')
], ExternalAddress);
exports.ExternalAddress = ExternalAddress;
//# sourceMappingURL=external-address.entity.js.map