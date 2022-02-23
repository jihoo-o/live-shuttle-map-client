import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Map from './components/map.js';

const App = ({ mapService }) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate('/services/taxi');
    }, []);

    return (
        <Routes>
            <Route
                path="services/taxi"
                element={<Map mapService={mapService} />}
            ></Route>
        </Routes>
    );
};

export default App;
