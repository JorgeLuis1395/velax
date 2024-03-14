import { ContractDetailService } from './contract-detail.service';
import { ContractDetail } from './entities/contract-detail.entity';
import { CreateContractDetailInput } from './dto/create-contract-detail.input';
import { UpdateContractDetailInput } from './dto/update-contract-detail.input';
export declare class ContractDetailResolver {
    private readonly contractDetailService;
    constructor(contractDetailService: ContractDetailService);
    createContractDetail(createContractDetailInput: CreateContractDetailInput): Promise<ContractDetail>;
    updateContractDetail(updateContractDetailInput: UpdateContractDetailInput): Promise<string>;
    removeContractDetail(id: string): Promise<string>;
}
