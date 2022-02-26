import React from 'react';
import Box from '@mui/material/Box';
import Tag from './Tag';
import Typography from '@mui/material/Typography';
import Profile from './Profile';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import HailIcon from '@mui/icons-material/Hail';

const Chatroom = ({ chatroomInfo }) => {
    const { id, time, user, num_limit, num_curr } = chatroomInfo;

    return (
        <Box>
            <Grid
                container
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
            >
                <Grid item>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Tag text={time} use="time" />
                        </Grid>
                        <Grid item>
                            <Tag
                                text={`${num_curr} / ${num_limit}`}
                                use="name"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">택시 타실 분!</Typography>
                </Grid>
                <Grid item>
                    <Profile authorized={user.authorized} userInfo={user} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Chatroom;
