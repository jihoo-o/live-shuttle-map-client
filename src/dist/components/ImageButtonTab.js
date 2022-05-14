import React from 'react';
import styled from 'styled-components';
const StyledImageButtonTab = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Styledbutton = styled.button `
    background: none;
    border: none;
    &:hover {
        cursor: pointer;
    }
`;
const StyledTitle = styled.span `
    font-size: 0.5em;
    color: gray;
    opacity: 0.7;
    margin-top: 1px;
`;
const ImageButtonTab = ({ img, title, onClickButton }) => {
    return (React.createElement(StyledImageButtonTab, null,
        React.createElement(Styledbutton, { onClick: onClickButton },
            React.createElement("img", { src: img.url, width: img.size.width, height: img.size.height, alt: title })),
        React.createElement(StyledTitle, null, title)));
};
export default ImageButtonTab;
//# sourceMappingURL=ImageButtonTab.js.map