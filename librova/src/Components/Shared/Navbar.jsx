'use client'
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Navlink from "./Navlink";
import Image from "next/image";
import logo from '@/assets/logo.png'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="w-full my-5 nav-text">
            <nav className="sticky max-w-7xl mx-auto top-0 z-40 w-full rounded-full bg-[#30230cb6]/60 shadow backdrop-blur-md">
                <header className="flex h-16 items-center justify-between px-6 text-[14px]">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <div><Link className="no-underline text-xl  nav-text" href='/'>
                        <Image
                        src={logo}
                        alt="logo"
                        width={50}
                        height={50}
                        ></Image>
                        LibRova</Link></div>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                        <li>
                            <Navlink  href="/">Home</Navlink>
                        </li>
                        <li>
                            <Navlink  href="/all-books">All Books</Navlink>
                        </li>
                        <li>
                            <Navlink  href="/profile">My Profile</Navlink>
                        </li>
                    </ul>
                    <div className="flex gap-3">
                        <Navlink href="/login">Login</Navlink >
                        <Navlink href="/register">Register</Navlink >
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            <li>
                                <Navlink href="#" className="block py-2">
                                    All Books
                                </Navlink>
                            </li>
                            <li>
                                <Navlink href="#" className="block py-2">
                                    My Profile
                                </Navlink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;