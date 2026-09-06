import React from 'react';
import { Handshake } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  imageLogo: string;
}

export const StrategicCollaborations: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 'rakez',
      name: 'RAKEZ (Ras Al Khaimah Economic Zone)',
      imageLogo: '/partners/rakez.png',
    },
    {
      id: 'pillai-university',
      name: 'Pillai University',
      imageLogo: '/partners/PillaiUnivLogo_OnlyPillaiLogoMark_WhiteText.png',
    },
    {
      id: 'cni',
      name: 'CNI (Confederation of Indian Network)',
      imageLogo: '/partners/cni-logo-wide.png',
    },
    {
      id: 'finnmin',
      name: 'FINnmin Advisory',
      imageLogo: '/partners/finnmin.png',
    },
    {
      id: 'banaras-orgno',
      name: 'Banaras Orgno',
      imageLogo: '/partners/banrasorgnao.jpg',
    },
    {
      id: 'secure-life-fincorp',
      name: 'Secure Life Fincorp',
      imageLogo: '/partners/fincorp.jpeg',
    },
    {
      id: 'uroniyx-technologies',
      name: 'Uroniyx Technologies Pvt Ltd',
      imageLogo: '/partners/uroniyx_logo.jpeg',
    },
    {
      id: 'smart-sakhi',
      name: 'Smart Sakhi',
      imageLogo: '/partners/smartsakhi.png',
    },
    {
      id: 'dharti-foundation',
      name: 'Dharti Foundation',
      imageLogo: '/partners/DHARATI.jpeg',
    },
    {
      id: 'bayss-consultancy',
      name: 'Bayss Consultancy',
      imageLogo: '/partners/bayss_consultancy.png',
    },
    {
      id: 'pen-stationery-association',
      name: 'Pen and Stationery Association of India',
      imageLogo: '/partners/pensationary%20org.png',
    },
    {
      id: 'universal-connections',
      name: 'Universal Connections LLPs',
      imageLogo: '/partners/Univerrsal_connections.jpeg',
    },
    {
      id: 'aspire-import-export',
      name: 'Aspire Import and Export',
      imageLogo: '/partners/ASPIREIMPROTEXPORT.jpeg',
    },
    {
      id: 'royal-palace',
      name: 'Royal Palace Group',
      imageLogo: '/partners/ROYAL_PALCE.jpeg',
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
            <span>14+ Global &amp; National Partners</span>
          </div>
        </div>

        {/* Continuous Auto-Scrolling Track (Just logos, no names, no box, no boundary) */}
        <div className="relative overflow-hidden w-full group py-4">
          {/* Left / Right Gradient Fade Edge Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#081220] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#081220] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="continuous-marquee-track flex items-center gap-10 sm:gap-14">
            {scrollList.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="shrink-0 flex items-center justify-center h-16 sm:h-20 w-36 sm:w-44 select-none"
              >
                <img
                  src={item.imageLogo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain filter hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
