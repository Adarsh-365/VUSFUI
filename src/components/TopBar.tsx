import React, { useState, useEffect } from 'react';
import { Phone, FileText, Globe, ChevronDown } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/ficciData';

interface TopBarProps {
  onContactClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onContactClick }) => {
  const [language, setLanguage] = useState('English');
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const announcements = [
    'Registration Open: Canton Fair China Business Delegation',
    'Chinese Language Basic Learning Classes: Enrollments Now Open',
    'SC/ST Entrepreneurship Development Program: Registrations Open in Collaboration with Pillai University',
    'Women Entrepreneurship One-Day Program: Registrations Open in Collaboration with Pillai University',
    'Navi Mumbai Export Summit: Registrations Now Open',
  ];

  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div id="vusf-topbar" className="w-full bg-[#c2410c] text-white text-xs font-medium border-b border-[#9a3412]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-2">
        {/* Left space kept blank as requested */}
        <div className="hidden sm:block shrink-0" />

        {/* Center: Live Ticker */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-2xl mx-4 overflow-hidden text-amber-50">
          <FileText className="w-3.5 h-3.5 shrink-0 text-amber-200" />
          <div className="truncate cursor-pointer hover:underline text-[11.5px] font-normal transition-all">
            {announcements[currentAnnouncementIndex]}
          </div>
        </div>

        {/* Right: Helpline, Contact, Language & Social Links */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Direct Phone Helpline */}
          <a
            href={`tel:${FOUNDATION_INFO.phone}`}
            className="hidden lg:flex items-center gap-1 text-[11.5px] text-amber-100 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>{FOUNDATION_INFO.phone}</span>
          </a>

          {/* Contact Us */}
          <button
            onClick={onContactClick}
            className="flex items-center gap-1.5 hover:text-amber-200 transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline text-[11.5px]">Contact Us</span>
            <span className="sm:hidden text-[11.5px]">Contact</span>
          </button>

          {/* Select Language */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1.5 bg-[#9a3412] hover:bg-[#7c2d12] px-2 py-0.5 rounded text-[11px] transition-colors border border-amber-600/50"
            >
              <Globe className="w-3 h-3 text-amber-200" />
              <span>{language}</span>
              <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-1 w-32 bg-white text-slate-800 rounded shadow-lg border border-slate-200 z-50 py-1 text-xs">
                {['English', 'Hindi (हिंदी)', 'Marathi (मराठी)', 'Gujarati (ગુજરાતી)', 'Nepali (नेपाली)'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang.split(' ')[0]);
                      setShowLangDropdown(false);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-orange-50 hover:text-orange-600 text-slate-700"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5 pl-1 border-l border-amber-500/50">
            {/* Website Icon */}
            <a
              href="https://www.namasteindiagroup.org"
              target="_blank"
              rel="noreferrer"
              aria-label="Namaste India Group Website"
              className="w-5 h-5 flex items-center justify-center hover:opacity-80 transition-opacity bg-blue-600 rounded-xs text-[10px] font-bold text-white"
            >
              🌐
            </a>
            {/* X / Twitter */}
            <a
              href="https://twitter.com/namastevishwaudyam"
              target="_blank"
              rel="noreferrer"
              aria-label="VUSF on X"
              className="w-5 h-5 flex items-center justify-center hover:opacity-80 transition-opacity bg-black rounded-xs text-[10px] font-bold text-white"
            >
              𝕏
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/namasteindiagroup/"
              target="_blank"
              rel="noreferrer"
              aria-label="Namaste India Group on Facebook"
              className="w-5 h-5 flex items-center justify-center hover:opacity-80 transition-opacity bg-[#1877f2] rounded-xs text-[11px] font-bold text-white"
            >
              f
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/namasteindia.group/"
              target="_blank"
              rel="noreferrer"
              aria-label="Namaste India Group on Instagram"
              className="w-5 h-5 flex items-center justify-center hover:opacity-80 transition-opacity bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-xs text-[10px] text-white"
            >
              📷
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/vishwa-udyam-sahayta-foundation/"
              target="_blank"
              rel="noreferrer"
              aria-label="VUSF on LinkedIn"
              className="w-5 h-5 flex items-center justify-center hover:opacity-80 transition-opacity bg-[#0077b5] rounded-xs text-[10px] font-bold text-white"
            >
              in
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@namaste_india_foundation"
              target="_blank"
              rel="noreferrer"
              aria-label="Namaste India Foundation on YouTube"
              className="w-5 h-5 flex items-center justify-center hover:opacity-80 transition-opacity bg-[#ff0000] rounded-xs text-[10px] text-white font-bold"
            >
              ▶
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
