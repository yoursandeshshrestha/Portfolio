import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandesh Shrestha - Software Engineer",
  description: "Sandesh Shrestha - Software Engineer",
  icons: {
    icon: "/sandesh.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-2xl mx-auto px-6 pt-6 md:px-0 md:pt-20`}
      >
        {children}
      </body>
    </html>
  );
}
