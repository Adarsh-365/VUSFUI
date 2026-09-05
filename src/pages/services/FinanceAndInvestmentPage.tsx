import React from 'react';
import { Link } from 'react-router-dom';
import {
  Landmark,
  TrendingUp,
  ShieldCheck,
  Building2,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  PieChart,
  Wallet,
  Sparkles,
  Award,
  DollarSign,
  Percent,
  Calculator,
  HandCoins,
  Coins,
  FileText,
  BadgeCheck,
} from 'lucide-react';

interface FinanceAndInvestmentPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const FinanceAndInvestmentPage: React.FC<FinanceAndInvestmentPageProps> = ({
  onMemberClick,
}) => {
  return (
    <div className="min-h-screen bg-[#071322] text-slate-100 selection:bg-blue-500 selection:text-white font-sans">
      {/* 1. FinTech Treasury Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-blue-950/60">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-blue-400">Finance &amp; Investment</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Landmark className="w-4 h-4 text-blue-400" />
                <span>CAPITAL SYNDICATION &bull; GOVERNMENT SUBSIDIES &bull; BANK CREDIT LINKAGES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Finance &amp; Investment: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  Government Subsidies, Capital Syndication &amp; Asset Growth
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Accelerating business growth through bank-ready project reports (DPR), Central and State government capital subsidies, collateral-free credit schemes (CGTMSE / Mudra / Stand-Up India), and institutional debt syndication for MSMEs, manufacturers, and startup innovators.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-950/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Apply for Subsidy &amp; Loan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#gov-support-schemes"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <HandCoins className="w-4 h-4 text-amber-400" />
                  <span>Government Subsidies &amp; Support &darr;</span>
                </a>
              </div>
            </div>

            {/* Treasury Metric Card */}
            <div className="lg:col-span-4 bg-[#0d1d33]/90 border-2 border-blue-500/40 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Credit &amp; Subsidy Matrix</span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">PMEGP / CMEGP Subsidy:</span>
                  <span className="font-bold text-amber-300">Up to 35% Capital Subsidy</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">CGTMSE Collateral-Free:</span>
            <span className="font-bold text-blue-300">Up to ₹5 crore</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Term Loans &amp; Project Debt:</span>
                  <span className="font-bold text-emerald-300">Up to ₹25 crore</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">DPR &amp; CMA Modeling:</span>
                  <span className="font-bold text-cyan-300">Bank-Ready Preparation</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">State Industrial Policy (PSI):</span>
                  <span className="font-bold text-blue-300">Interest &amp; Stamp Duty Rebates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Government Financial Support & Subsidy Schemes Section (Detailed Paragraphs) */}
      <section id="gov-support-schemes" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>CENTRAL &amp; STATE GOVERNMENT SUBSIDIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Government Financial Support &amp; MSME Subsidies
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Maximizing capital subsidies, margin money grants, and interest subvention for new manufacturing setups and enterprise expansion.
          </p>
        </div>

        {/* Detailed Comprehensive Paragraphs */}
        <div className="bg-[#0b192c] rounded-3xl border border-blue-900/50 p-8 sm:p-12 mb-12 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            The Government of India, alongside state governments like Maharashtra, has formulated powerful financial support frameworks to empower micro, small, and medium enterprises (MSMEs), startup innovators, and women entrepreneurs. These flagship subsidy programs are engineered to lower capital acquisition barriers, reduce commercial borrowing costs, and provide substantial capital grants on plant, machinery, and industrial infrastructure.
          </p>
          <p>
            Flagship national schemes such as the <strong>Prime Minister&apos;s Employment Generation Programme (PMEGP)</strong> offer capital subsidies ranging from <strong>15% to 35%</strong> of the total project cost (up to ₹50 lakh for manufacturing units and ₹20 lakh for service enterprises). Similarly, the <strong>Chief Minister Employment Generation Programme (CMEGP)</strong> provides targeted state subsidies for setting up micro-industrial units with fast-tracked bank credit linkages.
          </p>
          <p>
            For expanding enterprises seeking debt without mortgaging personal real estate, the <strong>Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)</strong> enables collateral-free bank credit up to <strong>₹5 crore</strong> with a sovereign credit guarantee of 75% to 85%. Additionally, schemes like <strong>Stand-Up India</strong> (₹10 lakh to ₹1 crore for SC/ST and Women entrepreneurs) and <strong>MUDRA Yojana</strong> (up to ₹20 lakh) ensure robust grassroots financial inclusion.
          </p>
          <p>
            Under state industrial policies such as the <strong>Package Scheme of Incentives (PSI)</strong> in Maharashtra, eligible MSMEs receive up to <strong>5% interest subsidies</strong>, electricity duty exemptions, stamp duty waivers, and 100% SGST refunds, dramatically improving internal rate of return (IRR) and operational cash flows.
          </p>
        </div>

        {/* 6 Key Government Subsidy Schemes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0d1e34] rounded-2xl border border-blue-900/50 p-6 space-y-4 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-amber-400/30">
                  UP TO 35% SUBSIDY
                </span>
                <Landmark className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white">PMEGP Capital Subsidy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Central government credit-linked capital subsidy for establishing new manufacturing units (up to ₹50 lakh) and service ventures (up to ₹20 lakh) with 15%–35% margin money grant.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-amber-200 bg-amber-950/50 p-2.5 rounded-xl border border-amber-800/40">
              KVIC / KVIB / DIC Single-Window Clearance
            </div>
          </div>

          <div className="bg-[#0d1e34] rounded-2xl border border-blue-900/50 p-6 space-y-4 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-emerald-400/30">
                  STATE CAPITAL GRANT
                </span>
                <Coins className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">CMEGP State Subsidy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Maharashtra State flagship subsidy initiative offering up to ₹50 lakh project funding with 15%–35% direct government grant for youth, women, and SC/ST industrial innovators.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-emerald-200 bg-emerald-950/50 p-2.5 rounded-xl border border-emerald-800/40">
              Fast-Track District Industries Centre (DIC) Linkage
            </div>
          </div>

          <div className="bg-[#0d1e34] rounded-2xl border border-blue-900/50 p-6 space-y-4 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-blue-400/30">
                  NO COLLATERAL
                </span>
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">CGTMSE Collateral-Free Loans</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bank loans up to ₹5 crore without third-party guarantee or property hypothecation, backed by 75% to 85% credit guarantee from the Ministry of MSME and SIDBI.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-blue-200 bg-blue-950/50 p-2.5 rounded-xl border border-blue-800/40">
              Term Loan &amp; Working Capital (CC/OD) Covered
            </div>
          </div>

          <div className="bg-[#0d1e34] rounded-2xl border border-blue-900/50 p-6 space-y-4 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-rose-500/20 text-rose-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-rose-400/30">
                  WOMEN &amp; SC/ST FOCUS
                </span>
                <Sparkles className="w-5 h-5 text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Stand-Up India Scheme</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bank credit between ₹10 lakh and ₹1 crore for SC/ST and Women entrepreneurs to establish greenfield manufacturing, service, or trading enterprises.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-rose-200 bg-rose-950/50 p-2.5 rounded-xl border border-rose-800/40">
              Low Margin Money &amp; Extended Repayment Period
            </div>
          </div>

          <div className="bg-[#0d1e34] rounded-2xl border border-blue-900/50 p-6 space-y-4 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-cyan-400/30">
                  FISCAL INCENTIVES
                </span>
                <Percent className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">State Industrial Policy (PSI)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Up to 5% interest subvention on term loans, 100% stamp duty exemption, electricity duty waivers for 7-10 years, and SGST reimbursement on capital expansion.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-cyan-200 bg-cyan-950/50 p-2.5 rounded-xl border border-cyan-800/40">
              Direct Subsidy Disbursement from Directorate of Industries
            </div>
          </div>

          <div className="bg-[#0d1e34] rounded-2xl border border-blue-900/50 p-6 space-y-4 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-indigo-400/30">
                  MICRO FINANCE
                </span>
                <Wallet className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Pradhan Mantri MUDRA Yojana</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Collateral-free micro loans up to ₹20 lakh categorised under Shishu (up to ₹50k), Kishore (up to ₹5L), and Tarun (up to ₹20L) for working capital and equipment.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-indigo-200 bg-indigo-950/50 p-2.5 rounded-xl border border-indigo-800/40">
              Instant Processing through Scheduled Commercial Banks
            </div>
          </div>
        </div>
      </section>

      {/* 3. VUSF & Namaste India Institutional Handholding & Support */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider">
            END-TO-END SANCTION HANDHOLDING
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            How VUSF Facilitates Your Loan &amp; Subsidy
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From technical feasibility and bank-grade DPR preparation to direct coordination with bank credit committees and DIC subsidy release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#0b192c] p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-blue-500/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-lg">
              01
            </div>
            <h4 className="text-base font-bold text-white">DPR &amp; CMA Modeling</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Formulation of bank-compliant Detailed Project Reports (DPR), DSCR sensitivity charts, break-even analysis, and 5-year projected financials.
            </p>
          </div>

          <div className="bg-[#0b192c] p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-blue-500/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-black text-lg">
              02
            </div>
            <h4 className="text-base font-bold text-white">Subsidy Scheme Alignment</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Evaluating your enterprise profile against PMEGP, CMEGP, Stand-Up India, and State PSI to select the scheme offering maximum non-refundable grant.
            </p>
          </div>

          <div className="bg-[#0b192c] p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-blue-500/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-lg">
              03
            </div>
            <h4 className="text-base font-bold text-white">Bank Sanction Liaison</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Interfacing with PSU and private bank branch managers and zonal credit managers (SBI, BOB, PNB, SIDBI) to resolve queries and secure formal sanction.
            </p>
          </div>

          <div className="bg-[#0b192c] p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-blue-500/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-lg">
              04
            </div>
            <h4 className="text-base font-bold text-white">Disbursement &amp; Subsidy Claim</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ensuring smooth release of term loan tranches, completing 100% documentation, and lodging the margin money claim with DIC for subsidy credit.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Complete Capital Offerings */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#0d1e34] rounded-2xl border border-blue-900/50 p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Bank Term Loans</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Long-term credit facility for purchasing industrial plant, land, machinery, and factory construction up to ₹25 crore.
            </p>
          </div>

          <div className="bg-[#0d1e34] rounded-2xl border border-indigo-900/50 p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Working Capital CC/OD</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cash credit lines, letters of credit (LC), bank guarantees (BG), and invoice discounting for daily production operations.
            </p>
          </div>

          <div className="bg-[#0d1e34] rounded-2xl border border-cyan-900/50 p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <PieChart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Wealth Advisory</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Corporate treasury optimization, risk mitigation, and retirement asset management for founders.
            </p>
          </div>

          <div className="bg-[#0d1e34] rounded-2xl border border-teal-900/50 p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">CMA &amp; DSCR Modeling</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Professional Credit Monitoring Arrangement (CMA) reports and financial projections for swift bank loan clearance.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Get Your Project DPR &amp; Government Subsidy Sanctioned</h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl font-light">
              Connect with our chartered financial advisors and subsidy liaisons to unlock up to 35% non-refundable government grants and secure term loan financing.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-blue-950 hover:bg-blue-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Apply for Subsidy &amp; Loan
          </button>
        </div>
      </section>
    </div>
  );
};
