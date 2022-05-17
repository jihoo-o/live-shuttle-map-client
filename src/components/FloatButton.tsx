import React from 'react';
import styled from 'styled-components';
import ImageButtonTab, { ImageButtonTabProps } from './ImageButtonTab';

const StyledFloatButton = styled.div`
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translate(-50%, 0);
`;

const FloatButton = (props: ImageButtonTabProps) => (
    <StyledFloatButton>
        <ImageButtonTab {...props} />
    </StyledFloatButton>
);

export default FloatButton;
