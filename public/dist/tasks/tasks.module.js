"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const limit_date_request_service_1 = require("./limit-date-request/limit-date-request.service");
const request_module_1 = require("../request/request.module");
const config_1 = require("@nestjs/config");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        providers: [limit_date_request_service_1.LimitDateRequestService],
        imports: [request_module_1.RequestModule, config_1.ConfigModule],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map