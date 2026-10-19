import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface OpeningSequenceProps {
  onEnter: () => void;
}

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onEnter }) => {
  const [stage, setStage] = useState(0);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Sequential cinematic pacing
    const t1 = setTimeout(() => setStage(1), 1000); // golden light & heart
    const t2 = setTimeout(() => setStage(2), 2600); // 18 October opening line
    const t3 = setTimeout(() => setStage(3), 4800); // pehle ignore kiya tha... wahi life ka important part ban gayi
    const t4 = setTimeout(() => setStage(4), 7200); // bina blood relation ke apnapan
    const t5 = setTimeout(() => setStage(5), 9600); // constellation & main title
    const t6 = setTimeout(() => setStage(6), 11400); // invitation & button

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  const handleOpenWorld = () => {
    setIsOpening(true);
    soundManager.playMagicalChime();
    soundManager.startMusic();
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  const handleSkip = () => {
    soundManager.playMagicalChime();
    soundManager.startMusic();
    onEnter();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050814] overflow-hidden select-none px-4">
      {/* Background celestial glow */}
      <motion.div
        animate={{
          scale: stage >= 1 ? [1, 1.15, 1] : 0.8,
          opacity: stage >= 1 ? 0.45 : 0.1,
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[600px] h-[600px] rounded-full bg-radial from-amber-400/20 via-rose-500/10 to-transparent blur-3xl pointer-events-none"
      />

      {/* Outward stars bursting when opening */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 2.8, opacity: [0, 0.9, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 bg-radial from-amber-200/40 via-rose-400/30 to-[#070b19] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative max-w-2xl w-full text-center flex flex-col items-center z-20 space-y-6">
        {/* Pulsing Central Heart & Light */}
        <div className="relative h-20 flex items-center justify-center">
          {stage >= 1 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-amber-300/30 rounded-full blur-xl animate-pulse" />
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400/20 to-rose-400/30 border border-amber-300/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_25px_rgba(251,191,36,0.5)]">
                <Heart className="w-7 h-7 text-rose-400 fill-rose-400/80 animate-pulse" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Narrative poetic reveal in pure Hinglish */}
        <div className="min-h-[140px] flex flex-col items-center justify-center space-y-3">
          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm md:text-base font-medium text-amber-200/90 tracking-wide font-sans"
            >
              19 October 2026 — Aaj aapka sabse special birthday hai… ❤️✨
            </motion.p>
          )}

          {stage >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl font-medium text-slate-100 tracking-wide font-sans"
            >
              “Kyunki 19 October sirf aapka birthday nahi, mere liye bhi sabse special din hai. ❤️”
            </motion.p>
          )}

          {stage >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="space-y-1.5 pt-1"
            >
              <p className="text-sm md:text-base text-rose-200/90 font-sans tracking-wide">
                “Mujhe kya pata tha jise pehle ignore kiya tha…”
              </p>
              <p className="text-base md:text-lg text-amber-200 font-semibold tracking-wide">
                “…wahi insaan ek din meri life ka itna important part ban jaayega. 🥹🫶🏻”
              </p>
            </motion.div>
          )}
        </div>

        {/* Sibling Constellation Art */}
        {stage >= 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full flex flex-col items-center space-y-4"
          >
            {/* SVG Constellation with two figures and golden nodes */}
            <div className="relative w-64 h-28 my-1 flex items-center justify-center">
              <svg viewBox="0 0 260 110" className="w-full h-full stroke-amber-200/60 fill-none">
                {/* Sister Constellation (Mam) */}
                <circle cx="90" cy="30" r="4" className="fill-amber-300 stroke-amber-200 shadow-sm animate-pulse" />
                <circle cx="75" cy="55" r="3" className="fill-amber-200 stroke-none" />
                <circle cx="105" cy="55" r="3" className="fill-amber-200 stroke-none" />
                <circle cx="90" cy="85" r="3.5" className="fill-amber-300 stroke-none" />
                {/* Connecting Lines Mam */}
                <line x1="90" y1="30" x2="75" y2="55" strokeWidth="1.2" strokeDasharray="3,3" />
                <line x1="90" y1="30" x2="105" y2="55" strokeWidth="1.2" strokeDasharray="3,3" />
                <line x1="75" y1="55" x2="90" y2="85" strokeWidth="1.2" strokeDasharray="3,3" />
                <line x1="105" y1="55" x2="90" y2="85" strokeWidth="1.2" strokeDasharray="3,3" />

                {/* Sibling Heart Bond Connection */}
                <path d="M 90 45 Q 130 15 170 50" strokeWidth="1.5" stroke="rgba(244,63,94,0.6)" fill="none" />
                <circle cx="130" cy="27" r="2.5" className="fill-rose-400 stroke-none animate-ping" />

                {/* Little Brother Constellation (Yash) */}
                <circle cx="170" cy="45" r="3.5" className="fill-amber-300 stroke-amber-200 animate-pulse" />
                <circle cx="155" cy="70" r="3" className="fill-amber-200 stroke-none" />
                <circle cx="185" cy="70" r="3" className="fill-amber-200 stroke-none" />
                <circle cx="170" cy="95" r="3.5" className="fill-amber-300 stroke-none" />
                {/* Connecting Lines Yash */}
                <line x1="170" y1="45" x2="155" y2="70" strokeWidth="1.2" strokeDasharray="3,3" />
                <line x1="170" y1="45" x2="185" y2="70" strokeWidth="1.2" strokeDasharray="3,3" />
                <line x1="155" y1="70" x2="170" y2="95" strokeWidth="1.2" strokeDasharray="3,3" />
                <line x1="185" y1="70" x2="170" y2="95" strokeWidth="1.2" strokeDasharray="3,3" />
              </svg>

              <div className="absolute bottom-0 text-[11px] font-sans tracking-widest text-slate-400 uppercase flex gap-12">
                <span>Yashika Mam</span>
                <span>Chhota Yash</span>
              </div>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 tracking-tight">
                For Meri Pyaari Mam ❤️
              </h1>
              <p className="text-sm md:text-base text-slate-300 mt-2 font-sans tracking-wide">
                Aapke chhota bhai Yash ki taraf se dil se banaya gaya ek surprise.
              </p>
            </div>
          </motion.div>
        )}

        {/* Invitation & Interactive Entrance Button */}
        {stage >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-2 flex flex-col items-center space-y-3"
          >
            <p className="text-amber-200 font-sans text-base font-medium">
              Mam, aapke liye dil se kuch banaya hai… ✨
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(251, 191, 36, 0.5)' }}
              whileTap={{ scale: 0.96 }}
              onClick={handleOpenWorld}
              disabled={isOpening}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-amber-300 text-slate-950 font-semibold text-base tracking-wide flex items-center gap-2.5 shadow-[0_0_20px_rgba(251,191,36,0.35)] cursor-pointer hover:brightness-110 transition-all border border-amber-200/50"
            >
              <Sparkles className="w-5 h-5 text-amber-950 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Aapki Little World Open Karein ✨</span>
            </motion.button>
          </motion.div>
        )}

        {/* Discreet skip button */}
        <button
          onClick={handleSkip}
          className="text-xs text-slate-400 hover:text-slate-300 transition-colors pt-4 tracking-wider underline underline-offset-4 cursor-pointer"
        >
          Skip intro aur direct dekhein
        </button>
      </div>
    </div>
  );
};
