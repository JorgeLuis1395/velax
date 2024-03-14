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
exports.InstrumentsRequestResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const instruments_request_service_1 = require("./instruments-request.service");
const instruments_request_entity_1 = require("./entities/instruments-request.entity");
const create_instruments_request_input_1 = require("./dto/create-instruments-request.input");
const update_instruments_request_input_1 = require("./dto/update-instruments-request.input");
let InstrumentsRequestResolver = class InstrumentsRequestResolver {
    constructor(instrumentsRequestService) {
        this.instrumentsRequestService = instrumentsRequestService;
    }
    createInstrumentsRequest(createInstrumentsRequestInput) {
        return this.instrumentsRequestService.create(createInstrumentsRequestInput);
    }
    findAll(requestId) {
        return this.instrumentsRequestService.findAll(requestId);
    }
    updateInstrumentsRequest(updateInstrumentsRequestInput) {
        return this.instrumentsRequestService.update(updateInstrumentsRequestInput.id, updateInstrumentsRequestInput);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => instruments_request_entity_1.InstrumentsRequest),
    __param(0, (0, graphql_1.Args)('createInstrumentsRequestInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instruments_request_input_1.CreateInstrumentsRequestInput]),
    __metadata("design:returntype", void 0)
], InstrumentsRequestResolver.prototype, "createInstrumentsRequest", null);
__decorate([
    (0, graphql_1.Query)(() => [instruments_request_entity_1.InstrumentsRequest], { name: 'instrumentsRequest' }),
    __param(0, (0, graphql_1.Args)('requestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InstrumentsRequestResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => instruments_request_entity_1.InstrumentsRequest),
    __param(0, (0, graphql_1.Args)('updateInstrumentsRequestInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_instruments_request_input_1.UpdateInstrumentsRequestInput]),
    __metadata("design:returntype", void 0)
], InstrumentsRequestResolver.prototype, "updateInstrumentsRequest", null);
InstrumentsRequestResolver = __decorate([
    (0, graphql_1.Resolver)(() => instruments_request_entity_1.InstrumentsRequest),
    __metadata("design:paramtypes", [instruments_request_service_1.InstrumentsRequestService])
], InstrumentsRequestResolver);
exports.InstrumentsRequestResolver = InstrumentsRequestResolver;
//# sourceMappingURL=instruments-request.resolver.js.map