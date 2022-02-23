import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import { MapService } from './service/map.js';

const mapService = MapService;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App mapService={mapService} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
