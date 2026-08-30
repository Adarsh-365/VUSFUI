import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe2,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Plane,
  Truck,
  Scale,
  Sparkles,
  MapPin,
  Calendar,
  Search,
  FileCheck2,
  Briefcase,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

interface NamasteChinaPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const NamasteChinaPage: React.FC<NamasteChinaPageProps> = ({ onMemberClick }) => {
  const chinaServices = [
    {
      id: 'canton-fair-delegation',
      title: 'Canton Fair 2026 Delegation',
      description:
        "Join India's leading trade travel package. Includes invitation letters, visa processing, 5-star hotels, transfers, and English-Chinese trade interpreters.",
      ctaText: 'Register for Delegation',
      icon: Plane,
      badge: 'FLAGSHIP DELEGATION',
    },
    {
      id: 'china-product-sourcing',
      title: 'China Product Sourcing',
      description:
        'Find verified direct manufacturers. We source, negotiate pricing, and ship sample units to our Mumbai warehouse for your physical approval.',
      ctaText: 'Request Sourcing Plan',
      icon: Search,
      badge: 'DIRECT OEM SOURCING',
    },
    {
      id: 'supplier-verification-audits',
      title: 'Supplier Verification & Audits',
      description:
        'Prevent payment fraud. Our Guangzhou office checks business registry licenses (AIC) and performs physical factory floor checkups.',
      ctaText: 'Request Supplier Audit',
      icon: ShieldCheck,
      badge: 'FRAUD PROTECTION',
    },
    {
      id: 'factory-visits-tours',
      title: 'Factory Visits & Tours',
      description:
        'Coordinate travel directly to manufacturing zones in Foshan, Shenzhen, and Yiwu. We arrange drivers and expert trade guides.',
      ctaText: 'Plan Factory Visit',
      icon: Building2,
      badge: 'ON-GROUND CONCIERGE',
    },
    {
      id: 'import-assistance-logistics',
      title: 'Import Assistance & Logistics',
      description:
        'Calculate tariffs, check compliance (BIS/EPR), and book sea container freight (FCL/LCL) or air cargo with full tracking.',
      ctaText: 'Get Shipping Rates',
      icon: Truck,
      badge: 'CUSTOMS & SHIPPING',
    },
    {
      id: 'china-trade-consulting',
      title: 'China Trade Consulting',
      description:
        'Analyze transaction risks, calculate complete landed costs, draft legally protective bilingual MoUs, and resolve disputes.',
      ctaText: 'Inquire Trade Consulting',
      icon: Scale,
      badge: 'LEGAL & RISK ADVISORY',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#0b5d4b] selection:text-white font-sans">
      {/* 1. Canton Fair & China Sourcing Hero */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#f0fdf9] via-white to-slate-50 border-b border-[#0b5d4b]/20">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0b5d4b]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0b5d4b] mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-500">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-500">Services</Link>
            <span>/</span>
            <span className="text-[#0b5d4b]">Namaste China</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-[#0b5d4b]/10 border border-[#0b5d4b]/30 text-[#0b5d4b] text-xs font-extrabold px-4 py-1.5 rounded-full">
                  <Globe2 className="w-4 h-4 text-[#0b5d4b]" />
                  <span>NAMASTE CHINA DESK &bull; GUANGZHOU &bull; YIWU &bull; SHENZHEN</span>
                </div>
                <a
                  href="https://www.namastechina.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-600/30 text-[#0b5d4b] text-xs font-extrabold px-3.5 py-1.5 rounded-full transition-all"
                >
                  <span>www.namastechina.org</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-black">
                Namaste China: <br />
                <span className="text-[#0b5d4b]">
                  Direct OEM Factory Sourcing &amp; Delegations
                </span>
              </h1>

              <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-medium">
                Eliminate intermediaries with direct manufacturer verification, OEM machinery procurement, on-site quality audits, and official Canton Fair trade delegations organized by Namaste India Group.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-[#0b5d4b] hover:bg-[#08483a] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#0b5d4b]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Register for Canton Fair 2026</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://www.namastechina.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 text-[#0b5d4b] text-xs sm:text-sm font-extrabold px-6 py-4 rounded-xl border-2 border-[#0b5d4b] shadow-sm transition-all flex items-center gap-2 hover:scale-105 cursor-pointer"
                >
                  <Globe2 className="w-4 h-4 text-[#0b5d4b]" />
                  <span>Visit www.namastechina.org</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Sourcing Hub Status Card */}
            <div className="lg:col-span-4 bg-white border-2 border-[#0b5d4b]/30 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-extrabold text-[#0b5d4b] uppercase tracking-widest">Active Sourcing Desks</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0b5d4b] animate-ping" />
              </div>
              <div className="space-y-2.5 text-xs text-slate-800">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0b5d4b]/50 transition-colors">
                  <div className="font-extrabold text-black flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0b5d4b]" />
                    <span>Guangzhou (Canton Fair Office)</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5 ml-5">Machinery, Robotics, Heavy Equipment &amp; PEB Materials</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0b5d4b]/50 transition-colors">
                  <div className="font-extrabold text-black flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0b5d4b]" />
                    <span>Yiwu &amp; Ningbo Port Desk</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5 ml-5">Commodities, Hardware, Packaging, Tools &amp; FMCG</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0b5d4b]/50 transition-colors">
                  <div className="font-extrabold text-black flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0b5d4b]" />
                    <span>Shenzhen &amp; Foshan Tech Hub</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5 ml-5">Electronics, Precision Tooling, Moldings &amp; Ceramics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. China Services Grid (6 Core Cards) */}
      <section id="services-grid" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#0b5d4b]/10 border border-[#0b5d4b]/30 text-[#0b5d4b] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-SPECTRUM CHINA SOURCING &amp; TRADE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black">
            Comprehensive China Sourcing Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            From Canton Fair delegations to factory inspections and doorstep container shipping — complete handholding for Indian businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {chinaServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#0b5d4b] p-6 sm:p-8 space-y-6 shadow-md hover:shadow-2xl hover:shadow-[#0b5d4b]/15 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0b5d4b]/10 text-[#0b5d4b] flex items-center justify-center group-hover:bg-[#0b5d4b] group-hover:text-white transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="bg-slate-100 text-[#0b5d4b] text-[10px] font-black uppercase px-3 py-1 rounded-full border border-[#0b5d4b]/20 tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black group-hover:text-[#0b5d4b] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onMemberClick('become')}
                    className="w-full bg-[#0b5d4b] hover:bg-[#08483a] text-white text-xs font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-lg group-hover:shadow-[#0b5d4b]/25"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dedicated Portal Banner */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gradient-to-r from-[#0b5d4b] via-[#094c3d] to-[#084134] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-400/30">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>Dedicated Global Sourcing Portal</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Visit www.namastechina.org for Live Supplier Directories
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl font-normal">
              Access verified Chinese manufacturer catalogs, book on-demand factory audits in Guangzhou &amp; Shenzhen, and submit custom OEM procurement briefs directly on our dedicated portal.
            </p>
          </div>
          <a
            href="https://www.namastechina.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0b5d4b] hover:bg-emerald-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer hover:scale-105"
          >
            <span>Open www.namastechina.org</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 3. Sourcing Protocol Workflow */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-[#0b5d4b] uppercase tracking-wider">
              STRUCTURED PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-black">
              How the Namaste China Desk Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              A transparent 4-stage operational process protecting your capital and ensuring top product quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Product Requirement',
                desc: 'Submit your technical specifications, blueprints, or reference photos to our sourcing specialists.',
              },
              {
                step: '02',
                title: 'Factory Match & Audit',
                desc: 'We identify verified Tier-1 Chinese manufacturers and conduct on-ground business registry (AIC) audits.',
              },
              {
                step: '03',
                title: 'Sample & Price Approval',
                desc: 'Samples are tested, inspected, and shipped to our Mumbai warehouse for your physical evaluation.',
              },
              {
                step: '04',
                title: 'Customs & Delivery',
                desc: 'Full ocean/air freight booking, Indian customs clearance, BIS compliance, and doorstep transport delivery.',
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm hover:border-[#0b5d4b] transition-all"
              >
                <div className="text-3xl font-black text-[#0b5d4b]">{st.step}</div>
                <h4 className="text-base font-bold text-black">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#0b5d4b] via-[#094c3d] to-[#084134] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Ready to Source from China with 100% Security?</h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl font-normal">
              Connect with our Guangzhou &amp; Mumbai trade desks to request factory audits, calculate landed import costs, or visit <a href="https://www.namastechina.org/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-white">www.namastechina.org</a>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.namastechina.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-6 py-4 rounded-xl border border-emerald-400/40 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Visit Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => onMemberClick('become')}
              className="bg-white text-[#0b5d4b] hover:bg-slate-100 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
            >
              Submit Sourcing Requirement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
