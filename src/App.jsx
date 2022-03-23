import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = ({
    map,
    taxiMarkerController,
    stationMarkerController,
    shapeController,
}) => {
    const [userId, setUserId] = useState('1234');
    const [currentService, setCurrentService] = useState('taxi');

    // let navigate = useNavigate();

    // useEffect(() => {
    // navigate('home');
    // }, []);

    return (
        // <Routes>
        //     <Route
        //         path="home"
        //         element={
        //             <Services
        //                 currentService={currentService}
        //                 setCurrentService={setCurrentService}
        //             />
        //         }
        //     ></Route>
        //     <Route path="services" element={<ServiceTemplate />}>
        //         <Route
        //             path="taxi"
        //             element={<TaxiService mapService={mapService} />}
        //         />
        //         <Route path="delivery" element={<DeliveryService />} />
        //     </Route>
        //     <Route path="conversations" element={<ServiceTemplate />}>
        //         <Route
        //             path="list"
        //             element={<Conversations userId={userId} />}
        //         />
        //     </Route>
        // </Routes>

        <Routes>
            <Route
                path="/"
                element={
                    <Home
                    userId={userId}
                        map={map}
                        taxiMarkerController={taxiMarkerController}
                        stationMarkerController={stationMarkerController}
                        shapeController={shapeController}
                    />
                }
            />
        </Routes>
    );
};

export default App;
