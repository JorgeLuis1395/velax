import { Repository } from 'typeorm';
import { CreateWorksheetDto } from './dto/create-worksheet.dto';
import { Worksheet } from './entities/worksheet.entity';
import { UpdateWorksheetDto } from './dto/update-worksheet.dto';
export declare class WorksheetService {
    private readonly worksheetRepository;
    constructor(worksheetRepository: Repository<Worksheet>);
    create(createWorksheetDto: CreateWorksheetDto): Promise<{
        worksheet: Worksheet;
    }>;
    findAll(status: string): Promise<{
        worksheets: Worksheet[];
    }>;
    findOne(id: string): Promise<{
        worksheet: Worksheet;
    }>;
    update(id: string, updateWorksheetDto: UpdateWorksheetDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
