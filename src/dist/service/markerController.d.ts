interface MarkerController {
    edit(): void;
    delete(): void;
}
export declare type StationTypes = 'shuttlebus' | 'bus';
export declare type UserStates = 'ready' | 'running' | 'blocked';
declare class BaseMarkerController {
    private map;
    constructor(map: any);
    createMarker(options: any, marker?: any): any;
    drawCluster(options: any, cluster?: any): any;
    setCenter(position: any): void;
}
export declare class Taxi extends BaseMarkerController implements MarkerController {
    private socket;
    private listeners;
    constructor(map: any, socket: any);
    getPosition(marker: any): {
        lat: any;
        lng: any;
    };
    /**
     *
     * @options { map, position, image, draggable }
     * @param marker null이면 새로운 마커를 생성하고, null이 아니면 기존의 마커를 수정합니다.
     */
    create(options: any, marker?: any): any;
    protected update(data: any): void;
    add(userInfo: any, marker: any, isCurrent: Boolean): Promise<void>;
    edit(): void;
    delete(): void;
    connect(subscribeList: any): void;
    activate(): any;
}
export declare class Station extends BaseMarkerController implements MarkerController {
    setAllBusstops(): Promise<void>;
    add(): void;
    edit(): void;
    delete(): void;
}
export {};
