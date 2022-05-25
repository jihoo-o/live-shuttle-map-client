import React from 'react';
import styled from 'styled-components';
import { Message, User } from '../../types/map';
import Chat from './Chat';

interface ChatPanelProps {
    user: User;
    messages: Message;
    onProfileClick?: (user: User) => {};
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 2rem 2rem 0 0;
    padding-top: 20px;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

const ChatPanel = ({ user, messages, onProfileClick }) => {
    const hasProfile = (message) => {
        if (message.user.userId !== user.userId) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <Background>
            {messages &&
                messages.map((message) => (
                    <Chat
                        key={window && window.crypto.randomUUID()}
                        isOwn={message.user.userId === user.userId}
                        showAvatar={hasProfile(message)}
                        chat={message}
                        onProfileClick={onProfileClick}
                    />
                ))}
        </Background>
    );
};

export default ChatPanel;
