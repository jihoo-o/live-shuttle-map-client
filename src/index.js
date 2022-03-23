import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Map } from './dist/service/map.js';
import { Taxi, Station } from './dist/service/markerController.js';
import { ShapeController } from './dist/service/shapeController.js';

const map = Map;
const taxiMarkerController = Taxi;
const stationMarkerController = Station;
const shapeController = ShapeController;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                map={map}
                taxiMarkerController={taxiMarkerController}
                stationMarkerController={stationMarkerController}
                shapeController={shapeController}
            />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
