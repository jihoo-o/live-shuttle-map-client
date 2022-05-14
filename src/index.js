import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { AuthService } from './dist/api/auth.js';
import { Socket } from './dist/api/socket.js';

const authService = new AuthService(
    process.env.REACT_APP_KAKAO_LOGIN_REST_API_KEY,
    process.env.REACT_APP_KAKAO_LOGIN_API_KEY,
    process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI
);
const socket = Socket;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App socket={socket} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
