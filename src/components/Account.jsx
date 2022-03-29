import React from 'react';
import AccountAvatar from './AccountAvatar';
import AccountButtons from './AccountButtons';

const Account = ({ userInfo, closeProfile }) => {
    const { name, imageUrl, isAuthorized } = userInfo;

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <AccountAvatar
                    name={name}
                    iamge={imageUrl}
                    isAuthorized={isAuthorized}
                />
                <span
                    style={{
                        marginTop: '10px',
                    }}
                >
                    {name}
                </span>
            </div>
            <div style={{ position: 'absolute', top: '0px', right: '0px' }}>
                <AccountButtons closeProfile={closeProfile} />
            </div>
        </div>
    );
};

export default Account;
