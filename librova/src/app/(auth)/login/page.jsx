'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from '@heroui/react';
import { Check } from "@gravity-ui/icons";
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { authClient } from '@/app/lib/auth-client';
const LoginPage = () => {

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            toast.danger("Login Failed", {
                description: error.message || "Invalid email or password.",
            });
            return;
        }
        toast.success("Welcome", {
            description: "You have successfully logged in.",
        });
    }
    const handleLoginGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <div className='bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl'>
                <Form action={""} className="flex w-96 text-white flex-col gap-4" onSubmit={handleLogin}>
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
                        <Label className='text-white'>Email</Label>
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
                        <Label className='text-white'>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description className='text-gray-300'>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                        <div className="flex gap-2 justify-center mt-2">
                            <Button type="submit">
                                <Check />
                                Submit
                            </Button>
                            <Button type="reset" variant="secondary">
                                Reset
                            </Button>
                        </div>
                        <p className='text-center text-sm'>or</p>
                        <div className='space-y-4 flex flex-col justify-center items-center'>
                            <Button onClick={handleLoginGoogle} className="w-70 mx-auto" variant="secondary">
                                <FcGoogle></FcGoogle>
                                Sign in with Google
                            </Button>
                            <p className='text-[14px]'>Dont have an Account? <span className='text-sky-300'><Link href="/register">Register</Link></span></p>
                        </div>
                    </TextField>

                </Form>
            </div>
        </div>
    );
};

export default LoginPage;