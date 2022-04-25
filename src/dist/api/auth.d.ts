export declare class AuthService {
    private kakaoLoginRestApiKey;
    private kakaoLoginSdkKey;
    private redirectUri;
    constructor(kakaoLoginRestApiKey: any, kakaoLoginSdkKey: any, redirectUri: any);
    getAuthorizationUrl: () => string;
    getAuthorizationToken: (code: any, redirectUri: any) => Promise<any>;
    /**
     *
     * @param token getAuthorizationToken에서 발급된 토큰값
     * @param getUserInfo 로그인이 성공했을 때 실행될 콜백함수
     * @param errorCallback 로그인이 실패했을 때 실행될 콜백함수
     */
    login: (token: any, getUserInfo: any, errorCallback: any) => Promise<void>;
    logout: (handleRedirect: any) => Promise<void>;
}
