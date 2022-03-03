import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Message from './Message';

const Messages = ({ chat, me }) => (
    <div
        css={css`
            display: flex;
            flex-direction: column;
        `}
    >
        {chat &&
            chat.map(({ id, userId, time, text }) => (
                <Message
                    ReceiveOrSend={userId === me ? 'send' : 'receive'}
                    text={text}
                />
            ))}
    </div>
);

export default Messages;
