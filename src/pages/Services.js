import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Services = ({ currentService, setCurrentService }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentService) {
            return;
        }

        switch (currentService) {
            case 'taxi':
                navigate('/services/taxi');
                break;
            case 'delivery':
                navigate('/services/delivery');
                break;
            default:
                throw new Error('존재하지 않는 서비스입니다.');
        }
    }, [currentService]);

    return (
        <nav>
            <li
                onClick={() => {
                    setCurrentService('taxi');
                    navigate('/services/taxi');
                }}
            >
                택시
            </li>
            <li
                onClick={() => {
                    setCurrentService('delivery');
                    navigate('/services/delivery');
                }}
            >
                배달
            </li>
        </nav>
    );
};

export default Services;
