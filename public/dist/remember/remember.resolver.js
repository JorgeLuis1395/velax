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
exports.RememberResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const remember_service_1 = require("./remember.service");
const remember_entity_1 = require("./entities/remember.entity");
const create_remember_input_1 = require("./dto/create-remember.input");
const update_remember_input_1 = require("./dto/update-remember.input");
const common_1 = require("@nestjs/common");
let RememberResolver = class RememberResolver {
    constructor(rememberService) {
        this.rememberService = rememberService;
    }
    createRemember(createRememberInput) {
        return this.rememberService.create(createRememberInput);
    }
    findAll() {
        return this.rememberService.findAll();
    }
    findOne(id) {
        return this.rememberService.findOne(id);
    }
    updateRemember(updateRememberInput) {
        return this.rememberService.update(updateRememberInput.id, updateRememberInput);
    }
    removeRemember(id) {
        return this.rememberService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => remember_entity_1.Remember),
    __param(0, (0, graphql_1.Args)('createRememberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_remember_input_1.CreateRememberInput]),
    __metadata("design:returntype", void 0)
], RememberResolver.prototype, "createRemember", null);
__decorate([
    (0, graphql_1.Query)(() => [remember_entity_1.Remember], { name: 'remembers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RememberResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => remember_entity_1.Remember, { name: 'remember' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RememberResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => remember_entity_1.Remember),
    __param(0, (0, graphql_1.Args)('updateRememberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_remember_input_1.UpdateRememberInput]),
    __metadata("design:returntype", void 0)
], RememberResolver.prototype, "updateRemember", null);
__decorate([
    (0, graphql_1.Mutation)(() => remember_entity_1.Remember),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RememberResolver.prototype, "removeRemember", null);
RememberResolver = __decorate([
    (0, graphql_1.Resolver)(() => remember_entity_1.Remember),
    __metadata("design:paramtypes", [remember_service_1.RememberService])
], RememberResolver);
exports.RememberResolver = RememberResolver;
//# sourceMappingURL=remember.resolver.js.map