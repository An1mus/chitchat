import { Server, Socket } from 'socket.io';
interface IMessage {
    message: string;
    nickname: string;
    date: string;
}
export declare enum Status {
    Creator = 0,
    User = 1,
    Admin = 2
}
interface IUser {
    id: string;
    nickname: string;
    status: Status;
}
export declare class ChatGateway {
    server: Server;
    users: IUser[];
    inputMessage(data: IMessage): IMessage;
    onUserJoined(nickname: string, socket: Socket): void;
    handleDisconnect(socket: Socket): void;
}
export {};
