import React, { useCallback, useEffect, useState } from 'react';
import MapCategory from './MapCategory';

const Map = ({ mapService }) => {
    const [category, setCategory] = useState(null);
    // map이 존재하지 않는 경우
    let map;

    useEffect(() => {
        const container = document.getElementById('map');
        map = new mapService(container);
        map && map.setShuttlebusStop();
    }, []);

    const handleCategoryChange = useCallback((clickedValue) => {
        setCategory(clickedValue);
        map && map.changeMarker(clickedValue);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <MapCategory
                currentCategory={category}
                onCategoryChange={handleCategoryChange}
            />
            <div
                id="map"
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                }}
            ></div>
        </div>
    );
};

export default Map;
