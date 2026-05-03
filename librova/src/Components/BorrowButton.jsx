'use client'
import { toast } from '@heroui/react';
import { FiArrowUpRight } from 'react-icons/fi';
const BorrowButton = () => {
    const handleBorrow = () => {
        toast.success("Book borrowd Successfully", {
            actionProps: {
                children: "",
                variant: "success",
            },
            description: "Enjoy LibRova"
        })
    }
    return (
        <button onClick={handleBorrow} className='flex flex-row justify-center items-center gap-2 px-4 mt-4 py-2 rounded-full text-white bg-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 active:scale-95'>Borrow This Book<FiArrowUpRight></FiArrowUpRight></button>
    );
};

export default BorrowButton;