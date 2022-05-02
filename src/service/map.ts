import { StationTypes, UserStates } from './markerController';

const { kakao } = window;

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Marker extends Coordinates {
    image: string;
    draggable?: boolean;
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
    private clusterer: any;

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

    setCenter(position) {
        this.map.setCenter(position);
    }

    setLevel(level: number, anchor?) {
        this.map.setLevel(level);
        anchor && this.map.setCenter(anchor);
    }

    relayout() {
        this.map.relayout();
    }

    // ❌
    drawCircle(center, radius, color) {
        return new kakao.maps.Circle({
            map: this.map,
            center: new kakao.maps.LatLng(center.lat, center.lng), // 원의 중심좌표 입니다
            radius, // 미터 단위의 원의 반지름입니다
            strokeWeight: 5, // 선의 두께입니다
            strokeColor: color, // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'dashed', // 선의 스타일 입니다
            fillColor: color, // 채우기 색깔입니다
            fillOpacity: 0.7, // 채우기 불투명도 입니다
        });
    }

    // ❌
    drawPolyline({ polyline, path }) {
        if (!polyline) {
            return new kakao.maps.Polyline({
                map: this.map,
                path,
                strokeWeight: 3, // 선의 두께입니다
                strokeColor: '#db4040', // 선의 색깔입니다
                strokeOpacity: 0, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
                strokeStyle: 'solid', // 선의 스타일입니다
            });
        }
        polyline.setPath(path);
        return polyline;
    }

    // ❌
    drawCustomOverlay({ customOverlay, position, content }) {
        if (!customOverlay) {
            console.log('new customoverlay');
            return new kakao.maps.CustomOverlay({
                position,
                content,
            });
        }
        customOverlay.setPosition(position);
        return customOverlay;
    }

    setMap(kakaoObj, set: boolean) {
        kakaoObj.setMap(set ? this.map : null);
    }

    addEventListener(event, listener, kakaoObj?) {
        kakao.maps.event.addListener(
            !kakaoObj ? this.map : kakaoObj,
            event,
            listener
        );
        return () => {
            kakao.maps.event.removeListener(
                !kakaoObj ? this.map : kakaoObj,
                event,
                listener
            );
        };
    }
}
