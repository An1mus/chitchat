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
    users: IUser[] = [];

    @SubscribeMessage('message')
    inputMessage(@MessageBody() data: IMessage): IMessage {
        this.server.emit('message', data)
        return data;
    }

    @SubscribeMessage('userConnected')
    onUserJoined(
        @MessageBody() nickname: string,
        @ConnectedSocket() socket: Socket,
    ) {
        const newUser = {
            nickname,
            id: socket.id
        };

        if(nickname && !this.users.find(user => user.id === socket.id)) {
            this.users.push(newUser);
        } else {
            this.users = [...this.users.map(user => user.id === socket.id ? newUser : user)];
        }

        this.server.emit('connectedUsers', this.users);
    }

    handleDisconnect(socket: Socket) {
        this.users = [...this.users.filter(user => user.id !== socket.id)];
        this.server.emit('connectedUsers', this.users);
    }
}