import React from 'react';
import styled from 'styled-components';
import FloatButton from './FloatButton';
import ImageButtonTab from './ImageButtonTab';
const StyledBottomTab = styled.div `
    position: relative;
    display: flex;
    justify-content: space-between;
    align-itemes: center;
    padding: 0 16%;
    height: 78px;
    width: 100%;
    background-color: white;
    box-shadow: 0px -3px 4px lightgray;
    z-index: 999;
`;
const BottomTab = ({ onUpdateService, onCreateCreatingMarker, onUpdateProgressIndicator, }) => {
    const handleUpdateCreatingMarker = () => {
        onUpdateProgressIndicator(true);
        onCreateCreatingMarker();
    };
    return (React.createElement(StyledBottomTab, null,
        React.createElement(ImageButtonTab, { img: {
                url: `https://drive.google.com/uc?export=view&id=1RaMX0eGY9853RhnAzu6z0Z6slhcnSswp`,
                size: {
                    width: 30,
                    height: 30,
                },
            }, title: '셔틀버스', onClickButton: () => onUpdateService('SHUTTLE') }),
        React.createElement(FloatButton, { img: {
                url: `https://drive.google.com/uc?export=view&id=1H46zi7G9_YjMJXVhX1RFGKzVFPZ0gbcc`,
                size: {
                    width: 55,
                    height: 75,
                },
            }, onClickButton: handleUpdateCreatingMarker }),
        React.createElement(ImageButtonTab, { img: {
                url: `https://drive.google.com/uc?export=view&id=1rDqtO5L8MeV_8h6UgnRT0umIlGTKe_yC`,
                size: {
                    width: 30,
                    height: 30,
                },
            }, title: '택시', onClickButton: () => onUpdateService('TAXI') })));
};
export default BottomTab;
//# sourceMappingURL=BottomTab.js.map