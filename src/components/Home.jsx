import React, { useState, useEffect } from 'react';
import Map from './Map';
import Profile from './Profile';
import { getShuttleStops, getUsers } from '../dist/api/marker.js';
import { getProfile } from '../dist/api/users.js';
import { Socket } from '../dist/api/socket.js';
import MarkerList from './MarkerList';
import ProgerssIndicator from './ProgerssIndicator.jsx';
import { createKakaoLatLngInstance } from '../dist/utils/kakaomap';
import { useNavigate } from 'react-router-dom';

const Home = ({
    userInfo,
    map,
    taxiMarkerController,
    stationMarkerController,
    shapeController,
    authService,
    onLogout,
}) => {
    const ref = React.createRef();
    const [mapService, setMapService] = useState(null);
    const [taxiMarkerService, setTaxiMarker] = useState(null);
    const [stationMarkerService, setStationMarker] = useState(null);
    const [drawingService, setDrawingService] = useState(null);
    const [currentMode, setCurrentMode] = useState('DEFAULT');

    const [currentCategory, setCurrentCategory] = useState('TAXI');
    const [userMarkers, setUserMarkers] = useState({ TAXI: [], DELIVERY: [] });
    const [taxiMarkers, setTaxiMarkers] = useState([]);
    const [stationMarkers, setStationMarkers] = useState([]);
    const [clusterMarkers, setClusterMarkers] = useState([]);

    const [cluster, setCluster] = useState(null);
    const [markerHighlighter, setMarkerHighlighter] = useState(null);
    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        if (!userInfo) {
            navigate('login');
        }
    }, [userInfo]);

    useEffect(() => {
        const websocket = new Socket('http://localhost:8080/webSocket');
        const mapInstance = new map(ref.current);
        const taxiMarkerInstance = new taxiMarkerController(
            mapInstance,
            websocket
        );
        const stationMarkerInstance = new stationMarkerController(mapInstance);
        const drawingServiceInstance = new shapeController(mapInstance);

        // connect & subscribe
        taxiMarkerInstance.connect([
            {
                destination: '/topic/marker-create',
                callback: (response) => {
                    onCreateMarker(JSON.parse(response.body));
                },
            },
            {
                destination: '/topic/marker-delete',
                callback: (response) => {
                    console.log(response);
                    // onDeleteMarker();
                },
            },
            {
                destination: '/topic/marker-update',
                callback: (response) => {
                    console.log(response);
                    // onUpdateMarker();
                },
            },
        ]);

        const deactivate = taxiMarkerInstance.activate();

        setMapService(() => mapInstance);
        setTaxiMarker(() => taxiMarkerInstance);
        setStationMarker(() => stationMarkerInstance);
        setDrawingService(() => drawingServiceInstance);

        return () => {
            deactivate();
        };
    }, []);

    useEffect(async () => {
        const userTaxiMarkers = await getUsers();
        const newTaxiMarkers = userTaxiMarkers.map((marker) => {
            const { lat, lng, userId, name } = marker;
            const newMarker = {
                ...marker,
                title: `${userId} ${name}`,
                position: { lat, lng },
                draggable: false,
            };
            delete newMarker['lat'];
            delete newMarker['lng'];
            return newMarker;
        });
        setTaxiMarkers(newTaxiMarkers);
    }, []);

    useEffect(async () => {
        const shuttlestopMarkers = await getShuttleStops();
        const newStationMarkers = shuttlestopMarkers.map((marker) => {
            const { lat, lng } = marker;
            const newMarker = {
                ...marker,
                position: { lat, lng },
                draggable: false,
            };
            delete marker['lat'];
            delete marker['lng'];
            return newMarker;
        });
        setStationMarkers(newStationMarkers);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    const getProfileByUserId = async (marker) => {
        const [userId, name] = [...marker.getTitle().trim().split(' ')];
        const newProfile = await getProfile(userId);
        if (newProfile && newProfile.state === 'running') {
            window.alert('해당 사용자는 이미 다른 사용자와 대화중입니다.');
            return;
        }
        setProfile(newProfile);
    };

    const closeProfile = () => {
        setProfile(null);
    };

    const onClickCluster = (cluster) => {
        console.log(cluster.getMarkers());
        const includedMarkers = cluster.getMarkers().map((marker) => {
            const [userId, name] = [...marker.getTitle().trim().split(' ')];
            return {
                userId,
                name,
                image: marker.getImage().Yj,
                marker,
            };
        });
        setClusterMarkers(includedMarkers);
    };

    const onClickListItem = (marker) => {
        const position = marker.getPosition();
        setMapService((mapService) => {
            mapService.setLevel(2);
            mapService.setLevel(1, position);
            setMarkerHighlighter((customOverlay) => {
                if (customOverlay) {
                    customOverlay.setMap(null);
                }
                const newCustomOverlay = mapService.drawCustomOverlay({
                    customOverlay,
                    position,
                    content: `<div style='width:10px; height:10px; background-color:#e06666; border-radius:50%; z-index:10;'></div>`,
                });
                mapService.setMap(newCustomOverlay, true);
                return newCustomOverlay;
            });
            return mapService;
        });
        taxiMarkerService.drawCluster({ markers: [marker] }, cluster);
    };

    const onUpdateCluster = (newCluster) => {
        setCluster((cluster) => {
            cluster && cluster.clear();
            newCluster && mapService.setMap(newCluster, true);
            return newCluster;
        });
    };

    const onCreateMarker = (marker) => {
        const { lat, lng, userId, name } = marker;
        const newMarker = {
            ...marker,
            title: `${userId} ${name}`,
            position: { lat, lng },
            draggable: false,
        };
        delete newMarker['lat'];
        delete newMarker['lng'];
        setTaxiMarkers((markers) => [...markers, newMarker]);
        if (userId === userInfo.userId) {
            setUserMarkers((markers) => {
                const newMarkers = { ...markers };
                newMarkers[currentCategory] = [
                    ...newMarkers[currentCategory],
                    newMarker,
                ];
                return newMarkers;
            });
        }
    };

    const onDeleteMarker = (markerId) => {
        // setMarkers((markers) =>
        //     markers.filter((marker) => marker.id !== markerId)
        // );
    };

    const onUpdateMarker = () => {};

    const onClickMarker = (marker) => {
        let newCurrentMode;
        setCurrentMode((currentMode) => {
            newCurrentMode = currentMode;
            return currentMode;
        });
        switch (newCurrentMode) {
            case 'DEFAULT':
                getProfileByUserId(marker);
                break;
            case 'USER':
                // 선택된 마커를 state로 보관하고
                // edit 혹은 delete 버튼 액션에 따라 처리함
                break;
            default:
                throw new Error('유효하지 않은 currentMode입니다.');
        }
    };

    const onUpdateCurrentMode = (newMode) => {
        console.log(`mode: ${newMode}`);
        setCurrentMode(newMode);
    };

    const onUpdateCurrentCategory = (newCategory) => {
        console.log(`category: ${newCategory}`);

        setCluster((cluster) => {
            cluster && cluster.clear();
            return cluster;
        });
        setMarkerHighlighter((customOverlay) => {
            customOverlay && customOverlay.setMap(false);
            return customOverlay;
        });
        setCurrentCategory(newCategory);
    };

    const handleResizeWindow = () => {
        setMapService((mapService) => {
            mapService.setCenter(
                createKakaoLatLngInstance({
                    lat: 35.267342474237104,
                    lng: 129.08901354232913,
                })
            );
            return mapService;
        });
    };

    return (
        <div
            style={{
                height: '100vh',
                width: '100%',
            }}
        >
            <section
                style={{
                    position: 'sticky',
                    height: '60vh',
                    width: '100%',
                    zIndex: '10',
                    top: '0px',
                    left: '0px',
                }}
            >
                <Map
                    userInfo={userInfo}
                    ref={ref}
                    currentMode={currentMode}
                    currentCategory={currentCategory}
                    mapService={mapService}
                    taxiMarkerService={taxiMarkerService}
                    stationMarkerService={stationMarkerService}
                    drawingService={drawingService}
                    taxiMarkers={taxiMarkers}
                    stationMarkers={stationMarkers}
                    handleClickTaxiMarker={onClickMarker}
                    handleClickCluster={onClickCluster}
                    handleUpdateCluster={onUpdateCluster}
                    onUpdateCurrentMode={onUpdateCurrentMode}
                    onUpdateCurrentCategory={onUpdateCurrentCategory}
                />
                {profile && (
                    <Profile userInfo={profile} closeProfile={closeProfile} />
                )}
            </section>
            {currentMode === 'DEFAULT' && (
                <section style={{ height: '40vh', width: '100%' }}>
                    {clusterMarkers.length !== 0 && (
                        <MarkerList
                            markers={clusterMarkers}
                            handleListItemClick={onClickListItem}
                        />
                    )}
                </section>
            )}
            {currentMode === 'PROGRESS' && <ProgerssIndicator />}
            <button
                style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    zIndex: '999',
                }}
                onClick={() => {
                    authService.logout(onLogout);
                }}
            >
                logout
            </button>
        </div>
    );
};

export default Home;
