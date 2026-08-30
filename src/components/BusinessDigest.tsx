import React from 'react';
import { ChevronsRight, BookOpen } from 'lucide-react';
import { BUSINESS_DIGEST_DATA } from '../data/ficciData';

interface BusinessDigestProps {
  onReadIssue: () => void;
  onSelectArticle: (title: string) => void;
}

export const BusinessDigest: React.FC<BusinessDigestProps> = ({
  onReadIssue,
  onSelectArticle,
}) => {
  return (
    <section id="business-digest" className="relative py-10 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with "Periodicals" watermark */}
        <div className="relative flex items-center justify-between pb-6">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark">
              Periodicals
            </span>
            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Namaste Udyam Business Digest
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Monthly executive briefings on MSME schemes, industrial infrastructure, and global trade corridors
            </p>
          </div>

          <button
            onClick={onReadIssue}
            className="flex items-center gap-1 text-slate-500 hover:text-[#c2410c] font-bold text-lg transition-colors p-1"
            title="View all Business Digest Issues"
          >
            <ChevronsRight className="w-6 h-6" />
          </button>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Left Column: Issue Highlights */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-800 tracking-wide font-sans">
              Issue: {BUSINESS_DIGEST_DATA.issue}
            </h3>

            {/* List of articles with colored dots */}
            <div className="space-y-3 pt-1">
              {BUSINESS_DIGEST_DATA.articles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => onSelectArticle(art.title)}
                  className="group flex items-start gap-3 cursor-pointer"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 transition-transform group-hover:scale-125"
                    style={{ backgroundColor: art.color }}
                  />
                  <span className="text-xs sm:text-[13px] text-slate-700 group-hover:text-[#c2410c] group-hover:underline font-normal leading-relaxed transition-colors">
                    {art.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Business Digest Magazine Cover */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              onClick={onReadIssue}
              className="group cursor-pointer relative w-56 sm:w-64 aspect-[1/1.38] rounded-sm overflow-hidden shadow-xl hover:shadow-2xl border border-slate-300 transition-all duration-300 hover:-translate-y-1 bg-[#1e293b]"
            >
              {/* Cover Artwork & Header */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7c2d12] via-[#431407] to-[#1c1917]" />
              <div
                className="absolute inset-0 opacity-35 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&q=80')`,
                }}
              />

              {/* Magazine Masthead */}
              <div className="relative z-10 p-4 flex flex-col h-full justify-between text-white">
                <div>
                  <div className="flex items-center justify-between border-b border-amber-500/40 pb-2">
                    <span className="font-black text-xs text-amber-300">NAMASTE UDYAM</span>
                    <span className="text-[10px] text-slate-300 font-semibold">{BUSINESS_DIGEST_DATA.issue}</span>
                  </div>

                  <div className="mt-2 text-xl font-black tracking-tighter text-amber-400 uppercase font-sans">
                    BUSINESS
                  </div>
                  <div className="text-xs tracking-widest text-slate-200 uppercase font-bold -mt-1">
                    Digest
                  </div>
                </div>

                {/* Cover Story Box */}
                <div className="space-y-1 my-auto">
                  <span className="text-[9px] uppercase tracking-wider bg-[#ea580c] text-white px-1.5 py-0.5 rounded-xs font-bold inline-block">
                    Cover Story
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                    {BUSINESS_DIGEST_DATA.coverTitle}
                  </h4>
                  <p className="text-[9.5px] text-slate-300 leading-snug line-clamp-2">
                    Modern industrial parks, bilateral trade corridors and MSME growth solutions.
                  </p>
                </div>

                {/* Bottom Teasers */}
                <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[9px] text-amber-200">
                  <span>Read Digital Edition</span>
                  <BookOpen className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
