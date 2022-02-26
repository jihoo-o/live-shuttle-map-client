import React from 'react';
import ServiceLocations from '../components/ServiceLocations';
import Chatrooms from '../components/Chatrooms';
import Header from '../components/Header';
import RealtimeBusInfo from '../components/RealtimeBusInfo';
import ServicePanel from '../components/ServicePanel';

const TaxiService = (props) => {
    // Header(back + notification)
    // RealtimeBusInfo
    // Recommendations
    // ServicePanel(serviceLocations + chatrooms)

    return (
        <>
            <Header />
            <RealtimeBusInfo />
            <ServicePanel>
                <ServiceLocations />
                <Chatrooms />
            </ServicePanel>
        </>
    );
};

export default TaxiService;
