import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Search, 
  CheckCircle
} from 'lucide-react';
import { PERSONAL_INFO, INITIAL_ACHIEVEMENTS } from '../data/portfolioData';

export const OnlinePresence: React.FC = () => {
  const achievements = INITIAL_ACHIEVEMENTS;

  return (
    <section id="presence" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal on Scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              Verified Footprint
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Achievements & Online Presence
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Official public channels and documented milestones. Grounded strictly in verified progress.
            </p>
          </div>

          <a
            href="https://github.com/s04693400-lang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 transition-colors self-start md:self-end shadow-sm"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub: s04693400-lang</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </motion.div>

        {/* Public Profiles Grid - 3 Clean Columns with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Twitter / X */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:border-cyan-500/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white">
                  <Twitter className="w-5 h-5 text-cyan-500" />
                </div>
                <span className="text-[11px] font-mono text-cyan-500">Verified</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">X (Twitter)</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Official profile for tech thoughts and VoloX updates.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>{PERSONAL_INFO.socials.twitterHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:border-cyan-500/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">Search Guide</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">LinkedIn</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Search using: <strong className="text-slate-700 dark:text-slate-200 font-semibold">"{PERSONAL_INFO.socials.linkedInName}"</strong>.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.socials.linkedInSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>Search Profile</span>
              <Search className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:border-cyan-500/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white">
                  <Github className="w-5 h-5 text-cyan-500" />
                </div>
                <span className="text-[11px] font-mono text-cyan-500">Verified</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">GitHub</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Official source code repositories, projects & technical archives.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.socials.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>View GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>

        {/* Verified Achievements Showcase */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-lg font-bold text-slate-900 dark:text-white mb-6"
          >
            Documented Milestones
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-cyan-500">{item.category}</span>
                    <span>·</span>
                    <span>{item.dateOrStage}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified milestone</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
