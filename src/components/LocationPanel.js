import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ModalMap from './ModalMap';

const LocationPanel = ({ mapService }) => {
    const [modalMapOpen, setModalMapOpen] = useState(false);
    const origin = '남산소방서';
    const destination = '학교';

    const openModalMap = (open) => {
        if (open || open == null) {
            setModalMapOpen(true);
        } else {
            setModalMapOpen(false);
        }
    };

    return (
        <>
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
                    <Button key="origin" onClick={openModalMap}>
                        {origin}
                    </Button>
                    <Button key="dest" onClick={openModalMap}>
                        {destination}
                    </Button>
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
            {modalMapOpen && (
                <ModalMap
                    open={modalMapOpen}
                    openModalMap={openModalMap}
                    mapService={mapService}
                />
            )}
        </>
    );
};

export default LocationPanel;
