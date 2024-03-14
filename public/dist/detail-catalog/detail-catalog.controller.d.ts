import { DetailCatalogService } from './detail-catalog.service';
import { CreateDetailCatalogDto } from './dto/create-detail-catalog.dto';
import { UpdateDetailCatalogDto } from './dto/update-detail-catalog.dto';
export declare class DetailCatalogController {
    private readonly detailCatalogService;
    constructor(detailCatalogService: DetailCatalogService);
    create(createDetailCatalogDto: CreateDetailCatalogDto): Promise<{
        detailCatalog: import("./entities/detail-catalog.entity").DetailCatalog;
    }>;
    findAll(): Promise<{
        detailsCatalog: import("./entities/detail-catalog.entity").DetailCatalog[];
    }>;
    findOne(id: string): Promise<{
        detailCatalog: import("./entities/detail-catalog.entity").DetailCatalog;
    }>;
    update(id: string, updateDetailCatalogDto: UpdateDetailCatalogDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
