import { Waste } from '../../waste/entities/waste.entity';
export declare class Mae {
    id: string;
    name: string;
    description: string;
    waste: [Waste];
    treatment: string;
    createdAt: Date;
    updatedAt: Date;
}
