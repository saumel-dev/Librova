import Navbar from '@/Components/Shared/Navbar';
import { Toast } from '@heroui/react';
import React from 'react';
const AuthLayout = ({ children }) => {
    return (
        <html>
            <body>
                <Toast.Provider placement={"top"}></Toast.Provider>
                {children}
            </body>
        </html>
    );
};

export default AuthLayout;