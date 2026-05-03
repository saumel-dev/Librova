import BorrowButton from '@/Components/BorrowButton';
import Navlink from '@/Components/Shared/Navlink';
import { GetBooksById } from '@/data/books';
import { Button, Card, CloseButton, toast } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookDetails = async ({ params }) => {
    const { bookId } = await params;
    const book = await GetBooksById(bookId);
   
    return (
        <div className='container mx-auto px-5'>
            <Card className="flex flex-row justify-center items-center gap-10 flex-wrap">
                <div>
                    <Image
                        alt="Cherries"
                        className=" rounded-2xl "
                        loading="lazy"
                        width={400}
                        height={300}
                        src={book.image_url}
                    />
                </div>
                <div className="flex flex-col gap-3 space-y-4">
                    <Card.Header className="space-y-4">
                        <Card.Title className="text-4xl">{book.title}</Card.Title>
                        <p className='font-bold text-xl'>{book.author}</p>
                        <Card.Description className='text-xl xl:w-200'>
                            {book.description}
                        </Card.Description>
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <p>Available Quantity: {book.available_quantity}</p>
                            <BorrowButton></BorrowButton>
                        </div>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default BookDetails;