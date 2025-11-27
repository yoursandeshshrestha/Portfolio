"use client";
import { useState, useEffect } from "react";
import { Header } from "@/src/layout/Header";
import Sidebar from "@/src/layout/Sidebar";
import Footer from "./Footer";
import { BackgroundMusic } from "@/src/components/BackgroundMusic";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="max-w-[1440px] mx-auto w-full relative flex flex-col lg:flex-row px-4 sm:px-6 lg:px-6 py-20 sm:py-24 lg:py-38">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="flex-1 px-0 sm:px-4 lg:px-12 overflow-y-auto">
          {children}
        </main>
      </div>
      <Footer />
      <BackgroundMusic />
    </>
  );
}
