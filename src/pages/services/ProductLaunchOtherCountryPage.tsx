import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Send,
  Globe2,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Package,
  Megaphone,
  Truck,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface ProductLaunchOtherCountryPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const ProductLaunchOtherCountryPage: React.FC<ProductLaunchOtherCountryPageProps> = ({
  onMemberClick,
}) => {
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'advanced' | 'custom'>('advanced');

  return (
    <div className="min-h-screen bg-[#071320] text-slate-100 selection:bg-rose-500 selection:text-white">
      {/* 1. Global Launch Stage Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-rose-900/30">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-rose-400">Product Launch Other Country</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Send className="w-4 h-4 text-rose-400" />
                <span>GLOBAL GO-TO-MARKET &bull; NAMASTE INDIA DIVISION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Launch Your Product Abroad: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">
                  Tailored Packages for Global Expansion
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                Launching your product in a new country is a pivotal step towards global expansion, and at Namaste India, we specialize in guiding businesses through this process with our tailored packages designed for success.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-rose-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Launch Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#launch-stages"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-5 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  View 4-Step Sequence &darr;
                </a>
              </div>
            </div>

            {/* Launch Readiness Card */}
            <div className="lg:col-span-4 bg-[#0e1f36]/90 border border-rose-800/50 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-rose-300 uppercase tracking-widest">Global GTM Deck</span>
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              </div>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="font-bold text-white">Target Market Validation</div>
                  <div className="text-[11px] text-slate-400">Demographics &amp; Buyer Demand</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="font-bold text-white">Import / Export Compliance</div>
                  <div className="text-[11px] text-slate-400">Customs, Labeling &amp; Certifications</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="font-bold text-white">Retail &amp; Distributor Channels</div>
                  <div className="text-[11px] text-slate-400">On-ground Wholesale Linkages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 4-Step International Product Launch Sequence */}
      <section id="launch-stages" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">
              END-TO-END LAUNCH JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              The 4 Pillars of a Successful Foreign Market Entry
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Our comprehensive services cover every aspect of the international product launch journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Phase 01',
                title: 'Market Research & Analysis',
                desc: 'In-depth market research to understand local consumer behavior, market trends, and competition, laying a solid foundation for your entry strategy.',
                icon: Globe2,
              },
              {
                step: 'Phase 02',
                title: 'Regulatory & Certifications',
                desc: 'Smooth navigation of foreign import/export regulations, food/safety certifications, labeling norms, and statutory permissions.',
                icon: FileCheck,
              },
              {
                step: 'Phase 03',
                title: 'Logistics & Distribution',
                desc: 'Optimized distribution channels, overseas warehousing, customs clearance, and timely delivery to minimize cost and maximize speed.',
                icon: Truck,
              },
              {
                step: 'Phase 04',
                title: 'Marketing, Advertising & PR',
                desc: 'Customized marketing strategies crafted to resonate with the target audience, leveraging digital marketing, localized ads, and PR.',
                icon: Megaphone,
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0e1d30] rounded-2xl border border-slate-800 p-6 space-y-4 hover:border-rose-500 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-black text-rose-400 uppercase tracking-widest">{p.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
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

      {/* 3. Launch Packages Comparison */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#0b1728] border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tailored Product Launch Packages
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Whether you opt for our basic, advanced, or custom package, our goal is your sustainable foreign market success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase">Tier 01</div>
              <h4 className="text-xl font-bold text-white">Basic Package</h4>
              <p className="text-xs text-slate-400">Essential market feasibility &amp; regulatory clearance guidance.</p>
              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
                <div>&bull; Foreign Market Assessment</div>
                <div>&bull; Labeling &amp; Compliance Audit</div>
                <div>&bull; Initial B2B Directory Listing</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-rose-950/40 border-2 border-rose-500 space-y-4 relative">
              <span className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                MOST POPULAR
              </span>
              <div className="text-xs font-bold text-rose-400 uppercase">Tier 02</div>
              <h4 className="text-xl font-bold text-white">Advanced Package</h4>
              <p className="text-xs text-slate-300">Complete launch solution with distributor meetings &amp; PR.</p>
              <div className="space-y-2 text-xs text-slate-200 border-t border-rose-800/60 pt-3">
                <div>&bull; In-depth Consumer &amp; Competitor Study</div>
                <div>&bull; Full Customs &amp; Certification Clearance</div>
                <div>&bull; Top 10 Importer/Distributor Meetings</div>
                <div>&bull; Digital Marketing &amp; PR Blitz</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase">Tier 03</div>
              <h4 className="text-xl font-bold text-white">Custom GTM Package</h4>
              <p className="text-xs text-slate-400">Bespoke multi-country expansion with dedicated overseas office.</p>
              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
                <div>&bull; Multi-Territory Expansion Strategy</div>
                <div>&bull; Dedicated Local Warehousing &amp; Fulfillment</div>
                <div>&bull; High-Level Bilateral Chamber Introductions</div>
                <div>&bull; Continuous On-Ground Trade Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Accelerate Your Product Entry Abroad</h3>
            <p className="text-xs sm:text-sm text-rose-100 max-w-2xl">
              Contact us today to explore how our specialized packages can pave the way for your long-term international success.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-rose-900 hover:bg-rose-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Schedule GTM Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
