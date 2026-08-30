import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  PhoneCall,
  ShieldCheck,
  ChevronRight,
  Building2,
} from 'lucide-react';

interface ServiceDetailPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
  serviceSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  onMemberClick,
  serviceSlug: propSlug,
}) => {
  const { serviceSlug: paramSlug } = useParams<{ serviceSlug: string }>();
  const slug = propSlug || paramSlug;
  const navigate = useNavigate();

  const service = SERVICES_DATA.find((s) => s.slug === slug || s.id === slug) || SERVICES_DATA[0];
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="bg-[#0c1b33] text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-amber-600/20 via-transparent to-transparent opacity-50" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <Link to="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link to="/service" className="hover:underline">Services</Link>
            <span>&gt;</span>
            <span className="text-white">{service.shortTitle}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-400/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="mt-3 text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            {service.summary}
          </p>

          {/* Quick service switcher pills */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {SERVICES_DATA.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`px-3 py-1.5 rounded-full transition-all text-[11px] font-semibold whitespace-nowrap ${
                  s.slug === service.slug
                    ? 'bg-[#c2410c] text-white font-bold shadow-xs'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {s.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Description Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#c2410c] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    Service Overview &amp; Charter
                  </h2>
                  <div className="text-xs font-semibold text-[#c2410c]">{service.category}</div>
                </div>
              </div>

              {/* Full Paragraphs */}
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                {service.fullDescription.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? 'font-semibold text-slate-900 text-base' : ''}>
                    {p}
                  </p>
                ))}
              </div>

              {/* External Course Link if available */}
              {service.externalLink && (
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-2 border-orange-300 rounded-xl p-5 space-y-2">
                  <div className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
                    Interactive Live Training &amp; Masterclass:
                  </div>
                  <a
                    href={service.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 hover:text-[#c2410c] underline"
                  >
                    <span>{service.externalLink.text}</span>
                    <ExternalLink className="w-4 h-4 text-[#c2410c] shrink-0" />
                  </a>
                </div>
              )}
            </div>

            {/* Key Deliverables & Features */}
            {service.features && service.features.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Key Scope of Work &amp; Deliverables</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us */}
            {service.whyChooseUs && service.whyChooseUs.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#c2410c]" />
                  <span>Why Partner with Namaste India &amp; VUSF</span>
                </h3>
                <div className="space-y-3 pt-1">
                  {service.whyChooseUs.map((w, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-[#c2410c] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA & Contact */}
          <div className="lg:col-span-4 space-y-6 sticky top-[90px]">
            {/* Action Box */}
            <div className="bg-gradient-to-br from-[#0c1b33] to-[#1e293b] text-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Get Started Today
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  Ready to Enquire About {service.shortTitle}?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our expert advisory team will review your requirements and schedule an onboarding session within 24 hours.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="w-full bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{service.ctaText || 'Apply for this Service'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onMemberClick('become')}
                  className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors text-center"
                >
                  Schedule 1-on-1 Consultation
                </button>
              </div>

              <div className="border-t border-slate-700 pt-4 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>National Helpline: +91 22 2757 0000</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Dedicated desk for MSMEs, Startups &amp; Corporate Delegations
                </div>
              </div>
            </div>

            {/* All Services Navigation List */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                All Specialized Services
              </h4>
              <div className="space-y-1">
                {SERVICES_DATA.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                      s.slug === service.slug
                        ? 'bg-orange-50 text-[#c2410c] font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#c2410c]'
                    }`}
                  >
                    <span>{s.shortTitle}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
