import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Layout, 
  Bot, 
  Zap, 
  Cpu, 
  Lightbulb, 
  Shield 
} from 'lucide-react';
import { SKILL_CARDS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Layout': return Layout;
      case 'Bot': return Bot;
      case 'Zap': return Zap;
      case 'Cpu': return Cpu;
      case 'Lightbulb': return Lightbulb;
      case 'Shield': return Shield;
      default: return Sparkles;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal on Scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Disciplines & Focus Areas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Areas of Active Exploration
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            These cards represent active fields of self-directed research, practical laboratory tinkering, and continuous learning—grounded in passion, curiosity, and disciplined building rather than formal enterprise certifications.
          </p>
        </motion.div>

        {/* 7 Skill Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CARDS.map((skill, idx) => {
            const Icon = getIcon(skill.iconName);

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 6) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg group"
              >
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Topics list with clean unboxed layout */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Active Topics
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                    {skill.topics.map((t, topicIdx) => (
                      <span key={topicIdx} className="flex items-center gap-2">
                        <span>{t}</span>
                        {topicIdx < skill.topics.length - 1 && <span className="text-slate-500" aria-hidden="true">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
