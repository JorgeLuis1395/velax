import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
export declare class DriverController {
    private readonly driverService;
    constructor(driverService: DriverService);
    create(createDriverDto: CreateDriverDto): Promise<{
        driver: import("./entities/driver.entity").Driver;
    }>;
    findAll(): Promise<{
        drivers: import("./entities/driver.entity").Driver[];
    }>;
    findOne(id: string): Promise<{
        driver: import("./entities/driver.entity").Driver;
        drivers?: undefined;
    } | {
        drivers: import("./entities/driver.entity").Driver[];
        driver?: undefined;
    }>;
    update(id: string, updateDriverDto: UpdateDriverDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
