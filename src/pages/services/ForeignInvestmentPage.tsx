import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Landmark,
  Globe2,
  Scale,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck,
  Sparkles,
  DollarSign,
  Briefcase,
  Layers,
  Award,
  Factory,
  Percent,
  Compass,
} from 'lucide-react';

interface ForeignInvestmentPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const ForeignInvestmentPage: React.FC<ForeignInvestmentPageProps> = ({
  onMemberClick,
}) => {
  return (
    <div className="min-h-screen bg-[#07111c] text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* 1. FDI Macro Capital Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-emerald-950/60">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-emerald-400">Foreign Investment &amp; Start Business in India</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Landmark className="w-4 h-4 text-emerald-400" />
                <span>CROSS-BORDER CAPITAL &bull; START BUSINESS IN INDIA &bull; 100% FDI CORRIDORS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Foreign Direct Investment (FDI) &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                  Starting a Business in India
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                India is one of the world&apos;s fastest-growing major economies, backed by robust macroeconomic fundamentals, favorable demographic dividends, and world-class digital and industrial infrastructure. Discover seamless legal routes, 100% automatic FDI pathways, lucrative production-linked incentives (PLI), and turnkey incorporation handholding for global corporations, NRIs, and institutional investors.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Consult FDI Advisory Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#start-business-india"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>Start Business in India &darr;</span>
                </a>
              </div>
            </div>

            {/* FDI Impact Indicators Card */}
            <div className="lg:col-span-4 bg-[#0e1d2e]/90 border-2 border-emerald-500/40 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">India FDI Key Metrics</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Automatic Approval Route:</span>
                  <span className="font-bold text-emerald-300">Up to 100% in most sectors</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">New Mfg. Corporate Tax:</span>
                  <span className="font-bold text-amber-300">Competitive 15% Base Rate</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">RBI Regulatory Reporting:</span>
                  <span className="font-bold text-emerald-300">FC-GPR / FIRMS Compliant</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">DTAA Double Tax Treaties:</span>
                  <span className="font-bold text-emerald-300">85+ Partner Nations</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Repatriation Freedom:</span>
                  <span className="font-bold text-teal-300">100% Profit &amp; Dividend Outflow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Starting Business in India Section */}
      <section id="start-business-india" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>GLOBAL INVESTOR ONBOARDING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Starting a Business in India: Entry Strategies
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Comprehensive legal structures enabling multinational corporations, NRI entrepreneurs, and foreign enterprises to establish a dominant commercial presence in India.
          </p>
        </div>

        {/* Detailed Narrative Paragraphs */}
        <div className="bg-[#0c1a2c] rounded-3xl border border-emerald-900/50 p-8 sm:p-12 mb-12 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            India has transformed into the premier global destination for cross-border investments and industrial manufacturing. With a dynamic market of over 1.4 billion consumers, a rapidly expanding middle class, and a digitized regulatory framework, establishing a corporate footprint in India gives international companies unprecedented access to domestic scale and worldwide export corridors.
          </p>
          <p>
            Under the Government of India&apos;s flagship initiatives including <strong>Make in India</strong>, <strong>Digital India</strong>, and the <strong>National Single Window System (NSWS)</strong>, the statutory incorporation process has been streamlined into a unified digital procedure. Foreign entities can rapidly register their business, obtain Director Identification Numbers (DIN), Digital Signature Certificates (DSC), Permanent Account Numbers (PAN), Tax Deduction Account Numbers (TAN), and Goods and Services Tax (GST) registrations via the unified <strong>SPICe+</strong> portal.
          </p>
          <p>
            Vishwa Udyam Sahayta Foundation (VUSF) and Namaste India Group provide end-to-end advisory and liaison support for foreign entrants—from selecting the ideal corporate entity structure and scouting industrial land across Maharashtra (MIDC) and national corridors, to executing Reserve Bank of India (RBI) FIRMS reporting (FC-GPR and FC-TRS) and structuring Double Taxation Avoidance Agreement (DTAA) tax-shielded capital flows.
          </p>
        </div>

        {/* 4 Corporate Incorporation Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0f1d30] rounded-2xl border border-emerald-900/40 p-6 space-y-4 hover:border-emerald-500/70 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Wholly Owned Subsidiary (WOS)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                100% foreign equity ownership as an independent Private Limited Company. The preferred route for multinational enterprises looking for full operational autonomy and limited liability.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/40">
              Automatic Route &bull; 100% Equity Permitted
            </div>
          </div>

          <div className="bg-[#0f1d30] rounded-2xl border border-teal-900/40 p-6 space-y-4 hover:border-teal-500/70 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Limited Liability Partnership (LLP)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Combines corporate limited liability with partnership tax flexibility. Ideal for professional services, consulting firms, and technology ventures with 100% FDI allowed under automatic route.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-teal-300 bg-teal-950/60 p-2.5 rounded-lg border border-teal-800/40">
              Low Compliance &bull; Pass-Through Taxation
            </div>
          </div>

          <div className="bg-[#0f1d30] rounded-2xl border border-cyan-900/40 p-6 space-y-4 hover:border-cyan-500/70 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Bilateral Joint Venture (JV)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strategic equity partnership with established Indian MSMEs and manufacturers. Enables immediate access to local supply chains, manufacturing plants, regulatory approvals, and distribution networks.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/60 p-2.5 rounded-lg border border-cyan-800/40">
              Shared Risk &bull; Instant Market Distribution
            </div>
          </div>

          <div className="bg-[#0f1d30] rounded-2xl border border-amber-900/40 p-6 space-y-4 hover:border-amber-500/70 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Branch / Liaison / Project Office</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Representative presence for overseas parent entities to conduct market research, coordinate liaison work, or execute specific infrastructure and government EPC project contracts.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-amber-300 bg-amber-950/60 p-2.5 rounded-lg border border-amber-800/40">
              RBI Approval &bull; Project-Specific Execution
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits of FDI in India Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MACROECONOMIC &amp; FISCAL ADVANTAGES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Key Benefits of Foreign Direct Investment (FDI) in India
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Why India remains the world&apos;s most lucrative capital destination across manufacturing, digital services, and industrial infrastructure.
          </p>
        </div>

        {/* In-depth Benefits Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#0e1d2e] rounded-3xl border border-emerald-800/40 p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Percent className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">100% Automatic Route &amp; Liberal Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Over 90% of industrial sectors in India allow 100% foreign direct investment through the Automatic Route without requiring prior government or RBI approval. Foreign investors retain total control over equity, managerial decision-making, intellectual property, and strategic roadmap.
            </p>
          </div>

          <div className="bg-[#0e1d2e] rounded-3xl border border-teal-800/40 p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Production Linked Incentive (PLI) Schemes</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The Indian Government has committed over $26 Billion in PLI incentives across 14 core manufacturing sectors—including electronics, solar modules, pharmaceutical APIs, medical devices, automotive components, and advanced chemistry cell batteries—subsidizing incremental production output.
            </p>
          </div>

          <div className="bg-[#0e1d2e] rounded-3xl border border-cyan-800/40 p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Unrestricted Repatriation &amp; DTAA Protection</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Profits, dividends, royalties, and capital gains can be freely repatriated net of taxes under FEMA guidelines. India&apos;s network of Double Taxation Avoidance Agreements (DTAA) with 85+ countries guarantees that foreign investors are protected from double taxation on international income flows.
            </p>
          </div>
        </div>

        {/* 6 Structured Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Massive & Growing Consumer Base',
              desc: 'Direct access to 1.4B+ citizens with rising disposable incomes, urban consumption hubs, and the world’s 3rd largest domestic purchasing power parity (PPP).',
              icon: Globe2,
            },
            {
              title: 'Cost-Effective Skilled Engineering Talent',
              desc: 'A massive pool of English-fluent engineers, digital developers, data scientists, and operational managers at competitive wage levels.',
              icon: Sparkles,
            },
            {
              title: 'Competitive 15% Corporate Tax Regime',
              desc: 'Concessional base corporate income tax rate of 15% for new manufacturing enterprises, positioning India as one of Asia’s most tax-competitive hubs.',
              icon: Percent,
            },
            {
              title: 'Rapid Infrastructure & Dedicated Corridors',
              desc: 'Dedicated Freight Corridors (DFC), Sagarmala port modernization, Bharatmala expressways, and mega industrial smart cities reducing transit lead times.',
              icon: Factory,
            },
            {
              title: 'Robust Legal & IPR Protection Framework',
              desc: 'Common law legal system, institutional arbitration mechanisms, strict trademark and patent protection aligned with international WIPO standards.',
              icon: ShieldCheck,
            },
            {
              title: 'Export Gateway to Middle East, ASEAN & Africa',
              desc: 'Strategic maritime positioning enabling duty-efficient exports to GCC, Southeast Asia, Central Asia, and Africa under Bilateral Free Trade Agreements.',
              icon: Landmark,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0c1a2c] p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-emerald-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FDI Structuring & Single-Window Handholding Pillars */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
            COMPLETE HANDHOLDING BLUEPRINT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            VUSF &amp; Namaste India FDI Single-Window Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From preliminary feasibility and state government subsidy negotiation to statutory ROC and RBI FIRMS reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0f1d30] rounded-2xl border border-emerald-900/40 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">FEMA &amp; RBI FIRMS Reporting</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Structuring inbound foreign capital through automatic vs government approval routes, ensuring seamless FC-GPR / FC-TRS filings within 30 days.
            </p>
          </div>

          <div className="bg-[#0f1d30] rounded-2xl border border-teal-900/40 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Industrial Land &amp; Cluster Scouting</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Assisting overseas corporations in procuring pre-approved industrial plots, MIDC clearances, power/water connectivity, and environmental consents.
            </p>
          </div>

          <div className="bg-[#0f1d30] rounded-2xl border border-cyan-900/40 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Due Diligence &amp; JV Negotiation</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Certified enterprise valuation (DCF/NAV method), background investigations, bilingual shareholder agreements, and contract escrow mechanisms.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Ready to Invest or Start a Business in India?</h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl font-light">
              Connect with our foreign investment directors for personalized consultation on corporate structuring, 100% FDI routes, state subsidies, and RBI compliance.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-emerald-950 hover:bg-emerald-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Inquire with FDI Advisory Desk
          </button>
        </div>
      </section>
    </div>
  );
};
