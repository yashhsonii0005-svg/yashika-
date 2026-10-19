export interface MemoryPhoto {
  id: string;
  title: string;
  caption: string;
  hindiSub: string;
  imageSrc?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  colorTheme: string;
}

export interface TimelineMoment {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface LetterContent {
  intro: string[];
  body: string[];
  outro: string[];
  signature: string;
}
