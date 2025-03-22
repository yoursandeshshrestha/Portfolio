import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sandeshshrestha.tech"),
  title: "Sandesh Shrestha - Software Development Engineer",
  description:
    "Software Development Engineer at Fordel Studio, specializing in full-stack development and team leadership. Experienced in React, Node.js, and cloud technologies.",
  keywords: [
    "Software Development Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Cloud Architecture",
    "Team Leadership",
    "Web Development",
  ],
  creator: "Sandesh Shrestha",
  publisher: "Sandesh Shrestha",
  authors: [{ name: "Sandesh Shrestha" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sandeshshrestha.tech",
    siteName: "Sandesh Shrestha",
    title: "Sandesh Shrestha - Software Development Engineer",
    description:
      "Software Development Engineer at Fordel Studio, specializing in full-stack development and team leadership.",
    images: [
      {
        url: "https://www.sandeshshrestha.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sandesh Shrestha - Software Development Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandesh Shrestha - Software Development Engineer",
    description:
      "Software Development Engineer at Fordel Studio, specializing in full-stack development and team leadership.",
    images: ["https://www.sandeshshrestha.tech/og-image.png"],
    creator: "@yoursandeshshrestha",
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://www.sandeshshrestha.tech",
    languages: {
      "en-US": "https://www.sandeshshrestha.tech",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-xl mt-8 mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
