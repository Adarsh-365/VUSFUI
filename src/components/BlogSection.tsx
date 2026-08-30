import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ArrowRight, ExternalLink, Sparkles, User } from 'lucide-react';
import { BLOGS_DATA, BlogPost } from '../data/blogData';

interface BlogSectionProps {
  onSelectBlog?: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectBlog }) => {
  const navigate = useNavigate();

  const handleBlogClick = (post: BlogPost) => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <section id="blog-section" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with Watermark */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between pb-8 gap-4">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark">
              Insights
            </span>
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#c2410c] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VUSF Editorial &amp; Official Blogs</span>
            </div>
            <h2 className="relative text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Articles, Case Studies &amp; Corridors
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Discover latest partnership updates, nationwide contributor calls, summit recaps, and global sourcing gateways.
            </p>
          </div>
        </div>

        {/* 4 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOGS_DATA.map((post) => (
            <div
              key={post.id}
              onClick={() => handleBlogClick(post)}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-[#c2410c]/50 hover:-translate-y-1"
            >
              <div>
                {/* Image Cover */}
                <div className="h-44 relative overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#c2410c] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded shadow-sm">
                    {post.badge}
                  </div>

                  {post.externalUrl && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <span>namastechina.org</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-[#c2410c]">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0c1b33] group-hover:text-[#c2410c] transition-colors flex items-center gap-1">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                {post.externalUrl ? (
                  <span className="text-[11px] font-bold text-amber-600 hover:underline flex items-center gap-0.5">
                    <span>Visit Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                ) : (
                  <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-[#c2410c] transition-colors" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
