"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceptionModule = void 0;
const common_1 = require("@nestjs/common");
const reception_service_1 = require("./reception.service");
const reception_resolver_1 = require("./reception.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const reception_entity_1 = require("./entities/reception.entity");
const request_module_1 = require("../request/request.module");
let ReceptionModule = class ReceptionModule {
};
ReceptionModule = __decorate([
    (0, common_1.Module)({
        providers: [reception_resolver_1.ReceptionResolver, reception_service_1.ReceptionService],
        imports: [typeorm_1.TypeOrmModule.forFeature([reception_entity_1.Reception]), request_module_1.RequestModule]
    })
], ReceptionModule);
exports.ReceptionModule = ReceptionModule;
//# sourceMappingURL=reception.module.js.map