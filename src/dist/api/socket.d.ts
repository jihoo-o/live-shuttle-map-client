interface SubscribeParam {
    destination: string;
    callback: any;
}
interface PublishParam {
    destination: string;
    payload: object;
}
export declare class Socket {
    private stompClient;
    constructor(baseURL: any);
    activate(): () => any;
    subscribe(subscribeList: SubscribeParam[]): void;
    publish({ destination, payload }: PublishParam): void;
}
export {};
