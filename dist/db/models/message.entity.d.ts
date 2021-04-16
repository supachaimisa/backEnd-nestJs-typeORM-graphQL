import User from './user.entity';
export default class Message {
    id: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    userConnection: Promise<User>;
}
