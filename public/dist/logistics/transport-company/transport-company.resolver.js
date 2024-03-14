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
exports.TransportCompanyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const transport_company_service_1 = require("./transport-company.service");
const transport_company_entity_1 = require("./entities/transport-company.entity");
const create_transport_company_input_1 = require("./dto/create-transport-company.input");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let TransportCompanyResolver = class TransportCompanyResolver {
    constructor(transportCompanyService) {
        this.transportCompanyService = transportCompanyService;
    }
    createTransportCompany(createTransportCompanyInput) {
        return this.transportCompanyService.create(createTransportCompanyInput);
    }
    findAll() {
        return this.transportCompanyService.findAll();
    }
    findOne(id) {
        return this.transportCompanyService.findOne(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => transport_company_entity_1.TransportCompany),
    __param(0, (0, graphql_1.Args)('createTransportCompanyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transport_company_input_1.CreateTransportCompanyInput]),
    __metadata("design:returntype", void 0)
], TransportCompanyResolver.prototype, "createTransportCompany", null);
__decorate([
    (0, graphql_1.Query)(() => [transport_company_entity_1.TransportCompany], { name: 'transportCompanyAll' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransportCompanyResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => transport_company_entity_1.TransportCompany, { name: 'transportCompany' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransportCompanyResolver.prototype, "findOne", null);
TransportCompanyResolver = __decorate([
    (0, graphql_1.Resolver)(() => transport_company_entity_1.TransportCompany),
    (0, swagger_1.ApiBadRequestResponse)(),
    __metadata("design:paramtypes", [transport_company_service_1.TransportCompanyService])
], TransportCompanyResolver);
exports.TransportCompanyResolver = TransportCompanyResolver;
//# sourceMappingURL=transport-company.resolver.js.map