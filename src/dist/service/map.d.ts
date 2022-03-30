import { StationTypes, UserStates } from './markerController';
export interface Coordinates {
    lat: number;
    lng: number;
}
export interface Marker extends Coordinates {
    image: string;
    isDraggable?: boolean;
}
export interface UserMarker extends Marker {
    userId: string;
    state: UserStates;
}
export interface StationMarker extends Marker {
    stationId: string;
    name: Object;
    type: StationTypes;
}
export declare class Map {
    private map;
    private clusterer;
    constructor(container: HTMLDivElement);
    setMarker(options: any, marker?: any): any;
    setCenter({ lat, lng }: Coordinates): void;
    drawCircle(center: any, radius: any, color: any): any;
    drawPolyline({ polyline, path }: {
        polyline: any;
        path: any;
    }): any;
    removeFromMap(kakaoObj: any): void;
    setEventListener(event: any, listener: any): void;
    setCluster(markers: any): void;
}
