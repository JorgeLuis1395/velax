import { Catalog } from '../../catalog/entities/catalog.entity';
export declare class DetailCatalog {
    id: string;
    name: string;
    catalog: Catalog;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    private formatNameDetail;
}
