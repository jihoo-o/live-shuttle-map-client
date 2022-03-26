import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonGroup from '@mui/material/ButtonGroup';

import { getCurrentPosition } from '../dist/service/geolocation.js';
import { markerImages } from '../dist/api/marker.js';

const Map = React.forwardRef(
    (
        {
            userId,
            map,
            taxiMarker,
            stationMarker,
            shapeController,
            taxiMarkers,
            stationMarkers,
        },
        ref
    ) => {
        const createMarkerBtn = useRef();
        const clearMarkerBtn = useRef();
        const sendMarkerBtn = useRef();
        const [marker, setMarker] = useState(null);
        const [circles, setCircles] = useState([]);
        const [polyline, setPolyline] = useState(null);
        const [position, setPosition] = useState(null); //
        const [createMode, setCreateMode] = useState(false);
        const [isCurrent, setIsCurrent] = useState(true);
        const [drag, setDrag] = useState(false);

        useEffect(() => {
            map && map.setEventListener('mousemove', dragMarker);
            stationMarker &&
                stationMarkers.forEach((marker) =>
                    stationMarker.setOne(marker)
                );
            if (taxiMarker) {
                taxiMarkers.forEach((marker) => taxiMarker.setOne(marker));
                taxiMarker.setEventListener([
                    { event: 'dragstart', listener: clickMarker },
                    { event: 'dragend', listener: clickMarker },
                ]);
            }
        }, [map, taxiMarker, taxiMarkers, stationMarker, stationMarkers]);

        useEffect(() => {
            createMarkerBtn.current &&
                createMarkerBtn.current.addEventListener('click', createMarker);

            clearMarkerBtn.current &&
                clearMarkerBtn.current.addEventListener('click', clearMarker);

            sendMarkerBtn.current &&
                sendMarkerBtn.current.addEventListener('click', addMarker);
            return () => {
                /**
                 * removeEventListeners를 설정하지 않으면 useEffect가 여러번 실행되면서 listener가 여러번 등록됩니다
                 */
                createMarkerBtn.current &&
                    createMarkerBtn.current.removeEventListener(
                        'click',
                        createMarker
                    );

                clearMarkerBtn.current &&
                    clearMarkerBtn.current.removeEventListener(
                        'click',
                        clearMarker
                    );

                sendMarkerBtn.current &&
                    sendMarkerBtn.current.removeEventListener(
                        'click',
                        addMarker
                    );
            };
        }, [map, stationMarker, taxiMarker, shapeController]);

        const createMarker = () => {
            console.log('created');

            if (createMode) {
                window.alert('이미 생성중인 마커가 존재합니다.');
                return;
            }
            setCreateMode(true); //

            getCurrentPosition(({ lat, lng }) => {
                setMarker((marker) => {
                    return (
                        taxiMarker &&
                        taxiMarker.create(
                            {
                                position: { lat, lng },
                                imageUrl:
                                    markerImages['user']['ready']['isCurrent'],
                                isDraggable: true,
                            },
                            marker
                        )
                    );
                });

                if (shapeController) {
                    const newCircles = [];
                    newCircles.push(
                        shapeController.drawCircle({ lat, lng }, 50, 'yellow')
                    );
                    newCircles.push(
                        shapeController.drawCircle({ lat, lng }, 20, 'green')
                    );
                    setCircles(newCircles);
                }
                setPosition({ lat, lng });
            });
        };

        const clearMarker = () => {
            setMarker((marker) => {
                return taxiMarker.create(
                    {
                        map: null,
                    },
                    marker
                );
            });
            setCircles((circles) => {
                circles.forEach((circle) => map.removeFromMap(circle));
                return [];
            });
            setCreateMode(false);
            setIsCurrent(true);
            setPosition(null);
            setPolyline(null);
        };

        const addMarker = () => {
            setMarker((marker) => {
                taxiMarker.add(userId, marker, isCurrent);
                return marker;
            });
            clearMarker();
        };

        const clickMarker = () => {
            setDrag((dragState) => {
                return dragState ? false : true;
            });
        };

        const dragMarker = () => {
            let dragflag = false;
            setDrag((drag) => {
                dragflag = drag;
                return drag;
            });
            if (!dragflag) return;
            setPolyline((polyline) => {
                let path;
                if (!polyline) {
                    path = [];
                    setPosition((position) => {
                        path.push(
                            new kakao.maps.LatLng(position.lat, position.lng)
                        );
                        return position;
                    });
                } else {
                    path = polyline.getPath();
                    path.pop();
                }
                let newPath = [];
                setMarker((marker) => {
                    const position = taxiMarker.getPosition(marker);
                    newPath = [
                        ...path,
                        new kakao.maps.LatLng(position.lat, position.lng),
                    ];
                    return marker;
                });
                return map.drawPolyline({
                    polyline,
                    path: newPath,
                });
            });
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
