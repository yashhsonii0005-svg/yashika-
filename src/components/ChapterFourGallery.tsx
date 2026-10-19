import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ImagePlus, Heart, Maximize2, X, Edit2, Check } from 'lucide-react';
import { MemoryPhoto } from '../types';
import { soundManager } from '../utils/audio';

const INITIAL_MEMORIES: MemoryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Pehli Mulaqaat & First Talk',
    hindiSub: 'Jab maine pehle thoda ignore kiya tha…',
    caption: 'Mujhe kya pata tha jise maine pehle ignore kiya tha, wahi insaan ek din meri life ka sabse important part ban jaayega. 🫶🏻',
    colorTheme: 'from-amber-400/20 to-rose-400/20',
  },
  {
    id: 'photo-2',
    title: 'Jab Baal Kharab Kar Diye The 😂❤️',
    hindiSub: 'Laad karna aur pareshan karna',
    caption: 'Aapka mujhe laad karna, pareshan karna aur mere baal kharab kar dena… meri sabse favourite memory! 💇‍♂️',
    colorTheme: 'from-blue-400/20 to-indigo-400/20',
  },
  {
    id: 'photo-3',
    title: 'Office Ka Lunch & Breaks 🍱',
    hindiSub: 'Khane mein kya laaya hai, Yash?',
    caption: 'Saath baithkar khana, ek doosre ka tiffin check karna aur din bhar ki gossips share karna.',
    colorTheme: 'from-emerald-400/20 to-teal-400/20',
  },
  {
    id: 'photo-4',
    title: 'Jab Aapne Mera Stand Liya 🛡️',
    hindiSub: 'Andar se alag hi apnapan',
    caption: 'Jab koi mujhe kuch keh deta tha aur aapko bura lag jaata tha… lagta tha koi toh hai jise meri sach mein parwah hai. 🥹',
    colorTheme: 'from-amber-400/20 to-orange-400/20',
  },
  {
    id: 'photo-5',
    title: 'Naraazgi Ke Baad Manana 🫂',
    hindiSub: 'Galti meri thi, par manaya maine',
    caption: 'Kitni baar ek-doosre se naraaz hue, par dil se jude rahe. Apnapan isi ka naam hai.',
    colorTheme: 'from-rose-400/20 to-pink-400/20',
  },
  {
    id: 'photo-6',
    title: 'Aapki Sabse Pyaari Smile ✨',
    hindiSub: 'Smile jo dil ko sukoon deti hai',
    caption: 'Jab aap dil se smile karti ho aur achhe se baat karti ho, toh sach mein dil ko bahut sukoon milta hai.',
    colorTheme: 'from-purple-400/20 to-violet-400/20',
  },
];

