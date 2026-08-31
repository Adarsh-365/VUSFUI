import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck,
  Globe2,
  Sparkles,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Store,
  Users,
  Building2,
  MapPin,
  ExternalLink,
  Plane,
  Layers,
  Award,
} from 'lucide-react';

interface ExhibitionPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const ExhibitionPage: React.FC<ExhibitionPageProps> = ({
  onMemberClick,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'nepal' | 'thailand' | 'china' | 'domestic'>('all');

  const pastExhibitions = [
    {
      id: 'thailand-industrial-fair',
      title: 'Thailand Industrial Fair (TIF) & ASEAN Sourcing Pavilion',
      date: 'February 2025',
      location: 'BITEC, Bangkok, Thailand',
      category: 'thailand',
      badge: 'ASEAN PAVILION',
      image: '/timeline_photos/thailand exibition/IMG-20260206-WA0054.jpeg',
      description:
        'Led high-level Indian business delegation to Thailand Industrial Fair in Bangkok. Engaged with Thai Chamber of Commerce, Board of Trade of Thailand, and 2nd Secretary at the Embassy of India to foster bilateral trade in food processing machinery, auto components, and packaging automation.',
      highlights: [
        'Curated Indian Pavilion with 20+ MSME machinery and engineering exhibitors',
        'Direct bilateral interactions with Board of Trade of Thailand and Thai Chamber of Commerce',
        'Strategic diplomatic meeting with 2nd Secretary, Embassy of India in Bangkok',
      ],
    },
    {
      id: 'nepal-food-beverage-expo',
      title: 'Nepal International Food & Beverage Expo & Buyer-Seller Meet',
      date: 'October 2024',
      location: 'Kathmandu, Nepal',
      category: 'nepal',
      badge: 'SOUTH ASIA GATEWAY',
      image: '/timeline_photos/nepal exibition/IMG-20260206-WA0118.jpeg',
      description:
        'Strategic cross-border industrial expo connecting Indian agro-processing units, spices, packaging materials, and FMCG manufacturers with leading Nepalese importers, retail chains, and trade distributors.',
      highlights: [
        'Over 100+ B2B buyer-seller matchmaking sessions conducted on-site',
        'Key partnership with Confederation of Nepalese Industries (CNI)',
        'Facilitated duty-free border customs clearance under SAARC tariff agreements',
      ],
    },
    {
      id: 'nepal-fashion-lifestyle-expo',
      title: 'Nepal Fashion, Lifestyle & Jewellery Exhibition',
      date: 'August 2024',
      location: 'Kathmandu, Nepal',
      category: 'nepal',
      badge: 'LIFESTYLE & GEMS',
      image: '/timeline_photos/nepal fashion and jwellary exibition/WhatsApp Image 2026-08-28 at 10.00.36 PM.jpeg',
      description:
        'Showcased Indian textiles, ethnic apparel, handcrafted jewellery, and lifestyle accessories in Kathmandu, opening direct high-margin retail distribution channels across Nepal.',
      highlights: [
        'Curated showcase for 35+ women entrepreneurs and artisan MSME brands',
        'Direct procurement tie-ups with boutique store owners in Kathmandu and Pokhara',
        'Extensive South Asian media coverage and celebrity designer participation',
      ],
    },
    {
      id: 'canton-fair-china-mission',
      title: 'Canton Fair 2025 Trade Mission & Namaste China Desk',
      date: 'November 2025',
      location: 'Guangzhou, China',
      category: 'china',
      badge: 'GLOBAL FACTORY ACCESS',
      image: '/timeline_photos/china 2025/20251104_151304.jpeg',
      description:
        'Landmark delegation to the 138th Canton Fair (China Import and Export Fair) in Guangzhou. Formally launched the Namaste China bilateral sourcing desk, assisting Indian MSMEs with direct OEM factory audits and heavy machinery procurement.',
      highlights: [
        'Facilitated VIP buyer badges and bilingual translators for Indian delegates',
        'Direct negotiations with verified Tier-1 Chinese manufacturers across 15 sectors',
        'On-site factory quality verification in Guangzhou, Shenzhen, and Foshan',
      ],
    },
    {
      id: 'india-vietnam-buyer-seller',
      title: 'India–Vietnam International Business Delegation & Expo',
      date: 'February 2026',
      location: 'Ho Chi Minh City & Hanoi, Vietnam',
      category: 'domestic',
      badge: 'SOUTHEAST ASIA BRIDGE',
      image: '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0092.jpeg',
      description:
        'High-impact B2B delegation bringing together 30+ Indian agro-exporters, specialty chemical producers, and engineering firms with Vietnamese corporate buyers, tapping into the $15B bilateral trade corridor.',
      highlights: [
        '30+ manufacturers held direct one-on-one trade negotiations in Hanoi',
        'MoU signing for agricultural commodity supply and contract manufacturing',
        'Partnership with Vietnam Chamber of Commerce and Industry (VCCI)',
      ],
    },
    {
      id: 'sial-india-food-expo',
      title: 'SIAL India & Global Food Innovation Expo',
      date: 'December 2024',
      location: 'Yashobhoomi (IICC), New Delhi, India',
      category: 'domestic',
      badge: 'NATIONAL FOOD EXPO',
      image: '/timeline_photos/sial exibition/IMG-20260206-WA0027.jpeg',
      description:
        'Represented regional MSME food brands and processing units at SIAL India, connecting domestic agro-enterprises with international supermarket chains, HoReCa buyers, and institutional importers.',
      highlights: [
        'Showcased 50+ innovative organic and processed food products',
        'Direct buyer linkages with Middle East and European food importers',
        'Integrated cold chain packaging and FSSAI export compliance guidance',
      ],
    },
    {
      id: 'ifat-india-cleantech-expo',
      title: 'IFAT India Environmental & CleanTech Expo',
      date: 'October 2025',
      location: 'Bombay Exhibition Centre (BEC), Mumbai',
      category: 'domestic',
      badge: 'CLEANTECH & SUSTAINABILITY',
      image: '/timeline_photos/ifat exibition/IMG_20251016_232309_084.jpeg',
      description:
        'Participated in India’s leading environmental tech expo, exploring zero-liquid discharge effluent solutions, industrial recycling, and sustainable ESG frameworks for MSME manufacturing clusters.',
      highlights: [
        'Evaluated cutting-edge industrial wastewater treatment and recycling systems',
        'Integrated green compliance blueprints into VUSF industrial park models',
        'Linkages with global municipal engineering and renewable energy providers',
      ],
    },
    {
      id: 'navi-mumbai-summit-expo',
      title: 'Navi Mumbai Business Summit & MSME Expo 2026',
      date: 'July 2026',
      location: 'Vashi, Navi Mumbai, Maharashtra',
      category: 'domestic',
      badge: 'REGIONAL EXPORT CONCLAVE',
      image: '/temp/IMAGES.jpeg',
      description:
        'Convened 200+ MSME entrepreneurs, manufacturers, and startup founders with dedicated sessions on India Post exports, bank credit schemes, and port logistics across the Mumbai Metropolitan Region.',
      highlights: [
        'Interactive export postal masterclass with India Post Promotion Team',
        'Unveiled state-level industrial subsidy roadmap for 44 core sectors',
        'Facilitated 50+ business-to-business supplier tie-ups on-site',
      ],
    },
  ];

  const filteredExhibitions = pastExhibitions.filter(
    (item) => selectedFilter === 'all' || item.category === selectedFilter
  );

  return (
    <div className="min-h-screen bg-[#070e17] text-slate-100 selection:bg-purple-500 selection:text-white">
      {/* 1. Event Stage Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-purple-900/30">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-purple-400">Trade Exhibitions &amp; Expos</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <CalendarCheck className="w-4 h-4 text-purple-400" />
                <span>GLOBAL TRADE FAIRS &bull; INDUSTRIAL EXPOS &amp; PAVILIONS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Trade Exhibitions &amp; Expos: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-amber-300">
                  Connect, Showcase &amp; Expand Globally
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                Discover expertly curated trade exhibitions, country-level export pavilions, and specialized industrial expos connecting Indian MSMEs, manufacturers, and startups directly with international buyers, distributors, and procurement heads.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-950/50 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Book an Exhibition Stall</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#upcoming-expos"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Upcoming Expos &amp; Delegations &darr;</span>
                </a>
              </div>
            </div>

            {/* Upcoming Flagship Expo Spotlight */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#121c2e] to-[#1c122e] border-2 border-purple-500/50 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <span className="bg-purple-500 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                  Upcoming Flagship Expo
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-ping" />
              </div>

              <h3 className="text-xl font-black text-white leading-tight">
                Nepal Grand Strategy Exhibition &amp; B2B Meet 2026
              </h3>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-purple-300 font-semibold">
                  <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>October 14–16, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Bhrikutimandap Hall, Kathmandu, Nepal</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                150+ B2B Exhibitors connecting Indian FMCG, food processing, packaging, and machinery with Nepalese buyers.
              </p>

              <button
                onClick={() => onMemberClick('become')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Kathmandu Stall</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Upcoming Flagship Expos & Delegations Section */}
      <section id="upcoming-expos" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UPCOMING GLOBAL TRADE MISSIONS &amp; EXPOS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Upcoming Flagship Exhibitions &amp; Delegations
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Secure prime pavilion booths, pre-scheduled buyer meetings, and official delegation access across our high-demand international trade fairs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Nepal Grand Strategy Exhibition Kathmandu */}
          <div className="bg-gradient-to-br from-[#131b2e] to-[#070e17] border-2 border-purple-500/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-purple-400 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="bg-purple-500/20 text-purple-300 border border-purple-400/40 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                  South Asia Flagship &bull; Kathmandu
                </span>
                <Globe2 className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-black text-white leading-tight">
                Nepal Grand Strategy Exhibition &amp; Buyer-Seller Meet 2026
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-purple-950/50 p-4 rounded-2xl border border-purple-800/40 text-xs">
                <div className="flex items-center gap-2 text-purple-200">
                  <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Dates:</div>
                    <div>October 14–16, 2026</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-purple-200">
                  <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Location:</div>
                    <div>Bhrikutimandap Hall, Kathmandu, Nepal</div>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Premier cross-border industrial and consumer expo designed to position Indian manufacturers, agro-processors, machinery fabricators, and FMCG brands at the forefront of Nepal&apos;s rapidly growing commercial markets.
              </p>

              <div className="space-y-2 pt-2 border-t border-purple-900/60">
                {[
                  '150+ Verified B2B Exhibitors & Institutional Buying Houses',
                  'One-on-One Pre-Scheduled Buyer Meetings with Nepalese Importers',
                  'Inauguration by Senior Government Dignitaries & CNI Apex Leadership',
                  'Duty-Free Bilateral SAARC Trade Facilitation & Border Logistics Support',
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-purple-100">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-purple-900/60 flex items-center gap-4 relative z-10">
              <button
                onClick={() => onMemberClick('become')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Kathmandu Expo Stall</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Canton Fair Business Delegation (Phase 1 & Phase 3) */}
          <div className="bg-gradient-to-br from-[#241508] to-[#070e17] border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-amber-400 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                  Global Mega-Expo &bull; Guangzhou, China
                </span>
                <Plane className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-black text-white leading-tight">
                Canton Fair Business Delegation (Phase 1 &amp; Phase 3)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-amber-950/50 p-4 rounded-2xl border border-amber-800/40 text-xs">
                <div className="flex items-center gap-2 text-amber-200">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Delegation Dates:</div>
                    <div>Phase 1: 15–19 Oct 2026 | Phase 3: 31 Oct–4 Nov 2026</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-amber-200">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Venue:</div>
                    <div>Canton Fair Complex, Guangzhou, China</div>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Join our official Indian business delegation to the world&apos;s largest trade expo. Access verified OEM manufacturers, explore cutting-edge industrial machinery, and negotiate direct factory rates without middlemen.
              </p>

              <div className="space-y-2 pt-2 border-t border-amber-900/60">
                {[
                  'Phase 1 Focus: Electronics, Heavy Machinery, Industrial Hardware & PEB Materials',
                  'Phase 3 Focus: Textiles, Footwear, Medical Goods, Personal Care & FMCG',
                  'Full Concierge: VIP Expo Badges, Bilingual Translators & Airport Transfers',
                  'Curated Factory Visits in Guangzhou, Shenzhen, Foshan & Yiwu Industrial Hubs',
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-amber-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-amber-900/60 flex items-center gap-4 relative z-10">
              <button
                onClick={() => onMemberClick('become')}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Canton Fair Delegation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Past Exhibitions & Country Pavilions Showcase (from Events) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold text-purple-400 uppercase tracking-wider">
              GLOBAL TRACK RECORD
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Past Exhibitions &amp; Global Trade Pavilions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Explore our proven legacy of hosting high-impact international trade pavilions, buyer-seller conclaves, and industrial expos across Nepal, Thailand, China, Vietnam, and India.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Past Expos' },
              { id: 'nepal', label: 'Nepal & South Asia' },
              { id: 'thailand', label: 'Thailand & ASEAN' },
              { id: 'china', label: 'China Delegations' },
              { id: 'domestic', label: 'National Expos' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-950'
                    : 'bg-slate-800/90 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Exhibition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExhibitions.map((expo) => (
            <div
              key={expo.id}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-purple-500/70 hover:shadow-2xl hover:shadow-purple-950/30 transition-all group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={expo.image}
                    alt={expo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 bg-purple-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                    {expo.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-slate-200 text-[10px] font-bold px-2 py-0.5 rounded">
                    {expo.date}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-purple-300 font-semibold">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-purple-400" />
                    <span className="line-clamp-1">{expo.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-purple-300 transition-colors line-clamp-2">
                    {expo.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {expo.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    {expo.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onMemberClick('become')}
                  className="w-full bg-slate-800 hover:bg-purple-600 text-slate-200 hover:text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire for Similar Expo</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Complete Exhibition Support Pillars */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-extrabold text-purple-400 uppercase tracking-wider">
            END-TO-END EVENT CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Comprehensive Exhibition &amp; Stall Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Full-stack infrastructure empowering MSMEs and corporations to exhibit with maximum ROI and international visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0f1a2a] rounded-2xl border border-purple-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Country-Level Pavilions</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Curated Indian business pavilions at prestigious global trade fairs including Canton Fair (China), Thailand Industrial Fair (BITEC), and SIAL India.
            </p>
          </div>

          <div className="bg-[#0f1a2a] rounded-2xl border border-pink-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Custom Stall Fabrication</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Customized booth architecture, high-impact product display racks, digital signage, multilingual collateral, and on-site event staff.
            </p>
          </div>

          <div className="bg-[#0f1a2a] rounded-2xl border border-amber-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">B2B Buyer Matchmaking</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pre-scheduled buyer-seller meetings, VIP procurement lounges, and on-site commercial MoU signing facilitation with verified global importers.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-700 via-pink-700 to-purple-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Participate or Book an Exhibition Stall</h3>
            <p className="text-xs sm:text-sm text-purple-100 max-w-2xl">
              Elevate your brand presence, showcase your products, and network with institutional buyers at upcoming VUSF trade expos in Kathmandu, Guangzhou, Bangkok, and pan-India.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-purple-900 hover:bg-purple-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Inquire for Stall Booking
          </button>
        </div>
      </section>
    </div>
  );
};
