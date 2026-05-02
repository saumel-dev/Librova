import React from 'react';
import Navlink from './Navlink';
import { FiArrowUpRight } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className='bg-[#FFFFFF] max-w-135 md:max-w-3xl lg:max-w-5xl rounded-xl mx-auto'>
            <div className='flex flex-col justify-center items-center py-15 lg:py-25 space-y-4'>
                <div className='italic text-5xl text-center text-[#1A1A1A] space-y-4'>
                    <h1 className='text-[#9B9B9B]'>Your next chapter starts here</h1>
                    <h1 className=''>Find Your Next Read</h1>
                </div>
                <div>
                    <Navlink href="/all-books"><button className='flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-full text-white bg-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 active:scale-95'>Browse Now <FiArrowUpRight></FiArrowUpRight></button></Navlink>
                </div>
            </div>
        </div>
    );
};

export default Banner;