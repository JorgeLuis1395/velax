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
exports.RememberService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const remember_entity_1 = require("./entities/remember.entity");
const typeorm_2 = require("typeorm");
let RememberService = class RememberService {
    constructor(rememberRepository) {
        this.rememberRepository = rememberRepository;
    }
    async create(createRememberInput) {
        try {
            const remember = this.rememberRepository.create(createRememberInput);
            await this.rememberRepository.save(remember);
            return remember;
        }
        catch (e) {
            console.log('ERROR TO CREATE REMEMBER');
            console.log(e);
            throw new common_1.BadRequestException(e.detail);
        }
    }
    async findAll() {
        return this.rememberRepository.find();
    }
    async findOne(id) {
        const remember = await this.rememberRepository.findOneBy({ id });
        if (!remember)
            throw new common_1.NotFoundException('Remember not found');
        return remember;
    }
    async update(id, updateRememberInput) {
        const remember = await this.findOne(id);
        const params = Object.assign(Object.assign({}, remember), updateRememberInput);
        await this.rememberRepository.save(params);
        return params;
    }
    async remove(id) {
        const remember = await this.findOne(id);
        await this.rememberRepository.delete(id);
        return remember;
    }
};
RememberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(remember_entity_1.Remember)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RememberService);
exports.RememberService = RememberService;
//# sourceMappingURL=remember.service.js.map