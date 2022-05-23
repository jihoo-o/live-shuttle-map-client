import React from 'react';

type Direction = 'right' | 'left';

interface ChatBubbleProps {
    direction: Direction;
    text: string;
}

const ChatBubble = ({ direction, text }: ChatBubbleProps) => (
    <h1>ChatBubble</h1>
);

export default ChatBubble;
