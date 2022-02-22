import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { MapService } from './service/map.js';

const mapService = MapService;

ReactDOM.render(
    <React.StrictMode>
        <App mapService={mapService} />
    </React.StrictMode>,
    document.getElementById('root')
);
