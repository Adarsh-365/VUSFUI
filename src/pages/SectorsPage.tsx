import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SECTORS_DATA } from '../data/sectorsData';
import {
  Layers,
  Search,
  ArrowRight,
  Sparkles,
  X,
  Building2,
  ChevronRight,
} from 'lucide-react';

interface SectorsPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const SectorsPage: React.FC<SectorsPageProps> = ({ onMemberClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(SECTORS_DATA.map((s) => s.category)));
    return ['All', ...cats];
  }, []);

  // Filter sectors based on search query and category
  const filteredSectors = useMemo(() => {
    return SECTORS_DATA.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.paragraphs.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* 1. Header Banner */}
      <section className="relative bg-[#0c1b33] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-amber-600/20 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4 tracking-wide uppercase">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Industry Sectors</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>44 COMPREHENSIVE INDUSTRY VERTICALS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Focus Industrial &amp; Economic Sectors
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Namaste India Group Support provides institutional guidance, industrial infrastructure, bilateral corridors, and subsidy facilitation across 44 core industrial domains in India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Search & Category Filter Row */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-5 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input Box */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search across all 44 industry sectors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-[#c2410c] focus:bg-white transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs font-bold text-slate-500 whitespace-nowrap">
              Showing <span className="text-[#c2410c] font-black">{filteredSectors.length}</span> of 44 Sectors
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#c2410c] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sectors Dynamic Grid with Direct Links to Dedicated Pages */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSectors.map((sector, idx) => (
            <div
              key={sector.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#c2410c] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#c2410c] bg-orange-50 px-2.5 py-0.5 rounded-full">
                      {sector.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors mt-1.5 leading-snug">
                      <Link to={`/sectors/${sector.slug}`}>
                        {sector.name}
                      </Link>
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 group-hover:bg-[#c2410c] group-hover:text-white transition-colors flex items-center justify-center shrink-0 text-xs font-bold">
                    {idx + 1}
                  </div>
                </div>

                {/* Paragraph preview */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {sector.paragraphs[0]}
                </p>

                {/* Trend highlight */}
                <p className="text-[11px] text-slate-500 line-clamp-2 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {sector.paragraphs[1]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/sectors/${sector.slug}`}
                  className="w-full bg-slate-50 hover:bg-[#c2410c] text-slate-700 hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-[#c2410c] group-hover:text-white"
                >
                  <span>Open Sector Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Consultation CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#0c1b33] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-bold">Looking for Subsidies or Infrastructure in Your Industry?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Connect with our MSME advisory cell for DPR project reports, government subsidy realization, and modern factory setup across any of the 44 sectors.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Connect with Industry Advisor
          </button>
        </div>
      </section>
    </div>
  );
};
