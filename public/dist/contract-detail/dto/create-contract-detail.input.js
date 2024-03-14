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
exports.CreateContractDetailInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateContractDetailInput = class CreateContractDetailInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Mae' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateContractDetailInput.prototype, "mae", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Contract id' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateContractDetailInput.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'weight mae', nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateContractDetailInput.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'price mae', nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateContractDetailInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'balance mae', nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateContractDetailInput.prototype, "balance", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Group ID', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContractDetailInput.prototype, "groupId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Group Name', nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateContractDetailInput.prototype, "groupName", void 0);
CreateContractDetailInput = __decorate([
    (0, graphql_1.InputType)()
], CreateContractDetailInput);
exports.CreateContractDetailInput = CreateContractDetailInput;
//# sourceMappingURL=create-contract-detail.input.js.map