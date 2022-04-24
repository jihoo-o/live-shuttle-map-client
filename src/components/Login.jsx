import React from 'react';

const Login = ({ authService }) => {
    return (
        <h1>
            <a href={authService.getAuthorizationUrl()}>login</a>
        </h1>
    );
};

export default Login;
