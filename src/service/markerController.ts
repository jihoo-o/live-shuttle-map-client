import { getUsers, getShuttleStops, getBusStops } from './../api/marker';
import { Marker, UserMarker, StationMarker } from './map';

interface MarkerController {
    add(): void;
    edit(): void;
    delete(): void;
}

class BaseMarkerController {
    private map: any;

    // constructor() {
    //     this.map = new Map( :HTMLDivElement)
    // }

    protected setAll(markers: Array<Marker>) {
        // 이전 배열과 비교해서 달라진 부분만 렌더링함

        markers.forEach((marker) => {
            this.map.addMarker(marker);
        });
    }

    protected update() {
        // Socket.broadcast('update markers for user')
    }
}

class User extends BaseMarkerController implements MarkerController {
    public async setAll() {
        const users: Array<UserMarker> = await getUsers();
        users
            ? super.setAll(users)
            : console.error('사용자 마커를 가져오지 못했습니다.');
    }

    protected update() {
        super.update();
        this.setAll();
    }

    public add() {
        // postUser
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

class Station extends BaseMarkerController implements MarkerController {
    public async setAllShuttlestops() {
        const shuttleStops: Array<StationMarker> = await getShuttleStops();
        shuttleStops
            ? super.setAll(shuttleStops)
            : console.error('셔틀 정류장 마커를 가져오지 못했습니다.');
    }

    public async setAllBusstops() {
        const busStops: Array<StationMarker> = await getBusStops();
        busStops
            ? super.setAll(busStops)
            : console.error('버스 정류장 마커를 가져오지 못했습니다.');
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
