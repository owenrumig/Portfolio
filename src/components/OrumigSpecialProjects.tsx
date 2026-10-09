import React from 'react';
import { Sparkles, Clock, ExternalLink, TrendingUp, Cpu, Newspaper, Activity } from 'lucide-react';
import { ColorTheme } from '../theme/colorThemes';

interface OrumigSpecialProjectsProps {
  currentTheme: ColorTheme;
}

interface StockRow {
  ticker: string;
  name: string;
  classification: 'Promising' | 'Potential' | 'Watch';
  newsSummary: string;
  statementUrl: string;
  statementSource: string;
  rsi: number;
  rsiStatus: string;
  upcomingTech: string;
  movingAverage: string;
}

export const OrumigSpecialProjects: React.FC<OrumigSpecialProjectsProps> = ({ currentTheme }) => {
  const analysisFactors = [
    {
      title: "News Statements & Sentiment",
      desc: "Aggregating corporate press releases, earnings filings, and financial news headlines to assess institutional market sentiment and breaking catalysts.",
      image: "https://raw.githubusercontent.com/owenrumig/my-website-assets/main/news.jpg",
      fallbackImage: "/src/assets/images/news.jpg"
    },
    {
      title: "Upcoming Technology & Trends",
      desc: "Tracking disruptive innovations across artificial intelligence, semiconductor hardware, biotechnology, and emerging tech roadmaps.",
      image: "https://raw.githubusercontent.com/owenrumig/my-website-assets/main/robot.webp",
      fallbackImage: "/src/assets/images/robot.webp"
    },
    {
      title: "Moving Averages & Baselines",
      desc: "Calculating short and long-term moving averages (20-day, 50-day, 200-day SMA/EMA) to evaluate underlying trend structure and support/resistance zones.",
      image: "https://raw.githubusercontent.com/owenrumig/my-website-assets/main/lines.webp",
      fallbackImage: "/src/assets/images/lines.webp"
    },
    {
      title: "Momentum & Velocity Dynamics",
      desc: "Measuring relative strength indicators (RSI), MACD crossovers, and acceleration in pre-market volume to spot breakout setups.",
      image: "https://raw.githubusercontent.com/owenrumig/my-website-assets/main/stock.png",
      fallbackImage: "/src/assets/images/stock.png"
    }
  ];

  const stockTableData: StockRow[] = [
    {
      ticker: "NVDA",
      name: "NVIDIA Corp.",
      classification: "Promising",
      newsSummary: "Enterprise datacenter demand projections raised with expanded hyperscaler supply agreements.",
      statementUrl: "https://nvidianews.nvidia.com/",
      statementSource: "NVIDIA Press Statement",
      rsi: 66.4,
      rsiStatus: "Bullish Momentum",
      upcomingTech: "Blackwell Ultra NVL72 rack-scale GPU architecture entering commercial volume production.",
      movingAverage: "Above 50D SMA (+4.8%) · Support confirmed"
    },
    {
      ticker: "MSFT",
      name: "Microsoft Corp.",
      classification: "Promising",
      newsSummary: "Accelerated cloud enterprise ARR reported, driven by sustained multi-cloud AI infrastructure adoption.",
      statementUrl: "https://news.microsoft.com/",
      statementSource: "Microsoft Official Release",
      rsi: 62.1,
      rsiStatus: "Upward Velocity",
      upcomingTech: "Autonomous agentic workflow systems rollout and custom Maia AI accelerator cluster deployments.",
      movingAverage: "Above 20D & 50D EMA (+2.3%) · Consolidation breakout"
    },
    {
      ticker: "PLTR",
      name: "Palantir Tech.",
      classification: "Potential",
      newsSummary: "Multi-year federal agency intelligence contract expanded alongside commercial bootcamp conversion surge.",
      statementUrl: "https://investors.palantir.com/news-details",
      statementSource: "Palantir IR Statement",
      rsi: 58.6,
      rsiStatus: "Accumulation Zone",
      upcomingTech: "AIP (Artificial Intelligence Platform) real-time enterprise operational ontology engine scaling.",
      movingAverage: "Testing 20D SMA Resistance (-0.6%) · Higher-low hold"
    },
    {
      ticker: "AMD",
      name: "AMD Inc.",
      classification: "Potential",
      newsSummary: "Strategic hyperscaler semiconductor agreements and updated roadmap execution targets presented.",
      statementUrl: "https://ir.amd.com/news-events/press-releases",
      statementSource: "AMD Press Announcement",
      rsi: 53.2,
      rsiStatus: "Neutral-Bullish",
      upcomingTech: "Next-gen Instinct MI350 accelerator platform with expanded HBM3e high-bandwidth memory.",
      movingAverage: "Reclaiming 200D SMA (+1.4%) · Long-term trend recovery"
    },
    {
      ticker: "AAPL",
      name: "Apple Inc.",
      classification: "Watch",
      newsSummary: "Quarterly component shipment notes show steady hardware demand ahead of upcoming refresh cycle.",
      statementUrl: "https://www.apple.com/newsroom/",
      statementSource: "Apple Newsroom Release",
      rsi: 49.5,
      rsiStatus: "Neutral Range",
      upcomingTech: "On-device foundational model integrations and Apple Intelligence private cloud compute systems.",
      movingAverage: "Consolidating at 50D SMA (0.0%) · Tight trading band"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50/50 backdrop-blur-xs scroll-mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <span
            className={`font-bold uppercase tracking-widest text-sm mb-4 ${currentTheme.primaryText}`}
          >
            Active Development
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            SPECIAL PROJECTS
          </h2>
          <div className={`w-20 h-1.5 ${currentTheme.primaryBg} rounded-full mb-6`} />
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            Merging financial investment analysis with modern AI to design automated research systems and daily market intelligence.
          </p>
        </div>

        {/* Main Showcase Card: AI Morning Statement */}
        <div className="max-w-6xl mx-auto">
          <div
            className={`bg-white p-7 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xs hover:-translate-y-1.5 hover:shadow-xl ${currentTheme.cardHoverShadow} transition-all duration-300`}
          >
            {/* Project Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                {/* Statement Image from GitHub */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-white border ${currentTheme.accentBorder} p-1.5 flex items-center justify-center shrink-0 shadow-xs overflow-hidden group-hover:scale-105 transition-transform`}
                >
                  <img
                    src="https://raw.githubusercontent.com/owenrumig/my-website-assets/main/statement.png"
                    alt="AI Morning Statement logo"
                    onError={(e) => {
                      e.currentTarget.src = '/src/assets/images/statement.png';
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    AI Morning Statement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Daily Pre-Market Stock & Catalyst Intelligence Engine
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${currentTheme.accentBgLight} ${currentTheme.primaryText} border ${currentTheme.accentBorder} shadow-xs flex items-center gap-1.5`}
                >
                  <span className={`w-2 h-2 rounded-full ${currentTheme.primaryBg} animate-pulse`} />
                  In Active Development
                </span>
              </div>
            </div>

            {/* Core Premise */}
            <div className="mb-10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Project Vision & Methodology
              </h4>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light">
                I am actively building an AI-powered system designed to generate an automated <strong>Morning Statement</strong> delivered directly each trading day before markets open. The system synthesizes vast quantitative and qualitative market data into clear, actionable pre-market briefings—identifying promising equities positioned for growth based on multi-factor analysis.
              </p>
            </div>

            {/* 4 Factor Analysis Pillars with Custom Asset Images */}
            <div className="mb-12">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Core Evaluation Factors
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {analysisFactors.map((factor, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl ${currentTheme.accentBgLight} border ${currentTheme.accentBorder} shadow-xs transition-transform hover:scale-[1.01] flex items-start gap-4`}
                  >
                    <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200/90 p-1.5 flex items-center justify-center shrink-0 shadow-xs overflow-hidden group-hover:scale-105 transition-transform">
                      <img
                        src={factor.image}
                        alt={factor.title}
                        onError={(e) => {
                          e.currentTarget.src = factor.fallbackImage;
                        }}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 mb-1">
                        {factor.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {factor.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Morning Statement Output: Professional Financial Table */}
            <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl overflow-hidden">
              {/* Output Top Header */}
              <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/70">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    Sample Morning Statement Output · Pre-Market 08:30 AM EST
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    2 Promising
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    2 Potential
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-700/80 text-slate-300 border border-slate-600">
                    1 Watch
                  </span>
                </div>
              </div>

              {/* Responsive Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                      <th className="py-4 px-5 font-semibold">Stock / Conviction</th>
                      <th className="py-4 px-5 font-semibold">News Statement & Link</th>
                      <th className="py-4 px-4 font-semibold text-center">Quant RSI</th>
                      <th className="py-4 px-5 font-semibold">Upcoming Tech</th>
                      <th className="py-4 px-5 font-semibold">Moving Average</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {stockTableData.map((stock) => {
                      const badgeClass =
                        stock.classification === 'Promising'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : stock.classification === 'Potential'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-800 text-slate-300 border-slate-700';

                      const rsiColor =
                        stock.rsi >= 60
                          ? 'text-emerald-400'
                          : stock.rsi >= 50
                          ? 'text-amber-400'
                          : 'text-slate-400';

                      return (
                        <tr
                          key={stock.ticker}
                          className="hover:bg-slate-800/40 transition-colors"
                        >
                          {/* Stock & Conviction */}
                          <td className="py-4 px-5 align-top">
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-sm font-bold text-white tracking-wide">
                                  {stock.ticker}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 font-light truncate max-w-[130px]">
                                {stock.name}
                              </p>
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono tracking-wider border ${badgeClass}`}
                              >
                                {stock.classification}
                              </span>
                            </div>
                          </td>

                          {/* News Statement with Link */}
                          <td className="py-4 px-5 align-top max-w-xs">
                            <p className="text-slate-200 text-xs font-light leading-relaxed mb-2">
                              {stock.newsSummary}
                            </p>
                            <a
                              href={stock.statementUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-sky-400 hover:text-sky-300 transition-colors underline underline-offset-2"
                              title={`View ${stock.statementSource}`}
                            >
                              <span>{stock.statementSource}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </td>

                          {/* Quantitative RSI */}
                          <td className="py-4 px-4 align-top text-center">
                            <div className="inline-flex flex-col items-center p-2 rounded-xl bg-slate-950/60 border border-slate-800 w-24">
                              <span className={`text-base font-bold font-mono ${rsiColor}`}>
                                {stock.rsi}
                              </span>
                              <span className="text-[9px] uppercase font-mono text-slate-400 tracking-wider mt-0.5">
                                {stock.rsiStatus}
                              </span>
                            </div>
                          </td>

                          {/* Upcoming Tech */}
                          <td className="py-4 px-5 align-top max-w-xs">
                            <div className="flex items-start gap-2">
                              <Cpu className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                              <p className="text-slate-300 text-xs font-light leading-relaxed">
                                {stock.upcomingTech}
                              </p>
                            </div>
                          </td>

                          {/* Moving Average */}
                          <td className="py-4 px-5 align-top max-w-[210px]">
                            <div className="flex items-start gap-2">
                              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <p className="font-mono text-[11px] text-slate-300 font-light leading-relaxed">
                                {stock.movingAverage}
                              </p>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile / Tablet Friendly Cards View */}
              <div className="lg:hidden p-5 space-y-4">
                {stockTableData.map((stock) => {
                  const badgeClass =
                    stock.classification === 'Promising'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : stock.classification === 'Potential'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-slate-800 text-slate-300 border-slate-700';

                  const rsiColor =
                    stock.rsi >= 60
                      ? 'text-emerald-400'
                      : stock.rsi >= 50
                      ? 'text-amber-400'
                      : 'text-slate-400';

                  return (
                    <div
                      key={stock.ticker}
                      className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-4"
                    >
                      {/* Mobile Card Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                        <div>
                          <span className="font-mono text-base font-bold text-white mr-2">
                            {stock.ticker}
                          </span>
                          <span className="text-xs text-slate-400">
                            · {stock.name}
                          </span>
                        </div>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase font-mono tracking-wider border ${badgeClass}`}
                        >
                          {stock.classification}
                        </span>
                      </div>

                      {/* News & Link */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Newspaper className="w-3 h-3 text-sky-400" />
                          News Statement
                        </span>
                        <p className="text-xs text-slate-200 font-light leading-relaxed">
                          {stock.newsSummary}
                        </p>
                        <a
                          href={stock.statementUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-sky-400 hover:text-sky-300 transition-colors pt-1"
                        >
                          <span>{stock.statementSource}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      {/* Metrics Grid: RSI, Tech, Moving Average */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                        <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-700/50">
                          <span className="text-[9px] font-mono uppercase text-slate-400 block mb-0.5">
                            Quantitative RSI
                          </span>
                          <span className={`text-sm font-bold font-mono ${rsiColor}`}>
                            {stock.rsi}
                          </span>
                          <span className="text-[10px] text-slate-400 block font-mono">
                            {stock.rsiStatus}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-700/50">
                          <span className="text-[9px] font-mono uppercase text-slate-400 block mb-0.5">
                            Upcoming Tech
                          </span>
                          <p className="text-[11px] text-slate-300 font-light leading-snug">
                            {stock.upcomingTech}
                          </p>
                        </div>

                        <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-700/50">
                          <span className="text-[9px] font-mono uppercase text-slate-400 block mb-0.5">
                            Moving Average
                          </span>
                          <p className="text-[11px] font-mono text-slate-300 leading-snug">
                            {stock.movingAverage}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
