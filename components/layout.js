// components/Layout.js
import React from 'react';

const Layout = ({ children, parallelComponent }) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>{children}</div>
            <div style={{ flex: 1 }}>{parallelComponent}</div>
        </div>
    );
};

export default Layout;