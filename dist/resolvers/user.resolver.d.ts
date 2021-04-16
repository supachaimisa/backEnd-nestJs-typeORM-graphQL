import RepoService from '../repo.service';
import User from '../db/models/user.entity';
import UserInput from './input/user.input';
export default class UserResolver {
    private readonly repoService;
    constructor(repoService: RepoService);
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    createOrLoginUser(input: UserInput): Promise<User>;
}
