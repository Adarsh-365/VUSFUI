import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAMASTE_INDIA_EVENTS, InternationalEvent } from '../../data/internationalData';
import {
  Globe2,
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Search,
  X,
  ChevronRight,
  ChevronLeft,
  Image as ImageIcon,
  CheckCircle2,
  Layers,
  ArrowUpDown,
  Building2,
  Users,
  Star,
  ExternalLink,
  Maximize2,
} from 'lucide-react';

interface NamasteIndiaPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const NamasteIndiaPage: React.FC<NamasteIndiaPageProps> = ({ onMemberClick }) => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  // In-page full event modal state
  const [selectedFullEvent, setSelectedFullEvent] = useState<InternationalEvent | null>(null);

  // Lightbox state with gallery navigation
  const [lightboxState, setLightboxState] = useState<{
    images: string[];
    index: number;
    title: string;
    date: string;
  } | null>(null);

  const years = ['All', '2026', '2025', '2024', '2023', '2022', '2021'];

  const categories = [
    'All',
    'International Trade',
    'Government & Awards',
    'Rural & MSME Development',
    'Women Empowerment & CSR',
    'Education & Skill Incubation',
  ];

  // Map each event with formatted milestone number (#01 to #33)
  const eventsWithMilestone = useMemo(() => {
    return NAMASTE_INDIA_EVENTS.map((ev, i) => {
      const num = ev.milestoneNumber || i + 1;
      return {
        ...ev,
        milestoneId: num.toString().padStart(2, '0'),
        rawMilestoneNum: num,
      };
    });
  }, []);

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    const list = eventsWithMilestone.filter((ev) => {
      // Year filter
      const matchesYear =
        selectedYear === 'All' ||
        ev.year === selectedYear ||
        ev.date.includes(selectedYear);

      // Category filter
      let matchesCategory = true;
      if (selectedCategory !== 'All') {
        const catLower = (ev.category || '').toLowerCase();
        if (selectedCategory === 'International Trade') {
          matchesCategory =
            catLower.includes('international') ||
            catLower.includes('trade') ||
            catLower.includes('b2b') ||
            catLower.includes('gateway');
        } else if (selectedCategory === 'Government & Awards') {
          matchesCategory =
            catLower.includes('government') ||
            catLower.includes('award') ||
            catLower.includes('summit');
        } else if (selectedCategory === 'Rural & MSME Development') {
          matchesCategory =
            catLower.includes('rural') ||
            catLower.includes('msme') ||
            catLower.includes('agriculture') ||
            catLower.includes('fpo') ||
            catLower.includes('foundation');
        } else if (selectedCategory === 'Women Empowerment & CSR') {
          matchesCategory =
            catLower.includes('women') ||
            catLower.includes('csr') ||
            catLower.includes('shg') ||
            catLower.includes('hygiene') ||
            catLower.includes('didi') ||
            catLower.includes('mentorship');
        } else if (selectedCategory === 'Education & Skill Incubation') {
          matchesCategory =
            catLower.includes('education') ||
            catLower.includes('university') ||
            catLower.includes('college') ||
            catLower.includes('skill') ||
            catLower.includes('incubation');
        }
      }

      // Search query filter
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = (ev.title || '').toLowerCase().includes(q);
        const inDesc = (ev.description || '').toLowerCase().includes(q);
        const inLoc = (ev.location || '').toLowerCase().includes(q);
        const inDate = (ev.date || '').toLowerCase().includes(q);
        const inCat = (ev.category || '').toLowerCase().includes(q);
        const inNum = ev.milestoneId.includes(q) || ev.rawMilestoneNum.toString() === q;
        const inHighlights = (ev.keyHighlights || []).some((h) => h.toLowerCase().includes(q));
        matchesSearch = inTitle || inDesc || inLoc || inDate || inCat || inNum || inHighlights;
      }

      return matchesYear && matchesCategory && matchesSearch;
    });

    // Sort by milestone number
    return list.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.rawMilestoneNum - b.rawMilestoneNum;
      } else {
        return b.rawMilestoneNum - a.rawMilestoneNum;
      }
    });
  }, [eventsWithMilestone, selectedYear, selectedCategory, searchQuery, sortOrder]);

  const openLightbox = (images: string[], index: number, title: string, date: string) => {
    setLightboxState({ images, index, title, date });
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;
      if (e.key === 'Escape') {
        setLightboxState(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxState((prev) =>
          prev
            ? { ...prev, index: (prev.index + 1) % prev.images.length }
            : null
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxState((prev) =>
          prev
            ? {
                ...prev,
                index: (prev.index - 1 + prev.images.length) % prev.images.length,
              }
            : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* 1. Hero Banner */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-600/20 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/international" className="hover:underline text-slate-400">International</Link>
            <span>/</span>
            <span className="text-amber-400">Namaste India Group Timeline</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg shadow-orange-950/50">
                <Sparkles className="w-4 h-4" />
                <span>COMPLETE 2021 – 2026 OFFICIAL TIMELINE • 33 LANDMARK MILESTONES</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Namaste India Group <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                  Chronicle of Milestones (2021 – 2026)
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
                From the founding inception on <strong>7 July 2021</strong> to leading international trade missions across Nepal, Vietnam, Thailand, Türkiye, and the world-famous Canton Fair in China, explore our complete history of empowering Indian MSMEs, fostering women entrepreneurship, and building bilateral bridges.
              </p>

              {/* Fast Facts Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
                  <div className="text-2xl font-black text-amber-400">33</div>
                  <div className="text-[11px] font-semibold text-slate-400">Milestones Documented</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
                  <div className="text-2xl font-black text-orange-400">250+</div>
                  <div className="text-[11px] font-semibold text-slate-400">Archival Photographs</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
                  <div className="text-2xl font-black text-amber-400">6+</div>
                  <div className="text-[11px] font-semibold text-slate-400">Years of Growth (2021-26)</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
                  <div className="text-2xl font-black text-emerald-400">10+</div>
                  <div className="text-[11px] font-semibold text-slate-400">International Corridors</div>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#0f172a] to-[#0b1120] border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-4">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>Timeline Fast-Track</span>
                <Globe2 className="w-4 h-4 text-orange-400" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Inception Date:</span>
                  <span className="font-bold text-white">7 July 2021</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">International Corridors:</span>
                  <span className="font-bold text-emerald-400">15+ Countries / Desks</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Latest Milestone (#33):</span>
                  <span className="font-bold text-amber-300">21 Aug 2026 (Pillai MoU)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Founding Milestone (#01):</span>
                  <span className="font-bold text-white">7 July 2021 (Launch)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Controls */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sticky top-[72px] z-30 bg-[#070d18]/95 backdrop-blur-md border-b border-slate-800/80">
        <div className="space-y-4">
          <div className="bg-[#0f172a]/95 rounded-2xl border border-slate-800 p-4 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Year Pills */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 text-xs">
              {years.map((yr) => {
                const count =
                  yr === 'All'
                    ? NAMASTE_INDIA_EVENTS.length
                    : NAMASTE_INDIA_EVENTS.filter((e) => e.year === yr || e.date.includes(yr)).length;
                return (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap text-xs flex items-center gap-1.5 ${
                      selectedYear === yr
                        ? 'bg-[#c2410c] text-white shadow-md'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span>{yr === 'All' ? 'All Years' : yr}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        selectedYear === yr ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input & Sort Order */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <input
                  type="text"
                  placeholder="Search milestone, city, keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs bg-slate-900 border border-slate-700 text-white rounded-xl py-2 pl-9 pr-8 focus:outline-none focus:border-orange-500 transition-all"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Order Toggle */}
              <button
                onClick={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
                title={sortOrder === 'desc' ? 'Showing Latest First' : 'Showing Oldest First'}
                className="bg-slate-900 border border-slate-700 hover:border-orange-500 text-slate-300 hover:text-white px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-orange-400" />
                <span className="hidden sm:inline">
                  {sortOrder === 'desc' ? 'Latest First' : 'Oldest First'}
                </span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer text-xs ${
                  selectedCategory === cat
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Vertical Timeline Component */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-8 border-b border-slate-800 pb-3">
          <div>
            Showing <strong className="text-white">{filteredEvents.length}</strong> of{' '}
            <strong className="text-white">{NAMASTE_INDIA_EVENTS.length}</strong> Milestones
            {selectedYear !== 'All' && <span> in {selectedYear}</span>}
            {selectedCategory !== 'All' && <span> under "{selectedCategory}"</span>}
            {searchQuery && <span> matching "{searchQuery}"</span>}
          </div>

          {(selectedYear !== 'All' || selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedYear('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-amber-400 hover:underline cursor-pointer font-bold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredEvents.length === 0 ? (
          <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-12 text-center space-y-4">
            <Search className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">No Milestones Match Your Filter</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try adjusting your year, category, or search keywords to view the complete milestone history.
            </p>
            <button
              onClick={() => {
                setSelectedYear('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-[#c2410c] text-white text-xs font-bold px-4 py-2 rounded-xl"
            >
              Show All 33 Milestones
            </button>
          </div>
        ) : (
          <div className="relative">
            {/* Central Connecting Spine */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-orange-500 via-amber-500 to-emerald-500 rounded-full opacity-40" />
            <div className="md:hidden absolute left-6 top-4 bottom-4 w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-emerald-500 rounded-full opacity-40" />

            {/* Timeline Milestones Loop */}
            <div className="space-y-12 sm:space-y-16">
              {filteredEvents.map((ev, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={ev.milestoneId || idx}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-6 md:gap-12 group`}
                  >
                    {/* Timeline Center Node Badge with Original Milestone Number (#01 to #33) */}
                    <button
                      onClick={() => setSelectedFullEvent(ev)}
                      className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 cursor-pointer"
                      title={`Click to View Full Event: ${ev.title}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#070d18] border-2 border-orange-500 text-amber-300 shadow-xl shadow-orange-950/80 flex items-center justify-center text-xs font-black group-hover:scale-115 group-hover:bg-gradient-to-br group-hover:from-orange-600 group-hover:to-amber-600 group-hover:text-white transition-all duration-300 ring-4 ring-[#070d18]">
                        #{ev.milestoneId}
                      </div>
                    </button>

                    {/* Left or Right Content Card */}
                    <div className="pl-14 md:pl-0 w-full md:w-[calc(50%-2.5rem)]">
                      <div className="bg-[#0f172a] rounded-3xl border border-slate-800 group-hover:border-orange-500/70 p-6 sm:p-8 shadow-xl transition-all duration-300 space-y-5 hover:shadow-orange-950/20">
                        {/* Header Badges: Date, Location, Category */}
                        <div className="space-y-2.5 border-b border-slate-800 pb-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                              <Calendar className="w-3.5 h-3.5 text-orange-400" />
                              <span>{ev.date}</span>
                            </div>

                            {ev.badge && (
                              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500/15 border border-orange-500/30 text-amber-300 px-2.5 py-0.5 rounded-md">
                                {ev.badge}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-xs">
                            {ev.location && (
                              <div className="flex items-center gap-1 text-slate-400 font-medium">
                                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                                <span>{ev.location}</span>
                              </div>
                            )}

                            {ev.category && (
                              <div className="text-[11px] text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                                {ev.category}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Event Title (Clickable to open Full Event View) */}
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                          <button
                            onClick={() => setSelectedFullEvent(ev)}
                            className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5 text-left cursor-pointer group/title"
                          >
                            <span>{ev.title}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-1 text-orange-400 transition-all" />
                          </button>
                        </h3>

                        {/* Description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                          {ev.description}
                        </p>

                        {/* Key Highlights (if available) */}
                        {ev.keyHighlights && ev.keyHighlights.length > 0 && (
                          <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800/90 space-y-2">
                            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                              <Star className="w-3 h-3 text-amber-400" />
                              <span>Key Highlights &amp; Outcomes</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-slate-300">
                              {ev.keyHighlights.map((hl, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Event Image Gallery */}
                        {ev.images && ev.images.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <div className="flex items-center justify-between text-xs text-slate-400">
                              <span className="font-semibold flex items-center gap-1.5">
                                <ImageIcon className="w-3.5 h-3.5 text-orange-400" />
                                <span>Event Photo Gallery ({ev.images.length})</span>
                              </span>
                              {ev.images.length > 4 && (
                                <button
                                  onClick={() => setSelectedFullEvent(ev)}
                                  className="text-amber-400 hover:text-amber-300 font-bold cursor-pointer text-[11px] underline"
                                >
                                  View all {ev.images.length} photos &rarr;
                                </button>
                              )}
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {ev.images.slice(0, 4).map((img, imgIdx) => (
                                <div
                                  key={imgIdx}
                                  onClick={() => openLightbox(ev.images, imgIdx, ev.title, ev.date)}
                                  className="relative h-28 sm:h-28 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-zoom-in group/img"
                                >
                                  <img
                                    src={img}
                                    alt={`${ev.title} photo ${imgIdx + 1}`}
                                    onError={(e) => {
                                      (e.target as HTMLElement).style.display = 'none';
                                    }}
                                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                                  />
                                  {imgIdx === 3 && ev.images.length > 4 ? (
                                    <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-center p-1">
                                      <span className="text-sm font-black text-amber-300">
                                        +{ev.images.length - 4}
                                      </span>
                                      <span className="text-[9px] font-bold text-white">More Photos</span>
                                    </div>
                                  ) : (
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                      <span className="text-[9px] font-bold text-white bg-black/70 px-2 py-0.5 rounded-md">
                                        Enlarge
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Card Bottom CTA Link */}
                        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-4">
                          <div className="text-[11px] text-slate-400">
                            {ev.images.length} Photos &bull; Year {ev.year}
                          </div>
                          <button
                            onClick={() => setSelectedFullEvent(ev)}
                            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-md transition-all group/btn cursor-pointer"
                          >
                            <span>View Full Event</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Empty Spacer on Opposite Side for Alternating Desktop Layout */}
                    <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* 4. Full In-Page Event Modal View (Instant & Complete) */}
      {selectedFullEvent && (
        <div
          onClick={() => setSelectedFullEvent(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0f172a] rounded-3xl border border-slate-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-[#1e293b] border-b border-slate-800 flex items-start justify-between gap-4 sticky top-0 z-10">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-black px-3 py-1 rounded-full">
                    MILESTONE #{(selectedFullEvent.milestoneNumber || 1).toString().padStart(2, '0')}
                  </span>
                  {selectedFullEvent.badge && (
                    <span className="text-[10px] font-extrabold uppercase bg-orange-500/15 border border-orange-500/30 text-amber-300 px-2.5 py-0.5 rounded-md">
                      {selectedFullEvent.badge}
                    </span>
                  )}
                  <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-md">
                    {selectedFullEvent.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                  {selectedFullEvent.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    <span>{selectedFullEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>{selectedFullEvent.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedFullEvent(null)}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
              {/* Full Narrative */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {selectedFullEvent.fullArticle && selectedFullEvent.fullArticle.length > 0 ? (
                  selectedFullEvent.fullArticle.map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="leading-relaxed">{selectedFullEvent.description}</p>
                )}
              </div>

              {/* Key Highlights */}
              {selectedFullEvent.keyHighlights && selectedFullEvent.keyHighlights.length > 0 && (
                <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-3">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span>Key Highlights &amp; Strategic Outcomes</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedFullEvent.keyHighlights.map((hl, hlIdx) => (
                      <div key={hlIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Dignitaries & Partners */}
              {selectedFullEvent.keyPeople && selectedFullEvent.keyPeople.length > 0 && (
                <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-3">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-400" />
                    <span>Key Dignitaries &amp; Delegation Leaders</span>
                  </div>
                  <div className="space-y-2">
                    {selectedFullEvent.keyPeople.map((person, pIdx) => (
                      <div key={pIdx} className="text-xs text-slate-300 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-400" />
                        <span>{person}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Complete Event Gallery */}
              {selectedFullEvent.images && selectedFullEvent.images.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-orange-400" />
                      <span>Complete Event Photos ({selectedFullEvent.images.length})</span>
                    </h4>
                    <span className="text-xs text-slate-400">Click any image to enlarge</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedFullEvent.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={() =>
                          openLightbox(
                            selectedFullEvent.images,
                            imgIdx,
                            selectedFullEvent.title,
                            selectedFullEvent.date
                          )
                        }
                        className="relative h-36 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-zoom-in group/img"
                      >
                        <img
                          src={img}
                          alt={`${selectedFullEvent.title} photo ${imgIdx + 1}`}
                          className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-[10px] font-bold text-white bg-black/70 px-2 py-1 rounded">
                            Photo #{imgIdx + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <Link
                to={`/namaste-india-group/${selectedFullEvent.slug}`}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Dedicated Full Page URL</span>
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedFullEvent(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedFullEvent(null);
                    onMemberClick('become');
                  }}
                  className="px-5 py-2 bg-gradient-to-r from-[#c2410c] to-[#ea580c] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Partner with Namaste India
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Fullscreen Lightbox Modal */}
      {lightboxState && (
        <div
          onClick={() => setLightboxState(null)}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Lightbox Top Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white border-b border-slate-800 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h4 className="text-sm sm:text-base font-bold text-amber-300 truncate">
                {lightboxState.title}
              </h4>
              <div className="text-xs text-slate-400">
                Photo {lightboxState.index + 1} of {lightboxState.images.length} &bull;{' '}
                {lightboxState.date}
              </div>
            </div>

            <button
              onClick={() => setLightboxState(null)}
              className="p-2 text-white bg-slate-800 hover:bg-orange-600 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Stage */}
          <div
            className="relative max-w-5xl flex-1 flex items-center justify-center my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxState.images.length > 1 && (
              <button
                onClick={() =>
                  setLightboxState((prev) =>
                    prev
                      ? {
                          ...prev,
                          index:
                            (prev.index - 1 + prev.images.length) % prev.images.length,
                        }
                      : null
                  )
                }
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-orange-600 border border-slate-700 text-white rounded-full transition-all cursor-pointer z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <img
              src={lightboxState.images[lightboxState.index]}
              alt={`Full view ${lightboxState.index + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-slate-700 shadow-2xl"
            />

            {lightboxState.images.length > 1 && (
              <button
                onClick={() =>
                  setLightboxState((prev) =>
                    prev
                      ? {
                          ...prev,
                          index: (prev.index + 1) % prev.images.length,
                        }
                      : null
                  )
                }
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 bg-slate-900/80 hover:bg-orange-600 border border-slate-700 text-white rounded-full transition-all cursor-pointer z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Thumbnails */}
          {lightboxState.images.length > 1 && (
            <div
              className="w-full max-w-4xl flex items-center justify-center gap-2 overflow-x-auto py-2"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxState.images.map((img, thumbIdx) => (
                <button
                  key={thumbIdx}
                  onClick={() =>
                    setLightboxState((prev) => (prev ? { ...prev, index: thumbIdx } : null))
                  }
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    lightboxState.index === thumbIdx
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
