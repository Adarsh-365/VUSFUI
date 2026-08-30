import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { NAMASTE_INDIA_EVENTS, InternationalEvent } from '../../data/internationalData';
import {
  Calendar,
  MapPin,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon,
  CheckCircle2,
  Users,
  Building2,
  Share2,
  Download,
  Star,
  Globe2,
  Layers,
} from 'lucide-react';

interface NamasteIndiaEventDetailPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const NamasteIndiaEventDetailPage: React.FC<NamasteIndiaEventDetailPageProps> = ({
  onMemberClick,
}) => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  // Find the event by slug, id, milestone number, or index
  const { currentEvent, currentIndex, totalEvents } = useMemo(() => {
    if (!eventId) {
      return { currentEvent: NAMASTE_INDIA_EVENTS[NAMASTE_INDIA_EVENTS.length - 1], currentIndex: NAMASTE_INDIA_EVENTS.length - 1, totalEvents: NAMASTE_INDIA_EVENTS.length };
    }

    const cleanParam = eventId.toLowerCase().trim();
    const idx = NAMASTE_INDIA_EVENTS.findIndex(
      (e) =>
        e.slug.toLowerCase() === cleanParam ||
        e.id?.toLowerCase() === cleanParam ||
        e.milestoneNumber?.toString() === cleanParam ||
        `milestone-${e.milestoneNumber?.toString().padStart(2, '0')}` === cleanParam ||
        e.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === cleanParam
    );

    if (idx !== -1) {
      return {
        currentEvent: NAMASTE_INDIA_EVENTS[idx],
        currentIndex: idx,
        totalEvents: NAMASTE_INDIA_EVENTS.length,
      };
    }

    // Default to latest event if not found
    return {
      currentEvent: NAMASTE_INDIA_EVENTS[NAMASTE_INDIA_EVENTS.length - 1],
      currentIndex: NAMASTE_INDIA_EVENTS.length - 1,
      totalEvents: NAMASTE_INDIA_EVENTS.length,
    };
  }, [eventId]);

  const prevEvent = currentIndex > 0 ? NAMASTE_INDIA_EVENTS[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < NAMASTE_INDIA_EVENTS.length - 1
      ? NAMASTE_INDIA_EVENTS[currentIndex + 1]
      : null;

  // Lightbox modal state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % currentEvent.images.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + currentEvent.images.length) % currentEvent.images.length
            : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, currentEvent.images.length]);

  const milestoneNumberStr = (currentEvent.milestoneNumber || currentIndex + 1)
    .toString()
    .padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* 1. Header Navigation Bar */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-600/20 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 space-y-6">
          {/* Breadcrumbs & Back Link */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Link to="/" className="hover:underline text-slate-400">Home</Link>
              <span>/</span>
              <Link to="/international" className="hover:underline text-slate-400">International</Link>
              <span>/</span>
              <Link to="/namaste-india-group" className="hover:underline text-slate-400">Namaste India Timeline</Link>
              <span>/</span>
              <span className="text-amber-400">Milestone #{milestoneNumberStr}</span>
            </div>

            <Link
              to="/namaste-india-group"
              className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-orange-400" />
              <span>Back to All 33 Milestones</span>
            </Link>
          </div>

          {/* Hero Main Content */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg shadow-orange-950/50">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MILESTONE #{milestoneNumberStr} OF {totalEvents}</span>
              </div>

              {currentEvent.badge && (
                <span className="text-xs font-extrabold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-amber-300 px-3 py-1.5 rounded-full">
                  {currentEvent.badge}
                </span>
              )}

              <span className="text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
                {currentEvent.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
              {currentEvent.title}
            </h1>

            {/* Date & Location Pill Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2 font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-xl">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>{currentEvent.date}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-xl">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{currentEvent.location}</span>
              </div>

              {currentEvent.venue && (
                <div className="flex items-center gap-2 text-slate-400 bg-slate-900/40 border border-slate-800/80 px-3.5 py-1.5 rounded-xl text-xs">
                  <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="line-clamp-1">{currentEvent.venue}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Gallery Grid */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Full Narrative & Outcomes */}
          <div className="lg:col-span-8 space-y-10">
            {/* Full Story & Overview */}
            <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
              <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-orange-400" />
                  <span>Event Overview &amp; Narrative</span>
                </h2>
                <span className="text-xs font-bold text-slate-400">
                  Year {currentEvent.year}
                </span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {currentEvent.fullArticle && currentEvent.fullArticle.length > 0 ? (
                  currentEvent.fullArticle.map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="leading-relaxed">{currentEvent.description}</p>
                )}
              </div>
            </div>

            {/* Key Highlights Box */}
            {currentEvent.keyHighlights && currentEvent.keyHighlights.length > 0 && (
              <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span>Key Highlights &amp; Strategic Outcomes</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {currentEvent.keyHighlights.map((hl, hlIdx) => (
                    <div
                      key={hlIdx}
                      className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Complete Photo Gallery */}
            {currentEvent.images && currentEvent.images.length > 0 && (
              <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
                <div className="border-b border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-orange-400" />
                    <span>Complete Event Gallery ({currentEvent.images.length} Photos)</span>
                  </h3>
                  <span className="text-xs text-slate-400">Click any image to enlarge</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {currentEvent.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => setLightboxIndex(imgIdx)}
                      className="relative h-40 sm:h-48 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-zoom-in group/img"
                    >
                      <img
                        src={img}
                        alt={`${currentEvent.title} full photo ${imgIdx + 1}`}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-xs font-bold text-white bg-black/70 px-3 py-1.5 rounded-lg border border-slate-700">
                          Photo #{imgIdx + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Key Dignitaries & Fast Facts */}
          <div className="lg:col-span-4 space-y-6">
            {/* Impact Metrics Box */}
            {currentEvent.impactMetrics && currentEvent.impactMetrics.length > 0 && (
              <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center justify-between">
                  <span>Milestone Stats</span>
                  <Globe2 className="w-4 h-4 text-orange-400" />
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  {currentEvent.impactMetrics.map((met, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex justify-between py-2 border-b border-slate-800/80 last:border-0"
                    >
                      <span className="text-slate-400">{met.label}:</span>
                      <span className="font-bold text-white text-right">{met.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Dignitaries & Partners Box */}
            {currentEvent.keyPeople && currentEvent.keyPeople.length > 0 && (
              <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-400" />
                  <span>Key Dignitaries &amp; Partners</span>
                </div>
                <div className="space-y-2.5">
                  {currentEvent.keyPeople.map((person, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-slate-900/90 border border-slate-800/80 p-3 rounded-xl text-xs text-slate-200 flex items-start gap-2.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{person}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action CTA Card */}
            <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/10 border border-orange-500/40 rounded-3xl p-6 sm:p-8 space-y-4">
              <h4 className="text-lg font-black text-white">Join the Next Milestone</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect your business with Namaste India Group to participate in upcoming international B2B delegations, state awards, and export matchmaking conclaves.
              </p>
              <button
                onClick={() => onMemberClick('become')}
                className="w-full bg-gradient-to-r from-[#c2410c] to-[#ea580c] hover:from-[#ea580c] hover:to-[#f97316] text-white text-xs font-bold py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Partner with Namaste India Group
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Milestone Pagination (Previous / Next) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Previous Milestone */}
          {prevEvent ? (
            <Link
              to={`/namaste-india-group/${prevEvent.slug}`}
              className="bg-[#0f172a] hover:bg-slate-900 border border-slate-800 hover:border-orange-500/60 p-5 rounded-2xl transition-all group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:border-orange-500 shrink-0 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  &larr; Previous Milestone #{(prevEvent.milestoneNumber || currentIndex).toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 truncate transition-colors">
                  {prevEvent.title}
                </div>
                <div className="text-[11px] text-slate-400">{prevEvent.date}</div>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}

          {/* Next Milestone */}
          {nextEvent ? (
            <Link
              to={`/namaste-india-group/${nextEvent.slug}`}
              className="bg-[#0f172a] hover:bg-slate-900 border border-slate-800 hover:border-orange-500/60 p-5 rounded-2xl transition-all group flex items-center justify-between gap-4 text-right"
            >
              <div className="space-y-1 min-w-0 flex-1">
                <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  Next Milestone #{(nextEvent.milestoneNumber || currentIndex + 2).toString().padStart(2, '0')} &rarr;
                </div>
                <div className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 truncate transition-colors">
                  {nextEvent.title}
                </div>
                <div className="text-[11px] text-slate-400">{nextEvent.date}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:border-orange-500 shrink-0 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
        </div>
      </section>

      {/* 4. Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white border-b border-slate-800 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="text-sm sm:text-base font-bold text-amber-300 truncate">
                {currentEvent.title}
              </h4>
              <div className="text-xs text-slate-400">
                Photo {lightboxIndex + 1} of {currentEvent.images.length} &bull; {currentEvent.date}
              </div>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-white bg-slate-800 hover:bg-orange-600 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stage */}
          <div
            className="relative max-w-5xl flex-1 flex items-center justify-center my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {currentEvent.images.length > 1 && (
              <button
                onClick={() =>
                  setLightboxIndex(
                    (prev) => (prev! - 1 + currentEvent.images.length) % currentEvent.images.length
                  )
                }
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-orange-600 border border-slate-700 text-white rounded-full transition-all cursor-pointer z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <img
              src={currentEvent.images[lightboxIndex]}
              alt={`Full view ${lightboxIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-slate-700 shadow-2xl"
            />

            {currentEvent.images.length > 1 && (
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev! + 1) % currentEvent.images.length)
                }
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-orange-600 border border-slate-700 text-white rounded-full transition-all cursor-pointer z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails */}
          {currentEvent.images.length > 1 && (
            <div
              className="w-full max-w-4xl flex items-center justify-center gap-2 overflow-x-auto py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {currentEvent.images.map((img, thumbIdx) => (
                <button
                  key={thumbIdx}
                  onClick={() => setLightboxIndex(thumbIdx)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    lightboxIndex === thumbIdx
                      ? 'border-orange-500 scale-105 shadow-md shadow-orange-950'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
