import { UserMarker, StationMarker } from './../service/map';

// dummy data
const users: Array<UserMarker> = [
    {
        userId: '1234',
        lat: 0,
        lng: 0,
    },
    {
        userId: '1235',
        lat: 0,
        lng: 0,
    },
    {
        userId: '1236',
        lat: 0,
        lng: 0,
    },
    {
        userId: '1237',
        lat: 0,
        lng: 0,
    },
    {
        userId: '1238',
        lat: 0,
        lng: 0,
    },
];

const busStops: Array<StationMarker> = [
    {
        stationId: '1',
        name: 'noop',
        lat: 0,
        lng: 0,
    },
    {
        stationId: '2',
        name: 'NamsanFireStation',
        lat: 0,
        lng: 0,
    },
    {
        stationId: '3',
        name: 'HanbatSportsComplex',
        lat: 0,
        lng: 0,
    },
    {
        stationId: '4',
        name: 'BusaFiveWayIntersection',
        lat: 0,
        lng: 0,
    },
    {
        stationId: '5',
        name: 'MotorcycleStreet',
        lat: 0,
        lng: 0,
    },
];

const shuttleStops: Array<StationMarker> = [
    {
        stationId: '111',
        name: {
            ko: '외성생활관',
            en: 'Off-campus dorm',
        },
        lat: 35.27001,
        lng: 129.085296,
    },
    {
        stationId: '112',
        name: {
            ko: '범어사역',
            en: 'Beomeosa station',
        },
        lat: 35.272884,
        lng: 129.09251,
    },
    {
        stationId: '113',
        name: {
            ko: '남산역',
            en: 'Namsan station',
        },
        lat: 35.265204,
        lng: 129.092325,
    },
    {
        stationId: '114',
        name: {
            ko: '남산소방서',
            en: 'Namsan Fire Station',
        },
        lat: 35.26115623050817,
        lng: 129.08715399980125,
    },
    {
        stationId: '115',
        name: {
            ko: '건학관',
            en: 'Campus',
        },
        lat: 35.26753755709011,
        lng: 129.080358588741,
    },
];

export const addUser = async (markerUser) => {};

export const getUsers = async (): Promise<Array<UserMarker>> => {
    return users;
};

export const getShuttleStops = async (): Promise<Array<StationMarker>> => {
    return shuttleStops;
};

export const getBusStops = async (): Promise<Array<StationMarker>> => {
    return busStops;
};

export const postUser = async () => {};

export const deleteUser = async (userId) => {};
