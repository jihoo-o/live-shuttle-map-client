const { kakao } = window;
export const login = () => {
    kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/taxi',
    });
};
//# sourceMappingURL=login.js.map