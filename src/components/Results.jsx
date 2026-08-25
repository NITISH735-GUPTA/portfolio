import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  GraduationCap, 
  Code2, 
  Award, 
  TrendingUp, 
  Terminal, 
  Zap, 
  BookOpen,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  FileText
} from 'lucide-react';
import StatCounter from './ui/StatCounter';
import { resultsData } from '../data/portfolioData';

const Results = () => {
  return (
    <section id="results" className="relative py-24 bg-slate-950/80 overflow-hidden border-t border-slate-800/50">
      {/* Background Mesh Glow */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>03. RESULTS & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Track Record of{' '}
            <span className="gradient-text-amber">Academic & Coding Excellence</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Demonstrated consistency in high academic performance, competitive programming benchmarks, and national honours.
          </p>
        </div>

        {/* Top 3 Category Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Academic Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold">
                  Rank 1 • CSE
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-4">Academic Excellence</h3>

              <div className="space-y-3 mb-4">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">Overall CGPA</div>
                  <div className="text-3xl font-extrabold text-white font-mono mt-1">
                    <StatCounter value={9.32} isDecimal={true} />
                  </div>
                  <div className="text-xs text-cyan-400 mt-1 font-medium">Branch Topper</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 font-mono">4th Semester SGPA</div>
                    <div className="text-xl font-extrabold text-white font-mono mt-0.5">
                      <StatCounter value={9.80} isDecimal={true} />
                    </div>
                  </div>
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
              </div>

              {/* Marksheet Verification Action Buttons */}
              <div className="pt-2 grid grid-cols-1 gap-2 text-xs font-mono">
                <a
                  href="https://drive.google.com/file/d/1ZKpL_7thpm1C31anycs3b5lQ5PNpAiS7/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:text-white flex items-center justify-between text-slate-300 transition-all group/link"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View 1st Year Marksheet</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover/link:text-cyan-400" />
                </a>

                <a
                  href="https://drive.google.com/file/d/10nHN1KKoPhtUe3Lgu17YLVeGM7D6_MBH/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:text-white flex items-center justify-between text-slate-300 transition-all group/link"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View 2nd Year Marksheet</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover/link:text-cyan-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Problem Solving & Coding Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-violet-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-mono font-semibold border border-violet-500/20">
                  725+ Problems Solved
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-3">Problem Solving & Coding Profile</h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Demonstrated strong analytical thinking, problem-solving stamina, and data structures & algorithms (DSA) fundamentals through active coding across competitive platforms.
              </p>

              {/* Distinct Key Achievement Highlight Badge */}
              <div className="mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-cyan-500/15 border border-amber-400/30 flex items-start gap-2.5 shadow-sm">
                <Trophy className="w-4.5 h-4.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-amber-200 leading-snug">
                  <strong className="font-bold text-white">Ranked #50</strong> out of 1,521 registered students at the university level on GeeksforGeeks.
                </span>
              </div>

              {/* Platform Links (Ordered: LeetCode -> GeeksforGeeks -> CodeChef -> Codeforces) */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
                <a
                  href="https://leetcode.com/u/nitish735-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 hover:text-white flex items-center justify-between text-slate-300 transition-all group/link"
                >
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    <span>LeetCode</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover/link:text-amber-400" />
                </a>

                <a
                  href="https://www.geeksforgeeks.org/profile/nitishguf5fl?tab=activity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 hover:text-white flex items-center justify-between text-slate-300 transition-all group/link"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>GeeksforGeeks</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover/link:text-emerald-400" />
                </a>

                <a
                  href="https://www.codechef.com/users/nitish_best_51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 hover:text-white flex items-center justify-between text-slate-300 transition-all group/link"
                >
                  <div className="flex items-center gap-2">
                    <Trophy className="w-3.5 h-3.5 text-amber-500" />
                    <span>CodeChef</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover/link:text-amber-500" />
                </a>

                <a
                  href="https://codeforces.com/profile/Nitish_Solve_problem_51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 hover:text-white flex items-center justify-between text-slate-300 transition-all group/link"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-sky-400" />
                    <span>Codeforces</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover/link:text-sky-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Recognitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-semibold">
                National Level
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-heading mb-4">Recognitions</h3>

            <div className="space-y-3">
              {resultsData.recognitions.map((rec, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-sm text-white">{rec.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono">
                      {rec.badge}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {rec.description}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Results;
