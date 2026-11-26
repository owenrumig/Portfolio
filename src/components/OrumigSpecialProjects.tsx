import React from 'react';
import { ExternalLink, ArrowUpRight, ArrowLeft, Globe, Lock, Upload, Calendar, RefreshCw, Search, Layers } from 'lucide-react';
import { ColorTheme } from '../theme/colorThemes';
import { ORUMIG_DATA } from '../data/orumigData';

interface OrumigSpecialProjectsProps {
  currentTheme: ColorTheme;
}

export const OrumigSpecialProjects: React.FC<OrumigSpecialProjectsProps> = ({ currentTheme }) => {
  const appUrl = ORUMIG_DATA.fantasyHockeyUrl || 'https://rosterpower.com/';

  const pillars = [
    {
      image: 'clock.png',
      alt: 'Multi-Season Baseline Clock',
      title: "Multi-Season Statistical Baseline",
      desc: "Rather than judging a team solely on current-season point totals, the engine blends current production (52.5%), a multi-season historical baseline (17.5%) and ESPN projections (30%) to establish true player capabilities."
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
      desc: "Evaluates full roster depth, bench included, rather than small-sample head-to-head outcomes. Rankings are ordered 100% by roster strength, with win-loss shown only for context."
    },
    {
      image: 'box.png',
      alt: 'Stat Redistribution Box',
      title: "Stat Redistribution Rule",
      desc: "Dynamically redistributes weights proportionally for rookies without NHL track records or injured players, ensuring no team is mathematically penalized unfairly."
    }
  ];

  const logoSrc = `${(import.meta as any).env?.BASE_URL ?? "/"}rosterpower-logo.webp`;
  const leagueUrl = 'https://www.rosterpower.com/?sport=hockey&league=1737693371';
  const condensedStyle = { fontFamily: '"Barlow Condensed", system-ui, sans-serif' };

  // Snapshot of The Big Man league page on rosterpower.com (Nov 26, 2026)
  const snapshotDate = 'Nov 26, 2026, 5:26 PM EST';

  const podium = [
    { rank: 1, label: 'League Leader', name: 'Meni and Abi uwu', record: '5-3', score: 90.0, move: '↑ +1' },
    { rank: 2, label: '2nd Place Standing', name: 'Dumbos squad', record: '6-2', score: 78.56, move: '↑ +3' },
    { rank: 3, label: '3rd Place Standing', name: 'Uncle H', record: '6-2', score: 78.23, move: '— —' },
  ];

  const podiumStyles: Record<number, { card: string; badge: string; label: string }> = {
    1: { card: 'from-amber-950/40 to-[#0b1220] border-amber-500/50', badge: 'border-amber-500/60 bg-amber-950/60 text-amber-300', label: 'text-amber-300' },
    2: { card: 'from-slate-800/40 to-[#0b1220] border-slate-500/50', badge: 'border-slate-500/60 bg-slate-800/70 text-slate-200', label: 'text-slate-200' },
    3: { card: 'from-orange-950/40 to-[#0b1220] border-orange-700/50', badge: 'border-orange-700/60 bg-orange-950/60 text-orange-300', label: 'text-orange-400' },
  };

  const leaderboard = [
    { name: 'Meni and Abi uwu', record: '5-3', score: 90.0 },
    { name: 'Dumbos squad', record: '6-2', score: 78.56 },
    { name: 'Uncle H', record: '6-2', score: 78.23 },
    { name: 'Dusters', record: '3-5', score: 74.41 },
    { name: "Tysi's team", record: '5-3', score: 72.97 },
    { name: 'better than marc 3', record: '1-7', score: 69.99 },
    { name: 'Team Cram', record: '4-4', score: 68.57 },
    { name: 'Team The man', record: '6-2', score: 66.85 },
    { name: 'Lafferty’s Bald Head', record: '5-3', score: 65.86 },
    { name: 'Team Cheese Burger', record: '7-1', score: 64.75 },
    { name: 'The Castros', record: '3-5', score: 56.33 },
    { name: 'Shoot top deck', record: '2-6', score: 51.39 },
    { name: 'mintens mittens', record: '1-7', score: 48.84 },
    { name: 'better than marc 2', record: '2-6', score: 30.0 },
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
            Custom sports analytics platform that ranks ESPN fantasy teams (NHL, NFL and NBA) purely on roster strength, separating real talent from schedule luck.
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
                <img
                  src={logoSrc}
                  alt="RosterPower logo"
                  className="w-14 h-14 rounded-2xl shrink-0 shadow-md border border-slate-200"
                />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    RosterPower — Fantasy Power Rankings
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    ESPN Fantasy Multi-Sport Power Rankings, Trade Analysis & Head-to-Head Comparisons
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

          {/* Live Website Preview (mirrors rosterpower.com/?sport=hockey&league=1737693371) */}
          <div
            className="rounded-3xl border border-slate-800 bg-[#070b14] shadow-2xl overflow-hidden text-slate-100"
            style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}
          >
            {/* Browser Top Window Bar */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#0b1220] border-b border-slate-800 flex items-center justify-between gap-4 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center px-4 py-1.5 rounded-lg bg-[#060a12] border border-slate-800 text-xs font-mono text-slate-300 gap-2">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">rosterpower.com/?sport=hockey&amp;league=1737693371</span>
              </div>
              <a
                href={leagueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Site Header */}
            <div className="px-5 sm:px-7 py-3.5 border-b border-slate-800/80 bg-[#070b14] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-4 h-4 text-cyan-400" />
                <img src={logoSrc} alt="RosterPower logo" className="w-8 h-8 rounded-md" />
                <span className="font-bold uppercase tracking-wide text-base sm:text-lg" style={condensedStyle}>
                  <span className="text-white">Roster</span>
                  <span className="text-cyan-400">Power</span>
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-800/70 bg-cyan-950/40 text-cyan-200 text-xs font-medium">
                <Upload className="w-3.5 h-3.5" />
                Data
              </span>
            </div>

            {/* League Hero */}
            <div className="relative px-5 sm:px-7 pt-8 pb-8 border-b border-slate-800/80 overflow-hidden bg-[radial-gradient(ellipse_at_top,_#14233a_0%,_#0a1120_50%,_#070b14_85%)]">
              <div className="absolute inset-x-0 top-0 h-20 bg-[repeating-linear-gradient(90deg,transparent_0_46px,rgba(148,163,184,0.05)_46px_48px)] pointer-events-none" />
              <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider text-slate-400">
                    <span className="px-2 py-0.5 rounded border border-cyan-700/70 bg-cyan-950/50 text-cyan-300 font-mono">Hockey (NHL)</span>
                    <span>/</span>
                    <span className="text-slate-300">14 Member Franchises</span>
                    <span>/</span>
                    <span>100% Roster Strength</span>
                  </div>
                  <h4 className="mt-4 text-4xl sm:text-5xl font-bold uppercase leading-none text-white" style={condensedStyle}>
                    The Big Man
                  </h4>
                  <div className="mt-1.5 text-lg sm:text-2xl font-bold uppercase text-cyan-300" style={condensedStyle}>
                    Official Power Rankings Leaderboard
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300">
                    2026–27 Season · Full Roster Depth &amp; Weighted Points Analytics
                  </p>
                </div>
                <div className="w-full sm:w-72 shrink-0 p-4 rounded-xl border border-slate-700/70 bg-[#0b1220]/90">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      Last Updated
                    </span>
                    <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="mt-1.5 font-mono text-sm text-white">{snapshotDate}</div>
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Roster Strength</span>
                    <span className="font-mono text-cyan-400">14 Teams</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Three Powerhouses */}
            <div className="px-5 sm:px-7 py-8 border-b border-slate-800/80 bg-[#081019]">
              <div className="flex flex-wrap items-end justify-between gap-2 mb-5">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Championship Contenders</div>
                  <div className="text-xl sm:text-2xl font-bold uppercase text-white" style={condensedStyle}>
                    Top Three Powerhouses
                  </div>
                </div>
                <span className="text-xs text-slate-400">
                  Formula Aggregate · <span className="font-mono text-cyan-400">Top Tier</span>
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-end">
                {podium.map((team) => (
                  <div
                    key={team.rank}
                    className={`p-5 rounded-2xl border bg-gradient-to-b ${podiumStyles[team.rank].card} ${
                      team.rank === 1 ? 'md:order-2 md:pb-7' : team.rank === 2 ? 'md:order-1' : 'md:order-3'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-8 h-8 rounded-lg border flex items-center justify-center font-bold ${podiumStyles[team.rank].badge}`}>
                          {team.rank}
                        </span>
                        <span className={`text-[11px] font-bold uppercase tracking-wide ${podiumStyles[team.rank].label}`}>
                          {team.label}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md border border-emerald-700/60 bg-emerald-950/50 text-emerald-300 text-[11px] font-mono">
                        {team.move}
                      </span>
                    </div>
                    <div className="mt-4 text-xl font-bold text-white">{team.name}</div>
                    <span className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-700 bg-[#070b14] text-[10px] uppercase text-slate-400">
                      Record <span className="font-mono text-cyan-300">{team.record}</span>
                    </span>
                    <div className="mt-5 pt-4 border-t border-slate-800 flex items-end justify-between gap-2">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-400">Team Value</div>
                        <div className="font-mono text-3xl font-bold text-amber-100">{team.score.toFixed(2)}</div>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 text-right">Power Score (30–90)</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400">
                      <span>View Full Roster</span>
                      <span>→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Power Rankings Leaderboard */}
            <div className="px-5 sm:px-7 py-8 bg-[#070b14]">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                <span className="text-cyan-400">Official League Table</span>
                <span className="text-slate-600">/</span>
                <span className="text-cyan-400">14 Teams Loaded</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-300">Roster Strength Basis</span>
              </div>
              <div className="mt-1 text-xl sm:text-2xl font-bold uppercase text-white" style={condensedStyle}>
                Power Rankings Leaderboard
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-800 bg-[#0b1220] text-xs text-slate-500 w-full sm:w-60">
                  <Search className="w-3.5 h-3.5" />
                  Search team or record...
                </div>
                <div className="flex gap-1 p-1 rounded-lg border border-slate-800 bg-[#0b1220] text-xs">
                  {['All 14', 'Top 3', 'Top 6', 'Bubble (7–11)'].map((tab, i) => (
                    <span
                      key={tab}
                      className={`px-2.5 py-1 rounded-md ${i === 0 ? 'bg-cyan-950/70 border border-cyan-700/60 text-cyan-200' : 'text-slate-400'}`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 px-4 py-3 rounded-xl border border-cyan-900/60 bg-cyan-950/20 text-xs text-slate-300 flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold text-cyan-300">100% Roster Strength:</span> Rankings are calculated purely from
                  total roster talent, active starters, and depth. Win-loss records are shown for context only.
                </span>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-[#0b1220] text-slate-400 text-[10px] uppercase tracking-wider" style={condensedStyle}>
                      <th className="py-3 px-4 w-16">Rank</th>
                      <th className="py-3 px-4">Fantasy Franchise</th>
                      <th className="py-3 px-4 text-right">Roster Strength</th>
                      <th className="py-3 px-4 w-10" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/70">
                    {leaderboard.map((team, idx) => {
                      const rank = idx + 1;
                      return (
                        <tr
                          key={team.name}
                          className={`hover:bg-slate-900/50 transition-colors ${
                            rank === 1
                              ? 'shadow-[inset_3px_0_0_#fbbf24]'
                              : rank === 2
                              ? 'shadow-[inset_3px_0_0_#cbd5e1]'
                              : rank === 3
                              ? 'shadow-[inset_3px_0_0_#d97706]'
                              : ''
                          }`}
                        >
                          <td className="py-3 px-4">
                            <span
                              className={`inline-flex items-center justify-center w-7 h-7 rounded-lg border font-bold text-xs ${
                                rank <= 3 ? podiumStyles[rank].badge : 'border-slate-700 bg-slate-900 text-slate-300'
                              }`}
                            >
                              {rank}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="font-semibold text-white text-sm">{team.name}</div>
                            <span className="text-[10px] uppercase text-slate-500">
                              Rec <span className="font-mono text-cyan-300">{team.record}</span>
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className={`font-mono text-sm font-bold ${rank <= 3 ? 'text-amber-300' : 'text-cyan-300'}`}>
                              {team.score.toFixed(2)}
                            </div>
                            <div className="text-[9px] uppercase tracking-wider text-slate-500">Roster Score</div>
                          </td>
                          <td className="py-3 px-4 text-slate-500">›</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-slate-400 text-center sm:text-left">
                  Showing 14 of 14 Franchises · Sorted by Highest Rank (1–14) ·{' '}
                  <span className="font-mono text-cyan-400">Power Score = 30 + 60 × [Normalized Full-Roster Strength]</span>
                </div>
                <a
                  href={leagueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2 shrink-0"
                >
                  <span>View Live Rankings</span>
                  <Globe className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
