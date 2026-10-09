import React from 'react';
import { ORUMIG_DATA } from '../data/orumigData';
import { ColorTheme } from '../theme/colorThemes';

interface OrumigEducationProps {
  currentTheme: ColorTheme;
}

export const OrumigEducation: React.FC<OrumigEducationProps> = ({ currentTheme }) => {
  return (
    <section id="education" className="py-24 bg-slate-50/50 backdrop-blur-xs scroll-mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <span
            className={`font-bold uppercase tracking-widest text-sm mb-4 ${currentTheme.primaryText}`}
          >
            Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            EDUCATION
          </h2>
          <div className={`w-20 h-1.5 ${currentTheme.primaryBg} rounded-full mb-6`} />
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            Currently studying at{' '}
            <span className={`${currentTheme.primaryLightText} font-semibold`}>
              {ORUMIG_DATA.university}
            </span>{' '}
            within the{' '}
            <span className={`${currentTheme.primaryLightText} font-semibold`}>
              {ORUMIG_DATA.faculty}
            </span>
            , focusing on investments and developing a strong foundation in business and financial analysis.
          </p>
        </div>

        {/* Education Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Academic Program */}
          <div
            className={`p-6 sm:p-7 rounded-3xl ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} shadow-xs hover:-translate-y-1.5 hover:shadow-xl ${currentTheme.cardHoverShadow} transition-all duration-300 group`}
          >
            <div
              className={`w-14 h-14 bg-white rounded-2xl p-1.5 shadow-xs border ${currentTheme.accentBorder} mb-5 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform`}
            >
              <img
                src="https://raw.githubusercontent.com/owenrumig/my-website-assets/main/carleton.png"
                alt="Carleton University logo"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/carleton.png';
                }}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              University Degree
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {ORUMIG_DATA.university}
            </h3>
            <p className="text-slate-700 font-medium text-base mb-2.5">
              Bachelor of Commerce
            </p>
            <p className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base">
              I am currently enrolled in the Bachelor of Commerce with a stream in investments, along with learning all that goes with it.
            </p>
          </div>

          {/* Card 2: My Future & What's Coming Next? */}
          <div
            className={`p-6 sm:p-7 rounded-3xl ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} shadow-xs hover:-translate-y-1.5 hover:shadow-xl ${currentTheme.cardHoverShadow} transition-all duration-300 group`}
          >
            <div
              className={`w-14 h-14 bg-white rounded-2xl p-1.5 shadow-xs border ${currentTheme.accentBorder} mb-5 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform`}
            >
              <img
                src="https://raw.githubusercontent.com/owenrumig/my-website-assets/main/bullseye.webp"
                alt="Bullseye target icon"
                onError={(e) => {
                  e.currentTarget.src = '/src/assets/images/bullseye.webp';
                }}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              My Future
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              What's Coming Next?
            </h3>
            <p className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base">
              I am currently looking for a job in the financial sector to show the skills I have learned from the classroom into the working world. If you would like to get in contact with me send me an email or add me on LinkedIn!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
