import { Coordinates } from './map';
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
    createCluster(options: any, cluster?: any): any;
    setCenter(position: Coordinates): void;
    protected update(): void;
}
export declare class Taxi extends BaseMarkerController implements MarkerController {
    private listeners;
    getPosition(marker: any): {
        lat: any;
        lng: any;
    };
    /**
     *
     * @options { map, position, image, isDraggable }
     * @param marker null이면 새로운 마커를 생성하고, null이 아니면 기존의 마커를 수정합니다.
     */
    create(options: any, marker?: any): any;
    protected update(): void;
    add(userInfo: any, marker: any, isCurrent: Boolean): void;
    edit(): void;
    delete(): void;
    /**
     *
     * @param listeners [{event, listener}, ]
     */
    private setEventListener;
    addEventListener(marker: any): void;
}
export declare class Station extends BaseMarkerController implements MarkerController {
    setAllBusstops(): Promise<void>;
    add(): void;
    edit(): void;
    delete(): void;
}
export {};
