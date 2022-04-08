import { Coordinates } from '../service/map';
export declare const createKakaoLatLngInstance: ({ lat, lng }: Coordinates) => any;
export declare const getMarkerImage: ({ type, state, isCurrent }: {
    type: any;
    state: any;
    isCurrent: any;
}) => any;
export declare const getMarkerImageSrc: ({ type, state, isCurrent }: {
    type: any;
    state: any;
    isCurrent: any;
}) => string;
export declare const createKakaoClusterInstance: (options: any) => any;
export declare const createKakaoMarkerInstance: (options: any) => any;
export declare const createKakaoPolyInstance: (options: any) => any;
export declare const createKakaoCircleInstance: (options: any) => any;
export declare const createKakaoCustomoverlayInstance: (options: any) => any;
