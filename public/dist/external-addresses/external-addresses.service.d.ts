import { CreateExternalAddressInput } from './dto/create-external-address.input';
import { ExternalAddress } from './entities/external-address.entity';
import { Repository } from 'typeorm';
export declare class ExternalAddressesService {
    private readonly externalAddressRepository;
    constructor(externalAddressRepository: Repository<ExternalAddress>);
    create(createExternalAddressInput: CreateExternalAddressInput): Promise<ExternalAddress>;
    findAll(): Promise<ExternalAddress[]>;
    findOne(id: string): Promise<ExternalAddress>;
}
