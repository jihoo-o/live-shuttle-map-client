import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Auth = (props) => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');

    return <h1>{code}</h1>;
};

export default Auth;
