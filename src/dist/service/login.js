"use strict";
const login = () => {
    kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/taxi/login',
    });
};
//# sourceMappingURL=login.js.map