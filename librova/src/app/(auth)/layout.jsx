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