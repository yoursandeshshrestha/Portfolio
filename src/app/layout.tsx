import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ClientLayout } from "@/src/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

export const metadata: Metadata = {
  title: "Sandesh Shrestha - Software Engineer",
  description: "Sandesh Shrestha - Software Engineer",
  icons: {
    icon: "/blob/blob-4.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} ${plusJakartaSans.className} bg-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
