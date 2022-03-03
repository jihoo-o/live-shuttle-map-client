/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const receiveStyle = `
color: black;
background: #e5e5ea;
align-self: flex-end;

    &:before {
        left: -7px;
        width: 20px;
        background: #e5e5ea;
        border-bottom-right-radius: 16px 14px;
    }

    &:after {
        left: -26px;
        width: 26px;
        background-color: white;
        border-bottom-right-radius: 10px;
    }
`;

const sendStyle = `
color: white; 
background: #0B93F6;
align-self: flex-end;
    
    &:before {
        right: -7px;
        width: 20px;
        background-color: #0B93F6;
        border-bottom-left-radius: 16px 14px;
    }

    &:after {
        right: -26px;
        width: 26px;
        background-color: white;
        border-bottom-left-radius: 10px;
    }
`;

const Message = ({ ReceiveOrSend, text }) => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        if (!ReceiveOrSend) {
            throw new Error('ReceiveOrSend를 전달해 주세요');
        }
        setRole(ReceiveOrSend);
    }, [ReceiveOrSend]);

    return (
        <p
            css={css`
                font-size: 1em;
                max-width: 255px;
                min-height: 24px;
                word-wrap: break-word;
                margin-bottom: 12px;
                line-height: 24px;
                position: relative;
                padding: 10px 20px;
                border-radius: 25px;

                &:before,
                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    height: 25px;
                }

                ${role === 'receive' && receiveStyle}
                ${role === 'send' && sendStyle}
            `}
        >
            {text}
        </p>
    );
};

export default Message;
