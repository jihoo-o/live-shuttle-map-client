var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*global kakao*/
/* eslint-disable import/first */
import { postUser } from '../api/marker';
class BaseMarkerController {
    constructor(map) {
        this.map = map;
    }
    setMap(options, marker) {
        return this.map.setMarker(options, marker);
    }
    setCluster(options, marker) {
        const newMarker = this.map.setMarker(options, marker);
        this.map.removeFromMap(newMarker);
        this.map.setCluster(newMarker);
        return newMarker;
    }
    setCenter(position) {
        this.map.setCenter(position);
    }
    update() {
        // Socket.broadcast('update markers for user') -> It allows every other users to call this.setAll()
    }
    // private getMarkerImages<T extends Marker>(marker: T): image
    getMarkerImages(marker) {
        //    switch(MarkerType) {
        //        case MarkerType extends UserMarker:
        //            break;
        //    }
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
     * @options { map, position, image, isDraggable }
     * @param marker null이면 새로운 마커를 생성하고, null이 아니면 기존의 마커를 수정합니다.
     */
    create(options, marker) {
        const { position } = options;
        position && super.setCenter(position);
        const newMarker = super.setMap(options, marker);
        if (!marker) {
            this.addEventListener(newMarker);
        }
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