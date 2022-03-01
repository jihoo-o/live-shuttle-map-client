import React, { useCallback, useState } from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import Tag from './Tag';

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

const ModalForm = ({ open, openModalForm, fixedInfo }) => {
    const [location, setLocation] = useState('남산소방서'); // fixed Information
    const [time, setTime] = useState('');
    const [title, setTitle] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!time) {
            window.alert('시간을 선택해주세요');
            return;
        } else if (!title) {
            window.alert('제목을 입력해주세요');
            return;
        } else if (!capacity) {
            window.alert('인원을 선택해주세요');
            return;
        }
        /**
         * 서버로 보냄
         */
        console.log(location, time, title, capacity);
        handleModalClose();
    };

    const handleTimeChange = useCallback((clickedValue) => {
        if (clickedValue === '지금') {
            setTime('-1');
        } else {
            setTime(clickedValue);
        }
    }, []);

    const handleCapacityChange = useCallback((clickedValue) => {
        setCapacity(clickedValue);
    }, []);

    const handleTitleChange = useCallback((event) => {
        setTitle(event.target.value);
    }, []);

    const handleModalClose = () => {
        openModalForm(false);
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
                sx={{
                    width: 400,
                    bgcolor: 'white',
                    borderRadius: '5px',
                    p: 2,
                    px: 4,
                    pb: 3,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <Grid container>
                            <LocationOnIcon style={{ marginRight: '5px' }} />
                            <Tag text={location} use="name" />
                        </Grid>

                        <Grid container>
                            <AccessTimeFilledIcon
                                style={{ marginRight: '5px' }}
                            />
                            <Tag
                                text="지금"
                                use="time"
                                onClick={handleTimeChange}
                                isSelected={time === '-1' ? true : false}
                            />
                            <input
                                type="time"
                                min="08:00"
                                max="20:00"
                                onClick={() => handleTimeChange('1')}
                                required
                                style={{ marginLeft: '5px' }}
                            />
                        </Grid>

                        <Grid container>
                            <TextField
                                required
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </Grid>

                        <Grid container>
                            <PeopleAltIcon style={{ marginRight: '5px' }} />
                            <Tag
                                text="2"
                                use="name"
                                onClick={handleCapacityChange}
                                isSelected={capacity === '2' ? true : false}
                            />
                            <Tag
                                text="3"
                                use="name"
                                onClick={handleCapacityChange}
                                isSelected={capacity === '3' ? true : false}
                            />
                            <span>명</span>
                        </Grid>

                        <Button
                            variant="contained"
                            style={{ maxWidth: '5rem', margin: 'auto' }}
                            onClick={handleSubmit}
                        >
                            완료
                        </Button>
                    </Stack>
                </form>
            </Box>
        </StyledModal>
    );
};

export default ModalForm;
