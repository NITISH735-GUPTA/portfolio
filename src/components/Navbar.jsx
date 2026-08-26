import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, ChevronRight } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Results', href: '#results', id: 'results' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section Spy logic
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, sectionId) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -75; // Header offset compensation
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'py-3 bg-[#030712] border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img
                src={personalDetails.profileImage}
                alt={personalDetails.name}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-1">
                Nitish Kumar Gupta
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase -mt-1 font-semibold">
                Full-Stack & AI Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-all duration-300 shadow-md hover:shadow-cyan-500/10"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="relative inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400"
              aria-label="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-[#030712] text-white flex flex-col justify-between p-5 md:hidden overflow-y-auto"
            style={{ backgroundColor: '#030712', opacity: 1 }}
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="flex items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-600 p-[1.5px] overflow-hidden">
                  <img
                    src={personalDetails.profileImage}
                    alt={personalDetails.name}
                    className="w-full h-full object-cover rounded-[9px]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm tracking-tight text-white flex items-center gap-1">
                    Nitish Kumar Gupta
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  </span>
                  <span className="text-[9px] text-cyan-400 font-mono tracking-wider uppercase -mt-0.5 font-semibold">
                    Full-Stack & AI Developer
                  </span>
                </div>
              </a>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-cyan-400" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-6 space-y-2 flex-1 flex flex-col justify-center my-auto">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-300 shadow-lg shadow-cyan-500/10'
                      : 'text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-800 space-y-3 shrink-0">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 active:scale-95 transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
