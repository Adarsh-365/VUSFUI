import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { SPOTLIGHT_DATA } from '../data/ficciData';
import { SpotlightItem } from '../types';

interface SpotlightSectionProps {
  onSelectSpotlight: (item: SpotlightItem) => void;
  onViewAll: () => void;
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({
  onSelectSpotlight,
  onViewAll,
}) => {
  return (
    <section id="spotlight" className="relative py-10 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with "What's Happening" watermark */}
        <div className="relative flex items-center justify-between pb-6">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark whitespace-nowrap">
              What&apos;s Happening
            </span>
            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Foundation in the Spotlight
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              News and media coverage highlighting VUSF trade delegations and MSME initiatives
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="flex items-center gap-1 text-slate-500 hover:text-[#c2410c] font-bold text-lg transition-colors p-1"
            title="View all media coverage"
          >
            <ChevronsRight className="w-6 h-6" />
          </button>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-1">
          {SPOTLIGHT_DATA.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => onSelectSpotlight(item)}
              className={`group cursor-pointer flex flex-col justify-start transition-colors ${
                idx < 2 ? 'md:border-r md:border-slate-300/70 md:pr-6' : ''
              }`}
            >
              {/* Media Outlet & Date */}
              <div className="text-[11px] font-bold tracking-wider text-slate-500 lowercase mb-1.5">
                <span className="font-semibold">{item.outlet}</span>
                <span className="text-slate-400 font-normal mx-1">|</span>
                <span className="text-slate-500 font-medium capitalize">{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-[13px] font-medium text-slate-800 group-hover:text-[#c2410c] leading-snug transition-colors line-clamp-3">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
