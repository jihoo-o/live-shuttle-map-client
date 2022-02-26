import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';

const Tag = ({ text, use }) => {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [color, setColor] = useState(null);

    useEffect(() => {
        switch (use) {
            case 'time':
                setBackgroundColor('#FAE1E0');
                setColor('#d44c48');
                break;
            case 'name':
                setBackgroundColor('#ededeb');
                setColor('black');
                break;
            // case :
            // setBackgroundColor('#D2E4FB');
            // setColor('#6CA5E2');
            // break;
            default:
                throw new Error('지정되지 않은 용도입니다.');
        }
    }, []);

    return <Chip sx={{ backgroundColor, color }} label={text} size="small" />;
};

export default Tag;
