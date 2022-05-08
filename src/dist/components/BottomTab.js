import React from 'react';
import styled from 'styled-components';
const StyledBottomTab = styled.div `
    height: 60px;
    width: 100%;
    background-color: green;
`;
const BottomTab = ({ onUpdateService }) => {
    return (React.createElement(StyledBottomTab, null,
        React.createElement("button", { onClick: () => onUpdateService('SHUTTLE') }, "\uC154\uD2C0\uBC84\uC2A4"),
        React.createElement("button", { onClick: () => onUpdateService('TAXI') }, "\uD0DD\uC2DC")));
};
export default BottomTab;
//# sourceMappingURL=BottomTab.js.map