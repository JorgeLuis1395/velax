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
exports.ReceptionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const reception_service_1 = require("./reception.service");
const reception_entity_1 = require("./entities/reception.entity");
const create_reception_input_1 = require("./dto/create-reception.input");
const update_reception_input_1 = require("./dto/update-reception.input");
const common_1 = require("@nestjs/common");
let ReceptionResolver = class ReceptionResolver {
    constructor(receptionService) {
        this.receptionService = receptionService;
    }
    createReception(createReceptionInput) {
        return this.receptionService.create(createReceptionInput);
    }
    findAll() {
        return this.receptionService.findAll();
    }
    findOne(id) {
        return this.receptionService.findOne(id);
    }
    updateReception(updateReceptionInput) {
        return this.receptionService.update(updateReceptionInput.id, updateReceptionInput);
    }
    removeReception(id) {
        return this.receptionService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => reception_entity_1.Reception),
    __param(0, (0, graphql_1.Args)('createReceptionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reception_input_1.CreateReceptionInput]),
    __metadata("design:returntype", void 0)
], ReceptionResolver.prototype, "createReception", null);
__decorate([
    (0, graphql_1.Query)(() => [reception_entity_1.Reception], { name: 'receptions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReceptionResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => reception_entity_1.Reception, { name: 'reception' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptionResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => reception_entity_1.Reception),
    __param(0, (0, graphql_1.Args)('updateReceptionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_reception_input_1.UpdateReceptionInput]),
    __metadata("design:returntype", void 0)
], ReceptionResolver.prototype, "updateReception", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptionResolver.prototype, "removeReception", null);
ReceptionResolver = __decorate([
    (0, graphql_1.Resolver)(() => reception_entity_1.Reception),
    __metadata("design:paramtypes", [reception_service_1.ReceptionService])
], ReceptionResolver);
exports.ReceptionResolver = ReceptionResolver;
//# sourceMappingURL=reception.resolver.js.map