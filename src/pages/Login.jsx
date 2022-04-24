import React from 'react';
import kakaoLogin from '../images/kakao_login_medium_narrow.png';

const Login = ({ authService }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <button
                    style={{
                        border: 'none',
                        background: 'none',
                    }}
                    onClick={() => {
                        if (typeof window !== 'undefined') {
                            window.location.href =
                                authService.getAuthorizationUrl();
                        }
                    }}
                >
                    <img src={kakaoLogin} alt="카카오로그인" />
                </button>
            </div>
        </div>
    );
};

export default Login;
