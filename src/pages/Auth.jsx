import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Auth = ({ authService, onLogin }) => {
    const [searchParams] = useSearchParams();

    useEffect(async () => {
        login();
    }, []);

    const login = async () => {
        const code = searchParams.get('code');
        const ACCESS_TOKEN = await authService.getAuthorizationToken(code);
        await authService.login(ACCESS_TOKEN, onLogin);
    };

    return <h1>⏳...</h1>;
};

export default Auth;
