export class GeolocationService {
    getCurrentPosition(onUpdate) {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    onUpdate(
                        position.coords.latitude,
                        position.coords.longitude
                    );
                },
                (error) => {
                    alert(`ERROR(${error.code}): ${error.message}`);
                }
            );
        } else {
            /* 위치정보 사용 불가능 */
        }
    }

    watchPosition(onUpdate) {}
}
