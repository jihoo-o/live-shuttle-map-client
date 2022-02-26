import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chatroom from './Chatroom';

const data = [
    {
        id: '1',
        time: '9:00',
        user: {
            name: '김선화',
            authorized: true,
            profile:
                'https://i.picsum.photos/id/520/200/200.jpg?hmac=gq6GVKg64GMqsvk_d6gzXZ7L1htska1jEdgBnAwm4xU',
        },
        num_limit: 3,
        num_curr: 1,
    },
    {
        id: '2',
        time: '9:00',
        user: {
            name: '김선화',
            authorized: true,
            profile:
                'https://i.picsum.photos/id/520/200/200.jpg?hmac=gq6GVKg64GMqsvk_d6gzXZ7L1htska1jEdgBnAwm4xU',
        },
        num_limit: 3,
        num_curr: 1,
    },
    {
        id: '3',
        time: '9:00',
        user: {
            name: '김선화',
            authorized: true,
            profile:
                'https://i.picsum.photos/id/520/200/200.jpg?hmac=gq6GVKg64GMqsvk_d6gzXZ7L1htska1jEdgBnAwm4xU',
        },
        num_limit: 3,
        num_curr: 1,
    },
    {
        id: '4',
        time: '9:00',
        user: {
            name: '김선화',
            authorized: true,
            profile:
                'https://i.picsum.photos/id/520/200/200.jpg?hmac=gq6GVKg64GMqsvk_d6gzXZ7L1htska1jEdgBnAwm4xU',
        },
        num_limit: 3,
        num_curr: 1,
    },
    {
        id: '5',
        time: '9:00',
        user: {
            name: '김선화',
            authorized: true,
            profile:
                'https://i.picsum.photos/id/520/200/200.jpg?hmac=gq6GVKg64GMqsvk_d6gzXZ7L1htska1jEdgBnAwm4xU',
        },
        num_limit: 3,
        num_curr: 1,
    },
    {
        id: '6',
        time: '9:00',
        user: {
            name: '김선화',
            authorized: true,
            profile:
                'https://i.picsum.photos/id/520/200/200.jpg?hmac=gq6GVKg64GMqsvk_d6gzXZ7L1htska1jEdgBnAwm4xU',
        },
        num_limit: 3,
        num_curr: 1,
    },
];

const Chatrooms = (props) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <Stack spacing={1}>
                {data.map((chatroomInfo) => (
                    <Chatroom
                        key={chatroomInfo.id}
                        chatroomInfo={chatroomInfo}
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default Chatrooms;
