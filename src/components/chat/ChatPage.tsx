import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Message, User } from '../../types/map';
import ChatHeader from './ChatHeader';
import ChatPanel from './ChatPanel';
import ChatInput from './ChatInput';

interface ChatPageProps {
    user: User;
    participantList: Array<User>;
    messages?: Array<Message>;
    onProfileClick?: (user: User) => {};
    onCloseClick?: () => {};
    onSubmit?: (text: string) => {};
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #dce0e6;
`;

const ChatPage = ({
    user,
    participantList,
    messages,
    onProfileClick,
    onCloseClick,
    onSubmit,
}: ChatPageProps) => {
    useEffect(() => {
        participantList = participantList.filter(
            (p) => p.userId !== user.userId
        );
    }, [participantList]);

    return (
        <Wrapper>
            <ChatHeader
                participantList={participantList}
                onProfileClick={onProfileClick}
                onCloseClick={onCloseClick}
            />
            <ChatPanel
                user={user}
                messages={messages}
                onProfileClick={onProfileClick}
            />
            <ChatInput onSubmit={onSubmit} />
        </Wrapper>
    );
};

export default ChatPage;
