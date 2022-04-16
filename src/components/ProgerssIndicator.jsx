import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ProgerssIndicator = (props) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                left: '0',
                top: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                zIndex: '99',
                backgroundColor: 'rgba(234,234,234,0.5)',
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default ProgerssIndicator;
