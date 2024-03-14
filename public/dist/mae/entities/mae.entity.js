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
exports.Mae = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const waste_entity_1 = require("../../waste/entities/waste.entity");
const graphql_1 = require("@nestjs/graphql");
let Mae = class Mae {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Mae.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ unique: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Mae.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Mae.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.OneToMany)(() => waste_entity_1.Waste, waste => waste.maeId, { cascade: true, eager: true }),
    (0, graphql_1.Field)(() => [waste_entity_1.Waste], { nullable: true }),
    __metadata("design:type", Array)
], Mae.prototype, "waste", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Mae.prototype, "treatment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'created_at', default: new Date() }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], Mae.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'updated_at', default: new Date() }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], Mae.prototype, "updatedAt", void 0);
Mae = __decorate([
    (0, typeorm_1.Entity)('mae'),
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.InputType)('MaeInput')
], Mae);
exports.Mae = Mae;
//# sourceMappingURL=mae.entity.js.map