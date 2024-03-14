import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';
export declare class ContactService {
    private readonly contactRepository;
    constructor(contactRepository: Repository<Contact>);
    create(createContactInput: CreateContactInput): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    findOne(id: string): Promise<Contact>;
    update(id: string, updateContactInput: UpdateContactInput): Promise<Contact>;
    remove(id: string): Promise<string>;
}
