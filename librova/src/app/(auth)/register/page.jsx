'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from '@heroui/react';
import { Check } from "@gravity-ui/icons";
import Link from 'next/link';
import { authClient } from '@/app/lib/auth-client';
import { useRouter } from 'next/navigation';
import 'animate.css';

const noop = () => { };
const RegistrationPage = () => {
    const router = useRouter();
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        })
        if (error) {
            toast.danger(error.message, {
                actionProps: {
                    children: "",
                    variant: "danger",
                },
                description: "Please try again"
            })
        }
        else {
            toast.success("Account created Successfully", {
                actionProps: {
                    children: "",
                    className: "bg-success text-success-foreground",
                    onPress: noop,
                },
                description: "Login to Enjoy LibRova",
            })
            setTimeout(() => {
                router.push('/login');
            }, 1000);
        }
    }
    return (
        <div className=' min-h-screen w-full flex justify-center items-center'>
            <div className='bg-[#FFFFFF] animate__animated animate__pulse backdrop-blur-md border border-white/20 p-8 rounded-2xl '>
                <Form action={""} className="flex w-75 md:w-96 text-white flex-col gap-4" onSubmit={handleRegister}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label className='text-[#1A1A1A]'>Name</Label>
                        <Input placeholder="Enter your Username" />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className='text-[#1A1A1A]'>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className='text-[#1A1A1A]'>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description className='text-gray-500'>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="image"
                        type="text"
                    >
                        <Label className='text-[#1A1A1A]'>Photo</Label>
                        <Input placeholder="Enter your photo URL" />
                    </TextField>
                    <div className="flex gap-2 justify-center">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                    <p className='text-center text-sm text-[#1A1A1A]'>or</p>
                    <div className='space-y-2 flex flex-col justify-center items-center'>
                        <p className='text-[14px] text-[#1A1A1A]'>Already have an Account? <span className='text-sky-600'><Link href="/login">Login</Link></span></p>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default RegistrationPage;