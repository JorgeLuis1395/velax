import { CreateShippingGuideDto } from './dto/create-shipping-guide.dto';
import { UpdateShippingGuideDto } from './dto/update-shipping-guide.dto';
import { ShippingGuideService } from './shipping-guide.service';
export declare class ShippingGuideController {
    private readonly shippingGuideService;
    constructor(shippingGuideService: ShippingGuideService);
    create(createShippingGuideDto: CreateShippingGuideDto): Promise<{
        shippingGuide: import("./entities/shipping-guide.entity").ShippingGuide;
    }>;
    findAll(): Promise<{
        shippingGuides: import("./entities/shipping-guide.entity").ShippingGuide[];
    }>;
    findOne(id: string): Promise<{
        shippingGuide: import("./entities/shipping-guide.entity").ShippingGuide;
    }>;
    update(id: string, updateShippingGuideDto: UpdateShippingGuideDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
