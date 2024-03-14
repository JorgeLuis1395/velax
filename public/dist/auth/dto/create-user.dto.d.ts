import { Role } from '../../role/entities/role.entity';
export declare class CreateUserDto {
    email: string;
    password: string;
    fullName: string;
    roles: Role[];
}
