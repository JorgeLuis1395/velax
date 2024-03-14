import { User } from '../../auth/entities/user.entity';
import { DetailCatalog } from '../../detail-catalog/entities/detail-catalog.entity';
import { Address } from '../../address/entities/address.entity';
import { Requests } from '../../request/entities/request.entity';
import { Contact } from '../../contact/entities/contact.entity';
import { Remember } from '../../remember/entities/remember.entity';
export declare class Customer {
    id: string;
    businessName: string;
    commercialName: string;
    documentId: string;
    numberDocument: string;
    contacts: Contact[];
    userId: string | User;
    addresses: Address[];
    groupId: string | DetailCatalog;
    requests: Requests[];
    createdAt: Date;
    remembers: Remember[];
    requirements: DetailCatalog[];
    updatedAt: Date;
    status: boolean;
}
