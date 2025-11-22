import Image from "next/image";
import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const CalendarIcon: React.FC<IconProps> = ({ className = "w-3.5 h-3.5", size = 14 }) => {
  return (
    <Image
      src="/icons/calendar.svg"
      alt="Calendar"
      width={size}
      height={size}
      className={className}
    />
  );
};

export const ArrowUpRightIcon: React.FC<IconProps & { variant?: "white" | "black" }> = ({ 
  className = "w-4 h-4", 
  size = 16,
  variant = "white"
}) => {
  const iconSrc = variant === "black" ? "/icons/arrow-up-right-black.svg" : "/icons/arrow-up-right.svg";
  return (
    <Image
      src={iconSrc}
      alt="Arrow Up Right"
      width={size}
      height={size}
      className={className}
    />
  );
};

export const BookIcon: React.FC<IconProps> = ({ className = "w-3 h-3", size = 12 }) => {
  return (
    <Image
      src="/icons/book.svg"
      alt="Book"
      width={size}
      height={size}
      className={className}
    />
  );
};

export const TimeIcon: React.FC<IconProps> = ({ className = "w-3 h-3", size = 12 }) => {
  return (
    <Image
      src="/icons/time.svg"
      alt="Time"
      width={size}
      height={size}
      className={className}
    />
  );
};

export const LocationIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => {
  return (
    <Image
      src="/icons/location.svg"
      alt="Location"
      width={size}
      height={size}
      className={className}
    />
  );
};

export const PlayIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => {
  return (
    <Image
      src="/icons/play-icon.svg"
      alt="Play"
      width={size}
      height={size}
      className={className}
    />
  );
};

export const PauseIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => {
  return (
    <Image
      src="/icons/pause-icon.svg"
      alt="Pause"
      width={size}
      height={size}
      className={className}
    />
  );
};

export const SearchIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};

export const FilterIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
};

export const XIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
};


export const MenuIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
};

export const ArrowLeftIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 20 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
};

export const CircleIcon: React.FC<IconProps & { fill?: string }> = ({ className = "w-2 h-2", size = 8, fill = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      width={size}
      height={size}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

export const BookOpenIcon: React.FC<IconProps> = ({ className = "w-3 h-3", size = 12 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
};

export const ClockIcon: React.FC<IconProps> = ({ className = "w-3 h-3", size = 12 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

export const LockIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size = 16 }) => {
  return (
    <Image
      src="/icons/lock.svg"
      alt="Lock"
      width={size}
      height={size}
      className={className}
    />
  );
};

