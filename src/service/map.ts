// 🗑

const { kakao } = window;

type station = {
    id: number;
    name: string;
    location: location;
};

type location = {
    lat: number;
    lng: number;
};

// dummy data
const stations: Array<station> = [
    {
        id: 1,
        name: 'noop',
        location: {
            lat: 0,
            lng: 0,
        },
    },
    {
        id: 2,
        name: 'NamsanFireStation',
        location: {
            lat: 0,
            lng: 0,
        },
    },
    {
        id: 3,
        name: 'HanbatSportsComplex',
        location: {
            lat: 0,
            lng: 0,
        },
    },
    {
        id: 4,
        name: 'BusaFiveWayIntersection',
        location: {
            lat: 0,
            lng: 0,
        },
    },
    {
        id: 5,
        name: 'MotorcycleStreet',
        location: {
            lat: 0,
            lng: 0,
        },
    },
];

/** Expected */
// interface MapService {
//     readonly maps: any;
// }

export class MapServiceImpl {
    // private static map: any;
    private map: any;

    // constructor(container: HTMLDivElement) {
    //     this.map = new kakao.maps.Map(container, {
    //         /** TODO */
    //         // 초기화 시작위치 변경
    //         center: new kakao.maps.LatLng(33.450701, 126.570667),
    //         level: 3,
    //     });

    //     // setMarkers()
    //     // setShuttlebusStop()
    // }

    constructor(container: HTMLDivElement) {
        this.map = new kakao.maps.Map(container, {
            /** TODO */
            // 초기화 시작위치 변경
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        });
        // setMarkers()
        // setShuttlebusStop()
    }

    // static createMap(container: HTMLDivElement): MapServiceImpl {
    //     console.log('create Map');
    //     return new MapServiceImpl(container);
    // }

    // 파라미터가 없는 경우 자동으로 가장 가까운 셔틀 정류장을 찾음
    async setShuttlebusStop(station?: station) {
        let location: location = { lat: 0, lng: 0 };
        if (station == null) {
            try {
                /** Expected */
                // show lodaing spinner
                const result = (await this.getCurrentLocation()) as any;
                // hide lodaing spinner
                if (!result) {
                    throw new Error('사용자의 현재 위치를 찾을 수 없습니다.');
                }
                location.lat = result.coords.latitude;
                location.lng = result.coords.longitude;
            } catch (e: any) {
                console.error(e.message);
            }
            // findNearestShuttlebusStop
            // return currentShuttlebusStop -> 검색 키워드 설정에 사용됨
        }
        this.setSenter(location);
    }
    addMarker(station: station) {}
    removeMarker(station: station) {}

    private async getCurrentLocation() {
        if (navigator.geolocation) {
            return await new Promise((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej);
            }).catch((e) => {
                throw new Error('Geolocation API를 이용할 수 없습니다.');
            });
        } else {
            throw new Error('Geolocation API를 이용할 수 없습니다.');
        }
    }

    /** TODO */
    private findNearestShuttlebusStop() {}
    private setSenter(location: location) {
        this.map.setCenter(new kakao.maps.LatLng(location.lat, location.lng));
    }
    private setMarkers() {}
}
