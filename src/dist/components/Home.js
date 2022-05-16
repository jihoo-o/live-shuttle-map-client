var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getShuttles, getShuttleStops, getUsers } from '../api/marker';
import { getCurrentPosition } from '../service/geolocation';
import BottomTab from './BottomTab';
import FloatTab from './FloatTab';
import HalfPanel from './HalfPanel';
import MapComponent from './MapComponent';
import ProgressIndicator from './ProgressIndicator';
const HomeLayout = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) => (props.isRow === true ? 'row' : 'column')};
`;
const Home = ({ stomp }) => {
    const [currentService, setCurrentService] = useState({
        currentCategory: null,
        currentMarkers: [],
        subMarkers: {
            stations: [],
        },
    });
    const [creatingMarker, setCreatingMarker] = useState(null);
    const [progressIndicator, setProgressIndicator] = useState(false);
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
                const newService = Object.assign(Object.assign({}, oldService), { subMarkers: Object.assign(Object.assign({}, oldService.subMarkers), { stations: shuttleStations }) });
                return newService;
            });
        })
            .catch((e) => console.log('셔틀 정류장을 불러오지 못했습니다.'));
    }, []);
    const handleUpdateService = (newCategory) => __awaiter(void 0, void 0, void 0, function* () {
        let newMarkers;
        switch (newCategory) {
            case 'SHUTTLE':
                newMarkers = yield getShuttles();
                break;
            case 'TAXI':
                newMarkers = yield getUsers();
                break;
            default:
                throw new Error('존재하지 않는 서비스입니다.');
        }
        setCurrentService((oldService) => {
            const newService = Object.assign(Object.assign({}, oldService), { currentCategory: newCategory, currentMarkers: newMarkers });
            return newService;
        });
    });
    const handleCreateCratingMarker = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newPosition = yield getCurrentPosition(() => {
                handleUpdateProgressIndicator(false);
            });
            setCreatingMarker((oldMarker) => {
                if (!oldMarker) {
                    const newMarker = {
                        startPosition: newPosition,
                        type: 'user',
                        state: 'ready',
                        userId: 'seonhwa123',
                        name: '선화',
                        lat: newPosition.lat,
                        lng: newPosition.lng,
                        isCurrent: true, //
                    };
                    return newMarker;
                }
                return null;
            });
        }
        catch (e) {
            console.log(e);
        }
    });
    const handleUpdateCreatingMarker = ({ lat, lng, isCurrent }) => __awaiter(void 0, void 0, void 0, function* () {
        setCreatingMarker((oldMarker) => {
            const newMarker = Object.assign(Object.assign({}, oldMarker), { type: 'user', state: 'ready', userId: 'seonhwa123', name: '선화', lat,
                lng,
                isCurrent });
            return newMarker;
        });
    });
    const handlePublishCreatingMarker = () => {
        setCreatingMarker((creatingMarker) => {
            const newMarker = Object.assign({}, creatingMarker);
            delete newMarker.startPosition;
            const userMarker = Object.assign({}, newMarker);
            stomp.client.publish('/marker/createuser', userMarker);
            return null;
        });
    };
    const handleClearCreatingMarker = () => {
        setCreatingMarker(null);
    };
    const handleUpdateProgressIndicator = (visible) => {
        setProgressIndicator(visible);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(HomeLayout, { isRow: false },
            React.createElement(MapComponent, { currentService: currentService, creatingMarker: creatingMarker, onUpdateCreatingMarker: handleUpdateCreatingMarker }),
            React.createElement(HalfPanel, null),
            React.createElement(BottomTab, { onUpdateService: handleUpdateService, onCreateCreatingMarker: handleCreateCratingMarker, onUpdateProgressIndicator: handleUpdateProgressIndicator })),
        React.createElement(FloatTab, { creatingMarker: creatingMarker, onPublishCreatingMarker: handlePublishCreatingMarker, onClearCreatingMarker: handleClearCreatingMarker }),
        progressIndicator && React.createElement(ProgressIndicator, null)));
};
export default Home;
//# sourceMappingURL=Home.js.map