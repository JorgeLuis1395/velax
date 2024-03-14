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
exports.FixReceptionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const fix_reception_service_1 = require("./fix-reception.service");
const fix_reception_entity_1 = require("./entities/fix-reception.entity");
const create_fix_reception_input_1 = require("./dto/create-fix-reception.input");
const update_fix_reception_input_1 = require("./dto/update-fix-reception.input");
let FixReceptionResolver = class FixReceptionResolver {
    constructor(fixReceptionService) {
        this.fixReceptionService = fixReceptionService;
    }
    createFixReception(createFixReceptionInput) {
        return this.fixReceptionService.create(createFixReceptionInput);
    }
    findAll() {
        return this.fixReceptionService.findAll();
    }
    findOne(id) {
        return this.fixReceptionService.findOne(id);
    }
    updateFixReception(updateFixReceptionInput) {
        return this.fixReceptionService.update(updateFixReceptionInput.id, updateFixReceptionInput);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => fix_reception_entity_1.FixReception),
    __param(0, (0, graphql_1.Args)('createFixReceptionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fix_reception_input_1.CreateFixReceptionInput]),
    __metadata("design:returntype", void 0)
], FixReceptionResolver.prototype, "createFixReception", null);
__decorate([
    (0, graphql_1.Query)(() => [fix_reception_entity_1.FixReception], { name: 'fixReceptions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FixReceptionResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => fix_reception_entity_1.FixReception, { name: 'fixReception' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FixReceptionResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('updateFixReceptionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_fix_reception_input_1.UpdateFixReceptionInput]),
    __metadata("design:returntype", void 0)
], FixReceptionResolver.prototype, "updateFixReception", null);
FixReceptionResolver = __decorate([
    (0, graphql_1.Resolver)(() => fix_reception_entity_1.FixReception),
    __metadata("design:paramtypes", [fix_reception_service_1.FixReceptionService])
], FixReceptionResolver);
exports.FixReceptionResolver = FixReceptionResolver;
//# sourceMappingURL=fix-reception.resolver.js.map