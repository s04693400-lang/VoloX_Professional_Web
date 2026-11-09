import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>(PERSONAL_INFO.defaultAvatar);
  const [imageError, setImageError] = useState<boolean>(false);
  const [retryWithAistudioPath, setRetryWithAistudioPath] = useState<boolean>(false);

  // Handle image load error: try alternate public path before showing placeholder
  const handleImageError = () => {
    if (!retryWithAistudioPath) {
      // Try fallback to the direct aistudio public assets path
      setRetryWithAistudioPath(true);
      setPhotoSrc('/assets/aistudio/IMG_20260725_104424_631f8fb2.jpg');
    } else {
      // If alternate path also fails, trigger professional named placeholder
      setImageError(true);
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle radial glow aura */}
      <motion.div 
        aria-hidden="true" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Hero: 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            
            {/* Clean unboxed kicker */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 mb-4"
            >
              <span>VoloX Official Website</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.origin}</span>
              <span aria-hidden="true">·</span>
              <span>Founded by {PERSONAL_INFO.name}</span>
            </motion.div>

            {/* Display Name */}
            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 mb-2"
            >
              {PERSONAL_INFO.name}
            </motion.h2>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6 [text-wrap:balance]"
            >
              Young Innovator. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
                Future Engineer.
              </span> <br className="hidden sm:inline" />
              Technology Creator.
            </motion.h1>

            {/* Lead Copy & VoloX Intro */}
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 max-w-2xl"
            >
              {PERSONAL_INFO.description}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl"
            >
              Founder of <span className="text-slate-900 dark:text-white font-semibold">VoloX Projects</span>, a forward-thinking initiative dedicated to exploring next-generation ideas in artificial intelligence, robotics, custom processor design, and connected technology.
            </motion.p>

            {/* Three Primary Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                className="px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 whitespace-nowrap"
              >
                Explore My Projects
              </a>
              <a
                href="#about"
                className="px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="px-5 py-3 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors whitespace-nowrap"
              >
                Contact Me →
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: Profile & Technology Visual Anchor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end"
          >
            <div className="w-full max-w-md p-6 rounded-3xl bg-slate-900/60 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-2xl relative group">
              
              {/* Corner decorative tech accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-500/40 rounded-tl" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-500/40 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-500/40 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-500/40 rounded-br" />

              {/* Profile Image Frame */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950 border border-cyan-500/20 shadow-inner flex items-center justify-center">
                {!imageError ? (
                  <>
                    <img
                      src={photoSrc}
                      alt="Sri Hari Hara Sudhan - Innovator & Founder of VoloX Projects"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      onError={handleImageError}
                      referrerPolicy="no-referrer"
                    />

                    {/* Ambient gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                  </>
                ) : (
                  /* Professional, Elegant Fallback Placeholder with Sri Hari's Name & Title */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
                    
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border-2 border-cyan-500/40 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono tracking-tight">
                        {PERSONAL_INFO.initials}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold font-mono mb-1">
                        Founder · VoloX Projects
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {PERSONAL_INFO.origin}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-[11px] text-cyan-300 flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Official Innovator Profile</span>
                    </div>
                  </div>
                )}

                {/* Profile card metadata overlay (active when image loads) */}
                {!imageError && (
                  <div className="absolute bottom-5 left-5 right-5 text-left pointer-events-none">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs uppercase tracking-wider text-cyan-300 font-semibold font-mono">
                        Founder · VoloX Projects
                      </span>
                    </div>
                    <p className="text-white font-bold text-xl sm:text-2xl tracking-tight leading-tight drop-shadow-md">
                      {PERSONAL_INFO.name}
                    </p>
                    <p className="text-xs text-slate-300 font-medium mt-1">
                      {PERSONAL_INFO.origin}
                    </p>
                  </div>
                )}
              </div>

              {/* Profile Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-medium text-slate-300">Sri Hari Hara Sudhan</span>
                </span>
                <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  Founder · VoloX
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 4-Item Attributes & Focus Row Below Hero Split */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          {[
            { label: "Origin", value: "Tamil Nadu, India" },
            { label: "Initiative", value: "VoloX Projects" },
            { label: "Current Scope", value: "8 Active Projects" },
            { label: "Discipline", value: "Tech & Martial Arts" }
          ].map((item, index) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.06 }}
            >
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">{item.label}</div>
              <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
