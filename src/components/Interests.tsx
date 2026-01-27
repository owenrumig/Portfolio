import React, { useEffect, useRef, useState } from 'react';

const Interests: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="interests" ref={sectionRef} className="py-24 bg-sky-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <span className={`text-sky-600 font-bold uppercase tracking-widest text-sm mb-4 reveal ${isVisible ? 'active' : ''}`}>Beyond Business</span>
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight reveal ${isVisible ? 'active delay-100' : ''}`}>
            INTERESTS
          </h2>
          <div className={`w-20 h-1 bg-sky-500 rounded-full mb-10 reveal ${isVisible ? 'active delay-100' : ''}`} />
          
          {/* Summary Paragraph - Widened to max-w-4xl to match About Me section width */}
          <div className={`bg-white p-8 md:p-10 rounded-3xl border border-sky-100 text-center max-w-4xl mx-auto reveal ${isVisible ? 'active delay-200' : ''}`}>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              I’m very interested in collecting trading cards, primarily hockey cards, and occasionally Pokémon cards. I sell cards on eBay and post on Twitter about cards I’m buying or selling. I also enjoy playing video games in my free time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1: Hockey Cards */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.4)] hover:border-sky-200 transition-all duration-300 flex flex-col h-full">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-8 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-hockey-puck text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Hockey Cards</h3>
            <p className="text-slate-600 leading-relaxed font-light flex-grow">
              Primarily focused on collecting and trading hockey cards. I collect mainly Josh Norris and Ridly Greig cards, following the Senators closely.
            </p>
          </div>

          {/* Card 2: eBay Seller */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.4)] hover:border-sky-200 transition-all duration-300 flex flex-col h-full">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-8 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-store text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">eBay Seller</h3>
            <p className="text-slate-600 leading-relaxed font-light flex-grow">
              I actively sell cards on eBay and engage with the trading card community on Twitter, managing a growing digital storefront.
            </p>
            <div className="mt-6">
              <a 
                href="https://www.ebay.ca/usr/owru33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-sky-600 text-white text-xs font-bold rounded-full hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-wider"
              >
                View Marketplace
              </a>
            </div>
          </div>

          {/* Card 3: Digital Leisure */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.4)] hover:border-sky-200 transition-all duration-300 flex flex-col h-full">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-8 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-gamepad text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Digital Leisure</h3>
            <p className="text-slate-600 leading-relaxed font-light flex-grow">
              When I have time I enjoy spending it playing video games and making videos. I have previously been a part of the eSports team at Carleton.
            </p>
            <div className="mt-6">
              <a 
                href="https://linktr.ee/owenrumig" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-sky-600 text-white text-xs font-bold rounded-full hover:bg-sky-700 hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-wider"
              >
                View Linktree
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
