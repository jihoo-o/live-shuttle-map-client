import React from 'react';
import styled from 'styled-components';

const StyledBottomTab = styled.div`
    height: 60px;
    width: 100%;
    background-color: green;
`;

const BottomTab = ({ onUpdateService }) => {
    return (
        <StyledBottomTab>
            <button onClick={() => onUpdateService('SHUTTLE')}>셔틀버스</button>
            <button onClick={() => onUpdateService('TAXI')}>택시</button>
        </StyledBottomTab>
    );
};

export default BottomTab;
