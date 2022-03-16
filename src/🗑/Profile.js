import { Stack } from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

const Profile = ({ authorized, userInfo }) => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        setAuth(authorized);
    }, [authorized]);
    return (
        <Chip
            avatar={<Avatar alt={userInfo.name || '이름없음'} src="" />}
            label={userInfo.name}
            variant="outlined"
            sx={{
                border: auth ? '1px solid #FDC809' : '',
            }}
        />
    );
};

export default Profile;
