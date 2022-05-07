import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Map } from './dist/service/map.js';
import { Taxi, Station } from './dist/service/markerController.js';
import { ShapeController } from './dist/service/shapeController.js';
import { AuthService } from './dist/api/auth.js';

const map = Map;
const taxiMarkerController = Taxi;
const stationMarkerController = Station;
const shapeController = ShapeController;
const authService = new AuthService(
    process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY,
    process.env.REACT_APP_KAKAO_LOGIN_API_KEY,
    process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI
);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App
            // map={map}
            // taxiMarkerController={taxiMarkerController}
            // stationMarkerController={stationMarkerController}
            // shapeController={shapeController}
            // authService={authService}
            />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
