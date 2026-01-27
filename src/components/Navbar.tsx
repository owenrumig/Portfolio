import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Interests', href: '#interests' },
    { name: 'Career', href: '#career' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-sky-600 hover:scale-105 transition-transform z-50">
          OR<span className="text-slate-900">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-slate-900 p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-2xl font-bold text-slate-900 hover:text-sky-600 transition-colors uppercase tracking-[0.2em]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-8">
              <div className="flex space-x-6">
                <a href="https://x.com/owenrumig" target="_blank" className="text-sky-600 text-xl"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.linkedin.com/in/owen-rumig-862701255/" target="_blank" className="text-sky-600 text-xl"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:owendrumig@gmail.com" className="text-sky-600 text-xl"><i className="fa-solid fa-envelope"></i></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
