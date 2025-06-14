"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Tech visionary with 15+ years of experience in software development and business leadership.",
      image: "https://placehold.co/300x300/0070f3/ffffff?text=Alex",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" },
      ],
    },
    {
      name: "Sophia Chen",
      role: "CTO",
      bio: "Expert in 3D graphics and spatial computing with a background in computer science and mathematics.",
      image: "https://placehold.co/300x300/00bcd4/ffffff?text=Sophia",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "github", url: "#" },
      ],
    },
    {
      name: "Marcus Williams",
      role: "Creative Director",
      bio: "Award-winning designer specializing in UI/UX and immersive experiences for next-gen technologies.",
      image: "https://placehold.co/300x300/673ab7/ffffff?text=Marcus",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "dribbble", url: "#" },
      ],
    },
    {
      name: "Olivia Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in React, Three.js, and WebGL for creating interactive 3D web experiences.",
      image: "https://placehold.co/300x300/ff4081/ffffff?text=Olivia",
      socials: [
        { platform: "linkedin", url: "#" },
        { platform: "github", url: "#" },
      ],
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 min-h-screen flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our <span className="text-blue-500">Team</span>
        </h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-300 mb-12"
        >
          Meet the talented individuals behind 
            Luno Tech who bring creativity,
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-500/20 overflow-hidden group"
          >
            <div className="relative overflow-hidden h-80">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-blue-400">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 text-center"
      >
        <p className="text-gray-300 mb-8">
          We're always looking for talented individuals to join our team.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all">
          Join Our Team
        </button>
      </motion.div>
    </section>
  );
}

// Simple component for social icons
const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "linkedin":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      );
    case "github":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      );
    case "dribbble":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm6.939 4.955a8.451 8.451 0 011.863 5.308c-.272-.054-2.993-.623-5.727-.27-.222-.537-.434-1.03-.675-1.521 2.838-1.14 4.128-2.792 4.539-3.517zm-1.517-1.617c-.344.493-1.6 2.079-4.368 3.277-1.367-2.512-2.883-4.605-3.12-4.93A8.452 8.452 0 0110 1.559c2.042 0 3.92.735 5.422 1.778zM6.73 1.696c.247.29 1.731 2.4 3.12 4.878-3.93 1.045-7.375 1.032-7.708 1.028a8.5 8.5 0 014.588-5.906zM1.558 10l.014-.534c.32.01 4.402.095 8.555-1.199.24.466.467.933.673 1.398-3.71 1.05-5.708 3.91-7.133 6.636A8.447 8.447 0 011.558 10zm5.247 7.733c.868-1.764 3.216-4.02 6.555-5.153a35.65 35.65 0 011.819 6.475 8.461 8.461 0 01-8.374-1.322zm9.144-2.11a33.13 33.13 0 00-1.66-5.947c2.584-.367 4.853.248 5.14.328a8.48 8.48 0 01-3.48 5.62z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
};
