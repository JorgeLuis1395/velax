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
exports.InstrumentsRequest = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const request_entity_1 = require("../../request/entities/request.entity");
const instrument_entity_1 = require("../../instruments/entities/instrument.entity");
let InstrumentsRequest = class InstrumentsRequest {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InstrumentsRequest.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.ManyToOne)(() => request_entity_1.Requests, request => request.id),
    (0, typeorm_1.JoinColumn)({ name: 'request_id' }),
    __metadata("design:type", Number)
], InstrumentsRequest.prototype, "request", void 0);
__decorate([
    (0, graphql_1.Field)(() => instrument_entity_1.Instrument),
    (0, typeorm_1.ManyToOne)(() => instrument_entity_1.Instrument, instrument => instrument.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'instrument_id' }),
    __metadata("design:type", String)
], InstrumentsRequest.prototype, "instrument", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], InstrumentsRequest.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    __metadata("design:type", Date)
], InstrumentsRequest.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)({ name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], InstrumentsRequest.prototype, "updatedAt", void 0);
InstrumentsRequest = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('instruments_request')
], InstrumentsRequest);
exports.InstrumentsRequest = InstrumentsRequest;
//# sourceMappingURL=instruments-request.entity.js.map