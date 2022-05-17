import axios from 'axios';
import ShuttleStation from '../assets/shuttle-station.png';
import ShuttleMarker from '../assets/shuttle-marker.png';
/* eslint-disable import/first */

export const markerImages = {
    // object user
    shuttlestation: {
        url: ShuttleStation,
        size: {
            width: 28,
            height: 30,
        },
    },
    shuttlebus: {
        url: ShuttleMarker,
        size: {
            width: 35,
            height: 43,
        },
    },
    user: {
        ready: {
            isCurrent: {
                url: `https://drive.google.com/uc?export=view&id=1v2DNMCWAY5Mg7q68bEKtPdKOng4oyi3L`,
                size: {
                    width: 50,
                    height: 50,
                },
            },
            isNotCurrent: {
                url: `https://drive.google.com/uc?export=view&id=1uSUmYTg6mAlfDNnlPUHojPSJcm21YiaX`,
                size: {
                    width: 50,
                    height: 50,
                },
            },
        },
        running: {
            isCurrent: {
                // 이미지 없음
                url: `https://drive.google.com/uc?export=view&id=1zL_KLMSD-3-aFNgYbYDN_MhXR67bKeDx`,
                size: {
                    width: 50,
                    height: 50,
                },
            },
            isNotCurrent: {
                // 이미지 없음
                url: `https://drive.google.com/uc?export=view&id=141ZvA3O_z4y-kr95R0O396l2Pj1NNJPm`,
                size: {
                    width: 50,
                    height: 50,
                },
            },
        },
    },
    blocked: {
        url: `https://drive.google.com/uc?export=view&id=1NOot7KuDbwiVAZxiGr7Hbkc7Pf-x3f3g`,
        size: {
            width: 50,
            height: 50,
        },
    },
};

