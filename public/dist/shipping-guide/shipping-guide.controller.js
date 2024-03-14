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
exports.ShippingGuideController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const protect_route_decorator_1 = require("../auth/decorators/protect-route.decorator");
const create_shipping_guide_dto_1 = require("./dto/create-shipping-guide.dto");
const update_shipping_guide_dto_1 = require("./dto/update-shipping-guide.dto");
const shipping_guide_service_1 = require("./shipping-guide.service");
let ShippingGuideController = class ShippingGuideController {
    constructor(shippingGuideService) {
        this.shippingGuideService = shippingGuideService;
    }
    create(createShippingGuideDto) {
        return this.shippingGuideService.create(createShippingGuideDto);
    }
    findAll() {
        return this.shippingGuideService.findAll();
    }
    findOne(id) {
        return this.shippingGuideService.findOne(id);
    }
    update(id, updateShippingGuideDto) {
        return this.shippingGuideService.update(id, updateShippingGuideDto);
    }
    remove(id) {
        return this.shippingGuideService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shipping_guide_dto_1.CreateShippingGuideDto]),
    __metadata("design:returntype", void 0)
], ShippingGuideController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShippingGuideController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingGuideController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_shipping_guide_dto_1.UpdateShippingGuideDto]),
    __metadata("design:returntype", void 0)
], ShippingGuideController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingGuideController.prototype, "remove", null);
ShippingGuideController = __decorate([
    (0, common_1.Controller)('shipping-guide'),
    (0, swagger_1.ApiTags)('ShippingGuide'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [shipping_guide_service_1.ShippingGuideService])
], ShippingGuideController);
exports.ShippingGuideController = ShippingGuideController;
//# sourceMappingURL=shipping-guide.controller.js.map