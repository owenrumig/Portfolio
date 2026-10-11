import React, { useState, useEffect } from 'react';
import { OrumigScrollBackground } from './components/OrumigScrollBackground';
import { OrumigNavbar } from './components/OrumigNavbar';
import { OrumigHero } from './components/OrumigHero';
import { OrumigEducation } from './components/OrumigEducation';
import { OrumigExperience } from './components/OrumigExperience';
import { OrumigFunFacts } from './components/OrumigFunFacts';
import { OrumigSpecialProjects } from './components/OrumigSpecialProjects';
import { OrumigContact } from './components/OrumigContact';
import { OrumigFooter } from './components/OrumigFooter';
import { COLOR_THEMES, ColorTheme } from './theme/colorThemes';
import { Check, Sparkles } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [themeId, setThemeId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('orumig_color_scheme');
      if (saved && COLOR_THEMES[saved]) return saved;
    }
    // Default to the elevated Emerald Sage color scheme
    return 'emerald';
  });

  const [floatingPaletteOpen, setFloatingPaletteOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('orumig_color_scheme', themeId);
  }, [themeId]);

  const currentTheme: ColorTheme = COLOR_THEMES[themeId] || COLOR_THEMES.emerald;

  return (
    <div className={`min-h-screen bg-white text-slate-900 ${currentTheme.selection} transition-colors duration-300 font-sans relative`}>
      {/* Scroll-Driven Dynamic Background Animation */}
      <OrumigScrollBackground currentTheme={currentTheme} />

      {/* Navbar with brand, links, and color picker */}
      <OrumigNavbar
        currentTheme={currentTheme}
        setThemeId={setThemeId}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <OrumigHero currentTheme={currentTheme} />

        {/* Fun Facts Section */}
        <OrumigFunFacts currentTheme={currentTheme} />

        {/* Education Section */}
        <OrumigEducation currentTheme={currentTheme} />

        {/* Career & Experience */}
        <OrumigExperience currentTheme={currentTheme} />

        {/* Special Projects Section */}
        <OrumigSpecialProjects currentTheme={currentTheme} />

        {/* Direct Connect & Inquiries */}
        <OrumigContact currentTheme={currentTheme} />
      </main>

      {/* Footer */}
      <OrumigFooter currentTheme={currentTheme} />

      {/* Vercel Web Analytics */}
      <Analytics />

      {/* Quick Color Scheme Floating Switcher Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <button
            onClick={() => setFloatingPaletteOpen(!floatingPaletteOpen)}
            aria-label="Color Palette Selector"
            className="flex items-center gap-2.5 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-slate-200/90 text-slate-800 hover:shadow-xl hover:scale-105 transition-all text-xs font-semibold cursor-pointer"
          >
            <span
              className="w-3.5 h-3.5 rounded-full shadow-xs ring-2 ring-white"
              style={{ backgroundColor: currentTheme.previewColor }}
            />
            <span className="hidden sm:inline">Color Theme:</span>
            <span className={currentTheme.primaryText}>{currentTheme.name}</span>
          </button>

          {floatingPaletteOpen && (
            <div
              className="absolute bottom-14 right-0 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-2.5 mb-1 z-50 animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-3 py-1.5 flex items-center justify-between border-b border-slate-100 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Select Theme Palette
                </span>
                <Sparkles className="w-3 h-3 text-slate-400" />
              </div>

              <div className="space-y-1">
                {Object.values(COLOR_THEMES).map((t) => {
                  const isCurrent = t.id === themeId;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        setThemeId(t.id);
                        setFloatingPaletteOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left ${
                        isCurrent
                          ? 'bg-slate-100 font-bold text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white shadow-xs shrink-0"
                          style={{ backgroundColor: t.previewColor }}
                        />
                        <div>
                          <div className="font-medium text-slate-800">{t.name}</div>
                        </div>
                      </div>
                      {isCurrent && <Check className="w-3.5 h-3.5 text-slate-900 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
