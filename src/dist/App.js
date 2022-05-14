import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Home from './components/Home';
const Wrapper = styled.div `
    height: 100vh;
    width: 100%;
`;
const App = ({ socket }) => {
    const [user, setUser] = useState({
        userId: 'seonhwa123',
        name: '선화',
    });
    const [stomp, setStomp] = useState({
        client: null,
        diactivate: null,
    });
    useEffect(() => {
        if (!user)
            return;
        // 소켓 연결
        const client = new socket('http://220.95.118.174:8080/webSocket');
        const deactivate = client.activate();
        setStomp({
            client,
            deactivate,
        });
        return () => {
            // 연결된 상태 && deactivate()
        };
    }, [user]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Wrapper, null,
            React.createElement(Home, { stomp: stomp }))));
};
export default App;
//# sourceMappingURL=App.js.map