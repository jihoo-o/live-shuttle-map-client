import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const ServiceLocations = (props) => {
    // two buttons and Fab for switching button

    const origin = '남산소방서';
    const destination = '학교';

    return (
        <Box
            sx={{
                position: 'relative',
                mx: 'auto',
                width: '50%',
                minWidth: '10rem',
                maxWidth: '20rem',
                padding: '10px',
            }}
        >
            <ButtonGroup
                orientation="vertical"
                sx={{
                    width: '100%',
                }}
                size="small"
            >
                <Button key="origin">{origin}</Button>
                <Button key="dest">{destination}</Button>
            </ButtonGroup>
            <IconButton
                sx={{
                    position: 'absolute',
                    right: '-35px',
                    top: '50%',
                    transform: 'translate(0, -50%)',
                }}
            >
                <SwapVertIcon></SwapVertIcon>
            </IconButton>
        </Box>
    );
};

export default ServiceLocations;
