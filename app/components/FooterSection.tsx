"use client";

import React from "react";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const FooterSection = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#050816]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-lg font-bold text-white">
              {personalData.name.split(" ")[0].charAt(0) + personalData.name.split(" ")[0].slice(1).toLowerCase()}
              <span className="text-gradient">.</span>
            </Link>
            <p className="text-sm text-[#64748b]">
              {personalData.designation} — {personalData.address}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: BsGithub, href: personalData.github },
              { icon: BsLinkedin, href: personalData.linkedIn },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className="text-[#64748b] hover:text-[#00f0ff] transition-colors duration-300"
              >
                <social.icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-[#475569]">
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
