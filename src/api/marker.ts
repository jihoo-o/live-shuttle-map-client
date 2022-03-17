import { UserMarker, StationMarker } from './../service/map';
import BusImage from '../images/bus.png';

// dummy data
// const users: Array<UserMarker> = [
const users = [
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

// const busStops: Array<StationMarker> = [
const busStops = [
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
        imageUrl: `https://lh3.googleusercontent.com/SKNF6oHSr7KcTMj-Rgown6rA3srWavz11Jw7Chm21Qut3AcN53roTjArv3X9vMDevOYVDKgLHt3dQbJs-QQEmljxDbJTzQL49eZ6KPdiCTiL8B3pDfk_A5cNPWTrwYjFYTbyKoMYJra1fffygVymAtvDRBZY1TdEnGFL4zaWFhk3-rjGFzWwiYd9rNvq5Az9BbMr6I0ICQyZzP2qygRwcbLKuRtJOKAhtheCF21xX93zsRd6X8JJkl0cgw4eSiXOfNGgEg5iozqOEnsAunMiQWy10f3b6F2WrZ2WSeLzV_K-6TjBF6GKGAq_p93Nqmwhpvgiq-Q8seJ9do48V-aGlvCJzDvb_shavw4zKdguRfUPjYdWX5B3lsd3C5QhoIjYU6gume9AsNs-xF29PSE9Ym2gg7hZfXpl2Jo_0WGmIcwsL4N5kc_VgmKXGUWAa3ZpEDDDzYYAlDxs1uydBzMoo-McNqRLdA1Ios75ABECb-l7V7cxYLFm6cR_ho2iGFIVvro2_1nZoS9gVgh4A46R8Yx2Joblsy1vwiyr_9qC_6KTlVP_2JGg8JU2D4H93wjL5OgPMBRteu77W_CcyfP46Hx-l-rxQhn4Szd0C5x2zQvPmzO1mbxfjk6-0bnzoNquhPDMZnNykU1YxDH5O-HOLy1T4EwfFgaSg5j_dLAct41o_nvzxs9w1zdvLWPDofO2QpwwCgwfIILd3yjmlu3rHg=s500-no?authuser=1`,
    },
    {
        stationId: '112',
        name: {
            ko: '범어사역',
            en: 'Beomeosa station',
        },
        lat: 35.272884,
        lng: 129.09251,
        imageUrl: `https://lh3.googleusercontent.com/SKNF6oHSr7KcTMj-Rgown6rA3srWavz11Jw7Chm21Qut3AcN53roTjArv3X9vMDevOYVDKgLHt3dQbJs-QQEmljxDbJTzQL49eZ6KPdiCTiL8B3pDfk_A5cNPWTrwYjFYTbyKoMYJra1fffygVymAtvDRBZY1TdEnGFL4zaWFhk3-rjGFzWwiYd9rNvq5Az9BbMr6I0ICQyZzP2qygRwcbLKuRtJOKAhtheCF21xX93zsRd6X8JJkl0cgw4eSiXOfNGgEg5iozqOEnsAunMiQWy10f3b6F2WrZ2WSeLzV_K-6TjBF6GKGAq_p93Nqmwhpvgiq-Q8seJ9do48V-aGlvCJzDvb_shavw4zKdguRfUPjYdWX5B3lsd3C5QhoIjYU6gume9AsNs-xF29PSE9Ym2gg7hZfXpl2Jo_0WGmIcwsL4N5kc_VgmKXGUWAa3ZpEDDDzYYAlDxs1uydBzMoo-McNqRLdA1Ios75ABECb-l7V7cxYLFm6cR_ho2iGFIVvro2_1nZoS9gVgh4A46R8Yx2Joblsy1vwiyr_9qC_6KTlVP_2JGg8JU2D4H93wjL5OgPMBRteu77W_CcyfP46Hx-l-rxQhn4Szd0C5x2zQvPmzO1mbxfjk6-0bnzoNquhPDMZnNykU1YxDH5O-HOLy1T4EwfFgaSg5j_dLAct41o_nvzxs9w1zdvLWPDofO2QpwwCgwfIILd3yjmlu3rHg=s500-no?authuser=1`,
    },
    {
        stationId: '113',
        name: {
            ko: '남산역',
            en: 'Namsan station',
        },
        lat: 35.265204,
        lng: 129.092325,
        imageUrl: `https://lh3.googleusercontent.com/SKNF6oHSr7KcTMj-Rgown6rA3srWavz11Jw7Chm21Qut3AcN53roTjArv3X9vMDevOYVDKgLHt3dQbJs-QQEmljxDbJTzQL49eZ6KPdiCTiL8B3pDfk_A5cNPWTrwYjFYTbyKoMYJra1fffygVymAtvDRBZY1TdEnGFL4zaWFhk3-rjGFzWwiYd9rNvq5Az9BbMr6I0ICQyZzP2qygRwcbLKuRtJOKAhtheCF21xX93zsRd6X8JJkl0cgw4eSiXOfNGgEg5iozqOEnsAunMiQWy10f3b6F2WrZ2WSeLzV_K-6TjBF6GKGAq_p93Nqmwhpvgiq-Q8seJ9do48V-aGlvCJzDvb_shavw4zKdguRfUPjYdWX5B3lsd3C5QhoIjYU6gume9AsNs-xF29PSE9Ym2gg7hZfXpl2Jo_0WGmIcwsL4N5kc_VgmKXGUWAa3ZpEDDDzYYAlDxs1uydBzMoo-McNqRLdA1Ios75ABECb-l7V7cxYLFm6cR_ho2iGFIVvro2_1nZoS9gVgh4A46R8Yx2Joblsy1vwiyr_9qC_6KTlVP_2JGg8JU2D4H93wjL5OgPMBRteu77W_CcyfP46Hx-l-rxQhn4Szd0C5x2zQvPmzO1mbxfjk6-0bnzoNquhPDMZnNykU1YxDH5O-HOLy1T4EwfFgaSg5j_dLAct41o_nvzxs9w1zdvLWPDofO2QpwwCgwfIILd3yjmlu3rHg=s500-no?authuser=1`,
    },
    {
        stationId: '114',
        name: {
            ko: '남산소방서',
            en: 'Namsan Fire Station',
        },
        lat: 35.26115623050817,
        lng: 129.08715399980125,
        imageUrl: `https://lh3.googleusercontent.com/SKNF6oHSr7KcTMj-Rgown6rA3srWavz11Jw7Chm21Qut3AcN53roTjArv3X9vMDevOYVDKgLHt3dQbJs-QQEmljxDbJTzQL49eZ6KPdiCTiL8B3pDfk_A5cNPWTrwYjFYTbyKoMYJra1fffygVymAtvDRBZY1TdEnGFL4zaWFhk3-rjGFzWwiYd9rNvq5Az9BbMr6I0ICQyZzP2qygRwcbLKuRtJOKAhtheCF21xX93zsRd6X8JJkl0cgw4eSiXOfNGgEg5iozqOEnsAunMiQWy10f3b6F2WrZ2WSeLzV_K-6TjBF6GKGAq_p93Nqmwhpvgiq-Q8seJ9do48V-aGlvCJzDvb_shavw4zKdguRfUPjYdWX5B3lsd3C5QhoIjYU6gume9AsNs-xF29PSE9Ym2gg7hZfXpl2Jo_0WGmIcwsL4N5kc_VgmKXGUWAa3ZpEDDDzYYAlDxs1uydBzMoo-McNqRLdA1Ios75ABECb-l7V7cxYLFm6cR_ho2iGFIVvro2_1nZoS9gVgh4A46R8Yx2Joblsy1vwiyr_9qC_6KTlVP_2JGg8JU2D4H93wjL5OgPMBRteu77W_CcyfP46Hx-l-rxQhn4Szd0C5x2zQvPmzO1mbxfjk6-0bnzoNquhPDMZnNykU1YxDH5O-HOLy1T4EwfFgaSg5j_dLAct41o_nvzxs9w1zdvLWPDofO2QpwwCgwfIILd3yjmlu3rHg=s500-no?authuser=1`,
    },
    {
        stationId: '115',
        name: {
            ko: '건학관',
            en: 'Campus',
        },
        lat: 35.26753755709011,
        lng: 129.080358588741,
        imageUrl: `https://lh3.googleusercontent.com/SKNF6oHSr7KcTMj-Rgown6rA3srWavz11Jw7Chm21Qut3AcN53roTjArv3X9vMDevOYVDKgLHt3dQbJs-QQEmljxDbJTzQL49eZ6KPdiCTiL8B3pDfk_A5cNPWTrwYjFYTbyKoMYJra1fffygVymAtvDRBZY1TdEnGFL4zaWFhk3-rjGFzWwiYd9rNvq5Az9BbMr6I0ICQyZzP2qygRwcbLKuRtJOKAhtheCF21xX93zsRd6X8JJkl0cgw4eSiXOfNGgEg5iozqOEnsAunMiQWy10f3b6F2WrZ2WSeLzV_K-6TjBF6GKGAq_p93Nqmwhpvgiq-Q8seJ9do48V-aGlvCJzDvb_shavw4zKdguRfUPjYdWX5B3lsd3C5QhoIjYU6gume9AsNs-xF29PSE9Ym2gg7hZfXpl2Jo_0WGmIcwsL4N5kc_VgmKXGUWAa3ZpEDDDzYYAlDxs1uydBzMoo-McNqRLdA1Ios75ABECb-l7V7cxYLFm6cR_ho2iGFIVvro2_1nZoS9gVgh4A46R8Yx2Joblsy1vwiyr_9qC_6KTlVP_2JGg8JU2D4H93wjL5OgPMBRteu77W_CcyfP46Hx-l-rxQhn4Szd0C5x2zQvPmzO1mbxfjk6-0bnzoNquhPDMZnNykU1YxDH5O-HOLy1T4EwfFgaSg5j_dLAct41o_nvzxs9w1zdvLWPDofO2QpwwCgwfIILd3yjmlu3rHg=s500-no?authuser=1`,
    },
];

