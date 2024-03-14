import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';
import { Repository } from 'typeorm';
export declare class DriverService {
    private readonly driverRepository;
    constructor(driverRepository: Repository<Driver>);
    create(createDriverDto: CreateDriverDto): Promise<{
        driver: Driver;
    }>;
    findAll(): Promise<{
        drivers: Driver[];
    }>;
    findOne(param: string): Promise<{
        driver: Driver;
        drivers?: undefined;
    } | {
        drivers: Driver[];
        driver?: undefined;
    }>;
    update(id: string, updateDriverDto: UpdateDriverDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
