import { RememberService } from './remember.service';
import { Remember } from './entities/remember.entity';
import { CreateRememberInput } from './dto/create-remember.input';
import { UpdateRememberInput } from './dto/update-remember.input';
export declare class RememberResolver {
    private readonly rememberService;
    constructor(rememberService: RememberService);
    createRemember(createRememberInput: CreateRememberInput): Promise<Remember>;
    findAll(): Promise<Remember[]>;
    findOne(id: string): Promise<Remember>;
    updateRemember(updateRememberInput: UpdateRememberInput): Promise<{
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
    removeRemember(id: string): Promise<Remember>;
}
