/*global kakao*/
import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import axios from 'axios';

import { getCurrentPosition } from '../dist/service/geolocation.js';
import {
    createKakaoLatLngInstance,
    createKakaoMarkerImageInstance,
    createKakaoPolyInstance,
} from '../dist/utils/kakaomap.js';

const Map = React.forwardRef(
    (
        {
            userInfo,
            currentMode,
            currentCategory,
            mapService,
            taxiMarkerService,
            stationMarkerService,
            drawingService,
            taxiMarkers,
            stationMarkers,
            handleClickTaxiMarker,
            handleClickCluster,
            handleUpdateCluster,
            onUpdateCurrentMode,
            onUpdateCurrentCategory,
        },
        ref
    ) => {
        const createMarkerBtn = useRef();
        const clearMarkerBtn = useRef();
        const sendMarkerBtn = useRef();
        const enterUserModeBtn = useRef();
        const exitModeBtn = useRef();

        const [stationKakaoMarkers, setStationKakaoMarkers] = useState([]);
        const [sendIsClickable, setSendIsClickable] = useState(true);
        const [marker, setMarker] = useState(null);
        const [circles, setCircles] = useState([]);
        const [polyline, setPolyline] = useState(null);
        const [position, setPosition] = useState(null);

        const [isCurrent, setIsCurrent] = useState(true);
        const [drag, setDrag] = useState(false);

        useEffect(() => {
            const removeMapEventListener =
                mapService &&
                mapService.addEventListener('mousemove', handleDragMarker);

            return () => {
                removeMapEventListener && removeMapEventListener();
            };
        }, [mapService]);

        useEffect(() => {
            if (currentCategory !== 'TAXI' || !stationMarkerService) return;
            if (!stationMarkers) return;
            setStationKakaoMarkers((stationMarkers) => {
                if (stationMarkers.length === 0) return;
                stationMarkers.forEach((marker) =>
                    mapService.setMap(marker, false)
                );
                return [];
            });
            const newStationMarkers = stationMarkers.map((markerOptions) => {
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
                return stationMarkerService.createMarker(newMarkerOptions);
            });
            setStationKakaoMarkers(newStationMarkers);
        }, [stationMarkerService, stationMarkers, currentCategory]);

        useEffect(() => {
            if (currentCategory !== 'TAXI' || !taxiMarkerService) return;
            if (!taxiMarkers) return;
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
            const newCluster = taxiMarkerService.drawCluster(clusterOptions);

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

            handleUpdateCluster(newCluster);

            return () => {
                removeMarkerEventListeners &&
                    removeMarkerEventListeners.forEach((cb) => cb());
                removeMarkerEventListeners && removeClusterEventListener();
            };
        }, [taxiMarkerService, taxiMarkers, currentCategory]);

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

            enterUserModeBtn.current &&
                enterUserModeBtn.current.addEventListener(
                    'click',
                    handleClickUserMode
                );

            exitModeBtn.current &&
                exitModeBtn.current.addEventListener(
                    'click',
                    handleClickExitMode
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

                enterUserModeBtn.current &&
                    enterUserModeBtn.current.removeEventListener(
                        'click',
                        handleClickUserMode
                    );

                exitModeBtn.current &&
                    exitModeBtn.current.removeEventListener(
                        'click',
                        handleClickExitMode
                    );
            };
        }, [mapService]);

        useEffect(() => {
            if (!mapService) return;
            findDirection();
        }, [mapService]);

        const findDirection = async () => {
            try {
                const getConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const nodeResponse = await axios.get(
                    'http://localhost:8080/shuttle/schedule',
                    getConfig
                );
                console.log(nodeResponse);

                // get shuttle schedule
                /** 
                const shuttleSchedule = await axios.get(
                    `http://localhost:8080/schedule/shuttlebus`
                    // getConfig
                );
                console.log('------⬇️서버에서 호출한 api 응답⬇️------');
                console.log(shuttleSchedule);
                */

                const postData = {
                    origin: {
                        name: '운동장',
                        x: 129.07719215990883,
                        y: 35.26914021080837,
                    },
                    destination: {
                        name: '건학관',
                        x: 129.080358588741,
                        y: 35.26753755709011,
                    },
                    waypoints: [
                        {
                            name: '건학관',
                            x: 129.080358588741,
                            y: 35.26753755709011,
                        },
                        {
                            name: '외성생활관',
                            x: 129.08528905299215,
                            y: 35.269841186287096,
                        },
                        {
                            name: '범어사역 이디야',
                            x: 129.08512374355013,
                            y: 35.27528693680311,
                        },
                        {
                            name: '범어사역 어귀삼거리',
                            x: 129.09246745017668,
                            y: 35.275624177002896,
                        },
                        {
                            name: '범어사역',
                            x: 129.09251,
                            y: 35.272884,
                        },
                        {
                            name: '남산역',
                            x: 129.0922891953689,
                            y: 35.26527765324612,
                        },
                        {
                            name: '남산소방서',
                            x: 129.0871546707029,
                            y: 35.26107692825543,
                        },
                        {
                            name: '건학관',
                            x: 129.080358588741,
                            y: 35.26753755709011,
                        },
                    ],
                    radius: '10000',
                    priority: 'TIME',
                    car_type: 3,
                    car_fuel: 'DIESEL',
                };
                const postConfig = {
                    headers: {
                        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                };

                // 다중 경유지 길찾기
                const response = await axios.post(
                    'https://apis-navi.kakaomobility.com/v1/waypoints/directions',
                    postData,
                    postConfig
                );

                console.log('------⬇️프론트에서 직접 호출한 api 응답⬇️------');
                console.log(response);

                const route = response.data.routes[0];
                const stationNames = [
                    '건학관',
                    '외성생활관',
                    '범어사역',
                    '남산역',
                    '남산소방서',
                ];
                const summary = route.summary.waypoints.map((waypoint, idx) => {
                    let sectionDuration = 0;
                    route.sections[idx].guides.forEach(({ duration }) => {
                        sectionDuration += duration;
                    });
                    return {
                        ...waypoint,
                        duration: sectionDuration,
                    };
                });
                console.log(summary);

                summary.reduce((prev, curr) => {
                    const duration = prev + curr.duration;
                    if (stationNames.includes(curr.name)) {
                        console.log(
                            `${curr.name}에 ${Math.floor(
                                parseInt(duration) / 60
                            )}분 ${Math.floor(
                                parseInt(duration) % 60
                            )}초 후 도착합니다`
                        );
                    }
                    return duration;
                }, 0);

                const polyPath = [];
                response.data.routes[0].sections.forEach((section) => {
                    const { guides } = section;
                    guides.forEach((guide) => {
                        polyPath.push(
                            createKakaoLatLngInstance({
                                lat: guide.y,
                                lng: guide.x,
                            })
                        );
                    });
                });

                const newPolyline = createKakaoPolyInstance({
                    path: polyPath,
                    strokeWeight: 2,
                    strokeColor: '#FF00FF',
                    strokeOpacity: 0.8,
                    strokeStyle: 'dashed',
                });
                mapService.setMap(newPolyline, true);
            } catch (error) {
                console.error(error);
            }
        };

        const handleCreateMarker = () => {
            onUpdateCurrentMode('PROGRESS');

            getCurrentPosition(({ lat, lng }) => {
                setMarker((marker) => {
                    const newMarker =
                        taxiMarkerService &&
                        taxiMarkerService.create(
                            {
                                position: createKakaoLatLngInstance({
                                    lat,
                                    lng,
                                }),
                                draggable: true,
                                image: createKakaoMarkerImageInstance({
                                    type: 'user',
                                    state: 'ready',
                                    isCurrent: true,
                                }),
                            },
                            marker
                        );

                    if (!marker) {
                        mapService.addEventListener(
                            'dragstart',
                            handleDragStartMarker,
                            newMarker
                        );
                        mapService.addEventListener(
                            'dragend',
                            handleDragEndMarker,
                            newMarker
                        );
                    }

                    return newMarker;
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
                onUpdateCurrentMode('CREATE');
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
                mapService.setMap(polyline, false);
                return null;
            });
            setIsCurrent(true);
            setPosition(null);
            setSendIsClickable(true);
            onUpdateCurrentMode('DEFAULT');
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
                setIsCurrent((isCurrent) => {
                    taxiMarkerService.add(userInfo, marker, isCurrent);
                    return isCurrent;
                });
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
                length <= 20 ? setIsCurrent(true) : setIsCurrent(false);
                length <= 50
                    ? setSendIsClickable(true)
                    : setSendIsClickable(false);
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
                let newPath = [];
                if (!polyline) {
                    setPosition((position) => {
                        newPath.push(
                            createKakaoLatLngInstance({
                                lat: position.lat,
                                lng: position.lng,
                            })
                        );
                        return position;
                    });
                } else {
                    newPath = polyline.getPath();
                    if (newPath.length > 1) {
                        newPath.pop();
                    }
                }
                setMarker((marker) => {
                    newPath.push(marker.getPosition());
                    return marker;
                });
                const newPolyline =
                    mapService &&
                    mapService.drawPolyline({
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
                    return taxiMarkerService.create(
                        {
                            image: createKakaoMarkerImageInstance({
                                type: 'user',
                                state: 'ready',
                                isCurrent: true,
                            }),
                            draggable: true,
                        },
                        marker
                    );
                });
            } else if (length <= 50) {
                setMarker((marker) => {
                    return taxiMarkerService.create(
                        {
                            image: createKakaoMarkerImageInstance({
                                type: 'user',
                                state: 'ready',
                                isCurrent: false,
                            }),
                            draggable: true,
                        },
                        marker
                    );
                });
            } else {
                setMarker((marker) => {
                    return taxiMarkerService.create(
                        {
                            image: createKakaoMarkerImageInstance({
                                type: 'user',
                                state: 'blocked',
                            }),
                            draggable: true,
                        },
                        marker
                    );
                });
            }
        };

        const handleClickUserMode = () => {
            onUpdateCurrentMode('USER');
            handleUpdateCategory('USER');
        };

        const handleClickExitMode = () => {
            onUpdateCurrentMode('DEFAULT');
            handleUpdateCategory('TAXI'); // 'TAXI' -> old category
        };

        const handleUpdateCategory = (newCategory) => {
            onUpdateCurrentCategory(newCategory);
        };

        return (
            <>
                {/* <ButtonGroup
                    style={{
                        // 조건부 렌더링의 경우 이벤트 바인딩을 위해 컴포넌트로 분리해야 함
                        display: `${
                            currentMode === 'DEFAULT'
                                ? ''
                                : `${currentMode === 'PROGRESS' ? '' : 'none'}`
                        }`,
                    }}
                >
                    <Button ref={createMarkerBtn} variant="contained">
                        <RoomIcon />
                    </Button>
                    <Button ref={enterUserModeBtn} variant="contained">
                        <EditLocationIcon />
                    </Button>
                </ButtonGroup>
                <ButtonGroup
                    style={{
                        display: `${currentMode === 'CREATE' ? '' : 'none'}`,
                    }}
                >
                    <Button
                        ref={sendMarkerBtn}
                        variant={sendIsClickable ? 'contained' : 'outlined'}
                    >
                        <CheckIcon />
                    </Button>
                    <Button ref={clearMarkerBtn} variant="contained">
                        <ClearIcon />
                    </Button>
                </ButtonGroup>
                <ButtonGroup
                    style={{
                        display: `${currentMode === 'USER' ? '' : 'none'}`,
                    }}
                >
                    <Button
                        // ref={}
                        variant="contained"
                    >
                        <EditIcon />
                    </Button>
                    <Button
                        // ref={}
                        variant="contained"
                    >
                        <DeleteIcon />
                    </Button>
                    <Button ref={exitModeBtn} variant="contained">
                        <ClearIcon />
                    </Button>
                </ButtonGroup> */}
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <div
                        ref={ref}
                        id="map"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    ></div>
                </div>
            </>
        );
    }
);

export default Map;
