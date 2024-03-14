import { RequestService } from '../../request/request.service';
import { ConfigService } from '@nestjs/config';
export declare class LimitDateRequestService {
    private readonly requestServices;
    private readonly configService;
    private readonly logger;
    constructor(requestServices: RequestService, configService: ConfigService);
    verifyDate(): Promise<void>;
}
