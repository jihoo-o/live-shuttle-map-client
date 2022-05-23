import React from 'react';
import { User } from '../../types/map';

interface ChatHeaderProps {
    participantList: Array<User>;
    onProfileClick?: (user: User) => {};
}

const ChatHeader = ({ participantList, onProfileClick }: ChatHeaderProps) => (
    <h1>ChatHeader</h1>
);

export default ChatHeader;
