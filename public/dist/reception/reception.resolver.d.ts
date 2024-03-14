import { ReceptionService } from './reception.service';
import { Reception } from './entities/reception.entity';
import { CreateReceptionInput } from './dto/create-reception.input';
import { UpdateReceptionInput } from './dto/update-reception.input';
export declare class ReceptionResolver {
    private readonly receptionService;
    constructor(receptionService: ReceptionService);
    createReception(createReceptionInput: CreateReceptionInput): Promise<Reception>;
    findAll(): Promise<Reception[]>;
    findOne(id: string): Promise<Reception>;
    updateReception(updateReceptionInput: UpdateReceptionInput): Promise<{
        updatedAt: Date;
        id: string;
        dateReception: Date;
        hourReception: string;
        request: number | import("../request/entities/request.entity").Requests;
        numRequest: number;
        catalog: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
        plate?: string;
        totalWeight: number;
        unity: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
        status: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
        totalWeightReception: number;
        cratedAt: Date;
    }>;
    removeReception(id: string): Promise<string>;
}
