export declare class Socket {
    private stompClient;
    constructor(baseURL: any);
    connect(subscribeList: []): void;
    activate(): () => any;
    publish(destination: any, payload: any): void;
}
