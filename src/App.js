import React, { useEffect } from 'react';

const App = ({ mapService }) => {
    useEffect(() => {
        const container = document.getElementById('map');
        const map = new mapService(container);
        map.setShuttlebusStop();
    }, []);

    return (
        <div>
            <div id="map" style={{ width: 500, height: 500 }}></div>
        </div>
    );
};

export default App;
