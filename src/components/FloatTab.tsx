import React from 'react';
import styled from 'styled-components';

const StyledFloatTab = styled.div`
    display: none;
    position: absolute;
    top: 10px;
    left: 10px;
    height: 60px;
    width: 50%;
    background-color: blue;
`;

const FloatTab = (props) => <StyledFloatTab>float tab</StyledFloatTab>;

export default FloatTab;
