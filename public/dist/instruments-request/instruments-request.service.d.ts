import { CreateInstrumentsRequestInput } from './dto/create-instruments-request.input';
import { UpdateInstrumentsRequestInput } from './dto/update-instruments-request.input';
import { InstrumentsRequest } from './entities/instruments-request.entity';
import { Repository } from 'typeorm';
export declare class InstrumentsRequestService {
    private readonly instrumentRequest;
    constructor(instrumentRequest: Repository<InstrumentsRequest>);
    create(createInstrumentsRequestInput: CreateInstrumentsRequestInput): Promise<InstrumentsRequest>;
    findAll(id: number): Promise<InstrumentsRequest[]>;
    findOne(id: string): Promise<InstrumentsRequest>;
    update(id: string, updateInstrumentsRequestInput: UpdateInstrumentsRequestInput): Promise<InstrumentsRequest>;
}
