import React from 'react';
import Box from '@mui/material/Box';

const ServicePanel = (props) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                padding: '10px',
                margin: '10px',
                border: '1px solid gray',
                borderRadius: '10px',
            }}
        >
            {props.children}
        </Box>
    );
};

export default ServicePanel;
