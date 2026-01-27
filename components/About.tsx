import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <span className={`text-sky-600 font-bold uppercase tracking-widest text-sm mb-4 reveal ${isVisible ? 'active' : ''}`}>Who I Am</span>
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight reveal ${isVisible ? 'active delay-100' : ''}`}>
            ABOUT ME
          </h2>
          <div className={`w-20 h-1 bg-sky-500 rounded-full mb-10 reveal ${isVisible ? 'active delay-100' : ''}`} />
          <p className={`text-lg md:text-xl text-slate-600 leading-relaxed font-light reveal ${isVisible ? 'active delay-200' : ''}`}>
            Hi, I’m Owen Rumig. I am currently a student at <span className="text-sky-700 font-medium">Carleton University</span> in the <span className="text-sky-700 font-medium">Sprott School of Business</span>. I have a strong interest in accounting and am exploring it as a future career path.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full text-left">
            <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sky-600 mb-6 shadow-sm">
                <i className="fa-solid fa-graduation-cap text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Education</h3>
              <p className="text-slate-600">
                Sprott School of Business at Carleton University. Concentration in Accounting
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-sky-600 mb-6 shadow-sm">
                <i className="fa-solid fa-bullseye text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Goal</h3>
              <p className="text-slate-600">
                Working in a professional environment and make a meaningful contribution to my teams work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;