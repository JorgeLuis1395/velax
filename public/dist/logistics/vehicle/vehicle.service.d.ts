import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';
export declare class VehicleService {
    private readonly vehicleRepository;
    constructor(vehicleRepository: Repository<Vehicle>);
    create(createVehicleDto: CreateVehicleDto): Promise<{
        vehicle: Vehicle;
    }>;
    findAll(): Promise<{
        vehicles: Vehicle[];
    }>;
    findOne(param: string): Promise<{
        vehicle: Vehicle;
        vehicles?: undefined;
    } | {
        vehicles: Vehicle[];
        vehicle?: undefined;
    }>;
    update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
