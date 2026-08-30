import React from 'react';
import { X, Printer } from 'lucide-react';
import { PressReleaseItem } from '../types';

interface PressReleaseModalProps {
  item: PressReleaseItem | null;
  onClose: () => void;
}

export const PressReleaseModal: React.FC<PressReleaseModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00873d]">
              VUSF Press Release &amp; Bulletin
            </span>
            <span className="text-xs text-slate-400">• Navi Mumbai</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <div className="text-xs font-bold text-[#00873d] uppercase tracking-wider mb-1">
              FOR IMMEDIATE RELEASE
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {item.title}
            </h2>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
              <span className="font-semibold">{item.date}</span>
              <span>•</span>
              <span>Source: {item.source || 'VUSF Media Bureau'}</span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
            <p className="font-medium text-slate-900">
              <strong>NAVI MUMBAI, {item.date}</strong> — {item.content}
            </p>
            <p>
              The initiative aligns with Vishwa Udyam Sahayta Foundation’s ongoing grassroots and international missions to support micro, small, and medium enterprises, establish state-of-the-art modern industrial infrastructure, and foster cross-border trade corridors across South Asia and beyond.
            </p>
            <p>
              VUSF continues to serve as an indispensable catalyst, connecting aspiring entrepreneurs, established industrialists, and international delegations through transparent, high-impact programs.
            </p>
          </div>

          {/* Direct Link or Blog Reference Button */}
          {(item.linkText || item.linkUrl || item.blogSlug) && (
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-[#c2410c] tracking-wider block">
                  Related Announcement &amp; Article
                </span>
                <p className="text-xs font-bold text-slate-800 mt-0.5">
                  {item.linkText || 'Read Complete Article & Details'}
                </p>
              </div>
              {item.linkUrl ? (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all shrink-0 cursor-pointer"
                >
                  {item.linkText || 'Visit Portal'} &rarr;
                </a>
              ) : (
                <button
                  onClick={() => {
                    onClose();
                    const blogEl = document.getElementById('blog-section');
                    blogEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#0c1b33] hover:bg-[#c2410c] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all shrink-0 cursor-pointer"
                >
                  {item.linkText || 'Read Full Blog'} &rarr;
                </button>
              )}
            </div>
          )}

          <div className="bg-slate-50 p-3.5 rounded-lg text-xs text-slate-600 border border-slate-200">
            <strong>For Media Queries &amp; Foundation Communications:</strong> <br />
            Vishwa Udyam Sahayta Foundation Media Division, Sector 18, Vashi, Navi Mumbai <br />
            Email: info@namastevishwaudyam.org | Tel: +91-8169080686
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 border border-slate-300 rounded text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Bulletin</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold rounded cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
