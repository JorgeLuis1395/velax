import { Mae } from '../../mae/entities/mae.entity';
import { Waste } from '../../waste/entities/waste.entity';
import { Requests } from '../../request/entities/request.entity';
export declare class RequestDetailMae {
    id: string;
    maeId: string | Mae;
    wastes: Waste[];
    requestId: number | Requests;
    weight: number;
    weightReception: number;
    originalTotalWeight: number;
    status: boolean;
}
