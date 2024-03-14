import { DetailCatalog } from '../../detail-catalog/entities/detail-catalog.entity';
export declare class Catalog {
    id: string;
    nemonico: string;
    name: string;
    description: string;
    detailCatalog: DetailCatalog[];
    status: boolean;
    createdAt: Date;
    private formatNemonico;
}
