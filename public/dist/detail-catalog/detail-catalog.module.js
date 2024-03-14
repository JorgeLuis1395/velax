"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailCatalogModule = void 0;
const common_1 = require("@nestjs/common");
const detail_catalog_service_1 = require("./detail-catalog.service");
const detail_catalog_controller_1 = require("./detail-catalog.controller");
const typeorm_1 = require("@nestjs/typeorm");
const detail_catalog_entity_1 = require("./entities/detail-catalog.entity");
let DetailCatalogModule = class DetailCatalogModule {
};
DetailCatalogModule = __decorate([
    (0, common_1.Module)({
        controllers: [detail_catalog_controller_1.DetailCatalogController],
        providers: [detail_catalog_service_1.DetailCatalogService],
        imports: [typeorm_1.TypeOrmModule.forFeature([detail_catalog_entity_1.DetailCatalog])]
    })
], DetailCatalogModule);
exports.DetailCatalogModule = DetailCatalogModule;
//# sourceMappingURL=detail-catalog.module.js.map