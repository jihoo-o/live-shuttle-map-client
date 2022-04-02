import React, { useState, useEffect } from 'react';
import Map from './Map';
import Profile from './Profile';
import { getShuttleStops, getUsers } from '../dist/api/marker.js';
import { markerImages } from '../dist/api/marker.js';
import { getProfile } from '../dist/api/users.js';
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
    const [taxiMarker, setTaxiMarker] = useState(null);
    const [stationMarker, setStationMarker] = useState(null);
    const [drawingService, setDrawingService] = useState(null);
    const [taxiMarkers, setTaxiMarkers] = useState([]);
    const [stationMarkers, setStationMarkers] = useState([]);
    const [clusterMarkers, setClusterMarkers] = useState([]);
    const [markerHighlighter, setMarkerHighlighter] = useState(null);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const mapInstance = new map(ref.current);
        const taxiMarkerInstance = new taxiMarkerController(mapInstance);
        const stationMarkerInstance = new stationMarkerController(mapInstance);
        const drawingService = new shapeController(mapInstance);
        setMapService(() => mapInstance);
        setTaxiMarker(() => taxiMarkerInstance);
        setStationMarker(() => stationMarkerInstance);
        setDrawingService(() => drawingService);
        mapInstance.setClusterEventListener('clusterclick', clickCluster);
    }, []);

    useEffect(async () => {
        const userTaxiMarkers = await getUsers();
        const newTaxiMarkers = userTaxiMarkers.map((marker) => {
            const { type, state, isCurrent, lat, lng } = marker;
            const newMarker = {
                ...marker,
                image: markerImages[type][state][
                    isCurrent ? 'isCurrent' : 'isNotCurrent'
                ],
                position: { lat, lng },
                isDraggable: false,
                clickListener: getProfielByUserId,
            };
            delete marker['lat'];
            delete marker['lng'];
            return newMarker;
        });
        setTaxiMarkers(newTaxiMarkers);
    }, []);

    useEffect(async () => {
        const shuttlestopMarkers = await getShuttleStops();
        const newStationMarkers = shuttlestopMarkers.map((marker) => {
            const { type, lat, lng } = marker;
            const newMarker = {
                ...marker,
                image: markerImages[type],
                position: { lat, lng },
                isDraggable: false,
            };
            delete marker['lat'];
            delete marker['lng'];
            return newMarker;
        });
        setStationMarkers(newStationMarkers);
    }, []);

    const getProfielByUserId = async (userInfo) => {
        const [userId, name] = [...userInfo.trim().split(' ')];
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

    const clickCluster = (cluster) => {
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

    const onListItemClick = (marker) => {
        const position = marker.getPosition();
        setMapService((mapService) => {
            mapService.setLevel(2);
            mapService.setLevel(1, position);
            mapService.removeFromMap(marker);
            setMarkerHighlighter((customOverlay) => {
                if (customOverlay) {
                    customOverlay.setMap(false);
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
        setTaxiMarker((taxiMarkerService) => {
            taxiMarkerService.setCluster(marker);
            return taxiMarkerService;
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
                    map={mapService}
                    taxiMarker={taxiMarker}
                    stationMarker={stationMarker}
                    shapeController={drawingService}
                    taxiMarkers={taxiMarkers}
                    stationMarkers={stationMarkers}
                />
                {profile && (
                    <Profile userInfo={profile} closeProfile={closeProfile} />
                )}
            </section>
            <section style={{ height: '40vh', width: '100%' }}>
                {clusterMarkers.length !== 0 && (
                    <MarkerList
                        markers={clusterMarkers}
                        handleListItemClick={onListItemClick}
                    />
                )}
            </section>
        </div>
    );
};

export default Home;
