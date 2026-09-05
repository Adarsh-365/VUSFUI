import React from 'react';
import { ChevronsRight, Calendar, MapPin, ArrowRight, Sparkles, Globe } from 'lucide-react';

interface ForthcomingEventsProps {
  onRegisterClick: (event?: any) => void;
  onViewAll: () => void;
}

export const ForthcomingEvents: React.FC<ForthcomingEventsProps> = ({
  onRegisterClick,
  onViewAll,
}) => {
  const featuredFlagship = {
    id: 'canton-fair-delegation',
    title: 'Canton Fair 2026 Delegation - Guangzhou',
    date: 'Phase 2: Apr 23–29, 2026 | Phase 3: Apr 30–May 7, 2026',
    location: 'Guangzhou, China',
    category: 'INTERNATIONAL TRADE DELEGATION',
    badge: 'FLAGSHIP GLOBAL DELEGATION',
    image: '/banner/namaste-china.jpeg',
    desc: "Join India's leading trade delegation for the world's largest import-export exhibition. Direct OEM factory visits, verified suppliers, and B2B matchmaking.",
    highlight: 'Return Flights • 4-Star Stay • 100% Visa Protection',
  };

  return (
    <section id="forthcoming-events" className="relative py-10 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-6">
        {/* Section Header with "Events" watermark */}
        <div className="relative flex items-center justify-between pb-1">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark">
              Events
            </span>
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#c2410c] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scheduled Conclaves &amp; Delegations</span>
            </div>
            <h2 className="relative text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight">
              Forthcoming Events &amp; Trade Summits
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Official international trade delegations, global sourcing desks, and B2B delegations
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="flex items-center gap-1 text-slate-600 hover:text-[#c2410c] font-bold text-xs sm:text-sm transition-colors py-1.5 px-3 rounded-lg border border-slate-200 hover:border-[#c2410c] cursor-pointer"
            title="View all 11 Forthcoming Events"
          >
            <span>View All 11 Events</span>
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>

        {/* Flagship Panoramic Banner: Canton Fair Business Delegation */}
        <div
          onClick={() => onRegisterClick(featuredFlagship)}
          className="group relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#0c1b33] via-[#1e293b] to-[#7c2d12] shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl border border-slate-700"
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#fed7aa_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

          {/* Right Background Image */}
          <div
            className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-cover bg-center opacity-40 md:opacity-60 group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url('${featuredFlagship.image}')`,
            }}
          />
          {/* Gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1b33] via-[#0c1b33]/90 to-transparent md:to-black/30" />

          {/* Banner Inner Content */}
          <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-9 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Emblem & Typography */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Circular Flagship Emblem */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/10 backdrop-blur-md p-2 shadow-2xl shrink-0 flex flex-col items-center justify-center border border-amber-400/40 group-hover:rotate-3 transition-transform">
                <div className="text-[8px] font-extrabold uppercase text-amber-300 text-center leading-tight">
                  GLOBAL SOURCING
                </div>
                <div className="my-1 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 via-[#c2410c] to-red-600 flex items-center justify-center text-white text-[11px] font-extrabold shadow-md">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-[7.5px] font-extrabold uppercase tracking-wider text-amber-200">
                  CANTON FAIR
                </div>
                <div className="text-[7px] font-semibold text-slate-300">Guangzhou 2026</div>
              </div>

              {/* Headline & Date */}
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 bg-[#c2410c] text-white text-[10px] sm:text-[11px] font-extrabold uppercase px-3 py-1 rounded shadow-xs tracking-wider">
                  <Sparkles className="w-3 h-3 text-amber-200" />
                  <span>{featuredFlagship.badge}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                  {featuredFlagship.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {featuredFlagship.desc}
                </p>

                {/* Date & Venue Highlight Box */}
                <div className="inline-flex flex-wrap items-center gap-2 bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-lg shadow-md tracking-wide">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>Phase 1: 15–19 Oct 2026 | Phase 3: 31 Oct–4 Nov 2026</span>
                  </div>
                  <span className="hidden sm:inline text-slate-950/40">|</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-950" />
                    <span>Guangzhou, China</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Call to action pill */}
            <div className="flex flex-col items-center md:items-end shrink-0">
              <div className="inline-flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xl transition-all group-hover:translate-x-1 border border-orange-400/30">
                <span>Book Delegation Pass</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <span className="text-[11px] text-amber-200 mt-2 font-semibold">
                Direct OEM Factory Sourcing &amp; B2B Matchmaking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
