// Web Audio API generator for dreamy ambient melodies and magical sound effects

class DreamAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlayingMusic = false;
  private melodyInterval: number | null = null;
  private masterGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft, dreamy sine tone with warm envelope
  private playNote(freq: number, duration: number, time: number, isLofi = false) {
    if (!this.ctx || !this.musicGain) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = isLofi ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isLofi ? 800 : 1600, time);

    noteGain.gain.setValueAtTime(0.001, time);
    noteGain.gain.exponentialRampToValueAtTime(0.18, time + 0.1);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.musicGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // Pentatonic dreamy music generator (E major / C# minor dreamy scale)
  public toggleMusic(): boolean {
    this.initContext();
    if (this.isPlayingMusic) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlayingMusic;
  }

  public startMusic() {
    this.initContext();
    if (this.isPlayingMusic || !this.ctx) return;
    this.isPlayingMusic = true;

    // Frequencies: E3, G#3, B3, C#4, E4, F#4, G#4, B4, C#5, E5
    const notes = [164.81, 207.65, 246.94, 277.18, 329.63, 369.99, 415.30, 493.88, 554.37, 659.25];
    const chords = [
      [164.81, 246.94, 329.63, 415.30], // E maj
      [220.00, 277.18, 329.63, 440.00], // A maj
      [138.59, 207.65, 277.18, 329.63], // C# min
      [185.00, 246.94, 369.99, 493.88], // B maj
    ];

    let chordIdx = 0;
    let step = 0;

    const playStep = () => {
      if (!this.isPlayingMusic || !this.ctx) return;
      const now = this.ctx.currentTime;

      if (step % 8 === 0) {
        // play gentle bass note of chord
        const currentChord = chords[chordIdx % chords.length];
        this.playNote(currentChord[0] * 0.5, 4.0, now, true);
        this.playNote(currentChord[1], 3.0, now + 0.05);
        chordIdx++;
      }

      // play random gentle arpeggio note
      if (Math.random() > 0.15) {
        const randNote = notes[Math.floor(Math.random() * notes.length)];
        this.playNote(randNote, 1.8 + Math.random() * 0.8, now);
      }

      step++;
    };

    playStep();
    this.melodyInterval = window.setInterval(playStep, 650);
  }

  public stopMusic() {
    this.isPlayingMusic = false;
    if (this.melodyInterval) {
      clearInterval(this.melodyInterval);
      this.melodyInterval = null;
    }
  }

  // Gentle magical chime (e.g. for wish, open world, star click)
  public playMagicalChime() {
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);

      gain.gain.setValueAtTime(0.001, now + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.2, now + idx * 0.09 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.09 + 1.2);

      osc.connect(gain);
      gain.connect(this.sfxGain!);

      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 1.25);
    });
  }

  // Playful pop (e.g. food grab, sibling poke)
  public playCutePop() {
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.12);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.16);
  }

  // Warm sibling hug / candle blown sound
  public playCelebrationBloom() {
    this.initContext();
    if (!this.ctx || !this.sfxGain) return;

    const chords = [329.63, 415.30, 493.88, 659.25, 830.61]; // E maj bloom
    const now = this.ctx.currentTime;

    chords.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0.001, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.18, now + i * 0.06 + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 2.5);

      osc.connect(gain);
      gain.connect(this.sfxGain!);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 2.6);
    });
  }
}

export const soundManager = new DreamAudioSynthesizer();
