import { CreateCatalogDto } from './dto/create-catalog.dto';
import { Catalog } from './entities/catalog.entity';
import { Repository } from 'typeorm';
export declare class CatalogService {
    private readonly catalogRepository;
    constructor(catalogRepository: Repository<Catalog>);
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
