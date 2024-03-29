import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { createPortal } from "react-dom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Inventory",
  description: "Where i put my components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-[#1f1f1f] ${inter.className} `}>
      <body className={`${inter.className} relative`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
