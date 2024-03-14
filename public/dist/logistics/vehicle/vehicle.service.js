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
exports.VehicleService = void 0;
const common_1 = require("@nestjs/common");
const vehicle_entity_1 = require("./entities/vehicle.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const class_validator_1 = require("class-validator");
let VehicleService = class VehicleService {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    async create(createVehicleDto) {
        try {
            const vehicle = this.vehicleRepository.create(createVehicleDto);
            await this.vehicleRepository.save(vehicle);
            return { vehicle };
        }
        catch (e) {
            console.log('ERROR TO CREATE VEHICLE');
            console.log(e);
            throw new common_1.BadRequestException(e.detail.toString());
        }
    }
    async findAll() {
        try {
            const vehicles = await this.vehicleRepository.findBy({ status: true });
            return { vehicles };
        }
        catch (e) {
            console.log('ERROR TO FIND ALL VEHICLES');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
    }
    async findOne(param) {
        if ((0, class_validator_1.isUUID)(param)) {
            const vehicle = await this.vehicleRepository.findOneBy({ id: param, status: true });
            if (!vehicle)
                throw new common_1.NotFoundException(`Vehicle not found by id`);
            return { vehicle };
        }
        const vehicles = await this.vehicleRepository.createQueryBuilder('vehicle')
            .leftJoinAndSelect('vehicle.typeVehicle', 'typeVehicle')
            .leftJoinAndSelect('vehicle.brand', 'brand')
            .leftJoinAndSelect('vehicle.unity', 'unity')
            .leftJoinAndSelect('vehicle.driver', 'driver')
            .leftJoinAndSelect('vehicle.helpers', 'helpers')
            .where('vehicle.plate like :plate and vehicle.status=true', { plate: `%${param}%` })
            .getMany();
        if (vehicles.length > 0)
            return { vehicles };
        throw new common_1.NotFoundException(`Vehicle not found by plate or id`);
    }
    async update(id, updateVehicleDto) {
        try {
            const { vehicle } = await this.findOne(id);
            const updated = Object.assign(Object.assign(Object.assign({}, vehicle), updateVehicleDto), { updatedAt: new Date() });
            await this.vehicleRepository.save(updated);
            return { message: 'Vehicle updated successfully' };
        }
        catch (e) {
            console.log('ERROR TO UPDATED VEHICLES');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
    }
    async remove(id) {
        try {
            const { vehicle } = await this.findOne(id);
            const deleteVehicle = Object.assign(Object.assign({}, vehicle), { status: false });
            await this.vehicleRepository.save(deleteVehicle);
            return { message: 'Vehicle deleted successfully' };
        }
        catch (e) {
            console.log('ERROR TO DELETE VEHICLES');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
    }
};
VehicleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vehicle_entity_1.Vehicle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VehicleService);
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle.service.js.map