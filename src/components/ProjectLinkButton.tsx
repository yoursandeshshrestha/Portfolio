import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/src/components/Icons";

interface ProjectLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  hideArrow?: boolean;
}

const ProjectLinkButton: React.FC<ProjectLinkButtonProps> = ({
  href,
  children,
  className,
  hideArrow,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-blue-50 flex items-center gap-2 text-blue-700 px-[16px] py-[8px] rounded-xl font-medium hover:bg-blue-100 transition ${
        className || ""
      }`}
    >
      {children}
      {!hideArrow && <ArrowUpRightIcon className="w-4 h-4" variant="black" />}
    </Link>
  );
};

export default ProjectLinkButton;
