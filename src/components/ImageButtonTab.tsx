import React from 'react';
import styled from 'styled-components';
import { Image } from '../types/map';

export interface ImageButtonTabProps {
    img: Image;
    title?: string;
    onClickButton: any;
}

const StyledImageButtonTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Styledbutton = styled.button`
    background: none;
    border: none;
    &:hover {
        cursor: pointer;
    }
`;

const StyledTitle = styled.span`
    font-size: 0.5em;
    color: gray;
    opacity: 0.7;
    margin-top: 1px;
`;

const ImageButtonTab = ({ img, title, onClickButton }: ImageButtonTabProps) => {
    return (
        <StyledImageButtonTab>
            <Styledbutton onClick={onClickButton}>
                {/* svg */}
                <img
                    style={{
                        imageRendering: '-webkit-optimize-contrast',
                    }}
                    src={img.url}
                    width={img.size.width}
                    height={img.size.height}
                    alt={title}
                />
            </Styledbutton>
            <StyledTitle>{title}</StyledTitle>
        </StyledImageButtonTab>
    );
};

export default ImageButtonTab;
