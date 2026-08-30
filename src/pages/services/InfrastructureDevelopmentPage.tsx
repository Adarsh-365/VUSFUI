import React from 'react';
import { Link } from 'react-router-dom';
import {
  Construction,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Flame,
  Droplets,
  Layers,
  Sparkles,
} from 'lucide-react';

interface InfrastructureDevelopmentPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const InfrastructureDevelopmentPage: React.FC<InfrastructureDevelopmentPageProps> = ({
  onMemberClick,
}) => {
  return (
    <div className="min-h-screen bg-[#080d14] text-slate-100 selection:bg-amber-500 selection:text-slate-900 font-sans">
      {/* 1. Industrial Blueprint Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-amber-900/40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-amber-400">Infrastructure Development</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Construction className="w-4 h-4 text-amber-400" />
                <span>INDUSTRIAL ENGINEERING &bull; NAMASTE INDIA INFRA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Infrastructure Development: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">
                  Building the Foundation for Growth
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                At Namaste India, we specialize in infrastructure development to support businesses in achieving their growth objectives. Whether you&apos;re expanding existing facilities or starting anew, our services encompass comprehensive planning, design, and execution.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Request Infra Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#engineering-specs"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-5 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  View Facility Capabilities &darr;
                </a>
              </div>
            </div>

            {/* Industrial Specs Matrix Card */}
            <div className="lg:col-span-4 bg-[#111927]/90 border border-amber-800/50 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Industrial Cluster Specs</span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Structural Engineering:</span>
                  <span className="font-bold text-amber-300">PEB Steel Framework</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Effluent Management:</span>
                  <span className="font-bold text-amber-300">Zero Liquid Discharge (ZLD)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Power &amp; High Tension:</span>
                  <span className="font-bold text-amber-300">Industrial Feeder Linkages</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">MIDC / Statutory Approvals:</span>
                  <span className="font-bold text-amber-300">Full Handholding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Scalable Infrastructure Solutions */}
      <section id="engineering-specs" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              END-TO-END EXECUTION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Efficient and Scalable Infrastructure Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              From concept to completion, our team ensures that projects meet regulatory requirements, budget constraints, and strict timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#101826] rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Manufacturing Facilities</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Custom factory layouts optimized for assembly lines, heavy equipment foundations, vibration isolation, and high-ceiling logistics.
              </p>
            </div>

            <div className="bg-[#101826] rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Logistical &amp; Warehouse Hubs</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modern multi-modal warehousing with automated docking bays, fire sprinkler grids, cold chain integration, and container movement aprons.
              </p>
            </div>

            <div className="bg-[#101826] rounded-2xl border border-slate-800 p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Common Effluent &amp; Utilities</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Shared Common Effluent Treatment Plants (CETP), industrial solar rooftop integration, reliable water networks, and transformer substations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#c2410c] to-[#9a3412] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Plan Your Industrial Infrastructure Project</h3>
            <p className="text-xs sm:text-sm text-orange-100 max-w-2xl">
              Contact us today to discuss how we can support your infrastructure needs and propel your business towards sustained growth and success.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-[#c2410c] hover:bg-orange-50 text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Consult Chief Engineer
          </button>
        </div>
      </section>
    </div>
  );
};
