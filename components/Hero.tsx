import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-sky-50 pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white rounded-full blur-3xl opacity-70" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <span className="inline-block py-1 px-4 rounded-full bg-white text-sky-600 text-sm font-semibold mb-6 shadow-sm border border-sky-100">
              Future Accountant
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight">
              Owen Rumig
            </h1>
            <p className="text-xl md:text-2xl text-sky-600 font-light tracking-wide leading-relaxed">
              Accounting Student <span className="text-slate-300 mx-1">|</span> Business Student <span className="text-slate-300 mx-1">|</span> Trading Card Enthusiast
            </p>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/owen-rumig-862701255/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-sky-600 text-white font-semibold rounded-full hover:bg-sky-700 hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg shadow-sky-200"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Animated glow behind the character */}
              <div className="absolute inset-0 bg-sky-300 rounded-full blur-3xl transform scale-90 opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
              
              <div className="relative animate-soft-float">
                <img 
                  src="profile.png" 
                  alt="Owen Rumig Avatar" 
                  className="w-72 h-72 md:w-[450px] md:h-[450px] object-contain relative z-10 drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback if profile.png isn't available
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('picsum.photos')) {
                        target.src = "https://picsum.photos/seed/owen/600/600";
                        target.classList.add("rounded-full", "border-8", "border-white");
                    }
                  }}
                />
              </div>

              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-sky-200/50 rounded-full -z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border border-sky-100/30 rounded-full -z-0" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-sky-800">Scroll</span>
        <div className="w-px h-8 bg-sky-400" />
      </div>
    </section>
  );
};

export default Hero;