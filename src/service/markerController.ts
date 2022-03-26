import { postUser } from '../api/marker';
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

    public setOne(options, marker?) {
        return this.map.setMarker(options, marker);
    }

    public setCenter(position: Coordinates) {
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
    private listeners: any = null;

    public getPosition(marker) {
        const { Ma, La } = marker.getPosition();
        return { lat: Ma, lng: La };
    }

    /**
     *
     * @options { map, position, imageUrl, isDraggable }
     * @param marker null이면 새로운 마커를 생성하고, null이 아니면 기존의 마커를 수정합니다.
     */
    public create(options, marker?) {
        const { position } = options;
        super.setCenter(position);
        const newMarker = super.setOne(options, marker);
        if (!marker) {
            this.addEventListener(newMarker);
        }
        return newMarker;
    }

    protected update() {
        super.update();
    }

    public add(userId: string, marker, isCurrent: Boolean) {
        const position = this.getPosition(marker);
        postUser(userId, isCurrent, position) //
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
