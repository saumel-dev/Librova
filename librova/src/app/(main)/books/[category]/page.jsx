import { GetBooksByCategory, GetCategory } from '@/data/books';
import React from 'react';
import LeftSideBar from './LeftSideBar';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/Components/Shared/SearchBar';
import DetailsButton from './DetailsButton';

const BooksPage = async ({ params, searchParams }) => {
    const { category } = await params;
    const { search } = await searchParams;
    const categories = await GetCategory();
    const books = await GetBooksByCategory(category, search);
    return (
        <div className='container mx-auto py-10 px-4'>
            <SearchBar></SearchBar>
            <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start gap-6'>
                <div className='w-auto shrink-0'>
                    <LeftSideBar categories={categories} activeCategory={category}></LeftSideBar>
                </div>
                <div className='flex-1'>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {books.map(book => (
                            <div key={book.id} className='w-60'>
                                <div className='border rounded-xl bg-white p-3'>
                                    <Image
                                        src={book.image_url}
                                        alt={book.title}
                                        className='w-full h-48 object-cover rounded-xl'
                                        width={300}
                                        height={300}
                                    />
                                    <h3 className='font-bold mt-2 text-md'>
                                        {book.title}
                                    </h3>
                                    <DetailsButton bookId={book.id}></DetailsButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BooksPage;