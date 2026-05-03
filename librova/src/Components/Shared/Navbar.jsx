'use client'
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Navlink from "./Navlink";
import Image from "next/image";
import logo from '@/assets/logo.png'
import { authClient, useSession } from "@/app/lib/auth-client";
const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="w-full my-5 nav-text">
            <nav className="max-w-7xl mx-auto top-0 z-40 w-full">
                <header className="flex h-16 items-center justify-between px-6 text-[14px] rounded-full bg-[#F9F7F2] shadow backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                        <div>
                            <Link className="no-underline text-xl text-[#1A1A1A]" href='/'>
                                <Image className="w-15 h-auto object-contain" src={logo} alt="logo" width={50} height={50} />
                                LibRova
                            </Link>
                        </div>
                    </div>

                    <ul className="hidden items-center gap-4 md:flex">
                        <li><Navlink href="/">Home</Navlink></li>
                        <li><Navlink href="/books">All Books</Navlink></li>
                        {user ? <li><Navlink href="/profile">My Profile</Navlink></li> : ""}
                    </ul>

                    <div className="flex gap-3">
                        {user ? (
                            <div className='flex items-center gap-2'>
                                <h2>Hello {user.name}</h2>
                                <Image className="rounded-full" src={user?.image} alt='user' width={40} height={40} />
                                <button onClick={async () => await authClient.signOut()} className='text-[#1A1A1A]'>Logout</button>
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <Navlink href="/register">Register</Navlink>
                                <Navlink href="/login">Login</Navlink>
                            </div>
                        )}
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="md:hidden mt-2 rounded-2xl bg-[#F9F7F2] shadow px-4 py-3">
                        <ul className="flex flex-col gap-2">
                            <li><Navlink href="/" className="block py-2">Home</Navlink></li>
                            <li><Navlink href="/books" className="block py-2">All Books</Navlink></li>
                            {user ? <li><Navlink href="/profile">My Profile</Navlink></li> : ""}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;