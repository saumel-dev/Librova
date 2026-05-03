import { Card } from '@heroui/react';
import React from 'react';
import 'animate.css'
const Stats = () => {
    return (
        <div className='max-w-135 md:max-w-3xl lg:max-w-7xl mt-30 p-3 mx-auto rounded-xl'>
            <div className='text-center animate__animated animate__slideInUp gap-10'>
                <h1 className='text-6xl text-center mb-4 '>Stats</h1>
                <div className='flex justify-center items-center gap-4 flex-row flex-wrap'>
                    <Card className="w-70 h-60 bg-[#2A2A2A] hover:-translate-y-1 ease-in-out transition-all duration-300 hover:shadow-lg hover:shadow-black/50 active:scale-95 overflow-hidden" variant="default">
                        <Card.Content className='flex justify-center items-center'>
                            <p className='text-5xl text-white'>24+</p>
                            <Card.Description className='text-xl text-white'>Books Available</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card className="w-70 h-60 bg-[#2A2A2A] hover:-translate-y-1 ease-in-out transition-all duration-300 hover:shadow-lg hover:shadow-black/50 active:scale-95 overflow-hidden" variant="default">
                        <Card.Content className='flex justify-center items-center'>
                            <p className='text-5xl text-white'>5+</p>
                            <Card.Description className='text-xl text-white'>Categories</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card className="w-70 h-60 bg-[#2A2A2A] hover:-translate-y-1 ease-in-out transition-all duration-300 hover:shadow-lg hover:shadow-black/50 active:scale-95 overflow-hidden" variant="default">
                        <Card.Content className='flex justify-center items-center'>
                            <p className='text-5xl text-white'>500+</p>
                            <Card.Description className='text-xl text-white'>Happy Readers</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card className="w-70 h-60 bg-[#2A2A2A] hover:-translate-y-1 ease-in-out transition-all duration-300 hover:shadow-lg hover:shadow-black/50 active:scale-95 overflow-hidden" variant="default">
                        <Card.Content className='flex justify-center items-center'>
                            <p className='text-5xl text-white'>24/7</p>
                            <Card.Description className='text-xl text-white'>Access</Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Stats;