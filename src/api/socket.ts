/* eslint-disable import/first */
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';

interface SubscribeParam {
    destination: string;
    callback: any;
}

interface PublishParam {
    destination: string;
    payload: object;
}

export class Socket {
    private stompClient: any;
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

    public activate() {
        this.stompClient.activate();
        return () => this.stompClient.deactivate();
    }

    public subscribe(subscribeList: SubscribeParam[]) {
        this.stompClient.onConnect = () => {
            console.log('연결 ✨');
            subscribeList.forEach(({ destination, callback }) =>
                this.stompClient.subscribe(destination, callback)
            );
        };
    }

    public publish({ destination, payload }: PublishParam) {
        this.stompClient.publish({
            destination,
            body: JSON.stringify(payload),
        });
    }
}
