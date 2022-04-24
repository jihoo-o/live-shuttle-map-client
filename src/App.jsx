import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import Login from './components/Login';

const App = ({
    map,
    taxiMarkerController,
    stationMarkerController,
    shapeController,
    authService,
}) => {
    const [userInfo, setUerInfo] = useState({
        userId: '2dsfji5r44356j',
        name: '선화',
    });

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
        //             element={<Conversations userInfo={userInfo} />}
        //         />
        //     </Route>
        // </Routes>

        <Routes>
            <Route
                path="/"
                element={
                    <Login authService={authService} />
                    // <Home
                    //     userInfo={userInfo}
                    //     map={map}
                    //     taxiMarkerController={taxiMarkerController}
                    //     stationMarkerController={stationMarkerController}
                    //     shapeController={shapeController}
                    // />
                }
            />
            <Route path="/oauth" element={<Auth authService={authService} />} />
        </Routes>
    );
};

export default App;
