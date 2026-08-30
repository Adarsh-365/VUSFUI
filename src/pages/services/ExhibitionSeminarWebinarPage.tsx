import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck,
  Video,
  Users,
  Globe2,
  Sparkles,
  ArrowRight,
  Tv,
  Mic,
  Award,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

interface ExhibitionSeminarWebinarPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const ExhibitionSeminarWebinarPage: React.FC<ExhibitionSeminarWebinarPageProps> = ({
  onMemberClick,
}) => {
  return (
    <div className="min-h-screen bg-[#070e17] text-slate-100 selection:bg-purple-500 selection:text-white">
      {/* 1. Event Stage Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-purple-900/30">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-purple-400">Exhibitions / Seminars / Webinars</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <CalendarCheck className="w-4 h-4 text-purple-400" />
                <span>KNOWLEDGE EXCHANGE &bull; CONFERENCES &amp; GLOBAL EXPOS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Exhibitions, Seminars &amp; Webinars: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-amber-300">
                  Connect, Inspire &amp; Expand Horizons
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                Discover expertly curated exhibitions, insightful seminars, and engaging webinars tailored to inspire and educate. Explore a world of knowledge and innovation with our diverse range of events. Join us and expand your horizons today!
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Register for Upcoming Events</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/events"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-5 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  View Full Event Calendar &rarr;
                </Link>
              </div>
            </div>

            {/* Upcoming Flagship Expo Spotlight */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#121c2e] to-[#1c122e] border border-purple-800/60 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <span className="bg-purple-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                Featured Flagship Expo
              </span>
              <h3 className="text-xl font-bold text-white leading-tight">
                Nepal Food &amp; Beverage Expo &amp; Buyer-Seller Meet 2026
              </h3>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-purple-300">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>October 14-16, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>Bhrikutimandap Hall, Kathmandu, Nepal</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                150+ B2B Exhibitors connecting Indian FMCG, food processing, packaging, and machinery with Nepalese buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tri-Format Event Capabilities */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0f1a2a] rounded-2xl border border-purple-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Physical International Expos</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Full-scale international trade exhibitions with branded booth infrastructure, VIP buyer lounges, product demo pavilions, and live bilateral MoUs.
            </p>
          </div>

          <div className="bg-[#0f1a2a] rounded-2xl border border-pink-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Policy &amp; Industry Seminars</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              High-impact policy conclaves interfacing MSME founders with ministry secretaries, banking leaders, and chartered industry stalwarts.
            </p>
          </div>

          <div className="bg-[#0f1a2a] rounded-2xl border border-amber-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Interactive Global Webinars</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Digital masterclasses, cross-border trade webinars, and interactive Q&amp;A sessions broadcasted to thousands of registered delegates worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-700 via-pink-700 to-purple-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Participate or Book an Exhibition Stall</h3>
            <p className="text-xs sm:text-sm text-purple-100 max-w-2xl">
              Elevate your brand presence, showcase your machinery, and network with institutional buyers at upcoming VUSF conclaves.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-purple-900 hover:bg-purple-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Inquire for Stall Booking
          </button>
        </div>
      </section>
    </div>
  );
};
