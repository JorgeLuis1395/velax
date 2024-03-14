import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
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
