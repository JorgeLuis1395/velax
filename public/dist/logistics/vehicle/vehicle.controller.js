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
exports.VehicleController = void 0;
const common_1 = require("@nestjs/common");
const vehicle_service_1 = require("./vehicle.service");
const create_vehicle_dto_1 = require("./dto/create-vehicle.dto");
const update_vehicle_dto_1 = require("./dto/update-vehicle.dto");
const swagger_1 = require("@nestjs/swagger");
const protect_route_decorator_1 = require("../../auth/decorators/protect-route.decorator");
let VehicleController = class VehicleController {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
    }
    create(createVehicleDto) {
        return this.vehicleService.create(createVehicleDto);
    }
    findAll() {
        return this.vehicleService.findAll();
    }
    findOne(plate) {
        return this.vehicleService.findOne(plate);
    }
    update(id, updateVehicleDto) {
        return this.vehicleService.update(id, updateVehicleDto);
    }
    remove(id) {
        return this.vehicleService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vehicle_dto_1.CreateVehicleDto]),
    __metadata("design:returntype", void 0)
], VehicleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehicleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':plate'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('plate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehicleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vehicle_dto_1.UpdateVehicleDto]),
    __metadata("design:returntype", void 0)
], VehicleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehicleController.prototype, "remove", null);
VehicleController = __decorate([
    (0, common_1.Controller)('vehicle'),
    (0, swagger_1.ApiTags)('Vehicle'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [vehicle_service_1.VehicleService])
], VehicleController);
exports.VehicleController = VehicleController;
//# sourceMappingURL=vehicle.controller.js.map