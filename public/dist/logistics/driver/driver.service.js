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
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const driver_entity_1 = require("./entities/driver.entity");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
let DriverService = class DriverService {
    constructor(driverRepository) {
        this.driverRepository = driverRepository;
    }
    async create(createDriverDto) {
        try {
            const driver = this.driverRepository.create(createDriverDto);
            await this.driverRepository.save(driver);
            return { driver };
        }
        catch (e) {
            console.log('ERROR TO CREATE DRIVER');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
    }
    async findAll() {
        try {
            const drivers = await this.driverRepository.findBy({ status: true });
            return { drivers };
        }
        catch (e) {
            console.log('ERROR TO GET ALL DRIVER');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
    }
    async findOne(param) {
        if ((0, class_validator_1.isUUID)(param)) {
            const driver = await this.driverRepository.findOneBy({ id: param });
            if (!driver)
                throw new common_1.NotFoundException(`Driver not found by id`);
            return { driver };
        }
        try {
            const findByParam = await this.driverRepository.createQueryBuilder('driver')
                .leftJoinAndSelect('driver.type', 'type')
                .where('driver.full_name like :name OR ci like :ci or type.name = :type AND status = true', {
                name: `%${param}%`,
                ci: `%${param}%`,
                type: param.toUpperCase(),
            })
                .getMany();
            if (findByParam.length > 0)
                return { drivers: findByParam };
        }
        catch (e) {
            console.log('ERROR TO GET  DRIVER');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
        throw new common_1.NotFoundException(`Drivers not found`);
    }
    async update(id, updateDriverDto) {
        try {
            const { driver } = await this.findOne(id);
            const update = Object.assign(Object.assign(Object.assign({}, driver), updateDriverDto), { updatedAt: new Date() });
            await this.driverRepository.save(update);
            return { message: 'Driver updated successfully' };
        }
        catch (e) {
            console.log('ERROR TO UPDATED  DRIVER');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
    }
    async remove(id) {
        try {
            const { driver } = await this.findOne(id);
            const updated = Object.assign(Object.assign({}, driver), { status: false });
            await this.driverRepository.save(updated);
            return { message: 'Driver deletes successfully' };
        }
        catch (e) {
            console.log('ERROR TO DELETE  DRIVER');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
    }
};
DriverService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(driver_entity_1.Driver)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DriverService);
exports.DriverService = DriverService;
//# sourceMappingURL=driver.service.js.map