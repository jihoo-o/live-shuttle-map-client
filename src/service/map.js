import BusImage from '../images/bus.png';

const { kakao } = window;

const shuttlebusStops = [
    {
        id: 111,
        title: {
            ko: '외성생활관',
            en: 'Off-campus dorm',
        },
        location: {
            lat: 35.27001,
            lng: 129.085296,
        },
    },
    {
        id: 112,
        title: {
            ko: '범어사역',
            en: 'Beomeosa station',
        },
        location: {
            lat: 35.272884,
            lng: 129.09251,
        },
    },
    {
        id: 113,
        title: {
            ko: '남산역',
            en: 'Namsan station',
        },
        location: {
            lat: 35.265204,
            lng: 129.092325,
        },
    },
    {
        id: 114,
        title: {
            ko: '남산소방서',
            en: 'Namsan Fire Station',
        },
        location: {
            lat: 35.26115623050817,
            lng: 129.08715399980125,
        },
    },
    {
        id: 115,
        title: {
            ko: '건학관',
            en: 'Campus',
        },
        location: {
            lat: 35.26753755709011,
            lng: 129.080358588741,
        },
    },
];

export class MapService {
    constructor(container) {
        this.map = new kakao.maps.Map(container, {
            /** TODO */
            // 초기화 시작위치 변경
            center: new kakao.maps.LatLng(
                35.26803502583599,
                129.07881371644712
            ),
            level: 2,
        });
        this.setMarkers();
        // setShuttlebusStop()
    }

    // 파라미터가 없는 경우 자동으로 가장 가까운 셔틀 정류장을 찾음
    async setShuttlebusStop(station) {
        let location = { lat: 0, lng: 0 };
        if (station == null) {
            try {
                /** Expected */
                // show progress indicator
                const result = await this.getCurrentLocation();
                // hide progress indicator
                if (!result) {
                    throw new Error('사용자의 현재 위치를 찾을 수 없습니다.');
                }
                location.lat = result.coords.latitude;
                location.lng = result.coords.longitude;
            } catch (e) {
                console.error(e.message);
            }
            // findNearestShuttlebusStop
            // return currentShuttlebusStop -> 검색 키워드 설정에 사용됨
        }
        this.setSenter(location);
    }

    /** private functions */
    async getCurrentLocation() {
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
    setSenter(location) {
        this.map.setCenter(new kakao.maps.LatLng(location.lat, location.lng));
    }
    /** TODO */
    setMarkers() {
        // shuttlebusStops <- getShuttlebusStops <- (backend)
        shuttlebusStops.forEach(({ location }) => {
            this.addMarker(new kakao.maps.LatLng(location.lat, location.lng));
        });
    }

    addMarker(position) {
        const marker = new kakao.maps.Marker({
            map: this.map,
            position,
            image: new kakao.maps.MarkerImage(
                BusImage,
                new kakao.maps.Size(48, 48)
            ),
        });
    }

    changeMarker() {}

    removeMarker(station) {}
    findNearestShuttlebusStop() {}
}
