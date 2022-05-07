import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface IStyledHalfPanel {
    isRow: boolean;
    visible: boolean;
}

const StyledHalfPanel = styled.div<IStyledHalfPanel>`
    ${(props) =>
        props.isRow
            ? css`
                  width: ${() => (props.visible === true ? '100%' : '0')};
                  height: 100%;
              `
            : css`
                  height: ${() => (props.visible === true ? '100%' : '0')};
                  width: 100%;
              `}
    background-color: orange;
    transition: all 1s;
    overflowy: hidden;
`;

const HalfPanel = (props) => {
    const [visible, setVisible] = useState(false);

    return <StyledHalfPanel isRow={false} visible={visible}></StyledHalfPanel>;
};

export default HalfPanel;
