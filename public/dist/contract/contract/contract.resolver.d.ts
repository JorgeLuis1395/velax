import { ContractService } from './contract.service';
import { Contract } from './entities/contract.entity';
import { CreateContractInput } from './dto/create-contract.input';
export declare class ContractResolver {
    private readonly contractService;
    constructor(contractService: ContractService);
    createContract(createContractInput: CreateContractInput): Promise<Contract>;
    findAll(customer: string): Promise<Contract[]>;
    findOne(id: string): Promise<Contract>;
    generateDocument(id: string): Promise<import("@nestjs/common").BadRequestException | {
        detailDocument: string;
        document: string;
    }>;
    downloadDocument(customerId: string): Promise<string>;
    removeContract(id: string): Promise<string>;
}
