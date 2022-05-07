import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './components/Home';
import Login from './pages/Login';

const App = ({
    map,
    taxiMarkerController,
    stationMarkerController,
    shapeController,
    authService,
}) => {
    const [userInfo, setUserInfo] = useState(null);
    // useState({
    //     userId: '2dsfji5r44356j',
    //     name: '선화',
    // });
    const navigator = useNavigate();

    const handleLogin = (userInfo) => {
        setUserInfo(userInfo);
        navigator('/');
    };

    const handleLogout = () => {
        authService.logout(() => {
            setUserInfo(null);
            navigator('/login');
        });
    };

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
                    <Home
                        userInfo={userInfo}
                        map={map}
                        taxiMarkerController={taxiMarkerController}
                        stationMarkerController={stationMarkerController}
                        shapeController={shapeController}
                        onLogout={handleLogout}
                    />
                }
            />
            <Route
                path="/login"
                element={<Login authService={authService} />}
            ></Route>
            <Route
                path="/oauth"
                element={
                    <Auth authService={authService} onLogin={handleLogin} />
                }
            />
        </Routes>
    );
};

export default App;
