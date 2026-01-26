
import React from 'react';

const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-24 bg-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">Beyond Business</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
            INTERESTS
          </h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-8 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-hockey-puck text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Hockey Cards</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Primarily focused on collecting and trading hockey cards. It's a deep passion that blends sports appreciation with market dynamics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-8 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-store text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Market Presence</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              I actively sell cards on eBay and engage with the trading card community on Twitter, discussing market trends and personal finds.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 mb-8 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-gamepad text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Digital Leisure</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Beyond the physical world of cards, I enjoy playing video games as a way to unwind and sharpen strategic thinking skills.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white p-10 rounded-3xl border border-sky-100 text-center max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 italic">
            “I’m very interested in collecting trading cards, primarily hockey cards, and occasionally Pokémon cards. I sell cards on eBay and post on Twitter about cards I’m buying or selling. I also enjoy playing video games in my free time.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interests;
