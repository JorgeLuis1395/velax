import { MaeService } from './mae.service';
import { CreateMaeDto } from './dto/create-mae.dto';
import { UpdateMaeDto } from './dto/update-mae.dto';
export declare class MaeController {
    private readonly maeService;
    constructor(maeService: MaeService);
    create(createMaeDto: CreateMaeDto): Promise<{
        mae: import("./entities/mae.entity").Mae;
    }>;
    findAll(): Promise<{
        mae: import("./entities/mae.entity").Mae[];
    }>;
    findOne(id: string): Promise<{
        mae: import("./entities/mae.entity").Mae;
    } | {
        mae: import("./entities/mae.entity").Mae[];
    }>;
    update(id: string, updateMaeDto: UpdateMaeDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
