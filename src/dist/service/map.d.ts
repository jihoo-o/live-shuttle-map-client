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
    setCenter({ lat, lng }: Coordinates): void;
    setLevel(level: number, anchor?: any): void;
    drawCircle(center: any, radius: any, color: any): any;
    drawPolyline({ polyline, path }: {
        polyline: any;
        path: any;
    }): any;
    drawCustomOverlay({ customOverlay, position, content }: {
        customOverlay: any;
        position: any;
        content: any;
    }): any;
    setMap(kakaoObj: any, set: boolean): void;
    addEventListener(event: any, listener: any, kakaoObj?: any): () => void;
}
