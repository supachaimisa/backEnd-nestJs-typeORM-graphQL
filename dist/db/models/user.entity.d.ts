import Message from './message.entity';
export default class User {
    id: number;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    messageConnection: Promise<Message[]>;
}
