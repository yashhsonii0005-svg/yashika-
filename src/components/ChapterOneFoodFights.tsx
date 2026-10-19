import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Swords, Laugh, Sparkles, HeartHandshake, Eye, MessageSquareQuote } from 'lucide-react';
import { soundManager } from '../utils/audio';

const FOOD_IMAGE = '/src/assets/images/food_cozy_table_1792344410348.jpg';

export const ChapterOneFoodFights: React.FC = () => {
  // Interactive Scene 1: Vibe Match & Apology Story Step
  const [vibeStep, setVibeStep] = useState(0);

  // Interactive Scene 2: The Biggest Lie Reveal
  const [lieRevealed, setLieRevealed] = useState(false);

  const vibeStories = [
    {
      title: 'Pehla Shock: "Hamari Vibe Match Nahi Ho Rahi"',
      mamSaying: '“Hamari vibe match nahi ho rahi, ab hum baat nahi karenge.” 😭',
      yashThinking: 'Mujhe us waqt samajh hi nahi aaya ki aap mere liye itni important kab ban chuki thi…',
      action: 'Mam ne baat karna band karne ko kaha tha.',
      tag: 'The Big Crisis',
    },
    {
      title: 'Yash Ka Apology & Manaana',
      mamSaying: '“Acha? Itni jaldi sorry bolne aa gaye?”',
      yashThinking: 'Maine aapko dobara manaya, aapse sorry kaha, aur maana ki galti meri thi. 🥺',
      action: 'Yash ne haar maan kar dil se sorry bola.',
      tag: 'Apology from the heart',
    },
    {
      title: 'Apnepan Ka Ehsaas',
      mamSaying: '“Chal koi na, par aage se dhang se baat karna!” ❤️',
      yashThinking: 'Us din aapko bhi samajh aaya ki main aapse baat karna chahta hoon aur aapko life mein important maanta hoon.',
      action: 'Dono ki dosti aur bond aur bhi gehra ho gaya.',
      tag: 'Reunited stronger',
    },
    {
      title: 'Aaj Tak Ka Safar',
      mamSaying: '“Kitna pareshan karta hai tu mujhe roz!” 😂',
      yashThinking: 'Humne kitni baatein ki, kitni baar hase, kitni baar lade, phir bhi dil se jude rahe. 🫂❤️',
      action: 'Sirf achhe waqt mein nahi, misunderstandings ke baad bhi saath rehna hi apnapan hai.',
      tag: 'Forever Connected',
    },
  ];

  const littleThings = [
    {
      title: 'Saath Baithkar Khana Khana',
      desc: 'Lunch breaks mein saath baithna aur khana share karna. Khane se pet bharta hai, par aapke saath yaadein banti hain. 🍜',
      icon: '🍱',
    },
    {
      title: 'Mere Baal Kharab Kar Dena',
      desc: 'Aapka mujhe laad karna, pareshan karna aur mere baal kharab kar dena! 😂❤️ Yeh sabse cute memory hai.',
      icon: '💇‍♂️',
    },
    {
      title: 'Tiffin Ki Enquiries',
      desc: 'Mujhse poochhna ki main kya kar raha hoon, kya kha raha hoon, khane mein ghar se kya laaya hoon…',
      icon: '🍲',
    },
    {
      title: 'Jab Koi Mujhe Kuch Kahe',
      desc: 'Jab koi mujhe kuch keh deta tha aur aapko bura lag jaata tha… andar se ek alag hi apnapan feel hota tha ki koi meri parwah karta hai. 🥹',
      icon: '🛡️',
    },
    {
      title: 'Aapka Haal Poochh Lena',
      desc: 'Aapka mere paas aa jaana aur poochhna… mere liye woh poore din ki sabse badi khushi ban jaati thi.',
      icon: '✨',
    },
    {
      title: 'Naraazgi Ke Baad Manana',
      desc: 'Kitni baar ek-doosre se naraaz hue, par dil mein jo pyaar aur respect hai, woh kabhi kam nahi hua. 🫂',
      icon: '❤️',
    },
  ];

  return (
    <section id="section-fights" className="relative py-24 px-4 sm:px-6 bg-[#070b19] border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-amber-300 text-xs sm:text-sm tracking-widest uppercase font-semibold">
            <Utensils className="w-4 h-4" />
            <span>Hamari Shuruat, Hamari Fights aur Hamara Pyaar</span>
            <Utensils className="w-4 h-4" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Memories, Fights & Apnapan 🍜😂
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Hamare beech sirf achhi baatein hi nahi hain, ladaaiyan bhi hain… aur wahi toh hamare rishte ko itna sachha banati hain.
          </p>
        </div>

        {/* SCENE 1: THE VIBE MATCH NAHI HO RAHI INCIDENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Artwork */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl group"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900 relative">
              <img
                src={FOOD_IMAGE}
                alt="Mam and Yash in cozy cafe sharing food"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b19]/90 via-transparent to-black/20" />

              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-400/40 text-amber-200 text-xs font-medium backdrop-blur-md flex items-center gap-1.5">
                <Swords className="w-3.5 h-3.5 text-amber-400" />
                <span>Jab Hamari Baat Band Hote Hote Bachi</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-xs text-amber-100 flex items-center justify-between">
                <span>“Aapne kaha tha vibe match nahi ho rahi… par maine haar nahi maani! 🥺”</span>
                <span className="text-rose-300 font-semibold shrink-0 ml-2">#NeverLetMamGo</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Story Tracker */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-amber-500/20 backdrop-blur-md space-y-5"
          >
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                Moment {vibeStep + 1} of 4 · Tap to Step Through
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                {vibeStories[vibeStep].title}
              </h3>
            </div>

            {/* Speech Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-100 text-xs sm:text-sm space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-rose-300 font-semibold flex items-center gap-1.5">
                  🌸 Yashika Mam:
                </span>
                <p className="font-sans text-sm font-medium leading-relaxed">
                  {vibeStories[vibeStep].mamSaying}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-100 text-xs sm:text-sm space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
                  👦 Yash:
                </span>
                <p className="font-sans text-sm font-medium leading-relaxed">
                  {vibeStories[vibeStep].yashThinking}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 italic border-l-2 border-amber-400/50 pl-3">
              {vibeStories[vibeStep].action}
            </p>

            <button
              onClick={() => {
                soundManager.playCutePop();
                setVibeStep((prev) => (prev + 1) % vibeStories.length);
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-rose-400 to-amber-300 hover:from-amber-300 hover:to-rose-300 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-slate-950" />
              <span>Agla Moment Dekhein ({vibeStep + 1}/4)</span>
            </button>
          </motion.div>
        </div>

        {/* SCENE 2: THE BIGGEST LIE CONFESSION */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-indigo-950/50 to-slate-950/90 border border-rose-500/25 backdrop-blur-md space-y-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs font-semibold">
              <MessageSquareQuote className="w-4 h-4 text-rose-400" />
              <span>Ek Sach Jo Main Aaj Batana Chahta Hoon</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              “Mere liye sirf sirr important hain aur kisi se farq nahi padta…”
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Yaad hai Mam jab hamari ladai hui thi aur maine gusse mein yeh bol diya tha?
            </p>

            <div className="pt-2">
              {!lieRevealed ? (
                <button
                  onClick={() => {
                    soundManager.playMagicalChime();
                    setLieRevealed(true);
                  }}
                  className="px-6 py-2.5 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/50 text-rose-100 text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-md"
                >
                  Sach Jaanein: Yeh bolne ke peeche ka sach kya tha? 👈
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-black/60 border border-amber-300/30 text-left space-y-3"
                >
                  <p className="text-sm sm:text-base font-semibold text-rose-300">
                    Sach bataun Mam? Woh meri life ka sabse bada jhooth tha. 🥺💔
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    Kyunki mujhe aapse farq padta tha, Mam. Bahut zyada farq padta tha! Aapki baaton se, aapke behaviour se, aapke naraaz hone se, aapke mujhse baat karne ya na karne se… har cheez se farq padta tha. Shayad main us waqt apni feelings accept nahi kar paa raha tha, lekin aap mere liye hamesha se bahut important rahi ho. ❤️🩹
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* SCENE 3: THE CHHOTE CHHOTE MOMENTS GRID */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-rose-300 font-semibold">
              Khaas Yaadein
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Aapke Saath Bitaaye Hue Chhote Moments Kabhi Chhote Nahi The 🥹💗
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-sans">
              Yeh sab baatein shayad sunne mein normal lagein, lekin mere liye yahi sabse khoobsurat memories hain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {littleThings.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-amber-300/30 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h4 className="text-base font-semibold text-white group-hover:text-amber-200 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
