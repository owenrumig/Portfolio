import React from 'react';
import { Mail } from 'lucide-react';
import { ORUMIG_DATA } from '../data/orumigData';
import { ColorTheme } from '../theme/colorThemes';

interface OrumigFooterProps {
  currentTheme: ColorTheme;
}

export const OrumigFooter: React.FC<OrumigFooterProps> = ({ currentTheme }) => {
  return (
    <footer className="bg-white py-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight text-slate-900">
            {ORUMIG_DATA.name}
            <span className={currentTheme.primaryText}>.</span>
          </div>

          {/* Round Social Buttons with Black Icon on Hover */}
          <div className="flex space-x-6">
            {/* Twitter / X */}
            <a
              href={ORUMIG_DATA.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className={`w-12 h-12 rounded-full ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} flex items-center justify-center text-slate-600 hover:text-black hover:bg-white hover:border-slate-800 hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xs group`}
            >
              <svg
                className="w-5 h-5 fill-current transition-colors duration-300"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Official LinkedIn Logo */}
            <a
              href={ORUMIG_DATA.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`w-12 h-12 rounded-full ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} flex items-center justify-center text-slate-600 hover:text-black hover:bg-white hover:border-slate-800 hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xs group`}
            >
              <svg
                className="w-5 h-5 fill-current transition-colors duration-300"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${ORUMIG_DATA.email}`}
              aria-label="Email"
              className={`w-12 h-12 rounded-full ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} flex items-center justify-center text-slate-600 hover:text-black hover:bg-white hover:border-slate-800 hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-xs group`}
            >
              <Mail className="w-5 h-5 stroke-[2.2] transition-colors duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-400 font-light">
            © {new Date().getFullYear()} {ORUMIG_DATA.name} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
