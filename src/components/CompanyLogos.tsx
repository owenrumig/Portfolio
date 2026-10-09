import React, { useState } from 'react';

interface CompanyLogoProps {
  companyId: string;
  className?: string;
  imageSrc?: string;
  fallbackSrc?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  companyId,
  className = "w-11 h-11 sm:w-12 sm:h-12",
  imageSrc,
  fallbackSrc,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(imageSrc);
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    if (currentSrc !== fallbackSrc && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setImgError(true);
    }
  };

  if (currentSrc && !imgError) {
    return (
      <div className={`${className} rounded-xl overflow-hidden border border-slate-200/90 shadow-xs bg-white shrink-0 p-0.5 mt-0.5`}>
        <img
          src={currentSrc}
          alt={`${companyId} logo`}
          referrerPolicy="no-referrer"
          onError={handleError}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    );
  }

  // Exact vector reproductions matching user-uploaded images:
  if (companyId === 'stonebridge-golf-club') {
    return (
      <div className={`${className} rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white shrink-0 p-0.5 mt-0.5 flex items-center justify-center`}>
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Circular Crest Outer Navy */}
          <circle cx="100" cy="100" r="96" fill="#142a5c" />
          <circle cx="100" cy="100" r="92" fill="#ffffff" stroke="#c5a059" strokeWidth="2" />
          
          {/* Curved Text Path */}
          <path id="stonebridge-text-path-top" d="M 24,100 A 76,76 0 1,1 176,100" fill="none" />
          <path id="stonebridge-text-path-bottom" d="M 176,100 A 76,76 0 1,1 24,100" fill="none" />
          
          <text fill="#142a5c" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="4">
            <textPath href="#stonebridge-text-path-top" startOffset="50%" textAnchor="middle">
              STONEBRIDGE
            </textPath>
          </text>
          <text fill="#142a5c" fontSize="12" fontWeight="800" fontFamily="sans-serif" letterSpacing="4">
            <textPath href="#stonebridge-text-path-bottom" startOffset="50%" textAnchor="middle">
              GOLF CLUB
            </textPath>
          </text>

          {/* Dots separating top and bottom */}
          <circle cx="21" cy="100" r="2.5" fill="#142a5c" />
          <circle cx="179" cy="100" r="2.5" fill="#142a5c" />

          {/* Inner Red & Gold Circle */}
          <circle cx="100" cy="100" r="62" fill="#c5a059" />
          <circle cx="100" cy="100" r="59" fill="#d92525" stroke="#ffffff" strokeWidth="2" />

          {/* Crossed Golf Clubs */}
          <line x1="60" y1="135" x2="140" y2="65" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="140" y1="135" x2="60" y2="65" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
          <ellipse cx="60" cy="65" rx="5" ry="3" fill="#ffffff" transform="rotate(-40 60 65)" />
          <ellipse cx="140" cy="65" rx="5" ry="3" fill="#ffffff" transform="rotate(40 140 65)" />

          {/* Laurel Wreath */}
          <g fill="#ffffff" opacity="0.95">
            <path d="M 52,90 Q 48,105 56,120 Q 51,105 52,90 Z" />
            <path d="M 47,98 Q 44,110 52,118 Q 48,106 47,98 Z" />
            <path d="M 148,90 Q 152,105 144,120 Q 149,105 148,90 Z" />
            <path d="M 153,98 Q 156,110 148,118 Q 152,106 153,98 Z" />
          </g>

          {/* Gold Crown atop shield */}
          <path d="M 80,68 L 84,54 L 92,62 L 100,50 L 108,62 L 116,54 L 120,68 Z" fill="#f5d061" stroke="#a07a1e" strokeWidth="1" />

          {/* Central Heraldic Shield */}
          <path d="M 76,70 L 124,70 Q 124,105 100,126 Q 76,105 76,70 Z" fill="#ffffff" stroke="#142a5c" strokeWidth="2.5" />
          <path d="M 76,70 L 100,70 L 124,96 L 124,105 Q 124,107 122,109 L 76,82 Z" fill="#142a5c" />

          {/* Red Central 'S' */}
          <text x="100" y="105" fill="#d92525" fontSize="26" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle" fontStyle="italic">
            S
          </text>
        </svg>
      </div>
    );
  }

  // Exact reproduction of ida.png:
  return (
    <div className={`${className} rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-[#005fa6] shrink-0 p-1 mt-0.5 flex items-center justify-center`}>
      <svg viewBox="0 0 160 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" fill="#005fa6" />
        {/* White background block glow */}
        <g transform="translate(10, 48)">
          {/* Outermost red border frame */}
          <path
            d="M 10,8 L 40,8 L 40,16 L 34,16 L 34,48 L 40,48 L 40,56 L 10,56 L 10,48 L 16,48 L 16,16 L 10,16 Z
               M 46,28 A 6,6 0 1,1 46,36 A 6,6 0 1,1 46,28 Z
               M 58,8 L 86,8 C 104,8 114,20 114,32 C 114,44 104,56 86,56 L 58,56 Z
               M 118,28 A 6,6 0 1,1 118,36 A 6,6 0 1,1 118,28 Z
               M 126,56 L 138,8 L 152,8 L 166,56 L 152,56 L 149,44 L 135,44 L 132,56 Z"
            fill="#e21a22"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Inner blue letter fills */}
          <path
            d="M 12,10 L 38,10 L 38,18 L 32,18 L 32,46 L 38,46 L 38,54 L 12,54 L 12,46 L 18,46 L 18,18 L 12,18 Z
               M 46,29 A 5,5 0 1,1 46,35 A 5,5 0 1,1 46,29 Z
               M 60,10 L 85,10 C 102,10 111,21 111,32 C 111,43 102,54 85,54 L 60,54 Z
               M 118,29 A 5,5 0 1,1 118,35 A 5,5 0 1,1 118,29 Z
               M 128,54 L 139,11 L 151,11 L 164,54 L 151,54 L 147,43 L 137,43 L 134,54 Z"
            fill="#005fa6"
          />
          {/* Inner D cutout */}
          <path
            d="M 74,20 L 83,20 C 93,20 98,25 98,32 C 98,39 93,44 83,44 L 74,44 Z"
            fill="#ffffff"
          />
          {/* Inner A cutout */}
          <polygon points="142,22 138,36 146,36" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};
