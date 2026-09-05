import React from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Sparkles,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Lightbulb,
  Zap,
  Target,
} from 'lucide-react';

interface StartupsPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const StartupsPage: React.FC<StartupsPageProps> = ({ onMemberClick }) => {
  return (
    <div className="min-h-screen bg-[#070e1a] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* 1. Startup Launchpad Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-600/20 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <span className="text-amber-400">Startups &amp; Innovation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Rocket className="w-4 h-4 text-orange-400" />
                <span>STARTUP ACCELERATOR &bull; DPIIT RECOGNITION &bull; SEED FUNDING</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Incubating India&apos;s Next <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                  Generation of Innovators
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Vishwa Udyam Sahayta Foundation provides early-stage and high-growth startups with full-cycle acceleration: DPIIT Startup India registration, 3-year income tax exemption (80-IAC), seed capital syndication, mentor clinics, and global market expansion.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-[#c2410c] to-[#ea580c] hover:from-[#ea580c] hover:to-[#f97316] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Apply for Startup Acceleration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#startup-pillars"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  Explore Support Pillars &darr;
                </a>
              </div>
            </div>

            {/* Startup Metric Box */}
            <div className="lg:col-span-4 bg-[#0f172a]/95 border border-slate-700/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-3">
                Startup India Benefits
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Tax Exemption:</span>
                  <span className="font-bold text-emerald-400">3 Years (Section 80-IAC)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Patent &amp; IPR Rebate:</span>
                  <span className="font-bold text-amber-300">Up to 80% Subsidy</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Govt Tenders:</span>
                  <span className="font-bold text-white">Exempt from Prior Turnover</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Seed Fund Scheme:</span>
                  <span className="font-bold text-amber-300">Up to 50 lakh Grant/Debt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Startup Pillars Grid */}
      <section id="startup-pillars" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            360-DEGREE STARTUP ACCELERATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Everything You Need to Scale from Idea to Global Market
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 space-y-4 hover:border-orange-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">DPIIT Recognition &amp; IPR</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Fast-track DPIIT certificate issuance, Section 80-IAC tax holiday filings, 80% rebate on trademark and patent applications, and angel tax clearance.
            </p>
          </div>

          <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 space-y-4 hover:border-orange-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Seed Grants &amp; VC Syndication</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Access to Startup India Seed Fund Scheme (SISFS), credit guarantee loans via CGTMSE, and direct pitch decks to institutional angel networks.
            </p>
          </div>

          <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 space-y-4 hover:border-orange-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Global Market Entry</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Showcase your product at international startup delegations in Nepal, UAE, Singapore, and Vietnam with subsidized booth space and investor B2B tables.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-[#c2410c] to-[#9a3412] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Accelerate Your Startup with VUSF</h3>
            <p className="text-xs sm:text-sm text-orange-100 max-w-2xl">
              Get DPIIT recognized, structure your seed funding round, and connect with seasoned industry mentors today.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-[#c2410c] hover:bg-orange-50 text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Apply for Acceleration
          </button>
        </div>
      </section>
    </div>
  );
};
