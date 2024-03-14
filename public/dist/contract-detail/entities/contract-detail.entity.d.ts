import { Mae } from '../../mae/entities/mae.entity';
import { Contract } from '../../contract/contract/entities/contract.entity';
export declare class ContractDetail {
    id: string;
    mae: Mae | string;
    contract: Contract | string;
    weight: number;
    balance: number;
    price: number;
    groupId: string;
    groupName: string;
    createdAt: Date;
    updatedAt: Date;
}
