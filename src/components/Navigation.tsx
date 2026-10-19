import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavigationProps {
  onOpenSecret: () => void;
  hasEntered: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenSecret, hasEntered }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const active = soundManager.toggleMusic();
    setIsPlaying(active);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!hasEntered) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#070b19]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-base sm:text-lg font-serif font-semibold tracking-tight text-amber-200/95 hover:text-amber-100 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 text-left"
        >
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400/40" />
          <span>Yashika Mamm</span>
        </button>

        {/* Zone 2: Clean single-line nav links in Hinglish */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollTo('section-universe')}
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
          >
            Hamari Duniya
          </button>
          <button
            onClick={() => scrollTo('section-fights')}
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
          >
            Memories & Fights
          </button>
          <button
            onClick={() => scrollTo('section-movie')}
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
          >
            Office Safar
          </button>
          <button
            onClick={() => scrollTo('section-letter')}
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
          >
            Dil Se Maafi
          </button>
          <button
            onClick={() => scrollTo('section-gallery')}
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
          >
            Moments
          </button>
          <button
            onClick={() => scrollTo('section-birthday')}
            className="hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 text-rose-300 font-semibold"
          >
            Birthday Wishes
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleAudio}
            title={isPlaying ? 'Pause Melody' : 'Play Dreamy Lullaby'}
            aria-label={isPlaying ? 'Pause Melody' : 'Play Dreamy Lullaby'}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-amber-200 border border-amber-200/20 transition-all flex items-center gap-2 text-xs px-3"
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Melody On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Play Melody</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenSecret}
            className="px-3.5 py-1.5 text-xs font-medium text-amber-950 bg-gradient-to-r from-amber-200 to-rose-200 rounded-lg hover:from-amber-100 hover:to-rose-100 transition-all shadow-sm hover:shadow-rose-500/20 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-900" />
            <span>Secret Letter</span>
          </button>
        </div>
      </div>
    </header>
  );
};
