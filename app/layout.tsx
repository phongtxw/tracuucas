import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Providers from "./providers";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "assets/icons/optin-monster-brands-solid-full.svg",
  },
  openGraph: {
    title: "Tra cứu mã CAS",
    description: "PT coder",
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1JhTsIf-f4OcowUvPv59FDqrZFbXaMDMK",
        secureUrl:
          "https://drive.google.com/uc?export=view&id=1JhTsIf-f4OcowUvPv59FDqrZFbXaMDMK",
        type: "image/jpeg",
        width: 784,
        height: 562,
        alt: "Tra cứu mã CAS",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
