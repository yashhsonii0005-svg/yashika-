import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, ChevronRight, ChevronLeft, SunMedium, Clock, Coffee, Heart } from 'lucide-react';
import { soundManager } from '../utils/audio';

const MOVIE_IMAGE = '/src/assets/images/cinematic_golden_walk_1792344410411.jpg';

interface MovieScene {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  subQuote: string;
}

export const ChapterTwoMovie: React.FC = () => {
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);

  const scenes: MovieScene[] = [
    {
      id: 1,
      title: 'Scene 1: Subah Office Jaldi Aane Ka Secret 🌅',
      subtitle: 'Sirf kaam ke liye nahi aata tha…',
      description: 'Pata hai, Mam, main subah office jaldi kyun aata tha? Sirf kaam ke liye nahi, mere mann mein yeh hota tha ki jaldi aaunga toh aapse mil paunga, baat kar paunga aur thoda waqt aapke saath bita paunga.',
      quote: '“Subah aapse milne ki umeed hi poora din special bana deti thi.”',
      subQuote: 'Aapke aane se office ka mahaul hi badal jaata tha.',
    },
    {
      id: 2,
      title: 'Scene 2: Lunch Aur Breaks Ka Intezaar 🍱',
      subtitle: 'Ghadi ki taraf dekhte rehna…',
      description: 'Main lunch ka wait karta tha, breaks ka wait karta tha, is umeed mein ki aap aaogi aur mujhe aapse baat karne ka mauka milega. Poochhna ki khane mein kya laaya hai, ek doosre ko tease karna.',
      quote: '“Har break ka ek hi maqsad hota tha: Mam se baat karna!” 🥹💞',
      subQuote: 'Woh aadhe ghante ka lunch break poore din ki thakaan mita deta tha.',
    },
    {
      id: 3,
      title: 'Scene 3: Kuch Minutes Ki Khushi ✨',
      subtitle: 'Chhote pal, badi khushiyan',
      description: 'Shayad aapko yeh sab normal lagta hoga, lekin mere liye aapke saath bitaaye hue woh kuch minutes bhi bahut special the. Ek chhoti si smile, aapka haal poochh lena… din ban jaata tha.',
      quote: '“Aapke saath bitaaye hue woh kuch minutes bhi mere liye sabse khaas the.”',
      subQuote: 'Khushi ke liye kisi badi cheez ki zaroorat nahi hoti.',
    },
    {
      id: 4,
      title: 'Scene 4: Bas Aapka Paas Hona Kaafi Tha ❤️',
      subtitle: 'Apnapan aur sukoon',
      description: 'Kabhi-kabhi insaan ko khushi dene ke liye kisi badi cheez ki zaroorat nahi hoti. Bas ek insaan ka paas hona hi kaafi hota hai. Mere liye aap unhi insaanon mein se ek ho, Mam.',
      quote: '“Mere liye aapka paas hona hi poore din ka sukoon tha, Mam.” 🫶🏻',
      subQuote: 'Always grateful that I met you.',
    },
  ];

  const handleNext = () => {
    soundManager.playCutePop();
    setCurrentSceneIdx((prev) => (prev + 1) % scenes.length);
  };

  const handlePrev = () => {
    soundManager.playCutePop();
    setCurrentSceneIdx((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const scene = scenes[currentSceneIdx];

  return (
    <section id="section-movie" className="relative py-24 px-4 sm:px-6 bg-[#090d1f] border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-amber-300 text-xs sm:text-sm tracking-widest uppercase font-semibold">
            <Film className="w-4 h-4" />
            <span>Office Ki Subah Se Shaam Tak Ka Safar</span>
            <Film className="w-4 h-4" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Agar Hamari Memories Ek Movie Hoti 🎬
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Subah office aana, lunch breaks ka wait karna, aur aapke saath bitaye hue woh pal jo main kabhi nahi bhool sakta.
          </p>
        </div>

        {/* Cinematic Film Player Container */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-300/20 bg-black shadow-2xl">
          {/* Cinema Top Bar */}
          <div className="h-8 bg-black/90 w-full flex items-center justify-between px-6 border-b border-white/5">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-slate-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>MOMENT 0{scene.id} / 04</span>
            </div>
            <span className="text-[11px] font-sans text-amber-300/80">Yash aur Mam ka office safar</span>
          </div>

          {/* Main Visual Display */}
          <div className="relative aspect-[16/9] w-full max-h-[560px] overflow-hidden bg-slate-950">
            <img
              src={MOVIE_IMAGE}
              alt="Office days walk memory"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform scale-100 transition-all duration-1000"
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

            {/* Subtitles Overlay */}
            <div className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6 flex flex-col items-center text-center space-y-2 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={scene.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="p-5 sm:p-6 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10 max-w-2xl w-full space-y-2 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                      {scene.title}
                    </span>
                    <span className="text-[11px] text-rose-300 font-sans">{scene.subtitle}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {scene.description}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm font-semibold text-amber-200">
                      {scene.quote}
                    </p>
                    <span className="text-[11px] text-slate-400 shrink-0 italic">{scene.subQuote}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Cinema Bottom Control Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 flex flex-wrap items-center justify-between gap-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              {scenes.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    soundManager.playCutePop();
                    setCurrentSceneIdx(idx);
                  }}
                  className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                    currentSceneIdx === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to scene ${s.id}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Previous scene"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-300 font-mono">
                {currentSceneIdx + 1} / {scenes.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Next scene"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
