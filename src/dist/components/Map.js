import React from 'react';
import styled from 'styled-components';
const StyledMap = styled.div `
    height: 100%;
    width: 100%;
    background-color: red;
    transition: all 1s;
`;
const Map = ({ currentService }) => {
    return React.createElement(StyledMap, null, "map");
};
export default Map;
//# sourceMappingURL=Map.js.map