import { InstrumentsRequestService } from './instruments-request.service';
import { InstrumentsRequest } from './entities/instruments-request.entity';
import { CreateInstrumentsRequestInput } from './dto/create-instruments-request.input';
import { UpdateInstrumentsRequestInput } from './dto/update-instruments-request.input';
export declare class InstrumentsRequestResolver {
    private readonly instrumentsRequestService;
    constructor(instrumentsRequestService: InstrumentsRequestService);
    createInstrumentsRequest(createInstrumentsRequestInput: CreateInstrumentsRequestInput): Promise<InstrumentsRequest>;
    findAll(requestId: number): Promise<InstrumentsRequest[]>;
    updateInstrumentsRequest(updateInstrumentsRequestInput: UpdateInstrumentsRequestInput): Promise<InstrumentsRequest>;
}
