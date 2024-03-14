import { Customer } from '../../../customer/entities/customer.entity';
export declare class CreateContractInput {
    customer: Customer | string;
    duration: Date;
    document: string;
    processNumber: string;
    notes: string;
}
