import { Waste } from '../../waste/entities/waste.entity';
export declare class CreateRequestDetailMaeDto {
    maeId: string;
    wastes: Waste[];
    weight: number;
    weightReception: number;
    requestId: number;
    detailContractId: string;
    status: boolean;
}
