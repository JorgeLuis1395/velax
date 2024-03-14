import { Mae } from '../../mae/entities/mae.entity';
export declare class CreateCompanyInput {
    name: string;
    licence: string;
    address: string;
    place: string;
    maes?: [Mae];
}
