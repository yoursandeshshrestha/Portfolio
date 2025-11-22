import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SocialHoverImage } from "./SocialHoverImage";

interface SocialLink {
  href: string;
  label: string;
  imgSrc?: string;
  imgAlt?: string;
  hoverContent?: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const SocialLinks = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/yoursandeshshrestha",
      label: "GitHub",
      imgSrc: "/social/github.png",
      imgAlt: "GitHub",
    },
    {
      href: "https://linkedin.com/in/sandeshshresthadev",
      label: "LinkedIn",
      imgSrc: "/social/linkedin.png",
      imgAlt: "LinkedIn",
    },
    {
      href: "https://x.com/yoursandeshdev",
      label: "X/Twitter",
      imgSrc: "/social/x.png",
      imgAlt: "X/Twitter",
    },
    {
      href: "/resume/sandesh-shrestha-resume.pdf?v=2",
      label: "Resume",
      imgSrc: "/social/resume.png",
      imgAlt: "Resume",
    },
    {
      href: "#copy-email",
      label: "Copy Email",
      hoverContent: (
        <div className="w-auto h-[40px] flex items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm p-2 min-w-[120px]">
          <span className="text-sm font-mono text-gray-800 select-all">
            {copiedEmail ? "✓ Copied!" : "yoursandeshshrestha@gmail.com"}
          </span>
        </div>
      ),
    },
    {
      href: "#copy-phone",
      label: "Copy Phone",
      hoverContent: (
        <div className="w-auto h-[40px] flex items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm p-2 min-w-[100px]">
          <span className="text-sm font-mono text-gray-800 select-all">
            {copiedPhone ? "✓ Copied!" : "+918597831351"}
          </span>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      className="flex flex-wrap gap-2 sm:gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link, idx) => (
        <motion.div
          key={link.label}
          className="relative"
          onMouseEnter={() => setHovered(link.label)}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.a
            href={link.href.startsWith("#copy-") ? undefined : link.href}
            target={link.href.startsWith("#copy-") ? undefined : "_blank"}
            rel={
              link.href.startsWith("#copy-") ? undefined : "noopener noreferrer"
            }
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors text-xs sm:text-sm flex items-center px-1 sm:px-2 cursor-pointer"
            aria-label={link.label}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            ref={(el) => {
              linkRefs.current[idx] = el;
            }}
            onClick={(e) => {
              if (link.label === "Copy Email") {
                e.preventDefault();
                navigator.clipboard.writeText("yoursandeshshrestha@gmail.com");
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
              } else if (link.label === "Copy Phone") {
                e.preventDefault();
                navigator.clipboard.writeText("+918597831351");
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
              }
            }}
          >
            {link.label}
          </motion.a>
          {link.imgSrc && linkRefs.current[idx] && (
            <SocialHoverImage
              show={hovered === link.label}
              anchorRef={{ current: linkRefs.current[idx] as HTMLElement }}
              imgSrc={link.imgSrc}
              alt={link.imgAlt || link.label}
              width={500}
              height={500}
            />
          )}
          {link.hoverContent && linkRefs.current[idx] && (
            <SocialHoverImage
              show={hovered === link.label}
              anchorRef={{ current: linkRefs.current[idx] as HTMLElement }}
            >
              {link.hoverContent}
            </SocialHoverImage>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
