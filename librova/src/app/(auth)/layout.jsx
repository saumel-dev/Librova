import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '8.8.4.4'])
import Navbar from '@/Components/Shared/Navbar';
import React from 'react';
const AuthLayout = ({ children }) => {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
};

export default AuthLayout;