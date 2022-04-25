import React from 'react';

const Header = ({ userInfo, onLogout }) => {
    return (
        <div>
            <h2>
                {userInfo && userInfo.kakao_account.profile.nickname}님
                안녕하세요
            </h2>
            <button
                style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    zIndex: '999',
                }}
                onClick={onLogout}
            >
                logout
            </button>
        </div>
    );
};

export default Header;
