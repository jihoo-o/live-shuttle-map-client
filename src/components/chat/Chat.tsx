import React from 'react';
import styled from 'styled-components';
import { Message, User } from '../../types/map';
import Avatar from '../AvatarComponent';
import ChatBubble from './ChatBubble';

interface ChatProps {
    isOwn: boolean;
    showAvatar: boolean;
    chat: Message;
    onProfileClick?: (user: User) => {};
}

const FlexContainer = styled.div<{ isOwn: boolean }>`
    height: auto;
    display: flex;
    justify-content: ${(props) =>
        props.isOwn === true ? 'flex-end' : 'flex-start'};
    align-items: flex-end;
    margin: 10px;
`;

const Chat = ({ isOwn, showAvatar, chat, onProfileClick }: ChatProps) => (
    <FlexContainer isOwn={isOwn}>
        {showAvatar === true && (
            <Avatar user={chat.user} onClick={onProfileClick} />
        )}
        <ChatBubble
            direction={isOwn ? 'right' : 'left'}
            text={chat.text}
            timestamp={chat.timestamp}
        />
    </FlexContainer>
);

export default Chat;
