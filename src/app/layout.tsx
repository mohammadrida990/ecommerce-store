import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce  store",
  description: "E-commerce  store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.className} antialiased`}
      >
        <ModalProvider />

        <ToastProvider />

        <div className="flex items-center justify-center bg-sky-200 w-full space-x-2 h-10">
          <span className="text-sm md:text-lg text-gray-500">
            Control Store in the CMS:
          </span>

          <Link
            href="https://ecommerce-admin-six-green.vercel.app/cmb6fpw8200005h3krap4djih"
            target="_blink"
            className="underline text-green-700 hover:text-green-400 text-sm md:text-lg"
          >
            E-Commerce Admin
          </Link>
        </div>

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
