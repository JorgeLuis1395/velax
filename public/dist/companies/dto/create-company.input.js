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
exports.CreateCompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const mae_entity_1 = require("../../mae/entities/mae.entity");
const class_validator_1 = require("class-validator");
let CreateCompanyInput = class CreateCompanyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Company\'s name' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Company\'s ambient licence' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "licence", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Company\'s address' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Company\'s place' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCompanyInput.prototype, "place", void 0);
__decorate([
    (0, graphql_1.Field)(() => [mae_entity_1.Mae], { description: 'List of maes of company' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateCompanyInput.prototype, "maes", void 0);
CreateCompanyInput = __decorate([
    (0, graphql_1.InputType)()
], CreateCompanyInput);
exports.CreateCompanyInput = CreateCompanyInput;
//# sourceMappingURL=create-company.input.js.map