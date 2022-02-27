import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TaxiService from '../pages/TaxiService';
import BottomTabs from './BottomTabs';
import Header from './Header';

const Service = (props) => {
    // service prop -> composition for rendering child components

    return (
        <>
            <Header />
            <Outlet />
            <BottomTabs />
        </>
    );
};

export default Service;
