import { UserService } from './user.service';
import { UpdateAuthDto } from '../auth/dto/update-auth.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<{
        users: import("../auth/entities/user.entity").User[];
    }>;
    findOne(id: string): Promise<{
        user: import("../auth/entities/user.entity").User;
    }>;
    update(id: string, updateUserDto: UpdateAuthDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
