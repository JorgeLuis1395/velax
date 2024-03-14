import { CreateWorksheetDto } from './dto/create-worksheet.dto';
import { UpdateWorksheetDto } from './dto/update-worksheet.dto';
import { WorksheetService } from './worksheet.service';
export declare class WorksheetController {
    private readonly worksheetService;
    constructor(worksheetService: WorksheetService);
    create(createWorksheetDto: CreateWorksheetDto): Promise<{
        worksheet: import("./entities/worksheet.entity").Worksheet;
    }>;
    findAll(status?: string): Promise<{
        worksheets: import("./entities/worksheet.entity").Worksheet[];
    }>;
    findOne(id: string): Promise<{
        worksheet: import("./entities/worksheet.entity").Worksheet;
    }>;
    update(id: string, updateWorksheetDto: UpdateWorksheetDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
