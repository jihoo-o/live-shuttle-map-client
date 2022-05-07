import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`;

const App = (props) => (
    <>
        <Wrapper>
            <Home />
        </Wrapper>
    </>
);

export default App;
