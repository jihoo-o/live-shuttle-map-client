import React from 'react';
import Stack from '@mui/material/Stack';
import Tag from './Tag';

const MapCategory = ({ currentCategory, onCategoryChange }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                zIndex: '999',
            }}
        >
            <Stack direction="row" spacing={1}>
                <Tag
                    id="1"
                    text="학교로"
                    onClick={onCategoryChange}
                    isSelected={currentCategory === '1' ? true : false}
                />
                <Tag
                    id="2"
                    text="카페"
                    onClick={onCategoryChange}
                    isSelected={currentCategory === '2' ? true : false}
                />
            </Stack>
        </div>
    );
};

export default MapCategory;
