"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestDetailMaeModule = void 0;
const common_1 = require("@nestjs/common");
const request_detail_mae_service_1 = require("./request-detail-mae.service");
const request_detail_mae_controller_1 = require("./request-detail-mae.controller");
const typeorm_1 = require("@nestjs/typeorm");
const request_detail_mae_entity_1 = require("./entities/request-detail-mae.entity");
const contract_detail_module_1 = require("../contract-detail/contract-detail.module");
let RequestDetailMaeModule = class RequestDetailMaeModule {
};
RequestDetailMaeModule = __decorate([
    (0, common_1.Module)({
        controllers: [request_detail_mae_controller_1.RequestDetailMaeController],
        providers: [request_detail_mae_service_1.RequestDetailMaeService],
        imports: [typeorm_1.TypeOrmModule.forFeature([request_detail_mae_entity_1.RequestDetailMae]), contract_detail_module_1.ContractDetailModule],
        exports: [request_detail_mae_service_1.RequestDetailMaeService]
    })
], RequestDetailMaeModule);
exports.RequestDetailMaeModule = RequestDetailMaeModule;
//# sourceMappingURL=request-detail-mae.module.js.map