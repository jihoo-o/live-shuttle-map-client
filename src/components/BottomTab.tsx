import React from 'react';
import styled from 'styled-components';

const StyledBottomTab = styled.div`
    height: 60px;
    width: 100%;
    background-color: green;
`;

const BottomTab = ({
    onUpdateService,
    onCreateCreatingMarker,
    onUpdateProgressIndicator,
}) => {
    const handleUpdateCreatingMarker = () => {
        onUpdateProgressIndicator(true);
        onCreateCreatingMarker();
    };

    return (
        <StyledBottomTab>
            <button onClick={() => onUpdateService('SHUTTLE')}>셔틀버스</button>
            <button onClick={handleUpdateCreatingMarker}>마커 생성</button>
            <button onClick={() => onUpdateService('TAXI')}>택시</button>
        </StyledBottomTab>
    );
};

export default BottomTab;
