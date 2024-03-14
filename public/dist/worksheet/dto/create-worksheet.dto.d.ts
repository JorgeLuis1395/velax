import { ShippingGuide } from 'src/shipping-guide/entities/shipping-guide.entity';
export declare class CreateWorksheetDto {
    id: string;
    worksheetStatus?: string;
    guide?: ShippingGuide[];
    fecha?: Date;
    placa?: string;
    numero?: string;
    chofer?: string;
    createdAt?: Date;
}
