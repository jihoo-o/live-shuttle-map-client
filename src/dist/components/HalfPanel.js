import React, { useState } from 'react';
import styled, { css } from 'styled-components';
const StyledHalfPanel = styled.div `
    ${(props) => props.isRow
    ? css `
                  width: ${() => (props.visible === true ? '100%' : '0')};
                  height: 100%;
              `
    : css `
                  height: ${() => (props.visible === true ? '100%' : '0')};
                  width: 100%;
              `}
    background-color: orange;
    transition: all 1s;
    overflowy: hidden;
`;
const HalfPanel = (props) => {
    const [visible, setVisible] = useState(false);
    return React.createElement(StyledHalfPanel, { isRow: false, visible: visible });
};
export default HalfPanel;
//# sourceMappingURL=HalfPanel.js.map