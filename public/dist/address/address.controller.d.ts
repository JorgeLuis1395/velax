import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto): Promise<{
        address: import("./entities/address.entity").Address;
    }>;
    findAll(): Promise<{
        address: import("./entities/address.entity").Address[];
    }>;
    findOne(id: string): Promise<{
        address: import("./entities/address.entity").Address;
    }>;
    update(id: string, updateAddressDto: UpdateAddressDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
