import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { PUBLICATIONS_DATA } from '../data/ficciData';
import { Publication } from '../types';

interface KnowledgeHubProps {
  onSelectPublication: (pub: Publication) => void;
  onViewAll: () => void;
}

export const KnowledgeHub: React.FC<KnowledgeHubProps> = ({
  onSelectPublication,
  onViewAll,
}) => {
  return (
    <section id="knowledge-hub" className="relative py-10 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with "Studies" watermark */}
        <div className="relative flex items-center justify-between pb-6">
          <div className="relative">
            {/* Watermark text behind title */}
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark">
              Studies
            </span>
            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Knowledge Hub & Publications
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Actionable research, export indices, infrastructure blueprints and MSME policy playbooks
            </p>
          </div>

          {/* Direct ">>" Link */}
          <button
            onClick={onViewAll}
            className="flex items-center gap-1 text-slate-500 hover:text-[#c2410c] font-bold text-lg transition-colors p-1"
            title="View all publications & studies"
          >
            <ChevronsRight className="w-6 h-6" />
          </button>
        </div>

        {/* 5 Publication Book Covers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 pt-2">
          {/* Publication 1: MSME Export Index */}
          <div
            onClick={() => onSelectPublication(PUBLICATIONS_DATA[0])}
            className="group relative cursor-pointer flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-full aspect-[1/1.42] rounded-md overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-[#0d1b2a] border border-slate-200 relative flex flex-col justify-between p-3.5 text-white">
              {/* Cover Artwork */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b2545] via-[#13315c] to-[#04080f] opacity-90" />
              <div
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />

              {/* Top Header & Partner Logo */}
              <div className="relative z-10 flex items-center justify-between text-[10px]">
                <span className="font-bold text-sky-400">VUSF</span>
                <span className="font-extrabold tracking-wider text-amber-300">Namaste Trade</span>
              </div>

              {/* Center Title */}
              <div className="relative z-10 my-auto py-2">
                <span className="text-[10px] uppercase tracking-widest text-slate-300 font-semibold block">
                  Export Report
                </span>
                <h3 className="text-sm font-extrabold text-white leading-tight font-sans tracking-tight">
                  MSME Export Index
                </h3>
                <p className="text-[10px] text-sky-200 mt-1 line-clamp-3 leading-snug">
                  Unlocking Cross-Border Trade & Global Sourcing for Indian MSMEs
                </p>
              </div>

              {/* Bottom Spine/Brand */}
              <div className="relative z-10 pt-2 border-t border-white/20 flex items-center justify-between text-[9px] text-slate-300">
                <span>August 2026</span>
                <span className="text-sky-300 font-bold">Read Synopsis →</span>
              </div>
            </div>
          </div>

          {/* Publication 2: Infrastructure Blueprint */}
          <div
            onClick={() => onSelectPublication(PUBLICATIONS_DATA[1])}
            className="group relative cursor-pointer flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-full aspect-[1/1.42] rounded-md overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-[#064e3b] border border-slate-200 relative flex flex-col justify-between p-3.5 text-white">
              {/* Cover Artwork */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b] via-[#022c22] to-[#01140e] opacity-95" />
              <div
                className="absolute inset-0 opacity-30 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80')`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-28 h-28 rounded-full border border-emerald-400 animate-pulse" />
              </div>

              {/* Top Header */}
              <div className="relative z-10 flex items-center justify-between text-[10px]">
                <span className="font-extrabold tracking-wider text-emerald-400">VUSF Infra</span>
                <span className="font-bold text-slate-200">Modern Infra</span>
              </div>

              {/* Center Title */}
              <div className="relative z-10 my-auto py-2">
                <h3 className="text-sm font-extrabold text-emerald-300 leading-tight tracking-wider uppercase">
                  INFRASTRUCTURE BLUEPRINT
                </h3>
                <p className="text-[10px] text-emerald-100 mt-1 line-clamp-3 leading-snug">
                  Comprehensive Planning, Modern Design and Scalable Industrial Parks
                </p>
              </div>

              {/* Bottom Spine/Brand */}
              <div className="relative z-10 pt-2 border-t border-emerald-500/30 flex items-center justify-between text-[9px] text-emerald-200">
                <span>July 2026</span>
                <span className="text-emerald-400 font-bold">Read Synopsis →</span>
              </div>
            </div>
          </div>

          {/* Publication 3: India-Nepal Trade Horizons */}
          <div
            onClick={() => onSelectPublication(PUBLICATIONS_DATA[2])}
            className="group relative cursor-pointer flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-full aspect-[1/1.42] rounded-md overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-[#1e1b4b] border border-slate-200 relative flex flex-col justify-between p-3.5 text-white">
              {/* Cover Artwork */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] via-[#1e1b4b] to-[#0f172a] opacity-95" />
              <div
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80')`,
                }}
              />

              {/* Top Header */}
              <div className="relative z-10 flex items-center justify-between text-[10px]">
                <span className="font-extrabold tracking-widest text-blue-300">Namaste Nepal</span>
                <span className="font-bold text-white">VUSF</span>
              </div>

              {/* Center Title */}
              <div className="relative z-10 my-auto py-2">
                <h3 className="text-xs sm:text-[13px] font-bold text-white leading-tight">
                  India-Nepal Trade Horizons
                </h3>
                <p className="text-[10px] text-blue-200 mt-1 line-clamp-3 leading-snug">
                  Opportunities in Agro-Processing, Food & Beverage, and B2B Supply
                </p>
              </div>

              {/* Bottom Spine/Brand */}
              <div className="relative z-10 pt-2 border-t border-blue-400/30 flex items-center justify-between text-[9px] text-blue-200">
                <span>June 2026</span>
                <span className="text-blue-300 font-bold">Read Synopsis →</span>
              </div>
            </div>
          </div>

          {/* Publication 4: Inclusive Enterprise (Women & SC/ST) */}
          <div
            onClick={() => onSelectPublication(PUBLICATIONS_DATA[3])}
            className="group relative cursor-pointer flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-full aspect-[1/1.42] rounded-md overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-[#451a03] border border-slate-200 relative flex flex-col justify-between p-3.5 text-white">
              {/* Cover Artwork */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7c2d12] via-[#431407] to-[#1a0601] opacity-95" />
              <div
                className="absolute inset-0 opacity-45 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80')`,
                }}
              />

              {/* Top Header */}
              <div className="relative z-10 flex items-center justify-between text-[10px]">
                <span className="font-bold text-amber-400">INCLUSIVITY CELL</span>
                <span className="font-bold text-white">VUSF</span>
              </div>

              {/* Center Title */}
              <div className="relative z-10 my-auto py-2">
                <h3 className="text-xs sm:text-[12.5px] font-bold text-amber-200 uppercase leading-tight tracking-tight">
                  INCLUSIVE ENTERPRISE
                </h3>
                <p className="text-[9.5px] text-slate-200 mt-1 font-semibold leading-snug line-clamp-3">
                  Empowering Women & SC/ST Entrepreneurs through Subsidies & Mentorship
                </p>
              </div>

              {/* Bottom Spine/Brand */}
              <div className="relative z-10 pt-2 border-t border-amber-500/30 flex items-center justify-between text-[9px] text-amber-200">
                <span>May 2026</span>
                <span className="text-amber-300 font-bold">Read Synopsis →</span>
              </div>
            </div>
          </div>

          {/* Publication 5: Global Sourcing & Supply Chain (Namaste China) */}
          <div
            onClick={() => onSelectPublication(PUBLICATIONS_DATA[4])}
            className="group relative cursor-pointer flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-full aspect-[1/1.42] rounded-md overflow-hidden shadow-md group-hover:shadow-xl transition-shadow bg-[#1e293b] border border-slate-200 relative flex flex-col justify-between p-3.5 text-white">
              {/* Cover Artwork */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617] opacity-95" />
              <div
                className="absolute inset-0 opacity-45 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80')`,
                }}
              />

              {/* Top Header */}
              <div className="relative z-10 flex items-center justify-between text-[10px]">
                <span className="font-bold text-amber-300">Namaste China Desk</span>
                <span className="font-bold text-white">VUSF</span>
              </div>

              {/* Center Title */}
              <div className="relative z-10 my-auto py-2">
                <h3 className="text-xs sm:text-[13px] font-bold text-amber-100 leading-tight">
                  Global Sourcing Guide
                </h3>
                <p className="text-[9.5px] text-amber-200 mt-1 line-clamp-3 leading-snug">
                  A Practical Guide to Sourcing Machinery, Raw Materials & Trade Linkages
                </p>
              </div>

              {/* Bottom Spine/Brand */}
              <div className="relative z-10 pt-2 border-t border-amber-600/30 flex items-center justify-between text-[9px] text-amber-200">
                <span>April 2026</span>
                <span className="text-amber-400 font-bold">Read Synopsis →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
