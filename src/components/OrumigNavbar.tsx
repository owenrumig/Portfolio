import React, { useState, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { ORUMIG_DATA } from '../data/orumigData';
import { COLOR_THEMES, ColorTheme } from '../theme/colorThemes';

interface OrumigNavbarProps {
  currentTheme: ColorTheme;
  setThemeId: (id: string) => void;
}

export const OrumigNavbar: React.FC<OrumigNavbarProps> = ({ currentTheme, setThemeId }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { id: 'fun-facts', name: 'Fun Facts', href: '#fun-facts' },
    { id: 'education', name: 'Education', href: '#education' },
    { id: 'career', name: 'Career', href: '#career' },
    { id: 'projects', name: 'Projects', href: '#projects' },
    { id: 'contact', name: 'Connect', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy Calculation
      // If at the very top of the page (in hero)
      if (window.scrollY < 200) {
        setActiveSection('');
        return;
      }

      // Check if scrolled near the bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 180;
      let current = '';

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = link.id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/92 backdrop-blur-md shadow-xs py-3.5 border-b border-slate-100'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          className={`text-xl font-bold tracking-tight ${currentTheme.primaryText} hover:scale-105 transition-transform z-50 flex items-center gap-0.5`}
        >
          <span>{ORUMIG_DATA.initials}</span>
          <span className="text-slate-900">.</span>
        </a>

        {/* Desktop Navigation Links with Scroll Spy Highlight */}
        <ul className="hidden md:flex items-center space-x-1.5 lg:space-x-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-[0.2em] relative py-1.5 px-4 rounded-full transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? `${currentTheme.primaryText} ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} shadow-xs font-bold scale-[1.03]`
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  {isActive && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${currentTheme.primaryBg} shrink-0 animate-pulse`}
                    />
                  )}
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Controls: Color Scheme Switcher & Socials */}
        <div className="hidden md:flex items-center gap-3">
          {/* Color Scheme Picker Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPaletteOpen(!paletteOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:border-slate-300 transition-all shadow-xs"
              title="Change Color Scheme"
            >
              <span
                className="w-3 h-3 rounded-full shrink-0 shadow-xs"
                style={{ backgroundColor: currentTheme.previewColor }}
              />
              <span className="text-[11px] font-semibold tracking-wide uppercase">
                {currentTheme.name}
              </span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {paletteOpen && (
              <div
                className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b border-slate-100">
                  Select Color Scheme
                </div>
                <div className="py-1">
                  {Object.values(COLOR_THEMES).map((t) => {
                    const isSelected = t.id === currentTheme.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          setThemeId(t.id);
                          setPaletteOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors ${
                          isSelected
                            ? 'bg-slate-50 font-semibold text-slate-900'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white shadow-xs"
                            style={{ backgroundColor: t.previewColor }}
                          />
                          <span>{t.name}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-slate-900" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href={ORUMIG_DATA.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ${currentTheme.primaryBg} ${currentTheme.primaryHoverBg} rounded-full transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5`}
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Hamburger & Palette Toggle Buttons */}
        <div className="flex items-center gap-2 md:hidden z-50">
          <button
            onClick={() => {
              setPaletteOpen(!paletteOpen);
              setMenuOpen(false);
            }}
            className="p-2 text-slate-700 bg-white border border-slate-200 rounded-full shadow-xs active:scale-95 transition-transform"
            aria-label="Color Palette"
          >
            <span
              className="w-3.5 h-3.5 rounded-full block shadow-xs"
              style={{ backgroundColor: currentTheme.previewColor }}
            />
          </button>

          <button
            className="text-slate-900 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:outline-hidden active:scale-95 transition-transform"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setPaletteOpen(false);
            }}
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between overflow-hidden">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? 'opacity-0 translate-x-3' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Palette with Scrollable List */}
        {paletteOpen && (
          <div className="md:hidden fixed top-16 right-4 w-60 max-h-[70vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b border-slate-100 flex items-center justify-between mb-1">
              <span>Theme Palette</span>
              <span className="text-[9px] lowercase font-normal">Tap to apply</span>
            </div>
            <div className="space-y-1">
              {Object.values(COLOR_THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setThemeId(t.id);
                    setPaletteOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition-all ${
                    t.id === currentTheme.id ? 'bg-slate-100 font-bold text-slate-900' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: t.previewColor }}
                    />
                    <span>{t.name}</span>
                  </div>
                  {t.id === currentTheme.id && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Dropdown Backdrop (tap outside to close) */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Dropdown: Everything visible immediately with zero scrolling */}
        <div
          className={`fixed top-16 left-0 w-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl z-40 transition-all duration-200 ease-out md:hidden ${
            menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="max-w-md mx-auto px-5 py-4 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-3 pb-1">
              Menu
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`w-full py-2 px-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                    isActive
                      ? `${currentTheme.primaryText} ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} shadow-xs`
                      : 'text-slate-800 hover:bg-slate-50 border border-transparent'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span
                      className={`w-2 h-2 rounded-full ${currentTheme.primaryBg} animate-pulse shrink-0`}
                    />
                  )}
                </a>
              );
            })}

            {/* Quick Actions Footer */}
            <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between px-1">
              <a
                href={ORUMIG_DATA.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white ${currentTheme.primaryBg} ${currentTheme.primaryHoverBg} transition-all shadow-xs`}
                onClick={() => setMenuOpen(false)}
              >
                LinkedIn
              </a>

              <div className="flex items-center space-x-4">
                <a
                  href={ORUMIG_DATA.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${currentTheme.primaryText} text-sm hover:scale-110 transition-transform`}
                  aria-label="Twitter / X"
                >
                  <i className="fa-brands fa-x-twitter">𝕏</i>
                </a>
                <a
                  href={`mailto:${ORUMIG_DATA.email}`}
                  className={`${currentTheme.primaryText} text-sm hover:scale-110 transition-transform`}
                  aria-label="Email"
                >
                  ✉
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
