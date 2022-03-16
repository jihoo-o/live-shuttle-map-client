const { kakao } = window;

interface Coordinates {
    lat: number;
    lng: number;
}

export interface Marker extends Coordinates {}

export interface UserMarker extends Marker {
    userId: string;
}

export interface StationMarker extends Marker {
    stationId: string;
    name: Object;
}

export class Map {
    private map: any;

    constructor(container: HTMLDivElement) {
        this.map = new kakao.maps.Map(container, {
            /** TODO */
            // 초기화 시작위치 변경
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        });
    }

    addMarker(marker: Marker) {}
    removeMarker(marker: Marker) {}
    setCenter({ lat, lng }: Coordinates) {
        this.map.setCenter(new kakao.maps.LatLng(lat, lng));
    }
}
