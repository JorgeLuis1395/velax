import { Requests } from '../../request/entities/request.entity';
import { DetailCatalog } from '../../detail-catalog/entities/detail-catalog.entity';
export declare class FixReception {
    id: string;
    request: number | Requests;
    status: string | DetailCatalog;
    createdAt: Date;
    updatedAt: Date;
}
