import React from 'react';
import styled from 'styled-components';
import MarkerCreator from '../assets/marker-creator.png';
import CategoryShuttle from '../assets/category-shuttle.svg';
import CategoryTaxi from '../assets/category-taxi.svg';
import FloatButton from './FloatButton';
import ImageButtonTab from './ImageButtonTab';

const StyledBottomTab = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-itemes: center;
    padding: 0 16%;
    height: 57px;
    width: 100%;
    background-color: white;
    box-shadow: 0px -3px 4px lightgray;
    z-index: 999;
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
            <ImageButtonTab
                img={{
                    url: CategoryShuttle,
                    size: {
                        width: 23,
                        height: 23,
                    },
                }}
                title={'셔틀버스'}
                onClickButton={() => onUpdateService('SHUTTLE')}
            />
            <FloatButton
                img={{
                    url: MarkerCreator,
                    size: {
                        width: 45,
                        height: 60,
                    },
                }}
                onClickButton={handleUpdateCreatingMarker}
            />
            <ImageButtonTab
                img={{
                    url: CategoryTaxi,
                    size: {
                        width: 23,
                        height: 23,
                    },
                }}
                title={'택시'}
                onClickButton={() => onUpdateService('TAXI')}
            />
        </StyledBottomTab>
    );
};

export default BottomTab;
