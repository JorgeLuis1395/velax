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
exports.ContractDetail = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const mae_entity_1 = require("../../mae/entities/mae.entity");
const contract_entity_1 = require("../../contract/contract/entities/contract.entity");
let ContractDetail = class ContractDetail {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'id detail', nullable: true }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ContractDetail.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => mae_entity_1.Mae, { description: 'Mae', nullable: true }),
    (0, typeorm_1.ManyToOne)(() => mae_entity_1.Mae, mae => mae.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'mae_id' }),
    __metadata("design:type", Object)
], ContractDetail.prototype, "mae", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contract_entity_1.Contract, contact => contact.id),
    (0, typeorm_1.JoinColumn)({ name: 'contract_id' }),
    __metadata("design:type", Object)
], ContractDetail.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'weight mae', nullable: true }),
    (0, typeorm_1.Column)({ type: 'real', nullable: true }),
    __metadata("design:type", Number)
], ContractDetail.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'balance mae', nullable: true }),
    (0, typeorm_1.Column)({ type: 'real', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], ContractDetail.prototype, "balance", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'price mae', nullable: true }),
    (0, typeorm_1.Column)({ type: 'real', nullable: true }),
    __metadata("design:type", Number)
], ContractDetail.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Group ID', nullable: true }),
    (0, typeorm_1.Column)({ name: 'group_id', nullable: true }),
    __metadata("design:type", String)
], ContractDetail.prototype, "groupId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Group Name', nullable: true }),
    (0, typeorm_1.Column)({ name: 'group_name', nullable: true }),
    __metadata("design:type", String)
], ContractDetail.prototype, "groupName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'created at', nullable: true }),
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    __metadata("design:type", Date)
], ContractDetail.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'created at', nullable: true }),
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], ContractDetail.prototype, "updatedAt", void 0);
ContractDetail = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('contract_detail')
], ContractDetail);
exports.ContractDetail = ContractDetail;
//# sourceMappingURL=contract-detail.entity.js.map