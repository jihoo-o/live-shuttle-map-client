import React from 'react';
import ListItem from '@mui/material/ListItem';
import Account from './Account';

const MarkerItem = ({ markerInfo, handleListItemClick }) => {
    const userInfo = { userId: markerInfo.userId, name: markerInfo.name };
    return (
        <>
            <ListItem
                divider
                sx={{ padding: '5px 16px' }}
                onClick={() => {
                    handleListItemClick(markerInfo.marker);
                }}
            >
                <img
                    src={markerInfo.image}
                    alt="marker"
                    width="65"
                    height="65"
                />
                <Account type="simple" userInfo={userInfo} />
            </ListItem>
        </>
    );
};

export default MarkerItem;
