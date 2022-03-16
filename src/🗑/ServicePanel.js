import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const ServicePanel = (props) => {
    return (
        <Paper
            css={css`
                position: -webkit-sticky;
                position: sticky;
                top: 65px;
                height: 100vh;
                z-index: 3;
            `}
        >
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
        </Paper>
    );
};

export default ServicePanel;
