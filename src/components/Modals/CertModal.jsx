import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, ShieldCheck, Calendar, Building2 } from 'lucide-react';

const CertModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl glass-panel bg-[#090f1e]/95 rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Icon */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                {cert.category}
              </span>
              <h3 className="text-xl font-bold text-white font-heading mt-1">{cert.title}</h3>
            </div>
          </div>

          {/* Certificate Metadata */}
          <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-cyan-400" />
                Issuer / Authority
              </span>
              <span className="font-semibold text-white">{cert.issuer}</span>
            </div>

            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-indigo-400" />
                Date / Status
              </span>
              <span className="font-mono text-cyan-300">{cert.date} • {cert.status}</span>
            </div>

            <div className="flex items-center justify-between text-slate-300">
              <span className="text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Verification Status
              </span>
              <span className="font-medium text-emerald-400 flex items-center gap-1">
                {cert.verified ? 'Verified Official' : 'In Progress'}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-8">
            {cert.description}
          </p>

          {/* Action Link */}
          {cert.credentialUrl && cert.credentialUrl !== '#' && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all"
            >
              <span>{cert.credentialBtnText || 'View Official Credential / Details'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertModal;
