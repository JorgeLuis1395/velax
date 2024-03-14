import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { User } from '../auth/entities/user.entity';
import { PanicAlertDto } from './dto/panic-alert.dto';
import { LocationDto } from './dto/location.dto';
export declare class RequestController {
    private readonly requestService;
    constructor(requestService: RequestService);
    create(createRequestDto: CreateRequestDto, user: User): Promise<{
        request: {
            user: {
                id: string;
                name: string;
            };
            createdAt: string;
            id: number;
            customer: string | import("../customer/entities/customer.entity").Customer;
            proforma: string;
            typeVehicle: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            addressId: string | import("../address/entities/address.entity").Address;
            externalAddress: string | import("../external-addresses/entities/external-address.entity").ExternalAddress;
            withdrawalTime: string;
            withdrawalDate: Date;
            estimatedDate: Date;
            confirmation: string;
            capacityVehicle: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            observation: string;
            news: string;
            detail: import("../request-detail-mae/entities/request-detail-mae.entity").RequestDetailMae[];
            instruments: import("../instruments/entities/instrument.entity").Instrument[];
            status: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            vehicle: string | import("../logistics/vehicle/entities/vehicle.entity").Vehicle;
            requirements: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            machinery: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            tools: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            link: string;
            driver: string | import("../logistics/driver/entities/driver.entity").Driver;
            assistants: import("../logistics/driver/entities/driver.entity").Driver[];
            unity: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            confirmationLogistic: boolean;
            company: string | import("../companies/entities/company.entity").Company;
            contract: string | import("../contract/contract/entities/contract.entity").Contract;
            city: string;
            provincia: string;
            canton: string;
            addressBranch: string;
            numRequest: number;
            updatedAt: Date;
        };
    }>;
    findAll(user: User, initialDate?: string, endDate?: string, status?: string, city?: string, vehicle?: string, plate?: string): Promise<{
        requests: {
            user: {
                id: string;
                name: string;
            };
            createdAt: string;
            id: number;
            customer: string | import("../customer/entities/customer.entity").Customer;
            proforma: string;
            typeVehicle: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            addressId: string | import("../address/entities/address.entity").Address;
            externalAddress: string | import("../external-addresses/entities/external-address.entity").ExternalAddress;
            withdrawalTime: string;
            withdrawalDate: Date;
            estimatedDate: Date;
            confirmation: string;
            capacityVehicle: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            observation: string;
            news: string;
            detail: import("../request-detail-mae/entities/request-detail-mae.entity").RequestDetailMae[];
            instruments: import("../instruments/entities/instrument.entity").Instrument[];
            status: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            vehicle: string | import("../logistics/vehicle/entities/vehicle.entity").Vehicle;
            requirements: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            machinery: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            tools: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            link: string;
            driver: string | import("../logistics/driver/entities/driver.entity").Driver;
            assistants: import("../logistics/driver/entities/driver.entity").Driver[];
            unity: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            confirmationLogistic: boolean;
            company: string | import("../companies/entities/company.entity").Company;
            contract: string | import("../contract/contract/entities/contract.entity").Contract;
            city: string;
            provincia: string;
            canton: string;
            addressBranch: string;
            numRequest: number;
            updatedAt: Date;
        }[];
    }>;
    findOne(id: number): Promise<{
        request: {
            user: {
                id: string;
                name: string;
            };
            createdAt: string;
            id: number;
            customer: string | import("../customer/entities/customer.entity").Customer;
            proforma: string;
            typeVehicle: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            addressId: string | import("../address/entities/address.entity").Address;
            externalAddress: string | import("../external-addresses/entities/external-address.entity").ExternalAddress;
            withdrawalTime: string;
            withdrawalDate: Date;
            estimatedDate: Date;
            confirmation: string;
            capacityVehicle: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            observation: string;
            news: string;
            detail: import("../request-detail-mae/entities/request-detail-mae.entity").RequestDetailMae[];
            instruments: import("../instruments/entities/instrument.entity").Instrument[];
            status: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            vehicle: string | import("../logistics/vehicle/entities/vehicle.entity").Vehicle;
            requirements: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            machinery: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            tools: import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog[];
            link: string;
            driver: string | import("../logistics/driver/entities/driver.entity").Driver;
            assistants: import("../logistics/driver/entities/driver.entity").Driver[];
            unity: string | import("../detail-catalog/entities/detail-catalog.entity").DetailCatalog;
            confirmationLogistic: boolean;
            company: string | import("../companies/entities/company.entity").Company;
            contract: string | import("../contract/contract/entities/contract.entity").Contract;
            city: string;
            provincia: string;
            canton: string;
            addressBranch: string;
            numRequest: number;
            updatedAt: Date;
        };
    }>;
    findByDriver(user: User): Promise<import("./entities/request.entity").Requests[]>;
    update(id: number, updateRequestDto: UpdateRequestDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    generatePDF(id: number): Promise<{
        data: string;
    }>;
    generateXML(id: number): Promise<{
        data: string;
        name: string;
    }>;
    sendAlert(body: PanicAlertDto): Promise<{
        message: string;
    }>;
    sendLocation(body: LocationDto): Promise<{
        message: string;
    }>;
}
