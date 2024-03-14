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
exports.ContractResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const contract_service_1 = require("./contract.service");
const contract_entity_1 = require("./entities/contract.entity");
const create_contract_input_1 = require("./dto/create-contract.input");
const common_1 = require("@nestjs/common");
const response_document_1 = require("./entities/response-document");
let ContractResolver = class ContractResolver {
    constructor(contractService) {
        this.contractService = contractService;
    }
    createContract(createContractInput) {
        return this.contractService.create(createContractInput);
    }
    findAll(customer) {
        return this.contractService.findAll(customer);
    }
    findOne(id) {
        return this.contractService.findOne(id);
    }
    generateDocument(id) {
        return this.contractService.generateDocument(id);
    }
    downloadDocument(customerId) {
        return this.contractService.downloadPrivateContractTemplate(customerId);
    }
    removeContract(id) {
        return this.contractService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => contract_entity_1.Contract),
    __param(0, (0, graphql_1.Args)('createContractInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contract_input_1.CreateContractInput]),
    __metadata("design:returntype", void 0)
], ContractResolver.prototype, "createContract", null);
__decorate([
    (0, graphql_1.Query)(() => [contract_entity_1.Contract], { name: 'contracts' }),
    __param(0, (0, graphql_1.Args)('customer', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => contract_entity_1.Contract, { name: 'contract' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => response_document_1.ResponseDocument, { name: 'document' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractResolver.prototype, "generateDocument", null);
__decorate([
    (0, graphql_1.Query)(() => String, { name: 'downloadContractTemplate' }),
    __param(0, (0, graphql_1.Args)('customerId', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractResolver.prototype, "downloadDocument", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('contract', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractResolver.prototype, "removeContract", null);
ContractResolver = __decorate([
    (0, graphql_1.Resolver)(() => contract_entity_1.Contract),
    __metadata("design:paramtypes", [contract_service_1.ContractService])
], ContractResolver);
exports.ContractResolver = ContractResolver;
//# sourceMappingURL=contract.resolver.js.map