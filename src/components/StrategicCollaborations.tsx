import React from 'react';
import { Handshake } from 'lucide-react';

interface Collaborator {
  id: string;
  name: string;
  logoText: string;
  category: string;
  accentGradient: string;
  borderColor: string;
  textColor: string;
  imageLogo?: string; // Prepared for future image logos
}

export const StrategicCollaborations: React.FC = () => {
  const partners: Collaborator[] = [
    {
      id: 'rakez',
      name: 'RAKEZ',
      logoText: 'RAKEZ',
      category: 'UAE Free Zone',
      accentGradient: 'from-amber-500/20 to-orange-600/30',
      borderColor: 'border-amber-500/50',
      textColor: 'text-amber-300',
    },
    {
      id: 'pillai-university',
      name: 'Pillai University',
      logoText: 'PILLAI',
      category: 'University & Incubation',
      accentGradient: 'from-blue-600/20 to-cyan-500/30',
      borderColor: 'border-cyan-500/50',
      textColor: 'text-cyan-300',
    },
    {
      id: 'made-in-swadeshi',
      name: 'Made in Swadeshi',
      logoText: 'SWADESHI',
      category: 'National Movement',
      accentGradient: 'from-orange-600/20 to-amber-500/30',
      borderColor: 'border-orange-500/50',
      textColor: 'text-orange-300',
    },
    {
      id: 'finnmin',
      name: 'FINnmin',
      logoText: 'FINNMIN',
      category: 'Finance Advisory',
      accentGradient: 'from-emerald-600/20 to-teal-500/30',
      borderColor: 'border-emerald-500/50',
      textColor: 'text-emerald-300',
    },
    {
      id: 'cin',
      name: 'CIN',
      logoText: 'CIN',
      category: 'Industry Network',
      accentGradient: 'from-indigo-600/20 to-violet-500/30',
      borderColor: 'border-indigo-500/50',
      textColor: 'text-indigo-300',
    },
    {
      id: 'banaras-orgno',
      name: 'Banaras Orgno',
      logoText: 'BANARAS',
      category: 'Agro & Organics',
      accentGradient: 'from-lime-600/20 to-emerald-500/30',
      borderColor: 'border-lime-500/50',
      textColor: 'text-lime-300',
    },
    {
      id: 'secure-life-fincorp',
      name: 'Secure Life Fincorp',
      logoText: 'SECURE LIFE',
      category: 'Financial Services',
      accentGradient: 'from-sky-600/20 to-blue-500/30',
      borderColor: 'border-sky-500/50',
      textColor: 'text-sky-300',
    },
    {
      id: 'uroniyx-technologies',
      name: 'Uroniyx Technologies Pvt Ltd',
      logoText: 'URONIYX',
      category: 'Technology & IT',
      accentGradient: 'from-purple-600/20 to-pink-500/30',
      borderColor: 'border-purple-500/50',
      textColor: 'text-purple-300',
    },
    {
      id: 'namaste-china',
      name: 'namasteChina.org',
      logoText: 'NAMASTE CHINA',
      category: 'Bilateral Portal',
      accentGradient: 'from-red-600/20 to-rose-500/30',
      borderColor: 'border-red-500/50',
      textColor: 'text-rose-300',
    },
    {
      id: 'introduction-trade-shows-nepal',
      name: 'Introduction Trade Shows Nepal Pvt Ltd',
      logoText: 'EXPO NEPAL',
      category: 'International Expos',
      accentGradient: 'from-teal-600/20 to-cyan-500/30',
      borderColor: 'border-teal-500/50',
      textColor: 'text-teal-300',
    },
    {
      id: 'smart-sakhi',
      name: 'Smart Sakhi',
      logoText: 'SMART SAKHI',
      category: 'Women Enterprise',
      accentGradient: 'from-fuchsia-600/20 to-pink-500/30',
      borderColor: 'border-fuchsia-500/50',
      textColor: 'text-fuchsia-300',
    },
    {
      id: 'dharti-foundation',
      name: 'Dharti Foundation',
      logoText: 'DHARTI',
      category: 'CSR & Welfare',
      accentGradient: 'from-amber-600/20 to-yellow-500/30',
      borderColor: 'border-amber-500/50',
      textColor: 'text-amber-300',
    },
    {
      id: 'bayss-consultancy',
      name: 'Bayss Consultancy',
      logoText: 'BAYSS',
      category: 'Strategic Advisory',
      accentGradient: 'from-cyan-600/20 to-blue-500/30',
      borderColor: 'border-cyan-500/50',
      textColor: 'text-cyan-300',
    },
    {
      id: 'pen-stationery-association',
      name: 'Pen and Stationery Association of India',
      logoText: 'STATIONERY',
      category: 'Industry Body',
      accentGradient: 'from-orange-600/20 to-red-500/30',
      borderColor: 'border-orange-500/50',
      textColor: 'text-orange-300',
    },
    {
      id: 'universal-connections',
      name: 'Universal Connections LLPs',
      logoText: 'UNIVERSAL',
      category: 'Global Alliances',
      accentGradient: 'from-violet-600/20 to-purple-500/30',
      borderColor: 'border-violet-500/50',
      textColor: 'text-violet-300',
    },
    {
      id: 'aspire-import-export',
      name: 'Aspire Import and Export',
      logoText: 'ASPIRE',
      category: 'Import-Export',
      accentGradient: 'from-emerald-600/20 to-green-500/30',
      borderColor: 'border-emerald-500/50',
      textColor: 'text-emerald-300',
    },
  ];

  // Duplicate the array for a seamless, continuous infinite scroll loop
  const scrollList = [...partners, ...partners];

  return (
    <section
      id="collaborations"
      className="relative py-12 bg-[#081220] border-b border-slate-800 text-slate-100 overflow-hidden"
    >
      {/* Inline styles for continuous smooth auto-scrolling */}
      <style>{`
        @keyframes continuous-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .continuous-marquee-track {
          display: flex;
          width: max-content;
          animation: continuous-marquee 35s linear infinite;
        }
        .continuous-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambience glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Handshake className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                Strategic Collaborations &amp; Institutional Partners
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400">
                Active MoUs &amp; Ecosystem Alliances across Free Zones, Academia &amp; Industry Bodies
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-bold text-amber-400/90 bg-[#0c182a] px-3 py-1 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>16+ Global &amp; National Partners</span>
          </div>
        </div>

        {/* Continuous Auto-Scrolling Track (5 visible at a time on desktop viewport) */}
        <div className="relative overflow-hidden w-full group py-2">
          {/* Left / Right Gradient Fade Edge Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#081220] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#081220] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track Container */}
          <div className="continuous-marquee-track flex gap-4">
            {scrollList.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`w-[210px] sm:w-[245px] lg:w-[252px] shrink-0 bg-[#0c182a] rounded-2xl border ${item.borderColor} p-4 flex flex-col items-center justify-center text-center space-y-3 hover:bg-[#0f223a] transition-all duration-300 shadow-xl group/card hover:scale-[1.03] min-h-[140px] select-none cursor-pointer`}
              >
                {/* Logo Emblem Box (Ready for logo image or stylized monogram) */}
                <div
                  className={`w-full max-w-[150px] h-12 rounded-xl bg-gradient-to-br ${item.accentGradient} border ${item.borderColor} flex items-center justify-center shadow-inner group-hover/card:shadow-md transition-shadow px-2`}
                >
                  {item.imageLogo ? (
                    <img
                      src={item.imageLogo}
                      alt={item.name}
                      className="max-h-8 max-w-full object-contain"
                    />
                  ) : (
                    <span className={`text-xs sm:text-[13px] font-black tracking-wider uppercase ${item.textColor}`}>
                      {item.logoText}
                    </span>
                  )}
                </div>

                {/* Partner Name (No description) */}
                <div className="space-y-0.5 w-full">
                  <h3 className="text-xs sm:text-[13px] font-bold text-white group-hover/card:text-amber-300 transition-colors line-clamp-1 leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-400 block line-clamp-1">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
