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
exports.ExternalAddressesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const external_addresses_service_1 = require("./external-addresses.service");
const external_address_entity_1 = require("./entities/external-address.entity");
const create_external_address_input_1 = require("./dto/create-external-address.input");
const common_1 = require("@nestjs/common");
let ExternalAddressesResolver = class ExternalAddressesResolver {
    constructor(externalAddressesService) {
        this.externalAddressesService = externalAddressesService;
    }
    createExternalAddress(createExternalAddressInput) {
        return this.externalAddressesService.create(createExternalAddressInput);
    }
    async findAll() {
        return this.externalAddressesService.findAll();
    }
    async findOne(id) {
        return this.externalAddressesService.findOne(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => external_address_entity_1.ExternalAddress),
    __param(0, (0, graphql_1.Args)('createExternalAddressInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_external_address_input_1.CreateExternalAddressInput]),
    __metadata("design:returntype", void 0)
], ExternalAddressesResolver.prototype, "createExternalAddress", null);
__decorate([
    (0, graphql_1.Query)(() => [external_address_entity_1.ExternalAddress], { name: 'externalAddressesAll' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExternalAddressesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => external_address_entity_1.ExternalAddress, { name: 'externalAddress' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExternalAddressesResolver.prototype, "findOne", null);
ExternalAddressesResolver = __decorate([
    (0, graphql_1.Resolver)(() => external_address_entity_1.ExternalAddress),
    __metadata("design:paramtypes", [external_addresses_service_1.ExternalAddressesService])
], ExternalAddressesResolver);
exports.ExternalAddressesResolver = ExternalAddressesResolver;
//# sourceMappingURL=external-addresses.resolver.js.map