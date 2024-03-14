import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<{
        token: string;
        id: string;
        email: string;
        password: string;
        fullName: string;
        active: boolean;
        roles: import("../role/entities/role.entity").Role[];
        customers: import("../customer/entities/customer.entity").Customer[];
        avatar: string;
        createdAt: Date;
        updated_at: Date;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        id: string;
        email: string;
        password: string;
        fullName: string;
        active: boolean;
        roles: import("../role/entities/role.entity").Role[];
        customers: import("../customer/entities/customer.entity").Customer[];
        avatar: string;
        createdAt: Date;
        updated_at: Date;
    }>;
}
