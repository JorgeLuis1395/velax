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
exports.RequestDetailMaeController = void 0;
const common_1 = require("@nestjs/common");
const request_detail_mae_service_1 = require("./request-detail-mae.service");
const create_request_detail_mae_dto_1 = require("./dto/create-request-detail-mae.dto");
const update_request_detail_mae_dto_1 = require("./dto/update-request-detail-mae.dto");
const swagger_1 = require("@nestjs/swagger");
const protect_route_decorator_1 = require("../auth/decorators/protect-route.decorator");
let RequestDetailMaeController = class RequestDetailMaeController {
    constructor(requestDetailMaeService) {
        this.requestDetailMaeService = requestDetailMaeService;
    }
    create(createRequestDetailMaeDto) {
        return this.requestDetailMaeService.create(createRequestDetailMaeDto);
    }
    getByRequest(id) {
        return this.requestDetailMaeService.getByRequest(id);
    }
    update(id, updateRequestDetailMaeDto) {
        return this.requestDetailMaeService.update(id, updateRequestDetailMaeDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_request_detail_mae_dto_1.CreateRequestDetailMaeDto]),
    __metadata("design:returntype", void 0)
], RequestDetailMaeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RequestDetailMaeController.prototype, "getByRequest", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_request_detail_mae_dto_1.UpdateRequestDetailMaeDto]),
    __metadata("design:returntype", void 0)
], RequestDetailMaeController.prototype, "update", null);
RequestDetailMaeController = __decorate([
    (0, common_1.Controller)('request-detail-mae'),
    (0, swagger_1.ApiTags)('Detail Request Mae'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [request_detail_mae_service_1.RequestDetailMaeService])
], RequestDetailMaeController);
exports.RequestDetailMaeController = RequestDetailMaeController;
//# sourceMappingURL=request-detail-mae.controller.js.map