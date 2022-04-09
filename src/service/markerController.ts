/* eslint-disable import/first */
import { postUser } from '../api/marker';
import {
    createKakaoClusterInstance,
    createKakaoMarkerInstance,
} from '../utils/kakaomap';
import { Marker, UserMarker, StationMarker, Coordinates } from './map';

const { kakao } = window;

interface MarkerController {
    // add(): void;
    edit(): void;
    delete(): void;
}

export type StationTypes = 'shuttlebus' | 'bus';
export type UserStates = 'ready' | 'running' | 'blocked';
type MarkerType<T> = T extends UserMarker
    ? UserStates
    : T extends StationMarker
    ? StationTypes
    : Marker;

class BaseMarkerController {
    constructor(private map: any) {}

    public createMarker(options, marker?) {
        let newMarker;
        if (!marker) {
            newMarker = createKakaoMarkerInstance(options);
            this.map.setMap(newMarker, true);
        } else {
            newMarker = marker;
            const { position, image, draggable } = options;
            position && newMarker.setPosition(position);
            image && newMarker.setImage(image);
            draggable != null && newMarker.setDraggable(draggable);
        }
        return newMarker;
    }

    public createCluster(options, cluster?) {
        options.markers.forEach((marker) => this.map.setMap(marker, false));
        const newCluster = createKakaoClusterInstance(options);
        this.map.setMap(newCluster, true);
        return newCluster;
    }

    public setCenter(position: Coordinates) {
        this.map.setCenter(position);
    }

    protected update() {
        // Socket.broadcast('update markers for user') -> It allows every other users to call this.setAll()
    }
}

export class Taxi extends BaseMarkerController implements MarkerController {
    private listeners: any = null;

    public getPosition(marker) {
        const { Ma, La } = marker.getPosition();
        return { lat: Ma, lng: La };
    }

    /**
     *
     * @options { map, position, image, isDraggable }
     * @param marker null이면 새로운 마커를 생성하고, null이 아니면 기존의 마커를 수정합니다.
     */
    public create(options, marker?) {
        const { position } = options;
        console.log(position);
        position && super.setCenter(position);
        const newMarker = super.createMarker(options, marker);
        if (!marker) {
            this.addEventListener(newMarker);
        }
        return newMarker;
    }

    protected update() {
        super.update();
    }

    public add(userInfo, marker, isCurrent: Boolean) {
        const position = this.getPosition(marker);
        postUser(userInfo, isCurrent, position) //
            .then(console.log);
        this.update();
    }

    public edit() {
        // putUser
        this.update();
    }

    public delete() {
        // deleteUser
        this.update();
    }

    /**
     *
     * @param listeners [{event, listener}, ]
     */
    private setEventListener(listeners) {
        this.listeners = listeners;
    }

    public addEventListener(marker) {
        this.listeners.forEach(({ event, listener }) => {
            kakao.maps.event.addListener(marker, event, listener);
        });
    }
}

export class Station extends BaseMarkerController implements MarkerController {
    public async setAllBusstops() {
        // const busStops: Array<StationMarker> = await getBusStops();
        // busStops
        //     ? super.setAll(busStops)
        //     : console.error('버스 정류장 마커를 가져오지 못했습니다.');
    }

    // for Admin
    public add() {
        // addStation
        this.update();
    }

    public edit() {
        // postStation
        this.update();
    }

    public delete() {
        // deleteStation
        this.update();
    }
}
