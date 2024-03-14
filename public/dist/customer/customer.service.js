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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_entity_1 = require("./entities/customer.entity");
const typeorm_2 = require("typeorm");
let CustomerService = class CustomerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async create(createCustomerDto, user) {
        const isNotCommercial = user.roles.some(item => item.name.includes('COMMERCIAL'));
        if (!isNotCommercial) {
            const { userId: customerUser } = createCustomerDto;
            if (!customerUser)
                throw new common_1.BadRequestException(`To user admin need field user to create customer`);
        }
        if (isNotCommercial) {
            createCustomerDto.userId = user.id;
        }
        try {
            const customer = this.customerRepository.create(createCustomerDto);
            await this.customerRepository.save(customer);
            return { customer };
        }
        catch (e) {
            console.log('Error to create customer');
            console.log(e);
            throw new common_1.BadRequestException({
                message: `Can't create customer`, error: e.toString(),
            });
        }
    }
    async findAll() {
        try {
            const customers = await this.customerRepository.find({ where: { status: true } });
            const filterAddress = customers.map(function (item) {
                return Object.assign(Object.assign({}, item), { addresses: item.addresses.filter(item => item.status), contacts: item.contacts.filter(item => item.status) });
            });
            return { customers: filterAddress };
        }
        catch (e) {
            console.log('ERROR TO GET ALL CUSTOMERS');
            console.log(e);
            throw new common_1.BadRequestException(e.detail);
        }
    }
    async findByCommercial(user) {
        try {
            const customers = await this.customerRepository.find({ where: { userId: user } });
            const filterAddress = customers.map(function (item) {
                return Object.assign(Object.assign({}, item), { addresses: item.addresses.filter(item => item.status === true), contacts: item.contacts.filter(item => item.status) });
            });
            return { customers: filterAddress };
        }
        catch (e) {
            console.log('ERROR TO GET CUSTOMERS BY USER');
            console.log(e);
            throw new common_1.BadRequestException(e.toString());
        }
    }
    async findOne(id) {
        const customer = await this.customerRepository.findOne({ where: { status: true, id } });
        if (!customer)
            throw new common_1.NotFoundException(`Customer not found`);
        const addressesActive = customer.addresses.filter(item => item.status === true);
        return { customer: Object.assign(Object.assign({}, customer), { addresses: addressesActive }) };
    }
    ;
    async update(id, updateCustomerDto) {
        const { customer } = await this.findOne(id);
        const params = Object.assign(Object.assign(Object.assign({}, customer), updateCustomerDto), { updatedAt: new Date() });
        await this.customerRepository.save(params);
        return { message: 'Customer updated successfully' };
    }
    async remove(id) {
        await this.findOne(id);
        await this.customerRepository.delete({ id });
        return { message: `Customer deleted successfully` };
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map