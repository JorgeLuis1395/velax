import { Customer } from '../../../customer/entities/customer.entity';
import { ContractDetail } from '../../../contract-detail/entities/contract-detail.entity';
export declare class Contract {
    id: string;
    customer: Customer | string;
    detail: [ContractDetail];
    duration: Date;
    missingTime: number;
    processNumber: string;
    status: boolean;
    document: string;
    hasDocument: boolean;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
}
