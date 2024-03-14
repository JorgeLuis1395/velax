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
exports.DetailCatalog = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const catalog_entity_1 = require("../../catalog/entities/catalog.entity");
const graphql_1 = require("@nestjs/graphql");
let DetailCatalog = class DetailCatalog {
    formatNameDetail() {
        this.name = this.name.toUpperCase().trim();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DetailCatalog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DetailCatalog.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalog_entity_1.Catalog, catalog => catalog.detailCatalog),
    (0, typeorm_1.JoinColumn)({ name: 'catalog_id' }),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => catalog_entity_1.Catalog, { nullable: true }),
    __metadata("design:type", catalog_entity_1.Catalog)
], DetailCatalog.prototype, "catalog", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '', nullable: true }),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DetailCatalog.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date(), name: 'created_at' }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], DetailCatalog.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date(), name: 'updated_at' }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], DetailCatalog.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetailCatalog.prototype, "formatNameDetail", null);
DetailCatalog = __decorate([
    (0, typeorm_1.Entity)('detail_catalog'),
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.InputType)('DetailCatalogInput')
], DetailCatalog);
exports.DetailCatalog = DetailCatalog;
//# sourceMappingURL=detail-catalog.entity.js.map