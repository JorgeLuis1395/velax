import { Strategy } from 'passport-jwt';
import { PayloadInterface } from '../interfaces/payload.interface';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    private readonly configService;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, configService: ConfigService, jwtService: JwtService);
    validate(payload: PayloadInterface): Promise<User>;
    generateToken({ id }: PayloadInterface): string;
}
export {};
