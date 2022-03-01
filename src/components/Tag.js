import React, { useCallback, useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';

const Tag = ({ text, use, onClick, isSelected }) => {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [color, setColor] = useState(null);
    const [opacity, setOpacity] = useState(null);

    const handleClick = useCallback(() => {
        if (onClick) {
            onClick(text);
        } else {
            throw new Error('클릭할 수 없습니다.');
        }
    }, [onClick]);

    useEffect(() => {
        if (isSelected) {
            setOpacity('1');
        } else {
            setOpacity('0.5');
        }
    }, [isSelected]);

    useEffect(() => {
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

        setBackgroundColor('#ededeb');
        setColor('black');
    }, []);

    return (
        <Chip
            sx={{ backgroundColor, color, opacity }}
            label={text}
            size="small"
            onClick={handleClick}
        />
    );
};

export default Tag;
