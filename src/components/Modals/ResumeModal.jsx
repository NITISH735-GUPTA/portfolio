import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, Sparkles } from 'lucide-react';
import { personalDetails, resumeLinks } from '../../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 pt-20 sm:pt-24 pb-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl glass-panel bg-[#090f1e]/98 rounded-3xl border border-slate-700/80 p-4 sm:p-7 shadow-2xl z-10 my-auto overflow-hidden max-h-[calc(100vh-95px)] sm:max-h-[calc(100vh-110px)] flex flex-col text-slate-200"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-800 shrink-0 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={personalDetails.profileImage}
                alt={personalDetails.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-cyan-500/40 shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                  <FileText className="w-3 h-3 shrink-0" /> View Resume
                </span>
                <h2 className="text-base sm:text-2xl font-bold text-white font-heading truncate">{personalDetails.name}</h2>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={resumeLinks.driveView}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <span>Open in Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Close Viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded Google Drive PDF Viewer */}
          <div className="flex-1 w-full min-h-[45vh] sm:min-h-[60vh] rounded-2xl border border-slate-800 overflow-hidden bg-[#030712] relative">
            <iframe
              src={resumeLinks.drivePreview}
              className="w-full h-full min-h-[45vh] sm:min-h-[60vh] border-0"
              title={`${personalDetails.name} Resume`}
              allow="autoplay"
            />
          </div>

          {/* Download & View Action Footer */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="text-xs text-slate-300 font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="hidden sm:inline">Eager to learn, build, and solve real-world problems through software and AI.</span>
              <span className="sm:hidden text-[11px]">B.Tech CSE • Full-Stack & AI Developer</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href={resumeLinks.driveView}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download / Open PDF</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
