import React from "react";
import { getCurrentYear } from "../utils/dateUtils";

const Footer = () => (
  <footer className="w-full py-2 sm:py-1 text-[11px] sm:text-[12px] text-gray-600">
    <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2 sm:gap-4 px-4">
      <span className="text-center sm:text-left">
        Design system inspired by{" "}
        <a
          href="https://blog.maximeheckel.com/design/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500"
        >
          Maxime Heckel
        </a>
      </span>
      <span>Copyright {getCurrentYear()} © Sandesh Shrestha</span>
    </div>
  </footer>
);

export default Footer;
