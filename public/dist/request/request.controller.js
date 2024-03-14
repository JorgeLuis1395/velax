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
exports.RequestController = void 0;
const common_1 = require("@nestjs/common");
const request_service_1 = require("./request.service");
const create_request_dto_1 = require("./dto/create-request.dto");
const update_request_dto_1 = require("./dto/update-request.dto");
const protect_route_decorator_1 = require("../auth/decorators/protect-route.decorator");
const swagger_1 = require("@nestjs/swagger");
const roles_enum_1 = require("../auth/interfaces/roles.enum");
const get_user_decorator_1 = require("../auth/decorators/get-user.decorator");
const user_entity_1 = require("../auth/entities/user.entity");
const panic_alert_dto_1 = require("./dto/panic-alert.dto");
const location_dto_1 = require("./dto/location.dto");
let RequestController = class RequestController {
    constructor(requestService) {
        this.requestService = requestService;
    }
    create(createRequestDto, user) {
        return this.requestService.create(createRequestDto, user);
    }
    findAll(user, initialDate, endDate, status, city, vehicle, plate) {
        return this.requestService.findAll(user, initialDate, endDate, status, city, vehicle, plate);
    }
    findOne(id) {
        return this.requestService.findOne(id);
    }
    findByDriver(user) {
        return this.requestService.getByDriver(user);
    }
    update(id, updateRequestDto) {
        return this.requestService.update(id, updateRequestDto);
    }
    remove(id) {
        return this.requestService.remove(id);
    }
    generatePDF(id) {
        return this.requestService.generatePdf(id);
    }
    generateXML(id) {
        return this.requestService.generateXML(id);
    }
    sendAlert(body) {
        return this.requestService.sendAlert(body);
    }
    sendLocation(body) {
        return this.requestService.sendLocation(body);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_request_dto_1.CreateRequestDto, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    (0, swagger_1.ApiQuery)({ name: 'initialDate', type: String, required: false }),
    (0, swagger_1.ApiQuery)({ name: 'endDate', type: String, required: false }),
    (0, swagger_1.ApiQuery)({ name: 'status', type: String, required: false }),
    (0, swagger_1.ApiQuery)({ name: 'city', type: String, required: false }),
    (0, swagger_1.ApiQuery)({ name: 'vehicle', type: String, required: false }),
    (0, swagger_1.ApiQuery)({ name: 'plate', type: String, required: false }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)('initialDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __param(3, (0, common_1.Query)('status')),
    __param(4, (0, common_1.Query)('city')),
    __param(5, (0, common_1.Query)('vehicle')),
    __param(6, (0, common_1.Query)('plate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('drivers/get'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(roles_enum_1.RolesEnum.driver),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "findByDriver", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_request_dto_1.UpdateRequestDto]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('generate/pdf/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "generatePDF", null);
__decorate([
    (0, common_1.Get)('generate/xml/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "generateXML", null);
__decorate([
    (0, common_1.Post)('/panic'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [panic_alert_dto_1.PanicAlertDto]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "sendAlert", null);
__decorate([
    (0, common_1.Post)('/location'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_dto_1.LocationDto]),
    __metadata("design:returntype", void 0)
], RequestController.prototype, "sendLocation", null);
RequestController = __decorate([
    (0, common_1.Controller)('request'),
    (0, swagger_1.ApiTags)('Request'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], RequestController);
exports.RequestController = RequestController;
//# sourceMappingURL=request.controller.js.map