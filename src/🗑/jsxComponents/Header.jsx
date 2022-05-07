import React from 'react';

const Header = ({ userInfo, onLogout }) => {
    return (
        <div>
            <h2>
                {userInfo && userInfo.kakao_account.profile.nickname}님
                안녕하세요
            </h2>
            <p>
                https://www.figma.com/file/TYowh7VWRn6LFwxKrsM6Ub/capstone?node-id=0%3A1
            </p>
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
