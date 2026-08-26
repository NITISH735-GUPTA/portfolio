import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Code, 
  BrainCircuit, 
  GraduationCap, 
  Award, 
  Terminal, 
  Database, 
  Sparkles,
  CheckCircle2,
  Calendar,
  Building2,
  Trophy,
  Microscope,
  Brain,
  TrendingUp,
  Calculator,
  Star,
  ExternalLink,
  FileText
} from 'lucide-react';
import { personalDetails, skillsData, academicTimeline } from '../data/portfolioData';

const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programmingWeb', label: 'Programming & Web' },
    { id: 'aiMlResearch', label: 'AI & Research' },
    { id: 'databasesCloud', label: 'Databases & Cloud' },
    { id: 'analyticsTools', label: 'Analytics & Tools' },
    { id: 'coreConcepts', label: 'CS Fundamentals' },
  ];

  const getFilteredSkills = () => {
    if (activeSkillCategory === 'all') {
      return Object.entries(skillsData).flatMap(([cat, skills]) => skills);
    }
    return skillsData[activeSkillCategory] || [];
  };

  return (
    <section id="about" className="relative py-24 bg-slate-950/60 overflow-hidden border-t border-b border-slate-800/50">
      {/* Glow background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Driven by Passion for{' '}
            <span className="gradient-text-cyan">Code, AI & Innovation</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Exploring the frontiers of Artificial Intelligence, High-Performance Software Engineering, and Competitive Problem Solving.
          </p>
        </div>

        {/* Story & Profile Area Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Profile Card / Avatar Area (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 h-full"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative group overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />
              
              {/* Profile Graphic Frame */}
              <div className="relative mx-auto w-52 h-52 sm:w-60 sm:h-60 mb-6">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-600 animate-spin-slow opacity-80 blur-md" />
                <div className="relative w-full h-full rounded-3xl bg-[#090f1e] p-2 border border-slate-700/80 overflow-hidden flex flex-col items-center justify-center">
                  <img
                    src={personalDetails.profileImage}
                    alt={personalDetails.name}
                    className="w-full h-full object-cover rounded-2xl border border-cyan-500/30 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-center">
                    <span className="font-heading font-bold text-white text-xs block truncate">{personalDetails.name}</span>
                    <span className="text-[10px] text-cyan-400 font-mono block">B.Tech CSE • 9.32 CGPA</span>
                  </div>
                </div>
              </div>

              {/* Status Badges */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://drive.google.com/file/d/1Hu5-pncX-UejrF2KdOTVmj0rkp8S2jnR/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-3.5 gap-1.5 sm:gap-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all text-xs group/lor cursor-pointer"
                  title="View Official Letter of Recommendation by HOD"
                >
                  <span className="text-slate-400 shrink-0 font-medium">HOD Recommendation</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5 break-words group-hover/lor:text-cyan-300 transition-colors text-left sm:text-right">
                    <span className="break-words">1st & 2nd Year Academic Excellence — LOR by HOD</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-cyan-400 group-hover/lor:translate-x-0.5 transition-transform" />
                  </span>
                </a>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-3.5 gap-1.5 sm:gap-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="text-slate-400 shrink-0 font-medium">Scholarship</span>
                  <span className="text-indigo-400 font-semibold break-words text-left sm:text-right">INSPIRE Scholar (Among Top 1%)</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-3.5 gap-1.5 sm:gap-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="text-slate-400 shrink-0 font-medium">DSA Solved</span>
                  <span className="text-violet-400 font-semibold break-words text-left sm:text-right">725+ Problems</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-3.5 gap-1.5 sm:gap-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="text-slate-400 shrink-0 font-medium">Academic Standing</span>
                  <span className="text-amber-400 font-semibold break-words text-left sm:text-right">Branch Topper (9.32)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-full"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white font-heading flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>My Journey & Tech Vision</span>
                </h3>

                <div className="space-y-4">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    I am a <strong className="text-cyan-400 font-medium">third-year B.Tech Computer Science student</strong>, <strong className="text-indigo-400 font-medium">INSPIRE Scholar</strong>, and <strong className="text-violet-400 font-medium">AI Research Intern</strong> with a passion for solving meaningful problems through technology. My journey began with a strong curiosity about how software can transform ideas into real-world impact, which led me to explore programming, data structures, algorithms, and full-stack development.
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Over time, I developed a deep interest in Artificial Intelligence and its applications in scientific research. Through mentorship research projects supported by the <strong className="text-cyan-300 font-medium">Department of Science and Technology (DST), Government of India</strong>, I explored AI-driven approaches for drug discovery, molecular property prediction, and lead optimization. These experiences strengthened my understanding of how emerging technologies can be used to address complex challenges.
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Alongside research, I have solved <strong className="text-violet-400 font-medium">725+ Data Structures and Algorithms problems</strong> across platforms such as LeetCode, Codeforces, CodeChef, and GeeksforGeeks. This consistent practice has sharpened my problem-solving abilities, analytical thinking, and approach to building efficient software systems.
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    My technical interests span <strong className="text-white font-medium">Software Engineering, Artificial Intelligence, Full-Stack Development, and Product Development</strong>. I enjoy transforming ideas into practical applications and continuously expanding my knowledge through projects, research, hackathons, and collaborative learning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Skills Matrix / Interactive Skill Cloud */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">Technical Skills</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Interactive filter matrix of programming languages, web engineering, AI, databases & tools</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveSkillCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeSkillCategory === cat.id
                    ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
          >
            {getFilteredSkills().map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex items-center gap-3 shadow-md hover:shadow-cyan-500/10"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all shrink-0" />
                <span className="font-heading font-semibold text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors leading-snug">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline of Academic Journey */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">Academic Journey</h3>
            <p className="text-xs sm:text-sm text-cyan-300 mt-2 font-medium">
              "A journey of academic excellence, continuous learning, and growth through technology."
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Center Vertical Glowing Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-amber-400 to-indigo-500 -translate-x-1/2" />

            <div className="space-y-12">
              {academicTimeline.map((item, idx) => (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row gap-6 ${
                    idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#090f1e] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/40 z-10">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 px-2">
                    <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative overflow-hidden">
                      {/* Top Header info */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>

                        {item.cgpa && (
                          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold shadow-sm">
                            {item.cgpa}
                          </span>
                        )}

                        {item.score && (
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                            {item.score}
                          </span>
                        )}
                      </div>

                      <h4 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mt-1">
                        {item.title}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 mb-4 font-medium">
                        <Building2 className="w-4 h-4 text-indigo-400" />
                        <span>{item.institution}</span>
                      </div>

                      {/* B.Tech SGPA Grid */}
                      {item.sgpaGrid && (
                        <div className="mb-4 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/90">
                          <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">Semester Performance</div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {item.sgpaGrid.map((s, sIdx) => (
                              <div
                                key={sIdx}
                                className={`p-2 rounded-xl border flex flex-col justify-center ${
                                  s.topper
                                    ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                                    : 'bg-slate-950 border-slate-800 text-slate-300'
                                }`}
                              >
                                <span className="text-[10px] text-slate-400 font-mono">{s.sem}</span>
                                <span className="font-bold font-mono text-sm flex items-center justify-between mt-0.5">
                                  {s.sgpa}
                                  {s.topper && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 inline" />}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* B.Sc Year Scores Grid */}
                      {item.scores && (
                        <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                          {item.scores.map((sc, scIdx) => (
                            <div key={scIdx} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex justify-between items-center">
                              <span className="text-slate-400 font-mono text-[11px]">{sc.label}</span>
                              <span className="font-bold text-cyan-300 font-mono">{sc.val}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Badges List */}
                      {item.badges && (
                        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
                          {item.badges.map((b, bIdx) => {
                            if (b.type === 'inspire') {
                              return (
                                <div
                                  key={bIdx}
                                  className="w-full p-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-indigo-500/20 border border-amber-400/40 text-amber-200 text-xs leading-snug font-medium shadow-lg shadow-amber-500/10 flex items-start gap-2.5"
                                >
                                  <Trophy className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                  <span>{b.text}</span>
                                </div>
                              );
                            }
                            if (b.type === 'gold') {
                              return (
                                <span
                                  key={bIdx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-sm"
                                >
                                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                                  {b.text}
                                </span>
                              );
                            }
                            if (b.type === 'cyan') {
                              return (
                                <span
                                  key={bIdx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-medium"
                                >
                                  <Microscope className="w-3.5 h-3.5 text-cyan-400" />
                                  {b.text}
                                </span>
                              );
                            }
                            if (b.type === 'purple') {
                              return (
                                <span
                                  key={bIdx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-medium"
                                >
                                  <Code className="w-3.5 h-3.5 text-violet-400" />
                                  {b.text}
                                </span>
                              );
                            }
                            return (
                              <span
                                key={bIdx}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                                {b.text}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
