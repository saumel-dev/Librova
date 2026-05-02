'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import '@/app/globals.css'
const Navlink = ({ href, children, className = "" }) => {
    const pathName = usePathname();
    const isActive = href === "/"
        ? pathName === "/"
        : pathName.startsWith(href);
    return (
        <Link className={`no-underline transition-all duration-200
                ${isActive
                ? "text-black font-bold scale-105"
                : "text-[#848481] hover:text-black"} 
                ${className}`} href={href}>{children}</Link>
    );
};

export default Navlink;