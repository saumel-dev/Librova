import { Urbanist } from "next/font/google";
import '@/app/globals.css'
import Navbar from "@/Components/Shared/Navbar";
import { Toast } from '@heroui/react';
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={"h-full antialiased"}
      suppressHydrationWarning={true}
    >
      <body className={`${urbanist.className} min-h-full flex flex-col`}>
        <Navbar></Navbar>
        <Toast.Provider  placement="top"></Toast.Provider>
        {children}

      </body>
    </html>
  );
}
