import { CreateWasteDto } from './dto/create-waste.dto';
import { UpdateWasteDto } from './dto/update-waste.dto';
import { Waste } from './entities/waste.entity';
import { Repository } from 'typeorm';
export declare class WasteService {
    private readonly wasteRepository;
    constructor(wasteRepository: Repository<Waste>);
    create(createWasteDto: CreateWasteDto): Promise<{
        waste: Waste;
    }>;
    findAll(): Promise<{
        wastes: Waste[];
    }>;
    findOne(id: string): Promise<{
        waste: Waste;
    }>;
    update(id: string, updateWasteDto: UpdateWasteDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
