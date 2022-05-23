import React from 'react';
import { Message, User } from '../../types/map';

interface ChatPageProps {
    user: User;
    participantList: Array<User>;
    messages: Array<Message>;
    onProfileClick?: (user: User) => {};
    onCloseClick?: () => {};
    onSubmit?: (text: string) => {};
}

const ChatPage = ({
    user,
    participantList,
    messages,
    onProfileClick,
    onCloseClick,
    onSubmit,
}: ChatPageProps) => <h1>ChatPage</h1>;

export default ChatPage;
