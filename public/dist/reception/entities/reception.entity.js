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
exports.Reception = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const request_entity_1 = require("../../request/entities/request.entity");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
let Reception = class Reception {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Reception.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Date reception' }),
    (0, typeorm_1.Column)({ name: 'date_reception' }),
    __metadata("design:type", Date)
], Reception.prototype, "dateReception", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Hour reception' }),
    (0, typeorm_1.Column)({ name: 'hour_reception' }),
    __metadata("design:type", String)
], Reception.prototype, "hourReception", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Request' }),
    (0, typeorm_1.OneToOne)(() => request_entity_1.Requests, request => request.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'request_id' }),
    __metadata("design:type", Object)
], Reception.prototype, "request", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'num_request', nullable: true }),
    (0, typeorm_1.Column)({ name: 'num_request', nullable: true }),
    __metadata("design:type", Number)
], Reception.prototype, "numRequest", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'catalog', nullable: true }),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'detail_catalog_id' }),
    __metadata("design:type", Object)
], Reception.prototype, "catalog", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'total wegith', nullable: true }),
    (0, typeorm_1.Column)({ name: 'total_weight', type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Reception.prototype, "totalWeight", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'total weight reception', nullable: true }),
    (0, typeorm_1.Column)({ name: 'total_weight_reception', type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Reception.prototype, "totalWeightReception", void 0);
__decorate([
    (0, graphql_1.Field)(() => detail_catalog_entity_1.DetailCatalog, { description: 'Request', nullable: true }),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true }),
    __metadata("design:type", Object)
], Reception.prototype, "unity", void 0);
__decorate([
    (0, graphql_1.Field)(() => detail_catalog_entity_1.DetailCatalog, { description: 'Status reception', nullable: true }),
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true }),
    __metadata("design:type", Object)
], Reception.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Created reception' }),
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    __metadata("design:type", Date)
], Reception.prototype, "cratedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: 'Updated reception', nullable: true }),
    (0, typeorm_1.Column)({ name: 'updatedAt', nullable: true }),
    __metadata("design:type", Date)
], Reception.prototype, "updatedAt", void 0);
Reception = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('receptions')
], Reception);
exports.Reception = Reception;
//# sourceMappingURL=reception.entity.js.map