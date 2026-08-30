import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COUNTRY_CORRIDORS, CountryWingData } from '../../data/internationalData';
import {
  Globe2,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
  FileCheck,
  ChevronRight,
  Plane,
  Ship,
  ExternalLink,
} from 'lucide-react';

interface CountryCorridorPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
  overrideCountry?: string;
}

const COUNTRY_FLAGS: Record<string, string> = {
  india: '/flags/in.png',
  nepal: '/flags/np.png',
  china: '/flags/cn.png',
  bangladesh: '/flags/bd.png',
  'sri-lanka': '/flags/lk.png',
  srilanka: '/flags/lk.png',
  thailand: '/flags/th.png',
  japan: '/flags/jp.png',
  vietnam: '/flags/vn.png',
  malaysia: '/flags/my.png',
  singapore: '/flags/sg.png',
  indonesia: '/flags/id.png',
  taiwan: '/flags/tw.png',
  'south-korea': '/flags/kr.png',
  southkorea: '/flags/kr.png',
  uae: '/flags/ae.png',
  'united-arab-emirates': '/flags/ae.png',
  oman: '/flags/om.png',
  qatar: '/flags/qa.png',
  'south-africa': '/flags/za.png',
  southafrica: '/flags/za.png',
  ethiopia: '/flags/et.png',
  germany: '/flags/de.png',
  russia: '/flags/ru.png',
};

