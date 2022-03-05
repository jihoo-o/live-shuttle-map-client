import React, { useEffect } from 'react';

const Map = ({ mapService }) => {
    useEffect(() => {
        const container = document.getElementById('map');
        const map = new mapService(container);
        map.setShuttlebusStop();
    }, []);

    return (
        <div
            id="map"
            style={{ width: '100%', height: '100%', borderRadius: '5px' }}
        ></div>
    );
};

export default Map;
