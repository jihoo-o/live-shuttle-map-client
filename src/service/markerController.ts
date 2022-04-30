/* eslint-disable import/first */
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
        } else {
            newMarker = marker;
            const { position, image, draggable } = options;
            position && newMarker.setPosition(position);
            image && newMarker.setImage(image);
            draggable != null && newMarker.setDraggable(draggable);
        }
        this.map.setMap(newMarker, true);
        return newMarker;
    }

    // -> map.ts
    // drawCluster
    public drawCluster(options, cluster?) {
        const { markers } = options;
        let newCluster;
        if (!markers) return;
        if (!cluster) {
            markers.forEach((marker) => this.map.setMap(marker, false));
            newCluster = createKakaoClusterInstance(options);
        } else {
            newCluster = cluster;
            markers.forEach((marker) => {
                newCluster.removeMarker(marker);
                newCluster.addMarker(marker);
            });
        }
        return newCluster;
    }

    public setCenter(position) {
        this.map.setCenter(position);
    }
}

export class Taxi extends BaseMarkerController implements MarkerController {
    private listeners: any = null;

    constructor(map, private socket) {
        super(map);
    }

    public getPosition(marker) {
        const { Ma, La } = marker.getPosition();
        return { lat: Ma, lng: La };
    }

    /**
     *
     * @options { map, position, image, draggable }
     * @param marker null이면 새로운 마커를 생성하고, null이 아니면 기존의 마커를 수정합니다.
     */
    public create(options, marker?) {
        const newMarker = super.createMarker(options, marker);
        options.position && super.setCenter(options.position);
        return newMarker;
    }

    protected update(data) {
        // this.socket.publish('/marker', data);
        this.socket.publish('/app/markers/users', data);
    }

    public async add(userInfo, marker, isCurrent: Boolean) {
        const position = this.getPosition(marker);
        this.update(
            //     {
            //     userId: userInfo.userId,
            //     name: userInfo.name,
            //     type: 'user',
            //     state: 'ready',
            //     isCurrent,
            //     lat: position.lat,
            //     lng: position.lng,
            //     status: 'ADD',
            // }
            {
                userid: 'dbid1234',
                img_url: null,
                lat: 1.1,
                lng: 2.2,
                user_id: 'seonhwa',
            }
        );
    }

    public edit() {}

    public delete() {}

    public connect(subscribeList) {
        this.socket.connect(subscribeList);
    }

    public activate() {
        return this.socket.activate();
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
        // this.update();
    }

    public edit() {
        // postStation
        // this.update();
    }

    public delete() {
        // deleteStation
        // this.update();
    }
}
