import { DetailCatalog } from 'src/detail-catalog/entities/detail-catalog.entity';
import { Worksheet } from 'src/worksheet/entities/worksheet.entity';
export declare class ShippingGuide {
    id: string;
    clientName?: string;
    guideAddress: string;
    lat: string;
    lng: string;
    worksheetId: Worksheet | string;
    guideNumber: string;
    deliveryStatus: DetailCatalog | string;
    image: string;
    detail: string;
    createdAt: Date;
    updatedAt: Date;
}
