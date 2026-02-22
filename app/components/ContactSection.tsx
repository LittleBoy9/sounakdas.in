"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="section-divider mb-24" />

      {/* Background orbs */}
      <div className="gradient-orb gradient-orb--cyan absolute top-0 -right-64 w-[500px] h-[500px] opacity-10" />
      <div className="gradient-orb gradient-orb--purple absolute bottom-0 -left-64 w-[400px] h-[400px] opacity-10" />

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
            05 — Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-6"
        >
          Let&apos;s <span className="text-gradient">connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#94a3b8] text-base lg:text-lg max-w-xl mb-16"
        >
          Have an idea, a project, or just want to talk? I&apos;m always up for building something interesting together.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-white mb-8">Contact Details</h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b] uppercase tracking-wider">Location</p>
                    <p className="text-[#94a3b8]">{personalData.address}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-4">Connect</p>
                <div className="flex gap-3">
                  {[
                    { icon: BsGithub, href: personalData.github },
                    { icon: BsLinkedin, href: personalData.linkedIn },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      target="_blank"
                      className="p-3 rounded-xl border border-white/5 text-[#94a3b8] hover:text-[#00f0ff] hover:border-[#00f0ff]/30 hover:bg-[#00f0ff]/5 transition-all duration-300"
                    >
                      <social.icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
