import React, { useCallback, useEffect, useState } from 'react';
import MapCategory from './MapCategory';

const Map = ({ mapService }) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const container = document.getElementById('map');
        const map = new mapService(container);
        map.setShuttlebusStop();
    }, []);

    const handleCategoryChange = useCallback((clickedValue) => {
        setCategory(clickedValue);
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
