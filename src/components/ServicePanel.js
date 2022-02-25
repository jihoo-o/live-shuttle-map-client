import React from 'react';
import Box from '@mui/material/Box';

const ServicePanel = (props) => {
    return <Box sx={{ flexGrow: 1 }}>{props.children}</Box>;
};

export default ServicePanel;
