import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Database, 
  Cpu, 
  Info,
  CheckCircle2,
  Video,
  GraduationCap
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './Modals/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Innovative Systems &{' '}
            <span className="gradient-text-cyan">Full-Stack AI Products</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Architecting intelligent web platforms and automated tools combining software engineering with AI research.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative"
            >
              {/* Top Card Banner Graphic */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-b from-slate-900/90 to-transparent border-b border-slate-800/80">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                    <Sparkles className="w-3 h-3" />
                    {project.category}
                  </span>

                  {project.statusBadge ? (
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 font-semibold shadow-sm">
                      {project.statusBadge}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium">{project.tagline}</p>
              </div>

              {/* Main Content Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-grow">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Feature Bullets */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Core Features</div>
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Institutional Guidance Note */}
                {project.guidanceNote && (
                  <div className="pt-2">
                    <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 text-[11px] text-slate-300 leading-relaxed font-sans shadow-inner flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold font-mono text-cyan-300 block mb-1 uppercase tracking-wider text-[10px]">Academic Guidance & Mentorship</span>
                        <span>{project.guidanceNote}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className={`p-6 sm:p-8 bg-slate-900/60 border-t border-slate-800/80 flex flex-wrap items-center ${
                !project.github && !project.demo ? 'justify-center' : 'justify-between'
              } gap-4`}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Info className="w-4 h-4" />
                  <span>View Details & Architecture</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
                    >
                      {project.isVideoDemo ? (
                        <>
                          <Video className="w-3.5 h-3.5 text-cyan-200" />
                          <span>Video Walkthrough</span>
                          <ExternalLink className="w-3 h-3 opacity-80" />
                        </>
                      ) : (
                        <>
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </>
                      )}
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
