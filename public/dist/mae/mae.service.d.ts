import { CreateMaeDto } from './dto/create-mae.dto';
import { UpdateMaeDto } from './dto/update-mae.dto';
import { Mae } from './entities/mae.entity';
import { Repository } from 'typeorm';
export declare class MaeService {
    private readonly maeRepository;
    constructor(maeRepository: Repository<Mae>);
    create(createMaeDto: CreateMaeDto): Promise<{
        mae: Mae;
    }>;
    findAll(): Promise<{
        mae: Mae[];
    }>;
    findOne(param: string): Promise<{
        mae: Mae;
    } | {
        mae: Mae[];
    }>;
    update(id: string, updateMaeDto: UpdateMaeDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
