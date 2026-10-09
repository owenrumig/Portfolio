export interface ColorTheme {
  id: string;
  name: string;
  description: string;
  previewColor: string;
  // Tailwind classes or hex styles
  primaryBg: string;
  primaryHoverBg: string;
  primaryText: string;
  primaryLightText: string;
  accentBgLight: string;
  accentBgSubtle: string;
  accentBorder: string;
  accentBorderLight: string;
  accentRing: string;
  accentRingLight: string;
  glowBlur1: string;
  glowBlur2: string;
  cardHoverShadow: string;
  selection: string;
  heroBg: string;
}

export const COLOR_THEMES: Record<string, ColorTheme> = {
  emerald: {
    id: 'emerald',
    name: 'Emerald Sage',
    description: 'Refined forest green & sage — modern, collegiate & fresh',
    previewColor: '#059669',
    primaryBg: 'bg-emerald-600',
    primaryHoverBg: 'hover:bg-emerald-700',
    primaryText: 'text-emerald-600',
    primaryLightText: 'text-emerald-700',
    accentBgLight: 'bg-emerald-50',
    accentBgSubtle: 'bg-emerald-50/50',
    accentBorder: 'border-emerald-200',
    accentBorderLight: 'border-emerald-100',
    accentRing: 'border-emerald-200',
    accentRingLight: 'border-emerald-100/30',
    glowBlur1: 'bg-emerald-400',
    glowBlur2: 'bg-emerald-300',
    cardHoverShadow: 'hover:shadow-[0_20px_50px_-12px_rgba(5,150,105,0.35)] hover:border-emerald-200',
    selection: 'selection:bg-emerald-100 selection:text-emerald-900',
    heroBg: 'bg-emerald-50/70',
  },
  indigo: {
    id: 'indigo',
    name: 'Royal Indigo',
    description: 'Deep royal blue & indigo — bold, technical & sharp',
    previewColor: '#4f46e5',
    primaryBg: 'bg-indigo-600',
    primaryHoverBg: 'hover:bg-indigo-700',
    primaryText: 'text-indigo-600',
    primaryLightText: 'text-indigo-700',
    accentBgLight: 'bg-indigo-50',
    accentBgSubtle: 'bg-indigo-50/50',
    accentBorder: 'border-indigo-200',
    accentBorderLight: 'border-indigo-100',
    accentRing: 'border-indigo-200',
    accentRingLight: 'border-indigo-100/30',
    glowBlur1: 'bg-indigo-400',
    glowBlur2: 'bg-indigo-300',
    cardHoverShadow: 'hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.35)] hover:border-indigo-200',
    selection: 'selection:bg-indigo-100 selection:text-indigo-900',
    heroBg: 'bg-indigo-50/70',
  },
  amber: {
    id: 'amber',
    name: 'Warm Bronze',
    description: 'Artisanal warm amber & bronze — grounded and distinguished',
    previewColor: '#d97706',
    primaryBg: 'bg-amber-600',
    primaryHoverBg: 'hover:bg-amber-700',
    primaryText: 'text-amber-600',
    primaryLightText: 'text-amber-700',
    accentBgLight: 'bg-amber-50',
    accentBgSubtle: 'bg-amber-50/50',
    accentBorder: 'border-amber-200',
    accentBorderLight: 'border-amber-100',
    accentRing: 'border-amber-200',
    accentRingLight: 'border-amber-100/30',
    glowBlur1: 'bg-amber-400',
    glowBlur2: 'bg-amber-300',
    cardHoverShadow: 'hover:shadow-[0_20px_50px_-12px_rgba(217,119,6,0.35)] hover:border-amber-200',
    selection: 'selection:bg-amber-100 selection:text-amber-900',
    heroBg: 'bg-amber-50/70',
  },
  rose: {
    id: 'rose',
    name: 'Crimson Rose',
    description: 'Vibrant crimson & coral rose — energetic and memorable',
    previewColor: '#e11d48',
    primaryBg: 'bg-rose-600',
    primaryHoverBg: 'hover:bg-rose-700',
    primaryText: 'text-rose-600',
    primaryLightText: 'text-rose-700',
    accentBgLight: 'bg-rose-50',
    accentBgSubtle: 'bg-rose-50/50',
    accentBorder: 'border-rose-200',
    accentBorderLight: 'border-rose-100',
    accentRing: 'border-rose-200',
    accentRingLight: 'border-rose-100/30',
    glowBlur1: 'bg-rose-400',
    glowBlur2: 'bg-rose-300',
    cardHoverShadow: 'hover:shadow-[0_20px_50px_-12px_rgba(225,29,72,0.35)] hover:border-rose-200',
    selection: 'selection:bg-rose-100 selection:text-rose-900',
    heroBg: 'bg-rose-50/70',
  },
  slate: {
    id: 'slate',
    name: 'Graphite Slate',
    description: 'Monochromatic obsidian & slate — ultra-minimal and restrained',
    previewColor: '#0f172a',
    primaryBg: 'bg-slate-900',
    primaryHoverBg: 'hover:bg-slate-800',
    primaryText: 'text-slate-900',
    primaryLightText: 'text-slate-800',
    accentBgLight: 'bg-slate-100',
    accentBgSubtle: 'bg-slate-50',
    accentBorder: 'border-slate-300',
    accentBorderLight: 'border-slate-200',
    accentRing: 'border-slate-300',
    accentRingLight: 'border-slate-200/40',
    glowBlur1: 'bg-slate-400',
    glowBlur2: 'bg-slate-300',
    cardHoverShadow: 'hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.35)] hover:border-slate-300',
    selection: 'selection:bg-slate-200 selection:text-slate-900',
    heroBg: 'bg-slate-100/70',
  },
  sky: {
    id: 'sky',
    name: 'Original Sky Blue',
    description: 'Your previous original sky blue palette for comparison',
    previewColor: '#0284c7',
    primaryBg: 'bg-sky-600',
    primaryHoverBg: 'hover:bg-sky-700',
    primaryText: 'text-sky-600',
    primaryLightText: 'text-sky-700',
    accentBgLight: 'bg-sky-50',
    accentBgSubtle: 'bg-sky-50/50',
    accentBorder: 'border-sky-200',
    accentBorderLight: 'border-sky-100',
    accentRing: 'border-sky-200',
    accentRingLight: 'border-sky-100/30',
    glowBlur1: 'bg-sky-400',
    glowBlur2: 'bg-sky-300',
    cardHoverShadow: 'hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.4)] hover:border-sky-200',
    selection: 'selection:bg-sky-100 selection:text-sky-900',
    heroBg: 'bg-sky-50',
  }
};
