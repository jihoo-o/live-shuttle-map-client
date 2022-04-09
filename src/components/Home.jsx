import React, { useState, useEffect } from 'react';
import Map from './Map';
import Profile from './Profile';
import { getShuttleStops, getUsers } from '../dist/api/marker.js';
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
    const [taxiMarkerService, setTaxiMarker] = useState(null);
    const [stationMarkerService, setStationMarker] = useState(null);
    const [drawingService, setDrawingService] = useState(null);

    // socket으로 업데이트되기 이전에는 state에 보관중인 값을 사용함
    const [taxiMarkers, setTaxiMarkers] = useState([]);
    const [stationMarkers, setStationMarkers] = useState([]);
    const [clusterMarkers, setClusterMarkers] = useState([]);

    const [cluster, setCluster] = useState(null);
    const [markerHighlighter, setMarkerHighlighter] = useState(null);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const mapInstance = new map(ref.current);
        const taxiMarkerInstance = new taxiMarkerController(mapInstance);
        const stationMarkerInstance = new stationMarkerController(mapInstance);
        const drawingServiceInstance = new shapeController(mapInstance);
        setMapService(() => mapInstance);
        setTaxiMarker(() => taxiMarkerInstance);
        setStationMarker(() => stationMarkerInstance);
        setDrawingService(() => drawingServiceInstance);
    }, []);

    useEffect(async () => {
        const userTaxiMarkers = await getUsers();
        const newTaxiMarkers = userTaxiMarkers.map((marker) => {
            const { lat, lng, userId, name } = marker;
            const newMarker = {
                ...marker,
                title: `${userId} ${name}`,
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
            const { lat, lng } = marker;
            const newMarker = {
                ...marker,
                position: { lat, lng },
                isDraggable: false,
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
