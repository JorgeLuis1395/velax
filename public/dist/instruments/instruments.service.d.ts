import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { UpdateInstrumentDto } from './dto/update-instrument.dto';
import { Instrument } from './entities/instrument.entity';
import { Repository } from 'typeorm';
export declare class InstrumentsService {
    private readonly instrumentRepository;
    constructor(instrumentRepository: Repository<Instrument>);
    create(createInstrumentDto: CreateInstrumentDto): Promise<{
        instrument: Instrument;
    }>;
    findAll(): Promise<{
        instruments: Instrument[];
    }>;
    findOne(id: string): Promise<{
        instrument: Instrument;
    }>;
    update(id: string, updateInstrumentDto: UpdateInstrumentDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