export const CountryCorridorPage: React.FC<CountryCorridorPageProps> = ({
  onMemberClick,
  overrideCountry,
}) => {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const slug = (overrideCountry || countrySlug || 'nepal').toLowerCase();
  const corridor = COUNTRY_CORRIDORS[slug] || COUNTRY_CORRIDORS[slug.replace('-', '')];

  if (!corridor) {
    return <Navigate to="/international" replace />;
  }

  const flagUrl = COUNTRY_FLAGS[slug] || '/flags/in.png';

  const allCountriesList = [
    { slug: 'india', name: 'India', flag: '/flags/in.png' },
    { slug: 'nepal', name: 'Nepal', flag: '/flags/np.png' },
    { slug: 'china', name: 'China', flag: '/flags/cn.png' },
    { slug: 'bangladesh', name: 'Bangladesh', flag: '/flags/bd.png' },
    { slug: 'sri-lanka', name: 'Sri Lanka', flag: '/flags/lk.png' },
    { slug: 'thailand', name: 'Thailand', flag: '/flags/th.png' },
    { slug: 'japan', name: 'Japan', flag: '/flags/jp.png' },
    { slug: 'vietnam', name: 'Vietnam', flag: '/flags/vn.png' },
    { slug: 'malaysia', name: 'Malaysia', flag: '/flags/my.png' },
    { slug: 'singapore', name: 'Singapore', flag: '/flags/sg.png' },
    { slug: 'indonesia', name: 'Indonesia', flag: '/flags/id.png' },
    { slug: 'taiwan', name: 'Taiwan', flag: '/flags/tw.png' },
    { slug: 'south-korea', name: 'South Korea', flag: '/flags/kr.png' },
    { slug: 'uae', name: 'UAE', flag: '/flags/ae.png' },
    { slug: 'oman', name: 'Oman', flag: '/flags/om.png' },
    { slug: 'qatar', name: 'Qatar', flag: '/flags/qa.png' },
    { slug: 'south-africa', name: 'South Africa', flag: '/flags/za.png' },
    { slug: 'ethiopia', name: 'Ethiopia', flag: '/flags/et.png' },
    { slug: 'germany', name: 'Germany', flag: '/flags/de.png' },
    { slug: 'russia', name: 'Russia', flag: '/flags/ru.png' },
  ];

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 selection:bg-orange-500 selection:text-white font-sans">
      {/* 1. Country Header Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-600/20 to-amber-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/international" className="hover:underline text-slate-400">International</Link>
            <span>/</span>
            <span className="text-amber-400">{corridor.country}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <img src={flagUrl} alt={corridor.country} className="w-4 h-4 rounded-full object-contain" />
                <span dangerouslySetInnerHTML={{ __html: corridor.heroBadge }} />
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={flagUrl}
                  alt={corridor.country}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-full shadow-2xl border-2 border-orange-500/40 p-0.5 bg-slate-900 shrink-0"
                />
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                  {corridor.title}
                </h1>
              </div>

              <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 text-lg sm:text-xl font-bold">
                {corridor.tagline}
              </p>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                {corridor.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {corridor.websiteUrl && (
                  <a
                    href={corridor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs sm:text-sm font-black px-7 py-4 rounded-xl shadow-xl shadow-red-950/50 hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <Globe2 className="w-4 h-4 text-amber-300 animate-pulse" />
                    <span>Visit {corridor.websiteUrl.replace(/^https?:\/\//, '')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-[#c2410c] to-[#ea580c] hover:from-[#ea580c] hover:to-[#f97316] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Connect with {corridor.country} Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#corridor-details"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all"
                >
                  View Trade Capabilities &darr;
                </a>
              </div>
            </div>

            {/* Strategic Stats Matrix Box */}
            <div className="lg:col-span-4 bg-[#0f172a]/95 border-2 border-orange-500/40 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>Bilateral Trade Indicators</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                {corridor.stats.map((st, idx) => (
                  <div key={idx} className="flex justify-between py-1.5 border-b border-slate-800/80 last:border-0">
                    <span className="text-slate-400">{st.label}:</span>
                    <span className="font-bold text-amber-300">{st.value}</span>
                  </div>
                ))}
              </div>

              {corridor.websiteUrl && (
                <div className="pt-3 border-t border-slate-800">
                  <a
                    href={corridor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-red-950/60 to-orange-950/60 border border-red-500/50 text-red-200 hover:border-red-400 transition-all group"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                        <Globe2 className="w-3 h-3 text-red-400" />
                        Official Sourcing Portal
                      </span>
                      <div className="text-xs font-black text-white underline decoration-amber-400">
                        Visit {corridor.websiteUrl.replace(/^https?:\/\//, '')}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Quick 20-Country Switcher (2 Clean Rows) */}
          <div className="mt-12 pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[11px] font-black text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>Switch Trade Corridor Desk (20 Bilateral Desks):</span>
              </span>
              <Link
                to="/international"
                className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                <span>Interactive World Map</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* 2-Row Grid Layout (10 columns on desktop = 2 perfect rows) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2">
              {allCountriesList.map((c) => (
                <Link
                  key={c.slug}
                  to={c.slug === 'india' ? '/namaste-india-group' : `/international/${c.slug}`}
                  className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-[11px] font-bold transition-all border ${
                    slug === c.slug
                      ? 'bg-orange-600 text-white border-orange-500 shadow-md shadow-orange-950/50 scale-[1.02]'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700'
                  }`}
                >
                  <img src={c.flag} alt={c.name} className="w-3.5 h-3.5 rounded-full object-contain shrink-0 shadow-xs" />
                  <span className="truncate">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Focus Sectors & Representatives */}
      <section id="corridor-details" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Key Focus Sectors */}
        <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            High-Potential Trade Sectors in {corridor.country}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {corridor.keySectors.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-200"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{sec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter Office Bearers & Trade Representatives */}
        {corridor.representatives && corridor.representatives.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {corridor.country} Chapter Representatives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {corridor.representatives.map((rep, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 flex items-center gap-4 hover:border-orange-500 transition-all"
                >
                  {rep.image ? (
                    <img
                      src={rep.image}
                      alt={rep.name}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-500/40 shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                      <Users className="w-6 h-6" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-bold text-white">{rep.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{rep.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Spotlights */}
        {corridor.galleryImages && corridor.galleryImages.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Delegations &amp; Bilateral Conclaves
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {corridor.galleryImages.map((img, idx) => (
                <div key={idx} className="h-48 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={img}
                    alt={`${corridor.country} delegation ${idx + 1}`}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 3. Bottom Consultation CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-[#c2410c] to-[#9a3412] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Expand Your Business into {corridor.country}</h3>
            <p className="text-xs sm:text-sm text-orange-100 max-w-2xl">
              From market research and export licensing to buyer meetings and foreign office establishment, our dedicated desk is at your service.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-[#c2410c] hover:bg-orange-50 text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Inquire for {corridor.country} Corridor
          </button>
        </div>
      </section>
    </div>
  );
};
