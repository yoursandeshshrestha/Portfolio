import { useState } from "react";
import { motion } from "framer-motion";

interface SocialLink {
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { href: "https://github.com/yoursandeshshrestha", label: "GitHub" },
  { href: "https://linkedin.com/in/sandeshshresthadev", label: "LinkedIn" },
  { href: "https://x.com/yoursandeshdev", label: "X/Twitter" },
];

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
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yoursandeshshrestha@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <motion.div
      className="flex flex-wrap gap-4 mb-5 md:mb-12 mt-4 md:mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors text-sm min-h-[32px] flex items-center px-2 py-1 -mx-2"
          aria-label={link.label}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.label}
        </motion.a>
      ))}
      <motion.button
        className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors text-sm min-h-[44px] flex items-center px-2 py-1 -mx-2"
        onClick={handleCopyEmail}
        tabIndex={0}
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={
          emailCopied
            ? {
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                backgroundColor: [
                  "transparent",
                  "hsl(var(--muted))",
                  "transparent",
                ],
                transition: {
                  duration: 0.5,
                  times: [0, 0.2, 0.4, 1],
                  ease: "easeInOut",
                },
              }
            : {}
        }
      >
        {emailCopied ? "✓ Copied Email!" : "Copy Email"}
      </motion.button>
    </motion.div>
  );
};
