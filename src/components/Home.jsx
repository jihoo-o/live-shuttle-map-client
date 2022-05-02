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
import Header from './Header';
import Panel from './Panel';

const Home = ({
    userInfo,
    map,
    taxiMarkerController,
    stationMarkerController,
    shapeController,
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
    const [selectedMarkers, setSelectedMarkers] = useState({
        type: null,
        markers: [],
    });

    const [cluster, setCluster] = useState(null);
    const [markerHighlighter, setMarkerHighlighter] = useState(null);
    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        // if (!userInfo) {
        //     navigate('login');
        // }
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
                // destination: '/topic/marker-create',
                destination: '/topic/markers/users',
                callback: (response) => {
                    // onCreateMarker(JSON.parse(response.body));
                    console.log(response);
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
            const { lat, lng, name } = marker;
            const newMarker = {
                ...marker,
                title: `${name.ko}`,
                position: { lat, lng },
                draggable: false,
            };
            delete marker['lat'];
            delete marker['lng'];
            return newMarker;
        });
        setStationMarkers(newStationMarkers);
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

    /**
     *
     * @param targetType 'cluster' | 'marker'
     * @param type 'taxi' | 'shuttle'
     * @param target cluster | marker
     */
    const handleClickListTarget = ({ targetType, type, target }) => {
        let includedMarkers = [];
        let position;
        switch (targetType) {
            case 'cluster':
                position = target.getCenter();
                // includedMarkers = target.getMarkers()
                includedMarkers = [
                    ...target.getMarkers().map((marker) => {
                        const [userId, name] = [
                            ...marker.getTitle().trim().split(' '),
                        ];
                        return {
                            userId,
                            name,
                            image: marker.getImage().Yj,
                            marker,
                        };
                    }),
                ];
                break;
            case 'marker':
                position = target.getPosition();
                includedMarkers = [target];
                break;
        }
        setSelectedMarkers({ type, markers: [...includedMarkers] });
        setMapService((mapService) => {
            mapService.relayout();
            mapService.setCenter(position);
            return mapService;
        });
    };

    const onClickListItem = (marker) => {
        const position = marker.getPosition();
        setMapService((mapService) => {
            mapService.relayout();
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

    const handleClickMarker = (marker) => {
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

    const getContents = ({ type, markers }) => {
        switch (type) {
            case 'taxi':
                return (
                    markers.length !== 0 && (
                        <MarkerList
                            markers={markers}
                            handleListItemClick={onClickListItem}
                        />
                    )
                );
            case 'shuttle':
                // 정류장에 맞는 시간표 출력
                return markers[0].getTitle();
        }
    };

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* <Header userInfo={userInfo} onLogout={onLogout} /> */}
            <section
                style={{
                    transition: 'all 1s',
                    width: '100%',
                    height: '100%',
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
                    onClickMarker={handleClickMarker}
                    onClickListTarget={handleClickListTarget}
                    handleUpdateCluster={onUpdateCluster}
                    onUpdateCurrentMode={onUpdateCurrentMode}
                    onUpdateCurrentCategory={onUpdateCurrentCategory}
                />
                {profile && (
                    <Profile userInfo={profile} closeProfile={closeProfile} />
                )}
            </section>
            <section
                style={{
                    transition: 'all 1s',
                    height: `${
                        selectedMarkers.markers.length !== 0 ? '100%' : '0'
                    }`,
                    overflowY: 'hidden',
                }}
            >
                <Panel>
                    {currentMode === 'DEFAULT' && getContents(selectedMarkers)}
                </Panel>
            </section>
            {currentMode === 'PROGRESS' && <ProgerssIndicator />}
        </div>
    );
};

export default Home;
