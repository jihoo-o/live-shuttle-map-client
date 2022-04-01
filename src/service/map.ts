import { StationTypes, UserStates } from './markerController';

const { kakao } = window;

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

        this.clusterer = new kakao.maps.MarkerClusterer({
            map: this.map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel: 2, // 클러스터 할 최소 지도 레벨
            disableClickZoom: true,
        });

        kakao.maps.event.addListener(this.map, 'click', (e) => {
            const latlng = e.latLng;
            console.log(`lat: ${latlng.getLat()}, lng: ${latlng.getLng()}`);
        });

        this.setClusterEventListener('clusterclick', (cluster) => {
            const center = cluster.getCenter();
            this.setCenter({ lat: center.Ma, lng: center.La });
        });
    }

    setMarker(options, marker?) {
        options = {
            ...options,
            image: options.image
                ? new kakao.maps.MarkerImage(
                      options.image,
                      new kakao.maps.Size(50, 50)
                  )
                : null,
            position: options.position
                ? new kakao.maps.LatLng(
                      options.position.lat,
                      options.position.lng
                  )
                : null,
            draggable: options.isDraggable,
        };
        if (!marker) {
            const { userId, name, clickListener } = options;
            const newMarker = new kakao.maps.Marker({
                ...options,
                map: this.map,
            });
            newMarker.setTitle(`${userId} ${name}`);
            kakao.maps.event.addListener(newMarker, 'click', (e) => {
                clickListener(newMarker.getTitle());
            });

            return newMarker;
        }
        const { position, image, draggable } = options;
        marker.setMap(this.map);
        position && marker.setPosition(position);
        image && marker.setImage(image);
        draggable != null && marker.setDraggable(draggable);
        return marker;
    }
    setCluster(marker) {
        this.clusterer.addMarker(marker);
    }
    setCenter({ lat, lng }: Coordinates) {
        this.map.setCenter(new kakao.maps.LatLng(lat, lng));
    }
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
    removeFromMap(kakaoObj) {
        kakaoObj.setMap(null);
    }
    setMapEventListener(event, listener) {
        kakao.maps.event.addListener(this.map, event, listener);
    }
    setClusterEventListener(event, listener) {
        kakao.maps.event.addListener(this.clusterer, event, listener);
    }
}
