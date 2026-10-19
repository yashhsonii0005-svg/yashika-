import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Feather, Sparkles, BookOpen, Edit3, Check } from 'lucide-react';
import { soundManager } from '../utils/audio';

const NIGHT_LETTER_IMAGE = '/src/assets/images/starry_letter_night_1792344410953.jpg';

const REAL_LETTER_PARAGRAPHS = [
  'Mam, main yeh maanta hoon ki maine aapke saath kai baar badtameezi ki hogi. Kabhi gusse mein kuch galat bol diya hoga, kabhi aapki feelings nahi samjhi hongi, kabhi aapka dhyaan nahi rakha hoga aur kabhi aapko hurt bhi kiya hoga.',
  'Shayad kai baar mujhe aapki baat samajhni chahiye thi, lekin maine ulta jawab de diya. Shayad mujhe aapki respect aur feelings ka dhyaan rakhna chahiye tha, lekin main apni hi baat par ad gaya.',
  'Aaj jab main in sab baaton ke baare mein sochta hoon, toh dil se bura lagta hai. 😔❤️🩹 Agar meri kisi baat se aapko kabhi hurt hua ho, agar meri wajah se aap kabhi royi ho ya aapko laga ho ki main aapki importance nahi samajhta, toh I am genuinely sorry, Mam. 🥺🙏🏻',
  'Aapki importance mere liye kabhi kam nahi thi. Bas shayad main use sahi tareeke se express nahi kar paaya. Main kai baar apni feelings ko gusse ke peeche chhupa deta tha, lekin us gusse ke peeche bhi aapke liye apnapan hi tha.',
  'I love you so much, Mam. ❤️🥹 Aur yeh sirf kehne ke liye nahi hai. Aapke liye mere dil mein jo respect, care aur affection hai, woh mere liye sabse khaas hai. Aapki jagah meri life mein jo hai, woh main kisi aur ko nahi de sakta.',
  'Mam, ek baat aur hai jo shayad main aapse poori tarah kabhi express nahi kar paaya. Main aapke saamne roya bhi hoon, aur aapko maine bataya bhi tha. Har kisi ke saamne feelings express nahi kar pata, lekin aapke maamle mein na jaane kyun sab kuch itna deeply feel hota hai.',
  'Aapki yaad aati hai, toh aati rehti hai. Aapki koi baat dil par lag jaaye, toh main uske baare mein sochta rehta hoon. Aur jab aap achhe se baat karti ho, toh dil ko sach mein bahut sukoon milta hai. 🥺❤️🩹',
  '— Aapka Chhota Bhai, Yash ❤️',
];

export const ChapterThreeLetter: React.FC = () => {
  const [revealedCount, setRevealedCount] = useState(3);
  const [showAll, setShowAll] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [paragraphs, setParagraphs] = useState<string[]>(() => {
    const saved = localStorage.getItem('yashika_mam_real_letter');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return REAL_LETTER_PARAGRAPHS;
      }
    }
    return REAL_LETTER_PARAGRAPHS;
  });
  const [editText, setEditText] = useState(paragraphs.join('\n\n'));

  const handleShowAll = () => {
    soundManager.playMagicalChime();
    setShowAll(true);
    setRevealedCount(paragraphs.length);
  };

  const handleSaveEdit = () => {
    const newParas = editText.split('\n\n').filter((p) => p.trim().length > 0);
    setParagraphs(newParas);
    localStorage.setItem('yashika_mam_real_letter', JSON.stringify(newParas));
    setIsEditing(false);
    setShowAll(true);
    setRevealedCount(newParas.length);
  };

  return (
    <section id="section-letter" className="relative py-24 px-4 sm:px-6 bg-[#050711] border-t border-white/5 overflow-hidden">
      {/* Background celestial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-20">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-rose-300 text-xs sm:text-sm tracking-widest uppercase font-semibold">
            <Feather className="w-4 h-4 text-amber-300" />
            <span>Dil Se Maafi Aur Meri Sachhi Feelings</span>
            <Feather className="w-4 h-4 text-amber-300" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            I Am Genuinely Sorry, Mam 🥺❤️
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
            Jo baatein main har baar saamne nahi bol paata, aaj dil kholkar aapke liye likhi hain.
          </p>
        </div>

        {/* Letter Container with high legibility clean font */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-300/25 bg-slate-950 shadow-2xl">
          {/* Top Banner */}
          <div className="relative h-44 sm:h-56 w-full overflow-hidden">
            <img
              src={NIGHT_LETTER_IMAGE}
              alt="Quiet night starry letter"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d1f] via-[#090d1f]/40 to-transparent" />
            <div className="absolute bottom-4 left-6 flex items-center gap-2 text-amber-200 text-xs sm:text-sm font-sans font-medium">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Quiet night under the stars · Sirf Yashika Mam ke liye</span>
            </div>
          </div>

          {/* Letter Body */}
          <div className="p-6 sm:p-10 bg-gradient-to-b from-[#090d1f] to-[#050814] relative">
            {/* Action Bar */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/50" />
                <span>To: Yashika Mam</span>
                <span>·</span>
                <span>From: Yash</span>
              </div>

              <div className="flex items-center gap-2">
                {!showAll && revealedCount < paragraphs.length && (
                  <button
                    onClick={handleShowAll}
                    className="px-3.5 py-1.5 rounded-lg bg-amber-400/15 hover:bg-amber-400/25 border border-amber-300/30 text-amber-200 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Poora Letter Ek Saath Padhein</span>
                  </button>
                )}

                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isEditing ? 'Cancel Edit' : 'Edit Letter'}</span>
                </button>
              </div>
            </div>

            {/* Editing Mode */}
            {isEditing ? (
              <div className="space-y-4 pt-6">
                <p className="text-xs text-amber-200 font-sans">
                  Aap letter ke paragraphs ko edit kar sakte hain (double enter se paragraphs alag karein):
                </p>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  rows={14}
                  className="w-full p-4 rounded-xl bg-black/60 border border-amber-300/30 text-slate-100 font-sans text-sm sm:text-base leading-relaxed focus:outline-none focus:ring-1 focus:ring-amber-300"
                />
                <button
                  onClick={handleSaveEdit}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 font-semibold text-xs flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            ) : (
              /* Display mode with super clean, high-contrast, easy-to-read font */
              <div className="pt-6 space-y-6 max-w-2xl mx-auto">
                {(showAll ? paragraphs : paragraphs.slice(0, revealedCount)).map((para, idx) => {
                  const isSignature = idx === paragraphs.length - 1;
                  const isLoveHighlight = para.includes('I love you so much') || para.includes('I am genuinely sorry');

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className={`leading-relaxed font-sans text-left ${
                        isSignature
                          ? 'pt-4 text-right font-serif text-lg sm:text-xl font-bold text-amber-300'
                          : isLoveHighlight
                          ? 'p-4 rounded-2xl bg-rose-500/10 border border-rose-400/30 text-rose-100 text-sm sm:text-base font-medium shadow-sm'
                          : 'text-sm sm:text-base text-slate-200 font-normal'
                      }`}
                    >
                      {para}
                    </motion.div>
                  );
                })}

                {!showAll && revealedCount < paragraphs.length && (
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => setRevealedCount((prev) => prev + 1)}
                      className="text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4 cursor-pointer"
                    >
                      Agla paragraph padhein ({(revealedCount)}/{paragraphs.length})
                    </button>
                    <button
                      onClick={handleShowAll}
                      className="text-xs text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer"
                    >
                      Sab ek saath dikhayein
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
