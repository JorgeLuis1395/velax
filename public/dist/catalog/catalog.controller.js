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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogController = void 0;
const common_1 = require("@nestjs/common");
const catalog_service_1 = require("./catalog.service");
const create_catalog_dto_1 = require("./dto/create-catalog.dto");
const protect_route_decorator_1 = require("../auth/decorators/protect-route.decorator");
const swagger_1 = require("@nestjs/swagger");
const catalog_entity_1 = require("./entities/catalog.entity");
let CatalogController = class CatalogController {
    constructor(catalogService) {
        this.catalogService = catalogService;
    }
    create(createCatalogDto) {
        return this.catalogService.create(createCatalogDto);
    }
    findAll() {
        return this.catalogService.findAll();
    }
    findOne(nemonico) {
        return this.catalogService.findOne(nemonico);
    }
    remove(id) {
        return this.catalogService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Created successfully', type: catalog_entity_1.Catalog }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_catalog_dto_1.CreateCatalogDto]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':nemonico'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('nemonico')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "remove", null);
CatalogController = __decorate([
    (0, common_1.Controller)('catalog'),
    (0, swagger_1.ApiTags)('Catalog'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [catalog_service_1.CatalogService])
], CatalogController);
exports.CatalogController = CatalogController;
//# sourceMappingURL=catalog.controller.js.map