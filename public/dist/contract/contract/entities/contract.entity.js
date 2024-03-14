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
exports.Contract = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../../../customer/entities/customer.entity");
const contract_detail_entity_1 = require("../../../contract-detail/entities/contract-detail.entity");
let Contract = class Contract {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'id contract' }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Contract.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_entity_1.Customer, { description: 'Customer' }),
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, customer => customer.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", Object)
], Contract.prototype, "customer", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_detail_entity_1.ContractDetail], { description: 'detail', nullable: true }),
    (0, typeorm_1.OneToMany)(() => contract_detail_entity_1.ContractDetail, detail => detail.contract, { eager: true }),
    __metadata("design:type", Array)
], Contract.prototype, "detail", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'duration contract (date)', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Contract.prototype, "duration", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'missing time', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, name: 'missing_time' }),
    __metadata("design:type", Number)
], Contract.prototype, "missingTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'process number' }),
    (0, typeorm_1.Column)({ name: 'process_number' }),
    __metadata("design:type", String)
], Contract.prototype, "processNumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { description: 'status contract', nullable: true }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Contract.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Document Contract', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, }),
    __metadata("design:type", String)
], Contract.prototype, "document", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { description: "Contract private has document", nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Contract.prototype, "hasDocument", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "Notes contract", nullable: true }),
    (0, typeorm_1.Column)({ nullable: true, default: "" }),
    __metadata("design:type", String)
], Contract.prototype, "notes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'created at', nullable: true }),
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    __metadata("design:type", Date)
], Contract.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'created at', nullable: true }),
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Contract.prototype, "updatedAt", void 0);
Contract = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('contracts')
], Contract);
exports.Contract = Contract;
//# sourceMappingURL=contract.entity.js.map