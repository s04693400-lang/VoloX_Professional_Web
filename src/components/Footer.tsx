import React from 'react';
import { ArrowUp, Twitter, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          
          {/* Brand & Wordmark */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
              VX
            </span>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {PERSONAL_INFO.name} <span className="text-slate-400 font-normal">· {PERSONAL_INFO.initiative}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
            <a href="#journey" className="hover:text-cyan-500 transition-colors">Journey</a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a>
            <a href="#vision" className="hover:text-cyan-500 transition-colors">Vision</a>
            <a href="#presence" className="hover:text-cyan-500 transition-colors">Presence</a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedInSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Search"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Sri Hari Hara Sudhan. All rights reserved. VoloX Projects.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with innovation & discipline from Tamil Nadu, India.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
