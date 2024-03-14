import { CreateReceptionInput } from './dto/create-reception.input';
import { UpdateReceptionInput } from './dto/update-reception.input';
import { Repository } from 'typeorm';
import { Reception } from './entities/reception.entity';
import { Requests } from '../request/entities/request.entity';
import { RequestService } from '../request/request.service';
export declare class ReceptionService {
    private readonly receptionRepository;
    private readonly requestService;
    constructor(receptionRepository: Repository<Reception>, requestService: RequestService);
    create(createReceptionInput: CreateReceptionInput): Promise<Reception>;
    findAll(): Promise<Reception[]>;
    findOne(id: string): Promise<Reception>;
    update(id: string, updateReceptionInput: UpdateReceptionInput): Promise<{
        updatedAt: Date;
        id: string;
        dateReception: Date;
        hourReception: string;
        request: number | Requests;
        numRequest: number;
        catalog: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
        plate?: string;
        totalWeight: number;
        unity: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
        status: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
        totalWeightReception: number;
        cratedAt: Date;
    }>;
    remove(id: string): Promise<string>;
    parseIdRequestToInt(reception: Reception): Reception;
    validateTotalWeight(weightVehicle: number, weightRequest: number, weightReception: number): void;
}
