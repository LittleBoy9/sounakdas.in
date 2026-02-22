"use client";

import React from "react";
import { motion } from "framer-motion";

const builds = [
  {
    id: 1,
    title: "AI-Powered Platforms",
    description:
      "Building intelligent systems — from face augmentation engines to automated translation pipelines — that process millions of requests and serve 3 lakh+ users at scale.",
    tags: ["OpenAI", "Computer Vision", "NLP", "Whisper"],
  },
  {
    id: 2,
    title: "Full-Stack SaaS Products",
    description:
      "End-to-end product development — authentication, payments, dashboards, APIs. I take an idea from whiteboard to production and handle everything in between.",
    tags: ["Next.js", "NestJS", "Stripe", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Designing infrastructure that doesn't break at scale. Automated deployments, SSL management, container orchestration, and multi-cloud architecture.",
    tags: ["AWS", "GCP", "Docker", "Nginx", "CI/CD"],
  },
  {
    id: 4,
    title: "Developer Tools & Extensions",
    description:
      "Crafting tools that make developers' lives easier — browser extensions, CLI utilities, and internal tooling that saves hours of manual work.",
    tags: ["Chrome Extensions", "React Native", "TypeScript"],
  },
];

const WhatIBuildSection = () => {
  return (
    <section id="what-i-build" className="relative py-24 lg:py-32">
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
            02 — What I Build
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-6"
        >
          Turning ideas into <span className="text-gradient">real products</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#94a3b8] text-base lg:text-lg max-w-2xl mb-16"
        >
          I don&apos;t just code features — I build entire products. Here&apos;s the kind of stuff I work on.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {builds.map((build, i) => (
            <motion.div
              key={build.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-[#00f0ff]/20 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f0ff]/10 to-[#7c3aed]/10 border border-white/5 flex items-center justify-center text-[#00f0ff] font-mono text-sm font-bold shrink-0">
                  {String(build.id).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300 pt-1.5">
                  {build.title}
                </h3>
              </div>

              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 ml-14">
                {build.description}
              </p>

              <div className="flex flex-wrap gap-2 ml-14">
                {build.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-white/5 text-[#64748b] bg-white/[0.02]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuildSection;
