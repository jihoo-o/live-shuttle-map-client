import React from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { getMarkerImage } from '../utils/kakaomap';
const StyledMap = styled.div `
    height: 100%;
    width: 100%;
    background-color: red;
    transition: all 1s;
`;
const MapComponent = ({ currentService }) => {
    console.log(currentService);
    return (React.createElement(StyledMap, null,
        React.createElement(Map, { center: {
                lat: 35.267342474237104,
                lng: 129.08901354232913,
            }, style: {
                width: '100%',
                height: '100%',
            }, level: 5 },
            currentService.currentMarkers.length !== 0 && (React.createElement(MarkerClusterer, { averageCenter: true, minLevel: 2 }, currentService.currentMarkers.map(({ lat, lng, userId, name, type, state, isCurrent, }) => (React.createElement(MapMarker, { key: lat - lng, position: { lat, lng }, title: `${userId} ${name}`, image: {
                    src: getMarkerImage({
                        type,
                        state: state ? state : null,
                        isCurrent: isCurrent !== null
                            ? isCurrent
                            : null,
                    }),
                    size: {
                        width: 50,
                        height: 50,
                    },
                } }))))),
            currentService.subMarkers &&
                Object.keys(currentService.subMarkers).map((sub) => {
                    const subMarkers = currentService.subMarkers[sub];
                    // stationId => id
                    return (subMarkers.length !== 0 &&
                        subMarkers.map(({ lat, lng, name, stationId, type, state, isCurrent, }) => (React.createElement(MapMarker, { key: lat - lng, position: { lat, lng }, title: `${stationId} ${name}`, image: {
                                src: getMarkerImage({
                                    type,
                                    state: state ? state : null,
                                    isCurrent: isCurrent !== null
                                        ? isCurrent
                                        : null,
                                }),
                                size: {
                                    width: 50,
                                    height: 50,
                                },
                            } }))));
                }))));
};
export default MapComponent;
//# sourceMappingURL=MapComponent.js.map