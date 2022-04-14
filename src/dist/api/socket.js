/* eslint-disable import/first */
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';
export class Socket {
    constructor(baseURL) {
        this.stompClient = new StompJs.Client();
        this.stompClient.webSocketFactory = () => new SockJS(baseURL);
        this.stompClient.onStompError = (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
        };
        this.stompClient.onDisconnect = () => {
            console.log('끊김 ✂️');
        };
    }
    connect(subscribeList) {
        this.stompClient.onConnect = () => {
            console.log('연결 ✨');
            subscribeList.forEach(({ destination, callback }) => this.stompClient.subscribe(destination, callback));
        };
    }
    activate() {
        this.stompClient.activate();
        return () => this.stompClient.deactivate();
    }
    publish(destination, payload) {
        this.stompClient.publish({
            destination,
            body: JSON.stringify(payload),
        });
    }
}
//# sourceMappingURL=socket.js.map