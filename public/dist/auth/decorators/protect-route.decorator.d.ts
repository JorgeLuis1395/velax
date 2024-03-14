import { RolesEnum } from '../interfaces/roles.enum';
export declare const META_ROLES = "roles";
export declare function ProtectRouteDecorator(...roles: RolesEnum[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
