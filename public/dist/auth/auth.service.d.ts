import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { JwtStrategy } from './strategy/jwt.strategy';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtStrategy;
    constructor(userRepository: Repository<User>, jwtStrategy: JwtStrategy);
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
