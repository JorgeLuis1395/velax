import { Repository } from 'typeorm';
import { CreateShippingGuideDto } from './dto/create-shipping-guide.dto';
import { ShippingGuide } from './entities/shipping-guide.entity';
import { UpdateShippingGuideDto } from './dto/update-shipping-guide.dto';
export declare class ShippingGuideService {
    private readonly shippingGuideRepository;
    constructor(shippingGuideRepository: Repository<ShippingGuide>);
    create(createWorksheetDto: CreateShippingGuideDto): Promise<{
        shippingGuide: ShippingGuide;
    }>;
    findAll(): Promise<{
        shippingGuides: ShippingGuide[];
    }>;
    findOne(id: string): Promise<{
        shippingGuide: ShippingGuide;
    }>;
    update(id: string, updateWorksheetDto: UpdateShippingGuideDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
