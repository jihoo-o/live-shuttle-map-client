var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable import/first */
import axios from 'axios';
const { Kakao } = window;
export class AuthService {
    constructor(kakaoLoginRestApiKey, kakaoLoginSdkKey, redirectUri) {
        this.kakaoLoginRestApiKey = kakaoLoginRestApiKey;
        this.kakaoLoginSdkKey = kakaoLoginSdkKey;
        this.redirectUri = redirectUri;
        this.getAuthorizationUrl = () => {
            return `https://kauth.kakao.com/oauth/authorize?client_id=${this.kakaoLoginRestApiKey}&redirect_uri=${this.redirectUri}&response_type=code`;
        };
        // 토큰을 받아옴
        // 토큰의 유효 여부(기존 사용자, 신규 회원)에 따라 redirectUri를 다르게 설정함
        // 유효한 토큰 -> Home 페이지 + Kakao.API.request로 가져온 사용자 정보를 state 보관
        // 유효하지 않은 토큰 -> Login 페이지
        this.getAuthorizationToken = (code, redirectUri) => __awaiter(this, void 0, void 0, function* () {
            const grant_type = 'authorization_code';
            const data = {
                grant_type,
                client_id: this.kakaoLoginRestApiKey,
                redirect_uri: redirectUri || this.redirectUri,
                code,
            };
            const queryString = Object.keys(data)
                .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
                .join('&');
            try {
                const token = yield axios.post('https://kauth.kakao.com/oauth/token', queryString, {
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    },
                });
                return token.data.access_token;
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
        /**
         *
         * @param token getAuthorizationToken에서 발급된 토큰값
         * @param getUserInfo 로그인이 성공했을 때 실행될 콜백함수
         * @param errorCallback 로그인이 실패했을 때 실행될 콜백함수
         */
        this.login = (token, getUserInfo, errorCallback) => __awaiter(this, void 0, void 0, function* () {
            try {
                Kakao.Auth.setAccessToken(token);
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: getUserInfo,
                    fail: errorCallback ||
                        ((error) => {
                            // 로그인 페이지로 redirect
                            console.log(error);
                        }),
                });
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
        this.logout = (handleRedirect) => __awaiter(this, void 0, void 0, function* () {
            if (!Kakao.Auth.getAccessToken()) {
                console.log('로그인되지 않은 사용자입니다.');
                return;
            }
            try {
                Kakao.Auth.logout(handleRedirect);
            }
            catch (e) {
                throw new Error(e.message);
            }
        });
        Kakao.init(this.kakaoLoginSdkKey);
    }
}
//# sourceMappingURL=auth.js.map