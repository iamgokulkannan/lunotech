"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 min-h-screen flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About <motion.span 
            initial={{ backgroundPosition: "0% 50%" }}
            whileInView={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:300%_auto]"
          >
            Luno Tech
          </motion.span>
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-blue-900/20 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 mb-6">
            At Luno Tech, we're dedicated to pushing the boundaries of what's possible in technology.
            Our mission is to create innovative solutions that transform industries and enhance people's lives.
          </p>
          <p className="text-gray-300">
            Founded in 2024, we've quickly grown into a team of passionate technologists,
            designers, and forward-thinkers who are committed to excellence and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {[
            { title: "Innovation", percentage: 100 },
            { title: "Technology", percentage: 100 },
            { title: "Design", percentage: 100 },
            { title: "User Experience", percentage: 100 },
            { title: "Customer Satisfaction", percentage: 100 },
          ].map((skill) => (
            <div key={skill.title}>
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skill.title}</span>
                <span className="text-blue-400 font-medium">{skill.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Innovation",
              description: "We constantly push boundaries and explore new possibilities",
              icon: (
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mb-4 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              ),
            },
            {
              title: "Excellence",
              description: "We are committed to delivering the highest quality in everything we do",
              icon: (
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mb-4 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ),
            },
            {
              title: "Collaboration",
              description: "We believe in the power of teamwork and partnerships",
              icon: (
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mb-4 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              ),
            },
          ].map((value, index, array) => (
            <div
              key={value.title}
              className={`bg-blue-900/20 backdrop-blur-sm p-4 sm:p-8 rounded-xl border border-blue-500/20 ${
                index === array.length - 1 && array.length % 2 !== 0 ? 'col-span-2 lg:col-span-1' : ''
              }`}
            >
              {value.icon}
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{value.title}</h4>
              <p className="text-sm sm:text-base text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
