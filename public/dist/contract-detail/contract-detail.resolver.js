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
exports.ContractDetailResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const contract_detail_service_1 = require("./contract-detail.service");
const contract_detail_entity_1 = require("./entities/contract-detail.entity");
const create_contract_detail_input_1 = require("./dto/create-contract-detail.input");
const update_contract_detail_input_1 = require("./dto/update-contract-detail.input");
const common_1 = require("@nestjs/common");
let ContractDetailResolver = class ContractDetailResolver {
    constructor(contractDetailService) {
        this.contractDetailService = contractDetailService;
    }
    createContractDetail(createContractDetailInput) {
        return this.contractDetailService.create(createContractDetailInput);
    }
    updateContractDetail(updateContractDetailInput) {
        return this.contractDetailService.updateContractDetail(updateContractDetailInput.id, updateContractDetailInput);
    }
    removeContractDetail(id) {
        return this.contractDetailService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => contract_detail_entity_1.ContractDetail),
    __param(0, (0, graphql_1.Args)('createContractDetailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contract_detail_input_1.CreateContractDetailInput]),
    __metadata("design:returntype", void 0)
], ContractDetailResolver.prototype, "createContractDetail", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('updateContractDetailInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_contract_detail_input_1.UpdateContractDetailInput]),
    __metadata("design:returntype", void 0)
], ContractDetailResolver.prototype, "updateContractDetail", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractDetailResolver.prototype, "removeContractDetail", null);
ContractDetailResolver = __decorate([
    (0, graphql_1.Resolver)(() => contract_detail_entity_1.ContractDetail),
    __metadata("design:paramtypes", [contract_detail_service_1.ContractDetailService])
], ContractDetailResolver);
exports.ContractDetailResolver = ContractDetailResolver;
//# sourceMappingURL=contract-detail.resolver.js.map