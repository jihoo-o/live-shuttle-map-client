/* eslint-disable import/first */
import axios from 'axios';
const { Kakao } = window;

export class AuthService {
    constructor(
        private kakaoLoginRestApiKey,
        private kakaoLoginSdkKey,
        private redirectUri
    ) {
        Kakao.init(this.kakaoLoginSdkKey);
    }

    getAuthorizationUrl = () => {
        return `https://kauth.kakao.com/oauth/authorize?client_id=${this.kakaoLoginRestApiKey}&redirect_uri=${this.redirectUri}&response_type=code`;
    };

    // 토큰을 받아옴
    // 토큰의 유효 여부(기존 사용자, 신규 회원)에 따라 redirectUri를 다르게 설정함
    // 유효한 토큰 -> Home 페이지 + Kakao.API.request로 가져온 사용자 정보를 state 보관
    // 유효하지 않은 토큰 -> Login 페이지
    getAuthorizationToken = async (code, redirectUri) => {
        const grant_type = 'authorization_code';
        const data = {
            grant_type,
            client_id: this.kakaoLoginRestApiKey,
            redirect_uri: redirectUri || this.redirectUri,
            code,
        };
        const queryString = Object.keys(data)
            .map(
                (k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            )
            .join('&');
        try {
            const token = await axios.post(
                'https://kauth.kakao.com/oauth/token',
                queryString,
                {
                    headers: {
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            );
            return token.data.access_token;
        } catch (e: any) {
            throw new Error(e.message);
        }
    };

    /**
     *
     * @param token getAuthorizationToken에서 발급된 토큰값
     * @param getUserInfo 로그인이 성공했을 때 실행될 콜백함수
     * @param errorCallback 로그인이 실패했을 때 실행될 콜백함수
     */
    login = async (token, getUserInfo, errorCallback) => {
        try {
            Kakao.Auth.setAccessToken(token);
            Kakao.API.request({
                url: '/v2/user/me',
                success: getUserInfo,
                fail:
                    errorCallback ||
                    ((error) => {
                        // 로그인 페이지로 redirect
                        console.log(error);
                    }),
            });
        } catch (e: any) {
            throw new Error(e.message);
        }
    };
}
