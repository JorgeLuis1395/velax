import { CreateTransportCompanyInput } from './dto/create-transport-company.input';
import { Repository } from 'typeorm';
import { TransportCompany } from './entities/transport-company.entity';
export declare class TransportCompanyService {
    private readonly transportCompanyRepository;
    constructor(transportCompanyRepository: Repository<TransportCompany>);
    create(createTransportCompanyInput: CreateTransportCompanyInput): Promise<TransportCompany>;
    findAll(): Promise<TransportCompany[]>;
    findOne(id: string): Promise<TransportCompany>;
}
