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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const role_entity_1 = require("../../role/entities/role.entity");
const customer_entity_1 = require("../../customer/entities/customer.entity");
const swagger_1 = require("@nestjs/swagger");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        unique: true,
    }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)('bool', { default: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.Role, { eager: true, cascade: true }),
    (0, typeorm_1.JoinTable)({ name: 'users_roles' }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => customer_entity_1.Customer, (customer) => customer.userId, { cascade: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], User.prototype, "customers", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "" }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date().toISOString(), name: 'created_at' }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "updated_at", default: new Date() }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map