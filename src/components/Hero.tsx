import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Upload, RefreshCw, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  // Check localStorage for any custom uploaded photo first, otherwise use default
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('volox_user_photo');
      if (saved) return saved;
    }
    return PERSONAL_INFO.defaultAvatar;
  });

  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('volox_user_photo');
    }
    return false;
  });

  const [imageError, setImageError] = useState<boolean>(false);
  const [retryWithAistudioPath, setRetryWithAistudioPath] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image load error: try alternate public path before showing placeholder
  const handleImageError = () => {
    if (!retryWithAistudioPath && !hasCustomPhoto) {
      // Try fallback to the direct aistudio public assets path
      setRetryWithAistudioPath(true);
      setPhotoSrc('/assets/aistudio/IMG_20260725_104424_631f8fb2.jpg');
    } else {
      // If alternate path also fails, trigger professional named placeholder
      setImageError(true);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const resultUrl = event.target.result as string;
          setPhotoSrc(resultUrl);
          setImageError(false);
          setHasCustomPhoto(true);
          try {
            localStorage.setItem('volox_user_photo', resultUrl);
          } catch (err) {
            console.warn("Storage quota exceeded, photo kept in active session state");
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('volox_user_photo');
    setHasCustomPhoto(false);
    setImageError(false);
    setRetryWithAistudioPath(false);
    setPhotoSrc(PERSONAL_INFO.defaultAvatar);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle radial glow aura */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Hero: 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 mb-4">
              <span>VoloX Official Website</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.origin}</span>
              <span aria-hidden="true">·</span>
              <span>Founded by {PERSONAL_INFO.name}</span>
            </div>

            {/* Display Name */}
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-200 mb-2">
              {PERSONAL_INFO.name}
            </h2>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6 [text-wrap:balance]">
              Young Innovator. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
                Future Engineer.
              </span> <br className="hidden sm:inline" />
              Technology Creator.
            </h1>

            {/* Lead Copy & VoloX Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4 max-w-2xl">
              {PERSONAL_INFO.description}
            </p>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Founder of <span className="text-slate-900 dark:text-white font-semibold">VoloX Projects</span>, a forward-thinking initiative dedicated to exploring next-generation ideas in artificial intelligence, robotics, custom processor design, and connected technology.
            </p>

            {/* Three Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
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
            </div>

          </div>

          {/* Right Column: Profile & Technology Visual Anchor */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end">
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

              {/* Photo Upload & Replacement Controls */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-medium text-slate-300">Profile Photo</span>
                </span>

                <div className="flex items-center gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="profile-photo-file-input"
                  />
                  <label
                    htmlFor="profile-photo-file-input"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white cursor-pointer transition-colors border border-slate-700 shadow-sm"
                    title="Upload and replace with your photo"
                  >
                    <Upload className="w-3 h-3 text-cyan-400" />
                    <span>{hasCustomPhoto ? "Change Photo" : "Upload Photo"}</span>
                  </label>

                  {hasCustomPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                      title="Reset to default photo"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Item Attributes & Focus Row Below Hero Split */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Origin</div>
            <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">Tamil Nadu, India</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Initiative</div>
            <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">VoloX Projects</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Current Scope</div>
            <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">8 Active Projects</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Discipline</div>
            <div className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">Tech & Martial Arts</div>
          </div>
        </div>

      </div>
    </section>
  );
};
