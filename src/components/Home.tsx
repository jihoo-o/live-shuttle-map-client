import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getShuttles, getShuttleStops, getUsers } from '../api/marker';
import { getCurrentPosition } from '../service/geolocation';
import { CreatingMarker, Position, UserMarker } from '../types/map';
import HalfPanel from './HalfPanel';
import MapComponent from './MapComponent';
import Time from './Time';

const HomeLayout = styled.div<{ isRow: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) => (props.isRow === true ? 'row' : 'column')};
`;

interface ICurrentService {
    currentCategory: null | string;
    currentMarkers: Array<any>;
    subMarkers: {
        stations: Array<any>;
    };
}

interface LastUpdatedTime {}

const Home = ({ stomp }) => {
    const [currentService, setCurrentService] = useState<ICurrentService>({
        currentCategory: null,
        currentMarkers: [],
        subMarkers: {
            stations: [],
        },
    });
    const [creatingMarker, setCreatingMarker] = useState<CreatingMarker | null>(
        null
    );
    const [progressIndicator, setProgressIndicator] = useState<boolean>(false);
    const [lastUpdatedTime, setLastUpdatedTime] = useState<Date>(new Date());

    useEffect(() => {
        console.log(stomp);
        stomp.client &&
            stomp.client.subscribe([
                {
                    destination: 'abc',
                    callback: () => {
                        console.log('subscribe');
                    },
                },
            ]);
    }, [stomp]);

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

    useEffect(() => {
        handleUpdateService('SHUTTLE');
    }, []);

    const handleUpdateService = async (newCategory: 'SHUTTLE' | 'TAXI') => {
        let newMarkers;
        switch (newCategory) {
            case 'SHUTTLE':
                const date = new Date();
                // const day = date.getDay();
                // const hours = date.getHours();
                // if (day === 6 || day === 0 || hours < 8 || hours > 23) {
                //     window.alert(
                //         '셔틀버스 서비스는 평일 8시부터 23시까지 제공됩니다.'
                //     );
                //     return;
                // }
                newMarkers = await getShuttles();
                console.log(newMarkers);
                setLastUpdatedTime(date);
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

    const handleCreateCratingMarker = async () => {
        try {
            const newPosition = await getCurrentPosition(() => {
                handleUpdateProgressIndicator(false);
            });
            setCreatingMarker((oldMarker) => {
                if (!oldMarker) {
                    const newMarker: CreatingMarker = {
                        startPosition: newPosition,
                        type: 'user',
                        state: 'ready',
                        userId: 'seonhwa123', //
                        name: '선화', //
                        lat: newPosition.lat,
                        lng: newPosition.lng,
                        isCurrent: true, //
                    };
                    return newMarker;
                }
                return null;
            });
        } catch (e) {
            console.log(e);
        }
    };

    const handleUpdateCreatingMarker = async ({ lat, lng, isCurrent }) => {
        setCreatingMarker((oldMarker) => {
            const newMarker: UserMarker = {
                ...oldMarker,
                type: 'user',
                state: 'ready',
                userId: 'seonhwa123',
                name: '선화',
                lat,
                lng,
                isCurrent,
            };
            return newMarker;
        });
    };

    const handlePublishCreatingMarker = () => {
        setCreatingMarker((creatingMarker) => {
            const newMarker = { ...creatingMarker };
            delete newMarker.startPosition;
            const userMarker: UserMarker = { ...newMarker } as UserMarker;
            stomp.client.publish('/marker/createuser', userMarker);
            return null;
        });
    };

    const handleClearCreatingMarker = () => {
        setCreatingMarker(null);
    };

    const handleUpdateProgressIndicator = (visible: boolean) => {
        setProgressIndicator(visible);
    };

    return (
        <>
            <HomeLayout isRow={false}>
                <Time date={lastUpdatedTime} />
                <MapComponent
                    currentService={currentService}
                    creatingMarker={creatingMarker}
                    onUpdateCreatingMarker={handleUpdateCreatingMarker}
                    onUpdateService={handleUpdateService}
                />
                <HalfPanel />
            </HomeLayout>
        </>
    );
};

export default Home;
