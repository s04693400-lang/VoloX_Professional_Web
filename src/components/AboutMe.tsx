import React, { useState } from 'react';
import { 
  Cpu, 
  Bot, 
  Smartphone, 
  Code, 
  Sparkles, 
  Zap, 
  Compass, 
  ShieldCheck,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  const [activeInterest, setActiveInterest] = useState<number>(0);

  const interestDetails = [
    {
      title: "Artificial Intelligence",
      icon: Sparkles,
      tag: "Software & Logic",
      description: "Fascinated by neural models, intelligent automation, and autonomous task assistants that can think alongside human creators."
    },
    {
      title: "Robotics & Embedded Systems",
      icon: Bot,
      tag: "Mechatronics",
      description: "Connecting microcontrollers with servomotors and sensors to build physical systems that perceive and interact with reality."
    },
    {
      title: "Electronics & Hardware Engineering",
      icon: Zap,
      tag: "Circuits & Physics",
      description: "Experimenting with breadboard circuits, power regulation, signal paths, and low-level electronic hardware."
    },
    {
      title: "Processor & CPU Design",
      icon: Cpu,
      tag: "Computer Architecture",
      description: "Diving into instruction set architectures, arithmetic logic units, registers, and digital logic synthesis."
    },
    {
      title: "Smartphone Technology",
      icon: Smartphone,
      tag: "Personal Computing",
      description: "Envisioning minimalistic mobile hardware, edge-computation ergonomics, and distraction-free operating system flows."
    },
    {
      title: "Software & Application Development",
      icon: Code,
      tag: "Full-Stack Craft",
      description: "Crafting responsive web tools, search algorithms, and structured software interfaces built for real-world utility."
    },
    {
      title: "Entrepreneurship & Innovation",
      icon: Compass,
      tag: "VoloX Initiative",
      description: "Channeling continuous learning and bold engineering curiosity into long-term technology initiatives through VoloX Projects."
    },
    {
      title: "Karate & Martial Arts",
      icon: ShieldCheck,
      tag: "Physical Discipline",
      description: "Practicing traditional karate to develop unwavering focus, mental endurance, humility, and disciplined physical strength."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Origins & Aspirations
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            About Sri Hari Hara Sudhan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a young aspiring innovator from Tamil Nadu, India, driven by an insatiable curiosity for how the modern technological world is built—and how it can be reimagined.
          </p>
        </div>

        {/* Narrative & Purpose Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Core Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-500" />
                <span>The Learning & Building Philosophy</span>
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Rather than being a passive consumer of devices, my journey is centered on actively <strong>learning, building, experimenting, and developing useful technology projects</strong>.
              </p>
              <p className="text-sm leading-relaxed">
                Whether it involves disassembling hardware concepts, exploring the logical structure of a central processor, coding algorithms, or practicing kata techniques on the karate mat, I believe mastery is forged through relentless curiosity and consistent daily practice.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Bridging Hardware, Software & Human Discipline
              </h3>
              <p className="text-sm leading-relaxed">
                True innovation rarely lives in a single isolated field. By simultaneously exploring low-level silicon architectures, high-level artificial intelligence workflows, physical robotics, and martial arts discipline, I strive to cultivate a well-rounded foundation for building impactful technology products.
              </p>
            </div>
          </div>

          {/* Interactive Core Interests Matrix */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Key Disciplines & Interests
                </span>
                <span className="text-xs text-slate-400">
                  8 Areas of Active Exploration
                </span>
              </div>

              {/* Grid of Interests */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 mb-6">
                {interestDetails.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = activeInterest === index;
                  return (
                    <button
                      key={item.title}
                      onClick={() => setActiveInterest(index)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 flex items-start gap-2.5 ${
                        isSelected
                          ? 'bg-cyan-500/10 border-cyan-500/50 text-white shadow-sm'
                          : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <div className="min-w-0">
                        <div className="text-xs font-semibold truncate leading-tight">{item.title}</div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">{item.tag}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Detail Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {interestDetails[activeInterest].tag}
                  </span>
                  <span className="text-xs text-slate-500">·</span>
                  <span className="text-xs font-bold text-white">
                    {interestDetails[activeInterest].title}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {interestDetails[activeInterest].description}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
