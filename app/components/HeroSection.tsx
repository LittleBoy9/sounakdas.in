"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { personalData } from "@/utils/data/personal-data";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const firstName = personalData.name.split(" ")[0];
  const lastName = personalData.name.split(" ").slice(1).join(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cursor glow */}
      <div
        className="cursor-glow hidden lg:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Background orbs */}
      <motion.div
        className="gradient-orb gradient-orb--cyan absolute top-20 -left-32 w-[500px] h-[500px]"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="gradient-orb gradient-orb--purple absolute bottom-20 -right-32 w-[400px] h-[400px]"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f0ff]/20 bg-[#00f0ff]/5">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
            <span className="text-sm text-[#94a3b8]">Building things on the internet</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            <span className="text-white">{firstName}</span>
            <br />
            <span className="text-gradient">{lastName}</span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg sm:text-xl text-[#94a3b8] font-light tracking-wide"
        >
          Engineer. Builder. Maker.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-4 max-w-2xl mx-auto text-base text-[#64748b] leading-relaxed"
        >
          I design, build, and ship products — from AI-powered platforms to full-stack SaaS. Turning ideas into software that people actually use.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#what-i-build"
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-white font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00f0ff]/20"
          >
            <span className="relative z-10">See What I Build</span>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/10 text-white font-medium text-sm tracking-wide hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            Say Hello
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-14 flex justify-center gap-6"
        >
          {[
            { icon: BsGithub, href: personalData.github, label: "GitHub" },
            { icon: BsLinkedin, href: personalData.linkedIn, label: "LinkedIn" },
          ].map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              aria-label={social.label}
              className="p-3 rounded-full border border-white/10 text-[#94a3b8] hover:text-[#00f0ff] hover:border-[#00f0ff]/30 hover:bg-[#00f0ff]/5 transition-all duration-300"
            >
              <social.icon size={20} />
            </Link>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default HeroSection;
