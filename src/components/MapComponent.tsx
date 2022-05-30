import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import useInterval from '../hooks/useInterval';
import { createKakaoLatLngInstance, getMarkerImage } from '../utils/kakaomap';
import CreatingMarker from './CreatingMarker';

const StyledMap = styled.div`
    height: 100%;
    width: 100%;
    transition: all 1s;
`;

const MapComponent = ({
    currentService,
    creatingMarker,
    onUpdateCreatingMarker,
    onUpdateService,
}) => {
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setMap((map) => {
            map &&
                map.setCenter(
                    createKakaoLatLngInstance({
                        lat: 35.267342474237104,
                        lng: 129.08901354232913,
                    })
                );
            return map;
        });
    }, [map]);

    useInterval({
        callback: () => {
            onUpdateService('SHUTTLE');
        },
        delay: currentService.currentCategory === 'SHUTTLE' ? 3000 : null,
    });

    return (
        <StyledMap>
            <Map
                center={{
                    lat: 35.267342474237104,
                    lng: 129.08901354232913,
                }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                level={5}
                onCreate={(map: kakao.maps.Map) => {
                    setMap(map);
                }}
                onClick={(
                    map: kakao.maps.Map,
                    mouseEvent: kakao.maps.event.MouseEvent
                ) => {
                    const latlng = mouseEvent.latLng;
                    console.log(
                        `lat: ${latlng?.getLat()}, lng: ${latlng?.getLng()}`
                    );
                }}
            >
                {currentService.currentMarkers.length !== 0 &&
                    currentService.currentMarkers.map(
                        ({
                            lat,
                            lng,
                            userId,
                            name,
                            type,
                            state,
                            isCurrent,
                        }) => {
                            const { url, size } = getMarkerImage({
                                type,
                                state: state != null ? state : null,
                                isCurrent: isCurrent != null ? isCurrent : null,
                            });
                            return (
                                <MapMarker
                                    key={
                                        lat -
                                        lng +
                                        (window.crypto &&
                                            window.crypto.randomUUID())
                                    }
                                    position={{ lat, lng }}
                                    title={`${userId} ${name}`}
                                    image={{
                                        src: url,
                                        size,
                                    }}
                                />
                            );
                        }
                    )}
                {currentService.subMarkers &&
                    Object.keys(currentService.subMarkers).map((sub) => {
                        const subMarkers = currentService.subMarkers[sub];
                        // stationId => id
                        return (
                            subMarkers.length !== 0 &&
                            subMarkers.map(
                                ({
                                    lat,
                                    lng,
                                    name,
                                    stationId,
                                    type,
                                    state,
                                    isCurrent,
                                }) => {
                                    const { url, size } = getMarkerImage({
                                        type,
                                        state: state != null ? state : null,
                                        isCurrent:
                                            isCurrent != null
                                                ? isCurrent
                                                : null,
                                    });
                                    return (
                                        <MapMarker
                                            key={lat - lng}
                                            position={{ lat, lng }}
                                            title={`${stationId} ${name}`}
                                            image={{
                                                src: url,
                                                size,
                                            }}
                                        />
                                    );
                                }
                            )
                        );
                    })}
                <CreatingMarker
                    creatingMarker={creatingMarker}
                    onUpdateCreatingMarker={onUpdateCreatingMarker}
                />
            </Map>
        </StyledMap>
    );
};

export default MapComponent;
