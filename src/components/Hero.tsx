import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-sky-50 pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-60" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white text-sky-600 text-xs font-bold mb-6 shadow-sm border border-sky-100 uppercase tracking-widest">
              Sprott School of Business
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight leading-none">
              Owen Rumig
            </h1>
            <div className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl text-sky-600 font-light tracking-wide leading-tight">
                Business Student
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-sky-600 font-light tracking-wide leading-tight">
                Trading Card Collector
              </p>
            </div>
            <div className="mt-10 md:mt-12 flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/owen-rumig-862701255/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-700 hover:shadow-2xl hover:-translate-y-1 transition-all shadow-lg shadow-sky-200 text-sm uppercase tracking-widest text-center"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Enhanced sky blue glow behind the circle */}
              <div className="absolute inset-0 bg-sky-400 rounded-full blur-[60px] md:blur-[120px] transform scale-100 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
              <div className="absolute inset-0 bg-sky-300 rounded-full blur-[30px] md:blur-[60px] transform scale-90 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              
              <div className="relative animate-soft-float">
                {/* Circular Frame Container with Light Blue Border */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-[480px] md:h-[480px] rounded-full p-1 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border-[4px] md:border-[8px] border-sky-200 overflow-hidden relative z-10 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:border-sky-300 group-hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)]">
                  <div className="w-full h-full rounded-full border-[6px] md:border-[12px] border-white overflow-hidden bg-sky-50">
                    <img 
                      src="https://raw.githubusercontent.com/owenrumig/my-website-assets/main/profile.png" 
                      alt="Owen Rumig Profile Photo" 
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('picsum.photos')) {
                          target.src = "https://picsum.photos/seed/owen/600/600";
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative external rings framing the circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-sky-200/20 rounded-full -z-0 pointer-events-none group-hover:scale-110 transition-all duration-1000 hidden sm:block" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border border-sky-100/10 rounded-full -z-0 pointer-events-none group-hover:scale-115 transition-all duration-1500 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
