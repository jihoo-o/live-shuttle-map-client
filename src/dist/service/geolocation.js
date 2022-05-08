export const getCurrentPosition = (onUpdate) => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        }
        else {
            reject();
        }
    })
        .then((position) => {
        onUpdate();
        return {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
    })
        .catch((error) => {
        alert(`ERROR(${error.code}): ${error.message}`);
        return error;
    });
};
export const watchPosition = (onUpdate) => { };
//# sourceMappingURL=geolocation.js.map