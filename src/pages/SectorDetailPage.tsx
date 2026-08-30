import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SECTORS_DATA, SectorItem } from '../data/sectorsData';
import {
  Layers,
  ArrowRight,
  Sparkles,
  Building2,
  CheckCircle2,
  Globe2,
  TrendingUp,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  FileText,
} from 'lucide-react';

interface SectorDetailPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const SectorDetailPage: React.FC<SectorDetailPageProps> = ({ onMemberClick }) => {
  const { sectorSlug } = useParams<{ sectorSlug: string }>();
  const navigate = useNavigate();

  // Find sector by slug or id
  const currentIndex = SECTORS_DATA.findIndex((s) => s.slug === sectorSlug || s.id === sectorSlug);
  const sector = currentIndex !== -1 ? SECTORS_DATA[currentIndex] : SECTORS_DATA[0];

  const prevSector = currentIndex > 0 ? SECTORS_DATA[currentIndex - 1] : SECTORS_DATA[SECTORS_DATA.length - 1];
  const nextSector = currentIndex < SECTORS_DATA.length - 1 ? SECTORS_DATA[currentIndex + 1] : SECTORS_DATA[0];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* 1. Page Header Banner */}
      <section className="relative bg-[#0c1b33] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-amber-600/20 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4 tracking-wide uppercase">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/sectors" className="hover:underline text-slate-300">Industry Sectors</Link>
            <span>/</span>
            <span className="text-amber-400">{sector.name}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>{sector.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {sector.name}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Comprehensive institutional overview, market dynamics, technology transformation, and MSME growth opportunities in the {sector.name} vertical.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Webpage Content Area */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Body Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* 3 Structured Paragraphs Container */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8">
              {/* Part 1: Sector Overview */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#c2410c]">
                  <span className="w-2 h-2 rounded-full bg-[#c2410c]" />
                  <span>Sector Scope &amp; Foundational Role</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Understanding the {sector.name} Landscape
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {sector.paragraphs[0]}
                </p>
              </div>

              {/* Part 2: Technology & Market Trends */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Market Transformation &amp; Technology Adoption</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  Modernization, Sustainability &amp; Technological Frontiers
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                  {sector.paragraphs[1]}
                </p>
              </div>

              {/* Part 3: Opportunities & MSME Growth */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-700">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>Enterprise Opportunities &amp; Strategic Linkages</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  Unlocking Domestic Expansion &amp; Global Trade Corridors
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {sector.paragraphs[2]}
                </p>
              </div>
            </div>

            {/* Namaste India Group Institutional Support in this Sector */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#c2410c]" />
                <span>Namaste India Group Support &amp; Enablement for {sector.name}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'DPR & Financial Structuring',
                    desc: 'Bank-ready project reports, CMA data, and loan syndication tailored for ' + sector.name + '.',
                  },
                  {
                    title: 'Government Margin Money Grants',
                    desc: 'Unlocking up to 35% subsidies under PMEGP & CMEGP schemes for new & expanding units.',
                  },
                  {
                    title: 'Industrial Infrastructure',
                    desc: 'Factory master planning, PEB steel construction, CETP setup, and logistics warehouse parks.',
                  },
                  {
                    title: 'Bilateral Trade Corridors',
                    desc: 'Direct buyer-seller delegations, export licensing, and expo representation across South Asia.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-6 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next / Previous Sector Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Link
                to={`/sectors/${prevSector.slug}`}
                className="bg-white hover:bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center gap-3 transition-colors group text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#c2410c] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Previous Sector</div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors line-clamp-1">
                    {prevSector.name}
                  </div>
                </div>
              </Link>

              <Link
                to={`/sectors/${nextSector.slug}`}
                className="bg-white hover:bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center justify-between gap-3 transition-colors group text-right"
              >
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Next Sector</div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors line-clamp-1">
                    {nextSector.name}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#c2410c] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Sidebar Navigation & Quick Action */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-[90px]">
            {/* Consultation Action Box */}
            <div className="bg-gradient-to-br from-[#0c1b33] to-[#1e293b] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Industry Advisory
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  Grow Your Business in {sector.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect with our sector specialists for DPR project reports, government subsidies, factory setup, or cross-border export delegations.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="w-full bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire for {sector.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onMemberClick('become')}
                  className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors text-center"
                >
                  Schedule Advisory Meeting
                </button>
              </div>

              <div className="border-t border-slate-700 pt-4 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Helpline: +91 22 2757 0000</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Apex MSME Secretariat &bull; Navi Mumbai, India
                </div>
              </div>
            </div>

            {/* Quick Sector Directory Sidebar List */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  All 44 Industry Sectors
                </h4>
                <Link to="/sectors" className="text-[11px] font-bold text-[#c2410c] hover:underline">
                  View All &rarr;
                </Link>
              </div>

              <div className="space-y-1 max-h-96 overflow-y-auto pr-1">
                {SECTORS_DATA.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/sectors/${s.slug}`}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                      s.slug === sector.slug
                        ? 'bg-orange-50 text-[#c2410c] font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#c2410c]'
                    }`}
                  >
                    <span className="line-clamp-1">{s.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
