import React from 'react';

const Panel = ({ children }) => (
    <div
        style={{
            width: '100%',
            height: '100%',
        }}
    >
        {children}
    </div>
);

export default Panel;
