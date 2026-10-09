import React from 'react';
import { ORUMIG_DATA } from '../data/orumigData';
import { ColorTheme } from '../theme/colorThemes';

interface OrumigFunFactsProps {
  currentTheme: ColorTheme;
}

export const OrumigFunFacts: React.FC<OrumigFunFactsProps> = ({ currentTheme }) => {
  return (
    <section id="fun-facts" className="py-24 bg-white/80 backdrop-blur-xs scroll-mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <span
            className={`font-bold uppercase tracking-widest text-sm mb-4 ${currentTheme.primaryText}`}
          >
            Personal Ventures & Hobbies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            FUN FACTS ABOUT ME
          </h2>
          <div className={`w-20 h-1.5 ${currentTheme.primaryBg} rounded-full`} />
        </div>

        {/* 3 Fun Facts / Interest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Ottawa Senators */}
          <div
            className={`bg-white p-8 rounded-3xl shadow-xs border border-slate-200/90 group hover:-translate-y-2 ${currentTheme.cardHoverShadow} transition-all duration-300 flex flex-col h-full`}
          >
            <div
              className={`w-16 h-16 bg-white rounded-2xl p-2 flex items-center justify-center mb-8 border ${currentTheme.accentBorder} shadow-xs group-hover:scale-105 transition-transform overflow-hidden`}
            >
              <img
                src="https://raw.githubusercontent.com/owenrumig/my-website-assets/main/sens.svg"
                alt="Ottawa Senators logo"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/sens.svg';
                }}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Favourite Team
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ottawa Senators</h3>
            <p className="text-slate-600 leading-relaxed font-light text-sm mb-8 flex-1">
              I am a big fan of the Ottawa Senators and try to go to games all the chances I get. My favourite players are Josh Norris and Ridly Greig.
            </p>
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${currentTheme.primaryText}`}
              >
                NHL · Ottawa
              </span>
              <span className="text-xs text-slate-400">Josh Norris · Ridly Greig</span>
            </div>
          </div>

          {/* Card 2: Using AI */}
          <div
            className={`bg-white p-8 rounded-3xl shadow-xs border border-slate-200/90 group hover:-translate-y-2 ${currentTheme.cardHoverShadow} transition-all duration-300 flex flex-col h-full`}
          >
            <div
              className={`w-16 h-16 bg-white rounded-2xl p-1.5 flex items-center justify-center mb-8 border ${currentTheme.accentBorder} shadow-xs group-hover:scale-105 transition-transform overflow-hidden`}
            >
              <img
                src="https://raw.githubusercontent.com/owenrumig/my-website-assets/main/claude.webp"
                alt="Claude AI logo"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/claude.webp';
                }}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              AI Usage
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Using AI</h3>
            <p className="text-slate-600 leading-relaxed font-light text-sm mb-8 flex-1">
              I have been interested in seeing what I can do with AI using Claude, ChatGPT, and Google AI Studio.
            </p>
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${currentTheme.primaryText}`}
              >
                Emerging Tech
              </span>
              <span className="text-xs text-slate-400">Claude · ChatGPT · AI Studio</span>
            </div>
          </div>

          {/* Card 3: Ravens eSports */}
          <div
            className={`bg-white p-8 rounded-3xl shadow-xs border border-slate-200/90 group hover:-translate-y-2 ${currentTheme.cardHoverShadow} transition-all duration-300 flex flex-col h-full`}
          >
            <div
              className={`w-16 h-16 bg-white rounded-2xl p-1.5 flex items-center justify-center mb-8 border ${currentTheme.accentBorder} shadow-xs group-hover:scale-105 transition-transform overflow-hidden`}
            >
              <img
                src="https://raw.githubusercontent.com/owenrumig/my-website-assets/main/ravnes.jpg"
                alt="Carleton Ravens eSports logo"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/ravnes.jpg';
                }}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Competitiveness
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ravens eSports</h3>
            <p className="text-slate-600 leading-relaxed font-light text-sm mb-8 flex-1">
              Over my time at Carleton I have made the team for the Valorant eSports team for several years. Our most impressive finish was finishing 3rd in NECC.
            </p>
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span
                className={`text-xs font-semibold uppercase tracking-wider ${currentTheme.primaryText}`}
              >
                Carleton Ravens
              </span>
              <span className="text-xs text-slate-400">Valorant · 3rd in NECC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
