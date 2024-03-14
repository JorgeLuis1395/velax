import { Requests } from '../../request/entities/request.entity';
import { DetailCatalog } from '../../detail-catalog/entities/detail-catalog.entity';
export declare class Reception {
    id: string;
    dateReception: Date;
    hourReception: string;
    request: number | Requests;
    numRequest: number;
    catalog: string | DetailCatalog;
    totalWeight: number;
    totalWeightReception: number;
    unity: string | DetailCatalog;
    status: string | DetailCatalog;
    cratedAt: Date;
    updatedAt: Date;
}
