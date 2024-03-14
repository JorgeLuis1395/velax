import { CatalogService } from './catalog.service';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { Catalog } from './entities/catalog.entity';
export declare class CatalogController {
    private readonly catalogService;
    constructor(catalogService: CatalogService);
    create(createCatalogDto: CreateCatalogDto): Promise<{
        catalog: Catalog;
    }>;
    findAll(): Promise<{
        catalog: Catalog[];
    }>;
    findOne(nemonico: string): Promise<{
        catalog: Catalog;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
