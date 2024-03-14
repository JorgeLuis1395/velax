import { DetailCatalog } from 'src/detail-catalog/entities/detail-catalog.entity';
import { ShippingGuide } from 'src/shipping-guide/entities/shipping-guide.entity';
export declare class Worksheet {
    id: string;
    worksheetStatus: DetailCatalog | string;
    guide?: ShippingGuide[];
    fecha?: Date;
    placa?: string;
    numero?: string;
    chofer?: string;
    createdAt: Date;
    updatedAt: Date;
}
