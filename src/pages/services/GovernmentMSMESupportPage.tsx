import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Zap,
  Calculator,
  Users,
} from 'lucide-react';

interface GovernmentMSMESupportPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const GovernmentMSMESupportPage: React.FC<GovernmentMSMESupportPageProps> = ({
  onMemberClick,
}) => {
  const [sectorType, setSectorType] = useState<'manufacturing' | 'service'>('manufacturing');
  const [category, setCategory] = useState<'general' | 'special'>('special');

  const subsidyPercentage = category === 'special' ? '35%' : '25%';
  const maxProject = sectorType === 'manufacturing' ? '50 Lakhs' : '20 Lakhs';
  const ownContribution = category === 'special' ? '5%' : '10%';

  return (
    <div className="min-h-screen bg-[#fcfdfa] text-slate-800 selection:bg-emerald-500 selection:text-white">
      {/* 1. Sovereign Subsidy Hero */}
      <section className="relative bg-gradient-to-br from-[#091b15] via-[#0d2a20] to-[#12382c] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-300">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-300">Services</Link>
            <span>/</span>
            <span className="text-emerald-400">Government &amp; MSME Support</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>PMEGP &bull; CMEGP &bull; CGTMSE &bull; 15% TO 35% CAPITAL SUBSIDIES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Government &amp; MSME Support: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
                  Comprehensive Assistance &amp; Subsidies
                </span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                The government&apos;s MSME (Micro, Small, and Medium Enterprises) support service aims to bolster small businesses through comprehensive assistance programs including financial aid, capacity building, and market access.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Apply for MSME Subsidy Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#subsidy-calc"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-4 rounded-xl border border-white/15 transition-all flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Subsidy Calculator &darr;</span>
                </a>
              </div>
            </div>

            {/* Scheme Guarantee Card */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                Subsidy Scheme Portfolio
              </span>
              <div className="text-3xl font-black text-white">Up to 35% Subsidy</div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Special concessions for Women, SC/ST, Ex-Servicemen, and Rural Founders under Prime Minister (PMEGP) and Chief Minister (CMEGP) schemes.
              </p>
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex justify-between text-slate-200">
                  <span>Manufacturing Ceiling:</span>
                  <span className="font-bold text-amber-300">Rs. 50 Lakhs</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>Service Unit Ceiling:</span>
                  <span className="font-bold text-amber-300">Rs. 20 Lakhs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Government Mandate Narrative */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-emerald-200/80 shadow-md p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              MISSION OBJECTIVE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Creating a Conducive Environment for MSMEs to Thrive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              These initiatives typically include financial aid, such as loans and grants, tailored to the needs of MSMEs. Additionally, the government provides advisory services, capacity building programs, and facilitates access to markets and technology.
            </p>
            <p>
              The objective is to enhance competitiveness, promote entrepreneurship, and foster sustainable growth within the MSME sector. By addressing challenges like access to finance and market linkages, these services strive to create a conducive environment for MSMEs to thrive, thereby contributing significantly to economic development and job creation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Subsidy Calculator Visual Card */}
      <section id="subsidy-calc" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              PMEGP / CMEGP Subsidy Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select your enterprise parameters to calculate your capital margin money subsidy entitlement.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Sector Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-600">Enterprise Sector:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSectorType('manufacturing')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      sectorType === 'manufacturing'
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Manufacturing (Up to 50L)
                  </button>
                  <button
                    onClick={() => setSectorType('service')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      sectorType === 'service'
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Service Sector (Up to 20L)
                  </button>
                </div>
              </div>

              {/* Founder Category */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-600">Beneficiary Category:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCategory('special')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      category === 'special'
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Special (Women/SC/ST/Rural)
                  </button>
                  <button
                    onClick={() => setCategory('general')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      category === 'general'
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    General (Urban Male)
                  </button>
                </div>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Government Subsidy</div>
                  <div className="text-3xl font-black text-emerald-700">{subsidyPercentage}</div>
                  <div className="text-[11px] text-slate-600">Direct Non-Repayable Grant</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Max Project Cost</div>
                  <div className="text-3xl font-black text-slate-900">Rs. {maxProject}</div>
                  <div className="text-[11px] text-slate-600">Bank Loan + Subsidy</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Own Contribution</div>
                  <div className="text-3xl font-black text-[#c2410c]">{ownContribution}</div>
                  <div className="text-[11px] text-slate-600">Minimal Founder Margin</div>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-slate-600">
                  VUSF prepares bank-ready DPR project reports and handholds through bank approval.
                </span>
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  Sanction My Subsidy DPR &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-800 to-[#0c1b33] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Unlock Government Schemes for Your Enterprise</h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
              From PMEGP margin money grants to CGTMSE collateral-free loans, our advisory cell guides you through each sanction.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-emerald-900 hover:bg-emerald-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Apply for MSME Subsidy
          </button>
        </div>
      </section>
    </div>
  );
};
