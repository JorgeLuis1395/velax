import { RequestDetailMaeService } from './request-detail-mae.service';
import { CreateRequestDetailMaeDto } from './dto/create-request-detail-mae.dto';
import { UpdateRequestDetailMaeDto } from './dto/update-request-detail-mae.dto';
export declare class RequestDetailMaeController {
    private readonly requestDetailMaeService;
    constructor(requestDetailMaeService: RequestDetailMaeService);
    create(createRequestDetailMaeDto: CreateRequestDetailMaeDto): Promise<{
        detail: import("./entities/request-detail-mae.entity").RequestDetailMae;
    }>;
    getByRequest(id: number): Promise<import("./entities/request-detail-mae.entity").RequestDetailMae[]>;
    update(id: string, updateRequestDetailMaeDto: UpdateRequestDetailMaeDto): Promise<{
        message: string;
    }>;
}
