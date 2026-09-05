import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Zap,
  Users,
  Award,
  FileCheck2,
  DollarSign,
  Briefcase,
  Boxes,
  HelpCircle,
  Clock,
  Layers,
  ChevronRight,
  Target,
  FileText,
  BadgePercent,
  Sliders,
  Scale,
} from 'lucide-react';

interface StartupPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const StartupPage: React.FC<StartupPageProps> = ({ onMemberClick }) => {
  const [activeTab, setActiveTab] = useState<'dpiit' | 'grants' | 'investors' | 'sandbox'>('dpiit');
  const [startupStage, setStartupStage] = useState<'idea' | 'prototype' | 'revenue' | 'scaling'>('prototype');

  return (
    <div className="min-h-screen bg-[#070e1b] text-slate-100 selection:bg-orange-500 selection:text-white font-sans">
      {/* 1. Startup Acceleration Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-orange-950/60">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-orange-400">Startup Support</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Rocket className="w-4 h-4 text-orange-400" />
                <span>STARTUP INDIA &bull; DPIIT RECOGNITION &bull; SEED GRANTS &bull; REGULATORY SANDBOX</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Startup Acceleration: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300">
                  DPIIT Benefits, Grant Funding, Investors &amp; Sandbox Support
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Empowering innovative startups from ideation to unicorn status. We provide complete handholding for Startup India DPIIT recognition, Section 80-IAC income tax holiday (subject to eligibility), non-dilutive government seed grants up to ₹50 lakh, curated angel/VC investor matchmaking, and regulatory sandbox authorisation.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-950/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Register &amp; Scale Your Startup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#startup-pillars"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Explore 4 Core Pillars &darr;</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="lg:col-span-4 bg-[#0e1c2e]/95 border-2 border-orange-500/40 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-orange-300 uppercase tracking-widest">Startup Acceleration Track</span>
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-ping" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">DPIIT Approval Timeline:</span>
                  <span className="font-bold text-emerald-400">48 to 72 Hours</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Sec. 80-IAC Tax Exemption:</span>
                  <span className="font-bold text-amber-300">Up to 3 Yrs Tax Holiday (Eligible Startups)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Non-Dilutive Seed Grants:</span>
                  <span className="font-bold text-cyan-300">Up to ₹50 lakh (SISFS/BIG)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Sandbox Ecosystem:</span>
                  <span className="font-bold text-purple-300">RBI, SEBI &amp; IRDAI Live Trials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive 4-Pillar Tabs Navigation */}
      <section id="startup-pillars" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center justify-center gap-3 bg-[#0a1526] p-2.5 rounded-2xl border border-slate-800">
          {[
            { id: 'dpiit', label: '1. Startup India & DPIIT Benefits', icon: Award, color: 'text-orange-400' },
            { id: 'grants', label: '2. Grant & Seed Funding Support', icon: DollarSign, color: 'text-emerald-400' },
            { id: 'investors', label: '3. Connect with Investors & VCs', icon: Users, color: 'text-cyan-400' },
            { id: 'sandbox', label: '4. Regulatory Sandbox Testing', icon: Scale, color: 'text-purple-400' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-950/60 scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Pillar 1 Content: Register Company to Startup India & Get Benefits */}
      {activeTab === 'dpiit' && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <div className="bg-[#0b182b] rounded-3xl border-2 border-orange-500/40 p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>DPIIT RECOGNITION &amp; SOVEREIGN PRIVILEGES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Register Your Company with Startup India &amp; Unlock Sovereign Benefits
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Startup India is a flagship initiative of the Government of India designed to build a strong ecosystem for nurturing innovation, startups, and driving sustainable economic growth. VUSF facilitates end-to-end registration, pitch-deck compliance, and DPIIT recognition within 48–72 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Section 80-IAC Tax Holiday',
                  badge: 'Eligible Tax Holiday',
                  desc: 'DPIIT-recognised startups may apply for income tax exemption on profits for 3 consecutive financial years out of the first 10 years from incorporation, subject to Section 80-IAC eligibility criteria.',
                  tag: 'Tax Incentive',
                },
                {
                  title: 'Section 56(2)(viib) Angel Tax Relief',
                  badge: 'Angel Tax Exemption',
                  desc: 'Total exemption from tax on investments received above Fair Market Value (FMV) from resident investors, angel funds, and family offices under DPIIT notification.',
                  tag: 'Fundraise Protection',
                },
                {
                  title: '80% Patent & 50% Trademark Rebate',
                  badge: 'Fast-Track IPR',
                  desc: 'Government provides 80% fee rebate on patent applications and 50% rebate on trademark filings, paired with expedited examination by the Indian Patent Office.',
                  tag: 'Intellectual Property',
                },
                {
                  title: 'Self-Certification Compliance',
                  badge: 'Zero Routine Inspection',
                  desc: 'Startups can self-certify compliance under 6 central Labour Laws and 3 Environmental Laws with zero physical inspections for the first 3 to 5 years.',
                  tag: 'Frictionless Ops',
                },
                {
                  title: 'Relaxed Public Procurement (GeM)',
                  badge: 'Govt Tenders Priority',
                  desc: 'Exemption from mandatory criteria of "prior turnover" and "prior experience" in all government and PSU tenders, plus Earnest Money Deposit (EMD) waiver.',
                  tag: 'Public Procurement',
                },
                {
                  title: 'Fast-Track 90-Day Winding Up',
                  badge: 'IBC Exit Protection',
                  desc: 'In case of business restructuring or winding up, startups with simple debt structures can be dissolved within 90 days under the Insolvency and Bankruptcy Code (IBC).',
                  tag: 'Easy Exit Protocol',
                },
              ].map((b, idx) => (
                <div
                  key={idx}
                  className="bg-[#0e1f36] rounded-2xl p-6 border border-slate-800 hover:border-orange-500/60 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="bg-orange-500/15 border border-orange-400/30 text-orange-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
                        {b.badge}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase">{b.tag}</span>
                    </div>
                    <h3 className="text-base font-bold text-white">{b.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#081322] p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-white">Need DPIIT Recognition for your Private Limited or LLP?</h4>
                <p className="text-xs text-slate-400">Our corporate team drafts your innovation brief, registers DPIIT, and files Section 80-IAC.</p>
              </div>
              <button
                onClick={() => onMemberClick('become')}
                className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              >
                Apply for DPIIT Recognition
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 4. Pillar 2 Content: Support to Supply & Secure Grand Funding */}
      {activeTab === 'grants' && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <div className="bg-[#091b29] rounded-3xl border-2 border-emerald-500/40 p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5" />
                <span>NON-DILUTIVE SEED CAPITAL &amp; CENTRAL GRANTS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Grant Funding &amp; Non-Dilutive Government Capital
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Securing non-dilutive government grants enables founders to build prototypes, validate market fit, and scale operations without giving up precious equity. VUSF provides end-to-end proposal drafting, incubator liaison, and jury pitch coaching.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  scheme: 'Startup India Seed Fund Scheme (SISFS)',
                  funding: 'Up to ₹20L Grant + ₹50L Debt/CCD',
                  eligibility: 'DPIIT recognized, incorporated < 2 years, business idea with market viability',
                  coverage: 'POC validation, prototype trials, market entry & commercialization via approved incubators.',
                  tag: 'Central Govt Flagship',
                },
                {
                  scheme: 'BIRAC BIG (Biotechnology Ignition Grant)',
                  funding: 'Up to ₹50 lakh Non-Dilutive Grant',
                  eligibility: 'Biotech, MedTech, Diagnostics, AgroTech & Healthcare innovators',
                  coverage: '18-month product discovery, clinical validation, and laboratory prototype development.',
                  tag: 'Department of Biotechnology',
                },
                {
                  scheme: 'MeitY TIDE 2.0 & SAMRIDH Scheme',
                  funding: '₹7L (EiR) to ₹30L Grant Support',
                  eligibility: 'Emerging tech startups working in AI, IoT, Robotics, SaaS & Blockchain',
                  coverage: 'Deeptech R&D, productization, testing, and accelerator co-investment funding.',
                  tag: 'Ministry of Electronics & IT',
                },
                {
                  scheme: 'State Government Seed Funds (MSInS / Elevate)',
                  funding: '₹10L to ₹50L Seed Grants',
                  eligibility: 'Early-stage state-registered startups (Maharashtra, Karnataka, Gujarat, etc.)',
                  coverage: 'Commercialization subsidy, patent cost reimbursement, and incubator seed capital.',
                  tag: 'State Startup Policies',
                },
              ].map((g, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b2438] rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4 hover:border-emerald-500/60 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">{g.tag}</span>
                      <span className="bg-emerald-500/20 text-emerald-300 font-extrabold text-xs px-3 py-1 rounded-full border border-emerald-400/30">
                        {g.funding}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white">{g.scheme}</h3>
                    <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                      <div>
                        <span className="text-emerald-400 font-semibold">Eligibility: </span>
                        <span className="text-slate-300">{g.eligibility}</span>
                      </div>
                      <div>
                        <span className="text-amber-400 font-semibold">Scope: </span>
                        <span className="text-slate-300">{g.coverage}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onMemberClick('become')}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Check Eligibility &amp; Apply for Grant</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Pillar 3 Content: Connect with Investors & VCs */}
      {activeTab === 'investors' && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <div className="bg-[#0c1a2e] rounded-3xl border-2 border-cyan-500/40 p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>VENTURE CAPITAL &bull; ANGEL NETWORKS &bull; SYNDICATES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Connect with Active Angel Investors &amp; Venture Capital Funds
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Bridging visionary founders with accredited institutional capital. VUSF structures your investment thesis, builds robust valuation models, and arranges direct 1-on-1 pitch sessions with active Angel Networks, Micro-VCs, and Family Offices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01. Investor Readiness Audit',
                  desc: 'Comprehensive review of your financial model, Unit Economics (CAC, LTV, Burn Rate), Cap Table hygiene, and competitive defensibility moat.',
                  icon: FileCheck2,
                },
                {
                  step: '02. Pitch Deck & Deal Teaser',
                  desc: 'Institutional-grade 12-slide pitch deck creation, financial projection modeling, and video teaser tailored for high-conviction partners.',
                  icon: Briefcase,
                },
                {
                  step: '03. Curated Matchmaking',
                  desc: 'Direct warm introductions to 500+ angel investors (IAN, Mumbai Angels, Venture Catalysts) and early-stage VC funds suited to your sector.',
                  icon: Users,
                },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="bg-[#0f223a] rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{s.step}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{s.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#081525] p-6 sm:p-8 rounded-2xl border border-slate-800 text-center space-y-4">
              <h3 className="text-xl font-extrabold text-white">Ready to Raise Your Pre-Seed, Seed or Pre-Series A Round?</h3>
              <p className="text-xs text-slate-400 max-w-2xl mx-auto">
                Submit your pitch deck to our Investment Committee for evaluation and direct angel syndication.
              </p>
              <button
                onClick={() => onMemberClick('become')}
                className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Submit Pitch Deck for Investor Review
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 6. Pillar 4 Content: Regulatory Sandbox Support */}
      {activeTab === 'sandbox' && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
          <div className="bg-[#121226] rounded-3xl border-2 border-purple-500/40 p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5" />
                <span>CONTROLLED INNOVATION TESTING &bull; REGULATORY COMPLIANCE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Regulatory Sandbox Support: Live Innovation Testing
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                A regulatory sandbox allows startups to live-test innovative products, payment mechanisms, wealth algorithms, or insurance models with real customers in a controlled environment with specific regulatory relaxations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  regulator: 'RBI Regulatory Sandbox',
                  focus: 'FinTech, Payments & Lending',
                  desc: 'Testing innovative cross-border remittances, contactless payments, MSME digital credit scoring, tokenization, and offline digital currency trials.',
                  cohorts: 'Cross Border Payments &bull; Digital Lending &bull; MSME Credit',
                },
                {
                  regulator: 'SEBI Innovation & Regulatory Sandbox',
                  focus: 'Capital Markets & WealthTech',
                  desc: 'Testing algorithmic advisory, tokenized secondary markets, automated compliance systems, and robo-advisory platforms using live market feeds.',
                  cohorts: 'WealthTech &bull; KYC Automation &bull; Market Analytics',
                },
                {
                  regulator: 'IRDAI InsurTech Sandbox',
                  focus: 'Insurance & Claims Innovation',
                  desc: 'Testing usage-based insurance (UBI), micro-insurance distribution models, automated health underwriting, and parametric weather insurance.',
                  cohorts: 'Micro-Insurance &bull; HealthTech Underwriting &bull; Telematics',
                },
              ].map((box, idx) => (
                <div
                  key={idx}
                  className="bg-[#191932] rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4 hover:border-purple-500/60 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-md border border-purple-400/30">
                      {box.focus}
                    </span>
                    <h3 className="text-lg font-bold text-white">{box.regulator}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{box.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800 text-[11px] text-purple-300">
                    <span className="text-slate-400">Core Themes: </span>
                    <span dangerouslySetInnerHTML={{ __html: box.cohorts }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#15152a] p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-white">Applying for an upcoming Sandbox Cohort?</h4>
                <p className="text-xs text-slate-400">VUSF drafts your test boundary conditions, risk mitigation framework, and consumer protection protocols.</p>
              </div>
              <button
                onClick={() => onMemberClick('become')}
                className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              >
                Get Sandbox Advisory Support
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 7. Bottom Comprehensive CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-700 via-amber-700 to-orange-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Turn Your Startup Idea into an Industry Leader</h3>
            <p className="text-xs sm:text-sm text-orange-100 max-w-2xl font-light">
              Join VUSF Startup Accelerator to access DPIIT recognition, apply for ₹50L+ non-dilutive seed grants, pitch to active VCs, and enter regulatory sandboxes.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-orange-950 hover:bg-orange-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Connect with Startup Advisory Cell
          </button>
        </div>
      </section>
    </div>
  );
};
