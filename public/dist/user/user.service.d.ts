import { UpdateAuthDto } from '../auth/dto/update-auth.dto';
import { User } from '../auth/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<{
        users: User[];
    }>;
    findOne(id: string): Promise<{
        user: User;
    }>;
    update(id: string, updateUserDto: UpdateAuthDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
