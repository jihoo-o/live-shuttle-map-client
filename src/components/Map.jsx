import React, { useEffect, useRef } from 'react';

const Map = ({
    currentService,
    map,
    userMarkerController,
    stationMarkerController,
}) => {
    const mapContainer = useRef();

    useEffect(() => {
        const mapInstance = new map(mapContainer.current);
        const userMarker = new userMarkerController(mapInstance);
        const stationMarker = new stationMarkerController(mapInstance);
        stationMarker.setAllShuttlestops();
        userMarker.setAll();
    }, []);

    return (
        <>
            <div
                style={{
                    width: '100vw',
                    height: '50vh',
                    borderRadius: '10px',
                    padding: '5px',
                }}
            >
                <div
                    ref={mapContainer}
                    id="map"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                    }}
                ></div>
            </div>
        </>
    );
};

export default Map;
