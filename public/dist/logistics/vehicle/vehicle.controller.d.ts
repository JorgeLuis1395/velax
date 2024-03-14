import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
export declare class VehicleController {
    private readonly vehicleService;
    constructor(vehicleService: VehicleService);
    create(createVehicleDto: CreateVehicleDto): Promise<{
        vehicle: import("./entities/vehicle.entity").Vehicle;
    }>;
    findAll(): Promise<{
        vehicles: import("./entities/vehicle.entity").Vehicle[];
    }>;
    findOne(plate: string): Promise<{
        vehicle: import("./entities/vehicle.entity").Vehicle;
        vehicles?: undefined;
    } | {
        vehicles: import("./entities/vehicle.entity").Vehicle[];
        vehicle?: undefined;
    }>;
    update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
