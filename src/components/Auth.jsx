import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Auth = ({ authService }) => {
    const [searchParams] = useSearchParams();

    useEffect(async () => {
        login();
    }, []);

    const login = async () => {
        const code = searchParams.get('code');
        const ACCESS_TOKEN = await authService.getAuthorizationToken(code);
        await authService.login(ACCESS_TOKEN, (res) => {
            // Home 페이지로 redirect
            console.log(res);
        });
    };

    return <h1>Auth</h1>;
};

export default Auth;
