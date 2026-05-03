import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#2A2A2A] w-full mt-30'>
            <div className='container mx-auto'>
                <div className='text-center text-white pt-20 space-y-4'>
                    <h1 className='text-5xl font-bold'>LibRova</h1>
                    <p className='text-[#b3bab6]'>
                        Your digital library, reimagined. Browse thousands of books, borrow instantly, and read anywhere — all in one place.
                    </p>
                    <div className='flex justify-center flex-col'>
                        <p className='text-[17px]'>Social Links</p>
                        <div className='flex justify-center gap-4 mt-2'>
                            <a href='#' className='text-[#b3bab6] hover:text-white transition-colors text-2xl'>
                                <FaFacebook />
                            </a>
                            <a href='#' className='text-[#b3bab6] hover:text-white transition-colors text-2xl'>
                                <FaInstagram />
                            </a>
                            <a href='#' className='text-[#b3bab6] hover:text-white transition-colors text-2xl'>
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div className='border-t border-[#3a3a3a]'></div>
                    <div className='flex flex-col md:flex-row justify-between text-[#b3bab6] pb-5'>
                        <p>© 2026 LibRova. All rights reserved.</p>
                        <div className='flex flex-row justify-center gap-3 mb-5'>
                            <p className='hover:text-white cursor-pointer transition-colors'>Privacy Policy</p>
                            <p className='hover:text-white cursor-pointer transition-colors'>Terms of Service</p>
                            <p className='hover:text-white cursor-pointer transition-colors'>Cookies</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;