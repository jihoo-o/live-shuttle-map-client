/*global kakao*/
import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonGroup from '@mui/material/ButtonGroup';

import { getCurrentPosition } from '../dist/service/geolocation.js';
import { markerImages } from '../dist/api/marker.js';
import {
    createKakaoLatLngInstance,
    getMarkerImageSrc,
} from '../dist/utils/kakaomap.js';

const Map = React.forwardRef(
    (
        {
            userInfo,
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
        const [sendIsClickable, setSendIsClickable] = useState(true);
        const [marker, setMarker] = useState(null);
        const [circles, setCircles] = useState([]);
        const [polyline, setPolyline] = useState(null);
        const [position, setPosition] = useState(null); //
        const [createMode, setCreateMode] = useState(false);
        const [isCurrent, setIsCurrent] = useState(true);
        const [drag, setDrag] = useState(false);

        useEffect(() => {
            map && map.setMapEventListener('mousemove', dragMarker);
        }, [map]);

        useEffect(() => {
            stationMarker &&
                stationMarkers.forEach((markerOptions) => {
                    const newMarkerOptions = {
                        ...markerOptions,
                        position: createKakaoLatLngInstance(
                            markerOptions.position
                        ),
                    };
                    stationMarker.setMap(newMarkerOptions);
                });
        }, [stationMarker, stationMarkers]);

        useEffect(() => {
            if (taxiMarker) {
                taxiMarkers.forEach((markerOptions) => {
                    const newMarkerOptions = {
                        ...markerOptions,
                        position: createKakaoLatLngInstance(
                            markerOptions.position
                        ),
                    };
                    taxiMarker.setCluster(newMarkerOptions);
                });

                taxiMarker.setEventListener([
                    { event: 'dragstart', listener: clickMarker },
                    { event: 'dragend', listener: dragEndMarker },
                ]);
            }
        }, [taxiMarker, taxiMarkers]);

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
        }, []);

        const createMarker = () => {
            console.log('created');
            if (createMode) {
                window.alert('이미 생성중인 마커가 존재합니다.');
                return;
            }
            setCreateMode(true); //

            getCurrentPosition(({ lat, lng }) => {
                setMarker((marker) => {
                    const { type, state, isCurrent } = marker;
                    return (
                        taxiMarker &&
                        taxiMarker.create(
                            {
                                // position: { lat, lng },
                                position: createKakaoLatLngInstance({
                                    lat,
                                    lng,
                                }),
                                isDraggable: true,
                                image: getMarkerImageSrc({
                                    type,
                                    state,
                                    isCurrent,
                                }),
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
                drawPolyline();
            });
        };

        const clearMarker = () => {
            setMarker((marker) => {
                map.setMap(marker, false);
                return marker;
            });
            setCircles((circles) => {
                circles.forEach((circle) => map.setMap(circle, false));
                return [];
            });
            setPolyline((polyline) => {
                map.removeFromMap(polyline);
                return null;
            });
            setCreateMode(false);
            setIsCurrent(true);
            setPosition(null);
            setSendIsClickable(true);
        };

        const addMarker = () => {
            let exit = false;
            setSendIsClickable((isClickable) => {
                if (!isClickable) {
                    exit = true;
                    window.alert(
                        '마커는 색상으로 표시된 원 안에만 생성할 수 있습니다'
                    );
                }
                return isClickable;
            });
            if (exit) return;
            setMarker((marker) => {
                taxiMarker.add(userInfo, marker, isCurrent);
                return marker;
            });
            clearMarker();
        };

        const clickMarker = () => {
            setDrag((dragState) => {
                return dragState ? false : true;
            });
        };

        const dragEndMarker = () => {
            clickMarker();
            setPolyline((polyline) => {
                const length = polyline.getLength();
                if (length <= 50) {
                    setSendIsClickable(true);
                } else {
                    setSendIsClickable(false);
                }
                return polyline;
            });
        };

        const dragMarker = () => {
            let dragflag = false;
            setDrag((drag) => {
                dragflag = drag;
                return drag;
            });
            if (!dragflag) return;
            drawPolyline();
        };

        const drawPolyline = () => {
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
                    if (path.length > 1) {
                        path.pop();
                    }
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
                const newPolyline = map.drawPolyline({
                    polyline,
                    path: newPath,
                });
                constrainMarker(newPolyline.getLength());
                return newPolyline;
            });
        };

        const constrainMarker = (length) => {
            if (length <= 20) {
                setMarker((marker) => {
                    const { type, state, isCurrent } = marker;
                    return taxiMarker.create(
                        {
                            image: getMarkerImageSrc({
                                type,
                                state,
                                isCurrent,
                            }),
                            isDraggable: true,
                        },
                        marker
                    );
                });
            } else if (length <= 50) {
                setMarker((marker) => {
                    const { type, state, isCurrent } = marker;
                    return taxiMarker.create(
                        {
                            image: getMarkerImageSrc({
                                type,
                                state,
                                isCurrent,
                            }),
                            isDraggable: true,
                        },
                        marker
                    );
                });
            } else {
                setMarker((marker) => {
                    const { type, state, isCurrent } = marker;
                    return taxiMarker.create(
                        {
                            image: getMarkerImageSrc({
                                type,
                                state,
                                isCurrent,
                            }),
                            isDraggable: true,
                        },
                        marker
                    );
                });
            }
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
                    // variant="contained"
                    style={{
                        display: `${!createMode ? 'none' : ''}`,
                    }}
                >
                    <Button
                        ref={sendMarkerBtn}
                        variant={sendIsClickable ? 'contained' : 'outlined'}
                        style={
                            {
                                // backgroundColor: `${sendIsClickable ? '' : 'gray'}`,
                            }
                        }
                    >
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
