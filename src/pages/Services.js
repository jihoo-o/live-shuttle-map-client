import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Services = (props) => {
    const navigate = useNavigate();

    return (
        <nav>
            <li onClick={() => navigate('/services/taxi')}>택시</li>
            <li onClick={() => navigate('/services/delivery')}>배달</li>
        </nav>
    );
};

export default Services;
