import { PubSub } from 'graphql-subscriptions';
import RepoService from '../repo.service';
import Message from '../db/models/message.entity';
import MessageInput, { DeleteMessageInput } from './input/message.input';
import User from '../db/models/user.entity';
import { context } from 'src/db/loaders';
export declare const pubSub: PubSub;
export default class MessageResolver {
    private readonly repoService;
    constructor(repoService: RepoService);
    getMessages(): Promise<Message[]>;
    getMessagesFromUser(userId: number): Promise<Message[]>;
    getMessage(id: number): Promise<Message>;
    createMessage(input: MessageInput): Promise<Message>;
    deleteMessage(input: DeleteMessageInput): Promise<Message>;
    messageAdded(): AsyncIterator<unknown, any, undefined>;
    getUser(parent: Message, { UserLoader }: typeof context): Promise<User>;
}
