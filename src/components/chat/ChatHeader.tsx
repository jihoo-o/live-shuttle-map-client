import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { User } from '../../types/map';
import AvatarComponent from '../AvatarComponent';
import AvatarGroup from '@mui/material/AvatarGroup';

interface ChatHeaderProps {
    participantList: Array<User>;
    onProfileClick?: (user: User) => {};
    onCloseClick?: () => {};
}

const FlexContainer = styled.div`
    width: 100%;
    flex-basis: 6rem;
    position: relative;
    display: flex;
    align-items: center;
`;

const ChatHeader = ({
    participantList,
    onProfileClick,
    onCloseClick,
}: ChatHeaderProps) => (
    <FlexContainer>
        <ArrowBackIosNewIcon
            sx={{
                position: 'absolute',
                left: '1rem',
                color: 'white',
                fontSize: '25px',
            }}
            onClick={onCloseClick}
        />
        <AvatarGroup
            max={4}
            sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, 0)',
            }}
        >
            {participantList.map((participant) => (
                <AvatarComponent
                    key={window && window.crypto.randomUUID()}
                    user={participant}
                    onClick={onProfileClick}
                    showName={participantList.length === 1 ? true : false}
                />
            ))}
        </AvatarGroup>
    </FlexContainer>
);

export default ChatHeader;
