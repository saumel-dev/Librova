import React from 'react';
import Marquee from 'react-fast-marquee';

const NewArrivalsBooks = () => {
    return (
        <div className='max-w-135 md:max-w-3xl lg:max-w-5xl mt-6 p-3 mx-auto bg-white rounded-xl'>
            <div className='flex'>
                <p className='w-max font-bold text-[#1A1A1A] whitespace-nowrap px-2'>New Arrivals:</p>
                <Marquee>
                    <div className='flex gap-10 font-medium'>
                        <p>Atomic Habit | Special Discount on Memberships...</p>
                        <p>A Brief History of Time | Special Discount on Memberships...</p>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default NewArrivalsBooks;