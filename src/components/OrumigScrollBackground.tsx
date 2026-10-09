import React, { useEffect, useState, useMemo } from 'react';
import { ColorTheme } from '../theme/colorThemes';

interface OrumigScrollBackgroundProps {
  currentTheme: ColorTheme;
}

interface ScrollDot {
  id: number;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: number; // 8 to 16 px for bold visibility
  appearAt: number; // 0.0 to 0.95
  hasHalo?: boolean;
  parallaxFactor: number;
  pulseDelay: number;
}

export const OrumigScrollBackground: React.FC<OrumigScrollBackgroundProps> = ({ currentTheme }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? Math.min(Math.max(currentScroll / totalHeight, 0), 1) : 0;

          setScrollY(currentScroll);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pre-generate 60 prominent glowing constellation dots distributed across the scroll journey
  const dots: ScrollDot[] = useMemo(() => {
    const generated: ScrollDot[] = [
      // 0.00 - 0.20 Scroll Region (Hero -> Fun Facts)
      { id: 1, x: 5, y: 10, size: 12, appearAt: 0.02, hasHalo: true, parallaxFactor: 0.04, pulseDelay: 0.2 },
      { id: 2, x: 94, y: 12, size: 10, appearAt: 0.03, hasHalo: false, parallaxFactor: -0.03, pulseDelay: 0.5 },
      { id: 3, x: 14, y: 18, size: 14, appearAt: 0.05, hasHalo: true, parallaxFactor: 0.05, pulseDelay: 0.1 },
      { id: 4, x: 86, y: 22, size: 9, appearAt: 0.07, hasHalo: false, parallaxFactor: -0.04, pulseDelay: 0.8 },
      { id: 5, x: 4, y: 28, size: 11, appearAt: 0.09, hasHalo: true, parallaxFactor: 0.06, pulseDelay: 0.3 },
      { id: 6, x: 96, y: 32, size: 13, appearAt: 0.11, hasHalo: true, parallaxFactor: -0.05, pulseDelay: 0.6 },
      { id: 7, x: 12, y: 38, size: 8, appearAt: 0.13, hasHalo: false, parallaxFactor: 0.04, pulseDelay: 0.4 },
      { id: 8, x: 89, y: 42, size: 14, appearAt: 0.15, hasHalo: true, parallaxFactor: -0.06, pulseDelay: 0.9 },
      { id: 9, x: 18, y: 46, size: 10, appearAt: 0.17, hasHalo: false, parallaxFactor: 0.03, pulseDelay: 0.1 },
      { id: 10, x: 82, y: 50, size: 12, appearAt: 0.19, hasHalo: true, parallaxFactor: -0.04, pulseDelay: 0.7 },

      // 0.20 - 0.40 Scroll Region (Fun Facts -> Education)
      { id: 11, x: 6, y: 55, size: 9, appearAt: 0.21, hasHalo: false, parallaxFactor: 0.05, pulseDelay: 0.3 },
      { id: 12, x: 93, y: 58, size: 13, appearAt: 0.23, hasHalo: true, parallaxFactor: -0.05, pulseDelay: 0.5 },
      { id: 13, x: 4, y: 64, size: 15, appearAt: 0.25, hasHalo: true, parallaxFactor: 0.06, pulseDelay: 0.2 },
      { id: 14, x: 88, y: 68, size: 10, appearAt: 0.27, hasHalo: false, parallaxFactor: -0.03, pulseDelay: 0.8 },
      { id: 15, x: 16, y: 72, size: 12, appearAt: 0.29, hasHalo: true, parallaxFactor: 0.04, pulseDelay: 0.4 },
      { id: 16, x: 95, y: 76, size: 11, appearAt: 0.31, hasHalo: false, parallaxFactor: -0.06, pulseDelay: 0.6 },
      { id: 17, x: 8, y: 80, size: 14, appearAt: 0.33, hasHalo: true, parallaxFactor: 0.05, pulseDelay: 0.1 },
      { id: 18, x: 84, y: 84, size: 9, appearAt: 0.35, hasHalo: false, parallaxFactor: -0.04, pulseDelay: 0.7 },
      { id: 19, x: 3, y: 88, size: 11, appearAt: 0.37, hasHalo: false, parallaxFactor: 0.06, pulseDelay: 0.3 },
      { id: 20, x: 92, y: 92, size: 13, appearAt: 0.39, hasHalo: true, parallaxFactor: -0.05, pulseDelay: 0.5 },

      // 0.40 - 0.60 Scroll Region (Education -> Career Journey)
      { id: 21, x: 14, y: 15, size: 10, appearAt: 0.41, hasHalo: false, parallaxFactor: 0.03, pulseDelay: 0.2 },
      { id: 22, x: 78, y: 20, size: 12, appearAt: 0.43, hasHalo: true, parallaxFactor: -0.04, pulseDelay: 0.8 },
      { id: 23, x: 6, y: 26, size: 16, appearAt: 0.45, hasHalo: true, parallaxFactor: 0.05, pulseDelay: 0.4 },
      { id: 24, x: 94, y: 30, size: 10, appearAt: 0.47, hasHalo: false, parallaxFactor: -0.06, pulseDelay: 0.6 },
      { id: 25, x: 22, y: 35, size: 9, appearAt: 0.49, hasHalo: false, parallaxFactor: 0.04, pulseDelay: 0.1 },
      { id: 26, x: 86, y: 39, size: 13, appearAt: 0.51, hasHalo: true, parallaxFactor: -0.05, pulseDelay: 0.7 },
      { id: 27, x: 5, y: 44, size: 11, appearAt: 0.53, hasHalo: false, parallaxFactor: 0.06, pulseDelay: 0.3 },
      { id: 28, x: 90, y: 48, size: 15, appearAt: 0.55, hasHalo: true, parallaxFactor: -0.03, pulseDelay: 0.5 },
      { id: 29, x: 12, y: 53, size: 9, appearAt: 0.57, hasHalo: false, parallaxFactor: 0.05, pulseDelay: 0.2 },
      { id: 30, x: 80, y: 57, size: 12, appearAt: 0.59, hasHalo: true, parallaxFactor: -0.04, pulseDelay: 0.8 },

      // 0.60 - 0.80 Scroll Region (Career -> Special Projects)
      { id: 31, x: 8, y: 62, size: 14, appearAt: 0.61, hasHalo: true, parallaxFactor: 0.03, pulseDelay: 0.4 },
      { id: 32, x: 95, y: 66, size: 10, appearAt: 0.63, hasHalo: false, parallaxFactor: -0.06, pulseDelay: 0.6 },
      { id: 33, x: 4, y: 70, size: 16, appearAt: 0.65, hasHalo: true, parallaxFactor: 0.05, pulseDelay: 0.1 },
      { id: 34, x: 88, y: 74, size: 9, appearAt: 0.67, hasHalo: false, parallaxFactor: -0.05, pulseDelay: 0.7 },
      { id: 35, x: 18, y: 78, size: 11, appearAt: 0.69, hasHalo: true, parallaxFactor: 0.06, pulseDelay: 0.3 },
      { id: 36, x: 83, y: 82, size: 13, appearAt: 0.71, hasHalo: true, parallaxFactor: -0.04, pulseDelay: 0.5 },
      { id: 37, x: 7, y: 86, size: 10, appearAt: 0.73, hasHalo: false, parallaxFactor: 0.03, pulseDelay: 0.2 },
      { id: 38, x: 93, y: 90, size: 15, appearAt: 0.75, hasHalo: true, parallaxFactor: -0.06, pulseDelay: 0.8 },
      { id: 39, x: 15, y: 94, size: 9, appearAt: 0.77, hasHalo: false, parallaxFactor: 0.04, pulseDelay: 0.4 },
      { id: 40, x: 79, y: 97, size: 12, appearAt: 0.79, hasHalo: true, parallaxFactor: -0.05, pulseDelay: 0.6 },

      // 0.80 - 1.00 Scroll Region (Special Projects -> Connect with Me / Footer)
      { id: 41, x: 5, y: 14, size: 11, appearAt: 0.81, hasHalo: false, parallaxFactor: 0.05, pulseDelay: 0.1 },
      { id: 42, x: 90, y: 20, size: 14, appearAt: 0.83, hasHalo: true, parallaxFactor: -0.04, pulseDelay: 0.7 },
      { id: 43, x: 11, y: 28, size: 9, appearAt: 0.85, hasHalo: false, parallaxFactor: 0.06, pulseDelay: 0.3 },
      { id: 44, x: 96, y: 36, size: 15, appearAt: 0.87, hasHalo: true, parallaxFactor: -0.05, pulseDelay: 0.5 },
      { id: 45, x: 16, y: 44, size: 11, appearAt: 0.89, hasHalo: false, parallaxFactor: 0.03, pulseDelay: 0.2 },
      { id: 46, x: 84, y: 52, size: 13, appearAt: 0.91, hasHalo: true, parallaxFactor: -0.06, pulseDelay: 0.8 },
      { id: 47, x: 6, y: 62, size: 10, appearAt: 0.93, hasHalo: false, parallaxFactor: 0.04, pulseDelay: 0.4 },
      { id: 48, x: 92, y: 72, size: 16, appearAt: 0.95, hasHalo: true, parallaxFactor: -0.05, pulseDelay: 0.6 },
    ];
    return generated;
  }, []);

  // Parallax offsets for ambient blobs
  const orb1Y = scrollY * 0.22;
  const orb1X = Math.sin(scrollProgress * Math.PI * 2) * 40;
  const orb2Y = -scrollY * 0.15;
  const orb2X = Math.cos(scrollProgress * Math.PI * 2) * 50;
  const orb3Y = scrollY * 0.12;

  // Background grid parallax movement
  const gridOffsetY = (scrollY * 0.18) % 64;

  return (
    <>
      {/* Top Slim Scroll Progress Line */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none bg-slate-100/30">
        <div
          className={`h-full ${currentTheme.primaryBg} transition-all duration-75 ease-out shadow-xs`}
          style={{
            width: `${(scrollProgress * 100).toFixed(2)}%`,
          }}
        />
      </div>

      {/* Deep Background Canvas Layer (-z-10 for subtle ambient blobs) */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Subtle Parallax Geometric Dot Matrix / Grid */}
        <div
          className="absolute inset-0 opacity-[0.25] transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            transform: `translate3d(0, -${gridOffsetY}px, 0)`,
          }}
        />

        {/* Ambient Floating Orb 1 */}
        <div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-[110px] opacity-[0.16] transition-transform duration-100 ease-out will-change-transform"
          style={{
            backgroundColor: currentTheme.previewColor,
            transform: `translate3d(${orb1X}px, ${orb1Y}px, 0) scale(${1 + scrollProgress * 0.2})`,
          }}
        />

        {/* Ambient Floating Orb 2 */}
        <div
          className="absolute top-[40%] -right-36 w-[620px] h-[620px] rounded-full blur-[130px] opacity-[0.13] transition-transform duration-100 ease-out will-change-transform"
          style={{
            backgroundColor: currentTheme.previewColor,
            transform: `translate3d(${orb2X}px, ${orb2Y}px, 0) scale(${1.1 - scrollProgress * 0.15})`,
          }}
        />

        {/* Ambient Floating Orb 3 */}
        <div
          className="absolute bottom-10 left-[15%] w-[480px] h-[480px] rounded-full blur-[120px] opacity-[0.14] transition-transform duration-100 ease-out will-change-transform"
          style={{
            backgroundColor: currentTheme.previewColor,
            transform: `translate3d(0, -${orb3Y}px, 0) rotate(${scrollProgress * 90}deg)`,
          }}
        />

        {/* Concentric Orbital Ring */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] border border-slate-300/40 rounded-full opacity-40 transition-transform duration-150 ease-out"
          style={{
            transform: `translate(-50%, ${scrollY * 0.08}px) rotate(${scrollY * 0.05}deg) scale(${
              0.95 + scrollProgress * 0.1
            })`,
          }}
        />
      </div>

      {/* High-Visibility Scroll-Revealed Glowing Dots Layer (z-[1], sits on top of section tints for full boldness) */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
        aria-hidden="true"
      >
        {dots.map((dot) => {
          const isRevealed = scrollProgress >= dot.appearAt;
          const parallaxShift = scrollY * dot.parallaxFactor;
          // Reduced size by 20% for refined presence
          const calibratedSize = Math.max(6, Math.round(dot.size * 0.8));

          return (
            <div
              key={dot.id}
              className="absolute transition-all duration-500 ease-out will-change-transform"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: `${calibratedSize}px`,
                height: `${calibratedSize}px`,
                transform: `translate3d(0, ${parallaxShift}px, 0) scale(${isRevealed ? 1 : 0})`,
                // Reduced opacity by 20% (0.80 for halo dots, 0.68 for standard dots)
                opacity: isRevealed ? (dot.hasHalo ? 0.8 : 0.68) : 0,
              }}
            >
              {/* Glowing core dot with refined 20% softened border and glow */}
              <div
                className="w-full h-full rounded-full border-[1.5px] border-white/90 shadow-sm transition-transform duration-300"
                style={{
                  backgroundColor: currentTheme.previewColor,
                  boxShadow: dot.hasHalo
                    ? `0 0 11px 2px ${currentTheme.previewColor}cc, 0 0 3px 1px rgba(255,255,255,0.7)`
                    : `0 0 6px 1.5px ${currentTheme.previewColor}99, 0 0 2px 1px rgba(255,255,255,0.5)`,
                }}
              />

              {/* Softened outer aura ping ring (reduced intensity by 25%) */}
              {dot.hasHalo && isRevealed && (
                <div
                  className="absolute -inset-1 rounded-full border border-current opacity-35 animate-ping pointer-events-none"
                  style={{
                    color: currentTheme.previewColor,
                    animationDuration: `${2.4 + dot.pulseDelay}s`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
