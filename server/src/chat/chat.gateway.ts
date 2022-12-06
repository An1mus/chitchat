import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import { Server } from 'socket.io';

interface IMessage {
    message: string,
    author: string,
    date: string,
}

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class ChatGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('message')
    inputMessage(@MessageBody() data: IMessage): IMessage {
        this.server.emit('message', data)
        return data;
    }
}