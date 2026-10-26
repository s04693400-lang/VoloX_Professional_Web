import React from 'react';
import { 
  Compass, 
  Code2, 
  Cpu, 
  Layers, 
  Rocket, 
  Target,
  ArrowRight
} from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const InnovationJourney: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'Code2': return Code2;
      case 'Cpu': return Cpu;
      case 'Layers': return Layers;
      case 'Rocket': return Rocket;
      case 'Target': return Target;
      default: return Compass;
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Continuous Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My Innovation Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            An ongoing exploration of technology, engineering rigor, and creative problem solving. Each chapter represents an expanding horizon of self-taught mastery and practical experimentation.
          </p>
        </div>

        {/* Editorial Timeline (No fake dates, natural ongoing sequence) */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {JOURNEY_MILESTONES.map((milestone, index) => {
            const Icon = getIcon(milestone.iconName);
            const stepNum = String(index + 1).padStart(2, '0');

            return (
              <div key={milestone.id} className="relative group">
                
                {/* Timeline node marker */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 border-2 border-cyan-500/80 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Milestone Content Box */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors shadow-sm">
                  
                  {/* Clean unboxed header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                      {stepNum}. {milestone.subtitle}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Ongoing Journey Chapter
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {milestone.theme}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {milestone.description}
                  </p>

                  {/* Core Learning Focus Area Pills replaced with unboxed tags with dividers */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Core Areas:</span>
                    {milestone.learningFocus.map((focus, i) => (
                      <React.Fragment key={i}>
                        <span>{focus}</span>
                        {i < milestone.learningFocus.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
