import React, { useCallback, useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * TODO
 * parameter use -> theme 으로 변경
 */

/**
 * @param id -1을 제외한 값을 사용할 수 있음. isSelected가 이미 true인 경우 id가 아닌 '-1'을 반환함
 * @param use Tag 컴포넌트의 스타일을 설정할 수 있음
 */

const Tag = ({ id, text, use, onClick, isSelected }) => {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [color, setColor] = useState(null);
    const [opacity, setOpacity] = useState(null);

    useEffect(() => {
        if (id === '-1') {
            throw new Error(`'-1'은 id로 사용할 수 없습니다.`);
        }
    }, []);

    const handleClick = useCallback(
        (e) => {
            if (onClick) {
                !isSelected ? onClick(id) : onClick('-1');
            } else {
                throw new Error('클릭할 수 없습니다.');
            }
        },
        [onClick, isSelected]
    );

    // useEffect(() => {
    /**
     * 🐛 두번째 렌더링에선 색이 설정되지 않음
     */
    // switch (use) {
    // case 'time':
    //     setBackgroundColor('#FAE1E0');
    //     setColor('#d44c48');
    //     break;
    // case 'name':
    //     setBackgroundColor('#ededeb');
    //     setColor('black');
    //     break;
    // case :
    // setBackgroundColor('#D2E4FB');
    // setColor('#6CA5E2');
    // break;
    // default:
    // throw new Error('지정되지 않은 용도입니다.');
    // }
    // setBackgroundColor('#ededeb');
    // setColor('black');
    // }, []);

    return (
        <div
            css={css`
                display: inline-flex;
                justify-items: center;
                align-items: center;
                padding: 0px 8px;
                height: 24px;
                line-height: 24px;
                font-size: 0.8125rem;
                border-radius: 18px;

                background-color: black;
                color: white;
                ${!isSelected ? `opacity: 0.4` : ''}
            `}
            onClick={handleClick}
        >
            <span
                css={css`
                    height: 24px;
                    overflow: hidden;
                `}
            >
                {text}
            </span>
        </div>
    );
};

export default Tag;
