import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Target,
  Compass,
  Building2,
  Globe2,
  TrendingUp,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  Award,
  Zap,
  GraduationCap,
  Network,
} from 'lucide-react';

interface AboutOverviewPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const AboutOverviewPage: React.FC<AboutOverviewPageProps> = ({
  onMemberClick,
}) => {
  const missionPoints = [
    {
      title: 'Business Networking & B2B Platforms',
      text: 'Creating strong business networking and B2B platforms for entrepreneurs, MSMEs, startups, manufacturers, buyers, sellers, exporters, and investors.',
      icon: Network,
    },
    {
      title: 'National & International Markets',
      text: 'Connecting Indian businesses with national and international markets through business delegations, exhibitions, buyer–seller meets, trade fairs, factory visits, and global partnerships.',
      icon: Globe2,
    },
    {
      title: 'Women, SC/ST & Rural Entrepreneurs',
      text: 'Supporting women, SC/ST, rural, and emerging entrepreneurs through dedicated entrepreneurship development, mentorship, awareness, and market-linkage programmes.',
      icon: Users,
    },
    {
      title: 'Import, Export & Cross-Border Trade',
      text: 'Promoting import, export, international trade, and cross-border collaboration to help Indian businesses expand globally.',
      icon: TrendingUp,
    },
    {
      title: 'Universities & Industry Partnerships',
      text: 'Building partnerships with universities, industry bodies, institutions, chambers, associations, and international business networks to create meaningful opportunities for our members.',
      icon: GraduationCap,
    },
    {
      title: 'Government Schemes & Incubation Access',
      text: 'Facilitating access to government schemes, incubation, skill development, business guidance, technology, finance, and professional expertise.',
      icon: ShieldCheck,
    },
    {
      title: 'SHGs, FPOs & Grassroots Enterprise',
      text: 'Encouraging grassroots entrepreneurship by connecting SHGs, FPOs, rural producers, and local enterprises with wider business and market opportunities.',
      icon: HeartHandshake,
    },
    {
      title: 'Learn, Connect, Collaborate, and Grow',
      text: 'Creating an ecosystem where entrepreneurs can Learn, Connect, Collaborate, and Grow.',
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* 1. Hero Showcase */}
      <section className="relative bg-[#071120] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4 tracking-wide uppercase">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-300">About Foundation</span>
            <span>/</span>
            <span className="text-amber-400">Overview &amp; Mission</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>FOUNDED IN 2021 &bull; NAMASTE INDIA GROUP</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1]">
                Empowering Indian Industry, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                  MSMEs &amp; Global Trade
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-normal">
                Vishwa Udyam Sahayta Foundation is a premier non-governmental, non-profit organization serving as an influential voice for Indian enterprise, fostering growth, innovation, and global competitiveness.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-950/40 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Join Foundation Network</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/about/president"
                  className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-white/10 transition-all"
                >
                  Presidential Desk &rarr;
                </Link>
                <Link
                  to="/about/board"
                  className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-white/10 transition-all"
                >
                  Board of Directors &rarr;
                </Link>
              </div>
            </div>

            {/* Quick Stat Counter Cards */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              {[
                { label: 'Founded In', value: '2021', sub: 'Navi Mumbai, Maharashtra' },
                { label: 'MSME Connected', value: '10,000+', sub: 'Enterprises & Startups' },
                { label: 'Trade Corridors', value: '12+ Countries', sub: 'Active Global Corridors' },
                { label: 'Capital Subsidies', value: 'Up to 35%', sub: 'PMEGP / CMEGP Realization' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-5 rounded-2xl space-y-1 hover:border-amber-500/40 transition-colors"
                >
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-[11px] text-slate-400">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative & Foundation Story */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-10 lg:p-12 space-y-10">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[#c2410c] text-xs font-extrabold uppercase tracking-widest">
              <Building2 className="w-4 h-4" />
              <span>THE STORY OF VISHWA UDYAM SAHAYTA FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              A Dynamic Catalyst for India&apos;s Industrial &amp; Entrepreneurial Renaissance
            </h2>
          </div>

          {/* Narrative Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed border-l-4 border-[#c2410c] pl-4 italic bg-orange-50/40 py-2 rounded-r-xl">
                &ldquo;Founded in 2021, Vishwa Udyam Sahayta Foundation has rapidly emerged as one of India&apos;s promising and dynamic business development organizations, contributing significantly to the nation&apos;s entrepreneurial growth, industrial advancement, and global economic presence.&rdquo;
              </p>

              <p>
                Vishwa Udyam Sahayta Foundation is a non-governmental, non-profit organization committed to empowering businesses, entrepreneurs, startups, MSMEs, and industry leaders through strategic support, collaboration, and innovation-driven initiatives. The Foundation serves as a strong and influential voice for Indian industry by fostering meaningful dialogue between businesses, policymakers, institutions, and society.
              </p>

              <p>
                With an expanding network of entrepreneurs, industry professionals, trade associations, and corporate partners, the Foundation creates a powerful ecosystem that encourages growth, knowledge exchange, and sustainable development. It acts as a premier platform for networking, partnerships, policy advocacy, and business opportunities across multiple sectors and regions.
              </p>

              <p>
                Vishwa Udyam Sahayta Foundation bridges the gap between industry and government by supporting initiatives that strengthen India&apos;s economic ecosystem and enhance global competitiveness. Guided by visionary leaders, professionals, and experts, the organization aligns its mission with India&apos;s long-term development goals and aspirations for inclusive growth.
              </p>

              <p>
                Driven by the values of sustainability, entrepreneurship, innovation, empowerment, and digital transformation, the Foundation actively promotes socio-economic progress through impactful programs, business delegations, trade initiatives, skill development activities, and strategic collaborations. Working closely with government bodies, regulatory authorities, industry stakeholders, and international networks, the Foundation contributes toward policy awareness, business facilitation, and economic empowerment.
              </p>

              <p>
                Beyond industry development, Vishwa Udyam Sahayta Foundation is deeply committed to social impact and nation-building. Through its community-focused initiatives in education, healthcare, women empowerment, sustainability, youth development, and entrepreneurship, the Foundation continues to create meaningful opportunities and positive change for society.
              </p>

              <p className="font-bold text-slate-900 pt-3 border-t border-slate-100 text-base">
                With a forward-looking vision, strong leadership, and a commitment to excellence, Vishwa Udyam Sahayta Foundation is dedicated to building a globally connected, self-reliant, and empowered business community for the future of India.
              </p>
            </div>

            {/* Side Highlights Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                  <ShieldCheck className="w-5 h-5 text-[#c2410c]" />
                  <span>Institutional Framework</span>
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Registered Section 8 Non-Profit',
                      desc: 'Incorporated under the Companies Act, Ministry of Corporate Affairs, Government of India for non-commercial industrial facilitation.',
                    },
                    {
                      title: 'National & Global Presence',
                      desc: 'Headquartered in Navi Mumbai with active international desks across 12+ global trade corridors.',
                    },
                    {
                      title: 'Multi-Stakeholder Bridge',
                      desc: 'Connecting grassroots entrepreneurs with banking institutions, ministries, and overseas buyers.',
                    },
                    {
                      title: 'Social Impact Charter',
                      desc: 'Stree Shakti women cells, education grants, and healthcare outreach.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{item.title}</div>
                        <div className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nation Building Highlight */}
              <div className="bg-gradient-to-br from-[#0c1b33] to-[#1e293b] text-white p-6 rounded-2xl space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Nation-Building Mission</span>
                </div>
                <h4 className="text-base font-bold leading-snug">
                  Inclusive Growth &amp; Community Transformation
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated to uplifting marginalized founders, women artisans, and university incubators across Maharashtra and pan-India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Vision & Our Mission & Our Purpose */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Vision Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#c2410c] flex items-center justify-center shadow-xs">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#c2410c] block">
                Long-Term Aspiration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Our Vision
              </h2>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50/80 via-amber-50/40 to-transparent p-6 sm:p-8 rounded-2xl border-l-4 border-[#c2410c] space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
            <p>
              To build <strong>Namaste India Group into a trusted global business ecosystem that connects, empowers, and enables Indian entrepreneurs, MSMEs, startups, women, rural enterprises, and emerging business leaders to grow beyond boundaries.</strong>
            </p>
            <p>
              We envision an India where every entrepreneur — regardless of location, background, or scale — has access to the <strong>right knowledge, network, market, mentorship, resources, and global opportunities</strong> needed to transform an idea into a sustainable and successful enterprise.
            </p>
            <p>
              Our long-term vision is to create strong bridges between <strong>India and the world</strong>, enabling Indian businesses to explore international markets while bringing global opportunities, partnerships, technology, investment, and knowledge closer to Indian entrepreneurs.
            </p>
            <div className="pt-2 text-base sm:text-lg font-black text-[#c2410c] tracking-tight">
              From Local Potential to Global Possibilities.
            </div>
          </div>
        </div>

        {/* Mission Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 block">
                  Action &amp; Execution
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Our Mission
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-800 font-bold leading-relaxed bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200">
              Our mission is to <strong>empower entrepreneurs and strengthen businesses by creating an integrated platform for knowledge, connections, market access, and growth opportunities.</strong>
            </p>

            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
              We work towards this mission by:
            </p>
          </div>

          {/* 8 Action Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {missionPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all space-y-2 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Purpose Box */}
        <div className="bg-gradient-to-br from-[#0c1b33] via-[#112240] to-[#1e293b] rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-6 relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300 uppercase tracking-widest">
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Our Purpose</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
              &ldquo;We don&apos;t just connect businesses — <br className="hidden sm:inline" />
              we create pathways for entrepreneurs to grow.&rdquo;
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              From a woman starting her first enterprise in a village to an MSME exploring its first international market, our purpose is to ensure that entrepreneurs have a platform that can support them at every stage of their journey.
            </p>

            <div className="pt-4 border-t border-slate-700/80">
              <h3 className="text-lg sm:text-xl font-black text-amber-400 tracking-tight">
                Namaste India Group
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                Connecting Entrepreneurs • Creating Opportunities • Building Global Businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic 6 Values & Pillars */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-[#c2410c] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>CORE VALUES IN ACTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            Driving India&apos;s Economic Ecosystem Forward
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Built on core foundational pillars that support businesses at every growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: 'Entrepreneurship & MSME Scale',
              desc: 'From initial registration to DPR project reports, bank funding, and margin money subsidy realizations.',
            },
            {
              icon: Building2,
              title: 'Industrial Infrastructure',
              desc: 'Master planning, PEB steel structure construction, CETP facilities, and warehouse logistics clusters.',
            },
            {
              icon: Globe2,
              title: 'Global Trade & Corridors',
              desc: 'Connecting manufacturers with international buyers and business delegations across 12+ countries.',
            },
            {
              icon: Users,
              title: 'Policy Advocacy & Governance',
              desc: 'Serving as an influential bridge between industrial stakeholders, regulatory bodies, and policymakers.',
            },
            {
              icon: Sparkles,
              title: 'Innovation & Digital Transformation',
              desc: 'Modernizing legacy MSME operations through digital matchmaking, GeM onboarding, and tech adoption.',
            },
            {
              icon: HeartHandshake,
              title: 'Sustainability & Social Impact',
              desc: 'Stree Shakti women empowerment cells, youth skill developments, healthcare, and green manufacturing.',
            },
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#c2410c] transition-all group space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#c2410c] group-hover:bg-[#c2410c] group-hover:text-white transition-colors flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-[#0c1b33] via-[#112240] to-[#1e293b] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Ready to Expand Your Enterprise?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black leading-tight">
              Collaborate with Vishwa Udyam Sahayta Foundation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect with our MSME advisory cell, explore bilateral export corridors, or join our national and international network.
            </p>
          </div>

          <div className="flex flex-wrap gap-3.5 shrink-0">
            <button
              onClick={() => onMemberClick('become')}
              className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Join Foundation Today
            </button>
            <Link
              to="/about/president"
              className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-white/15 transition-all whitespace-nowrap"
            >
              Connect with President Desk &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
