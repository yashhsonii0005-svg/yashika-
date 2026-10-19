import React, { useState } from 'react';
import { AmbientCanvas } from './components/AmbientCanvas';
import { Navigation } from './components/Navigation';
import { OpeningSequence } from './components/OpeningSequence';
import { CharacterStage } from './components/CharacterStage';
import { ChapterOneFoodFights } from './components/ChapterOneFoodFights';
import { ChapterTwoMovie } from './components/ChapterTwoMovie';
import { ChapterThreeLetter } from './components/ChapterThreeLetter';
import { ChapterFourGallery } from './components/ChapterFourGallery';
import { ChapterFiveTimeline } from './components/ChapterFiveTimeline';
import { ChapterSixBirthday } from './components/ChapterSixBirthday';
import { SecretEnvelope } from './components/SecretEnvelope';
import { HiddenSurprises } from './components/HiddenSurprises';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isSecretModalOpen, setIsSecretModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#070b19] text-slate-100 font-sans selection:bg-rose-500/30 selection:text-rose-200">
      {/* Background Starry & Petal Ambient Canvas */}
      <AmbientCanvas />

      {/* Cinematic Dream Opening */}
      {!hasEntered ? (
        <OpeningSequence onEnter={() => setHasEntered(true)} />
      ) : (
        <>
          {/* Top Bar Navigation */}
          <Navigation
            hasEntered={hasEntered}
            onOpenSecret={() => setIsSecretModalOpen(true)}
          />

          {/* Main Story Flow */}
          <main className="relative z-20">
            {/* 1. Universe & Two Characters */}
            <CharacterStage />

            {/* 2. Chapter 1: Food, Fights & Love */}
            <ChapterOneFoodFights />

            {/* 3. Chapter 2: If Our Bond Were a Movie */}
            <ChapterTwoMovie />

            {/* 4. Chapter 3: The Starry Night Letter */}
            <ChapterThreeLetter />

            {/* 5. Chapter 4: Memory Gallery */}
            <ChapterFourGallery />

            {/* 6. Chapter 5: Celestial Timeline */}
            <ChapterFiveTimeline />

            {/* 7. Chapter 6: Grand Birthday Celebration */}
            <ChapterSixBirthday />

            {/* 8. The Secret Envelope & Final Note */}
            <SecretEnvelope
              isModalOpen={isSecretModalOpen}
              onCloseModal={() => setIsSecretModalOpen(false)}
            />
          </main>

          {/* Interactive Easter Eggs & Virtual Hugs */}
          <HiddenSurprises />

          {/* Footer in pure Hinglish */}
          <footer className="relative z-20 py-12 px-4 sm:px-6 border-t border-white/5 bg-[#050711] text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-rose-300 text-sm font-sans font-semibold">
              <span>Dil se banaya gaya surprise</span>
              <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
              <span>Meri sabse pyaari Yashika Mam ke liye</span>
            </div>

            <p className="text-xs text-slate-400 font-sans">
              19 October 2026 · Happy Birthday, Meri Pyaari Mam · Always grateful that I met you · Aapka chhota bhai, Yash ❤️
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="text-xs text-amber-300/80 hover:text-amber-200 inline-flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 px-4 rounded-full bg-white/5 hover:bg-white/10"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Wapas shuruat par jaayein</span>
              </button>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
