import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Star, UtensilsCrossed, Scissors } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const HiddenSurprises: React.FC = () => {
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  const [hugCount, setHugCount] = useState(1);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const showEasterEgg = (msg: string) => {
    soundManager.playCutePop();
    setActiveMessage(msg);
    setTimeout(() => {
      setActiveMessage((current) => (current === msg ? null : current));
    }, 4500);
  };

  const handleSendHug = (e: React.MouseEvent) => {
    soundManager.playCutePop();
    setHugCount((prev) => prev + 1);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newHeart = {
      id: Date.now() + Math.random(),
      x: rect.left + rect.width / 2 + (Math.random() - 0.5) * 30,
      y: rect.top - 10,
    };
    setFloatingHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1500);

    setActiveMessage(`Mam ko ${hugCount + 1} Virtual Hugs bheje gaye! 🤗❤️ (Target: 1,000,000 hugs)`);
    setTimeout(() => {
      setActiveMessage(null);
    }, 3500);
  };

  return (
    <>
      {/* Toast Alert for Easter Eggs in pure Hinglish */}
      <AnimatePresence>
        {activeMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-slate-900/95 border border-amber-300/40 shadow-2xl text-amber-100 text-xs sm:text-sm font-medium backdrop-blur-md flex items-center gap-2 max-w-md w-[90%] text-center justify-center pointer-events-auto font-sans"
          >
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>{activeMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Interactive Hearts */}
      {floatingHearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ opacity: 1, y: h.y, x: h.x, scale: 0.8 }}
          animate={{ opacity: 0, y: h.y - 120, scale: 1.4 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="fixed pointer-events-none z-50 text-rose-400"
        >
          <Heart className="w-5 h-5 fill-rose-400" />
        </motion.div>
      ))}

      {/* Floating Bottom-Right Easter Egg Dock */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Floating Snack / Lunch Surprise */}
        <button
          onClick={() => showEasterEgg('Lunch Reminder: “Mam, aaj tiffin mein kya laaye ho? Last bite meri hai! 😂🍱”')}
          title="Lunch memory"
          className="w-10 h-10 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-300/40 text-amber-200 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-110 cursor-pointer"
        >
          <UtensilsCrossed className="w-4 h-4 text-amber-300" />
        </button>

        {/* Baal Kharab Karna Meme button */}
        <button
          onClick={() => showEasterEgg('Hair Mess Alert: “Mam, phir se mere baal kharab mat kar dena! 😂💇‍♂️❤️”')}
          title="Baal kharab karna"
          className="w-10 h-10 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-300/40 text-rose-200 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-110 cursor-pointer text-xs"
        >
          💇‍♂️
        </button>

        {/* Hidden Little Star */}
        <button
          onClick={() => {
            soundManager.playMagicalChime();
            showEasterEgg('Shooting Star Wish: “Meri sabse pyaari Mam ke liye: endless smiles aur dil ka sukoon! ✨”');
          }}
          title="Wish upon a star"
          className="w-10 h-10 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-300/40 text-indigo-200 flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-110 cursor-pointer"
        >
          <Star className="w-4 h-4 text-amber-300 fill-amber-300/50" />
        </button>

        {/* Virtual Hug Counter Button */}
        <button
          onClick={handleSendHug}
          className="px-3.5 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/30 border border-rose-400/40 text-rose-200 text-xs font-medium backdrop-blur-md shadow-lg transition-all hover:scale-105 flex items-center gap-1.5 cursor-pointer font-sans"
        >
          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
          <span>Mam Ko Hug Bhejein ({hugCount})</span>
        </button>
      </div>
    </>
  );
};
