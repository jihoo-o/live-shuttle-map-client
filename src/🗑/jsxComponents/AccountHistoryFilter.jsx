import React from 'react';
import Chip from '@mui/material/Chip';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const AccountHistoryFilter = (props) => {
    return (
        <div
            style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'space-evenly',
            }}
        >
            <Chip icon={<LocalTaxiIcon />} label="택시" variant="outlined" />
            <Chip
                icon={<DeliveryDiningIcon />}
                label="배달"
                variant="outlined"
            />
            <Chip icon={<MenuBookIcon />} label="스터디" variant="outlined" />
        </div>
    );
};

export default AccountHistoryFilter;
