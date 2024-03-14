import { CompaniesService } from './companies.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
export declare class CompaniesResolver {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    createCompany(createCompanyInput: CreateCompanyInput): Promise<Company>;
    findAll(): Promise<Company[]>;
    findOne(id: string): Promise<Company>;
    updateCompany(updateCompanyInput: UpdateCompanyInput): Promise<{
        id: string;
        updatedAt: Date;
        name: string;
        licence: string;
        address: string;
        place: string;
        maes: [import("../mae/entities/mae.entity").Mae];
        status: boolean;
        createdAt: Date;
    } & Company>;
    removeCompany(id: string): Promise<Company>;
    availableCompanies(requestId: number): Promise<Company[]>;
}
