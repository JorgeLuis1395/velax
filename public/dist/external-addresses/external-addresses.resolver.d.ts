import { ExternalAddressesService } from './external-addresses.service';
import { ExternalAddress } from './entities/external-address.entity';
import { CreateExternalAddressInput } from './dto/create-external-address.input';
export declare class ExternalAddressesResolver {
    private readonly externalAddressesService;
    constructor(externalAddressesService: ExternalAddressesService);
    createExternalAddress(createExternalAddressInput: CreateExternalAddressInput): Promise<ExternalAddress>;
    findAll(): Promise<ExternalAddress[]>;
    findOne(id: string): Promise<ExternalAddress>;
}
