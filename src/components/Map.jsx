import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonGroup from '@mui/material/ButtonGroup';

import { getCurrentPosition } from '../dist/service/geolocation.js';
import { markerImages } from '../dist/api/marker.js';

const Map = React.forwardRef(
    ({ userId, map, taxiMarker, stationMarker, shapeController }, ref) => {
        const createMarkerBtn = useRef();
        const clearMarkerBtn = useRef();
        const sendMarkerBtn = useRef();
        const [circles, setCircles] = useState([]);
        const [position, setPosition] = useState(null); //
        const [createMode, setCreateMode] = useState(false);
        const [isCurrent, setIsCurrent] = useState(true);

        useEffect(() => {
            stationMarker && stationMarker.setAllShuttlestops();
            taxiMarker && taxiMarker.setAll();
        }, [stationMarker, taxiMarker, shapeController]);

        useEffect(() => {
            createMarkerBtn.current &&
                createMarkerBtn.current.addEventListener(
                    'click',
                    createMarkerListener
                );

            clearMarkerBtn.current &&
                clearMarkerBtn.current.addEventListener(
                    'click',
                    clearMarkerListener
                );

            sendMarkerBtn.current &&
                sendMarkerBtn.current.addEventListener(
                    'click',
                    addMarkerListener
                );

            return () => {
                /**
                 * removeEventListeners를 설정하지 않으면 useEffect가 여러번 실행되면서 listener가 여러번 등록됨
                 */
                createMarkerBtn.current &&
                    createMarkerBtn.current.removeEventListener(
                        'click',
                        createMarkerListener
                    );

                clearMarkerBtn.current &&
                    clearMarkerBtn.current.removeEventListener(
                        'click',
                        clearMarkerListener
                    );

                sendMarkerBtn.current &&
                    sendMarkerBtn.current.removeEventListener(
                        'click',
                        addMarkerListener
                    );
            };
        }, [map, stationMarker, taxiMarker, shapeController]);

        const createMarkerListener = () => {
            console.log('created');

            if (createMode) {
                window.alert('이미 생성중인 마커가 존재합니다.');
                return;
            }
            setCreateMode(true);

            getCurrentPosition(({ lat, lng }) => {
                taxiMarker &&
                    taxiMarker.create(
                        { lat, lng },
                        markerImages['user']['ready']['isCurrent'],
                        true
                    );

                if (shapeController) {
                    const newCircles = [];
                    newCircles.push(
                        shapeController.drawCircle({ lat, lng }, 50, 'yellow')
                    );
                    newCircles.push(
                        shapeController.drawCircle({ lat, lng }, 20, 'blue')
                    );
                    setCircles(newCircles);
                }
                setPosition({ lat, lng });
            });
        };

        const clearMarkerListener = () => {
            const marker = taxiMarker.get();
            map.removeFromMap(marker);
            setCircles((circles) => {
                circles.forEach((circle) => map.removeFromMap(circle));
                return [];
            });
            taxiMarker.set(null);
            setCreateMode(false);
            setIsCurrent(true);
            setPosition(null);
        };

        const addMarkerListener = () => {
            taxiMarker.add(userId, isCurrent);
            clearMarkerListener();
        };

        return (
            <>
                <Button
                    ref={createMarkerBtn}
                    variant="contained"
                    style={{
                        display: `${createMode ? 'none' : ''}`,
                    }}
                >
                    <RoomIcon />
                </Button>
                <ButtonGroup
                    variant="contained"
                    style={{
                        display: `${!createMode ? 'none' : ''}`,
                    }}
                >
                    <Button ref={sendMarkerBtn} variant="contained">
                        <CheckIcon />
                    </Button>
                    <Button ref={clearMarkerBtn} variant="contained">
                        <ClearIcon />
                    </Button>
                </ButtonGroup>

                <div
                    style={{
                        width: '100vw',
                        height: '50vh',
                        borderRadius: '10px',
                        padding: '5px',
                    }}
                >
                    {/* <div
                    ref={mapContainer}
                    id="map"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                    }}
                ></div> */}
                    <div
                        ref={ref}
                        id="map"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                        }}
                    ></div>
                </div>
            </>
        );
    }
);

export default Map;
