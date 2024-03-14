import { BadRequestException } from '@nestjs/common';
import { CreateContractInput } from './dto/create-contract.input';
import { Contract } from './entities/contract.entity';
import { Repository } from 'typeorm';
import { UpdateContractInput } from './dto/update-contract.input';
import { CustomerService } from '../../customer/customer.service';
import { ConfigService } from '@nestjs/config';
import { ContractDetail } from '../../contract-detail/entities/contract-detail.entity';
import { Mae } from '../../mae/entities/mae.entity';
export declare class ContractService {
    private readonly contractRepository;
    private readonly customerService;
    private readonly configService;
    constructor(contractRepository: Repository<Contract>, customerService: CustomerService, configService: ConfigService);
    create(createContractInput: CreateContractInput): Promise<Contract>;
    findAll(customer: string): Promise<Contract[]>;
    findOne(id: string): Promise<Contract>;
    remove(id: string): Promise<string>;
    updated(updatedContract: UpdateContractInput): Promise<string>;
    generateDocument(id: string): Promise<BadRequestException | {
        detailDocument: string;
        document: string;
    }>;
    downloadPrivateContractTemplate(customerId: string): Promise<string>;
    documentData(contract: Contract): {
        entityContract: string;
        processNum: string;
        duration: string;
        createdAt: string;
        detail: {
            total: number;
            id: string;
            mae: string | Mae;
            contract: string | Contract;
            weight: number;
            balance: number;
            price: number;
            groupId: string;
            groupName: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        totalWeight: string | number;
        subTotal: string | number;
        IVA: string | number;
        total: string | number;
    };
    groupDetail(detail: ContractDetail[]): ContractDetail[];
}
