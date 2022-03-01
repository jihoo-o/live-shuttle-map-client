import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

const BottomTabs = ({ openModalForm }) => {
    // -> BottomNavigation

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="bottomTabs"
                variant="fullWidth"
            >
                <Tab
                    style={{ minWidth: 50 }}
                    icon={<HomeIcon />}
                    aria-label="home"
                />
                <Tab
                    style={{ minWidth: 50 }}
                    icon={<ChatBubbleIcon />}
                    aria-label="chat"
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
                <Tab
                    style={{ minWidth: 50 }}
                    icon={<AccountCircleIcon />}
                    aria-label="person"
                />
                <Tab
                    style={{ minWidth: 50 }}
                    icon={<SettingsIcon />}
                    aria-label="config"
                />
            </Tabs>
        </Box>
    );
};

export default BottomTabs;
