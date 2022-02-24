import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Map from './components/map.js';
import TaxiService from './pages/TaxiService.js';

const App = ({ mapService }) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate('/services/taxi');
    }, []);

    return (
        <Routes>
            <Route path="services/taxi" element={<TaxiService />}></Route>
        </Routes>
    );
};

export default App;
