import React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Map from './Map';

const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Backdrop = styled('div')`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;

const ModalMap = ({ open, openModalMap, mapService }) => {
    const handleModalClose = () => {
        openModalMap(false);
    };

    return (
        <StyledModal
            // aria-labelledby="unstyled-modal-title"
            // aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleModalClose}
            BackdropComponent={Backdrop}
        >
            <Box
                style={{
                    width: '80%',
                    height: '80%',
                    minWidth: '300px',
                    minHeight: '300px',
                    bgcolor: 'white',
                    borderRadius: '5px',
                    p: 2,
                    px: 4,
                    pb: 3,
                }}
            >
                <Map mapService={mapService} />
            </Box>
        </StyledModal>
    );
};

export default ModalMap;
