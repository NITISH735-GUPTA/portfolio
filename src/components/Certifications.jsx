import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import CertModal from './Modals/CertModal';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="relative py-24 bg-slate-950/80 overflow-hidden border-t border-slate-800/50">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>05. CERTIFICATIONS & HACKATHONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Honors, Credentials &{' '}
            <span className="gradient-text-amber">Competitive Milestones</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Verified certifications from Google, national scholarship recognitions, and competitive hackathon achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-mono font-semibold whitespace-nowrap shrink-0">
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span>{cert.badgeText}</span>
                  </span>

                  {cert.verified && (
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">
                      <ShieldCheck className="w-3 h-3 shrink-0" /> Verified
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-400 font-medium mb-3">
                  Issuer: <span className="text-slate-300">{cert.issuer}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">{cert.status}</span>
                <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Preview <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedCert && (
        <CertModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};

export default Certifications;
