import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Handshake,
  Globe2,
  Users,
  Building2,
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Briefcase,
  FileCheck,
  TrendingUp,
  Mail,
  Phone,
  ShieldCheck,
  MapPin,
  ChevronRight,
} from 'lucide-react';

interface B2BServicePageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const B2BServicePage: React.FC<B2BServicePageProps> = ({ onMemberClick }) => {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [activeTab, setActiveTab] = useState<'delegations' | 'directories' | 'tenders'>('delegations');

  const delegations = [
    {
      country: 'Pune',
      sector: 'Auto Components, Engineering & Precision Machining',
      delegates: '50+ Industrial Buyers & MSME Units',
      interest: 'Precision Machining, Die Casting, EV Electronics & PEB Components',
      date: 'Active Industrial Corridor',
      badge: 'Auto & Engineering Hub',
    },
    {
      country: 'Nashik',
      sector: 'Agro-Processing, Electricals & Heavy Machinery',
      delegates: '40+ Processing Units & Exporters',
      interest: 'Food Packaging, Transformer Components, Winery Equipment & Farm Inputs',
      date: 'Monthly B2B Meets',
      badge: 'Agro & Industrial Hub',
    },
    {
      country: 'Navi Mumbai',
      sector: 'Import-Export, Port Logistics & Chemical Warehousing',
      delegates: '60+ Exporters, Forwarders & Trading Houses',
      interest: 'JNPT Port Logistics, Bulk Chemical Storage, Cold Chain & FMCG Wholesale',
      date: 'Flagship Commercial Gateway',
      badge: 'Apex Commercial Hub',
    },
    {
      country: 'Sambhaji Nagar',
      sector: 'Automotive Ancillaries, Pharmaceuticals & Plastics',
      delegates: '35+ Corporate Procurement Heads',
      interest: 'Pharma Intermediates, Plastic Moulding, Auto Assembly & Renewable Power',
      date: 'Quarterly Regional Delegation',
      badge: 'Marathwada Industrial Hub',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* 1. Cinematic B2B Exchange Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-600/20 to-amber-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-amber-400">B2B Matchmaking Service</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Handshake className="w-4 h-4 text-orange-400" />
                <span>BUSINESS TO BUSINESS &bull; NAMASTE INDIA DIVISION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Global B2B Delegations &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                  Verified Matchmaking
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Business To Business, a division of Namaste India, regularly arranges one-on-one business meetings for visiting business delegations using its extensive collection of business directories.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-[#c2410c] to-[#ea580c] hover:from-[#ea580c] hover:to-[#f97316] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-orange-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Request 1-on-1 Delegation Meeting</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#directory-hub"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-slate-700 transition-all"
                >
                  Explore Trade Directories &darr;
                </a>
              </div>
            </div>

            {/* Live Delegation Terminal Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-[#0f172a]/95 border border-slate-700/80 rounded-3xl p-6 shadow-2xl space-y-4 backdrop-blur-xl relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Live Delegation Board
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full">
                    Active Matchmaking
                  </span>
                </div>

                <div className="space-y-3">
                  {delegations.slice(0, 3).map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Globe2 className="w-3.5 h-3.5 text-orange-400" />
                          {item.country} Delegation
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-300 font-medium">{item.sector}</div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">{item.interest}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => onMemberClick('become')}
                    className="w-full text-xs font-bold text-amber-400 hover:text-amber-300 py-2 rounded-lg bg-amber-400/10 border border-amber-400/20 transition-colors"
                  >
                    View All 15+ Active International Delegations &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Value Narrative Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#0c1b33] via-[#0f172a] to-[#1e293b] rounded-3xl border border-slate-700/80 p-8 sm:p-12 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
              MATCHMAKING INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Facilitating Ideal Cross-Border Commercial Partnerships
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              In order to facilitate finding the ideal business partner, this portal offers detailed information about visiting business delegations, including their contact details and business interests. Additionally, it provides access to business inquiries, tenders, and searchable business directories from different countries.
            </p>
            <p>
              By leveraging our curated international network, Indian MSMEs and manufacturers can bypass exploratory friction, secure pre-screened distributor meetings, and directly negotiate supply agreements, joint ventures, and export consignments.
            </p>
          </div>

          {/* 3 Interactive Feature Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Delegation Direct Access</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct verified contact coordinates, specific procurement interests, and scheduled buyer-seller calendar slots.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Global Tenders &amp; Inquiries</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live repository of international trade inquiries, public sector tenders, and high-value sourcing mandates.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Searchable Directories</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cross-indexed multi-country industry directories spanning South Asia, China, Middle East, and Asia-Pacific.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Delegation Calendar & Filter Board */}
      <section id="directory-hub" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Visiting Delegations &amp; Partner Exchanges</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Explore scheduled inbound and regional buyer-seller delegations under Namaste India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Pune', 'Nashik', 'Navi Mumbai', 'Sambhaji Nagar'].map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCountry(c)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    selectedCountry === c
                      ? 'bg-[#c2410c] text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {delegations
              .filter((d) => selectedCountry === 'All' || d.country.toLowerCase().includes(selectedCountry.toLowerCase()))
              .map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 space-y-4 hover:border-orange-500 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                        {item.badge}
                      </span>
                      <span className="text-[11px] text-slate-400">{item.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white">{item.country} &bull; {item.sector}</h3>

                    <div className="space-y-2 text-xs text-slate-300">
                      <div>
                        <span className="text-slate-400 font-semibold">Delegation Size: </span>
                        {item.delegates}
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold">Key Buying Interests: </span>
                        {item.interest}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => onMemberClick('become')}
                      className="bg-orange-500/20 hover:bg-orange-500 text-orange-300 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Book B2B Table Meeting</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#c2410c] to-[#9a3412] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">List Your Company in the International B2B Directory</h3>
            <p className="text-xs sm:text-sm text-orange-100 max-w-2xl">
              Get highlighted to incoming foreign trade delegations and receive high-intent commercial inquiries directly.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-[#c2410c] hover:bg-orange-50 text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Register in B2B Directory
          </button>
        </div>
      </section>
    </div>
  );
};
