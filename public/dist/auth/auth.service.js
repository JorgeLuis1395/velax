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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt_1 = require("bcrypt");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
let AuthService = class AuthService {
    constructor(userRepository, jwtStrategy) {
        this.userRepository = userRepository;
        this.jwtStrategy = jwtStrategy;
    }
    async create(createUserDto) {
        try {
            createUserDto.password = (0, bcrypt_1.hashSync)(createUserDto.password, 10);
            const user = this.userRepository.create(createUserDto);
            await this.userRepository.save(user);
            delete user.password;
            const token = this.jwtStrategy.generateToken({ id: user.id });
            return Object.assign(Object.assign({}, user), { token });
        }
        catch (e) {
            console.log('-----ERROR TO CREATE USER-----');
            console.log(e);
            throw new common_1.InternalServerErrorException({ message: `Can't not create user`, error: e.toString() });
        }
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userRepository.findOne({
            where: { email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User and/or password incorrect');
        }
        if (!(0, bcrypt_1.compareSync)(password, user.password)) {
            throw new common_1.UnauthorizedException('User and/or password incorrect');
        }
        const token = this.jwtStrategy.generateToken({ id: user.id });
        delete user.password;
        return Object.assign(Object.assign({}, user), { token });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_strategy_1.JwtStrategy])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map