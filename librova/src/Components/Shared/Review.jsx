import { Card } from '@heroui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import 'animate.css'
const ReviewPage = () => {
    return (
        <div className='max-w-7xl mx-auto mt-30 animate__animated animate__slideInUp'>
            <h1 className='text-[#999999] text-center text-5xl'>What readers say about <span className='text-[#1A1A1A] italic'>the book LibRova</span></h1>
            <div className='flex flex-wrap gap-5 justify-center mt-10'>
                <Card className="w-87.5 h-50 space-y-4" variant="default">
                    <div className='flex'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <Card.Header>
                        <Card.Description className='text-[14px] italic'>
                            I borrowed 'A Brief History of Time' for my physics assignment and finished it in two days. LibRova made it so easy to access. Stephen Hawking's writing is mind-blowing!
                        </Card.Description>
                    </Card.Header>
                    <Card.Content>
                        <p>Sarah Mitchell</p>
                        <p>University Student</p>
                    </Card.Content>
                </Card>

                <Card className="w-87.5 h-50 space-y-4" variant="default">
                    <div className='flex'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <Card.Header>
                        <Card.Description className='text-[14px] italic'>
                            Clean Code and The Pragmatic Programmer in one place? I borrowed both the same evening. My pull requests have never been cleaner. LibRova is a must for every developer.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content>
                        <p>James Okafor</p>
                        <p>Software Engineer</p>
                    </Card.Content>
                </Card>

                <Card className="w-87.5 h-50 space-y-4" variant="default">
                    <div className='flex'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <Card.Header>
                        <Card.Description className='text-[14px] italic'>
                            I borrowed 'To Kill a Mockingbird' for my literature class and my students loved the discussion. LibRova's Story collection is perfect for educators like me.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content>
                        <p>Anika Rahman</p>
                        <p>High School Teacher</p>
                    </Card.Content>
                </Card>

                <Card className="w-87.5 h-50 space-y-4" variant="default">
                    <div className='flex'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <Card.Header>
                        <Card.Description className='text-[14px] italic'>
                            Atomic Habits changed my morning routine completely. I borrowed it from LibRova on a Monday and by Friday I had built 3 new habits. The Self Help section here is gold.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content>
                        <p>Carlos Mendoza</p>
                        <p>Entrepreneur</p>
                    </Card.Content>
                </Card>

                <Card className="w-87.5 h-50 space-y-4" variant="default">
                    <div className='flex'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <Card.Header>
                        <Card.Description className='text-[14px] italic'>
                            I have always wanted to read Dune and Lord of the Rings back to back. LibRova made that dream happen in one click. The Fantasy section kept me up until 3am every night!
                        </Card.Description>
                    </Card.Header>
                    <Card.Content>
                        <p>Emily Chen</p>
                        <p>Graphic Designer</p>
                    </Card.Content>
                </Card>

                <Card className="w-87.5 h-50 space-y-4" variant="default">
                    <div className='flex'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <Card.Header>
                        <Card.Description className='text-[14px] italic'>
                            Sapiens and Cosmos in the same library — I felt like a student again. LibRova's Science collection is thoughtfully curated. Carl Sagan would have approved of this platform.
                        </Card.Description>
                    </Card.Header>
                    <Card.Content>
                        <p>David Thompson</p>
                        <p>Retired Professor</p>
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
};

export default ReviewPage;