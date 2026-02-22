"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skillsImage } from "@/utils/skill-image";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next JS", "Typescript", "JS", "HTML", "CSS", "Tailwind", "Bootstrap", "Flutter"],
  },
  {
    title: "Backend",
    skills: ["Node JS", "Fastify", "Python", "Java", "Graphql"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "Docker", "Nginx", "Git", "Ubuntu"],
  },
];

const SkillSection = () => {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />

      {/* Background orb */}
      <div className="gradient-orb gradient-orb--purple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-sm font-mono text-[#00f0ff] tracking-widest uppercase">
            04 — Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-16"
        >
          Technologies I <span className="text-gradient">work with</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-mono text-[#94a3b8] tracking-widest uppercase mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const img = skillsImage(skill);
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="skill-item flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
                    >
                      {img && (
                        <Image
                          src={img.src}
                          alt={skill}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                      )}
                      <span className="text-sm text-[#94a3b8]">{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
