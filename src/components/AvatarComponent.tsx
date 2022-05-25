import React from 'react';
import { User } from '../types/map';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

interface AvatarProps {
    user: User;
    onClick?: (user: User) => {};
    showName?: boolean;
}

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Name = styled.span`
    font-size: 1em;
    margin-top: 4px;
`;

const AvatarComponent = ({ user, onClick, showName = false }: AvatarProps) => {
    return (
        <FlexContainer>
            <Avatar
                key={user.userId}
                alt={user.name}
                src={user.image && user.image.url}
                onClick={() => {
                    onClick && onClick(user);
                }}
            />
            {showName && <Name>{user.name}</Name>}
        </FlexContainer>
    );
};

export default AvatarComponent;
