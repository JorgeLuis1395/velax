import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';
export declare class ContactResolver {
    private readonly contactService;
    constructor(contactService: ContactService);
    createContact(createContactInput: CreateContactInput): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    findOne(id: string): Promise<Contact>;
    updateContact(updateContactInput: UpdateContactInput): Promise<Contact>;
    removeContact(id: string): Promise<string>;
}
