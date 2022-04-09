const { kakao } = window;
export class Map {
    constructor(container) {
        this.map = new kakao.maps.Map(container, {
            /** TODO */
            // 초기화 시작위치 변경
            center: new kakao.maps.LatLng(35.267342474237104, 129.08901354232913),
            level: 6,
        });
        // ❌
        this.clusterer = new kakao.maps.MarkerClusterer({
            map: this.map,
            averageCenter: true,
            minLevel: 2,
            disableClickZoom: true,
        });
        kakao.maps.event.addListener(this.map, 'click', (e) => {
            const latlng = e.latLng;
            console.log(`lat: ${latlng.getLat()}, lng: ${latlng.getLng()}`);
        });
        // ❌
        this.setClusterEventListener('clusterclick', (cluster) => {
            const center = cluster.getCenter();
            this.setCenter({ lat: center.Ma, lng: center.La });
        });
    }
    setCenter({ lat, lng }) {
        this.map.setCenter(new kakao.maps.LatLng(lat, lng));
    }
    setLevel(level, anchor) {
        this.map.setLevel(level, { anchor, animation: true });
    }
    // ❌
    drawCircle(center, radius, color) {
        return new kakao.maps.Circle({
            map: this.map,
            center: new kakao.maps.LatLng(center.lat, center.lng),
            radius,
            strokeWeight: 5,
            strokeColor: color,
            strokeOpacity: 1,
            strokeStyle: 'dashed',
            fillColor: color,
            fillOpacity: 0.7, // 채우기 불투명도 입니다
        });
    }
    // ❌
    drawPolyline({ polyline, path }) {
        if (!polyline) {
            return new kakao.maps.Polyline({
                map: this.map,
                path,
                strokeWeight: 3,
                strokeColor: '#db4040',
                strokeOpacity: 0,
                strokeStyle: 'solid', // 선의 스타일입니다
            });
        }
        polyline.setPath(path);
        return polyline;
    }
    // ❌
    drawCustomOverlay({ customOverlay, position, content }) {
        if (!customOverlay) {
            return new kakao.maps.CustomOverlay({
                position,
                content,
            });
        }
        customOverlay.setPosition(position);
        return customOverlay;
    }
    setMap(kakaoObj, set) {
        kakaoObj.setMap(set ? this.map : null);
    }
    // -> addEventListener(instance, event, listener)
    setMapEventListener(event, listener) {
        kakao.maps.event.addListener(this.map, event, listener);
    }
    // + removeEventListener(instance, event, listener)
    // ❌
    setClusterEventListener(event, listener) {
        kakao.maps.event.addListener(this.clusterer, event, listener);
    }
}
//# sourceMappingURL=map.js.map