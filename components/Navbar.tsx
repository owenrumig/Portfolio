
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-sky-600">
          OR<span className="text-slate-900">.</span>
        </a>
        
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
