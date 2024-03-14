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
exports.Catalog = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
const graphql_1 = require("@nestjs/graphql");
let Catalog = class Catalog {
    formatNemonico() {
        this.nemonico = this.nemonico.toUpperCase().trim();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Catalog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Catalog.prototype, "nemonico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Catalog.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Catalog.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detail_catalog_entity_1.DetailCatalog, detail => detail.catalog, { eager: true, cascade: true }),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => [detail_catalog_entity_1.DetailCatalog]),
    __metadata("design:type", Array)
], Catalog.prototype, "detailCatalog", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Catalog.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date(), name: 'created_at' }),
    (0, swagger_1.ApiProperty)(),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Catalog.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Catalog.prototype, "formatNemonico", null);
Catalog = __decorate([
    (0, typeorm_1.Entity)('catalog'),
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.InputType)('CatalogInput')
], Catalog);
exports.Catalog = Catalog;
//# sourceMappingURL=catalog.entity.js.map