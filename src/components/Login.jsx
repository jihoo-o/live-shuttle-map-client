import React from 'react';
import { login } from '../dist/api/login.js';

const Login = (props) => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI}&response_type=code`;
    return (
        <h1>
            <a href={KAKAO_AUTH_URL}>login</a>
        </h1>
    );
};

export default Login;
