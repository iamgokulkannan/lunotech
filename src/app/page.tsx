"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Experience from "@/components/3d/Experience";
import Header from "@/components/ui/Header";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
//import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollArrow from "@/components/ui/ScrollArrow";

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* 3D Background Experience */}
      <Experience />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <div className="container mx-auto px-4">
          <section ref={sectionRef} className="h-screen flex flex-col items-center justify-center overflow-hidden relative">
            <div className="text-center flex-1 flex flex-col items-center justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, type: "spring", stiffness: 80, damping: 15 }}
                className="text-5xl md:text-7xl font-bold text-white mb-4"
              >
                <motion.span 
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:300%_auto]"
                >
                  LUNO TECH
                </motion.span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 80, damping: 15 }}
                className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
              >
                Exploring the future through innovation and technology
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, type: "spring", stiffness: 80, damping: 15 }}
                className="mt-10 flex justify-center w-full"
              >
                {/*
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all mr-4"
                >
                  Our Work
                </motion.button>
                */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("about")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all"
                >
                  Explore
                </motion.button>
              </motion.div>
            </div>

            {/* Decorative background elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
            </motion.div>

            {/* Scroll Arrow */}
          </section>

          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          {/*<TeamSection />*/}
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
