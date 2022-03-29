const { kakao } = window;
export class Map {
    constructor(container) {
        this.map = new kakao.maps.Map(container, {
            /** TODO */
            // 초기화 시작위치 변경
            center: new kakao.maps.LatLng(35.267342474237104, 129.08901354232913),
            level: 6,
        });
        kakao.maps.event.addListener(this.map, 'click', (e) => {
            const latlng = e.latLng;
            console.log(`lat: ${latlng.getLat()}, lng: ${latlng.getLng()}`);
        });
    }
    setMarker(options, marker) {
        options = Object.assign(Object.assign({}, options), { image: options.image
                ? new kakao.maps.MarkerImage(options.image, new kakao.maps.Size(50, 50))
                : null, position: options.position
                ? new kakao.maps.LatLng(options.position.lat, options.position.lng)
                : null, draggable: options.isDraggable });
        if (!marker) {
            const { userId, clickListener } = options;
            const newMarker = new kakao.maps.Marker(Object.assign(Object.assign({}, options), { map: this.map }));
            newMarker.setTitle(userId);
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
    setCenter({ lat, lng }) {
        this.map.setCenter(new kakao.maps.LatLng(lat, lng));
    }
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
    removeFromMap(kakaoObj) {
        kakaoObj.setMap(null);
    }
    setEventListener(event, listener) {
        kakao.maps.event.addListener(this.map, event, listener);
    }
}
//# sourceMappingURL=map.js.map