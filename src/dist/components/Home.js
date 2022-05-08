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
import { getShuttleStops, getUsers } from '../api/marker';
import BottomTab from './BottomTab';
import FloatTab from './FloatTab';
import HalfPanel from './HalfPanel';
import MapComponent from './MapComponent';
const HomeLayout = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) => (props.isRow === true ? 'row' : 'column')};
`;
const Home = (props) => {
    const [currentService, setCurrentService] = useState({
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
    return (React.createElement(React.Fragment, null,
        React.createElement(HomeLayout, { isRow: false },
            React.createElement(MapComponent, { currentService: currentService }),
            React.createElement(HalfPanel, null),
            React.createElement(BottomTab, { onUpdateService: handleUpdateService })),
        React.createElement(FloatTab, null)));
};
export default Home;
//# sourceMappingURL=Home.js.map