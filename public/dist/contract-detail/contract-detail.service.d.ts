import { BadRequestException } from '@nestjs/common';
import { CreateContractDetailInput } from './dto/create-contract-detail.input';
import { ContractDetail } from './entities/contract-detail.entity';
import { Repository } from 'typeorm';
import { UpdateContractDetailInput } from './dto/update-contract-detail.input';
export declare class ContractDetailService {
    private readonly contractDetailRepository;
    constructor(contractDetailRepository: Repository<ContractDetail>);
    create(createContractDetailInput: CreateContractDetailInput): Promise<ContractDetail>;
    findOne(id: string): Promise<ContractDetail>;
    findByGroupId(id: string): Promise<ContractDetail[]>;
    updateBalance(id: string, total: number): Promise<string | BadRequestException>;
    updateContractDetail(id: string, updateContractDetail: UpdateContractDetailInput): Promise<string>;
    remove(id: string): Promise<string>;
}
