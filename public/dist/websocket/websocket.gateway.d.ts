import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { WebsocketService } from './websocket.service';
import { Server, Socket } from 'socket.io';
export declare class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly websocketService;
    wss: Server;
    constructor(websocketService: WebsocketService);
    handleConnection(client: Socket, ...args: any[]): any;
    handleDisconnect(client: Socket): any;
    sendNotification(id: number): void;
    sendPanicAlert(data: any): void;
    sendLocation(data: any): void;
}
