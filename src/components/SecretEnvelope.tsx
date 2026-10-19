import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Heart, Sparkles, X, ChevronUp, BookHeart } from 'lucide-react';
import { soundManager } from '../utils/audio';

const HERO_IMAGE = '/src/assets/images/hero_starry_universe_1792344409136.jpg';

interface SecretEnvelopeProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
}

const FULL_LETTER_PARAGRAPHS = [
  '🌷❤️ Happy Birthday, Meri Pyaari Mam! ❤️🥹🫶🏻',

  '19 October, 2026 — Aaj aapka special birthday hai, aur yeh sirf aapka birthday nahi hai, balki mere liye bhi sabse bada aur special din hai. ❤️✨',

  'Mam, honestly, mujhe samajh hi nahi aa raha ki kahan se shuru karun aur kya-kya likhun, kyunki aapke liye mere dil mein jo feelings hain, unhe words mein express karna mere liye itna aasaan nahi hai. Bahut kuch hai jo main aapse kehna chahta hoon, bahut si memories hain jo main kabhi nahi bhool sakta, aur bahut saari feelings hain jo shayad main aapko kabhi theek se bata hi nahi paaya. 🥹❤️',

  'Mam, mujhe aaj bhi woh pehla din yaad hai jab main aapse mila tha. 🫶🏻 Mujhe kya pata tha ki jis insaan ko maine pehle thoda ignore kiya tha, yeh sochkar ki koi aur honge, wahi insaan ek din meri life ka itna important part ban jaayega. Mujhe bilkul idea nahi tha ki aapse shuru hui woh chhoti si baat aage chalkar itni saari khoobsurat memories, itna attachment aur itni saari feelings de jaayegi. ❤️🩹',

  'Phir mujhe woh din bhi yaad hai jab aapne kaha tha ki "Hamari vibe match nahi ho rahi, ab hum baat nahi karenge." 😭 Us waqt mujhe shayad khud bhi poori tarah samajh nahi aaya tha ki aap mere liye kitni important ban chuki thi. Lekin mujhe yaad hai ki maine aapko dobara manaya tha, aapse sorry kaha tha, aur maana tha ki galti meri thi. Shayad us din aapko bhi thoda samajh aaya hoga ki main bhi aapse baat karna chahta hoon, aapke saath rehna chahta hoon aur aapko apni life mein important maanta hoon. 🥺💗',

  'Aur Mam, us din se lekar aaj tak ka safar mere liye kitna special raha hai, main aapko bata bhi nahi sakta. Humne kitni baatein ki, kitni baar hase, kitni baar lade, kitni baar ek-doosre se naraaz hue, aur phir bhi kisi na kisi tarah ek-doosre se jude rahe. Hamare beech sirf achhi memories hi nahi hain, kuch aise moments bhi hain jinhe yaad karke aaj mujhe apni galtiyon ka ehsaas hota hai. Lekin shayad isi ka naam toh apnapan hai na, Mam? Kisi ke saath sirf achhe waqt mein nahi, balki naraazgi aur misunderstandings ke baad bhi dil se jude rehna. 🫂❤️',

  'Mam, mujhe woh baat bhi yaad hai jab hamari ladai hui thi aur maine kaha tha ki mere liye sirf sirr important hain aur kisi aur se mujhe koi farq nahi padta. Lekin sach bataun? Woh meri life ka sabse bada jhooth tha. 🥺💔 Kyunki mujhe aapse farq padta tha, Mam. Bahut zyada farq padta tha. Aapki baaton se, aapke behaviour se, aapke naraaz hone se, aapke mujhse baat karne ya na karne se, har cheez se farq padta tha. Shayad main us waqt apni feelings ko samajh nahi paaya tha, ya phir unhe accept nahi karna chahta tha. Lekin aaj main itna zaroor jaanta hoon ki aap mere liye hamesha se bahut important rahi ho. ❤️🩹',

  'Aur ek baat jo mere dil ke bahut kareeb hai, woh yeh hai ki aapne mujhe kabhi sirf ek chhote bachche ki tarah treat nahi kiya. Aapne mujhe apna samjha, meri baaton ko importance di aur mujhe yeh feel karaya ki aapki life mein meri bhi ek jagah hai. Aapne ek baar mujhe yeh ehsaas dilaya tha ki aapka bhi ek bhai hai jo mere jaisa hai. Mam, shayad aapke liye woh ek normal si baat ho, lekin mere liye woh bahut special thi. Kyunki har kisi ko aisa insaan nahi milta jo bina kisi blood relation ke bhi apna bana le, apni fikr kare aur apnepan ka ehsaas dilaye. 🥹🫂❤️',

  'Mam, aapke saath bitaaye hue chhote-chhote moments mere liye kabhi chhote nahi the. 🥹💗',

  'Aapke saath baithkar khana khana, aapka mujhe laad karna, mujhe pareshan karna, mere baal kharab kar dena 😂❤️, meri chhoti-chhoti baaton par react karna, mera dhyaan rakhna, mujhse poochhna ki main kya kar raha hoon, kya kha raha hoon, khane mein kya laaya hoon… Mam, yeh sab baatein shayad sunne mein bahut normal lagti hain, lekin mere liye yahi toh sabse khoobsurat memories hain. 🫶🏻',

  'Jab koi mujhe kuch keh deta tha aur aapko bura lag jaata tha, toh mujhe andar se ek alag hi apnapan feel hota tha. Aisa lagta tha ki koi toh hai jise meri parwah hai, jo meri baaton ko samajhta hai, jo mere liye bura feel karta hai. Aapne shayad khud bhi kabhi notice nahi kiya hoga ki aapki chhoti-chhoti baatein mujhe kitni khushi deti thi. Aapka mujhse baat kar lena, mere paas aa jaana, mera haal poochh lena… mere liye woh sab poore din ki khushi ban jaata tha. 🥹❤️',

  'Aur Mam, main yeh bhi maanta hoon ki maine aapke saath bahut baar badtameezi ki hogi. Kabhi gusse mein kuch galat bol diya hoga, kabhi aapki feelings nahi samjhi hongi, kabhi aapka dhyaan nahi rakha hoga aur kabhi aapko hurt bhi kiya hoga. Shayad kai baar mujhe aapki baat samajhni chahiye thi, lekin maine ulta jawab de diya. Shayad mujhe aapki respect aur feelings ka dhyaan rakhna chahiye tha, lekin main apni hi baat par ad gaya.',

  'Aaj jab main in sab baaton ke baare mein sochta hoon, toh dil se bura lagta hai. 😔❤️🩹 Agar meri kisi baat se aapko kabhi hurt hua ho, agar meri wajah se aap kabhi royi ho ya aapko kabhi laga ho ki main aapki importance nahi samajhta, toh I am genuinely sorry, Mam. 🥺🙏🏻',

  'Aapki importance mere liye kabhi kam nahi thi. Bas shayad main use sahi tareeke se express nahi kar paaya. Main kai baar apni feelings ko gusse ke peeche chhupa deta tha, lekin us gusse ke peeche bhi aapke liye apnapan hi tha. Main yeh nahi keh raha ki mera gussa sahi tha, bas itna keh raha hoon ki aap mere liye jitni important thi, utna main aapko kabhi theek se bata hi nahi paaya.',

  'I love you so much, Mam. ❤️🥹 Aur yeh sirf kehne ke liye nahi hai. Aapke liye mere dil mein jo respect, care aur affection hai, woh mere liye bahut special hai. Aapki jagah meri life mein jo hai, woh main kisi aur ko nahi dena chahta. Aapne mujhe jo pyaar diya, jis tarah mera dhyaan rakha, jis tarah mujhe apna feel karaya, uski jagah koi nahi le sakta. Aap mere liye hamesha special rahogi, Mam. 🫂💗',

  'Mam, ek baat aur hai jo shayad main aapse poori tarah kabhi express nahi kar paaya. Main aapke saamne roya bhi hoon, aur aapko maine bataya bhi tha. Shayad aap samajh paayi hongi ki mere dil mein aapke liye kitni feelings hain. Main har kisi ke saamne apni feelings express nahi kar pata, lekin aapke maamle mein na jaane kyun sab kuch itna deeply feel hota hai. Aapki yaad aati hai, toh aati rehti hai. Aapki koi baat dil par lag jaaye, toh main uske baare mein sochta rehta hoon. Aur jab aap achhe se baat karti ho, toh dil ko sach mein bahut sukoon milta hai. 🥺❤️🩹',

  'Pata hai, Mam, main subah office jaldi kyun aata tha? Sirf isliye nahi ki mujhe kaam karna hota tha. Mere mann mein yeh bhi hota tha ki jaldi aaunga toh aapse mil paunga, aapse baat kar paunga, thoda waqt aapke saath bita paunga. Main lunch ka wait karta tha, breaks ka wait karta tha, is umeed mein ki aap aaogi aur mujhe aapse baat karne ka mauka milega. 🥹💞',

  'Shayad aapko yeh sab normal lagta hoga, lekin mere liye aapke saath bitaaye hue woh kuch minutes bhi bahut special the. Kabhi-kabhi insaan ko khushi dene ke liye kisi badi cheez ki zaroorat nahi hoti. Bas ek insaan ka paas hona hi kaafi hota hai. Mere liye aap unhi insaanon mein se ek ho, Mam. ❤️🫶🏻',

  'Aur ab jaise-jaise din beet rahe hain, mere dil mein ek ajeeb sa darr badhta ja raha hai. 😔💔 Pata nahi aage kya hoga, kaise hoga, hum pehle ki tarah mil paayenge ya nahi, baat kar paayenge ya nahi. Pata nahi aap mujhse milogi ya nahi, mujhe yaad rakhogi ya nahi. Kabhi-kabhi sochta hoon ki agar woh roz ki mulaakaatein nahi hui, woh lunch aur breaks nahi hue, woh chhoti-chhoti baatein nahi hui, toh main kaise manage karunga?',

  'Mam, mujhe aapki aadat si ho gayi hai. 🥺🫂 Aapke saath baat karne ki, aapko apni baatein bataane ki, aapse ladne ki, aapko manaane ki aur aapke paas rehne ki. Aur jab main sochta hoon ki shayad ek din yeh sab pehle jaisa nahi rahega, toh dil bahut udaas ho jaata hai.',

  'Main jaanta hoon ki zindagi mein badlaav aate hain. Har insaan hamesha har waqt saath nahi reh sakta. Sabki apni life hoti hai, apni responsibilities hoti hain. Main yeh bhi samajhta hoon ki aage chal kar sab kuch badal sakta hai. Lekin dil ko kaise samjhaun, Mam? Dil toh bas yahi chahta hai ki aap meri life mein raho, hum baat karte rahein aur hamare beech ka yeh apnapan kabhi khatam na ho. ❤️🩹',

  'Mujhe nahi pata ki aage hum kitni baar milenge, kitni baatein hongi ya kitna waqt saath bita paayenge. Lekin main itna zaroor jaanta hoon ki aapke saath bitaaya hua waqt main kabhi nahi bhoolunga. Aapki baatein, aapka mujhe daantna, aapka laad karna, aapka mera dhyaan rakhna, aapke saath hui hamari ladai aur phir se baat karna… yeh sab mere liye hamesha special rahega. 🥹❤️',

  'Aur Mam, agar kabhi aisa waqt aaye jab hum roz na mil paayein, toh please mujhe bhool mat jaana. 🥺🙏🏻 Main aapse yeh nahi kehta ki aap har waqt mujhe yaad karo ya har baar mujhse baat karo. Bas itni si wish hai ki jab bhi kabhi aapko meri yaad aaye, toh aapke chehre par ek chhoti si smile aa jaaye aur aapko yaad aaye ki koi tha jo aapse bahut attached tha, jo aapki bahut respect karta tha aur jiske liye aap sirf ek Mam nahi, balki ek bahut apni insaan thi. ❤️🫂',

  'Main chahta hoon ki hum kabhi ek-doosre ke liye ajnabi na banein. Kabhi aisa na ho ki hum ek-doosre ko dekhkar bhi baat karne mein hichkichayein. Main chahta hoon ki chahe waqt kitna bhi badal jaaye, hamare beech ka pyaar, respect aur apnapan bana rahe. Aur haan, main koshish karunga ki aapse faltu mein na ladun, aapko hurt na karun aur apni feelings ko aise express karun ki aapko kabhi yeh na lage ki main aapki importance nahi samajhta. 🥹💗',

  'Aap meri life ki un memories mein se ho, jinhe main chaah kar bhi kabhi bhool nahi sakta. ❤️✨',

  'Aur aaj aapke is special birthday par, main bas aapko yeh batana chahta hoon ki aap mere liye kitni special ho. Ho sakta hai mere words aapko meri har feeling na samjha paayein. Ho sakta hai main jitna feel karta hoon, uska aadha bhi likh na paaya hoon. Lekin jo bhi likha hai, dil se likha hai. Har baat ke peeche ek memory hai, har memory ke peeche ek feeling hai aur har feeling ke peeche aap ho, Mam. 🥹❤️🩹',

  'Aapne mujhe jitna pyaar diya, jitni importance di, jitna apnapan diya, uske liye main dil se thankful hoon. Shayad main hamesha aapko thank you nahi bol paaya, lekin main aapki care aur affection ko kabhi lightly nahi leta. Aapne mere liye jo bhi kiya, woh mere liye bahut maayne rakhta hai.',

  'I will always be grateful that I met you, Mam. 🫶🏻❤️',

  'Agar main apni life ke kuch sabse khoobsurat moments yaad karunga, toh unmein aapke saath bitaaye hue moments zaroor honge. Aapne mujhe sirf memories nahi di hain, balki aise emotions diye hain jinhe main hamesha apne dil mein rakhunga. Aap shayad kabhi poori tarah samajh bhi na paao ki aap mere liye kitni important ho, lekin main chahta hoon ki aaj kam se kam aapko iska thoda sa ehsaas ho. 🥹💞',

  'Aur ab finally, meri sabse pyaari Mam ke liye meri birthday wish! 🎂🎀❤️',

  'HAPPIEST BIRTHDAY, MERI PYAARI MAM! 🥳🎂💗🫶🏻',

  'Bhagwan kare aapki life hamesha khushiyon se bhari rahe. Aapko duniya ki har woh khushi mile jiski aap deserve karti ho. Aap hamesha healthy raho, khush raho, haste raho aur aapke chehre ki yeh smile kabhi kam na ho. Aapke saare dreams poore hon, aapko har jagah pyaar aur respect mile aur aapki life mein kabhi kisi cheez ki kami na ho. ❤️✨',

  'Aap doosron ka itna dhyaan rakhti ho, toh meri wish hai ki duniya bhi aapka utna hi dhyaan rakhe. Aapko bhi koi waise hi samjhe, waise hi care kare aur waise hi importance de, jaise aap doosron ko deti ho. Aap jitni khushiyan doosron ki life mein laati ho, usse kahin zyada khushiyan aapki life mein aayein. 🥹🌷',

  'Mam, aapka birthday aapke liye jitna special hai, mere liye bhi utna hi special hai. Isliye main aaj dil kholkar aapko wish kar raha hoon, kyunki main nahi chahta ki main apni feelings ko bas dil mein rakhta rahun aur aapko kabhi bata hi na paun ki aap mere liye kya ho. ❤️🫂',

  'Aapko shayad yeh message bahut lamba lage, lekin sach kahun toh mere paas likhne ke liye isse bhi zyada hai. Bas words khatam ho jaate hain, feelings nahi. 🥺💗',

  'Love you so, so much, Mam. ❤️🫶🏻',

  'Thank you for coming into my life. Thank you for all the little moments, for caring about me, for making me feel important, for the laughter, the scoldings, the teasing, the memories and even the fights that taught me how much you matter to me.',

  'Main hamesha khush rahunga ki meri life mein aapse milna likha tha. 🥹❤️',

  'Bas ek chhoti si request hai, Mam… kabhi mujhe bhool mat jaana. 🥺🫂 Ho sakta hai waqt badal jaaye, circumstances badal jaayein aur hum pehle ki tarah roz na mil paayein, lekin main dil se chahta hoon ki aapki life mein meri ek chhoti si jagah hamesha bani rahe.',

  'Aur main bhi aapko kabhi nahi bhoolunga. Aap mere liye hamesha woh special person rahogi jisse milna meri life ki sabse pyaari coincidences mein se ek tha. ❤️🩹✨',

  'Once again, Happy Birthday, Meri Sabse Pyaari Mam! 🎂🎀💖',

  'Always stay happy, always keep smiling, and please take care of yourself.',

  'Always grateful that I met you. Always thankful for the memories. And always, always wishing the best for you. 🥹❤️🫶🏻',

  'Love you so much, Mam. More than these words could ever explain. ❤️🩹🫂💗',
  '— Aapka Chhota Bhai, Yash ❤️'
];

