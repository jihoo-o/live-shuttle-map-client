import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Map from './components/Map';

const App = ({ map, userMarkerController, stationMarkerController }) => {
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
                    <Map
                        userId={userId}
                        currentService={currentService}
                        map={map}
                        userMarkerController={userMarkerController}
                        stationMarkerController={stationMarkerController}
                    />
                }
            />
        </Routes>
    );
};

export default App;
