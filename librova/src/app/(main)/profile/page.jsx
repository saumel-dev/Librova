'use client'
import { Check } from '@gravity-ui/icons';
import { Button, FieldError, Form, Input, Label, TextField, toast } from '@heroui/react';
import { authClient } from '@/app/lib/auth-client';
import React from 'react';
import 'animate.css'
import { useRouter } from 'next/navigation';
const noop = () => { };
const ProfilePage = () => {
    const router = useRouter();
    const handleUpdate = async (e) => {
        e.preventDefault();
        await authClient.updateUser({
            name: e.target.name.value,
            image: e.target.image.value,
        })
        toast.success("Profile Updated Successfully", {
            actionProps: {
                children: "",
                className: "bg-success text-success-foreground",
                onPress: noop,
            },
            description: "Enjoy",
        })
        router.push('/')
    }
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <div className='bg-white animate__animated animate__pulse backdrop-blur-md border border-white/20 p-8 rounded-2xl'>
                <Form action={""} className="flex w-96 text-white flex-col gap-4" onSubmit={handleUpdate}>
                    <h1 className='text-[#1A1A1A] text-center'>Update Your Information</h1>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label className='text-[#1A1A1A]'>Your Name</Label>
                        <Input placeholder="john doe" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="image"
                        type="text"
                    >
                        <Label className='text-[#1A1A1A]'>Photo</Label>
                        <Input placeholder="Enter your photo URL" />
                        <div className="flex gap-2 justify-center mt-2">
                            <Button type="submit">
                                <Check />
                                Submit
                            </Button>
                            <Button type="reset" variant="secondary">
                                Reset
                            </Button>
                        </div>
                    </TextField>

                </Form>
            </div>
        </div >
    );
};

export default ProfilePage;