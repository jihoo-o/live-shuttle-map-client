import {
    getUsers,
    getShuttleStops,
    markerImages,
    postUser,
} from '../api/marker';
import { Marker, UserMarker, StationMarker, Coordinates } from './map';

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

    protected setOne(marker: Marker) {
        return this.map.addMarker(marker);
    }

    protected setAll(markers: Array<Marker>) {
        // 이전 배열과 비교해서 달라진 부분만 렌더링함
        markers.forEach((marker) => {
            this.setOne(marker);
        });
    }

    protected create(position: Coordinates) {
        this.map.setCenter(position);
    }

    protected update() {
        // Socket.broadcast('update markers for user') -> It allows every other users to call this.setAll()
    }

    // private getMarkerImages<T extends Marker>(marker: T): ImageUrl
    private getMarkerImages<MarkerType extends Marker>(marker: MarkerType) {
        //    switch(MarkerType) {
        //        case MarkerType extends UserMarker:
        //            break;
        //    }
    }
}

export class Taxi extends BaseMarkerController implements MarkerController {
    private newMarker: Marker = {
        lat: 0,
        lng: 0,
        imageUrl: `${markerImages['user']['ready']['isCurrent']}`,
        isDraggable: true,
    };

    public async setAll() {
        const users = await getUsers();
        users
            ? super.setAll(users)
            : console.error('사용자 마커를 가져오지 못했습니다.');
    }

    public create(position: Coordinates) {
        super.create(position);
        this.newMarker = {
            lat: position.lat,
            lng: position.lng,
            imageUrl: `${markerImages['user']['ready']['isCurrent']}`,
            isDraggable: true,
        };
        return super.setOne(this.newMarker);
    }

    protected update() {
        super.update();
        this.setAll();
    }

    public add(userId, position: Coordinates) {
        // postUser
        postUser(userId, position) //
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
}

export class Station extends BaseMarkerController implements MarkerController {
    public async setAllShuttlestops() {
        const shuttleStops = await getShuttleStops();
        shuttleStops
            ? super.setAll(shuttleStops)
            : console.error('셔틀 정류장 마커를 가져오지 못했습니다.');
    }

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
