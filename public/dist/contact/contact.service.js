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
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const contact_entity_1 = require("./entities/contact.entity");
const typeorm_2 = require("typeorm");
let ContactService = class ContactService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async create(createContactInput) {
        try {
            const contact = this.contactRepository.create(createContactInput);
            return this.contactRepository.save(contact);
        }
        catch (e) {
            console.log('ERROR TO CREATE CONTACT');
            console.log(e);
            throw new common_1.BadRequestException(e.detail);
        }
    }
    async findAll() {
        return this.contactRepository.findBy({ status: true });
    }
    async findOne(id) {
        const contact = this.contactRepository.findOneBy({ id });
        if (!contact)
            throw new common_1.NotFoundException('Contact not found');
        return contact;
    }
    async update(id, updateContactInput) {
        const contact = await this.findOne(id);
        const params = Object.assign(Object.assign(Object.assign({}, contact), updateContactInput), { updatedAt: new Date() });
        await this.contactRepository.save(params);
        return params;
    }
    async remove(id) {
        const contact = await this.findOne(id);
        await this.contactRepository.save(Object.assign(Object.assign({}, contact), { status: false }));
        return 'Contact deletes successfully';
    }
};
ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contact_entity_1.Contact)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map