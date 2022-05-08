export const getCurrentPosition = (onUpdate: any) => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject();
        }
    })
        .then((position: any) => {
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

export const watchPosition = (onUpdate) => {};
