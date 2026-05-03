import { GetBooks } from '@/data/books';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import 'animate.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navlink from './Navlink';
const FeaturedBooks = async () => {
    const books = await GetBooks();
    return (
        <div className='max-w-135 md:max-w-3xl lg:max-w-7xl mx-auto'>
            <div className='mt-6 animate__animated animate__slideInUp flex flex-wrap justify-center items-center gap-4 justify-items-center'>
                {
                    books.slice(4, 8).map(book => (
                        <Card key={book.id} className="hover:-translate-y-2 ease-in-out transition-all duration-300 hover:shadow-lg hover:shadow-black/50 active:scale-95 min-h-90 w-70 overflow-hidden rounded-3xl">
                            {/* Background image */}
                            <Image
                                alt="NEO Home Robot"
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full object-cover"
                                src={book.image_url}
                                width={300}
                                height={300}
                            >
                            </Image>
                            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/30 to-black/80" />
                            <Card.Header className="z-10 text-white">
                                <Card.Title className="text-xl font-bold tracking-wide text-white">
                                    {book.title}
                                </Card.Title>
                                <Card.Description className="text-md leading-5 font-semibold text-white ">
                                    {book.author}
                                </Card.Description>
                                <p className='mt-25'>{book.description}</p>
                            </Card.Header>
                            <Card.Footer className="z-10 mt-auto flex items-center justify-between">
                                <Navlink href={`/books/details/${book.id}`}><Button className="bg-white text-black" size="sm" variant="outline">
                                    View Details
                                </Button></Navlink>
                            </Card.Footer>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedBooks;