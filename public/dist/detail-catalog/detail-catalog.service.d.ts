import { CreateDetailCatalogDto } from './dto/create-detail-catalog.dto';
import { UpdateDetailCatalogDto } from './dto/update-detail-catalog.dto';
import { DetailCatalog } from './entities/detail-catalog.entity';
import { Repository } from 'typeorm';
export declare class DetailCatalogService {
    private readonly detailCatalogRepository;
    constructor(detailCatalogRepository: Repository<DetailCatalog>);
    create(createDetailCatalogDto: CreateDetailCatalogDto): Promise<{
        detailCatalog: DetailCatalog;
    }>;
    findAll(): Promise<{
        detailsCatalog: DetailCatalog[];
    }>;
    findOne(id: string): Promise<{
        detailCatalog: DetailCatalog;
    }>;
    update(id: string, updateDetailCatalogDto: UpdateDetailCatalogDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
