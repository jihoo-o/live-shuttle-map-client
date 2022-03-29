import React, { useState, useEffect } from 'react';
import Map from './Map';
import Profile from './Profile';
import { getShuttleStops, getUsers } from '../dist/api/marker.js';
import { markerImages } from '../dist/api/marker.js';
import { getProfile } from '../dist/api/users.js';

const Home = ({
    userId,
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
    }, [taxiMarker]);

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
    }, [stationMarker]);

    const getProfielByUserId = async (userId) => {
        const newProfile = await getProfile(userId);
        setProfile(newProfile);
    };

    const closeProfile = () => {
        setProfile(null);
    };

    return (
        <>
            <div
                style={{
                    height: '60vh',
                }}
            >
                <Map
                    userId={userId}
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
            </div>
        </>
    );
};

export default Home;
