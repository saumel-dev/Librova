'use client'
import { authClient } from '@/app/lib/auth-client'; // Ensure correct client import
import { Button, Spinner } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileShow = () => {

    const { data, isPending } = authClient.useSession();
    if (isPending) {
        return <div className='container mx-auto'>
            <div className="flex flex-col items-center gap-2 min-h-screen justify-center">
                <Spinner color="" />
                <span className="text-xs text-muted"></span>
            </div>
        </div>;
    }
    const { user } = data;

    return (
        <div className='mx-auto px-2'>
            <div className='p-30 flex justify-center flex-col items-center rounded-lg shadow-sm bg-white'>
                <div className='flex flex-row gap-6 justify-start'>
                    <div className=''>
                        <h2 className='text-xl font-bold'>UserName: {user.name}</h2>
                        <p className='text-gray-600'>UserEmail: {user.email}</p>
                        <h2>User avatar:</h2>
                        <Image
                            src={user.image}
                            alt={user.name}
                            className="rounded-xl mt-2 border"
                            height={300}
                            width={200}
                        />
                    </div>
                </div>
                <Link href="/profile/update"><Button className="mt-5">Update Profile</Button></Link>
            </div>
        </div>
    );
};

export default ProfileShow;