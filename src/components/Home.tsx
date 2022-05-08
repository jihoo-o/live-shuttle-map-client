import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getShuttleStops, getUsers } from '../api/marker';
import BottomTab from './BottomTab';
import FloatTab from './FloatTab';
import HalfPanel from './HalfPanel';
import MapComponent from './MapComponent';

const HomeLayout = styled.div<{ isRow: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) => (props.isRow === true ? 'row' : 'column')};
`;

interface IState {
    currentCategory: null | string;
    currentMarkers: Array<any>;
    subMarkers: {
        stations: Array<any>;
    };
}

const Home = (props) => {
    const [currentService, setCurrentService] = useState<IState>({
        currentCategory: null,
        currentMarkers: [],
        subMarkers: {
            stations: [],
        },
    });

    useEffect(() => {
        getShuttleStops() //
            .then((shuttleStations) => {
                setCurrentService((oldService) => {
                    const newService = {
                        ...oldService,
                        subMarkers: {
                            ...oldService.subMarkers,
                            stations: shuttleStations,
                        },
                    };
                    return newService;
                });
            })
            .catch((e) => console.log('셔틀 정류장을 불러오지 못했습니다.'));
    }, []);

    const handleUpdateService = async (newCategory: string) => {
        let newMarkers;
        switch (newCategory) {
            case 'SHUTTLE':
                break;
            case 'TAXI':
                newMarkers = await getUsers();
                break;
            default:
                throw new Error('존재하지 않는 서비스입니다.');
        }

        setCurrentService((oldService) => {
            const newService = {
                ...oldService,
                currentCategory: newCategory,
                currentMarkers: newMarkers,
            };
            return newService;
        });
    };

    return (
        <>
            <HomeLayout isRow={false}>
                <MapComponent currentService={currentService} />
                <HalfPanel />
                <BottomTab onUpdateService={handleUpdateService} />
            </HomeLayout>
            <FloatTab />
        </>
    );
};

export default Home;
