import React, { useState, useEffect } from 'react';
import Map from './Map';
import Profile from './Profile';
import { getShuttleStops, getUsers } from '../dist/api/marker.js';
import { getProfile } from '../dist/api/users.js';
import { Socket } from '../dist/api/socket.js';
import MarkerList from './MarkerList';

const Home = ({
    userInfo,
    map,
    taxiMarkerController,
    stationMarkerController,
    shapeController,
}) => {
    const ref = React.createRef();
    const [mapService, setMapService] = useState(null);
    const [taxiMarkerService, setTaxiMarker] = useState(null);
    const [stationMarkerService, setStationMarker] = useState(null);
    const [drawingService, setDrawingService] = useState(null);

    // taxiMarekrs -> markers
    const [taxiMarkers, setTaxiMarkers] = useState([]);
    const [stationMarkers, setStationMarkers] = useState([]);
    const [clusterMarkers, setClusterMarkers] = useState([]);

    const [cluster, setCluster] = useState(null);
    const [markerHighlighter, setMarkerHighlighter] = useState(null);
    const [profile, setProfile] = useState(null);

    // user <- contextAPI,
    const [user, setUser] = useState({
        userId: '2dsfji5r44356j',
        name: '선화',
        iamgeUrl: '',
        state: 'ready',
        isAuthorized: true,
    });
    const [stompClient, setStompClient] = useState(null);

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
                clickListener: getProfielByUserId,
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

    const getProfielByUserId = async (marker) => {
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
                    mapService.setMap(customOverlay, false);
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
        taxiMarkerService.createCluster({ markers: [marker] }, cluster);
    };

    const createCluster = (cluster) => {
        setCluster(cluster);
    };

    const onCreateMarker = (marker) => {
        const { lat, lng, userId, name } = marker;
        const newMarker = {
            ...marker,
            title: `${userId} ${name}`,
            position: { lat, lng },
            draggable: false,
            clickListener: getProfielByUserId,
        };
        delete newMarker['lat'];
        delete newMarker['lng'];
        setTaxiMarkers((markers) => [...markers, newMarker]);
    };

    const onDeleteMarker = (markerId) => {
        // setMarkers((markers) =>
        //     markers.filter((marker) => marker.id !== markerId)
        // );
    };

    const onUpdateMarker = () => {};

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
                    mapService={mapService}
                    taxiMarkerService={taxiMarkerService}
                    stationMarkerService={stationMarkerService}
                    drawingService={drawingService}
                    taxiMarkers={taxiMarkers}
                    stationMarkers={stationMarkers}
                    handleClickTaxiMarker={getProfielByUserId}
                    handleClickCluster={onClickCluster}
                    createCluster={createCluster}
                    onCreateMarker={onCreateMarker}
                    onDeleteMarker={onDeleteMarker}
                    onUpdateMarker={onUpdateMarker}
                />
                {profile && (
                    <Profile userInfo={profile} closeProfile={closeProfile} />
                )}
            </section>
            <section style={{ height: '40vh', width: '100%' }}>
                {clusterMarkers.length !== 0 && (
                    <MarkerList
                        markers={clusterMarkers}
                        handleListItemClick={onClickListItem}
                    />
                )}
            </section>
        </div>
    );
};

export default Home;
