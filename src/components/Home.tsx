import React from 'react';
import styled from 'styled-components';
import BottomTab from './BottomTab';
import FloatTab from './FloatTab';
import HalfPanel from './HalfPanel';
import Map from './Map';

const HomeLayout = styled.div<{ isRow: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${(props) => (props.isRow === true ? 'row' : 'column')};
`;

const Home = (props) => (
    <>
        <HomeLayout isRow={false}>
            <Map />
            <HalfPanel />
            <BottomTab />
        </HomeLayout>
        <FloatTab />
    </>
);

export default Home;
