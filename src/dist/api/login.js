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
const { Kakao } = window;
export const login = (token, getUserInfo) => __awaiter(void 0, void 0, void 0, function* () {
    Kakao.init(process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY);
    Kakao.Auth.setAccessToken(token);
    Kakao.API.request({
        url: '/v2/user/me',
        success: getUserInfo,
        fail: (error) => {
            console.log(error);
        },
    });
});
//# sourceMappingURL=login.js.map