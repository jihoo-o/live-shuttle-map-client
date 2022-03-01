import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import BottomTabs from './BottomTabs';
import Header from './Header';
import ModalForm from './ModalForm';

// -> HomeLayout
const ServiceTemplate = (props) => {
    const [open, setOpen] = useState(false);

    const openModalForm = (open) => {
        if (open || open == null) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };

    return (
        <>
            <Header />
            <Outlet />
            <BottomTabs openModalForm={openModalForm} />
            {open && <ModalForm open={open} openModalForm={openModalForm} />}
        </>
    );
};

export default ServiceTemplate;
