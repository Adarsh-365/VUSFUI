import React from 'react';
import { ChevronsRight, Sparkles, Users, Award, Rocket, ArrowRight } from 'lucide-react';
import { MAJOR_INITIATIVES_DATA } from '../data/vusfData';
import { MajorInitiative } from '../types';

interface MajorInitiativesProps {
  onSelectInitiative?: (init: MajorInitiative) => void;
  onViewAll?: () => void;
}

export const MajorInitiatives: React.FC<MajorInitiativesProps> = ({
  onViewAll,
}) => {
  return (
    <section id="major-initiatives" className="relative py-12 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with "The Wings" watermark */}
        <div className="relative flex items-center justify-between pb-6">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark whitespace-nowrap">
              Cells
            </span>
            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Flagship Initiatives &amp; Cells
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Empowering Women, Kids, SC/ST, and Gen-Z founders with mentorship, subsidies, and incubation
            </p>
          </div>

          {onViewAll && (
            <button
              onClick={onViewAll}
              className="flex items-center gap-1 text-slate-500 hover:text-[#c2410c] font-bold text-lg transition-colors p-1 cursor-pointer"
              title="View all initiatives"
            >
              <ChevronsRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {/* Card 1: Women Entrepreneur Cell */}
          <div
            className="group aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-gradient-to-br from-[#9f1239] via-[#be185d] to-[#e11d48] p-4 sm:p-5 flex flex-col justify-between text-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative select-none"
          >
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />
            <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full border-4 border-white/20" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[9px] font-extrabold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Namaste Stree Shakti
              </span>
              <span className="text-sm">👩‍💼</span>
            </div>

            <div className="relative z-10 my-auto py-1">
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight uppercase leading-tight">
                WOMEN ENTREPRENEUR
              </h3>
              <p className="text-[10px] text-pink-100 font-medium leading-tight mt-1">
                SHGs • Subsidies • Project DPRs • Micro-Credit
              </p>
            </div>

            <div className="relative z-10 text-[9.5px] text-pink-200 font-bold border-t border-white/20 pt-2 flex items-center justify-between">
              <span>EXPLORE CELL</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Kids Entrepreneur Cell */}
          <div
            className="group aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-gradient-to-br from-[#3730a3] via-[#4338ca] to-[#6366f1] p-4 sm:p-5 flex flex-col justify-between text-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative select-none"
          >
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />
            <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full border-4 border-white/20" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[9px] font-extrabold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Junior Innovators
              </span>
              <span className="text-sm">🚀</span>
            </div>

            <div className="relative z-10 my-auto py-1">
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight uppercase leading-tight">
                KIDS ENTREPRENEUR
              </h3>
              <p className="text-[10px] text-indigo-100 font-medium leading-tight mt-1">
                Financial Literacy • School Incubation • Innovation
              </p>
            </div>

            <div className="relative z-10 text-[9.5px] text-indigo-200 font-bold border-t border-white/20 pt-2 flex items-center justify-between">
              <span>EXPLORE CELL</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: SC / ST Entrepreneur Cell */}
          <div
            className="group aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#ea580c] p-4 sm:p-5 flex flex-col justify-between text-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative select-none"
          >
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />
            <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full border-4 border-white/20" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[9px] font-extrabold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Samaj Shakti Wing
              </span>
              <span className="text-sm">🤝</span>
            </div>

            <div className="relative z-10 my-auto py-1">
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight uppercase leading-tight">
                SC / ST ENTREPRENEUR
              </h3>
              <p className="text-[10px] text-orange-100 font-medium leading-tight mt-1">
                Stand-Up India • DIC Subsidies • Bankable DPRs
              </p>
            </div>

            <div className="relative z-10 text-[9.5px] text-orange-200 font-bold border-t border-white/20 pt-2 flex items-center justify-between">
              <span>EXPLORE CELL</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Gen-Z Entrepreneur Cell */}
          <div
            className="group aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#059669] p-4 sm:p-5 flex flex-col justify-between text-white shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative select-none"
          >
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />
            <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full border-4 border-white/20" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[9px] font-extrabold bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Next-Gen Incubation
              </span>
              <span className="text-sm">⚡</span>
            </div>

            <div className="relative z-10 my-auto py-1">
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight uppercase leading-tight">
                GEN-Z ENTREPRENEUR
              </h3>
              <p className="text-[10px] text-emerald-100 font-medium leading-tight mt-1">
                AI &amp; Tech Startups • E-Commerce • Venture Launch
              </p>
            </div>

            <div className="relative z-10 text-[9.5px] text-emerald-200 font-bold border-t border-white/20 pt-2 flex items-center justify-between">
              <span>EXPLORE CELL</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
