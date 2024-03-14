import { Requests } from '../../../request/entities/request.entity';
import { User } from '../../../auth/entities/user.entity';
import { Vehicle } from 'src/logistics/vehicle/entities/vehicle.entity';
export declare class Driver {
    id: string;
    fullName: string;
    address: string;
    ci: string;
    licence: string;
    phone: string;
    email: string;
    type: string;
    status: boolean;
    requests: Requests[];
    user: string | User;
    vehicle: string | Vehicle;
    createdAt: Date;
    updatedAt: Date;
}
