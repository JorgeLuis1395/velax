import { Mae } from '../../mae/entities/mae.entity';
export declare class Company {
    id: string;
    name: string;
    licence: string;
    address: string;
    place: string;
    status: boolean;
    maes: [Mae];
    createdAt: Date;
    updatedAt: Date;
}
