import React from 'react';
import { ExternalLink, Trophy, ArrowUpRight, Medal, Globe, Lock } from 'lucide-react';
import { ColorTheme } from '../theme/colorThemes';
import { ORUMIG_DATA } from '../data/orumigData';

interface OrumigSpecialProjectsProps {
  currentTheme: ColorTheme;
}

export const OrumigSpecialProjects: React.FC<OrumigSpecialProjectsProps> = ({ currentTheme }) => {
  const appUrl = ORUMIG_DATA.fantasyHockeyUrl || 'https://hockey-power-rankings.vercel.app/';

  const pillars = [
    {
      image: 'clock.png',
      alt: 'Multi-Season Baseline Clock',
      title: "Multi-Season Statistical Baseline",
      desc: "Rather than judging a team solely on current-season point totals, the engine blends historical production (60% last season, 30% two seasons ago, 10% three seasons ago) to establish true player capabilities."
    },
    {
      image: 'icecube.jpeg',
      alt: 'Bad-Start Adjustment Icecube',
      title: "Bad-Start & Cold-Streak Adjustment",
      desc: "If elite stars have an unlucky slow start to the year, raw standings falsely make their team look weak. Incorporating ESPN projected baselines normalizes for early-season statistical noise."
    },
    {
      image: 'bars.png',
      alt: 'Roster Quality Bars',
      title: "True Roster Quality (Active + Bench)",
      desc: "Evaluates comprehensive roster depth rather than small-sample head-to-head match outcomes, producing a predictive power ranking on an authentic 30–90 scale."
    },
    {
      image: 'box.png',
      alt: 'Stat Redistribution Box',
      title: "Stat Redistribution Rule",
      desc: "Dynamically redistributes weights proportionally for rookies without NHL track records or injured players, ensuring no team is mathematically penalized unfairly."
    }
  ];

  // Authentic teams and data directly from The Big Man League on hockey-power-rankings.vercel.app
  const liveTeams = [
    { rank: 1, name: "Uncle H", owner: "Mike Nolan", powerScore: 87.03, record: "1-0-0", topStar: "Evan Bouchard", points: 33.95 },
    { rank: 2, name: "Team Cheese Burger", owner: "Liam Aubertin", powerScore: 86.49, record: "1-0-0", topStar: "Sebastian Aho", points: 28.70 },
    { rank: 3, name: "Dumbos squad", owner: "Owen Rumig", powerScore: 81.21, record: "1-0-0", topStar: "Jack Eichel", points: 30.80 },
    { rank: 4, name: "Team The man", owner: "Marc Vall", powerScore: 79.51, record: "1-0-0", topStar: "Connor McDavid", points: 32.70 },
    { rank: 5, name: "Tysi's team", owner: "Emma Tysick", powerScore: 77.65, record: "1-0-0", topStar: "Jesper Wallstedt", points: 30.20 },
    { rank: 6, name: "better than marc 2", owner: "Abby Carter", powerScore: 76.38, record: "1-0-0", topStar: "Dylan Guenther", points: 24.45 },
    { rank: 7, name: "Shoot top deck", owner: "Charlie Polite", powerScore: 75.00, record: "1-0-0", topStar: "Mark Stone", points: 26.65 },
    { rank: 8, name: "Meni and Abi uwu", owner: "Alex Mellon, Abigail Matthews", powerScore: 45.00, record: "0-1-0", topStar: "Kirill Kaprizov", points: 27.80 },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50/50 backdrop-blur-xs scroll-mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <span
            className={`font-bold uppercase tracking-widest text-sm mb-4 ${currentTheme.primaryText}`}
          >
            Featured Web Application
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            SPECIAL PROJECTS
          </h2>
          <div className={`w-20 h-1.5 ${currentTheme.primaryBg} rounded-full mb-6`} />
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            Custom sports analytics platform and web application engineered to solve early-season variance in fantasy hockey leagues.
          </p>
        </div>

        {/* Main Showcase Container */}
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Project Overview Card */}
          <div
            className={`bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-xl ${currentTheme.cardHoverShadow} transition-all duration-300`}
          >
            {/* Project Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 p-2.5 flex items-center justify-center shrink-0 shadow-md text-white border border-cyan-400/40`}
                >
                  <Trophy className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    The Big Man — Fantasy Hockey Power Rankings
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Modern NHL-Inspired Fantasy Analytics & Predictive Roster Evaluation
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Production App
                </span>

                <a
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${currentTheme.primaryBg} ${currentTheme.primaryHoverBg} transition-all shadow-xs hover:shadow-md flex items-center gap-2`}
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Core Premise & Why Owen Built It */}
            <div className="mb-10 bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Why I Built This Platform
              </h4>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light">
                I wanted to create a platform that didn't solely look at win/loss standings and current point totals. Early in the season, raw standings can be misleading—if an elite star player is experiencing a temporary cold streak or bad start, the standings make it look like their owner has a bad team.
              </p>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light mt-3">
                To solve this, I designed an algorithm that factors in not only current-season production, but also historical data from the last few seasons alongside ESPN projections. This normalizes for early-season slumps and reveals each team's true, underlying roster strength.
              </p>
            </div>

            {/* 4 Architectural Pillars */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Core Methodology & Analytical Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} shadow-xs transition-transform hover:scale-[1.01] flex items-start gap-4`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 p-2 flex items-center justify-center shrink-0 shadow-xs overflow-hidden">
                      <img
                        src={`https://raw.githubusercontent.com/owenrumig/my-website-assets/main/${pillar.image}`}
                        alt={pillar.alt}
                        onError={(e) => {
                          e.currentTarget.src = `/src/assets/images/${pillar.image}`;
                        }}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 mb-1">
                        {pillar.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Authentic Live Website Mockup (Styled Exactly like hockey-power-rankings.vercel.app) */}
          <div className="rounded-3xl border border-slate-800 bg-[#070b14] shadow-2xl overflow-hidden text-slate-100">
            {/* Browser Top Window Bar */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#0b1220] border-b border-slate-800 flex items-center justify-between gap-4 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center px-4 py-1.5 rounded-lg bg-[#060a12] border border-slate-800 text-xs font-mono text-slate-300 gap-2">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span className="truncate">https://hockey-power-rankings.vercel.app</span>
              </div>

              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* In-App Navigation Bar (Directly from hockey-power-rankings.vercel.app) */}
            <div className="px-6 py-4 border-b border-slate-800/80 bg-[#070b14]/90 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center border border-cyan-400/40 shadow-sm">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-extrabold uppercase tracking-wider text-sm sm:text-base text-white">
                    The Big Man — Power Rankings
                  </div>
                  <div className="text-[11px] text-cyan-400 font-mono">
                    2026–27 Season · The Big Man League
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-mono text-[11px]">
                  Real Data Mode
                </span>
                <span className="text-slate-400 hidden sm:inline">14 Active Franchises</span>
              </div>
            </div>

            {/* In-App Podium: Top 3 Franchise Cards */}
            <div className="p-6 border-b border-slate-800/80 bg-[#060a12]">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Medal className="w-3.5 h-3.5 text-amber-400" />
                <span>Current League Podium</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1st Place - Gold */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-amber-950/30 to-[#070b14] border border-amber-500/40 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-400 text-slate-950">
                      #1 Gold
                    </span>
                    <span className="font-mono text-xs text-amber-300">Record: 1-0-0</span>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-0.5">Uncle H</h5>
                  <p className="text-xs text-slate-400 mb-3">Mike Nolan</p>
                  <div className="flex items-baseline justify-between pt-2 border-t border-amber-500/20">
                    <span className="text-[11px] font-mono text-slate-400">Power Value</span>
                    <span className="text-xl font-mono font-bold text-amber-400">87.03</span>
                  </div>
                </div>

                {/* 2nd Place - Silver */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-slate-800/40 to-[#070b14] border border-slate-400/40 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-slate-300 text-slate-950">
                      #2 Silver
                    </span>
                    <span className="font-mono text-xs text-slate-300">Record: 1-0-0</span>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-0.5">Team Cheese Burger</h5>
                  <p className="text-xs text-slate-400 mb-3">Liam Aubertin</p>
                  <div className="flex items-baseline justify-between pt-2 border-t border-slate-400/20">
                    <span className="text-[11px] font-mono text-slate-400">Power Value</span>
                    <span className="text-xl font-mono font-bold text-slate-200">86.49</span>
                  </div>
                </div>

                {/* 3rd Place - Bronze */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-amber-950/20 to-[#070b14] border border-amber-600/30 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-gradient-to-r from-amber-600 to-amber-500 text-white">
                      #3 Bronze
                    </span>
                    <span className="font-mono text-xs text-amber-400/90">Record: 1-0-0</span>
                  </div>
                  <h5 className="text-lg font-bold text-white mb-0.5">Dumbos squad</h5>
                  <p className="text-xs text-slate-400 mb-3">Owen Rumig</p>
                  <div className="flex items-baseline justify-between pt-2 border-t border-amber-600/20">
                    <span className="text-[11px] font-mono text-slate-400">Power Value</span>
                    <span className="text-xl font-mono font-bold text-amber-300">81.21</span>
                  </div>
                </div>
              </div>
            </div>

            {/* In-App Leaderboard Table (Authentic styling from live site) */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-[#070b14] text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-5 text-center w-14">Rank</th>
                    <th className="py-3 px-5">Franchise & Owner</th>
                    <th className="py-3 px-4 text-center">Record</th>
                    <th className="py-3 px-4 text-center">Power Value</th>
                    <th className="py-3 px-5">Top Contributor (Most Actual Points)</th>
                    <th className="py-3 px-5 text-right">League Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-sans">
                  {liveTeams.map((team) => (
                    <tr
                      key={team.rank}
                      className="hover:bg-slate-900/50 transition-colors"
                    >
                      {/* Rank */}
                      <td className="py-3.5 px-5 text-center">
                        <span
                          className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-mono text-xs font-bold ${
                            team.rank === 1
                              ? 'bg-amber-400 text-slate-950'
                              : team.rank === 2
                              ? 'bg-slate-300 text-slate-950'
                              : team.rank === 3
                              ? 'bg-amber-600 text-white'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {team.rank}
                        </span>
                      </td>

                      {/* Franchise */}
                      <td className="py-3.5 px-5">
                        <div className="font-bold text-white text-sm">
                          {team.name}
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {team.owner}
                        </span>
                      </td>

                      {/* Record */}
                      <td className="py-3.5 px-4 text-center font-mono text-slate-300 font-medium">
                        {team.record}
                      </td>

                      {/* Power Score */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="font-mono text-sm font-bold text-cyan-400">
                          {team.powerScore.toFixed(2)}
                        </span>
                      </td>

                      {/* Top Contributor by Actual Points */}
                      <td className="py-3.5 px-5 text-slate-300 text-xs font-mono">
                        <span className="text-white font-medium">{team.topStar}</span>
                        <span className="text-cyan-400 ml-1.5 text-[11px]">({team.points.toFixed(2)} pts)</span>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-5 text-right">
                        <span className="text-[11px] font-mono text-slate-400">
                          {team.rank <= 3 ? (
                            <span className="text-amber-400 font-bold">Podium Contender</span>
                          ) : team.rank <= 6 ? (
                            <span className="text-emerald-400">Playoff Bound</span>
                          ) : (
                            <span className="text-slate-500">In the Hunt</span>
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* In-App Live Formula & Footer Banner */}
            <div className="p-5 border-t border-slate-800 bg-[#070b14] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-light text-center sm:text-left">
                <span className="text-cyan-400 font-mono font-bold">The Big Man Analytics Engine:</span>{' '}
                Formula: Power Score = 30 + 60 × (0.75 × Winning % + 0.25 × Normalized Player Strength) on a 30–90 scale.
              </div>

              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-wider font-mono shadow-md transition-all flex items-center gap-2 shrink-0"
              >
                <span>Launch Live App</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
