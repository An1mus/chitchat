import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Socket} from "net";

@WebSocketGateway(81, { namespace: 'chat' })
export class ChatGateway {

    @SubscribeMessage('message')
    handleEvent(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ): string {
        return data;
    }
}