import React from 'react';
import styled from 'styled-components';

const StyledTime = styled.span`
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 999;
    font-size: 0.7em;
    color: gray;
`;

const Time = ({ date }) => (
    <StyledTime>
        {'마지막 업데이트:' +
            `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${
                date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            }:${
                date.getMinutes() < 10
                    ? '0' + date.getMinutes()
                    : date.getMinutes()
            }`}
    </StyledTime>
);

export default Time;
