import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Compass, Lightbulb, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const VisionMission: React.FC = () => {
  const pillars = [
    {
      title: "Learn Relentlessly",
      icon: Lightbulb,
      description: "Dive deeply into complex engineering domains—from the physics of semiconductors to the mathematics of machine learning."
    },
    {
      title: "Experiment Fearlessly",
      icon: Compass,
      description: "Turn conceptual curiosity into tangible circuits, codebases, hardware prototypes, and mechanical contraptions."
    },
    {
      title: "Build for Humanity",
      icon: HeartHandshake,
      description: "Ensure that emerging technology is directed toward positive, meaningful solutions that empower individuals and communities."
    }
  ];

  return (
    <section id="vision" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dedicated VoloX Projects Brand Feature Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/70 border border-slate-800 text-white shadow-2xl relative"
        >
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <span>The VoloX Ethos</span>
              <span aria-hidden="true">·</span>
              <span>Innovation Initiative</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight [text-wrap:balance]">
              Creativity, Ambition & The Drive to Innovate
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              VoloX Projects was founded on a simple conviction: the greatest technologies begin with bold questions, persistent tinkering, and the discipline to turn ambitious concepts into reality.
            </p>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-2xl bg-slate-900/80 border border-cyan-500/30 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
                <blockquote className="text-lg sm:text-xl font-medium text-cyan-100 italic leading-snug">
                  "{PERSONAL_INFO.vision}"
                </blockquote>
              </div>
              <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-800">
                Guiding our long-term trajectory toward purposeful technological creation.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-2xl bg-slate-900/80 border border-indigo-500/30 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <blockquote className="text-lg sm:text-xl font-medium text-indigo-100 italic leading-snug">
                  "{PERSONAL_INFO.mission}"
                </blockquote>
              </div>
              <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-800">
                Defining our daily commitment to experimental discipline and hands-on development.
              </p>
            </motion.div>

          </div>

          {/* Three Foundational Pillars with Staggered Scroll Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-800">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div 
                  key={pillar.title} 
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                    <Icon className="w-4 h-4" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
