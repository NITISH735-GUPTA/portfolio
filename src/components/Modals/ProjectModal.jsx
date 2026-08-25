import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Code, Cpu, GraduationCap } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-panel bg-[#090f1e]/95 rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {project.title}
            </h2>
            <p className="text-slate-400 text-sm mt-1">{project.tagline}</p>
          </div>

          {/* Description */}
          <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Guidance Note if present */}
          {project.guidanceNote && (
            <div className="mb-6 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold font-mono text-cyan-300 block mb-1 uppercase tracking-wider text-[11px]">Academic Guidance & Mentorship</span>
                <span>{project.guidanceNote}</span>
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-3">Key Architecture & Features</h4>
            <div className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 font-semibold text-xs transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
