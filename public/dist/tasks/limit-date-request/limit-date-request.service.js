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
var LimitDateRequestService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitDateRequestService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const request_service_1 = require("../../request/request.service");
const config_1 = require("@nestjs/config");
let LimitDateRequestService = LimitDateRequestService_1 = class LimitDateRequestService {
    constructor(requestServices, configService) {
        this.requestServices = requestServices;
        this.configService = configService;
        this.logger = new common_1.Logger(LimitDateRequestService_1.name);
    }
    async verifyDate() {
        try {
            const idStatusCancel = this.configService.get('STATUS_CANCEL_REQUEST');
            const daysToChangeStatus = +this.configService.get('DAYS_STATUS_CANCEL');
            const date = new Date().getTime();
            const requests = await this.requestServices.getByStatus();
            if (requests.length === 0)
                return;
            let requestsExceeded = requests
                .filter(function (item) {
                const parseDateRequest = new Date(item.withdrawalDate);
                parseDateRequest.setDate(parseDateRequest.getDate() + daysToChangeStatus);
                if (date > parseDateRequest.getTime())
                    return item;
            }).map(async (item) => this.requestServices.update(item.id, { status: idStatusCancel }));
            await Promise.all(requestsExceeded);
        }
        catch (e) {
            this.logger.error('ERROR TO UPDATE LIMIT DATE REQUEST TASK');
            this.logger.error(e);
        }
    }
};
__decorate([
    (0, schedule_1.Cron)('5 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LimitDateRequestService.prototype, "verifyDate", null);
LimitDateRequestService = LimitDateRequestService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [request_service_1.RequestService,
        config_1.ConfigService])
], LimitDateRequestService);
exports.LimitDateRequestService = LimitDateRequestService;
//# sourceMappingURL=limit-date-request.service.js.map