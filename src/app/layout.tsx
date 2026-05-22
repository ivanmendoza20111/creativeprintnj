import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/basePath";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CreativePrint NJ - Premium Print Shop",
  description:
    "Business cards, stickers, flyers, acrylic signs and more. High quality prints with fast turnaround in Passaic, NJ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href={asset("/favicon-32.png")} />
        <link rel="icon" type="image/png" sizes="16x16" href={asset("/favicon-16.png")} />
        <link rel="apple-touch-icon" href={asset("/apple-icon.png")} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="font-sans text-[#1a1a2e] antialiased">
        {children}
      </body>
    </html>
  );
}
