import React, { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { login } from '../dist/api/login';

const Auth = (props) => {
    const [searchParams] = useSearchParams();
    let ACCESS_TOKEN;

    useEffect(() => {
        getToken();
    }, []);

    const getToken = async () => {
        const code = searchParams.get('code');
        const grant_type = 'authorization_code';
        const data = {
            grant_type,
            client_id: process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY,
            redirect_uri: process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI,
            code,
        };

        const queryString = Object.keys(data)
            .map(
                (k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            )
            .join('&');

        const token = await axios.post(
            'https://kauth.kakao.com/oauth/token',
            queryString,
            {
                headers: {
                    'Content-type':
                        'application/x-www-form-urlencoded;charset=utf-8',
                    // 'application/x-www-form-urlencoded'
                },
            }
        );

        ACCESS_TOKEN = token.data.access_token;
        console.log(ACCESS_TOKEN);

        login(ACCESS_TOKEN, (res) => {
            console.log(res);
        });
    };

    return <h1>Auth</h1>;
};

export default Auth;
