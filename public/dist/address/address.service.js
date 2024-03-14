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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const address_entity_1 = require("./entities/address.entity");
const typeorm_2 = require("typeorm");
let AddressService = class AddressService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async create(createAddressDto) {
        const address = this.addressRepository.create(createAddressDto);
        await this.updatedMainAddress(address);
        try {
            await this.addressRepository.save(address);
            return { address };
        }
        catch (e) {
            console.log('Error to create address');
            console.log(e.detail);
            throw new common_1.BadRequestException({ message: `Can't create address`, error: e.detail });
        }
    }
    async findAll() {
        try {
            const address = await this.addressRepository.findBy({ status: true });
            return { address };
        }
        catch (e) {
            console.log('Error to get all address');
            console.log(e);
            throw new common_1.BadRequestException({ message: `Can't get all address`, e: e.toString() });
        }
    }
    async findOne(id) {
        const address = await this.addressRepository.findOneBy({ id, status: true });
        if (!address)
            throw new common_1.NotFoundException(`Address not found`);
        return { address };
    }
    async update(id, updateAddressDto) {
        const { address } = await this.findOne(id);
        const params = Object.assign(Object.assign(Object.assign({}, address), updateAddressDto), { updatedAt: new Date() });
        await this.updatedMainAddress(params);
        try {
            await this.addressRepository.save(params);
            return { message: 'Address updated successfully' };
        }
        catch (e) {
            console.log('Error to updated address');
            console.log(e);
            throw new common_1.BadRequestException(`Can't update address`);
        }
    }
    async remove(id) {
        const { address } = await this.findOne(id);
        try {
            const params = Object.assign(Object.assign({}, address), { status: false, updatedAt: new Date() });
            await this.addressRepository.save(params);
            return { message: `Address deleted successfully` };
        }
        catch (e) {
            console.log('Error to deleted address');
            console.log(e);
            throw new common_1.BadRequestException(`Can't delete address`);
        }
    }
    async updatedMainAddress(address) {
        if (!address.customer) {
            const updatedAddress = await this.addressRepository.createQueryBuilder('address')
                .leftJoinAndSelect('address.customer', 'customer')
                .where('address.id =:id', { id: address.id })
                .getOne();
            const customer = updatedAddress.customer;
            address.customer = customer.id;
        }
        if (address.isMain)
            await this.addressRepository.update({ customer: address.customer }, { isMain: false });
    }
};
AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(address_entity_1.Address)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map