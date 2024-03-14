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
exports.CreateReceptionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const detail_catalog_entity_1 = require("../../detail-catalog/entities/detail-catalog.entity");
let CreateReceptionInput = class CreateReceptionInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Date reception' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], CreateReceptionInput.prototype, "dateReception", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Hour reception' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceptionInput.prototype, "hourReception", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Request', nullable: true }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReceptionInput.prototype, "request", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'num_request', nullable: true }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReceptionInput.prototype, "numRequest", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Catalog', nullable: true }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateReceptionInput.prototype, "catalog", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Plate Vehicle', nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceptionInput.prototype, "plate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'total wegith', nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReceptionInput.prototype, "totalWeight", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Unity', nullable: true }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReceptionInput.prototype, "unity", void 0);
__decorate([
    (0, graphql_1.Field)(() => detail_catalog_entity_1.DetailCatalog, { description: 'Status reception', nullable: true }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReceptionInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'total wegith reception', nullable: true }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReceptionInput.prototype, "totalWeightReception", void 0);
CreateReceptionInput = __decorate([
    (0, graphql_1.InputType)()
], CreateReceptionInput);
exports.CreateReceptionInput = CreateReceptionInput;
//# sourceMappingURL=create-reception.input.js.map