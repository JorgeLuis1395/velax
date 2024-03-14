"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WasteModule = void 0;
const common_1 = require("@nestjs/common");
const waste_service_1 = require("./waste.service");
const waste_controller_1 = require("./waste.controller");
const typeorm_1 = require("@nestjs/typeorm");
const waste_entity_1 = require("./entities/waste.entity");
let WasteModule = class WasteModule {
};
WasteModule = __decorate([
    (0, common_1.Module)({
        controllers: [waste_controller_1.WasteController],
        providers: [waste_service_1.WasteService],
        imports: [typeorm_1.TypeOrmModule.forFeature([waste_entity_1.Waste])],
    })
], WasteModule);
exports.WasteModule = WasteModule;
//# sourceMappingURL=waste.module.js.map