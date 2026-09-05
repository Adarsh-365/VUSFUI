import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Video,
  Mic,
  Users,
  Sparkles,
  ArrowRight,
  Tv,
  Calendar,
  CheckCircle2,
  BookOpen,
  MapPin,
  GraduationCap,
  HeartHandshake,
  TrendingUp,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface SeminarWebinarPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const SeminarWebinarPage: React.FC<SeminarWebinarPageProps> = ({
  onMemberClick,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'inclusive' | 'women' | 'export'>('all');

  const featuredPrograms = [
    {
      id: 'sc-st-entrepreneur-program',
      title: 'SC / ST Entrepreneur Program (12–14 Dec 2026)',
      date: 'December 12–14, 2026',
      location: 'Maharashtra & Pan-India Desks (Hybrid)',
      category: 'inclusive',
      badge: 'INCLUSIVE EMPOWERMENT',
      badgeColor: 'bg-orange-500',
      description:
        'Specialized 3-day empowerment initiative offering comprehensive bank credit linkages, government subsidies (PMEGP / CMEGP), bank-ready DPR preparation, and expert business mentorship.',
      highlight: '3-Day Intensive Mentorship & Subsidy Linkage',
      bullets: [
        'Detailed Project Report (DPR) formulation for bankable funding',
        'PMEGP & CMEGP government subsidy sanction guidance (up to 35%)',
        'DIC & Stand-Up India single-window facilitation',
        'One-on-one business planning with certified MSME advisors',
      ],
    },
    {
      id: 'sc-st-startup-program',
      title: 'SC / ST Startup Innovation & Incubation Program (24 Oct 2026)',
      date: 'October 24, 2026',
      location: 'Navi Mumbai Innovation Hub & Live Broadcast',
      category: 'inclusive',
      badge: 'STARTUP INCUBATION',
      badgeColor: 'bg-emerald-500',
      description:
        'Accelerating high-potential SC & ST innovators and early-stage founders with seed funding facilitation, investor pitch sessions, statutory registrations, and strategic market expansion support.',
      highlight: 'Seed Capital Linkage & Angel Pitching',
      bullets: [
        'DPIIT & Startup India tax exemption registrations (80-IAC)',
        'Live investor pitch desk with angel networks and VCs',
        'Patent, trademark, and IPR facilitation with 80% fee rebate',
        'Incubation co-working spaces & prototyping mentorship',
      ],
    },
    {
      id: 'women-entrepreneur-growth-program',
      title: 'Women Entrepreneur Growth Program (10 Oct 2026)',
      date: 'October 10, 2026',
      location: 'Navi Mumbai & Regional Desks (Hybrid)',
      category: 'women',
      badge: 'STREE SHAKTI MISSION',
      badgeColor: 'bg-rose-500',
      description:
        'Empowering women founders and MSME owners with dedicated leadership coaching, collateral-free credit access, digital marketing, packaging solutions, and institutional buyer networks.',
      highlight: 'Enterprise Scaling & Bank Linkages',
      bullets: [
        'Collateral-free credit facilitation under CGTMSE & Mudra schemes',
        'Direct retail buyer & institutional corporate linkages',
        'Modern product packaging, barcoding, and digital branding',
        'Peer networking with trailblazing women industry leaders',
      ],
    },
    {
      id: 'women-business-success-program',
      title: 'Women Business Success Program (10–12 Jan 2027)',
      date: 'January 10–12, 2027',
      location: 'Mumbai / Navi Mumbai Executive Center & Live Stream',
      category: 'women',
      badge: 'EXECUTIVE MASTERCLASS',
      badgeColor: 'bg-purple-500',
      description:
        'An intensive 3-day executive coaching program focusing on international export readiness, supply chain mastery, financial sustainability, and institutional partnerships for women leaders.',
      highlight: '3-Day Global Export & Scaling Masterclass',
      bullets: [
        'Cross-border export compliance (IEC, RCMC, GST refunds on export)',
        'Letter of Credit (LC), forex risk management & international banking',
        'Global trade corridor linkages across UAE, Nepal, and Southeast Asia',
        'Executive certificate of completion from Namaste India Group',
      ],
    },
  ];

  const filteredPrograms = featuredPrograms.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#070e17] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* 1. Event Stage Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-indigo-900/30">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-indigo-400">Seminars &amp; Webinars</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Video className="w-4 h-4 text-indigo-400" />
                <span>KNOWLEDGE EXCHANGE &bull; EMPOWERMENT BOOTCAMPS &amp; DIGITAL WEBINARS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Seminars &amp; Webinars: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-amber-300">
                  Inspire, Learn &amp; Accelerate Growth
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Participate in high-impact industry seminars, government policy conclaves, and interactive digital webinars designed to connect MSME founders, startup entrepreneurs, and exporters with policymakers, bankers, and industry leaders.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-indigo-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Register for Upcoming Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#featured-programs"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>View Featured Seminars &darr;</span>
                </a>
              </div>
            </div>

            {/* Upcoming Conclave Spotlight */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#101726] to-[#161f36] border-2 border-indigo-500/50 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <span className="bg-rose-500 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                  Upcoming Masterclass
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping" />
              </div>

              <h3 className="text-xl font-black text-white leading-tight">
                Women Entrepreneur Growth Program
              </h3>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                  <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>October 10, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Navi Mumbai Executive Center &amp; Live Stream</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                Dedicated leadership coaching, collateral-free credit access, packaging solutions, and retail market linkages.
              </p>

              <button
                onClick={() => onMemberClick('become')}
                className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enroll in Growth Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Seminars & Interactive Programs (from /events) */}
      <section id="featured-programs" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL CALENDAR EVENTS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Upcoming Seminars &amp; Incubation Programs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Interactive empowerment workshops, mentorship conclaves, and digital acceleration masterclasses designed for founders, women innovators, and SC/ST entrepreneurs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'inclusive', label: 'SC / ST Programs' },
              { id: 'women', label: 'Women Entrepreneurs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950'
                    : 'bg-slate-800/90 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Key Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-gradient-to-br from-[#0e1726] to-[#070e17] border-2 border-indigo-900/60 hover:border-indigo-500/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`${prog.badgeColor} text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-sm`}
                  >
                    {prog.badge}
                  </span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full">
                    {prog.highlight}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight group-hover:text-indigo-300 transition-colors">
                  {prog.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-indigo-300">
                    <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{prog.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="line-clamp-1">{prog.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {prog.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {prog.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => onMemberClick('become')}
                  className="w-full bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Register for Event</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Knowledge & Conclave Pillars */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-extrabold text-indigo-400 uppercase tracking-wider">
            TRANSFORMATIVE CONCLAVE FORMATS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Comprehensive Learning &amp; Mentorship Formats
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Delivering practical actionable knowledge from policy architects, chartered accountants, and industrial veterans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0e1726] rounded-2xl border border-indigo-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Policy &amp; Ministry Seminars</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In-person roundtables interfacing enterprise founders with DIC commissioners, banking executives, and industrial secretaries.
            </p>
          </div>

          <div className="bg-[#0e1726] rounded-2xl border border-sky-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Digital Masterclasses &amp; Webinars</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Interactive high-definition live webinars covering export documentation, GeM bidding, China sourcing strategies, and digital branding.
            </p>
          </div>

          <div className="bg-[#0e1726] rounded-2xl border border-amber-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Namaste India Academic Bootcamps</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Campus entrepreneurship acceleration tracks, women founder bootcamps, and certified MSME management development programs (MDPs).
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-700 via-sky-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Propose a Seminar Topic or Join as Speaker</h3>
            <p className="text-xs sm:text-sm text-indigo-100 max-w-2xl">
              Are you an industry expert, chartered accountant, or trade consultant? Partner with VUSF to share your expertise across our national webinar series.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-indigo-900 hover:bg-indigo-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Join as Speaker / Delegate
          </button>
        </div>
      </section>
    </div>
  );
};
