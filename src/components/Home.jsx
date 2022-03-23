import React, { useState, useEffect, memo } from 'react';
import Map from './Map';

const Home = ({
    userId,
    map,
    taxiMarkerController,
    stationMarkerController,
    shapeController,
}) => {
    const ref = React.createRef();
    const [mapService, setMapService] = useState(null);
    const [taxiMarker, setTaxiMarker] = useState(null);
    const [stationMarker, setStationMarker] = useState(null);
    const [drawingService, setDrawingService] = useState(null);

    useEffect(() => {
        const mapInstance = new map(ref.current);
        const taxiMarkerInstance = new taxiMarkerController(mapInstance);
        const stationMarkerInstance = new stationMarkerController(mapInstance);
        const drawingService = new shapeController(mapInstance);
        setMapService(() => mapInstance);
        setTaxiMarker(() => taxiMarkerInstance);
        setStationMarker(() => stationMarkerInstance);
        setDrawingService(() => drawingService);
    }, []);

    return (
        <>
            <Map
                userId={userId}
                ref={ref}
                map={mapService}
                taxiMarker={taxiMarker}
                stationMarker={stationMarker}
                shapeController={drawingService}
            />
        </>
    );
};

export default Home;
