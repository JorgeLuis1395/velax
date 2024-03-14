import { FixReceptionService } from './fix-reception.service';
import { FixReception } from './entities/fix-reception.entity';
import { CreateFixReceptionInput } from './dto/create-fix-reception.input';
import { UpdateFixReceptionInput } from './dto/update-fix-reception.input';
export declare class FixReceptionResolver {
    private readonly fixReceptionService;
    constructor(fixReceptionService: FixReceptionService);
    createFixReception(createFixReceptionInput: CreateFixReceptionInput): Promise<FixReception>;
    findAll(): Promise<FixReception[]>;
    findOne(id: string): Promise<FixReception>;
    updateFixReception(updateFixReceptionInput: UpdateFixReceptionInput): Promise<string>;
}
