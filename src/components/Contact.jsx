import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  FileText, 
  Sparkles, 
  Linkedin, 
  Github, 
  Code, 
  Terminal, 
  BookOpen, 
  Trophy,
  CheckCircle2,
  Globe,
  Loader2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { personalDetails, socialLinks } from '../data/portfolioData';

const EMAILJS_SERVICE_ID = 'service_vjlc11l';
const EMAILJS_TEMPLATE_ID = 'template_fuy3tko';
const EMAILJS_PUBLIC_KEY = 'P0UeQvJwxctcAru_Y';

const Contact = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Portfolio Contact Inquiry',
      message: formData.message
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Trigger celebration confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 7000);
    } catch (error) {
      console.error("EmailJS Submission Error:", error);
      setErrorMessage(
        error?.text || error?.message || 'Failed to send message. Please email directly at nitish735.gupta@gmail.com'
      );
    } finally {
      setLoading(false);
    }
  };

  const getSocialIcon = (name) => {
    switch (name) {
      case 'LinkedIn': return <Linkedin className="w-5 h-5" />;
      case 'GitHub': return <Github className="w-5 h-5" />;
      case 'LeetCode': return <Code className="w-5 h-5 text-amber-400" />;
      case 'Codeforces': return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'GeeksforGeeks': return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'CodeChef': return <Trophy className="w-5 h-5 text-orange-400" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>06. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Let's Build Something{' '}
            <span className="gradient-text-cyan">Meaningful Together</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Open for AI Research collaboration, Full-Stack Engineering roles, and high-impact project opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Handles (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Contact Details</span>
              </h3>

              {/* Info Items */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {personalDetails.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalDetails.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Phone Number</div>
                    <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {personalDetails.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {personalDetails.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Trigger Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-xs transition-all shadow-md"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Download / Preview Resume</span>
                </button>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Connect across platforms</div>
                <div className="grid grid-cols-3 gap-2">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all text-slate-300 hover:text-white text-xs group"
                    >
                      {getSocialIcon(social.name)}
                      <span className="truncate text-[11px] font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative">
              <h3 className="text-xl font-bold text-white font-heading mb-6">Send Me a Message</h3>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-white font-heading">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Nitish will get back to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Nitish, I came across your AI & drug discovery research work and would love to connect..."
                      className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2 font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-600 text-white font-semibold text-xs shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-cyan-200" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
