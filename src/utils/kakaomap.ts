import { markerImages } from './../api/marker';
import { Coordinates } from '../service/map';

const { kakao } = window;

export const createKakaoLatLngInstance = ({ lat, lng }: Coordinates) =>
    new kakao.maps.LatLng(lat, lng);

export const createKakaoMarkerImageInstance = (markerImageOptions) => {
    const { type, state, isCurrent } = markerImageOptions;
    let imageSrc: string = getMarkerImage({ type, state, isCurrent });
    return new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(50, 50));
};

export const getMarkerImage = ({ type, state, isCurrent }) => {
    switch (type) {
        case 'shuttlestation':
        case 'shuttlebus':
            return markerImages[type];
        case 'user':
            return isCurrent != null
                ? markerImages[type][state][
                      isCurrent ? 'isCurrent' : 'isNotCurrent'
                  ]
                : markerImages[type][state];
        default:
            throw new Error('유효하지 않은 타입입니다');
    }
};

export const getMarkerPosition = (marker) => {};
export const getMarkerImageSrc = (marker) => {};

// create__Instance = get__Instance + setMap(instance, true)
export const createKakaoClusterInstance = (options) =>
    new kakao.maps.MarkerClusterer(options); // -> Marker class
export const createKakaoMarkerInstance = (options) =>
    new kakao.maps.Marker(options); // -> Marker class
export const createKakaoPolyInstance = (options) =>
    new kakao.maps.Polyline(options); // -> Map.jsx
export const createKakaoCircleInstance = (options) =>
    new kakao.maps.Circle(options); // -> Map.jsx
export const createKakaoCustomoverlayInstance = (options) =>
    new kakao.maps.CustomOverlay(options); // -> Map.jsx
