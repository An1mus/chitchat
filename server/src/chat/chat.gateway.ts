import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {Server, Socket} from 'socket.io';

interface IMessage {
    message: string,
    nickname: string,
    date: string,
}

interface IUser {
    id: string;
    nickname: string;
}

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class ChatGateway {
    @WebSocketServer()
    server: Server;
    users: IUser[];

    @SubscribeMessage('message')
    inputMessage(@MessageBody() data: IMessage): IMessage {
        this.server.emit('message', data)
        return data;
    }

    @SubscribeMessage('user-joined')
    onUserJoined(
        @MessageBody() nickname: string,
        @ConnectedSocket() client: Socket,
    ) {
        this.users.push({
            nickname,
            id: client.id
        })
    }

    handleDisconnect(socket: Socket) {
        this.users = [...this.users.filter(user => user.id !== socket.id)];
    }
}