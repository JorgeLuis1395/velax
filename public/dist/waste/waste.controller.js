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
exports.WasteController = void 0;
const common_1 = require("@nestjs/common");
const waste_service_1 = require("./waste.service");
const create_waste_dto_1 = require("./dto/create-waste.dto");
const update_waste_dto_1 = require("./dto/update-waste.dto");
const swagger_1 = require("@nestjs/swagger");
const protect_route_decorator_1 = require("../auth/decorators/protect-route.decorator");
let WasteController = class WasteController {
    constructor(wasteService) {
        this.wasteService = wasteService;
    }
    create(createWasteDto) {
        return this.wasteService.create(createWasteDto);
    }
    findAll() {
        return this.wasteService.findAll();
    }
    findOne(id) {
        return this.wasteService.findOne(id);
    }
    update(id, updateWasteDto) {
        return this.wasteService.update(id, updateWasteDto);
    }
    remove(id) {
        return this.wasteService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_waste_dto_1.CreateWasteDto]),
    __metadata("design:returntype", void 0)
], WasteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WasteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WasteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_waste_dto_1.UpdateWasteDto]),
    __metadata("design:returntype", void 0)
], WasteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WasteController.prototype, "remove", null);
WasteController = __decorate([
    (0, common_1.Controller)('waste'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Waste'),
    __metadata("design:paramtypes", [waste_service_1.WasteService])
], WasteController);
exports.WasteController = WasteController;
//# sourceMappingURL=waste.controller.js.map