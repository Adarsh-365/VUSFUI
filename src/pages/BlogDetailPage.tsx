import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOGS_DATA, BlogPost } from '../data/blogData';
import {
  Calendar,
  Clock,
  Share2,
  Printer,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Users,
  Image as ImageIcon,
  Building2,
} from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState<boolean>(false);

  const currentBlog =
    BLOGS_DATA.find(
      (b) =>
        b.slug === slug ||
        b.id === slug ||
        (slug && b.id.includes(slug)) ||
        (slug && b.slug.includes(slug))
    ) || BLOGS_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentIndex = BLOGS_DATA.findIndex((b) => b.id === currentBlog.id);
  const prevBlog = currentIndex > 0 ? BLOGS_DATA[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < BLOGS_DATA.length - 1 ? BLOGS_DATA[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. Header Hero */}
      <section className="bg-[#0c1b33] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-[1100px] mx-auto space-y-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Link to="/" className="hover:underline text-slate-300">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Insights &amp; Articles</span>
              <span className="text-slate-500">/</span>
              <span className="text-amber-300 truncate max-w-xs sm:max-w-md">
                {currentBlog.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 text-xs text-slate-200 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 text-xs text-slate-200 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <span className="bg-[#c2410c] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider inline-block">
              {currentBlog.category}
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              {currentBlog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentBlog.date}</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentBlog.readTime}</span>
              </span>
              <span>•</span>
              <span className="text-slate-300 font-medium">
                Published by {currentBlog.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Article Content */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          {/* Article Image Banner */}
          <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
            <img
              src={currentBlog.image}
              alt={currentBlog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Partnership Metrics / Snapshot */}
          {currentBlog.impactMetrics && currentBlog.impactMetrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
              {currentBlog.impactMetrics.map((m, i) => (
                <div key={i} className="border-l-2 border-[#c2410c] pl-3 space-y-0.5">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Strategic Highlights Box */}
          {currentBlog.highlights && currentBlog.highlights.length > 0 && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
              <h3 className="text-xs font-extrabold uppercase text-[#7c2d12] tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c2410c]" />
                <span>Key Strategic Highlights</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                {currentBlog.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c2410c] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Dignitaries & Signatories */}
          {currentBlog.keyPeople && currentBlog.keyPeople.length > 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-extrabold uppercase text-slate-700 tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-[#c2410c]" />
                <span>Key Dignitaries &amp; Signatories</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentBlog.keyPeople.map((person, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 rounded-lg p-3 text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-2 shadow-xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#c2410c] shrink-0" />
                    <span>{person}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            {Array.isArray(currentBlog.content) ? (
              currentBlog.content.map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-line leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="whitespace-pre-line leading-relaxed">
                {currentBlog.content}
              </p>
            )}
          </div>

          {/* Event Registration / Detail Link if applicable */}
          {currentBlog.eventLink && (
            <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border-2 border-[#c2410c]/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="bg-[#c2410c] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wider">
                    OFFICIAL EVENT PAGE
                  </span>
                  <span className="text-xs text-[#c2410c] font-bold">
                    Free Digital Edition &amp; Pass Booking
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {currentBlog.title}
                </h4>
                <p className="text-xs text-slate-600">
                  Register for 100% Free Digital E-Magazine or book collector's physical hardbound copies.
                </p>
              </div>
              <Link
                to={currentBlog.eventLink}
                className="bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2"
              >
                <span>Go to Event &amp; Book Pass</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Milestone Archive Link if applicable */}
          {currentBlog.milestoneSlug && (
            <div className="bg-gradient-to-r from-[#0c1b33] to-[#1e293b] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-slate-700">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="bg-[#c2410c] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wider">
                    TIMELINE ARCHIVE
                  </span>
                  <span className="text-xs text-amber-300 font-semibold">
                    {currentBlog.milestoneSlug === 'pillai-university-strategic-mou-incubation'
                      ? 'Milestone 33'
                      : currentBlog.milestoneSlug === 'navi-mumbai-business-hub-2026-summit'
                      ? 'Milestone 32'
                      : 'Milestone Archive'}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {currentBlog.title} – Executive Timeline Archive
                </h4>
                <p className="text-xs text-slate-300">
                  Explore full event documents, signing photos, and bilateral timeline highlights.
                </p>
              </div>
              <Link
                to={`/namaste-india-group/${currentBlog.milestoneSlug}`}
                className="bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2"
              >
                <span>View Timeline Milestone</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Photo Gallery Grid */}
          {currentBlog.galleryImages && currentBlog.galleryImages.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-[#c2410c]" />
                  <span>
                    {currentBlog.milestoneSlug === 'navi-mumbai-business-hub-2026-summit'
                      ? 'Navi Mumbai Business Summit Photo Gallery'
                      : currentBlog.milestoneSlug === 'pillai-university-strategic-mou-incubation'
                      ? 'MoU Signing Ceremony & Campus Gallery'
                      : 'Event Ceremony & Photo Gallery'}
                  </span>
                </h4>
                <span className="text-xs font-semibold text-slate-500">
                  {currentBlog.galleryImages.length} Photographs
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {currentBlog.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="h-32 sm:h-40 rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xs group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* External Action Button if applicable */}
          {currentBlog.externalLink && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Official External Sourcing Portal
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Visit the dedicated Namaste China portal for factory verification and Canton Fair passes.
                </p>
              </div>
              <a
                href={currentBlog.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-1.5"
              >
                <span>Visit namastechina.org</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-2">Tags:</span>
            {currentBlog.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Bottom Next / Prev Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          {prevBlog ? (
            <Link
              to={`/blog/${prevBlog.slug}`}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0c1b33] hover:text-[#c2410c] p-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Article: {prevBlog.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextBlog ? (
            <Link
              to={`/blog/${nextBlog.slug}`}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0c1b33] hover:text-[#c2410c] p-2 rounded-lg transition-colors"
            >
              <span>Next Article: {nextBlog.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
