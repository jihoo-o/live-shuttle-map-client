import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ServiceTemplate from './components/ServiceTemplate.js';
import Conversations from './pages/Conversations.js';
import DeliveryService from './pages/DeliveryService.js';
import Services from './pages/Services.js';
import TaxiService from './pages/TaxiService.js';

const App = ({ mapService }) => {
    const [currentService, setCurrentService] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        navigate('home');
    }, []);

    return (
        <Routes>
            <Route
                path="home"
                element={
                    <Services
                        currentService={currentService}
                        setCurrentService={setCurrentService}
                    />
                }
            ></Route>
            <Route path="services" element={<ServiceTemplate />}>
                <Route path="taxi" element={<TaxiService />} />
                <Route path="delivery" element={<DeliveryService />} />
            </Route>
            <Route path="conversations" element={<ServiceTemplate />}>
                <Route path="list" element={<Conversations />} />
            </Route>
        </Routes>
    );
};

export default App;
