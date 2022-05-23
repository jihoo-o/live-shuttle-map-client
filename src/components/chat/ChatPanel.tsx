import React from 'react';
import { Message, User } from '../../types/map';

interface ChatPanelProps {
    user: User;
    messages: Message;
    onProfileClick?: (user: User) => {};
}

const ChatPanel = ({ user, messages, onProfileClick }) => <h1>ChatPanel</h1>;

export default ChatPanel;
