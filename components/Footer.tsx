import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Twitter', 
      href: 'https://x.com/owenrumig', 
      icon: 'fa-brands fa-x-twitter' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/owen-rumig-862701255/', 
      icon: 'fa-brands fa-linkedin-in' 
    },
    { 
      name: 'Email', 
      href: 'mailto:owendrumig@gmail.com', 
      icon: 'fa-solid fa-envelope' 
    }
  ];

  return (
    <footer className="bg-white py-16 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-2xl font-bold tracking-tight text-slate-900">
            Owen Rumig<span className="text-sky-600">.</span>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                target={social.href.startsWith('mailto:') ? undefined : "_blank"} 
                rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-slate-600 hover:bg-sky-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-110 hover:-translate-y-1"
                aria-label={social.name}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
          
          <div className="text-sm text-slate-400 font-light">
            &copy; {new Date().getFullYear()} Owen Rumig All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;