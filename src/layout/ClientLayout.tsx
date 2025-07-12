"use client";
import { useState, useEffect } from "react";
import { Header } from "@/src/layout/Header";
import Sidebar from "@/src/layout/Sidebar";
import Footer from "./Footer";
import { AlertTriangle, X } from "lucide-react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-[70] bg-amber-50 border-b border-amber-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-amber-800">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>Some links might be broken, will be fixed soon</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-amber-100 rounded transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4 text-amber-700" />
        </button>
      </div>
    </div>
  );
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
      <NotificationBanner />
      <div className="max-w-[1440px] mx-auto w-full relative flex flex-col lg:flex-row px-4 sm:px-6 lg:px-6 py-20 sm:py-24 lg:py-38">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="flex-1 px-0 sm:px-4 lg:px-12 overflow-y-auto">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
