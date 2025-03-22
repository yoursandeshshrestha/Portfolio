import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sandeshshrestha.tech"),
  title: {
    default: "Sandesh Shrestha - Software Development Engineer",
    template: "%s | Sandesh Shrestha",
  },
  description:
    "Software Development Engineer specializing in full-stack development and team leadership. Expert in React, Node.js, and scalable system architecture.",
  keywords: [
    "Software Development Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Team Lead",
    "System Architecture",
    "TypeScript",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
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
    title: "Sandesh Shrestha - Software Development Engineer",
    description:
      "Software Development Engineer leading a team of 10, specializing in scalable web applications and system architecture.",
    url: "https://www.sandeshshrestha.tech",
    siteName: "Sandesh Shrestha Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sandesh Shrestha - Software Development Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sandeshshrestha",
    creator: "@sandeshshrestha",
    title: "Sandesh Shrestha - Software Development Engineer",
    description:
      "Software Development Engineer specializing in scalable web applications and team leadership.",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
