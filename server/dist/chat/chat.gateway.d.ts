import { Server } from 'socket.io';
interface IMessage {
    message: string;
    author: string;
    date: string;
}
export declare class ChatGateway {
    server: Server;
    inputMessage(data: IMessage): IMessage;
}
export {};
