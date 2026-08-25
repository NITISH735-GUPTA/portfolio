import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Sparkles, 
  Award, 
  Code2, 
  BrainCircuit, 
  GraduationCap,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import StatCounter from './ui/StatCounter';
import { heroStats, personalDetails } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Glow Mesh Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Profile Avatar Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-600 shadow-xl shadow-cyan-500/20">
            <img
              src={personalDetails.profileImage}
              alt={personalDetails.name}
              className="w-full h-full object-cover rounded-full border-2 border-[#030712]"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#030712] flex items-center justify-center text-[10px] text-black font-bold" title="Available for Internships">
              ✓
            </div>
          </div>
        </motion.div>

        {/* Status Pill Badge (Interactive Button) */}
        <motion.a
          href="https://drive.google.com/file/d/1Fis6xyGderfdDGEDPszpWgDygTP66E7l/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md mb-8 shadow-lg shadow-cyan-500/10 hover:border-cyan-400/80 hover:bg-cyan-500/15 hover:shadow-cyan-400/25 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer group"
          title="View Official INSPIRE Scholar Award"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span>INSPIRE Scholar • Among the Top 1% Students in India</span>
          <ExternalLink className="w-3 h-3 text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
        </motion.a>

        {/* Main Title & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text-shimmer drop-shadow-sm">
              {personalDetails.name}
            </span>
          </h1>

          <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium text-slate-300 font-heading tracking-wide">
            <span className="text-cyan-400">Full-Stack Developer</span>{' '}
            <span className="text-slate-600">|</span>{' '}
            <span className="text-indigo-400">AI/ML Research</span>{' '}
            <span className="text-slate-600">|</span>{' '}
            <span className="text-emerald-400">725+ DSA Problems Solved</span>
          </h2>
        </motion.div>

        {/* Short Highlights Cards */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Third-year <strong className="text-white font-medium">B.Tech CSE student</strong> and{' '}
          <strong className="text-cyan-400 font-medium">AI & Drug Discovery Researcher</strong> with{' '}
          <strong className="text-indigo-400 font-medium">725+ DSA problems solved</strong> across LeetCode and Codeforces. Recognized as an{' '}
          <strong className="text-violet-400 font-medium">INSPIRE Scholar</strong> for academic excellence.
        </motion.p>

        {/* Highlight Bullets Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-300"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>3rd Year B.Tech CSE</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <BrainCircuit className="w-4 h-4 text-indigo-400" />
            <span>AI in Drug Discovery (DST Govt. of India)</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <Code2 className="w-4 h-4 text-violet-400" />
            <span>725+ DSA Problems</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-400" />
            <span>INSPIRE Scholar (Among Top 1%)</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/60 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-sm backdrop-blur-md transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Animated Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-bl-full group-hover:bg-cyan-500/10 transition-colors" />
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </div>
              <div className="mt-1 font-heading text-xs sm:text-sm font-semibold text-slate-300">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-slate-400 font-light truncate">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors text-xs"
          >
            <span>Scroll down</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
