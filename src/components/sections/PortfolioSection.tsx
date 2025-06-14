"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function TrustedClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const clients = [
    {
      name: "Satta Pai",
      logo: "/images/clients/satta_pai.png",
    },
    {
      name: "Hautees",
      logo: "/images/clients/hautees.png",
    },
    {
      name: "Calverite Entreprises",
      logo: "/images/clients/calverite.png",
    },
    {
      name: "KR Tex",
      logo: "/images/clients/krtex.png",
    },
    {
      name: "Whale",
      logo: "/images/clients/whale.png",
    },
    {
      name: "Anam Cara",
      logo: "/images/clients/anamcara.png",
    },
  ];

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-20 overflow-hidden relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our <span className="text-blue-500">Trusted Clients</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          We're proud to work with industry leaders and innovative companies that trust us with their digital transformation.
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex">
          <motion.div
            className="flex space-x-16 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
                repeatDelay: 0,
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.2,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex space-x-16 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
                repeatDelay: 0,
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-duplicate-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.2,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
