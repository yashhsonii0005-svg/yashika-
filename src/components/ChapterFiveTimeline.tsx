import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Shield, Clock, Compass, Smile } from 'lucide-react';

const TIMELINE_REAL_MOMENTS = [
  {
    id: 'm-1',
    title: 'Mam, Mujhe Aapki Aadat Si Ho Gayi Hai 🥺🫂',
    tag: 'Dil Ka Darr',
    desc: 'Aapke saath baat karne ki, apni baatein batane ki, aapse ladne ki, aapko manane ki aur aapke paas rehne ki. Aur jab main sochta hoon ki shayad ek din yeh sab pehle jaisa nahi rahega, toh dil bahut udaas ho jaata hai.',
    highlight: 'Kabhi-kabhi sochta hoon ki agar roz ki mulaqaatein aur lunch breaks nahi hue toh main kaise manage karunga?',
  },
  {
    id: 'm-2',
    title: 'Zindagi Ke Badlaav Aur Responsibilities',
    tag: 'Reality of Life',
    desc: 'Main jaanta hoon ki zindagi mein badlaav aate hain. Har insaan hamesha har waqt saath nahi reh sakta. Sabki apni life hoti hai, apni responsibilities hoti hain. Main samajhta hoon aage sab badal sakta hai.',
    highlight: 'Lekin dil ko kaise samjhaun, Mam? Dil bas yahi chahta hai ki aap meri life mein raho aur yeh apnapan bana rahe.',
  },
  {
    id: 'm-3',
    title: 'Hum Kabhi Ek-Doosre Ke Liye Ajnabi Na Banein 🤝',
    tag: 'Mera Vaada',
    desc: 'Main chahta hoon ki hum kabhi ek-doosre ke liye ajnabi na banein. Kabhi aisa na ho ki hum ek-doosre ko dekhkar bhi baat karne mein hichkichayein.',
    highlight: 'Chahe waqt kitna bhi badal jaaye, hamare beech ka pyaar, respect aur apnapan hamesha bana rahega.',
  },
  {
    id: 'm-4',
    title: 'Bas Ek Chhoti Si Request Hai, Mam… 🥺🙏🏻',
    tag: 'Hamesha Ke Liye',
    desc: 'Main aapse yeh nahi kehta ki aap har waqt mujhe yaad karo ya har baar mujhse baat karo. Bas itni si wish hai ki jab bhi kabhi aapko meri yaad aaye, toh aapke chehre par ek chhoti si smile aa jaaye.',
    highlight: 'Aur aapko yaad aaye ki koi tha jo aapse bahut attached tha, aur jiske liye aap ek bahut apni insaan thi. ❤️🫂',
  },
];

export const ChapterFiveTimeline: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#060917] border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-14 relative z-20">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-rose-300 text-xs sm:text-sm tracking-widest uppercase font-semibold">
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Aage Ka Safar Aur Dil Ki Ek Khwahish</span>
            <Heart className="w-4 h-4 text-rose-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Kabhi Mujhe Bhool Mat Jaana, Mam 🥺💔
          </h2>
          <p className="text-sm sm:text-base text-amber-200 font-sans max-w-xl mx-auto leading-relaxed">
            “Waqt badal sakta hai, halaat badal sakte hain… lekin aapki jagah meri life mein hamesha special rahegi.”
          </p>
        </div>

        {/* Vertical Pathway */}
        <div className="relative border-l-2 border-amber-300/20 ml-4 sm:ml-24 space-y-10">
          {TIMELINE_REAL_MOMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-7 sm:pl-9"
            >
              {/* Glowing Constellation Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#070b19] border-2 border-amber-300 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </div>

              {/* Moment Card with clean font */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-300/30 transition-all space-y-3 backdrop-blur-sm text-left">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-widest font-semibold text-rose-300">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white font-sans">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.desc}
                </p>

                <div className="pt-2 border-t border-white/5">
                  <p className="text-xs sm:text-sm font-medium text-amber-200/95 italic font-sans">
                    “{item.highlight}”
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lifelong Sibling Promise Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-400/10 via-rose-400/10 to-transparent border border-amber-300/25 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold font-sans">
            Mera Promise
          </p>
          <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed font-sans">
            “Main chahta hoon ki aapse faltu mein na ladun, aapko hurt na karun… aur aapko hamesha ehsaas dilau ki aap mere liye kitni important ho. 🥹💗”
          </p>
        </div>
      </div>
    </section>
  );
};
