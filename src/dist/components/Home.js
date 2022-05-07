import React from 'react';
import styled from 'styled-components';
import BottomTab from './BottomTab';
import FloatTab from './FloatTab';
import HalfPanel from './HalfPanel';
import Map from './Map';
const HomeLayout = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) => (props.isRow === true ? 'row' : 'column')};
`;
const Home = (props) => (React.createElement(React.Fragment, null,
    React.createElement(HomeLayout, { isRow: false },
        React.createElement(Map, null),
        React.createElement(HalfPanel, null),
        React.createElement(BottomTab, null)),
    React.createElement(FloatTab, null)));
export default Home;
//# sourceMappingURL=Home.js.map