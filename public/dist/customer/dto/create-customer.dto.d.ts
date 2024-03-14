import { DetailCatalog } from '../../detail-catalog/entities/detail-catalog.entity';
export declare class CreateCustomerDto {
    businessName: string;
    commercialName: string;
    documentId: string;
    numberDocument: string;
    requirements: DetailCatalog[];
    userId?: string;
    groupId: string;
    status: boolean;
}
