import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Cpu, 
  Sparkles, 
  Bot, 
  Car, 
  Shield, 
  Layers,
  ArrowRight,
  CheckCircle,
  Clock
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { VoloXProject, ProjectCategory } from '../types';

export const VoloXProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<VoloXProject | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories: ProjectCategory[] = [
    'All',
    'AI & Software',
    'Hardware & Devices',
    'Hardware & Architecture',
    'Robotics & Mobility',
    'Martial Arts & Community'
  ];

  // Keyboard escape listener for project details modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalProject]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        q === '' ||
        proj.title.toLowerCase().includes(q) ||
        proj.summary.toLowerCase().includes(q) ||
        proj.tags.some(tag => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const renderTechFallbackGraphic = (proj: VoloXProject, isModal = false) => {
    const isMartial = proj.category === 'Martial Arts & Community';
    const isHardware = proj.category === 'Hardware & Devices' || proj.category === 'Hardware & Architecture';
    const isRobotics = proj.category === 'Robotics & Mobility';

    return (
      <div className={`relative ${isModal ? 'aspect-[16/9]' : 'aspect-[16/10]'} w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/60 border-b border-slate-800 flex items-center justify-center p-6 select-none`}>
        {/* Subtle cyber grid backdrop */}
        <div className="absolute inset-0 bg-tech-grid opacity-30" />
        
        {/* Ambient radial accent */}
        <div className="absolute w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-500/30 flex items-center justify-center mb-2.5 text-cyan-400 shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-300">
            {isMartial ? (
              <Shield className="w-7 h-7 text-indigo-400" />
            ) : isHardware ? (
              <Cpu className="w-7 h-7 text-cyan-400" />
            ) : isRobotics ? (
              proj.iconName === 'Car' ? <Car className="w-7 h-7 text-cyan-400" /> : <Bot className="w-7 h-7 text-cyan-400" />
            ) : (
              <Sparkles className="w-7 h-7 text-cyan-400" />
            )}
          </div>
          <span className="text-xs font-semibold text-white tracking-wide">
            {proj.title}
          </span>
          <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-wider mt-0.5">
            {proj.category}
          </span>
        </div>
      </div>
    );
  };

  const renderCardGraphic = (proj: VoloXProject) => {
    if (proj.image && !failedImages[proj.id]) {
      return (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-slate-800">
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={() => setFailedImages((prev) => ({ ...prev, [proj.id]: true }))}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        </div>
      );
    }

    return renderTechFallbackGraphic(proj);
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal on Scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              The Innovation Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              VoloX Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Exploring breakthroughs in artificial intelligence, smartphone concepts, microprocessor engineering, autonomous mobility, and martial arts disciplines.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search initiatives & tags..."
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Filter Controls (Segmented Tabs) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid with Staggered Scroll Reveal */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No projects found matching "{searchQuery}". Try selecting another category or clearing your search.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 px-3 py-1.5 text-xs font-medium text-cyan-500 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 6) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div>
                  {renderCardGraphic(proj)}

                  <div className="p-6">
                    {/* Unboxed metadata line with typographic separator */}
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        {proj.category}
                      </span>
                      <span className="text-slate-500">·</span>
                      <span className="font-medium text-cyan-600 dark:text-cyan-400">
                        {proj.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {proj.summary}
                    </p>

                    {/* Focus Highlights */}
                    <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6">
                      {proj.focusAreas.slice(0, 2).map((focus, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                          <span className="truncate">{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {proj.tags[0]}
                    </span>
                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors cursor-pointer"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Modal: Project Details View with AnimatePresence */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span>{activeModalProject.category}</span>
                  <span>·</span>
                  <span className="text-cyan-500 font-semibold">{activeModalProject.status}</span>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close modal"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                
                {/* Hero Image or Fallback Graphic in Modal */}
                {activeModalProject.image && !failedImages[activeModalProject.id] ? (
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
                    <img
                      src={activeModalProject.image}
                      alt={activeModalProject.title}
                      className="w-full h-full object-cover"
                      onError={() => setFailedImages((prev) => ({ ...prev, [activeModalProject.id]: true }))}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-md">
                    {renderTechFallbackGraphic(activeModalProject, true)}
                  </div>
                )}

                <div>
                  <h3 id="modal-title" className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Technical Scope & Key Focus Areas */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-500" />
                    <span>Key Architectural Focus Areas</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {activeModalProject.focusAreas.map((area, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Current Development Phase */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Active Roadmap Phase: </span>
                    {activeModalProject.currentPhase}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/60">
                <span className="text-xs text-slate-500">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">ESC</kbd> to close
                </span>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Close Details
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
