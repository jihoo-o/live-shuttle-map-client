import { markerImages } from './../api/marker';
import { Coordinates } from '../service/map';

const { kakao } = window;

export const createKakaoLatLngInstance = ({ lat, lng }: Coordinates) =>
    new kakao.maps.LatLng(lat, lng);

export const getMarkerImage = ({ type, state, isCurrent }) => {
    let imageSrc: string;
    switch (type) {
        case 'shuttlebus':
        case 'bus':
            imageSrc = markerImages[type];
            break;
        case 'user':
            imageSrc =
                markerImages[type][state][
                    isCurrent ? 'isCurrent' : 'isNotCurrent'
                ];
            break;
        default:
            throw new Error('유효하지 않은 타입입니다');
    }
    return new kakao.maps.MarkerImage(imageSrc);
};

// tmp
export const getMarkerImageSrc = ({ type, state, isCurrent }) => {
    let imageSrc: string;
    switch (type) {
        case 'shuttlebus':
        case 'bus':
            imageSrc = markerImages[type];
            break;
        case 'user':
            imageSrc =
                markerImages[type][state][
                    isCurrent ? 'isCurrent' : 'isNotCurrent'
                ];
            break;
        default:
            throw new Error('유효하지 않은 타입입니다');
    }
    return imageSrc;
};

// create__Instance = get__Instance + setMap(instance, true)
export const createKakaoClusterInstance = (options) =>
    new kakao.maps.Cluster(options); // -> Marker class
export const createKakaoMarkerInstance = (options) =>
    new kakao.maps.Marker(options); // -> Marker class
export const createKakaoPolyInstance = (options) =>
    new kakao.maps.Polyline(options); // -> Map.jsx
export const createKakaoCircleInstance = (options) =>
    new kakao.maps.Circle(options); // -> Map.jsx
export const createKakaoCustomoverlayInstance = (options) =>
    new kakao.maps.CustomOverlay(options); // -> Map.jsx
