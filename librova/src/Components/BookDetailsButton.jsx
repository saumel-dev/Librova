'use client'
import { useSession } from '@/app/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

const BookDetailsButton = ({ bookId }) => {
    const {data: session} = useSession();
    const router = useRouter();
    const handleBookDetails = () => {
        if(session)
        {
            router.push(`/books/details/${bookId}`);
            console.log(session);
            
        }
        else
        {
            router.push('/login')
        }
    }
    return (
        <Button onClick={handleBookDetails} className="bg-white text-black" size="sm" variant="outline">
            View Details
        </Button>
    );
};

export default BookDetailsButton;