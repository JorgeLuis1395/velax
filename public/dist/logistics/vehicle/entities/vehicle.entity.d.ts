import { DetailCatalog } from '../../../detail-catalog/entities/detail-catalog.entity';
import { Requests } from '../../../request/entities/request.entity';
import { TransportCompany } from '../../transport-company/entities/transport-company.entity';
import { Driver } from 'src/logistics/driver/entities/driver.entity';
export declare class Vehicle {
    id: string;
    plate: string;
    cylinder: number;
    typeVehicle: string | DetailCatalog;
    brand: string;
    year: string;
    unity: string;
    status: boolean;
    createdAt: Date;
    request: Requests[];
    updatedAt: Date;
    company: string | TransportCompany;
    weigth: number;
    drivers: Driver[];
    private formatData;
}
