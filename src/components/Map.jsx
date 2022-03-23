import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonGroup from '@mui/material/ButtonGroup';

import { getCurrentPosition } from '../dist/service/geolocation.js';

const Map = React.forwardRef(
    ({ userId, map, taxiMarker, stationMarker, shapeController }, ref) => {
        const createMarkerBtn = useRef();
        const clearMarkerBtn = useRef();
        const sendMarkerBtn = useRef();
        const [marker, setMarker] = useState(null);
        const [circles, setCircles] = useState([]);
        const [position, setPosition] = useState(null);

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
                 * Set removeEventListeners or the listeners would be run twice
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
        }, [map, marker, stationMarker, taxiMarker, shapeController]);

        // create marker
        const createMarkerListener = () => {
            console.log('created');
            if (marker) {
                window.alert('이미 생성중인 마커가 존재합니다.');
                return;
            }

            getCurrentPosition(({ lat, lng }) => {
                taxiMarker &&
                    setMarker((marker) => {
                        if (marker) return;
                        return taxiMarker.create({ lat, lng });
                    });

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

        // remove marker
        const clearMarkerListener = () => {
            setMarker((marker) => {
                map.removeFromMap(marker);
                return null;
            });
            setCircles((circles) => {
                circles.forEach((circle) => map.removeFromMap(circle));
                return [];
            });
        };

        // add marker
        const addMarkerListener = () => {
            clearMarkerListener();

            // get position of the Marker
            setPosition((position) => {
                taxiMarker.add(userId, position);
                return null;
            });
        };

        return (
            <>
                {!marker && (
                    <Button
                        ref={createMarkerBtn}
                        variant="contained"
                        // style={{ display: 'none' }}
                    >
                        <RoomIcon />
                    </Button>
                )}

                <ButtonGroup
                    variant="contained"
                    style={{ display: `${!marker ? 'none' : 'inline-block'}` }}
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
