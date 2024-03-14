import { WasteService } from './waste.service';
import { CreateWasteDto } from './dto/create-waste.dto';
import { UpdateWasteDto } from './dto/update-waste.dto';
export declare class WasteController {
    private readonly wasteService;
    constructor(wasteService: WasteService);
    create(createWasteDto: CreateWasteDto): Promise<{
        waste: import("./entities/waste.entity").Waste;
    }>;
    findAll(): Promise<{
        wastes: import("./entities/waste.entity").Waste[];
    }>;
    findOne(id: string): Promise<{
        waste: import("./entities/waste.entity").Waste;
    }>;
    update(id: string, updateWasteDto: UpdateWasteDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
