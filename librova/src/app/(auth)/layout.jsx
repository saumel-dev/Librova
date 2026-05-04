import Footer from '@/Components/Shared/Footer';
import Navbar from '@/Components/Shared/Navbar';
import { Toast } from '@heroui/react';
import { Urbanist } from 'next/font/google';
import React from 'react';

const urbanist = Urbanist({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-urbanist',
    weight: ['300', '400', '700'],
    style: ['normal', 'italic'],
});

const AuthLayout = ({ children }) => {
    return (
        <html>
            <body className={`${urbanist.className}`}>
                <Toast.Provider placement={"top"}></Toast.Provider>
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
};

export default AuthLayout;