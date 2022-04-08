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
const { kakao } = window;
class BaseMarkerController {
    constructor(map) {
        this.map = map;
    }
    // addMarker
    setMap(options, marker) {
        // let newMarker;
        // if (!marker) {
        //     newMarker = createKakaoMarkerInstance(options)
        //     this.map.setMap(newMarker, true)
        // } else {
        //     newMarker = options가 업데이트 된 marker
        // }
        // return newMarker;
        return this.map.setMarker(options, marker);
    }
    // addCluster(options, cluster?)
    // 클러스터에 마커를 등록하는 경우도 options.marker에 넣어서 전달함
    setCluster(options, marker) {
        // let newCluster;
        // if (!cluster) {
        //     newCluster = createKakaoClusterInstance(options);
        //     this.map.setMap(newMarker, true);
        // } else {
        //     newCluster = options가 업데이트 된 cluster
        // }
        // return newCluster;
        const newMarker = this.map.setMarker(options, marker);
        this.map.setMap(newMarker, false);
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
        console.log(position);
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