// const users: Array<UserMarker> = [
const users = [
    {
        userId: '2dsfji5r44356j',
        name: '선화',
        type: 'user',
        state: 'ready',
        isCurrent: true,
        lat: 35.26514780573635,
        lng: 129.09224190617812,
    },
    {
        userId: '1235',
        name: 'abc',
        type: 'user',
        state: 'ready',
        isCurrent: false,
        lat: 35.2657742202417,
        lng: 129.0923651447031,
    },
    {
        userId: '1237',
        name: 'def',
        type: 'user',
        state: 'ready',
        isCurrent: false,
        lat: 35.265406436358305,
        lng: 129.09226778570113,
    },
    {
        userId: '1238',
        name: 'uuu',
        type: 'user',
        state: 'ready',
        isCurrent: true,
        lat: 35.264981643568305,
        lng: 129.09221016434967,
    },
    {
        userId: '1239',
        name: 'lili',
        type: 'user',
        state: 'ready',
        isCurrent: true,
        lat: 35.265390198399224,
        lng: 129.09229483673937,
    },
    {
        userId: '1240',
        name: 'fa',
        type: 'user',
        state: 'ready',
        isCurrent: true,
        lat: 35.265136878951964,
        lng: 129.09222239716797,
    },
    {
        userId: '1241',
        name: 'k',
        type: 'user',
        state: 'ready',
        isCurrent: true,
        lat: 35.26519054344894,
        lng: 129.09224575215924,
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

const shuttleStops = [
    {
        stationId: '111',
        type: 'shuttlestation',
        name: {
            ko: '외성생활관',
            en: 'Off-campus dorm',
        },
        lat: 35.269841186287096,
        lng: 129.08528905299215,
        // image: `https://lh3.googleusercontent.com/LlMclaxRdJWh4FBfjk-jOkur-l0kUj5_aIJpPWyhAGRP6p1FV7vnRXN50vUK6KuVuPIGUOONAlma1XxNuhElAIa7g5lojNVMKa7wM6SLXxjosbfIh4Ecoma_24LT606CaQkGDHgnbWDiSHZY6Rze0_fBm2Zyd_eXvVpkWwh5Trov7phZvBrEZ0PClIyvaJ6GYlSPGMzZR6Iu6RU46gTLC39YDMbqKBiT5ndGHVu-NzXc7-mkBFMMoa3eU0b81ThKKRjxEPb1b87OJrtFoENA29rnUL-O6kuT8n26Zsv3mSwMpAI88B8oqvIV2uoYnnnWBUNoy4k_Lmjsj5Ik2K7vkqYgdhxoeKtUsch0uR3sgqL4RLCizfpuFF5ooI5Pp0gv8stHlrWOBbEdHZHgXnme158e440SPB-3aPK_Sg2XFYvo3xZExa9NZ2PpLtb3WhB8g9sONMDY9f3x7Y5v7QFupmlz9q39mBRfXSMcU2dd0hupzWpEPrE1BVxo_-yZdP36sWjLjipssR_4dWBYumm4nmfkHlEkpEYffbmf690D_Myuk5x8LGRmyi3GLbZDFYTClfhnfRCBABgKUIku-dchQdhKrA77PPOn1pfWxwmPdvG5dXURCU08FAXWLJ2LSAnkBV7UOt9Iax9ERMI2gf6ZtVbpnffj3aw75Oxlj4_FMLNRaIvCwhk-7HxK6fXtgouu4QNSjeHul2HjTQF7wFyTh7wXRvXSzd5lcgPFukG4qafW68Bmpk7-DcZLTmvxZeavLsVbqbA-SUANoWn34D7xkFyzlvfI7WY=s500-no?authuser=1`,
    },
    {
        stationId: '112',
        type: 'shuttlestation',
        name: {
            ko: '범어사역',
            en: 'Beomeosa station',
        },
        lat: 35.272884,
        lng: 129.09251,
        // image: `https://lh3.googleusercontent.com/LlMclaxRdJWh4FBfjk-jOkur-l0kUj5_aIJpPWyhAGRP6p1FV7vnRXN50vUK6KuVuPIGUOONAlma1XxNuhElAIa7g5lojNVMKa7wM6SLXxjosbfIh4Ecoma_24LT606CaQkGDHgnbWDiSHZY6Rze0_fBm2Zyd_eXvVpkWwh5Trov7phZvBrEZ0PClIyvaJ6GYlSPGMzZR6Iu6RU46gTLC39YDMbqKBiT5ndGHVu-NzXc7-mkBFMMoa3eU0b81ThKKRjxEPb1b87OJrtFoENA29rnUL-O6kuT8n26Zsv3mSwMpAI88B8oqvIV2uoYnnnWBUNoy4k_Lmjsj5Ik2K7vkqYgdhxoeKtUsch0uR3sgqL4RLCizfpuFF5ooI5Pp0gv8stHlrWOBbEdHZHgXnme158e440SPB-3aPK_Sg2XFYvo3xZExa9NZ2PpLtb3WhB8g9sONMDY9f3x7Y5v7QFupmlz9q39mBRfXSMcU2dd0hupzWpEPrE1BVxo_-yZdP36sWjLjipssR_4dWBYumm4nmfkHlEkpEYffbmf690D_Myuk5x8LGRmyi3GLbZDFYTClfhnfRCBABgKUIku-dchQdhKrA77PPOn1pfWxwmPdvG5dXURCU08FAXWLJ2LSAnkBV7UOt9Iax9ERMI2gf6ZtVbpnffj3aw75Oxlj4_FMLNRaIvCwhk-7HxK6fXtgouu4QNSjeHul2HjTQF7wFyTh7wXRvXSzd5lcgPFukG4qafW68Bmpk7-DcZLTmvxZeavLsVbqbA-SUANoWn34D7xkFyzlvfI7WY=s500-no?authuser=1`,
    },
    {
        stationId: '113',
        type: 'shuttlestation',
        name: {
            ko: '남산역',
            en: 'Namsan station',
        },
        lat: 35.26527765324612,
        lng: 129.0922891953689,
        // image: `https://lh3.googleusercontent.com/oKhBYe-De-d0FUYOhRd__ZGAg1hFKqOEvXVK-O2W7G7mIijMevxzCr6mcMl6NNq8TmBV4vNBsSRZKAGeDGiL1R83CG9VaivhtF3AniEvHSJTRRpDnc5HaCh6YwaH44LQoUkaZA-TzPOeHmAkOXxUtkjD9GQ84WIu5ph3Li8Lh9d_DuB7iKpUo0xyhbTqbN0Q-E7QzXj2Il2ptI_uetjbhQeL9ZhzJDctwWbq-0nRtDLBn3KrkEDNFKPXPvnjfm_D2CPN-kZ3GDFGOFi0W7pN0r4y2iZUWW57oVoEXnM_lq9km6pLRzcw176WBexXzzx1WZOk8rp1pWEub-Lbnd9V90OrpQlI_s5z7hk8AHL3W4gcwnnxppjeOHZOeTeSxSoDsy5A-_M9pn3EVzA_BFdtSY86Hn8sSQyz0DoJLiP8yLKXpISk71Aht-uOclRZ3ZdQvA74_oyItldOmKuZ3VPKhVhK617e-VHHJZJLnxUsGAMUYLSg-8J9oP6iA_JjJjaLp3ZSTlppZa7XYtWE__ROiATOrPGPFb4gi1LxDrMS1ibpjQoJ9ok9YDx_hd-9SzJHCDOGXTuaXaUTubLssVhEhPmFts3wwUw3BcD4sge95AjQwI2JCcHoQjXU9mngR_tddZP_Dl1tVKXPyuzVE_Q7p7ekK1hrCnuTGVyQVXY4EBCLN6zkWL2KUjjSSzetIbY8fPRyuGH2IzNf6xXcAgTkaJBRftCJrG6oJuzyz04XDcNuTg34hHSxryD6SlX1YKVIA1EnmgTT5ikXb4qVyuZA1IV3HmV2q_A=s500-no?authuser=1`,
    },
    {
        stationId: '114',
        type: 'shuttlestation',
        name: {
            ko: '남산소방서',
            en: 'Namsan Fire Station',
        },
        lat: 35.26107692825543,
        lng: 129.0871546707029,
        // image: ``,
    },
    {
        stationId: '115',
        type: 'shuttlestation',
        name: {
            ko: '건학관',
            en: 'Campus',
        },
        lat: 35.26753755709011,
        lng: 129.080358588741,
        // image: `https://lh3.googleusercontent.com/c9CejXwvda4Q6deonivhym_QlpuN3gNLeJCbY9lVjA-_Azm6VhdCOABigdTGdPsqN-87WcOo_rRUcg_vuYI5AUkEWv8bdPS8r5yOociuXXUgqeHP-_95n4JKwiYkSA-ioMzAtSCkXqbPZJY5LmHZLa_ss1D9aMk6Rk4Fdv8xKaMl_wyjgOdMs4Jpn2mjvKypO72Ez3cuK7BLTpI2D0lQEJ7bsInSoAGqNQavLKK2dxqlhTHTQ9SS61fAJIops0JclgpQCCNDtOLMXsCaUs4EILSSELt9o8joMvPUXumU4_oS89fFv9-ik1_9OoTmLYd2OLZtzVtEveVY7lIkVt2EWavfpgnQ4qkXs7uHyN56chQo4V8CmdMJFGNgnEeZz0NMfg8Fv9oi_Q0lnxpuJkrSiD7HJ-v02aDGDv-qmJJDIH1V413DXzSBh2CuQjLC7txFpZK3pexvexoA8fwK3NRnvRNhSQZYfDa8pjrYSEDGk59eOcRfJb0v-rBsYAYB_x-1SITyx6gQL0t4FYXozYW-5RxPVAYnDc_68Qsc_YkzMF8AeIGx-Exe6O2hOoDidaELQ-UBhMKxoqyAFjsk4vmEhtLn1VeP4AJfN9psjeHkSNzvktgHDvMvs5xgFYry-Uc-CXfK5TgQCGsdHPKiABfMKp3P2xCZihrE5cVf4sYvOJUmUu_pAWCRCdHR9m1qhMkfQI8mPhS482vcrt6w5toFmA5Z_bEQPlNtcXWSn9J39yyDfCuYdEBIP0yhLYKMoPfKr0p-xCYn1tZbDRZgkL7Aq6A-nr_VuPU=s500-no?authuser=1`,
    },
];

const shuttlebuses = [
    {
        id: '1',
        lat: 35.26753755709011,
        lng: 129.080358588741,
        type: 'shuttlebus',
    },
];

export const getUsers = async () => {
    return users.map((user) => ({
        ...user,
    }));
};

export const getShuttleStops = async () => {
    return shuttleStops.map((shuttlestop) => ({
        ...shuttlestop,
    }));
};

export const getShuttles = async () => {
    try {
        const response = await axios.get(
            'https://2022bufscapstone.kr:8080/markers/shuttlebus/all'
        );
        return response.data.map((bus) => ({
            ...bus,
            type: 'shuttlebus',
            id: bus.busid,
        }));
    } catch (e: any) {
        throw new Error(e);
    }
};

// export const getBusStops = async (): Promise<Array<StationMarker>> => {
// return busStops;
// };

export const postUser = async (userInfo, isCurrent, position) => {
    const newUserMarker = {
        userId: userInfo.userId,
        name: userInfo.name,
        type: 'user',
        state: 'ready',
        isCurrent,
        lat: position.lat,
        lng: position.lng,
    };
    users.push(newUserMarker);
    return newUserMarker;
};

export const deleteUser = async (userId) => {};
