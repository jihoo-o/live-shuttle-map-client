import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import BottomTabs from './BottomTabs';
import Header from './Header';
import ModalForm from './ModalForm';

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
        <>
            <Header />
            <Outlet />
            <BottomTabs openModalForm={openModalForm} />
            {modalFormOpen && (
                <ModalForm open={modalFormOpen} openModalForm={openModalForm} />
            )}
        </>
    );
};

export default ServiceTemplate;
