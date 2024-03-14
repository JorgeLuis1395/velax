/// <reference types="multer" />
import { DocumentsService } from './documents.service';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    upload(file: Express.Multer.File, id: string): Promise<{
        data: string;
    }>;
}
