"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import blob from "@/public/blob/blob-4.png";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[71] bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={blob}
            alt="Logo"
            width={32}
            height={32}
            className="rounded-lg sm:w-[35px] sm:h-[35px]"
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          className="p-2 flex items-center justify-center  rounded-lg transition-colors duration-200 cursor-pointer lg:hidden"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-gray-500" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-gray-500" />
          )}
        </button>
      </div>
    </nav>
  );
}
