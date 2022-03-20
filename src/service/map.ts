import { StationTypes, UserStates } from './markerController';

const { kakao } = window;

interface Coordinates {
    lat: number;
    lng: number;
}

export interface Marker extends Coordinates {
    imageUrl: string;
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

export class Map {
    private map: any;

    constructor(container: HTMLDivElement) {
        this.map = new kakao.maps.Map(container, {
            /** TODO */
            // 초기화 시작위치 변경
            center: new kakao.maps.LatLng(
                35.267342474237104,
                129.08901354232913
            ),
            level: 6,
        });

        kakao.maps.event.addListener(this.map, 'click', (e) => {
            const latlng = e.latLng;
            console.log(`lat: ${latlng.getLat()}, lng: ${latlng.getLng()}`);
        });
    }

    addMarker({ lat, lng, imageUrl }: Marker) {
        const marker = new kakao.maps.Marker({
            map: this.map,
            position: new kakao.maps.LatLng(lat, lng),
            image: new kakao.maps.MarkerImage(
                imageUrl,
                new kakao.maps.Size(50, 50)
            ),
        });
    }
    removeMarker(marker: Marker) {}
    setCenter({ lat, lng }: Coordinates) {
        this.map.setCenter(new kakao.maps.LatLng(lat, lng));
    }
}
