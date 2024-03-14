import { CreateFixReceptionInput } from './dto/create-fix-reception.input';
import { UpdateFixReceptionInput } from './dto/update-fix-reception.input';
import { Repository } from 'typeorm';
import { FixReception } from './entities/fix-reception.entity';
import { RequestDetailMaeService } from '../request-detail-mae/request-detail-mae.service';
import { WebsocketGateway } from '../websocket/websocket.gateway';
export declare class FixReceptionService {
    private readonly fixReceptionRepository;
    private readonly requestDetailMaeService;
    private readonly webSocketGateway;
    constructor(fixReceptionRepository: Repository<FixReception>, requestDetailMaeService: RequestDetailMaeService, webSocketGateway: WebsocketGateway);
    create(createFixReceptionInput: CreateFixReceptionInput): Promise<FixReception>;
    findAll(): Promise<FixReception[]>;
    findOne(id: string): Promise<FixReception>;
    update(id: string, updateFixReceptionInput: UpdateFixReceptionInput): Promise<string>;
    remove(id: number): string;
}
