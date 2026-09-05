import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  Video,
  CheckCircle2,
  Filter,
  ExternalLink,
  Award,
  Image as ImageIcon,
  ChevronRight,
  MessageSquare,
  Clock,
  CreditCard,
} from 'lucide-react';
import { NAMASTE_INDIA_EVENTS, InternationalEvent } from '../data/internationalData';
import { EventItem } from '../types';

interface EventsPageProps {
  onSelectEvent: (event: EventItem | { title: string; date: string; location: string; description?: string; image?: string }) => void;
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onSelectEvent, onMemberClick }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pastYearFilter, setPastYearFilter] = useState<string>('all');
  const [pastCategoryFilter, setPastCategoryFilter] = useState<string>('all');

  const upcomingEvents = [
    {
      id: 'namaste-india-magazine',
      title: 'Namaste Entrepreneur 2026 Magazine',
      date: 'Release: 02 October 2026 (Story Deadline: 20 Sep 2026)',
      dateBadge: '02 OCT 2026',
      location: '10+ States Pan-India Distribution & Digital Delivery',
      category: 'NATIONAL PUBLICATION & MSME PROFILES',
      filterCategory: 'awards',
      image: '/banner/magazine.jpeg',
      desc: '5,000+ national prints across 10+ states featuring 50% dedicated coverage of visionary MSME leaders and homegrown innovators. Register for free digital edition or order physical print.',
      highlight: '5,000+ Prints Across 10+ States • 100% Free Digital Access',
      priceSnippet: 'Digital Copy Free • Physical Print ₹500 + GST',
    },
    {
      id: 'women-entrepreneur-growth-program',
      title: 'Women Entrepreneurship - 1-Day Growth Program',
      date: 'October 10, 2026 (09:00 AM – 04:45 PM)',
      dateBadge: '10 OCT 2026',
      location: 'Pillai University Campus, New Panvel, Navi Mumbai',
      category: '1-DAY ACTION WORKSHOP & CLINIC',
      filterCategory: 'women',
      image: '/banner/women-enter-growth-prg1da.jpeg',
      desc: 'From idea & informal business to registered enterprise, government scheme credit & market connect. Includes personal 1-page GOV SCHEMES Snapshot and live hands-on application clinic at Pillai University campus.',
      highlight: 'GOV SCHEMES Snapshot • Live Application Clinic • Pillai Univ.',
      priceSnippet: 'Delegate Pass ₹3,000 + GST • VIP Pass ₹5,000 + GST',
    },
    {
      id: 'canton-fair-delegation',
      title: 'Canton Fair 2026 Delegation - Guangzhou',
      date: 'Phase 2: Apr 23–29 | Phase 3: Apr 30–May 7, 2026',
      dateBadge: '23 APR – 07 MAY 2026',
      location: 'Pazhou Exhibition Complex, Guangzhou, China',
      category: 'INTERNATIONAL TRADE DELEGATION',
      filterCategory: 'delegations',
      image: '/banner/namaste-china.jpeg',
      desc: "Join India's leading trade delegation for the world's largest import-export exhibition in Guangzhou, China. Phase 2 & Phase 3 packages with verified OEM suppliers, 4-star hotel stay, and dedicated visa facilitation support.",
      highlight: 'Return Flights • 4-Star Luxury Stay • 100% Visa Protection',
      priceSnippet: 'Phase 2 & 3 Early Bird Packages Available',
    },
    {
      id: 'sc-st-startup-program',
      title: 'SC / ST Entrepreneurship - 1-Day Growth Program',
      date: 'October 24, 2026 (09:30 AM – 04:45 PM)',
      dateBadge: '24 OCT 2026',
      location: 'Pillai University Campus, New Panvel, Navi Mumbai',
      category: '1-DAY ACTION WORKSHOP & CLINIC',
      filterCategory: 'entrepreneurship',
      image: '/banner/sc-ststartup1day.jpeg',
      desc: 'From informal business & idea to registered enterprise, NSSH 25% machinery subsidy, Stand-Up India credit & 4% GeM public procurement access. Includes personal GOV SCHEMES Snapshot & application clinic.',
      highlight: 'GOV SCHEMES Snapshot • 4% GeM Public Procurement • Pillai Univ.',
      priceSnippet: 'Delegate Pass ₹3,000 + GST • VIP Pass ₹5,000 + GST',
    },
    {
      id: 'navi-mumbai-export-summit',
      title: 'Navi Mumbai Export Summit 2026',
      date: 'November 21, 2026 (09:30 AM – 06:00 PM)',
      dateBadge: '21 NOV 2026',
      location: 'CIDCO Exhibition & Convention Centre, Vashi, Navi Mumbai',
      category: 'REGIONAL EXPORT CONCLAVE',
      filterCategory: 'summits',
      image: '/banner/navi-mumbai-export-summit.jpeg',
      desc: 'Connecting MMR and Konkan manufacturers, agro-producers, and industrial exporters with direct international buyers, shipping liners, customs clearance specialists, and trade facilitation councils.',
      highlight: 'JNPA Port Logistics & International Buyer-Seller Conclave',
      priceSnippet: 'Passes from ₹2,499 + 18% GST',
    },
    {
      id: 'msme-excellence-awards',
      title: 'MSME Excellence Award Show & Gala Night 2026',
      date: 'November 22, 2026 (04:00 PM – 10:00 PM)',
      dateBadge: '22 NOV 2026',
      location: 'Grand Ballroom, The Orchid / CIDCO Convention Centre, Navi Mumbai',
      category: 'NATIONAL RECOGNITION & AWARDS GALA',
      filterCategory: 'awards',
      image: '/banner/msme-award.jpeg',
      desc: 'Celebrating and felicitating trailblazing MSMEs, visionary entrepreneurs, manufacturing leaders, and dynamic startup innovators who drive India’s industrial and economic growth.',
      highlight: '50+ Sector Awards & Dignitary Felicitations',
      priceSnippet: 'Passes from ₹2,999 + 18% GST',
    },
    {
      id: 'pune-export-summit',
      title: 'Pune Export Summit 2026 (Western Trade Corridor)',
      date: 'November 28, 2026 (09:30 AM – 05:30 PM)',
      dateBadge: '28 NOV 2026',
      location: 'Auto Cluster Exhibition Center, Chinchwad, Pune',
      category: 'WESTERN TRADE CORRIDOR',
      filterCategory: 'summits',
      image: '/banner/pune.jpeg',
      desc: 'Unlocking overseas trade corridors for Pune’s engineering, automotive ancillary, electronics, and agro-processing clusters with cross-border trade facilitation and buyer linkages.',
      highlight: 'Engineering & Auto-Ancillary B2B Meet',
      priceSnippet: 'Passes from ₹2,499 + 18% GST',
    },
    {
      id: 'nashik-export-summit',
      title: 'Nashik Export Summit 2026 (Agro & Industrial Corridor)',
      date: 'December 12, 2026 (09:30 AM – 05:30 PM)',
      dateBadge: '12 DEC 2026',
      location: 'Nashik Industrial & Agro Hub, Ambad, Maharashtra',
      category: 'AGRO & INDUSTRIAL CORRIDOR',
      filterCategory: 'summits',
      image: '/banner/nashik.jpeg',
      desc: 'Catalyzing export opportunities for Nashik’s grape, horticulture, agro-commodities, precision engineering, and defense manufacturing clusters with global buyers and cold-chain logistics.',
      highlight: 'Agro-Horticulture & Engineering Corridors',
      priceSnippet: 'Passes from ₹1,999 + 18% GST',
    },
    {
      id: 'sc-st-entrepreneur-program',
      title: 'SC / ST Entrepreneur Growth & Empowerment Program',
      date: 'December 12–14, 2026 (10:00 AM – 05:30 PM)',
      dateBadge: '12–14 DEC 2026',
      location: 'Dr. Ambedkar Business & Convention Centre, CBD Belapur, Maharashtra',
      category: 'INCLUSIVE EMPOWERMENT & SUBSIDIES',
      filterCategory: 'entrepreneurship',
      image: '/banner/sc-ststartup1day.jpeg',
      desc: 'Specialized 3-day empowerment initiative offering comprehensive bank credit linkages, government subsidies (PMEGP / CMEGP), bank-ready DPR preparation, and expert business mentorship.',
      highlight: '3-Day Intensive Mentorship & Subsidy Linkage',
      priceSnippet: 'Passes from ₹1,999 + 18% GST',
    },
    {
      id: 'women-business-success-program',
      title: 'Women Business Success Program (3-Day Executive Masterclass)',
      date: 'January 10–12, 2027 (10:00 AM – 05:30 PM)',
      dateBadge: '10–12 JAN 2027',
      location: 'Mumbai / Navi Mumbai Executive Learning Center',
      category: 'EXECUTIVE MASTERCLASS',
      filterCategory: 'women',
      image: '/banner/women-enter-sucess-prog-3day.jpeg',
      desc: 'An intensive 3-day executive coaching program focusing on international export readiness, supply chain mastery, financial sustainability, and institutional partnerships for women leaders.',
      highlight: '3-Day Global Export & Scaling Masterclass',
      priceSnippet: 'Passes from ₹4,999 + 18% GST',
    },
    {
      id: 'sambhaji-nagar-export-summit',
      title: 'Chhatrapati Sambhaji Nagar Export Summit 2027',
      date: 'January 17, 2027 (09:30 AM – 05:30 PM)',
      dateBadge: '17 JAN 2027',
      location: 'Marathwada Auto Cluster / Industrial Convention Hall, Waluj',
      category: 'MARATHWADA EXPORT HUB',
      filterCategory: 'summits',
      image: '/banner/chhatrapati.jpeg',
      desc: 'Accelerating export potential for Marathwada’s automotive, pharmaceutical, plastic, and heavy engineering MSMEs with international trade delegations and port logistics access.',
      highlight: 'Marathwada Industrial & Pharma Export Meet',
      priceSnippet: 'Passes from ₹1,999 + 18% GST',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Forthcoming Events (11)' },
    { id: 'summits', label: 'Regional Export Summits (4)' },
    { id: 'delegations', label: 'International Trade (1)' },
    { id: 'entrepreneurship', label: 'SC / ST Programs (2)' },
    { id: 'women', label: 'Women in Business (2)' },
    { id: 'awards', label: 'Awards & Media (2)' },
  ];

  const filteredUpcomingEvents = upcomingEvents.filter((ev) => {
    const matchesFilter = selectedFilter === 'all' || ev.filterCategory === selectedFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Filter Past Events from Namaste India Milestones
  const filteredPastEvents = useMemo(() => {
    return NAMASTE_INDIA_EVENTS.filter((ev) => {
      const matchesYear = pastYearFilter === 'all' || ev.year === pastYearFilter;
      const matchesCategory =
        pastCategoryFilter === 'all' ||
        ev.category.toLowerCase().includes(pastCategoryFilter.toLowerCase()) ||
        (ev.badge && ev.badge.toLowerCase().includes(pastCategoryFilter.toLowerCase()));
      return matchesYear && matchesCategory;
    });
  }, [pastYearFilter, pastCategoryFilter]);

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-[#0b1b33] to-[#070d18] text-white py-16 px-4 sm:px-6 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4 tracking-wide uppercase">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>•</span>
            <span className="text-amber-400">Events &amp; Conclaves</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span>GLOBAL EXPOS &bull; BILATERAL CONCLAVES &bull; STATE EXPORT SUMMITS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Trade Expos, Conclaves &amp; Delegations
            </h1>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              Explore upcoming international business delegations and regional export summits, along with comprehensive photographic archives and reports from 33+ past milestone conclaves since 2021.
            </p>
          </div>
        </div>
      </div>

      {/* Main Events Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* ========================================================================= */}
        {/* Section 1: Upcoming Forthcoming Events & Summits */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Forthcoming Expos &amp; Summits</h2>
              <p className="text-xs text-slate-400 mt-1">Register as trade delegate, corporate nominee, or book exhibition stalls</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search city, sector or summit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-xs px-3.5 py-2.5 border border-slate-700 rounded-xl bg-slate-900/90 text-white focus:border-orange-500 outline-none shadow-xs w-56 sm:w-64"
              />
              <button
                onClick={() => onMemberClick('become')}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shrink-0 shadow-lg shadow-orange-950/50"
              >
                Delegate Registration
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-950'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Upcoming Events Timeline (1 Event Per Row, Chronologically Sorted) */}
          <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-orange-500/40 space-y-12 sm:space-y-16">
            {filteredUpcomingEvents.map((ev, idx) => (
              <div key={ev.id} className="relative group">
                {/* Glowing Timeline Marker Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0b1626] border-2 border-orange-500 flex items-center justify-center text-amber-400 font-mono font-black text-xs shadow-lg shadow-orange-950/80 group-hover:scale-110 group-hover:border-amber-400 group-hover:bg-orange-600 group-hover:text-white transition-all z-10">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Timeline Row Card (Full Width) */}
                <div className="w-full bg-[#0b1626] rounded-3xl border border-slate-800 shadow-2xl hover:border-orange-500/60 transition-all duration-300 overflow-hidden hover:shadow-orange-950/20">
                  
                  {/* 1. Full Banner Image (Stretching edge-to-edge with NO cropping on left, right, top, or bottom) */}
                  <Link to={`/events/${ev.id}`} className="block relative bg-slate-950 border-b border-slate-800 overflow-hidden">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
                    />

                    {/* Top Floating Badges */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap items-center gap-2">
                      <span className="bg-orange-600 text-white text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-md shadow-md tracking-wider">
                        {ev.category}
                      </span>
                      <span className="bg-black/80 backdrop-blur-md text-amber-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md border border-slate-700">
                        Conclave #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/80 backdrop-blur-md text-cyan-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-md border border-slate-700 flex items-center gap-1.5 shadow-md">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{ev.dateBadge}</span>
                    </div>
                  </Link>

                  {/* 2. Detailed Event Info & Action Bar */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      {/* Left Details Column */}
                      <div className="space-y-4 flex-1">
                        {/* Date & Location Pills */}
                        <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                          <div className="flex items-center gap-1.5 text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
                            <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>{ev.date}</span>
                          </div>

                          <div className="flex items-center gap-1.5 text-slate-300 bg-slate-900 border border-slate-700/80 px-3 py-1.5 rounded-xl">
                            <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                            <span>{ev.location}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <Link to={`/events/${ev.id}`} className="block group-hover:text-amber-300 transition-colors">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight">
                            {ev.title}
                          </h3>
                        </Link>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                          {ev.desc}
                        </p>

                        {/* Highlight Badge */}
                        <div className="inline-flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2 bg-orange-500/10 text-orange-300 text-xs font-bold rounded-xl border border-orange-500/20">
                          <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
                          <span>{ev.highlight}</span>
                        </div>
                      </div>

                      {/* Right Action & Pricing Box */}
                      <div className="lg:w-80 shrink-0 p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between gap-4">
                        <div>
                          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Delegate Registration</div>
                          <div className="text-xl sm:text-2xl font-black text-amber-400 mt-0.5">
                            {ev.priceSnippet}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1">
                            MCA Section 8 Non-Profit &bull; GST Invoiced Pass
                          </div>
                        </div>

                        <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                          <Link
                            to={`/events/${ev.id}`}
                            className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-black py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-950/60"
                          >
                            <span>View Event Page &amp; Book Pass</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                onSelectEvent({
                                  title: ev.title,
                                  date: ev.date,
                                  location: ev.location,
                                  description: ev.desc,
                                  image: ev.image,
                                })
                              }
                              className="flex-1 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 py-2.5 px-3 rounded-xl border border-slate-800 transition-colors cursor-pointer text-center"
                              title="Quick preview modal"
                            >
                              Quick View
                            </button>

                            <a
                              href={`https://wa.me/918169080686?text=Hello%2C%20I%20would%20like%20information%20regarding%20${encodeURIComponent(ev.title)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-xl transition-all flex items-center justify-center shrink-0"
                              title="WhatsApp Inquiry"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredUpcomingEvents.length === 0 && (
            <div className="text-center py-12 bg-slate-900/60 rounded-2xl border border-slate-800">
              <p className="text-sm font-semibold text-slate-300">No events found matching your filter or search query.</p>
              <button
                onClick={() => {
                  setSelectedFilter('all');
                  setSearchQuery('');
                }}
                className="mt-3 px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* Section 2: Past Conclave Highlights & Media (From Namaste India Timeline) */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NAMASTE INDIA GROUP HISTORICAL TIMELINE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Past Conclave Highlights &amp; Media</h2>
              <p className="text-xs text-slate-400 mt-1">
                Official photographic records, government awards, international delegations, and summits from 2021 to 2026 ({NAMASTE_INDIA_EVENTS.length} Total Milestones)
              </p>
            </div>

            {/* Link to Full Interactive Timeline */}
            <Link
              to="/namaste-india-group"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 bg-slate-900 border border-slate-700 px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-all shrink-0"
            >
              <span>View Full Interactive Timeline (33 Milestones)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Year & Category Filters for Past Conclaves */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0a1526] p-4 rounded-2xl border border-slate-800">
            {/* Year Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Year:</span>
              {['all', '2026', '2025', '2024', '2023', '2022', '2021'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setPastYearFilter(yr)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    pastYearFilter === yr
                      ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {yr === 'all' ? 'All Years' : yr}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Filter:</span>
              {[
                { id: 'all', label: 'All Conclaves' },
                { id: 'award', label: 'Awards & Recognition' },
                { id: 'delegation', label: 'International Trade' },
                { id: 'summit', label: 'Business Summits' },
                { id: 'women', label: 'Women & Social' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setPastCategoryFilter(cat.id)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    pastCategoryFilter === cat.id
                      ? 'bg-cyan-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Past Events Grid (Showing all filtered past events from timeline) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPastEvents.map((item) => {
              const primaryImg = item.images && item.images.length > 0 ? item.images[0] : '/banner/namaste-china.jpeg';

              return (
                <div
                  key={item.slug}
                  className="bg-[#0b1728] rounded-2xl border border-slate-800 p-5 shadow-xl hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between group space-y-4 hover:shadow-2xl"
                >
                  <div className="space-y-3">
                    {/* Media Thumbnail */}
                    <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative bg-slate-950">
                      <img
                        src={primaryImg}
                        alt={item.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/timeline_photos/start namste india/IMG-20260206-WA0035.jpeg';
                        }}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
                          #{String(item.milestoneNumber).padStart(2, '0')}
                        </span>
                        <span className="bg-black/70 backdrop-blur-xs text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-700">
                          {item.year}
                        </span>
                      </div>

                      {item.images && item.images.length > 1 && (
                        <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                          <ImageIcon className="w-3 h-3" />
                          <span>{item.images.length} Photos</span>
                        </div>
                      )}
                    </div>

                    {/* Date & Category */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <div className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        <span>{item.date}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                        {item.badge || item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>

                    {/* Description excerpt */}
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() =>
                        onSelectEvent({
                          title: item.title,
                          date: item.date,
                          location: item.location,
                          description: item.description,
                          image: primaryImg,
                        })
                      }
                      className="text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors cursor-pointer"
                    >
                      Quick Preview
                    </button>

                    <Link
                      to={`/namaste-india-group/${item.slug}`}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Full Timeline Report</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPastEvents.length === 0 && (
            <div className="text-center py-12 bg-slate-900/60 rounded-2xl border border-slate-800">
              <p className="text-sm font-semibold text-slate-300">No past events found matching the selected year/category filter.</p>
              <button
                onClick={() => {
                  setPastYearFilter('all');
                  setPastCategoryFilter('all');
                }}
                className="mt-3 px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
              >
                Reset Past Event Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
