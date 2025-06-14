"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollArrowProps {
  targetId: string;
}

export default function ScrollArrow({ targetId }: ScrollArrowProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToSection}
      className="hidden md:block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      whileHover={{ y: 10 }}
    >
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </motion.button>
  );
} 