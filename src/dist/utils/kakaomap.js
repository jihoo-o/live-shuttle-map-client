import { markerImages } from './../api/marker';
export const createKakaoLatLngInstance = ({ lat, lng }) => new kakao.maps.LatLng(lat, lng);
export const getMarkerImageSrc = ({ type, state, isCurrent }) => new kakao.maps.MarkerImage(markerImages[type][state][isCurrent ? 'isCurrent' : 'isNotCurrent']);
// create__Instance = get__Instance + setMap(instance, true)
export const createKakaoClusterInstance = (options) => new kakao.maps.Cluster(options); // -> Marker class
export const createKakaoMarkerInstance = (options) => new kakao.maps.Marker(options); // -> Marker class
export const createKakaoPolyInstance = (options) => new kakao.maps.Polyline(options); // -> Map.jsx
export const createKakaoCircleInstance = (options) => new kakao.maps.Circle(options); // -> Map.jsx
export const createKakaoCustomoverlayInstance = (options) => new kakao.maps.CustomOverlay(options); // -> Map.jsx
//# sourceMappingURL=kakaomap.js.map