import React from 'react';
import { Message } from '../../types/map';

interface ChatProps {
    isOwner: boolean;
    chat: Message;
}

const Chat = ({ isOwner, chat }: ChatProps) => <h1>Chat</h1>;

export default Chat;
