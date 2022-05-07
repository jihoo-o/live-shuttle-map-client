import React from 'react';
import styled from 'styled-components';
import Home from './components/Home';
const Wrapper = styled.div `
    height: 100vh;
    width: 100%;
`;
const App = (props) => (React.createElement(React.Fragment, null,
    React.createElement(Wrapper, null,
        React.createElement(Home, null))));
export default App;
//# sourceMappingURL=App.js.map