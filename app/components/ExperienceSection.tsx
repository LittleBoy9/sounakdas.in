"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/utils/data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-mono text-[#00f0ff] tracking-widest uppercase">
            03 — Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-16"
        >
          Where I&apos;ve <span className="text-gradient">worked</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00f0ff]/30 to-transparent lg:-translate-x-px" />

          <div className="flex flex-col gap-12 lg:gap-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 -translate-x-[7px]">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#050816] border-2 border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)]" />
                  </div>

                  {/* Card */}
                  <div className={`ml-8 lg:ml-0 lg:w-[calc(50%-2rem)] ${isLeft ? "lg:pr-8 lg:text-right" : "lg:pl-8"}`}>
                    <div className="glass-card p-6 lg:p-8 hover:border-[#00f0ff]/20 transition-all duration-500 group">
                      <span className="text-sm font-mono text-[#00f0ff] tracking-wider">
                        {exp.duration.replace(/[()]/g, "")}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-3 group-hover:text-gradient transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-[#94a3b8] mt-2 text-sm">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other half */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
