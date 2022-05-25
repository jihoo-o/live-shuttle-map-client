import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatPage from './components/chat/ChatPage';
import Home from './components/Home';
import { Message, User } from './types/map';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const App = ({ socket }) => {
    const [user, setUser] = useState<null | User>({
        userId: 'seonhwa123',
        name: '선화',
    });
    const [stomp, setStomp] = useState<any>({
        client: null,
        diactivate: null,
    });

    useEffect(() => {
        if (!user) return;
        const client = new socket('https://2022bufscapstone.kr:8080/webSocket');
        const deactivate = client.activate();
        setStomp({
            client,
            deactivate,
        });

        return () => {
            // 연결된 상태 && deactivate()
        };
    }, [user]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    /**
     * 테스트 데이터
     * 채팅방의 정보로부터 받아오기 때문에 현재 유저가 포함된 값임
     */
    const participantList = [
        {
            userId: '1235',
            name: '제리',
        },
        {
            userId: '1236',
            name: '제리',
        },
        {
            userId: '1237',
            name: '제리',
        },
        {
            userId: '1238',
            name: '제리',
        },
        {
            userId: '1239',
            name: '제리',
        },
        {
            userId: '1240',
            name: '제리',
        },
    ];

    return (
        <>
            <Wrapper>
                <Home stomp={stomp} />
                {/* {user && (
                    <ChatPage
                        user={user}
                        participantList={participantList}
                        messages={[
                            {
                                user,
                                text: '안녕하세요.',
                                timestamp: 1232374672,
                            },
                            {
                                user,
                                text: 'Lorem ipsum dolor sit amet, consectetur adipi',
                                timestamp: 123232344672,
                            },
                            {
                                user: {
                                    userId: '1235',
                                    name: '제리',
                                },
                                text: '??',
                                timestamp: 123232344634272,
                            },
                            {
                                user: {
                                    userId: '1235',
                                    name: '제리',
                                },
                                text: 'a. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                timestamp: 1232323422344672,
                            },
                        ]}
                    />
                )} */}
            </Wrapper>
        </>
    );
};

export default App;
