import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Building2,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Landmark,
  Scale,
  Award,
  Zap,
  Sparkles,
} from 'lucide-react';

interface GeMPortalPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const GeMPortalPage: React.FC<GeMPortalPageProps> = ({ onMemberClick }) => {
  return (
    <div className="min-h-screen bg-[#07121e] text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* 1. GeM Terminal Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-emerald-900/30">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-emerald-400">GeM Portal Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Landmark className="w-4 h-4 text-emerald-400" />
                <span>PUBLIC PROCUREMENT GATEWAY &bull; GOVT OF INDIA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                GeM Portal Onboarding: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                  Vendor Assessment &amp; Tender Bidding
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                Government e-Marketplace (GeM) is the official public procurement portal for Central &amp; State Ministries, Public Sector Undertakings (PSUs), and Defense establishments. We handhold MSMEs and manufacturers to register, get verified, and win high-value tenders.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Start GeM Seller Onboarding</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#gem-phases"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-5 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  View Bidding Steps &darr;
                </a>
              </div>
            </div>

            {/* GeM Live Stats Terminal */}
            <div className="lg:col-span-4 bg-[#0d2033]/90 border border-emerald-800/60 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-emerald-800/50 pb-3">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Public Procurement Hub</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Total Buyer Base:</span>
                  <span className="font-bold text-emerald-300">70,000+ Govt Depts</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Annual Procurement:</span>
                  <span className="font-bold text-amber-300">Rs. 4+ lakh crore</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">MSME Mandate:</span>
                  <span className="font-bold text-emerald-300">25% Minimum Quota</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Payment Security:</span>
                  <span className="font-bold text-emerald-300">PFMS-Backed Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-Step GeM Enablement Sequence */}
      <section id="gem-phases" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              STEP-BY-STEP ONBOARDING
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Fast-Track Path to Government Tender Wins
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Primary & Secondary Registration',
                desc: 'Aadhaar, PAN, GSTIN, MSME Udyam integration, Caution Money deposit, and bank validation.',
              },
              {
                step: '02',
                title: 'OEM Vendor Assessment',
                desc: 'Quality Council of India (QCI) / Rail India Technical (RITES) OEM vendor evaluation support.',
              },
              {
                step: '03',
                title: 'Product & Service Cataloguing',
                desc: 'Technical parameter mapping, compliant brochure uploads, and brand approval authorization.',
              },
              {
                step: '04',
                title: 'L1 Bidding & Tender Strategy',
                desc: 'Live tender filtering, custom bid preparation, technical bid compliance, and invoice processing.',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-[#0c1c2c] rounded-2xl border border-emerald-900/50 p-6 space-y-3 hover:border-emerald-400 transition-all"
              >
                <span className="text-2xl font-black text-emerald-400">{p.step}</span>
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Sell to Central &amp; State Government Buyers</h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
              Get certified, list your product catalogue, and access eligible public sector procurement opportunities on GeM today.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-emerald-950 hover:bg-emerald-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Apply for GeM Support
          </button>
        </div>
      </section>
    </div>
  );
};
