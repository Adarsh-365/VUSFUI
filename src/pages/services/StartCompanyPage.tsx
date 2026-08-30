import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  ShieldCheck,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Landmark,
  Scale,
  Award,
  Zap,
} from 'lucide-react';

interface StartCompanyPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const StartCompanyPage: React.FC<StartCompanyPageProps> = ({ onMemberClick }) => {
  const [selectedEntity, setSelectedEntity] = useState<'pvtltd' | 'llp' | 'section8' | 'msme'>('pvtltd');

  const entityDetails = {
    pvtltd: {
      name: 'Private Limited Company (Pvt Ltd)',
      badge: 'Most Preferred for Funding',
      timeline: '7-10 Working Days',
      benefits: [
        'Limited liability protection for shareholders',
        'Eligible for angel investment & venture capital funding',
        'Separate legal identity with high market credibility',
        '100% DPIIT Startup India 3-year tax holiday eligible',
      ],
      idealFor: 'Tech startups, manufacturing units, scalable high-growth ventures.',
    },
    llp: {
      name: 'Limited Liability Partnership (LLP)',
      badge: 'Low Compliance Capex',
      timeline: '5-7 Working Days',
      benefits: [
        'Partners enjoy limited liability protection',
        'Zero mandatory statutory audit up to 40 Lakhs turnover',
        'No minimum capital contribution mandate',
        'Lower annual compliance maintenance costs',
      ],
      idealFor: 'Consulting firms, service providers, family-owned businesses.',
    },
    section8: {
      name: 'Section 8 Non-Profit Enterprise',
      badge: 'Social Impact & CSR',
      timeline: '10-14 Working Days',
      benefits: [
        'Eligible for 12A & 80G tax exemption certificates',
        'CSR funding & institutional grant eligibility',
        'No stamp duty required on incorporation',
        'National and global non-profit credibility',
      ],
      idealFor: 'Foundations, social enterprises, skill institutes, healthcare trusts.',
    },
    msme: {
      name: 'MSME Udyam & Proprietary Enterprise',
      badge: 'Instant Setup (48 Hours)',
      timeline: '2-3 Working Days',
      benefits: [
        'Direct access to Priority Sector Lending (PSL) credit',
        'Up to 35% margin money subsidy under PMEGP/CMEGP',
        'Collateral-free CGTMSE bank loans up to 5 Crores',
        'Protection against delayed payments under MSMED Act',
      ],
      idealFor: 'Micro factories, local workshops, retail traders, service units.',
    },
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800">
      {/* 1. Founder Launchpad Hero */}
      <section className="relative bg-gradient-to-br from-[#0c1b33] via-[#112240] to-[#1e293b] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-300">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-300">Services</Link>
            <span>/</span>
            <span className="text-amber-400">Start Company</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Rocket className="w-4 h-4 text-orange-400" />
                <span>STARTUP LAUNCHPAD &bull; NAMASTE INDIA DIVISION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Empowering Entrepreneurs: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                  Launch Your Business with Expert Guidance
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                At Namaste India, we specialize in helping entrepreneurs navigate the complexities of starting a business. Our services cover everything from business registration and strategic planning to financial guidance and marketing strategies.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-950/40 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Start Your Incorporation Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#entity-comparison"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-4 rounded-xl border border-white/15 transition-all"
                >
                  Compare Entity Types &darr;
                </a>
              </div>
            </div>

            {/* Fast-Track Launch Metric Card */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-3xl space-y-4 text-white">
              <div className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
                Fast-Track Launch Guarantee
              </div>
              <div className="text-3xl font-black">100% Compliant</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete institutional handholding from Ministry of Corporate Affairs (MCA) name approval to bank account opening, GSTIN, and DPIIT recognition.
              </p>
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-center justify-between text-slate-200">
                  <span>Average Certificate Issuance:</span>
                  <span className="font-bold text-amber-300">5-7 Days</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span>DPIIT Startup Tax Exemption:</span>
                  <span className="font-bold text-amber-300">Section 80-IAC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Value Narrative & Tailored Solutions */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="text-xs font-bold text-[#c2410c] uppercase tracking-widest">
                TAILORED ENTREPRENEURIAL SOLUTIONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Tailored Solutions to Fit Your Unique Business Vision
              </h2>
              <p>
                We understand the challenges of starting a new venture and provide tailored solutions to fit your unique needs. Our experienced team offers expertise in legal compliance, financial forecasting, and operational efficiency, ensuring you have the support needed to succeed.
              </p>
              <p className="font-semibold text-slate-900 text-base">
                With Namaste India you&apos;re not just starting a business; you&apos;re embarking on a journey with a dedicated partner committed to your long-term success. Contact us today to begin your entrepreneurial journey with confidence and clarity. Let&apos;s build your business together.
              </p>
            </div>

            <div className="lg:col-span-4 bg-orange-50/70 border border-orange-200/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#c2410c]" />
                <span>What&apos;s Included in Setup:</span>
              </h3>
              <div className="space-y-2.5 text-xs text-slate-700">
                {[
                  'MCA Digital Signature Certificates (DSC) & DIN',
                  'Company Name Approval via RUN/SPICe+',
                  'MoA and AoA Drafting by Chartered Experts',
                  'PAN, TAN, EPFO, ESIC & Professional Tax',
                  'Zero-Balance Corporate Bank Account Opening',
                  'MSME Udyam Certificate & DPIIT Recognition',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Entity Chooser */}
      <section id="entity-comparison" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Choose the Right Business Structure
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Select an entity type to view registration timeline, statutory benefits, and suitability.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'pvtltd', label: 'Pvt Ltd Company' },
              { id: 'llp', label: 'LLP Partnership' },
              { id: 'section8', label: 'Section 8 Non-Profit' },
              { id: 'msme', label: 'MSME Proprietary' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedEntity(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedEntity === tab.id
                    ? 'bg-[#c2410c] text-white shadow-md'
                    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Entity Showcase Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {entityDetails[selectedEntity].name}
                </h3>
                <span className="text-xs font-bold text-[#c2410c] bg-orange-100 px-3 py-1 rounded-full inline-block mt-1">
                  {entityDetails[selectedEntity].badge}
                </span>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-slate-400 font-semibold">Standard Timeline:</div>
                <div className="text-base font-bold text-slate-900">
                  {entityDetails[selectedEntity].timeline}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Strategic Benefits:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {entityDetails[selectedEntity].benefits.map((b, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-orange-50/50 rounded-xl border border-orange-200/60 text-xs text-slate-700">
                <span className="font-bold text-slate-900">Recommended for: </span>
                {entityDetails[selectedEntity].idealFor}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onMemberClick('become')}
                className="w-full sm:w-auto bg-[#0c1b33] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                Incorporate {entityDetails[selectedEntity].name} Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#0c1b33] to-[#1e293b] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Build Your Business with Namaste India &amp; VUSF</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              From registration and tax filings to market entry and funding, partner with dedicated experts committed to your growth.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Launch Your Company Today
          </button>
        </div>
      </section>
    </div>
  );
};
