/* eslint-disable import/first */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const markerImages = {
    shuttlebus: `https://lh3.googleusercontent.com/R12lqqD3a2a2yFEOBI5w2pTgwejG_P82IkbWCIzQwWf5W7pU-hQu0OfB5ED0380jVLcNvg0f3Yoem8mIb4LPwDzkbqnfuVyiUZ6EyYsDmKojoT1zF8iE3Wq9qoXtvWeFXaKvJmBJu3N1_nTVQCJcu1cCYF76AO8TbBnYXFmn-id7ryEeBLPPISGL65vszNdqBfQ1rgJbwnkWdhEiVydVwGW-68iMomBNpFdhC9O3BpaoLEl1dEktD_6Kcy78Vpb4gyQapA1Sg3w56U4X3IuUsfzcrAodYvfCkpFpcF5C6TWfg7DWD46xRHhyOKR7vebeF3AwLUDWoR3nvZYxzei1FiKx6XdHTzSGy5GOlutRgSQhSugGbj3jjmA_fNgkzTxthpp09GBgo_1SY6TBI-4fckO-_bkhDBulTvnXtdmKoziBxG-OOlykDM5-AciAx2UUm6Z2cwjRc4wJpkAMK5SgSu_qM3lfQkfuSl7tBChNsURrb361ckuHooy0bH0yaNOtf0feCm6yXB2FU75LjEc2c3YVZVvg24tu-fKghue9Bv42tAVm4go8bjFfkhBtXgeW9SOY0TdBP4RDqTsf2Ie08_yzsS69K7jNtQGCRIobXOjveDwlRl2DAy7FonsNYscNXFd4jlbpmQA9QfNlSDkA4Xi_N_uiCOFLISZC0gXoczrDx3eOP8M8g40qNcWePAi6BQIM2tFvkjOCz5kvCoICEwICz5gz7Ockm3aF1kurb1ehNyANORUNCsrXcR65KUsDtUQvK5WpPwaUA4EY73y3b5hK3uCuKI4=s500-no?authuser=1`,
    bus: `https://lh3.googleusercontent.com/Xb2jRt6XhtTGt0pAiX-Lhhm8FQoLGSslp401-os4SIVzSF3BuqB0CZ2TRMPNpyX03R8V2f47zGY_SiulC9zJ6PRWFBSXKcDf8UsdRZvGhK0iUqe__VCbHX5GP4vwYzraF_YsrhyZ6vKimivFm2tM-VfQOtBrJjhJ6-uk3y6mQKrgumb9raRMbYovcgPcpz2xbehJy-iVn2u1UptzWgDfnfdIo5sB1-uzqdSM22fmcwTUgHiH6d_FNkGunxxCJJVt57OTve-K5cbM4PuZAbHflU4zQowFgrelpFnbogV6RWp8KA-_utRvyeqwLFcyWUn31eLZE6klKae1K3Wf2C9rsqv-07lntm7VOABVmMT0E9dimjjDjJnZL0XjUiOySMfvoTld9ev8UIuDraW20WLt3nRkIUFFgGi6Iv0I2El-00i3-t94fhp06pVV8CSvHqMmekadBQi9qajmVYiZCLZQJqy7b49-EiHR7JgE3CJ4DxBIMxFvDoZLDuojmvv1-cEnTl62MmeieEmAe1uVLUpIP-3RNX9vgW_3wwFs5P0SO3LRg_xbm4LWyZ2jFmqCnxQzQrNR_Im-awjH44OvYZYZue6n21gJeSf-kwuWCKl77Q26EX8O84cd4vcw6y0v7vkbQPlsDxy0Qax6oLs1yrX0Lr2xVbozbYh6ZHasypqNse1FCLKwK1LIqjaBKtI5K1c0dW-xl9kjUhayUBDyxzUtWyy_xgD1djpQK9bEmNPqxdukM7FD4GNBcDzDn9Va5NEoFLLUSTz2ptrJZwJVFxE8M2JtyBFaeJ8=s512-no?authuser=1`,
    user: {
        ready: {
            isCurrent: `https://lh3.googleusercontent.com/STwrXj648Av6cEV03zj_Tl3AgD1N_URTlDTx3m4TrSj-AekTcE_6zwMEoucA4Lpm3cFmQSAm17YHVFJ2QEu7rdYH75-SFZ9_9NeUqXK9h-KMhEspudHmfH9nhRW4Qd9VzDBRhI3qL7FFd6IUpTomKzUkJxD5AhmySy5oj_x3QxjoSTs_joBGRoTwZzlriI7M8rU6pwZC4OVMDlJYppM4Pl00eLjJRB8_H0I73zdtcZWHSC0Urez5GXXGj41VfdDnVr4rwbix2xsrFfYYwIaSk8bSrH-7eH7UCXvhCIL8r7L2_xTLpC8Vf5dClLmZzBmK15HI_5XnGJrywwsI2U7zOJ_F2unkUHX4a-OWRMEy0JUXPQyqhB1kiUYDwWyR8NCV8uc9EvopH90dWp2w-29KnYjffqJtThSre1AkA0j4U_7-iM_TVrBqWbngt7rgygvr6qn0mvcUtpIO3gQhFHKccaL-xJciPYUWiHQ9FJ0Ho2aKAgUbwozIk6sY3aFAbW8Pdi3miopz8GmbRLP96kll68LiV517794j5j3OyNiDwr1D2iKFiHKbLRBuxTj4hCmpBOVeYw6rhbbevx3xsgwqqKCai7wewEGWVtsxK2yyRf72GrV-2nsx-rkkhDaK3ZW3JSStO_hyv-CxuqeYhBUxoZm3ruY5QzrBsxbMsYKX-hJ14cVZDPP0LQlIOhn21FY7GG0nsEvEGL3S7f2J0ghmw-v6Wvc20LG7s4tS42ZkTUTBZ6PVdRAqxmdmN6x_m2refAG-82X-CN3wlVjofAjTs8Rp9qS0eDo=s500-no?authuser=1`,
            isNotCurrent: `https://lh3.googleusercontent.com/tn3od2vNnupoe9t1Fc71gA3stMOFvp-rOnqwcxF4sIVyqE6SanSWW2PLvjIylUqlMAVJxcASj37FYOd9ujebCd7wP96jnvfjXIKW3Ac9EC3PTgAvkPcwJlfSNSAo82Dib72VZY8CinA3wp5Q2FAAv6SjbLyS3cHWlFQZyHsXdMTnTI7JS1WrRqZxCMtg0H_lN4Vipyman-0BB8_mnJEDN6FZEN30tC7V6Yyr39GzAYRmYly9uLYCk2dqLhbg_DujIJe8Ms1ctnNzonUz9xOy7RbTVqkcztdmQhDfbjAj1C73Jb87BoogTHrEA9OwQj_QcLbwv14zDf7BafKJl-TjOjjp5VlXfl55RlgiUZyFoGVI_WDgHnO4O-Bf3vjC9-8_JuM1JW_Bwyjq5C_nXtw9Dm5WruNtOxihNhCecJmFOoqAIDwPR83iIq3OaeoxDjbjvvHJ-lnNOIyEy5szz9j4jJ06TrNlM4s1qcKZfMWLSUHyRnVJE5DkG8hvIiXRQMUhUFdRelKNKzO5eVL5BkKxRjatpgCLJKnwrLfEK9u72lh2XdXNT5A_YUBaxzPcM5s5xbj63umxEoOcCkbA3M0nsDTjEvZAQSCbnubCYWTHyNB8oChLoE7QHLea8YAhMiojVK-NoN8ToSoU-88fPfUq3BPQyJavPdu_DHCRwhKWvkHA9lilf8YCRVssqzhbbia5txBgNNJdBSm1xbi1gFL0qy_oUH_PleDwG6Xe4M3u5BEoz2cdg2RafmGA5a-Zj_P262NwxAL0oAvP0Xzz9H2owN_sPMw55wQ=s500-no?authuser=1`,
        },
        running: {
            isCurrent: `https://lh3.googleusercontent.com/_KU4S7HoGfYem6zPndJYLNyMOh2-rmuCl8eHZyCQGe5nAPy-zPs6DOuE4QcH4tYKAP1Z3y3p7ft9VLGpn0J8dDUaDsOSs0JRvjyvQPxy2M37iO9pV1Rg3drmuW5N2l4BxxNGZV9QrUQmd7ZmHSO_Z_u9Ndyhk3A16RfWPfVLpsb280BFNHXjORBL6zpcW_0asvTwh1byQmVAjppEqUTlYVwj9ov9u4N9902IIXHL1aRmKRs48fCG_dsLodIuGgjDn0qhUsjtQ1r23RHlwhT_iQG7_w1NIdA42PpBnHG0L9LN0KBt64IBbZ9g-9GejxeOMCHZIUm9MdTVvhE_BQJFnLEEuiiDjzBJwU3OZAss5lUamzxvk5TwtV_3-Yh5ywsDjUdRancocSDr_kQZ7ABnnGDpJcRjIOBLfK_Z7HD5cHWQWkGVP-NXT_kdg5lAPvjnJFARIXL9Q5vsT2aorMOrDN_IKFh6xWsGVFS8qdRF7fux7bPaBlE7la-StbcBN0dzwKgK_f-mI1S2rG1OspqwHRjouJhbY3IOytUielphmdKr6EIIW-LwXlBv9R52myRDfePPBV7qQiluWwre8ofk5DsFwGevxdscMNKcXXpJuTDoKXA9CsIpVNa3yUM2ZdNDoMNZ9OYDkAVkrtbeeRXln7Gw-JErXHkeQCdccc4FjBuNFAVifdJwzWXsBZUei4tk8xqxk_Hb7eM2uCHq7kK_zuwW551lVWW6lpbCAlLBnZR3A90Ap8cg7enARbOlybpFADFSoR9ZEi59lru24JaCWWWq17z6BW0=s500-no?authuser=1`,
            isNotCurrent: `https://lh3.googleusercontent.com/5frCRCSFzqgaXesYq5Ex42ny1mdXpZGYGjZgQVupikAbnGiePSiGnwKXL0GEza8oGcJv97dQkE0OrbWz6aKIxs7uXmxcDtrMjkeFD3NZ_qMxwdHCj1-FFD09mAwOYZGJjsIG1BL6W2lmr6smlSTOaERbiyUmeZDOd_Lc5XkNVJ5IiZ9BfFmRn3qsomsLyvM3-A42ovMnH5Rq1Dw5DwUGcprr5CiVt4U0hjsF_1P2UYV0hF9xhyrKVsKYsDsbbFL2fOvZSrnvJt0ozQwHluMRPr3cqccqjE_UfQyWyWJAO8w8f8C38XGXuYrq3GIUahGG9AgwAbgLdwLhpGZJUuytdwkdUYlwShsJ4USCnuvdloAqIm93HRk65xcHNyfHedG7rYaAq9LhODPOUc3EiiWQ6zTiuBl7x7CsvWjwHRuHB7aaBZrk5Zg4hCM35h1Scm16thv140Pcr3ljtXwc5TbWPAfTmh7Yutr4YkLExzyUlt5-Rx0s060TKH539YGKmJCdKXrK5oXQO5yPqO10cUp15BVA5uoCNRcwWB1BG1VGYaXtooiNWcXrd55iDLMvK5-G2LhlbI3Mld4HHhlemqSjLtGS6qkLLnZI4KwlrAp5gNoJT4JNTHM0v_8ePYbwnh_j0rlTIMa2tSak7Tg4YCOoREitM2drckQtgVSMU-Fe5aI_U9fHom1YBNQ8Y6GFN9s33yq4cEekzp2MYKSNJUzyKQ2_HRce0g1FKI2wAGEi-GEpXGb6ZMcjcmsb_ERaYtpZkFxsnvx5myNjTMNy17Pwq17nZQ_ST0A=s500-no?authuser=1`,
        },
        blocked: `https://lh3.googleusercontent.com/pL0_3Lx_Lr9OuNQafFLnHxM6PMTbQaD_MG3O7LtG86d4Gewwx7xhbszRiOZWwws6yC6QZ4X1fB32li8BoUslhybJxcUgv3Q9hAY2EHYqjzMv_-62AFStsdlUtY1UB2Zr6nxMdKZMD2z_409oOSJNYW0O7i-yhO8TflaYOTizWhLsogO433lxODbVISr2BYzV8lBieeZOMVka5b2xy8TO4Cfi0jT_2msuBUiasIJd0bJN0NZbKfBcBZaw1Ch_ip611iSiZV0yxbVz3IpAwuP1VeBEdxqr6MhilXaBIOMWJOBWK4jF_7yuI_Btzu7k5OZErD50xxs7mFetEwJN5llUnYQs2sPBhEr-RJ7_T9BCN5nWpha4YljFk8EcsyfrD7LhrntYc9T0boqhdqCL0IP7H_HYQaDWf4Hg07_lDLy99dSKi3XlTkes2NvJ_NJKW1R5wmYln-sehp8npRsbe2bL-HHEAfq8IgpGXhVDjKIieOPu4y8wEPi2HeIL9OV-5u55ojr0ejxauUgdaqHDpdfDXZ1P8mWNUb1rpkv0ABVdQQqoLRjnlYF6EGaL2hwJRYSQLW3YNZW8xYvyrSak3teRtffGeTKE-I_XdTHcoYKUcMGSRrv3BTmTKJ1J0X3oEkIW-RtP4n8nEbMcFP7Hrzd3qz-9qLrQJb97W88aEDIqli2zZlrPmTQlwlCr8e6gvzB8OKsRW4tPuB65oo4jAWC34vELjn7-8h5dIJj-y1x7MBr_Rj7UmEk5vlztrkna-VUQBIcwt2cJBoyWcfHlXHKnUH5JL7ExggYg=s500-no?authuser=1`,
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
        state: 'running',
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
        state: 'running',
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
        type: 'shuttlebus',
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
        type: 'shuttlebus',
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
        type: 'shuttlebus',
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
        type: 'shuttlebus',
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
        type: 'shuttlebus',
        name: {
            ko: '건학관',
            en: 'Campus',
        },
        lat: 35.26753755709011,
        lng: 129.080358588741,
        // image: `https://lh3.googleusercontent.com/c9CejXwvda4Q6deonivhym_QlpuN3gNLeJCbY9lVjA-_Azm6VhdCOABigdTGdPsqN-87WcOo_rRUcg_vuYI5AUkEWv8bdPS8r5yOociuXXUgqeHP-_95n4JKwiYkSA-ioMzAtSCkXqbPZJY5LmHZLa_ss1D9aMk6Rk4Fdv8xKaMl_wyjgOdMs4Jpn2mjvKypO72Ez3cuK7BLTpI2D0lQEJ7bsInSoAGqNQavLKK2dxqlhTHTQ9SS61fAJIops0JclgpQCCNDtOLMXsCaUs4EILSSELt9o8joMvPUXumU4_oS89fFv9-ik1_9OoTmLYd2OLZtzVtEveVY7lIkVt2EWavfpgnQ4qkXs7uHyN56chQo4V8CmdMJFGNgnEeZz0NMfg8Fv9oi_Q0lnxpuJkrSiD7HJ-v02aDGDv-qmJJDIH1V413DXzSBh2CuQjLC7txFpZK3pexvexoA8fwK3NRnvRNhSQZYfDa8pjrYSEDGk59eOcRfJb0v-rBsYAYB_x-1SITyx6gQL0t4FYXozYW-5RxPVAYnDc_68Qsc_YkzMF8AeIGx-Exe6O2hOoDidaELQ-UBhMKxoqyAFjsk4vmEhtLn1VeP4AJfN9psjeHkSNzvktgHDvMvs5xgFYry-Uc-CXfK5TgQCGsdHPKiABfMKp3P2xCZihrE5cVf4sYvOJUmUu_pAWCRCdHR9m1qhMkfQI8mPhS482vcrt6w5toFmA5Z_bEQPlNtcXWSn9J39yyDfCuYdEBIP0yhLYKMoPfKr0p-xCYn1tZbDRZgkL7Aq6A-nr_VuPU=s500-no?authuser=1`,
    },
];
export const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return users.map((user) => (Object.assign({}, user)));
});
export const getShuttleStops = () => __awaiter(void 0, void 0, void 0, function* () {
    return shuttleStops.map((shuttlestop) => (Object.assign({}, shuttlestop)));
});
// export const getBusStops = async (): Promise<Array<StationMarker>> => {
// return busStops;
// };
export const postUser = (userInfo, isCurrent, position) => __awaiter(void 0, void 0, void 0, function* () {
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
});
export const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () { });
//# sourceMappingURL=marker.js.map