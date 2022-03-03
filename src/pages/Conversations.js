import React from 'react';
import Box from '@mui/material/Box';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Messages from '../components/Messages';

const chat = [
    {
        id: '1234',
        userId: '1',
        time: '202203031824',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
    },
    {
        id: '1235',
        userId: '2',
        time: '202203031824',
        text: 'Lorem ipsum ',
    },
    {
        id: '1236',
        userId: '1',
        time: '202203031824',
        text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
        id: '1237',
        userId: '2',
        time: '202203031824',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
    },
    {
        id: '1238',
        userId: '2',
        time: '202203031824',
        text: 'Lorem',
    },
    {
        id: '1239',
        userId: '1',
        time: '202203031824',
        text: 'Lorem ipsum dolor sit amet',
    },
    {
        id: '1240',
        userId: '2',
        time: '202203031824',
        text: 'Lorem',
    },
];

const Conversations = ({ userId }) => {
    // chatroomId from query -> chat
    return (
        <Box
            css={css`
                padding: 20px;
            `}
        >
            <Messages chat={chat} me={userId} />
        </Box>
    );
};

export default Conversations;
