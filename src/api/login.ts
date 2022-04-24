/* eslint-disable import/first */
const { Kakao } = window;

export const login = async (token, getUserInfo) => {
    Kakao.init(process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY);
    Kakao.Auth.setAccessToken(token);

    Kakao.API.request({
        url: '/v2/user/me',
        success: getUserInfo,
        fail: (error) => {
            console.log(error);
        },
    });
};
