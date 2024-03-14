import { InstrumentsService } from './instruments.service';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { UpdateInstrumentDto } from './dto/update-instrument.dto';
export declare class InstrumentsController {
    private readonly instrumentsService;
    constructor(instrumentsService: InstrumentsService);
    create(createInstrumentDto: CreateInstrumentDto): Promise<{
        instrument: import("./entities/instrument.entity").Instrument;
    }>;
    findAll(): Promise<{
        instruments: import("./entities/instrument.entity").Instrument[];
    }>;
    findOne(id: string): Promise<{
        instrument: import("./entities/instrument.entity").Instrument;
    }>;
    update(id: string, updateInstrumentDto: UpdateInstrumentDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
