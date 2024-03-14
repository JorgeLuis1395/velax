import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { RequestService } from '../request/request.service';
import { Mae } from '../mae/entities/mae.entity';
export declare class CompaniesService {
    private readonly company;
    private readonly request;
    constructor(company: Repository<Company>, request: RequestService);
    create(createCompanyInput: CreateCompanyInput): Promise<Company>;
    findAll(): Promise<Company[]>;
    findOne(id: string): Promise<Company>;
    update(id: string, updateCompanyInput: UpdateCompanyInput): Promise<{
        id: string;
        updatedAt: Date;
        name: string;
        licence: string;
        address: string;
        place: string;
        maes: [Mae];
        status: boolean;
        createdAt: Date;
    } & Company>;
    remove(id: string): Promise<Company>;
    private findByMaes;
    availableCompany(requestId: number): Promise<Company[]>;
}
