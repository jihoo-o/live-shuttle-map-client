import React from 'react';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from 'react-router-dom';

const BottomTabs = ({ openModalForm }) => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 999,
                }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction
                        style={{ minWidth: 50 }}
                        icon={<HomeIcon />}
                        aria-label="home"
                        onClick={() => navigate('/home')}
                    />
                    <BottomNavigationAction
                        style={{ minWidth: 50 }}
                        icon={<ChatBubbleIcon />}
                        aria-label="chat"
                        onClick={() => navigate('/conversations/list')}
                    />
                    <Fab
                        size="medium"
                        color="primary"
                        aria-label="add"
                        style={{ margin: '0 1rem 5px 1rem' }}
                        onClick={openModalForm}
                    >
                        <AddIcon />
                    </Fab>
                    <BottomNavigationAction
                        style={{ minWidth: 50 }}
                        icon={<AccountCircleIcon />}
                        aria-label="person"
                    />
                    <BottomNavigationAction
                        style={{ minWidth: 50 }}
                        icon={<SettingsIcon />}
                        aria-label="config"
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
};

export default BottomTabs;
