import React from 'react';

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

const ProfileAvatar = ({ name, image, isAuthorized }) => {
    const normalUser = (
        <Avatar
            alt={name}
            src={image}
            sx={{ width: 90, height: 90, marginBottom: '10px' }}
        >
            {!image && name}
        </Avatar>
    );
    return (
        <>
            {!isAuthorized
                ? normalUser
                : /**
                   * TODO
                   * 학교 뱃지
                   */
                  normalUser}
        </>
    );
};

export default ProfileAvatar;
