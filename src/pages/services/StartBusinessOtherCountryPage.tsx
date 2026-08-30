import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Globe2,
  Users,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  MapPin,
  Landmark,
} from 'lucide-react';

interface StartBusinessOtherCountryPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const StartBusinessOtherCountryPage: React.FC<StartBusinessOtherCountryPageProps> = ({
  onMemberClick,
}) => {
  return (
    <div className="min-h-screen bg-[#08111e] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* 1. Global Subsidiary & Expansion Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-indigo-900/40">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-indigo-400">Start Business in Other Country</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span>OFFSHORE ENTITY SETUP &bull; NAMASTE INDIA DIVISION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Expanding Your Business Globally: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-300">
                  Establishing Offices &amp; Operations in New Markets
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                At Namaste India, we specialize in assisting businesses with expanding their operations into new countries by setting up offices or establishing a presence abroad. Our services cater to every aspect of international expansion.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-indigo-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Inquire for Overseas Office Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#expansion-pillars"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-5 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  Explore Setup Pillars &darr;
                </a>
              </div>
            </div>

            {/* Global Corridors Hub Card */}
            <div className="lg:col-span-4 bg-[#0e1d32]/90 border border-indigo-800/50 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Active Country Hubs</span>
                <Globe2 className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="space-y-2 text-xs">
                {[
                  { city: 'RAKEZ (Ras Al Khaimah, UAE)', desc: 'Free zone entity setup, industrial & commercial licensing' },
                  { city: 'UAE (Dubai & Abu Dhabi)', desc: 'Mainland entity, GCC gateway & multi-currency bank accounts' },
                  { city: 'China (Guangzhou & Shanghai)', desc: 'OEM liaison office, sourcing desk & factory representation' },
                  { city: 'Singapore', desc: 'ASEAN financial hub, holding entity & regional headquarters' },
                  { city: 'Hong Kong', desc: 'APAC international trading company & global banking gateway' },
                  { city: 'India', desc: 'Domestic corporate parent entity & cross-border DGFT compliance' },
                ].map((hub, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-colors">
                    <div className="font-bold text-white flex items-center gap-1.5 text-[11.5px]">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{hub.city}</span>
                    </div>
                    <div className="text-[10.5px] text-slate-400 mt-0.5 ml-5">{hub.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Expansion Capabilities */}
      <section id="expansion-pillars" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              END-TO-END GLOBAL SUPPORT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Global Office Setup &amp; Expansion Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Whether you&apos;re looking to open a new office, establish a subsidiary, or set up a branch abroad, our experienced team provides comprehensive guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Market Research & Feasibility',
                desc: 'In-depth assessment of target jurisdiction, commercial demand, local tax structures, and competitor landscape.',
                icon: Globe2,
              },
              {
                title: 'Legal & Regulatory Compliance',
                desc: 'Foreign incorporation, company registrar filings, commercial licensing, and bilateral cross-border compliance.',
                icon: FileCheck,
              },
              {
                title: 'Physical Office Setup & Real Estate',
                desc: 'Commercial leasing, shared incubator spaces, warehousing facilities, and physical branch infrastructure.',
                icon: Building2,
              },
              {
                title: 'Local Staffing & Operational Support',
                desc: 'Bilingual staff hiring, expatriate work permits, local payroll setup, and continuous day-to-day administrative support.',
                icon: Users,
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0e1d30] rounded-2xl border border-indigo-900/60 p-6 space-y-4 hover:border-indigo-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Navigate Global Expansion Confidently</h3>
            <p className="text-xs sm:text-sm text-indigo-100 max-w-2xl">
              With Namaste India, ensure a smooth, risk-mitigated, and compliant transition into international markets.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-indigo-900 hover:bg-indigo-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Consult Expansion Advisor
          </button>
        </div>
      </section>
    </div>
  );
};
