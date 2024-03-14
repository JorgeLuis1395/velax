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
exports.WorksheetController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const protect_route_decorator_1 = require("../auth/decorators/protect-route.decorator");
const create_worksheet_dto_1 = require("./dto/create-worksheet.dto");
const update_worksheet_dto_1 = require("./dto/update-worksheet.dto");
const worksheet_service_1 = require("./worksheet.service");
let WorksheetController = class WorksheetController {
    constructor(worksheetService) {
        this.worksheetService = worksheetService;
    }
    create(createWorksheetDto) {
        return this.worksheetService.create(createWorksheetDto);
    }
    findAll(status) {
        return this.worksheetService.findAll(status);
    }
    findOne(id) {
        return this.worksheetService.findOne(id);
    }
    update(id, updateWorksheetDto) {
        return this.worksheetService.update(id, updateWorksheetDto);
    }
    remove(id) {
        return this.worksheetService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_worksheet_dto_1.CreateWorksheetDto]),
    __metadata("design:returntype", void 0)
], WorksheetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    (0, swagger_1.ApiQuery)({ name: 'status', type: String, required: false }),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorksheetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorksheetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_worksheet_dto_1.UpdateWorksheetDto]),
    __metadata("design:returntype", void 0)
], WorksheetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, protect_route_decorator_1.ProtectRouteDecorator)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorksheetController.prototype, "remove", null);
WorksheetController = __decorate([
    (0, common_1.Controller)('worksheet'),
    (0, swagger_1.ApiTags)('Worksheet'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [worksheet_service_1.WorksheetService])
], WorksheetController);
exports.WorksheetController = WorksheetController;
//# sourceMappingURL=worksheet.contoller.js.map