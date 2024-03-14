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
exports.Waste = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const mae_entity_1 = require("../../mae/entities/mae.entity");
const graphql_1 = require("@nestjs/graphql");
let Waste = class Waste {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Waste.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Waste.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Waste.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(() => mae_entity_1.Mae, mae => mae.waste),
    (0, typeorm_1.JoinColumn)({ name: 'mae_id' }),
    __metadata("design:type", String)
], Waste.prototype, "maeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Waste.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'updated_at', default: new Date() }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Waste.prototype, "updatedAt", void 0);
Waste = __decorate([
    (0, typeorm_1.Entity)('wastes'),
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.InputType)('WasteInput')
], Waste);
exports.Waste = Waste;
//# sourceMappingURL=waste.entity.js.map