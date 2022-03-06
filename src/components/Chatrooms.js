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
    {
        id: '7',
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
        id: '8',
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
        id: '9',
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
        id: '10',
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
        id: '11',
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
        id: '12',
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
        id: '13',
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
        id: '14',
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
        id: '15',
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
        id: '16',
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
        id: '17',
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
        id: '18',
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
        id: '19',
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
        id: '20',
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
        id: '21',
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
        id: '22',
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
        id: '23',
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
        id: '24',
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
        id: '25',
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
        id: '26',
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
    // -> Data Grid - Group & Pivot

    return (
        <Box
            sx={{
                flexGrow: 1,
                maxHeight: '80vh',
                overflow: 'scroll',
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
