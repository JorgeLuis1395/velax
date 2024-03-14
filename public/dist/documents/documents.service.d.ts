/// <reference types="multer" />
import { ContractService } from '../contract/contract/contract.service';
export declare class DocumentsService {
    private readonly contractService;
    constructor(contractService: ContractService);
    create(file: Express.Multer.File, id: any): Promise<{
        data: string;
    }>;
}
