export const getCurrentPosition = (onUpdate) => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            onUpdate({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        }, (error) => {
            alert(`ERROR(${error.code}): ${error.message}`);
        });
    }
    else {
        /* 위치정보 사용 불가능 */
    }
};
export const watchPosition = (onUpdate) => { };
//# sourceMappingURL=geolocation.js.map