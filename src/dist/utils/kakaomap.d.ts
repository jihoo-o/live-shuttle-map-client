import { Coordinates } from '../service/map';
export declare const createKakaoLatLngInstance: ({ lat, lng }: Coordinates) => kakao.maps.LatLng;
export declare const createKakaoMarkerImageInstance: (markerImageOptions: any) => kakao.maps.MarkerImage;
export declare const getMarkerImage: ({ type, state, isCurrent }: {
    type: any;
    state: any;
    isCurrent: any;
}) => any;
export declare const getMarkerPosition: (marker: any) => void;
export declare const getMarkerImageSrc: (marker: any) => void;
export declare const createKakaoClusterInstance: (options: any) => kakao.maps.MarkerClusterer;
export declare const createKakaoMarkerInstance: (options: any) => kakao.maps.Marker;
export declare const createKakaoPolyInstance: (options: any) => kakao.maps.Polyline;
export declare const createKakaoCircleInstance: (options: any) => kakao.maps.Circle;
export declare const createKakaoCustomoverlayInstance: (options: any) => kakao.maps.CustomOverlay;
