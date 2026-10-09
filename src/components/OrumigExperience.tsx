import React from 'react';
import { ORUMIG_DATA } from '../data/orumigData';
import { ColorTheme } from '../theme/colorThemes';
import { CompanyLogo } from './CompanyLogos';

interface OrumigExperienceProps {
  currentTheme: ColorTheme;
}

export const OrumigExperience: React.FC<OrumigExperienceProps> = ({ currentTheme }) => {
  // Descending order from left to right: 2026-Present (Stonebridge) on left -> 2023-2026 (IDA) on right
  const descendingJobs = ORUMIG_DATA.careerJobs;

  return (
    <section id="career" className="py-24 bg-white/80 backdrop-blur-xs scroll-mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <span
            className={`font-bold uppercase tracking-widest text-sm mb-4 ${currentTheme.primaryText}`}
          >
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            CAREER JOURNEY
          </h2>
          <div className={`w-20 h-1.5 ${currentTheme.primaryBg} rounded-full mb-6`} />
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            {ORUMIG_DATA.careerBio}
          </p>
        </div>

        {/* Horizontal Timeline Track (Left to Right in Descending Order) */}
        <div className="relative mb-16">
          {/* Connecting Axis Bar across desktop */}
          <div className="hidden md:block absolute top-[22px] left-[10%] right-[10%] h-1 bg-slate-200 -z-0 rounded-full">
            <div className={`h-full ${currentTheme.primaryBg} opacity-60 rounded-full`} />
          </div>

          {/* 2-Column Horizontal Stages: Left (2026 - Present) -> Right (2023 - 2026) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            {descendingJobs.map((job, idx) => {
              const isCurrent = job.period.includes('Present');

              return (
                <div key={job.id} className="flex flex-col">
                  {/* Timeline Milestone Header with node indicator */}
                  <div className="flex items-center justify-between md:justify-start gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-4 border-white ${
                          isCurrent
                            ? `${currentTheme.primaryBg} ring-4 ${currentTheme.accentRing} shadow-md`
                            : 'bg-slate-400 shadow-xs'
                        } flex items-center justify-center shrink-0`}
                      />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                        {job.period}
                      </span>
                    </div>

                    {isCurrent && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${currentTheme.accentBgLight} ${currentTheme.primaryText} border ${currentTheme.accentBorder} shadow-xs ml-auto md:ml-2`}
                      >
                        Current
                      </span>
                    )}

                    {idx === 0 && (
                      <div className="hidden md:block flex-1 h-0.5 bg-slate-200 ml-4 rounded-full" />
                    )}
                  </div>

                  {/* Horizontal Job Card */}
                  <div
                    className={`bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-xl ${currentTheme.cardHoverShadow} transition-all duration-300 flex flex-col justify-between h-full group ${
                      isCurrent ? `border-l-4 ${currentTheme.accentBorder}` : ''
                    }`}
                  >
                    <div>
                      {/* Company Header with Logo on the left */}
                      <div className="flex items-start gap-4 mb-4">
                        <CompanyLogo
                          companyId={job.id}
                          imageSrc={job.logo}
                          fallbackSrc={job.fallbackLogo}
                          className="w-12 h-12"
                        />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                            {job.company}
                          </h3>
                          <p className={`${currentTheme.primaryText} font-medium mt-0.5 text-sm`}>
                            {job.role}
                          </p>
                        </div>
                      </div>

                      {/* Job Description */}
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mt-4">
                        {job.description}
                      </p>
                    </div>

                    {/* Skills Learned Bubbles */}
                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Skills Learned
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.skillsLearned.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className={`flex items-center gap-2 ${currentTheme.accentBgSubtle} px-3.5 py-1.5 rounded-full border ${currentTheme.accentBorder} hover:scale-[1.02] transition-transform shadow-xs`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${currentTheme.primaryBg} shrink-0`}
                            />
                            <span className="text-slate-700 text-xs font-semibold whitespace-nowrap">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Learned Summary Box at the very bottom */}
        <div
          className={`p-7 sm:p-8 ${currentTheme.accentBgLight} rounded-3xl border ${currentTheme.accentBorder} shadow-xs max-w-4xl mx-auto`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h4 className="font-bold text-slate-900 text-base uppercase tracking-wider">
                Skills Learned
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Competencies developed across customer service, operations, and team collaboration.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {ORUMIG_DATA.competencies.map((skill) => (
              <span
                key={skill}
                className={`px-4 py-2 bg-white ${currentTheme.primaryLightText} text-xs font-bold rounded-full border ${currentTheme.accentBorder} uppercase tracking-wider shadow-xs hover:scale-105 transition-transform`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
