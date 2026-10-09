import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ORUMIG_DATA } from '../data/orumigData';
import { ColorTheme } from '../theme/colorThemes';

interface OrumigHeroProps {
  currentTheme: ColorTheme;
}

export const OrumigHero: React.FC<OrumigHeroProps> = ({ currentTheme }) => {
  const [imgSrc, setImgSrc] = useState(ORUMIG_DATA.profileImage);

  return (
    <section
      className={`relative min-h-[95vh] flex items-center ${currentTheme.heroBg} pt-20 overflow-hidden transition-colors duration-500`}
    >
      {/* Dynamic Ambient Background Blur Circles */}
      <div
        className={`absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] ${currentTheme.glowBlur2} rounded-full blur-3xl opacity-40 transition-colors duration-500`}
      />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-60" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-12">
          {/* Left Column: Headings & CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            {/* Pill Badge */}
            <span
              className={`inline-block py-1.5 px-4 rounded-full bg-white ${currentTheme.primaryText} text-xs font-bold mb-6 shadow-xs border ${currentTheme.accentBorder} uppercase tracking-widest`}
            >
              {ORUMIG_DATA.faculty}
            </span>

            {/* Main Name Heading with Pronouns below */}
            <div className="mb-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-none">
                {ORUMIG_DATA.name}
              </h1>
              {ORUMIG_DATA.pronouns && (
                <p className="text-xs sm:text-sm font-medium text-slate-400 mt-2 tracking-wide">
                  {ORUMIG_DATA.pronouns}
                </p>
              )}
            </div>

            {/* Subtitles */}
            <div className="space-y-2">
              {ORUMIG_DATA.titleBadges.map((badge) => (
                <p
                  key={badge}
                  className={`text-lg sm:text-xl md:text-2xl ${currentTheme.primaryText} font-light tracking-wide leading-tight`}
                >
                  {badge}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 md:mt-12 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href={ORUMIG_DATA.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto px-10 py-4 ${currentTheme.primaryBg} text-white font-bold rounded-full ${currentTheme.primaryHoverBg} hover:shadow-2xl hover:-translate-y-1 transition-all shadow-lg text-sm uppercase tracking-widest text-center flex items-center justify-center gap-2`}
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Portrait with Concentric Floating Rings */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Blur 1 */}
              <div
                className={`absolute inset-0 ${currentTheme.glowBlur1} rounded-full blur-[60px] md:blur-[120px] transform scale-100 opacity-30 group-hover:opacity-50 transition-all duration-1000`}
              />
              {/* Blur 2 */}
              <div
                className={`absolute inset-0 ${currentTheme.glowBlur2} rounded-full blur-[30px] md:blur-[60px] transform scale-90 opacity-40 group-hover:opacity-60 transition-all duration-700`}
              />

              {/* Soft Float Outer Portrait */}
              <div className="relative animate-soft-float">
                <div
                  className={`w-64 h-64 sm:w-72 sm:h-72 md:w-[480px] md:h-[480px] rounded-full p-1 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border-[4px] md:border-[8px] ${currentTheme.accentRing} overflow-hidden relative z-10 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)]`}
                >
                  <div
                    className={`w-full h-full rounded-full border-[6px] md:border-[12px] border-white overflow-hidden ${currentTheme.accentBgLight}`}
                  >
                    <img
                      src={imgSrc}
                      alt="Owen Rumig Profile Photo"
                      referrerPolicy="no-referrer"
                      onError={() => setImgSrc(ORUMIG_DATA.fallbackImage)}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Concentric Ring 1 */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border ${currentTheme.accentRingLight} rounded-full -z-0 pointer-events-none group-hover:scale-110 transition-all duration-1000 hidden sm:block`}
              />
              {/* Concentric Ring 2 */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border ${currentTheme.accentRingLight} rounded-full -z-0 pointer-events-none group-hover:scale-115 transition-all duration-1500 hidden sm:block`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
