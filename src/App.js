import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ServiceTemplate from './components/ServiceTemplate.js';
import DeliveryService from './pages/DeliveryService.js';
import Services from './pages/Services.js';
import TaxiService from './pages/TaxiService.js';

const App = ({ mapService }) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate('home');
    }, []);

    return (
        <Routes>
            <Route path="home" element={<Services />}></Route>
            <Route path="services" element={<ServiceTemplate />}>
                <Route path="taxi" element={<TaxiService />} />
                <Route path="delivery" element={<DeliveryService />} />
            </Route>
        </Routes>
    );
};

export default App;
