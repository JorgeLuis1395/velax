import { CreateRequestDetailMaeDto } from './dto/create-request-detail-mae.dto';
import { UpdateRequestDetailMaeDto } from './dto/update-request-detail-mae.dto';
import { RequestDetailMae } from './entities/request-detail-mae.entity';
import { Repository } from 'typeorm';
import { ContractDetailService } from '../contract-detail/contract-detail.service';
export declare class RequestDetailMaeService {
    private readonly requestMaeDetailRepository;
    private readonly contractDetailService;
    constructor(requestMaeDetailRepository: Repository<RequestDetailMae>, contractDetailService: ContractDetailService);
    create(createRequestDetailMaeDto: CreateRequestDetailMaeDto): Promise<{
        detail: RequestDetailMae;
    }>;
    getByRequest(id: number): Promise<RequestDetailMae[]>;
    update(id: string, updateRequestDetailMaeDto: UpdateRequestDetailMaeDto): Promise<{
        message: string;
    }>;
    deleteByRequest(id: number): Promise<void>;
    updateWeight(id: number): Promise<string>;
}