export const addUser = async (markerUser) => {};

export const getUsers = async (): Promise<Array<UserMarker>> => {
    return users.map((user) => ({
        ...user,
        imageUrl: `https://lh3.googleusercontent.com/SKNF6oHSr7KcTMj-Rgown6rA3srWavz11Jw7Chm21Qut3AcN53roTjArv3X9vMDevOYVDKgLHt3dQbJs-QQEmljxDbJTzQL49eZ6KPdiCTiL8B3pDfk_A5cNPWTrwYjFYTbyKoMYJra1fffygVymAtvDRBZY1TdEnGFL4zaWFhk3-rjGFzWwiYd9rNvq5Az9BbMr6I0ICQyZzP2qygRwcbLKuRtJOKAhtheCF21xX93zsRd6X8JJkl0cgw4eSiXOfNGgEg5iozqOEnsAunMiQWy10f3b6F2WrZ2WSeLzV_K-6TjBF6GKGAq_p93Nqmwhpvgiq-Q8seJ9do48V-aGlvCJzDvb_shavw4zKdguRfUPjYdWX5B3lsd3C5QhoIjYU6gume9AsNs-xF29PSE9Ym2gg7hZfXpl2Jo_0WGmIcwsL4N5kc_VgmKXGUWAa3ZpEDDDzYYAlDxs1uydBzMoo-McNqRLdA1Ios75ABECb-l7V7cxYLFm6cR_ho2iGFIVvro2_1nZoS9gVgh4A46R8Yx2Joblsy1vwiyr_9qC_6KTlVP_2JGg8JU2D4H93wjL5OgPMBRteu77W_CcyfP46Hx-l-rxQhn4Szd0C5x2zQvPmzO1mbxfjk6-0bnzoNquhPDMZnNykU1YxDH5O-HOLy1T4EwfFgaSg5j_dLAct41o_nvzxs9w1zdvLWPDofO2QpwwCgwfIILd3yjmlu3rHg=s500-no?authuser=1`,
    }));
};

export const getShuttleStops = async (): Promise<Array<StationMarker>> => {
    return shuttleStops;
};

// export const getBusStops = async (): Promise<Array<StationMarker>> => {
// return busStops;
// };

export const postUser = async () => {};

export const deleteUser = async (userId) => {};
