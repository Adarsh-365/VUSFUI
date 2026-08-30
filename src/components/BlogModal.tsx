import React from 'react';
import { X, Calendar, Clock, User, ExternalLink, Share2, Printer, CheckCircle2, Bookmark } from 'lucide-react';
import { BlogPost } from '../data/blogData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!post) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="p-4 bg-[#0c1b33] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider bg-[#c2410c] text-white px-2.5 py-0.5 rounded">
              {post.badge}
            </span>
            <span className="text-xs text-amber-300 font-semibold hidden sm:inline">
              VUSF Editorial & Insights
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Copy Link"
              className="p-1.5 text-slate-300 hover:text-white rounded-md transition-colors"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => window.print()}
              title="Print Article"
              className="p-1.5 text-slate-300 hover:text-white rounded-md transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Title & Meta */}
          <div className="space-y-3 border-b border-slate-200 pb-5">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-semibold text-[#c2410c]">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {post.subtitle}
            </p>
          </div>

          {/* Hero Article Image */}
          <div className="relative rounded-xl overflow-hidden bg-slate-900 max-h-[340px] shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {post.externalUrl && (
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transition-all"
              >
                <span>Visit namastechina.org</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Key Highlights Box */}
          {post.highlights && post.highlights.length > 0 && (
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 sm:p-5 space-y-2">
              <h4 className="text-xs font-extrabold text-[#7c2d12] uppercase tracking-wider flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-[#c2410c]" />
                Key Strategic Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-800">
                {post.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#c2410c] font-bold">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Paragraphs Content */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {post.content.map((p, i) => (
              <p key={i} className="whitespace-pre-line">
                {p}
              </p>
            ))}
          </div>

          {/* External Action Banner if available */}
          {post.externalUrl && (
            <div className="bg-gradient-to-r from-[#0c1b33] to-[#1e293b] text-white p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div>
                <h4 className="font-bold text-sm sm:text-base text-amber-300">
                  Ready to Source Directly from Overseas OEM Factories?
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Access verified supplier directories, book factory audits, and apply for Canton Fair delegations.
                </p>
              </div>
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold px-5 py-2.5 rounded-lg shrink-0 shadow transition-all flex items-center gap-1.5"
              >
                <span>Go to namastechina.org</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Tags */}
          <div className="border-t border-slate-200 pt-4 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-500">Related Tags:</span>
            {post.tags.map((t, idx) => (
              <span
                key={idx}
                className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-200"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Published by Vishwa Udyam Sahayta Foundation
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0c1b33] hover:bg-[#c2410c] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
