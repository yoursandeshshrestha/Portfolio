import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Button {
  label: string;
  href: string;
}

interface ButtonGroupProps {
  buttons: Button[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-3 sm:gap-6 mt-8 ">
      {buttons.map((button) => (
        <motion.a
          key={button.label}
          href={button.href}
          className="text-[hsl(var(--muted-foreground))] text-nowrap font-medium py-2 rounded-md text-xs sm:text-[14px] flex items-center justify-center sm:justify-start transition-colors uppercase"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          onHoverStart={() => setHoveredButton(button.label)}
          onHoverEnd={() => setHoveredButton(null)}
        >
          {button.label}
          <motion.div
            initial={{ x: -5, opacity: 0 }}
            animate={{
              x: hoveredButton === button.label ? 0 : -5,
              opacity: hoveredButton === button.label ? 1 : 0,
              marginLeft: hoveredButton === button.label ? "12px" : "8px",
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
};

export default ButtonGroup;
