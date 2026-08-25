import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Building, 
  Sparkles, 
  CheckCircle2, 
  FileCheck, 
  ExternalLink, 
  Microscope, 
  Brain, 
  Pill, 
  BookOpen, 
  Zap, 
  ShieldCheck,
  Calendar,
  MapPin,
  FlaskConical
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#030712] overflow-hidden border-t border-slate-800/40">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02. RESEARCH & INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Research, Innovation &{' '}
            <span className="gradient-text-purple">AI Exploration</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Department of Science & Technology (DST), Govt. of India approved mentorship project and research exploration.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-12">
          {/* Vertical Glowing Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-indigo-500/20" />

          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative md:pl-20"
            >
              {/* Timeline Icon Node */}
              <div className="hidden md:flex absolute left-8 top-0 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#090f1e] border-2 border-cyan-400 items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                {idx === 0 ? <Microscope className="w-6 h-6 text-cyan-400" /> : <FlaskConical className="w-6 h-6 text-indigo-400" />}
              </div>

              {/* Main Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                {/* Top Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
                  <div>
                    {exp.program && (
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.program}</span>
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-indigo-400" />
                        {exp.organization}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-slate-400 font-mono text-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-left md:text-right shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Research Topic Box */}
                {exp.topic && (
                  <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/90 to-slate-900/90 border border-cyan-500/30">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1 font-semibold">Research Topic</span>
                    <h4 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                      "{exp.topic}"
                    </h4>
                  </div>
                )}

                {/* Overview Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Contributions */}
                {exp.keyContributions && (
                  <div className="mb-6 space-y-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Key Contributions</span>
                    {exp.keyContributions.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Achievement Badges */}
                {exp.badges && (
                  <div className="mb-6 pt-4 border-t border-slate-800/80">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">Achievement Badges</span>
                    <div className="flex flex-wrap gap-2">
                      {exp.badges.map((b, bIdx) => (
                        <span
                          key={bIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium hover:border-cyan-500/40 transition-colors"
                        >
                          <Microscope className="w-3.5 h-3.5 text-cyan-400" />
                          {b.text}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Official Evidence Verification Card & Link Button */}
                {exp.evidenceCard && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-xs sm:text-sm">{exp.evidenceCard.title}</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-semibold border border-emerald-500/30">
                            {exp.evidenceCard.status}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {exp.evidenceCard.authority} • {exp.evidenceCard.researchArea}
                        </div>
                      </div>
                    </div>

                    <a
                      href={exp.evidenceCard.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold text-xs shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all shrink-0"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>View DST Approval</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                    </a>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
