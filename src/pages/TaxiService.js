import React from 'react';
import LocationPanel from '../components/LocationPanel';
import Chatrooms from '../components/Chatrooms';
import Header from '../components/Header';
import RealtimeBusInfo from '../components/RealtimeBusInfo';
import ServicePanel from '../components/ServicePanel';

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
