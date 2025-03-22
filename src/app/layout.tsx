import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sandeshshrestha.tech"),
  icons: {
    icon: "/favicon.png",
  },
  title: {
    default: "SDE - Sandesh Shrestha",
    template: "%s | Sandesh Shrestha",
  },
  description:
    "Sandesh Shrestha, a Software Development Engineer based in India, specializes in building scalable web and backend systems, with expertise in React, Next.js, and backend technologies.",
  openGraph: {
    title: "Sandesh Shrestha - Software Development Engineer",
    description:
      "Explore the professional portfolio, projects, and writings of Sandesh Shrestha, an engineer passionate about performance, scalability, and clean code principles.",
    siteName: "Sandesh Shrestha Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sandesh Shrestha Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sandeshshrestha",
    title: "Sandesh Shrestha - Software Development Engineer",
    description:
      "Follow Sandesh Shrestha's journey in the software development world, where he shares insights on frontend and backend technologies.",
    images: [
      {
        url: "/assets/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Sandesh Shrestha Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sandeshshrestha.tech",
    languages: {
      "en-US": "https://sandeshshrestha.tech/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={(GeistSans.variable, GeistMono.variable)}>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
