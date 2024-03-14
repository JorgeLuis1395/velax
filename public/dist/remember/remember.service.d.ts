import { CreateRememberInput } from './dto/create-remember.input';
import { UpdateRememberInput } from './dto/update-remember.input';
import { Remember } from './entities/remember.entity';
import { Repository } from 'typeorm';
export declare class RememberService {
    private readonly rememberRepository;
    constructor(rememberRepository: Repository<Remember>);
    create(createRememberInput: CreateRememberInput): Promise<Remember>;
    findAll(): Promise<Remember[]>;
    findOne(id: string): Promise<Remember>;
    update(id: string, updateRememberInput: UpdateRememberInput): Promise<{
        id: string;
        name: string;
        description: string;
        recurrent: boolean;
        customer: string;
        initialDate: Date;
        time: number;
        createdAt: Date;
        nextDate: Date;
    }>;
    remove(id: string): Promise<Remember>;
}
