"use client";

import { personalData } from "@/utils/data/personal-data";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Building" },
  { value: "3L+", label: "Users Served" },
  { value: "10+", label: "Products Shipped" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-[#00f0ff] tracking-widest uppercase">
            01 — About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={personalData.profile}
                  width={350}
                  height={350}
                  alt={personalData.name}
                  className="rounded-2xl object-cover transition-all duration-700 grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              I build products that <br className="hidden sm:block" />
              <span className="text-gradient">people actually use</span>
            </h2>

            <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed mb-6">
              I&apos;m a full-stack engineer who thinks like a product builder. I don&apos;t just write code — I ship products. From AI-powered platforms serving hundreds of thousands of users to developer tools and SaaS applications, I go from zero to production.
            </p>
            <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed">
              My stack spans React, Next.js, Node.js, and cloud infrastructure across AWS, GCP, and Azure. But tools are just tools — what drives me is building something people find valuable and shipping it to the world.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-[#64748b] mt-1 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
