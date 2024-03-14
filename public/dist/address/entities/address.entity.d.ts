import { Requests } from '../../request/entities/request.entity';
export declare class Address {
    id: string;
    name: string;
    ruc: string;
    province: string;
    city: string;
    canton: string;
    coords: string;
    instructions: string;
    technicalName: string;
    technicalPhone: string;
    technicalEmail: string;
    phoneOffice: string;
    representative: string;
    phone: string;
    email: string;
    licence: string;
    wastedRegister: string;
    customer: string;
    request: Requests[];
    createdAt: Date;
    segment: string;
    status: boolean;
    isMain: boolean;
    updatedAt: Date;
    private parseAddressData;
}
