import { CreateRoleDto } from './dto/create-role.dto';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    create(createRoleDto: CreateRoleDto): Promise<{
        role: Role;
    }>;
    findAll(): Promise<{
        roles: Role[];
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
