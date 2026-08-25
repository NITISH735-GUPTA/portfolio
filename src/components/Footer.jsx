import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050e] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brand Info matching Navbar */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img
                src={personalDetails.profileImage}
                alt={personalDetails.name}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-1">
                Nitish Kumar Gupta
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase -mt-1 font-semibold">
                Full-Stack & AI Developer
              </span>
            </div>
          </a>

          {/* Copyright & Tagline */}
          <div className="text-center text-[11px] text-slate-400">
            © {new Date().getFullYear()} Nitish Kumar Gupta. All rights reserved.
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all hover:-translate-y-1 shadow-md"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