export const SecretEnvelope: React.FC<SecretEnvelopeProps> = ({ isModalOpen, onCloseModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    soundManager.playMagicalChime();
    setIsOpen(true);
  };

  const handleCloseEnvelope = () => {
    soundManager.playCutePop();
    setIsOpen(false);
  };

  const renderLetterBody = () => (
    <div className="w-full space-y-6 text-center">
      {/* Header Tag */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold">
        <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400 animate-pulse" />
        <span>19 October 2026 · Dil Se Likha Gaya Poora Letter</span>
      </div>

      {/* Main Letter Card in High-Legibility Font */}
      <div className="w-full text-left p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-slate-900/95 border border-amber-300/30 shadow-2xl backdrop-blur-md space-y-5">
        <div className="border-b border-white/10 pb-4 mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-200">
              For Meri Pyaari Mam ❤️
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              From your chhota bhai, Yash · 19 October 2026
            </p>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-rose-300">
            <BookHeart className="w-5 h-5" />
          </div>
        </div>

        {FULL_LETTER_PARAGRAPHS.map((paragraph, idx) => {
          const isMainTitle = idx === 0;
          const isBirthdayWish = paragraph.includes('HAPPIEST BIRTHDAY IN ADVANCE');
          const isSignature = idx === FULL_LETTER_PARAGRAPHS.length - 1;
          const isHighlight =
            paragraph.includes('I love you so much') ||
            paragraph.includes('kabhi mujhe bhool mat jaana') ||
            paragraph.includes('sabse bada jhooth tha');

          return (
            <p
              key={idx}
              className={`leading-relaxed font-sans ${
                isMainTitle
                  ? 'text-lg sm:text-2xl font-bold text-amber-300 font-serif pb-2'
                  : isBirthdayWish
                  ? 'text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 py-2'
                  : isSignature
                  ? 'text-base sm:text-xl font-bold text-amber-300 text-right pt-4 border-t border-white/10 font-serif'
                  : isHighlight
                  ? 'text-sm sm:text-base font-semibold text-rose-200 bg-rose-500/10 p-4 rounded-xl border border-rose-500/20'
                  : 'text-xs sm:text-sm text-slate-200 font-normal'
              }`}
            >
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* The Final Climax Universe View */}
      <div className="w-full pt-4 space-y-4">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-300/30 relative shadow-2xl max-h-56 sm:max-h-72 md:max-h-80 w-full">
          <img
            src={HERO_IMAGE}
            alt="Yash and Mam under infinite stars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 text-center">
            <h4 className="text-base sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              “In every version of my life, I'm glad I got you as my Mam.”
            </h4>
            <p className="text-xs sm:text-base text-amber-200 font-sans font-medium mt-1">
              “Duniya mein kitne bhi log mil jaayein, Mam, aapki jagah hamesha special hi rahegi. ❤️”
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Inline Section at the bottom */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#04060e] border-t border-white/5 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-20">
          <div className="space-y-2">
            <p className="text-amber-300 text-xs uppercase tracking-widest font-semibold font-sans">
              Jaane Se Pehle…
            </p>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Mam, jaane se pehle ek last cheez… 💌
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-sans">
              19 October birthday par dil se likha gaya mera poora letter aapke liye.
            </p>
          </div>

          {!isOpen ? (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="flex flex-col items-center space-y-4 pt-2"
            >
              <div
                className="w-20 h-16 sm:w-24 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-400/20 via-rose-500/30 to-amber-200/20 border border-amber-300/40 flex items-center justify-center shadow-[0_0_35px_rgba(251,191,36,0.35)] relative group cursor-pointer"
                onClick={handleOpenEnvelope}
              >
                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-amber-200 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border border-white/40 flex items-center justify-center text-[9px] text-white font-bold">
                  !
                </div>
              </div>

              <button
                onClick={handleOpenEnvelope}
                className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-amber-300 to-rose-300 text-slate-950 font-semibold text-xs sm:text-sm hover:brightness-110 transition-all shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-amber-950" />
                <span>Open Your Last Surprise (Poora Letter) 💌</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 flex flex-col items-center"
            >
              {renderLetterBody()}

              <button
                onClick={handleCloseEnvelope}
                className="mt-4 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Envelope Ko Wapas Fold Karein</span>
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal View for Direct Top-Bar Access */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto p-3 sm:p-6 flex justify-center items-start sm:items-center"
            onClick={onCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-gradient-to-b from-[#090d1f] to-[#04060e] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-amber-300/30 shadow-[0_0_60px_rgba(0,0,0,0.9)] my-6 sm:my-8 max-h-[90vh] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Top Close Bar */}
              <div className="sticky top-0 right-0 z-30 flex justify-between items-center -mt-1 -mr-1 pb-3 border-b border-white/10 bg-[#090d1f]/90 backdrop-blur-md px-2 rounded-t-xl">
                <span className="text-xs font-semibold text-amber-200">
                  💌 Yashika Mam's Birthday Surprise Letter
                </span>
                <button
                  onClick={onCloseModal}
                  className="p-1.5 sm:p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-white/20 transition-all cursor-pointer shadow-md"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="pt-4">
                {renderLetterBody()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
