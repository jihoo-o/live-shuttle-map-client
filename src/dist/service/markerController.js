var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/first */
import { postUser } from '../api/marker';
import { createKakaoClusterInstance, createKakaoMarkerInstance, } from '../utils/kakaomap';
const { kakao } = window;
class BaseMarkerController {
    constructor(map) {
        this.map = map;
    }
    createMarker(options, marker) {
        let newMarker;
        if (!marker) {
            newMarker = createKakaoMarkerInstance(options);
        }
        else {
            newMarker = marker;
            const { position, image, draggable } = options;
            position && newMarker.setPosition(position);
            image && newMarker.setImage(image);
            draggable != null && newMarker.setDraggable(draggable);
        }
        this.map.setMap(newMarker, true);
        return newMarker;
    }
    // options.markers: Array
    createCluster(options, cluster) {
        let newCluster;
        const { markers } = options;
        if (!markers)
            return;
        if (!cluster) {
            markers.forEach((marker) => this.map.setMap(marker, false));
            newCluster = createKakaoClusterInstance(options);
            this.map.setMap(newCluster, true);
        }
        else {
            newCluster = cluster;
            markers.forEach((marker) => {
                newCluster.removeMarker(marker);
                newCluster.addMarker(marker);
            });
        }
        return newCluster;
    }
    setCenter(position) {
        this.map.setCenter(position);
    }
    update() {
        // Socket.broadcast('update markers for user') -> It allows every other users to call this.setAll()
    }
}
export class Taxi extends BaseMarkerController {
    constructor() {
        super(...arguments);
        this.listeners = null;
    }
    getPosition(marker) {
        const { Ma, La } = marker.getPosition();
        return { lat: Ma, lng: La };
    }
    /**
     *
     * @options { map, position, image, draggable }
     * @param marker null이면 새로운 마커를 생성하고, null이 아니면 기존의 마커를 수정합니다.
     */
    create(options, marker) {
        const newMarker = super.createMarker(options, marker);
        options.position && super.setCenter(options.position);
        return newMarker;
    }
    update() {
        super.update();
    }
    add(userInfo, marker, isCurrent) {
        const position = this.getPosition(marker);
        postUser(userInfo, isCurrent, position) //
            .then(console.log);
        this.update();
    }
    edit() {
        // putUser
        this.update();
    }
    delete() {
        // deleteUser
        this.update();
    }
    /**
     *
     * @param listeners [{event, listener}, ]
     */
    setEventListener(listeners) {
        this.listeners = listeners;
    }
    addEventListener(marker) {
        this.listeners.forEach(({ event, listener }) => {
            kakao.maps.event.addListener(marker, event, listener);
        });
    }
}
export class Station extends BaseMarkerController {
    setAllBusstops() {
        return __awaiter(this, void 0, void 0, function* () {
            // const busStops: Array<StationMarker> = await getBusStops();
            // busStops
            //     ? super.setAll(busStops)
            //     : console.error('버스 정류장 마커를 가져오지 못했습니다.');
        });
    }
    // for Admin
    add() {
        // addStation
        this.update();
    }
    edit() {
        // postStation
        this.update();
    }
    delete() {
        // deleteStation
        this.update();
    }
}
//# sourceMappingURL=markerController.js.map