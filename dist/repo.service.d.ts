import { Repository } from 'typeorm';
import User from './db/models/user.entity';
import Message from './db/models/message.entity';
declare class RepoService {
    readonly userRepo: Repository<User>;
    readonly messageRepo: Repository<Message>;
    constructor(userRepo: Repository<User>, messageRepo: Repository<Message>);
}
export default RepoService;
