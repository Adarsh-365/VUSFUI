import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Briefcase,
  ChevronRight,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
} from 'lucide-react';
import { OFFICE_BEARERS_DATA } from '../data/ficciData';
import { StrategicCollaborations } from '../components/StrategicCollaborations';
import { OfficeBearer } from '../types';

interface BoardOfDirectorsPageProps {
  onSelectBearer?: (bearer: OfficeBearer) => void;
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const BoardOfDirectorsPage: React.FC<BoardOfDirectorsPageProps> = ({
  onSelectBearer,
  onMemberClick,
}) => {
  const founder =
    OFFICE_BEARERS_DATA.find((b) => b.roleCategory === 'founder') ||
    OFFICE_BEARERS_DATA[0];

  const executiveLeaders = OFFICE_BEARERS_DATA.filter(
    (b) => b.id !== founder.id
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* 1. Corporate Governance Header */}
      <section className="relative bg-gradient-to-b from-[#091528] via-[#0e1d35] to-[#12233f] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4 tracking-wide uppercase">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/about/overview" className="hover:underline text-slate-300">About Foundation</Link>
            <span>/</span>
            <span className="text-amber-400">Our Leadership</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/30 text-amber-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
              <Users className="w-4 h-4 text-amber-400" />
              <span>EXECUTIVE GOVERNANCE &bull; BOARD OF TRUSTEES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Leadership <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                &amp; Governance
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Eminent industry veterans, infrastructure architects, and trade leaders providing fiduciary stewardship and strategic governance to Vishwa Udyam Sahayta Foundation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Leadership Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="space-y-10">
          {/* Institutional Introduction Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c2410c]" />
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight uppercase">
                  Our Leadership
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
                Visionary leadership driving entrepreneurship, MSME development and global business opportunities.
              </p>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Leadership Council
              </span>
            </div>
          </div>

          {/* 3. Founder & President — Featured Leadership Card */}
          <div className="bg-white rounded-3xl border-2 border-amber-200/80 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Top gold accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Portrait & Identifiers */}
              <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
                <div className="relative w-full max-w-[300px] sm:max-w-[340px]">
                  <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden border-2 border-amber-500/80 ring-8 ring-amber-100/70 shadow-xl bg-slate-100">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-2.5 rounded-xl shadow-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="inline-block bg-orange-100 text-[#c2410c] text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
                    {founder.designation}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold">
                    {founder.company}
                  </p>
                </div>
              </div>

              {/* Right Content, Bio & Focus Areas */}
              <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-200/80 lg:pl-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#c2410c]">
                    <Award className="w-4 h-4 text-[#c2410c]" />
                    <span>Founder’s Leadership Address</span>
                  </div>

                  {/* Multi-paragraph Founder's Address */}
                  <div className="space-y-3.5 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal">
                    <p>
                      As the Founder &amp; President, she brings <strong className="text-slate-900 font-semibold">9+ years of experience</strong> in entrepreneurship, international trade, import-export, business networking, and MSME ecosystem development.
                    </p>
                    <p>
                      Holding a <strong className="text-slate-900 font-semibold">Master of Technology (M.Tech) in Computer Science &amp; Engineering</strong>, with a background in Information Technology and Computer Engineering, she brings a technology-driven and structured approach to entrepreneurship and ecosystem development.
                    </p>
                    <p>
                      Over the years, she has built a strong international business network across <strong className="text-[#c2410c] font-bold">20+ countries</strong>, connecting Indian entrepreneurs, MSMEs, industry leaders, institutions, and global business communities.
                    </p>
                    <p>
                      Through various initiatives and programmes, she has contributed to supporting and connecting <strong className="text-[#c2410c] font-bold">10,000+ MSMEs</strong>, with a strong focus on entrepreneurship development, market access, government initiatives, business networking, import-export, and international trade opportunities.
                    </p>
                    <p>
                      Her leadership is driven by a vision to build an inclusive and opportunity-driven ecosystem where MSMEs, startups, women entrepreneurs, SC/ST entrepreneurs, and emerging business leaders can access the right knowledge, networks, markets, and platforms for sustainable growth.
                    </p>
                    <div className="p-3.5 bg-orange-50/70 border-l-4 border-[#c2410c] rounded-r-xl text-xs sm:text-sm font-semibold text-slate-800 italic">
                      &ldquo;Her mission is to strengthen Indian entrepreneurship and enable businesses to connect locally, expand nationally, and grow globally.&rdquo;
                    </div>
                  </div>
                </div>

                {/* Structured Leadership Focus Areas */}
                {founder.leadershipAreas && founder.leadershipAreas.length > 0 && (
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                      Key Leadership Focus
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {founder.leadershipAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-orange-50 text-orange-950 border border-orange-200/70 shadow-2xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]" />
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Links & Social Channels */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/about/president"
                    className="inline-flex items-center gap-2 bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Founder&apos;s Desk</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#0077b5] hover:bg-[#005f93] text-white text-xs sm:text-sm font-bold px-3.5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                      title="Connect on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                  )}

                  {founder.instagram && (
                    <a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white text-xs sm:text-sm font-bold px-3.5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                      title="Follow on Instagram (@unstoppable.pragati)"
                    >
                      <Instagram className="w-4 h-4" />
                      <span className="hidden sm:inline">Instagram</span>
                    </a>
                  )}

                  {founder.facebook && (
                    <a
                      href={founder.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs sm:text-sm font-bold px-3.5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                      title="Connect on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                      <span className="hidden sm:inline">Facebook</span>
                    </a>
                  )}

                  {founder.whatsapp && (
                    <a
                      href="https://wa.me/917030588914"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-3.5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  )}

                  {founder.email && (
                    <a
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs sm:text-sm font-bold px-3.5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                      title={`Send Email to ${founder.email}`}
                    >
                      <Mail className="w-4 h-4" />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Section Divider & Executive Leadership Title */}
          <div className="pt-8 space-y-2">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                <Briefcase className="w-4 h-4 text-[#c2410c]" />
                <span>Executive Leadership</span>
              </div>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            <p className="text-center text-xs text-slate-500">
              Senior directors driving daily operations, bilateral desks, and enterprise infrastructure
            </p>
          </div>

          {/* 5. Executive Leadership Grid (3 Equal Large-Portrait Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveLeaders.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top accent */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-slate-200 group-hover:bg-[#c2410c] transition-colors duration-300" />

                <div className="space-y-4">
                  {/* Large High-Impact Portrait */}
                  <div className="w-full aspect-[4/4.5] rounded-2xl overflow-hidden border-2 border-slate-200 group-hover:border-[#c2410c] shadow-md bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        if (member.id === 'vignesh-j') {
                          (e.target as HTMLImageElement).src = '/members/vighnesh.jpeg';
                        }
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Identifiers & LinkedIn */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block bg-orange-100 text-[#c2410c] text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {member.designation}
                      </span>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#0077b5] hover:text-white bg-blue-50 hover:bg-[#0077b5] border border-blue-200/60 text-[11px] font-bold px-2.5 py-0.5 rounded-full transition-all shadow-2xs"
                          title={`Connect with ${member.name} on LinkedIn`}
                        >
                          <Linkedin className="w-3 h-3" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#c2410c] transition-colors leading-snug pt-0.5">
                      {member.name}
                    </h3>
                    {member.company && (
                      <p className="text-xs text-slate-500 font-medium line-clamp-1">
                        {member.company}
                      </p>
                    )}
                  </div>

                  {/* Subtle Divider */}
                  <div className="border-t border-slate-100" />

                  {/* Institutional Biography */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Structured Leadership Focus Areas */}
                  {member.leadershipAreas && member.leadershipAreas.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Leadership Focus
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.leadershipAreas.map((area, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 group-hover:bg-orange-50 group-hover:text-orange-950 transition-colors"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Institutional Collaborations & Strategic Alliances */}
      <StrategicCollaborations />

      {/* 7. Bottom Advisory Callout */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#0c1b33] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-2xl font-bold">Invite Board Speakers or Propose a Partnership</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Our directors actively participate in policy conclaves, bilateral trade roundtables, and university mentorship summits nationwide.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onMemberClick('become')}
              className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Contact Board Secretariat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
