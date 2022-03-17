import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Map } from './dist/service/map.js';
import { User, Station } from './dist/service/markerController.js';

const map = Map;
const userMarkerController = User;
const stationMarkerController = Station;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                map={map}
                userMarkerController={userMarkerController}
                stationMarkerController={stationMarkerController}
            />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