export const ChapterFourGallery: React.FC = () => {
  const [memories, setMemories] = useState<MemoryPhoto[]>(() => {
    const saved = localStorage.getItem('yashika_mam_real_photos');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_MEMORIES;
      }
    }
    return INITIAL_MEMORIES;
  });

  const [activePhoto, setActivePhoto] = useState<MemoryPhoto | null>(null);
  const [editingPhotoId, setEditingPhotoId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{ title: string; hindiSub: string; caption: string }>({
    title: '',
    hindiSub: '',
    caption: '',
  });

  const handleFileUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const updated = memories.map((m) => (m.id === id ? { ...m, imageSrc: result } : m));
      setMemories(updated);
      localStorage.setItem('yashika_mam_real_photos', JSON.stringify(updated));
      soundManager.playMagicalChime();
    };
    reader.readAsDataURL(file);
  };

  const startEditCaption = (photo: MemoryPhoto) => {
    setEditingPhotoId(photo.id);
    setEditForm({
      title: photo.title,
      hindiSub: photo.hindiSub,
      caption: photo.caption,
    });
  };

  const saveEditCaption = (id: string) => {
    const updated = memories.map((m) =>
      m.id === id
        ? {
            ...m,
            title: editForm.title,
            hindiSub: editForm.hindiSub,
            caption: editForm.caption,
          }
        : m
    );
    setMemories(updated);
    localStorage.setItem('yashika_mam_real_photos', JSON.stringify(updated));
    setEditingPhotoId(null);
    soundManager.playCutePop();
  };

  return (
    <section id="section-gallery" className="relative py-24 px-4 sm:px-6 bg-[#070b19] border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-amber-300 text-xs sm:text-sm tracking-widest uppercase font-semibold">
            <Camera className="w-4 h-4" />
            <span>Hamari Yaadon Ki Gallery</span>
            <Camera className="w-4 h-4" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Chhote Moments, Jo Kabhi Chhote Nahi The 📸
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Yash aur Mam ke khaas moments. Aap yahan par real photos upload karke replace kar sakte hain!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#0f172a] rounded-2xl p-4 border border-white/10 hover:border-amber-300/40 shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Photo Frame or Placeholder */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5 flex items-center justify-center">
                {photo.imageSrc ? (
                  <>
                    <img
                      src={photo.imageSrc}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={() => setActivePhoto(photo)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-medium cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Poori Photo Dekhein</span>
                    </button>
                  </>
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${photo.colorTheme} flex flex-col items-center justify-center p-6 text-center space-y-2 relative`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-200">
                      <Camera className="w-6 h-6 text-amber-300" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-sans font-medium">
                      Memory {idx + 1}
                    </span>
                    <p className="text-xs text-amber-200/90 font-sans font-medium leading-tight">
                      Mam & Yash ki real photo yahan upload karein
                    </p>
                  </div>
                )}

                {/* Upload Button */}
                <label
                  title="Upload photo"
                  className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/70 hover:bg-black/90 border border-white/20 text-white cursor-pointer shadow-md backdrop-blur-sm transition-all hover:scale-105 z-10"
                >
                  <ImagePlus className="w-4 h-4 text-amber-300" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(photo.id, e)}
                  />
                </label>
              </div>

              {/* Caption */}
              <div className="pt-4 space-y-2 text-left">
                {editingPhotoId === photo.id ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      placeholder="Title"
                      className="w-full px-2 py-1 text-xs rounded bg-black/50 border border-white/20 text-white font-sans"
                    />
                    <input
                      type="text"
                      value={editForm.hindiSub}
                      onChange={(e) => setEditForm({ ...editForm, hindiSub: e.target.value })}
                      placeholder="Subtitle"
                      className="w-full px-2 py-1 text-xs rounded bg-black/50 border border-white/20 text-amber-300 font-sans"
                    />
                    <textarea
                      value={editForm.caption}
                      onChange={(e) => setEditForm({ ...editForm, caption: e.target.value })}
                      rows={2}
                      placeholder="Caption note"
                      className="w-full px-2 py-1 text-xs rounded bg-black/50 border border-white/20 text-slate-200 font-sans"
                    />
                    <button
                      onClick={() => saveEditCaption(photo.id)}
                      className="w-full py-1.5 rounded bg-amber-400 text-slate-950 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save Caption</span>
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors font-sans">
                        {photo.title}
                      </h3>
                      <button
                        onClick={() => startEditCaption(photo)}
                        title="Edit text"
                        className="text-slate-500 hover:text-slate-300 text-xs p-1 cursor-pointer"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-xs text-rose-300 font-sans font-medium">
                      {photo.hindiSub}
                    </p>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                      {photo.caption}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activePhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActivePhoto(null)}
            >
              <div
                className="max-w-2xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-h-[65vh] overflow-hidden flex items-center justify-center bg-black">
                  <img
                    src={activePhoto.imageSrc}
                    alt={activePhoto.title}
                    className="max-h-[65vh] w-auto object-contain"
                  />
                </div>

                <div className="p-6 space-y-2 bg-[#090d1f] text-left">
                  <h3 className="text-lg font-serif font-bold text-white">{activePhoto.title}</h3>
                  <p className="text-sm text-rose-300 font-sans font-medium">{activePhoto.hindiSub}</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans">{activePhoto.caption}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
