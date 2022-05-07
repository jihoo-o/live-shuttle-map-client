import React, { useEffect } from 'react';
import AccountAvatar from './AccountAvatar';
import AccountButtons from './AccountButtons';

const Account = ({ type, userInfo, closeProfile }) => {
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
                    flexDirection: `${
                        type && type === 'simple' ? 'row' : 'column'
                    }`,
                    justifyContent: `${
                        type && type === 'simple' ? 'flex-start' : 'center'
                    }`,
                    alignItems: 'center',
                }}
            >
                {type && type === 'full' && (
                    <AccountAvatar
                        name={name}
                        iamge={imageUrl}
                        isAuthorized={isAuthorized}
                    />
                )}
                <span style={{}}>{name}</span>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: `${type && type === 'simple' ? '50%' : '0px'}`,
                    transform: `${
                        type && type === 'simple' ? 'translate(0, -50%)' : '0'
                    }`,
                    right: '0px',
                }}
            >
                <AccountButtons type={type} closeProfile={closeProfile} />
            </div>
        </div>
    );
};

export default Account;
