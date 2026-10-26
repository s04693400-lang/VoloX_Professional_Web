import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { VoloXProjects } from './components/VoloXProjects';
import { InnovationJourney } from './components/InnovationJourney';
import { SkillsSection } from './components/SkillsSection';
import { VisionMission } from './components/VisionMission';
import { OnlinePresence } from './components/OnlinePresence';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('volox_theme');
      if (saved) return saved === 'dark';
      return true; // Default to futuristic dark mode
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('volox_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('volox_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 relative selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      
      {/* Interactive subtle constellation/particle canvas */}
      <ParticleBackground isDark={isDark} />

      {/* Main app contents */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          <Hero />
          <AboutMe />
          <VoloXProjects />
          <InnovationJourney />
          <SkillsSection />
          <VisionMission />
          <OnlinePresence />
          <ContactSection />
        </main>

        <Footer />
      </div>

    </div>
  );
}
