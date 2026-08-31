import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Users,
  Sprout,
  Heart,
  FileCheck,
  Building2,
  Trees,
  Award,
  BadgeCheck,
  Layers,
  Activity,
  Calendar,
  MapPin,
} from 'lucide-react';

interface CSRInitiativePageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const CSRInitiativePage: React.FC<CSRInitiativePageProps> = ({ onMemberClick }) => {
  const csrStats = [
    {
      label: 'Beneficiaries Reached',
      value: '5,000+ Lives',
      sub: 'Directly impacted across rural & industrial belts',
      color: 'text-emerald-400',
    },
    {
      label: 'Sanitary Pad Distribution',
      value: '1,00,000+ Pads',
      sub: 'Organic, biodegradable hygiene kits distributed',
      color: 'text-rose-400',
    },
    {
      label: 'Tree & Sapling Distribution',
      value: '1,00,000+ Trees',
      sub: 'Afforestation & rural agro-forestry drive',
      color: 'text-emerald-300',
    },
    {
      label: 'Ek Gao – Ek Didi Mission',
      value: 'Grassroots Model',
      sub: 'Village-level women leadership & SHG empowerment',
      color: 'text-amber-300',
    },
  ];

  const flagshipPrograms = [
    {
      id: 'sanitary-pads',
      number: '01',
      title: '1 Lakh Organic Sanitary Pad Distribution Drive',
      badge: 'HEALTH & DIGNITY',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      icon: Heart,
      iconBg: 'bg-rose-500/20 text-rose-400',
      tagline: 'Combating Period Poverty & Distributing Biodegradable Organic Sanitary Pads',
      desc: 'Large-scale initiative providing over 1 Lakh chemical-free, biodegradable organic sanitary pads to schoolgirls, adolescent girls, and underprivileged women across rural schools, Zilla Parishad institutions, and tribal settlements.',
      highlights: [
        'Free distribution of certified organic, chemical-free sanitary pads',
        'Direct supply across rural schools, colleges, and tribal hamlets',
        'Promotion of eco-friendly, biodegradable menstrual waste disposal',
        'Dignity-first kits distributed with zero social stigma',
      ],
      image: '/timeline_photos/sanitary pad/IMG-20260206-WA0088.jpg',
    },
    {
      id: 'tree-distribution',
      number: '02',
      title: '1 Lakh Tree & Sapling Distribution Mission',
      badge: 'GREEN AFFORESTATION',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: Trees,
      iconBg: 'bg-emerald-500/20 text-emerald-400',
      tagline: 'Mass Afforestation, Ecological Balance & Rural Agro-Forestry',
      desc: 'Mass environmental restoration and agro-forestry campaign distributing over 1 Lakh native fruit-bearing, medicinal, and shade trees to farmers, rural households, schools, and industrial green buffers to combat desertification and build sustainable green corridors.',
      highlights: [
        'Distribution of native drought-resistant & fruit-bearing saplings',
        'Green belt development across industrial corridors and MSME parks',
        'Farmer livelihood support through agro-forestry & horticulture trees',
        'Student-led environmental stewardship drives in educational institutes',
      ],
      image: '/timeline_photos/tree plantation/IMG_20220809_143825_867.webp',
    },
    {
      id: 'hygiene-awareness',
      number: '03',
      title: 'Women Hygiene & Menstrual Health Awareness Program',
      badge: 'HEALTHCARE EDUCATION',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: Activity,
      iconBg: 'bg-cyan-500/20 text-cyan-400',
      tagline: 'Doctor-Led Educational Workshops, Wellness Counseling & Stigma Eradication',
      desc: 'Dedicated community health outreach program organizing interactive seminars, expert doctor-led counseling, and menstrual hygiene masterclasses. Educating young girls and mothers on reproductive health, infection prevention, and positive hygiene practices.',
      highlights: [
        'Interactive medical expert talks in rural schools & colleges',
        'Breaking cultural taboos and destigmatizing menstrual health discussions',
        'Guidance on reproductive hygiene, nutrition, and wellness practices',
        'Empowering mothers and teachers as primary health mentors',
      ],
      image: '/timeline_photos/sanitary pad/IMG-20260206-WA0087.jpg',
    },
    {
      id: 'ek-gao-ek-didi',
      number: '04',
      title: 'Ek Gao – Ek Didi (One Village – One Didi) Mission',
      badge: 'FLAGSHIP SOCIAL MODEL',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: Users,
      iconBg: 'bg-amber-500/20 text-amber-400',
      tagline: 'Empowering Grassroots Women Leadership & Transforming Rural Economies',
      desc: 'Groundbreaking socioeconomic empowerment model establishing a dedicated, trained "Didi" leader in every village. These leaders mentor Self-Help Groups (SHGs), distribute hygiene kits, facilitate micro-enterprise incubation, and connect villagers with government subsidy schemes.',
      highlights: [
        'Appointing and training a designated woman leader ("Didi") in every village',
        'End-to-end handholding of women Self-Help Groups (SHGs) for micro-enterprise',
        'Grassroots execution of sanitary distribution, financial literacy & health camps',
        'Bridging rural families directly with PMEGP, Stand-Up India & welfare schemes',
      ],
      image: '/timeline_photos/ek gao ek didi/IMG-20260206-WA0079.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#070e1a] text-slate-100 selection:bg-emerald-500 selection:text-white font-sans">
      {/* 1. CSR Impact Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-600/20 via-teal-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <span className="text-emerald-400">CSR Initiatives</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>SECTION 8 CHARTER &bull; 12A &amp; 80G TAX EXEMPTION &bull; MCA CSR-1 VERIFIED</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Corporate Social Responsibility: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                  Empowering Communities &amp; Nation Building
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Committed to holistic socioeconomic transformation and environmental sustainability. Through flagship campaigns like <strong className="text-white font-semibold">Ek Gao – Ek Didi</strong>, <strong className="text-white font-semibold">1 Lakh Organic Sanitary Pad Distribution</strong>, and <strong className="text-white font-semibold">1 Lakh Tree Plantation</strong>, we partner with corporates and PSUs to deliver transparent, audited, high-impact CSR programs.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Partner for Corporate CSR</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#flagship-campaigns"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Explore 4 Flagship Campaigns &darr;</span>
                </a>
              </div>
            </div>

            {/* Compliance & Fiduciary Box */}
            <div className="lg:col-span-4 bg-[#0f172a]/95 border-2 border-emerald-500/40 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>CSR Fiduciary Standards</span>
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Legal Structure:</span>
                  <span className="font-bold text-white">Section 8 Non-Profit</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Tax Exemption:</span>
                  <span className="font-bold text-emerald-400">12A &amp; 80G Certified</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">MCA CSR-1 Registry:</span>
                  <span className="font-bold text-amber-300">Govt Verified</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Beneficiaries Reached:</span>
                  <span className="font-bold text-emerald-300">5,000+ Lives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Impact Metrics Row */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {csrStats.map((st, idx) => (
            <div
              key={idx}
              className="bg-[#0e1c2e] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-2 hover:border-emerald-500/50 transition-all"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{st.label}</span>
              <div className={`text-2xl sm:text-3xl font-black ${st.color}`}>{st.value}</div>
              <p className="text-[11px] text-slate-300 leading-tight font-light">{st.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Four Core Flagship CSR Programs */}
      <section id="flagship-campaigns" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>GROUNDED SOCIAL INTERVENTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Our 4 Flagship CSR Campaigns
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Targeted community initiatives designed to eradicate period poverty, green our ecosystem, educate young women, and nurture village-level leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {flagshipPrograms.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className="bg-[#0b1728] rounded-3xl border border-slate-800 overflow-hidden shadow-2xl hover:border-emerald-500/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="h-56 relative overflow-hidden bg-slate-950">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/timeline_photos/start namste india/IMG-20260206-WA0035.jpeg';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1728] via-black/40 to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-black/70 backdrop-blur-xs text-white text-xs font-black uppercase px-2.5 py-1 rounded-lg border border-slate-700">
                        #{prog.number}
                      </span>
                      <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-lg border ${prog.badgeColor}`}>
                        {prog.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${prog.iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors">
                        {prog.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-emerald-400">
                      {prog.tagline}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {prog.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Core Program Pillars:
                      </span>
                      <div className="grid grid-cols-1 gap-1.5">
                        {prog.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 bg-[#081220] border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">12A &amp; 80G Tax Deductible</span>
                  <button
                    onClick={() => onMemberClick('become')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Support this Initiative</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Bottom Corporate Partner CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-[#0c1b33] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Deploy Corporate CSR Funds with 100% Transparency</h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl font-light">
              Partner with Vishwa Udyam Sahayta Foundation for compliant, audited, and outcome-driven CSR program execution with 80G tax deductions and periodic impact reports.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-emerald-950 hover:bg-emerald-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Initiate CSR Partnership
          </button>
        </div>
      </section>
    </div>
  );
};
