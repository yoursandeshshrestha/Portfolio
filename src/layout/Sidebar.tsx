"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const sidebarData = [
  {
    title: "About Me",
    items: [
      { label: "Little Introduction", href: "/" },
      { label: "More about me", href: "/more-about-sandesh" },
    ],
  },
  {
    title: "Experience",
    items: [
      { label: "Brief About Experience  ", href: "/", scrollTo: "experience" },
      { label: "Detailed Work Experience", href: "/experience" },
    ],
  },
  {
    title: "Projects",
    items: [
      { label: "Top Projects", href: "/", scrollTo: "projects" },
      { label: "All Projects with Details", href: "/projects" },
    ],
  },

  {
    title: "Articles",
    items: [
      { label: "Top Articles", href: "/", scrollTo: "articles" },
      { label: "All Articles with Details", href: "/articles" },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [openSections, setOpenSections] = useState(() => {
    const initial: { [key: string]: boolean } = {};
    sidebarData.forEach((section) => {
      initial[section.title] = true;
    });
    return initial;
  });
  const pathname = usePathname();

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleLinkClick = () => {
    // Close mobile sidebar when a link is clicked
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white border-r border-gray-200 z-[70] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-24">
          <nav className="space-y-6">
            {sidebarData.map((section) => (
              <div key={section.title}>
                <button
                  className="flex items-center w-full text-left font-semibold text-[16px] text-gray-900 mb-3 focus:outline-none hover:text-gray-700 transition-colors"
                  onClick={() => toggleSection(section.title)}
                >
                  {section.title}
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform text-gray-500 cursor-pointer ${
                      openSections[section.title] ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`${
                    openSections[section.title] ? "block" : "hidden"
                  } space-y-2 ml-2`}
                >
                  {section.items.map((item, index) => (
                    <SidebarLink
                      key={`${section.title}-${item.label}-${index}`}
                      href={item.href || ""}
                      pathname={pathname}
                      label={item.label}
                      onClick={handleLinkClick}
                      scrollTo={(item as { scrollTo?: string }).scrollTo}
                    />
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block sticky top-20 md:top-38 h-[calc(100vh-theme(spacing.20))] md:h-[calc(100vh-theme(spacing.28))] w-60 border-r border-gray-100 pr-2 overflow-y-auto">
        <nav className="space-y-2 ">
          {sidebarData.map((section) => (
            <div key={section.title}>
              <button
                className="flex items-center w-full text-left font-semibold  text-[16px] text-gray-900 mb-2 focus:outline-none"
                onClick={() => toggleSection(section.title)}
              >
                {section.title}
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform text-gray-500 cursor-pointer ${
                    openSections[section.title] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`${
                  openSections[section.title] ? "block" : "hidden"
                } `}
              >
                {section.items.map((item, index) => (
                  <SidebarLink
                    key={`${section.title}-${item.label}-${index}`}
                    href={item.href || ""}
                    pathname={pathname}
                    label={item.label}
                    scrollTo={(item as { scrollTo?: string }).scrollTo}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

function SidebarLink({
  href,
  pathname,
  label,
  mobile = false,
  onClick,
  scrollTo,
}: {
  href: string;
  pathname: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
  scrollTo?: string;
}) {
  // Only mark as active if scrollTo is not set
  const isActive = !scrollTo && pathname === href;

  const handleClick = (e: React.MouseEvent) => {
    if (scrollTo) {
      e.preventDefault();
      const element = document.getElementById(scrollTo);
      if (element) {
        // Add scroll padding for anchor links
        const originalScrollPadding = document.documentElement.style.scrollPaddingTop;
        document.documentElement.style.scrollPaddingTop = '140px';
        
        element.scrollIntoView({ behavior: "smooth" });
        
        // Reset scroll padding after animation
        setTimeout(() => {
          document.documentElement.style.scrollPaddingTop = originalScrollPadding;
        }, 1000);
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className={`flex items-center px-3 py-2 rounded-lg text-[14px] font-normal transition-colors whitespace-nowrap
        ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }
        ${mobile ? "text-xs" : ""}
      `}
      tabIndex={0}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
}
