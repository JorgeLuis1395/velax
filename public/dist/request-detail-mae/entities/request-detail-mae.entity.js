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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestDetailMae = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const mae_entity_1 = require("../../mae/entities/mae.entity");
const waste_entity_1 = require("../../waste/entities/waste.entity");
const request_entity_1 = require("../../request/entities/request.entity");
let RequestDetailMae = class RequestDetailMae {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RequestDetailMae.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => mae_entity_1.Mae, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'maeId' }),
    __metadata("design:type", Object)
], RequestDetailMae.prototype, "maeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToMany)(() => waste_entity_1.Waste, { eager: true, cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'detail_request_wasted',
        joinColumn: { name: 'detail_id' },
        inverseJoinColumn: { name: 'waste_id' },
    }),
    __metadata("design:type", Array)
], RequestDetailMae.prototype, "wastes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => request_entity_1.Requests, request => request.detail, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'request_id' }),
    __metadata("design:type", Object)
], RequestDetailMae.prototype, "requestId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], RequestDetailMae.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'float', nullable: true, name: 'weight_reception' }),
    __metadata("design:type", Number)
], RequestDetailMae.prototype, "weightReception", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'original_total_weight', type: 'float', nullable: true }),
    __metadata("design:type", Number)
], RequestDetailMae.prototype, "originalTotalWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], RequestDetailMae.prototype, "status", void 0);
RequestDetailMae = __decorate([
    (0, typeorm_1.Entity)('request_detail_mae')
], RequestDetailMae);
exports.RequestDetailMae = RequestDetailMae;
//# sourceMappingURL=request-detail-mae.entity.js.map