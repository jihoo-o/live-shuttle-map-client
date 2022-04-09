/*global kakao*/
import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonGroup from '@mui/material/ButtonGroup';

import { getCurrentPosition } from '../dist/service/geolocation.js';
import {
    createKakaoLatLngInstance,
    createKakaoMarkerImageInstance,
} from '../dist/utils/kakaomap.js';

const Map = React.forwardRef(
    (
        {
            userInfo,
            mapService,
            taxiMarkerService,
            stationMarkerService,
            drawingService,
            taxiMarkers,
            stationMarkers,
            handleClickTaxiMarker,
            handleClickCluster,
            createCluster,
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
            mapService &&
                mapService.addEventListener('mousemove', handleDragMarker);
        }, [mapService]);

        useEffect(() => {
            stationMarkerService &&
                stationMarkers.forEach((markerOptions) => {
                    const { position, type, state, isCurrent } = markerOptions;
                    const newMarkerOptions = {
                        ...markerOptions,
                        position: createKakaoLatLngInstance(position),
                        image: createKakaoMarkerImageInstance({
                            type,
                            state,
                            isCurrent,
                        }),
                    };
                    stationMarkerService.createMarker(newMarkerOptions);
                });
        }, [stationMarkerService, stationMarkers]);

        useEffect(() => {
            if (!taxiMarkerService || !taxiMarkers) return;

            const newClusterMarkers = taxiMarkers.map((markerOptions) => {
                const { position, type, state, isCurrent } = markerOptions;
                const newMarkerOptions = {
                    ...markerOptions,
                    position: createKakaoLatLngInstance(position),
                    image: createKakaoMarkerImageInstance({
                        type,
                        state,
                        isCurrent,
                    }),
                };
                return taxiMarkerService.createMarker(newMarkerOptions);
            });
            if (!newClusterMarkers) return;

            const clusterOptions = {
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
                minLevel: 2, // 클러스터 할 최소 지도 레벨
                disableClickZoom: true,
                markers: newClusterMarkers,
            };
            const newCluster = taxiMarkerService.createCluster(clusterOptions);

            const removeMarkerEventListeners = newClusterMarkers.map((marker) =>
                mapService.addEventListener(
                    'click',
                    () => handleClickTaxiMarker(marker),
                    marker
                )
            );
            const removeClusterEventListener = mapService.addEventListener(
                'clusterclick',
                handleClickCluster,
                newCluster
            );

            createCluster(newCluster);

            // ❌
            // taxiMarkerService.setEventListener([
            //     { event: 'dragstart', listener: handleDragStartMarker },
            //     { event: 'dragend', listener: handleDragEndMarker },
            // ]);

            return () => {
                removeMarkerEventListeners.forEach((cb) => cb());
                removeClusterEventListener();
            };
        }, [taxiMarkerService, taxiMarkers]);

        useEffect(() => {
            createMarkerBtn.current &&
                createMarkerBtn.current.addEventListener(
                    'click',
                    handleCreateMarker
                );

            clearMarkerBtn.current &&
                clearMarkerBtn.current.addEventListener(
                    'click',
                    handleClearMarker
                );

            sendMarkerBtn.current &&
                sendMarkerBtn.current.addEventListener(
                    'click',
                    handleAddMarker
                );
            return () => {
                /**
                 * removeEventListeners를 설정하지 않으면 useEffect가 여러번 실행되면서 listener가 여러번 등록됩니다
                 */
                createMarkerBtn.current &&
                    createMarkerBtn.current.removeEventListener(
                        'click',
                        handleCreateMarker
                    );

                clearMarkerBtn.current &&
                    clearMarkerBtn.current.removeEventListener(
                        'click',
                        handleClearMarker
                    );

                sendMarkerBtn.current &&
                    sendMarkerBtn.current.removeEventListener(
                        'click',
                        handleAddMarker
                    );
            };
        }, []);

        const handleCreateMarker = () => {
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
                        taxiMarkerService &&
                        taxiMarkerService.create(
                            {
                                position: createKakaoLatLngInstance({
                                    lat,
                                    lng,
                                }),
                                isDraggable: true,
                                image: createKakaoMarkerImageInstance({
                                    type,
                                    state,
                                    isCurrent,
                                }),
                            },
                            marker
                        )
                    );
                });

                if (drawingService) {
                    const newCircles = [];
                    newCircles.push(
                        drawingService.drawCircle({ lat, lng }, 50, 'yellow')
                    );
                    newCircles.push(
                        drawingService.drawCircle({ lat, lng }, 20, 'green')
                    );
                    setCircles(newCircles);
                }
                setPosition({ lat, lng });
                handleDrawPolyline();
            });
        };

        const handleClearMarker = () => {
            setMarker((marker) => {
                mapService.setMap(marker, false);
                return marker;
            });
            setCircles((circles) => {
                circles.forEach((circle) => mapService.setMap(circle, false));
                return [];
            });
            setPolyline((polyline) => {
                mapService.removeFromMap(polyline);
                return null;
            });
            setCreateMode(false);
            setIsCurrent(true);
            setPosition(null);
            setSendIsClickable(true);
        };

        const handleAddMarker = () => {
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
                taxiMarkerService.add(userInfo, marker, isCurrent);
                return marker;
            });
            handleClearMarker();
        };

        const handleDragStartMarker = () => {
            setDrag((dragState) => {
                return dragState ? false : true;
            });
        };

        const handleDragEndMarker = () => {
            handleDragStartMarker();
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

        const handleDragMarker = () => {
            let dragflag = false;
            setDrag((drag) => {
                dragflag = drag;
                return drag;
            });
            if (!dragflag) return;
            handleDrawPolyline();
        };

        const handleDrawPolyline = () => {
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
                    const position = taxiMarkerService.getPosition(marker);
                    newPath = [
                        ...path,
                        new kakao.maps.LatLng(position.lat, position.lng),
                    ];
                    return marker;
                });
                const newPolyline = mapService.handleDrawPolyline({
                    polyline,
                    path: newPath,
                });
                handleConstrainMarker(newPolyline.getLength());
                return newPolyline;
            });
        };

        const handleConstrainMarker = (length) => {
            if (length <= 20) {
                setMarker((marker) => {
                    const { type, state, isCurrent } = marker;
                    return taxiMarkerService.create(
                        {
                            image: createKakaoMarkerImageInstance({
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
                    return taxiMarkerService.create(
                        {
                            image: createKakaoMarkerImageInstance({
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
                    return taxiMarkerService.create(
                        {
                            image: createKakaoMarkerImageInstance({
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
