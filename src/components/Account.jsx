import React from 'react';
import AccountAvatar from './AccountAvatar';
import AccountButtons from './AccountButtons';

const Account = ({ userInfo }) => (
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
            <AccountAvatar name={'선화'} isAuthorized={true} />
            <span
                style={{
                    marginTop: '10px',
                }}
            >
                선화
            </span>
        </div>
        <div style={{ position: 'absolute', top: '0px', right: '0px' }}>
            <AccountButtons />
        </div>
    </div>
);

export default Account;
