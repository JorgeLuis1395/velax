import { Role } from '../../role/entities/role.entity';
import { Customer } from '../../customer/entities/customer.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    fullName: string;
    active: boolean;
    roles: Role[];
    customers: Customer[];
    avatar: string;
    createdAt: Date;
    updated_at: Date;
}
