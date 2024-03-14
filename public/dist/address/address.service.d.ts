import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
export declare class AddressService {
    private readonly addressRepository;
    constructor(addressRepository: Repository<Address>);
    create(createAddressDto: CreateAddressDto): Promise<{
        address: Address;
    }>;
    findAll(): Promise<{
        address: Address[];
    }>;
    findOne(id: string): Promise<{
        address: Address;
    }>;
    update(id: string, updateAddressDto: UpdateAddressDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    private updatedMainAddress;
}
