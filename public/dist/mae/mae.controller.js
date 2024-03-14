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
exports.MaeController = void 0;
const common_1 = require("@nestjs/common");
const mae_service_1 = require("./mae.service");
const create_mae_dto_1 = require("./dto/create-mae.dto");
const update_mae_dto_1 = require("./dto/update-mae.dto");
const swagger_1 = require("@nestjs/swagger");
const protect_route_decorator_1 = require("../auth/decorators/protect-route.decorator");
let MaeController = class MaeController {
    constructor(maeService) {
        this.maeService = maeService;
    }
    create(createMaeDto) {
        return this.maeService.create(createMaeDto);
    }
    findAll() {
        return this.maeService.findAll();
    }
    findOne(id) {
        return this.maeService.findOne(id);
    }
    update(id, updateMaeDto) {
        return this.maeService.update(id, updateMaeDto);
    }
    remove(id) {
        return this.maeService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mae_dto_1.CreateMaeDto]),
    __metadata("design:returntype", void 0)
], MaeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MaeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':param'),
    (0, swagger_1.ApiParam)({ name: 'param', description: 'Find by id or name contains some letter' }),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('param')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mae_dto_1.UpdateMaeDto]),
    __metadata("design:returntype", void 0)
], MaeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaeController.prototype, "remove", null);
MaeController = __decorate([
    (0, common_1.Controller)('mae'),
    (0, swagger_1.ApiTags)('Mae'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [mae_service_1.MaeService])
], MaeController);
exports.MaeController = MaeController;
//# sourceMappingURL=mae.controller.js.map