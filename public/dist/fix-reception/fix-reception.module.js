"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixReceptionModule = void 0;
const common_1 = require("@nestjs/common");
const fix_reception_service_1 = require("./fix-reception.service");
const fix_reception_resolver_1 = require("./fix-reception.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const fix_reception_entity_1 = require("./entities/fix-reception.entity");
const request_detail_mae_module_1 = require("../request-detail-mae/request-detail-mae.module");
const websocket_module_1 = require("../websocket/websocket.module");
let FixReceptionModule = class FixReceptionModule {
};
FixReceptionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fix_reception_entity_1.FixReception]), request_detail_mae_module_1.RequestDetailMaeModule, websocket_module_1.WebsocketModule],
        providers: [fix_reception_resolver_1.FixReceptionResolver, fix_reception_service_1.FixReceptionService],
        exports: [fix_reception_service_1.FixReceptionService]
    })
], FixReceptionModule);
exports.FixReceptionModule = FixReceptionModule;
//# sourceMappingURL=fix-reception.module.js.map