import React from 'react';
import LocationPanel from '../🗑/LocationPanel';
import Chatrooms from '../🗑/Chatrooms';
import Header from '../🗑/Header';
import RealtimeBusInfo from '../🗑/RealtimeBusInfo';
import ServicePanel from '../🗑/ServicePanel';

const TaxiService = ({ mapService }) => {
    // Header(back + notification)
    // RealtimeBusInfo
    // Recommendations
    // ServicePanel(serviceLocations + chatrooms)

    return (
        <>
            <RealtimeBusInfo />
            <ServicePanel>
                <LocationPanel mapService={mapService} />
                <Chatrooms />
            </ServicePanel>
        </>
    );
};

export default TaxiService;
