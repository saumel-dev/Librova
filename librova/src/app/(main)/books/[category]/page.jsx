import { GetBooksByCategory, GetCategory } from '@/data/books';
import React from 'react';
import LeftSideBar from './LeftSideBar';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/Components/Shared/SearchBar';

const BooksPage = async ({ params, searchParams }) => {
    const { category } = await params;
    const { search } = await searchParams;
    const categories = await GetCategory();
    const books = await GetBooksByCategory(category, search);
    return (
        <div className='container mx-auto py-10 px-4'>
            <SearchBar></SearchBar>
            <div className='flex gap-6'>
                <div className='w-64 shrink-0'>
                    <LeftSideBar categories={categories} activeCategory={category}></LeftSideBar>
                </div>
                <div className='flex-1'>
                    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {books.map(book => (
                            <div key={book.id} className=''>
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
                                    <Link href={`/books/details/${book.id}`}>
                                        <button className='mt-2 w-full bg-black text-white text-xs py-2 rounded'>
                                            Details
                                        </button>
                                    </Link>
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