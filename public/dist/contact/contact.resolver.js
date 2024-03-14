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
exports.ContactResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const contact_service_1 = require("./contact.service");
const contact_entity_1 = require("./entities/contact.entity");
const create_contact_input_1 = require("./dto/create-contact.input");
const update_contact_input_1 = require("./dto/update-contact.input");
const common_1 = require("@nestjs/common");
let ContactResolver = class ContactResolver {
    constructor(contactService) {
        this.contactService = contactService;
    }
    createContact(createContactInput) {
        return this.contactService.create(createContactInput);
    }
    findAll() {
        return this.contactService.findAll();
    }
    findOne(id) {
        return this.contactService.findOne(id);
    }
    updateContact(updateContactInput) {
        return this.contactService.update(updateContactInput.id, updateContactInput);
    }
    removeContact(id) {
        return this.contactService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => contact_entity_1.Contact),
    __param(0, (0, graphql_1.Args)('createContactInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_input_1.CreateContactInput]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "createContact", null);
__decorate([
    (0, graphql_1.Query)(() => [contact_entity_1.Contact], { name: 'contacts' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => contact_entity_1.Contact, { name: 'contact' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => contact_entity_1.Contact),
    __param(0, (0, graphql_1.Args)('updateContactInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_contact_input_1.UpdateContactInput]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "updateContact", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('id', { type: () => String }, common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactResolver.prototype, "removeContact", null);
ContactResolver = __decorate([
    (0, graphql_1.Resolver)(() => contact_entity_1.Contact),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactResolver);
exports.ContactResolver = ContactResolver;
//# sourceMappingURL=contact.resolver.js.map