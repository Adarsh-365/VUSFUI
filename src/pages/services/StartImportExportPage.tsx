import React from 'react';
import { Link } from 'react-router-dom';
import {
  Ship,
  Globe2,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  TrendingUp,
  Award,
  Package,
  Layers,
  Sparkles,
  BookOpen,
  Truck,
  Send,
} from 'lucide-react';

interface StartImportExportPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const StartImportExportPage: React.FC<StartImportExportPageProps> = ({ onMemberClick }) => {
  return (
    <div className="min-h-screen bg-[#071324] text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* 1. Global Trade Terminal Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-cyan-900/40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-cyan-400">Start Import &amp; Export</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Ship className="w-4 h-4 text-cyan-400" />
                <span>CROSS-BORDER COMMERCE &bull; DGFT IEC ACCELERATOR</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Start Your Import &amp; Export: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300">
                  Expert Guidance Every Step of the Way
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                Embarking on an import and export business can be both exhilarating and daunting. At Namaste India, we specialize in guiding aspiring entrepreneurs through the intricacies of international trade, ensuring a smooth and successful launch.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Apply for Import-Export Advisory</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#masterclass-section"
                  className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold px-6 py-4 rounded-xl border border-amber-500/40 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Join Live Masterclass</span>
                </a>
              </div>
            </div>

            {/* Terminal Live Stat Box */}
            <div className="lg:col-span-4 bg-[#0d2038]/90 border border-cyan-800/60 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-cyan-800/60 pb-3">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Trade Corridor Gateway</span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">DGFT IEC Issuance:</span>
                  <span className="font-bold text-cyan-300">24-48 Hours</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Export Promotion Councils (RCMC):</span>
                  <span className="font-bold text-cyan-300">Supported</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Active Corridors:</span>
                  <span className="font-bold text-amber-300">12+ Countries</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Customs Clearance Docs:</span>
                  <span className="font-bold text-cyan-300">Import Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Live Masterclass Banner */}
      <section id="masterclass-section" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE CERTIFICATION MASTERCLASS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
              &ldquo;Unlocking Global Markets: Your Roadmap to Import and Export Success&rdquo;
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-medium">
              Join our comprehensive live online masterclass organized by Namaste India Group and gain practical, step-by-step mastery over product selection, customs laws, buyer verification, and international shipping.
            </p>
          </div>

          <a
            href="https://wa.me/918169080686?text=Hello%20Namaste%20India%20Team%2C%20I%20want%20to%20enroll%20in%20the%20Import%20%26%20Export%20Masterclass."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#c2410c] hover:bg-amber-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>Enroll Course on Namaste India Group</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 3. The 5 Comprehensive Services Blueprint */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              END-TO-END METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Comprehensive Services for Global Traders
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We offer a range of services tailored to meet the specific needs of emerging and experienced importers and exporters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Market Research and Analysis',
                desc: 'Understand target markets, consumer behavior, import duties, and competitive landscape to make informed expansion decisions.',
                icon: Globe2,
              },
              {
                step: '02',
                title: 'Legal and Regulatory Compliance',
                desc: 'Navigate customs regulations, DGFT import/export laws, GST refunds on export, and documentation requirements seamlessly.',
                icon: ShieldCheck,
              },
              {
                step: '03',
                title: 'Supply Chain Management',
                desc: 'Optimize freight logistics, ocean/air container bookings, port handling, and warehousing to ensure timely delivery and cost-efficiency.',
                icon: Package,
              },
              {
                step: '04',
                title: 'Financial Planning & Risk Mitigation',
                desc: 'From currency fluctuations and hedging to Letters of Credit (LC) and payment terms, we help mitigate financial risks and maximize profitability.',
                icon: TrendingUp,
              },
              {
                step: '05',
                title: 'Marketing and Sales Strategy',
                desc: 'Develop effective strategies to promote your products or services internationally, identify foreign buyers, and expand your customer base.',
                icon: Layers,
              },
            ].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0b1b30] rounded-2xl border border-cyan-900/60 p-6 space-y-4 hover:border-cyan-400 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-cyan-400">{srv.step}</span>
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">{srv.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Flagship Direct Execution Programs */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FLAGSHIP DIRECT EXECUTION PROGRAMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              End-to-End Global Trade Acceleration
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Direct, hands-on operational support ensuring seamless exports across global corridors and verified direct imports from China.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Block 1: Direct Export Facilitation Program */}
            <div className="bg-gradient-to-br from-[#0c223d] to-[#071324] border-2 border-cyan-500/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-cyan-400 transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                    Program 01 &bull; Global Exports
                  </span>
                  <Send className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Direct Export Facilitation Program
                </h3>

                <p className="text-xs sm:text-sm text-cyan-100 font-medium bg-cyan-950/70 p-3.5 rounded-xl border border-cyan-800/60 leading-relaxed">
                  From sending samples to <strong>12+ countries</strong> to getting <strong>bulk orders</strong> — all comprehensive trade, buyer matching, documentation, and logistical support included.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Global buyer discovery & targeted outreach across 12+ active international trade corridors',
                    'Sample dispatch handling, packaging validation & international courier compliance',
                    'Proforma Invoice (PI), commercial contract drafting & Letter of Credit (LC) vetting',
                    'Port customs clearance, container logistics booking & export subsidy filing',
                    'Complete handholding until final bulk shipment arrival and payment realization',
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-cyan-900/60 flex items-center justify-between relative z-10">
                <button
                  onClick={() => onMemberClick('become')}
                  className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-cyan-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Export Facilitation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Block 2: Import From China */}
            <div className="bg-gradient-to-br from-[#241708] to-[#071324] border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-amber-400 transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                    Program 02 &bull; China Sourcing
                  </span>
                  <Truck className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Import From China
                </h3>

                <p className="text-xs sm:text-sm text-amber-100 font-medium bg-amber-950/70 p-3.5 rounded-xl border border-amber-800/60 leading-relaxed">
                  From sending a photo of the product to getting the <strong>final verified product delivered directly at your doorstep</strong> — 100% complete sourcing, testing, shipping &amp; customs.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Photo & spec product sourcing directly from verified Tier-1 Chinese manufacturers',
                    'Factory audits, sample inspection & quality control before loading at Chinese ports',
                    'Forex payments (RMB/USD) settlement, China export customs & bill of lading',
                    'Sea & Air freight forwarding with real-time tracking from Shanghai/Ningbo/Shenzhen/Guangzhou',
                    'Complete Indian customs clearance, duty payment & doorstep transport delivery',
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-amber-900/60 flex items-center justify-between relative z-10">
                <button
                  onClick={() => onMemberClick('become')}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-amber-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start China Sourcing &amp; Import</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#0e223d] border border-cyan-800/80 rounded-3xl p-8 sm:p-12 space-y-8">
          <h3 className="text-2xl font-bold text-white">Why Choose Namaste India &amp; VUSF</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-base font-bold text-cyan-300">Expertise and Experience</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Benefit from our years of experience and deep understanding of global trade dynamics, bilateral tariffs, and port logistics.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-cyan-300">Personalized Approach</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We provide tailored solutions to address your unique business goals, product categories, and cross-border challenges.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-cyan-300">Network and Partnerships</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Access our network of verified suppliers, overseas distributors, and trade professionals to facilitate rapid business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Ready to Take Your Products to the Global Stage?</h3>
            <p className="text-xs sm:text-sm text-cyan-100 max-w-2xl">
              Start your journey into global trade confidently with Namaste India, where success knows no borders.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-cyan-900 hover:bg-cyan-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Consult with Trade Expert
          </button>
        </div>
      </section>
    </div>
  );
};
