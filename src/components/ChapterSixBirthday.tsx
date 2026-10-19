import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

const BIRTHDAY_GARDEN_IMAGE = '/src/assets/images/dreamy_birthday_garden_1792344411345.jpg';

export const ChapterSixBirthday: React.FC = () => {
  const [hasMadeWish, setHasMadeWish] = useState(false);
  const [wishCount, setWishCount] = useState(0);

  const handleMakeWish = () => {
    setHasMadeWish(true);
    setWishCount((prev) => prev + 1);

    soundManager.playCelebrationBloom();

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#fef08a', '#fb7185', '#f472b6', '#fed7aa', '#ffffff'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 60,
        origin: { x: 0.2, y: 0.65 },
        colors: ['#fbbf24', '#f43f5e', '#e879f9'],
      });
    }, 400);

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 60,
        origin: { x: 0.8, y: 0.65 },
        colors: ['#fbbf24', '#f43f5e', '#38bdf8'],
      });
    }, 700);
  };

  const realWishes = [
    'Bhagwan kare aapki life hamesha khushiyon se bhari rahe, aur aapko har woh khushi mile jo aap deserve karti ho.',
    'Aap hamesha healthy raho, khush raho, haste raho aur aapke chehre ki yeh smile kabhi kam na ho. 🌸',
    'Aap doosron ka itna dhyaan rakhti ho, toh meri wish hai ki duniya bhi aapka utna hi dhyaan rakhe.',
    'Aapko bhi koi waise hi samjhe, waise hi care kare aur importance de, jaise aap doosron ko deti ho.',
    'Aapke saare achhe dreams poore hon, aapko har jagah pyaar aur respect mile, aur life mein kabhi kisi cheez ki kami na ho. ✨',
    'Aur Mam… Chahe main kitna bhi bada ho jaun, aapko pareshan karne aur aapke baal kharab karne ka haq mera hi rahega! 😂❤️',
  ];

  return (
    <section id="section-birthday" className="relative py-24 px-4 sm:px-6 bg-[#070b1a] border-t border-white/5 overflow-hidden">
      {/* Background ambient celebratory glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-rose-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-14 relative z-20">
        {/* Header in pure Hinglish */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-semibold tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>19 October Special Birthday Celebration</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 tracking-tight">
            HAPPIEST BIRTHDAY, MERI PYAARI MAM! 🎂🎉
          </h2>
          <p className="text-lg sm:text-2xl text-amber-200 font-sans font-medium">
            “Meri Sabse Pyaari Mam Ke Liye Dil Se Duaayein… ❤️”
          </p>
          <p className="text-xs sm:text-sm font-sans text-slate-400">
            19 October — Yeh din mere liye bhi sabse special aur khoobsurat din hai!
          </p>
        </div>

        {/* Masterpiece Birthday Garden Backdrop with Interactive Candle */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-300/30 shadow-2xl bg-slate-950">
          <div className="relative aspect-[16/9] w-full max-h-[560px] overflow-hidden">
            <img
              src={BIRTHDAY_GARDEN_IMAGE}
              alt="Dreamy birthday garden with fairy lights and cake"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-all duration-1000 ${
                hasMadeWish ? 'brightness-110 filter saturate-110' : ''
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a] via-[#070b1a]/40 to-transparent" />

            {/* Interactive Candle / Cake Overlay Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-14 px-4">
              <AnimatePresence>
                {!hasMadeWish ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="flex flex-col items-center space-y-4"
                  >
                    {/* Glowing Candle Flame indicator */}
                    <div className="relative flex flex-col items-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.25, 0.95, 1.15, 1],
                          opacity: [0.9, 1, 0.85, 1],
                        }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-4 h-6 bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 rounded-full blur-[1px] shadow-[0_0_20px_rgba(251,191,36,0.9)]"
                      />
                      <div className="w-0.5 h-3 bg-amber-900" />
                    </div>

                    <button
                      onClick={handleMakeWish}
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 text-slate-950 font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer border border-white/60 hover:scale-105"
                    >
                      <Sparkles className="w-5 h-5 text-amber-950" />
                      <span>Candle Blow Karke Wish Maangein, Mam ✨</span>
                    </button>
                    <p className="text-xs text-amber-100 font-sans bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md">
                      Click karke candle blow karein aur universe ko apni wish bhejein!
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-6 rounded-3xl bg-slate-900/90 backdrop-blur-md border border-amber-300/40 text-center max-w-lg space-y-3 shadow-2xl"
                  >
                    <div className="flex items-center justify-center gap-2 text-rose-300">
                      <Heart className="w-5 h-5 fill-rose-400 text-rose-400 animate-bounce" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Aapki Wish Sent!</span>
                      <Heart className="w-5 h-5 fill-rose-400 text-rose-400 animate-bounce" />
                    </div>
                    <p className="text-lg sm:text-xl font-sans font-bold text-amber-200">
                      “Bhagwan kare Mam ki saari wishes poori hon!” 🌸
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Candle blow ho chuki hai, fairy lights chamak rahi hain, aur aapka bhai aapke liye celebrate kar raha hai!
                    </p>
                    <button
                      onClick={handleMakeWish}
                      className="text-xs text-amber-300 underline underline-offset-4 hover:text-amber-100 cursor-pointer pt-1"
                    >
                      Aur confetti / sparkles bhejein ({wishCount} wishes sent)
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Wishes Grid in clean legible font */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/50 border border-white/10 space-y-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <Gift className="w-4 h-4" />
            <span>Meri Sabse Pyaari Mam Ke Liye Duaayein</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {realWishes.map((w, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3 hover:border-amber-300/20 transition-all text-left"
              >
                <span className="text-rose-400 text-base mt-0.5 shrink-0">❤️</span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-normal">
                  {w}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
