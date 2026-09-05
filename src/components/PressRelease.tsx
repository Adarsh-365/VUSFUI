import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { PRESS_RELEASES_DATA } from '../data/ficciData';
import { PressReleaseItem } from '../types';

interface PressReleaseProps {
  onSelectPressRelease: (item: PressReleaseItem) => void;
  onViewAll: () => void;
}

export const PressRelease: React.FC<PressReleaseProps> = ({
  onSelectPressRelease,
  onViewAll,
}) => {
  return (
    <section id="press-release" className="relative py-10 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with "Making Headlines" watermark */}
        <div className="relative flex items-center justify-between pb-6">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark whitespace-nowrap">
              Making Headlines
            </span>
            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Press Releases & Announcements
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Official media bulletins and updates from Vishwa Udyam Sahayta Foundation
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="flex items-center gap-1 text-slate-500 hover:text-[#c2410c] font-bold text-lg transition-colors p-1"
            title="View all Press Releases"
          >
            <ChevronsRight className="w-6 h-6" />
          </button>
        </div>

        {/* 4 Columns Grid with subtle cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-1">
          {PRESS_RELEASES_DATA.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => onSelectPressRelease(item)}
              className="group cursor-pointer flex flex-col justify-between bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-orange-300 p-4 shadow-xs hover:shadow-md transition-all"
            >
              <div>
                {/* Category & Date */}
                <div className="text-[10.5px] font-extrabold tracking-wider text-[#c2410c] uppercase mb-2 flex items-center justify-between">
                  <span className="truncate max-w-[140px]">{item.category}</span>
                  <span className="text-slate-400 font-normal text-[10px]">{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#c2410c] leading-snug transition-colors line-clamp-3">
                  {item.title}
                </h3>
              </div>

              {/* Read Action / Link */}
              <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-bold text-[#0c1b33] group-hover:text-[#c2410c]">
                <span>{item.linkText || 'Read Bulletin'}</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
