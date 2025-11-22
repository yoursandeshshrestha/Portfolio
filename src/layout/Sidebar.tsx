"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarData = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

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
        className={`fixed top-0 left-0 h-full w-80 bg-white z-[70] transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-24">
          <nav className="space-y-1">
            {sidebarData.map((item) => (
              <SidebarLink
                key={item.href}
                href={item.href}
                pathname={pathname}
                label={item.label}
                onClick={handleLinkClick}
              />
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block sticky top-20 md:top-38 h-[calc(100vh-theme(spacing.20))] md:h-[calc(100vh-theme(spacing.28))] w-60 pr-2 overflow-y-auto">
        <nav className="space-y-1">
          {sidebarData.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              pathname={pathname}
              label={item.label}
            />
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
  onClick,
}: {
  href: string;
  pathname: string;
  label: string;
  onClick?: () => void;
}) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-3 py-2 rounded-lg text-[14px] font-normal transition-colors whitespace-nowrap
        ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }
      `}
      tabIndex={0}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
