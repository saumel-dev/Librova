import { Geist, Geist_Mono, Inter } from "next/font/google";
import '@/app/globals.css'
import Navbar from "@/Components/Shared/Navbar";
const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={"h-full antialiased"}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  );
}
