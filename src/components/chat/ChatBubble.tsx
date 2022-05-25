import React from 'react';
import styled from 'styled-components';

type Direction = 'right' | 'left';

interface ChatBubbleProps {
    direction: Direction;
    text: string;
    timestamp?: number;
}

const StyledChatBubble = styled.div<{ direction: Direction }>`
    margin: 0 9px;
    display: inline-block;
    position: relative;
    width: auto;
    max-width: 65%;
    height: auto;
    background-color: ${(props) =>
        props.direction === 'right' ? '#B5C6DF' : '#f1f1f1'};
    border-radius: 10px;
    padding: 0.7em;
    &:after {
        content: ' ';
        position: absolute;
        ${(props) =>
            props.direction === 'right' ? 'right: -7px;' : 'left: -7px;'}
        bottom: 0;
        width: 0;
        height: 0;
        border: 15px solid;
        border-color: transparent transparent
            ${(props) => (props.direction === 'right' ? '#B5C6DF' : '#f1f1f1')}
            transparent;
    }
`;

const Time = styled.span`
    font-size: 11px;
    color: #b7b7b7;
`;

const ChatBubble = ({ direction, text, timestamp }: ChatBubbleProps) => (
    <>
        {direction === 'right' && <Time>{'오후 8:51'}</Time>}
        <StyledChatBubble direction={direction}>
            <p>{text}</p>
        </StyledChatBubble>
        {direction === 'left' && <Time>{'오후 8:51'}</Time>}
    </>
);

export default ChatBubble;
