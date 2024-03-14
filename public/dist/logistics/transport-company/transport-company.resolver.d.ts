import { TransportCompanyService } from './transport-company.service';
import { TransportCompany } from './entities/transport-company.entity';
import { CreateTransportCompanyInput } from './dto/create-transport-company.input';
export declare class TransportCompanyResolver {
    private readonly transportCompanyService;
    constructor(transportCompanyService: TransportCompanyService);
    createTransportCompany(createTransportCompanyInput: CreateTransportCompanyInput): Promise<TransportCompany>;
    findAll(): Promise<TransportCompany[]>;
    findOne(id: string): Promise<TransportCompany>;
}
