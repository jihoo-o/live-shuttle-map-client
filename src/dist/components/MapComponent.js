import React from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { getMarkerImage } from '../utils/kakaomap';
import CreatingMarker from './CreatingMarker';
const StyledMap = styled.div `
    height: 100%;
    width: 100%;
    transition: all 1s;
`;
const MapComponent = ({ currentService, creatingMarker, onUpdateCreatingMarker, }) => {
    return (React.createElement(StyledMap, null,
        React.createElement(Map, { center: {
                lat: 35.267342474237104,
                lng: 129.08901354232913,
            }, style: {
                width: '100%',
                height: '100%',
            }, level: 5, onClick: (map, mouseEvent) => {
                const latlng = mouseEvent.latLng;
                console.log(`lat: ${latlng === null || latlng === void 0 ? void 0 : latlng.getLat()}, lng: ${latlng === null || latlng === void 0 ? void 0 : latlng.getLng()}`);
            } },
            currentService.currentMarkers.length !== 0 && (React.createElement(MarkerClusterer, { averageCenter: true, minLevel: 2 }, currentService.currentMarkers.map(({ lat, lng, userId, name, type, state, isCurrent, }) => {
                const { url, size } = getMarkerImage({
                    type,
                    state: state != null ? state : null,
                    isCurrent: isCurrent != null ? isCurrent : null,
                });
                return (React.createElement(MapMarker, { key: lat - lng + Math.random(), position: { lat, lng }, title: `${userId} ${name}`, image: {
                        src: url,
                        size,
                    } }));
            }))),
            currentService.subMarkers &&
                Object.keys(currentService.subMarkers).map((sub) => {
                    const subMarkers = currentService.subMarkers[sub];
                    // stationId => id
                    return (subMarkers.length !== 0 &&
                        subMarkers.map(({ lat, lng, name, stationId, type, state, isCurrent, }) => {
                            const { url, size } = getMarkerImage({
                                type,
                                state: state != null ? state : null,
                                isCurrent: isCurrent != null
                                    ? isCurrent
                                    : null,
                            });
                            return (React.createElement(MapMarker, { key: lat - lng, position: { lat, lng }, title: `${stationId} ${name}`, image: {
                                    src: url,
                                    size,
                                } }));
                        }));
                }),
            React.createElement(CreatingMarker, { creatingMarker: creatingMarker, onUpdateCreatingMarker: onUpdateCreatingMarker }))));
};
export default MapComponent;
//# sourceMappingURL=MapComponent.js.map