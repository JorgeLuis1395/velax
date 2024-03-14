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
exports.FixReception = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const request_entity_1 = require("../../request/entities/request.entity");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
let FixReception = class FixReception {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'id fix reception' }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FixReception.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => request_entity_1.Requests, request => request.id),
    (0, typeorm_1.JoinColumn)({ name: 'request_id' }),
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Request associate', nullable: true }),
    __metadata("design:type", Object)
], FixReception.prototype, "request", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.id, { eager: true }),
    (0, graphql_1.Field)(() => detail_catalog_entity_1.DetailCatalog, { description: 'Request associate' }),
    __metadata("design:type", Object)
], FixReception.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    __metadata("design:type", Date)
], FixReception.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], FixReception.prototype, "updatedAt", void 0);
FixReception = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('fix_reception')
], FixReception);
exports.FixReception = FixReception;
//# sourceMappingURL=fix-reception.entity.js.map