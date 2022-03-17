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
            center: new kakao.maps.LatLng(
                35.267342474237104,
                129.08901354232913
            ),
            level: 6,
        });
    }

    addMarker({ lat, lng, imageUrl }: Marker) {
        new kakao.maps.Marker({
            map: this.map,
            position: new kakao.maps.LatLng(lat, lng),
            image: new kakao.maps.MarkerImage(
                imageUrl,
                new kakao.maps.Size(48, 48)
            ),
        });
    }
    removeMarker(marker: Marker) {}
    setCenter({ lat, lng }: Coordinates) {
        this.map.setCenter(new kakao.maps.LatLng(lat, lng));
    }
}
