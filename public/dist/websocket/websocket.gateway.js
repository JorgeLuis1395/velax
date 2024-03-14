"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const websocket_service_1 = require("./websocket.service");
const socket_io_1 = require("socket.io");
let WebsocketGateway = class WebsocketGateway {
    constructor(websocketService) {
        this.websocketService = websocketService;
    }
    handleConnection(client, ...args) {
    }
    handleDisconnect(client) {
    }
    sendNotification(id) {
        this.wss.emit('notifications', { message: "Se ha realizado una modificacion a un manifiesto y esta pendiente de aprobacion", request: id });
    }
    sendPanicAlert(data) {
        this.wss.emit('panicAlert', { message: "Se ha enviado una alerta de pánico", messageBody: data });
    }
    sendLocation(data) {
        this.wss.emit('location', { message: "Se ha enviado una ubicacion", messageBody: data });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], WebsocketGateway.prototype, "wss", void 0);
WebsocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true, namespace: '/' }),
    __metadata("design:paramtypes", [websocket_service_1.WebsocketService])
], WebsocketGateway);
exports.WebsocketGateway = WebsocketGateway;
//# sourceMappingURL=websocket.gateway.js.map