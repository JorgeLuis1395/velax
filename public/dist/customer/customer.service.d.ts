import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    create(createCustomerDto: CreateCustomerDto, user: User): Promise<{
        customer: Customer;
    }>;
    findAll(): Promise<{
        customers: {
            addresses: import("../address/entities/address.entity").Address[];
            contacts: import("../contact/entities/contact.entity").Contact[];
            id: string;
            businessName: string;
            commercialName: string;
            documentId: string;
            numberDocument: string;
            userId: string | User;
            groupId: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            requests: import("../request/entities/request.entity").Requests[];
            createdAt: Date;
            remembers: import("../remember/entities/remember.entity").Remember[];
            requirements: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            updatedAt: Date;
            status: boolean;
        }[];
    }>;
    findByCommercial(user: User): Promise<{
        customers: {
            addresses: import("../address/entities/address.entity").Address[];
            contacts: import("../contact/entities/contact.entity").Contact[];
            id: string;
            businessName: string;
            commercialName: string;
            documentId: string;
            numberDocument: string;
            userId: string | User;
            groupId: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            requests: import("../request/entities/request.entity").Requests[];
            createdAt: Date;
            remembers: import("../remember/entities/remember.entity").Remember[];
            requirements: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            updatedAt: Date;
            status: boolean;
        }[];
    }>;
    findOne(id: string): Promise<{
        customer: {
            addresses: import("../address/entities/address.entity").Address[];
            id: string;
            businessName: string;
            commercialName: string;
            documentId: string;
            numberDocument: string;
            contacts: import("../contact/entities/contact.entity").Contact[];
            userId: string | User;
            groupId: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            requests: import("../request/entities/request.entity").Requests[];
            createdAt: Date;
            remembers: import("../remember/entities/remember.entity").Remember[];
            requirements: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            updatedAt: Date;
            status: boolean;
        };
    }>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
