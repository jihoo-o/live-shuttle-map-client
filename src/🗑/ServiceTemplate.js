import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import BottomTabs from './BottomTabs';
import Header from './Header';
import ModalForm from './ModalForm';
import Box from '@mui/material/Box';

// -> HomeLayout
const ServiceTemplate = (props) => {
    const [modalFormOpen, setModalFormOpen] = useState(false);

    const openModalForm = (open) => {
        if (open || open == null) {
            setModalFormOpen(true);
        } else {
            setModalFormOpen(false);
        }
    };

    return (
        <Box
            css={css`
                height: 200vh;
            `}
        >
            <Header />
            <Outlet />
            <BottomTabs openModalForm={openModalForm} />
            {modalFormOpen && (
                <ModalForm open={modalFormOpen} openModalForm={openModalForm} />
            )}
        </Box>
    );
};

export default ServiceTemplate;
