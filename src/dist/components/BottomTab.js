import React from 'react';
import styled from 'styled-components';
const StyledBottomTab = styled.div `
    height: 60px;
    width: 100%;
    background-color: green;
`;
const BottomTab = ({ onUpdateService, onCreateCreatingMarker, onUpdateProgressIndicator, }) => {
    const handleUpdateCreatingMarker = () => {
        onUpdateProgressIndicator(true);
        onCreateCreatingMarker();
    };
    return (React.createElement(StyledBottomTab, null,
        React.createElement("button", { onClick: () => onUpdateService('SHUTTLE') }, "\uC154\uD2C0\uBC84\uC2A4"),
        React.createElement("button", { onClick: handleUpdateCreatingMarker }, "\uB9C8\uCEE4 \uC0DD\uC131"),
        React.createElement("button", { onClick: () => onUpdateService('TAXI') }, "\uD0DD\uC2DC")));
};
export default BottomTab;
//# sourceMappingURL=BottomTab.js.map