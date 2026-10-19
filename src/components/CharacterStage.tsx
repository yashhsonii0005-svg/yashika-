import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, MessageCircleHeart } from 'lucide-react';
import { soundManager } from '../utils/audio';

const HERO_IMAGE = '/src/assets/images/hero_starry_universe_1792344409136.jpg';

export const CharacterStage: React.FC = () => {
  const [activeSpeech, setActiveSpeech] = useState<string | null>(null);

  const triggerMamReaction = () => {
    soundManager.playCutePop();
    setActiveSpeech('Mam: "Yashhh! Phir se mere baal kharab kar diye tune? 😂 Aur chal bata aaj lunch mein kya laaya hai? ❤️"');
  };

  const triggerYashReaction = () => {
    soundManager.playCutePop();
    setActiveSpeech('Yash: "Mam, sach bataun? Main subah office jaldi hi sirf aapse milne, baat karne aur lunch ka wait karne aata tha! 🥺💞"');
  };

  return (
    <section id="section-universe" className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 flex flex-col justify-center items-center overflow-hidden">
      {/* Background celestial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full z-20 space-y-10">
        {/* Header Title Lockup in pure Hinglish */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-rose-300 text-xs sm:text-sm tracking-widest uppercase font-semibold"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>19 October 2026 · Dil Ki Baatein</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            MAM, AAP MERI SABSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-300 to-amber-100">FAVOURITE DUNIYA HO. ❤️</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-amber-200 font-sans tracking-wide font-normal max-w-2xl mx-auto"
          >
            “Mujhe samajh hi nahi aa raha ki kahan se shuru karun aur kya-kya likhun… kyunki aapke liye feelings words mein express karna aasaan nahi hai. 🥹🫶🏻”
          </motion.p>
        </div>

        {/* Masterpiece Visual Display with Interactive Sibling Avatar Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-950/60 group"
        >
          <div className="relative aspect-[16/9] w-full max-h-[540px] overflow-hidden bg-slate-900">
            <img
              src={HERO_IMAGE}
              alt="Mam and Yash watching starry constellation universe"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Scrim gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b19] via-[#070b19]/25 to-transparent" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 rounded-full bg-slate-950/70 backdrop-blur-md border border-amber-300/30 text-amber-200 text-xs sm:text-sm font-sans flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Yashika Mam & Yash · Ek Khoobsurat Rishta</span>
            </div>

            {/* Interactive Sibling Avatar Buttons */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={triggerMamReaction}
                  className="px-4 py-2.5 rounded-full bg-rose-500/25 hover:bg-rose-500/35 border border-rose-400/50 text-rose-100 text-xs sm:text-sm font-medium backdrop-blur-md transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:scale-105"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  <span>Tap Mam (Baal kharab karne ka dialog) 🌸</span>
                </button>

                <button
                  onClick={triggerYashReaction}
                  className="px-4 py-2.5 rounded-full bg-amber-500/25 hover:bg-amber-500/35 border border-amber-400/50 text-amber-100 text-xs sm:text-sm font-medium backdrop-blur-md transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:scale-105"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tap Yash (Office jaldi aane ka secret) 👦</span>
                </button>
              </div>

              <div className="text-xs text-slate-300 font-sans tracking-wide">
                <span>19 October Birthday</span>
                <span className="mx-2">·</span>
                <span>Bina blood relation ke sabse apna rishta</span>
              </div>
            </div>
          </div>

          {/* Interactive Dynamic Dialogue Box */}
          <AnimatePresence>
            {activeSpeech && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-16 left-1/2 -translate-x-1/2 max-w-lg w-[92%] bg-slate-900/95 backdrop-blur-lg border border-amber-300/40 p-4 rounded-2xl shadow-2xl text-center z-30"
              >
                <div className="flex items-start justify-between gap-2">
                  <MessageCircleHeart className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-medium text-amber-100 flex-1 leading-relaxed text-left">
                    {activeSpeech}
                  </p>
                  <button
                    onClick={() => setActiveSpeech(null)}
                    className="text-slate-400 hover:text-white text-xs px-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Real Authentic Moments from Yash's letter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-200/20 transition-all space-y-2.5"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Pehli Mulaqaat</span>
            <p className="text-slate-200 text-sm leading-relaxed font-sans">
              Mujhe kya pata tha jise maine pehle thoda ignore kiya tha, wahi insaan ek din meri life ka itna important part ban jaayega.
            </p>
            <p className="text-amber-200 text-xs font-medium">
              Chhoti si baat se shuru hui journey itni khoobsurat ban gayi. 🫶🏻
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-rose-200/20 transition-all space-y-2.5"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-300">Bhai Jaisa Apnapan</span>
            <p className="text-slate-200 text-sm leading-relaxed font-sans">
              Aapne mujhe kabhi sirf ek bachche ki tarah treat nahi kiya. Feel karaya ki aapka ek bhai mere jaisa hai.
            </p>
            <p className="text-rose-200 text-xs font-medium">
              Bina kisi blood relation ke itna apna bana lena har kisi ke bas ki baat nahi. 🥹🫂
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-200/20 transition-all space-y-2.5"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Meri Life Ka Sabse Bada Jhooth</span>
            <p className="text-slate-200 text-sm leading-relaxed font-sans">
              Maine ladai mein kaha tha mujhe kisi se farq nahi padta… Par sach yeh tha ki aapse sabse zyada farq padta tha!
            </p>
            <p className="text-amber-200 text-xs font-medium">
              Aapki baaton se, aapke naraaz hone se, har cheez se farq padta tha. ❤️🩹
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
