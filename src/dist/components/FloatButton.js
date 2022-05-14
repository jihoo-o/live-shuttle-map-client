import React from 'react';
import styled from 'styled-components';
import ImageButtonTab from './ImageButtonTab';
const StyledFloatButton = styled.div `
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, 0);
`;
const FloatButton = (props) => (React.createElement(StyledFloatButton, null,
    React.createElement(ImageButtonTab, Object.assign({}, props))));
export default FloatButton;
//# sourceMappingURL=FloatButton.js.map