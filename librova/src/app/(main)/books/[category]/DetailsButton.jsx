'use client'
import { authClient } from '@/app/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';

const DetailsButton = ({ bookId }) => {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const handleBookDetails = () => {
        if (session) {
            router.push(`/books/details/${bookId}`)
        }
        else {
            router.push('/login')
        }
    }
    return (
        <div>
            <button onClick={handleBookDetails} className='mt-2 w-full bg-black text-white text-xs py-2 rounded'>
                Details
            </button>

        </div>
    );
};

export default DetailsButton;