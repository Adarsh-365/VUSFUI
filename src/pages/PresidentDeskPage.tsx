import React from 'react';
import { Link } from 'react-router-dom';
import {
  Quote,
  Award,
  Sparkles,
  Building2,
  Globe2,
  TrendingUp,
  HeartHandshake,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Briefcase,
  Users,
  Zap,
  GraduationCap,
  Laptop,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
} from 'lucide-react';
import { OFFICE_BEARERS_DATA } from '../data/vusfData';

interface PresidentDeskPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const PresidentDeskPage: React.FC<PresidentDeskPageProps> = ({
  onMemberClick,
}) => {
  const president =
    OFFICE_BEARERS_DATA.find((b) => b.id === 'pragati-tayde') ||
    OFFICE_BEARERS_DATA[0];

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-800">
      {/* 1. Executive Suite Header */}
      <section className="relative bg-gradient-to-b from-[#141d2e] via-[#0d1624] to-[#080d16] text-white pt-16 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-amber-500/20">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4 tracking-wide uppercase">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/about/overview" className="hover:underline text-slate-300">About Foundation</Link>
            <span>/</span>
            <span className="text-amber-400">Founder &amp; President Desk</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest">
              <Award className="w-4 h-4 text-amber-400" />
              <span>FOUNDER&apos;S ADDRESS &bull; NAMASTE INDIA GROUP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              From the Desk of the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-500">
                Founder &amp; President
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              A personal message from Pragati Tayde (M.Tech in CSE, IT &amp; Computer Engineer with 9+ years of industry experience) on creating opportunities for every entrepreneur, bridging grassroots potential with global markets, and building sustainable businesses.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Executive Portrait & Presidential Letter Container */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Executive Card */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-[90px]">
            <div className="bg-white rounded-3xl border border-amber-200/80 shadow-xl p-6 sm:p-7 space-y-6 text-center sm:text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full pointer-events-none" />

              {/* Photo Frame */}
              <div className="relative w-full max-w-[280px] aspect-[3/4] mx-auto rounded-2xl overflow-hidden border-4 border-[#c2410c] shadow-xl group bg-slate-100">
                <img
                  src={president.image}
                  alt={president.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white text-center">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
                    Founder &amp; President
                  </span>
                </div>
              </div>

              {/* Identity Details */}
              <div className="space-y-1 text-center">
                <h2 className="text-2xl font-black text-slate-900">{president.name}</h2>
                <p className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
                  Founder &amp; President
                </p>
                <p className="text-xs text-slate-500 font-semibold">Namaste India Group</p>
                <p className="text-[11px] text-slate-400">Vishwa Udyam Sahayta Foundation</p>
              </div>

              {/* Professional & Academic Background Credentials */}
              <div className="bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-slate-50 border border-amber-200/80 rounded-2xl p-4 text-xs space-y-2.5 text-left shadow-2xs">
                <div className="font-extrabold text-slate-900 flex items-center gap-1.5 border-b border-amber-200/60 pb-2">
                  <GraduationCap className="w-4 h-4 text-[#c2410c]" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                    Professional Credentials
                  </span>
                </div>
                <div className="space-y-2 text-slate-700 text-[11.5px]">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c] mt-1.5 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900">9+ Years Experience</span>
                      <p className="text-[10.5px] text-slate-500">Extensive cross-industry leadership &amp; enterprise mentorship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c] mt-1.5 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900">M.Tech in CSE</span>
                      <p className="text-[10.5px] text-slate-500">Master of Technology in Computer Science &amp; Engineering</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c] mt-1.5 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900">IT &amp; Computer Engineer</span>
                      <p className="text-[10.5px] text-slate-500">Engineering acumen driving digital &amp; industrial innovation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact & Social Connect */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-3 text-left">
                <div className="font-extrabold text-slate-900 flex items-center gap-1.5 border-b border-slate-200 pb-2">
                  <Mail className="w-3.5 h-3.5 text-[#c2410c]" />
                  <span className="uppercase tracking-wider text-[11px]">Direct Secretariat Contact</span>
                </div>
                
                <div className="space-y-2 text-[11.5px]">
                  <a
                    href="https://wa.me/917030588914"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-emerald-800 hover:text-emerald-950 font-bold bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 p-2.5 rounded-xl transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">WhatsApp: +91 7030588914</span>
                  </a>

                  <a
                    href="mailto:taydepra@gmail.com"
                    className="flex items-center gap-2.5 text-slate-800 hover:text-[#c2410c] font-semibold bg-white hover:bg-orange-50/50 border border-slate-200 p-2.5 rounded-xl transition-all"
                  >
                    <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="truncate">taydepra@gmail.com</span>
                  </a>
                </div>

                {/* Social Connect Icons Grid */}
                <div className="pt-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Official Social Profiles
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href="https://www.linkedin.com/in/pragati-tayde/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5] text-[#0077b5] hover:text-white border border-[#0077b5]/20 transition-all font-bold text-[10.5px] gap-1"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://www.instagram.com/unstoppable.pragati/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-pink-50 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-rose-600 hover:text-white border border-rose-200/60 transition-all font-bold text-[10.5px] gap-1"
                      title="Instagram: @unstoppable.pragati"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.facebook.com/tayde.pragati"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-blue-50 hover:bg-[#1877f2] text-[#1877f2] hover:text-white border border-blue-200/60 transition-all font-bold text-[10.5px] gap-1"
                      title="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Executive Portfolios */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2.5 text-left">
                <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#c2410c]" />
                  <span>Key Leadership Pillars:</span>
                </div>
                <div className="space-y-1.5 text-slate-700 pl-1">
                  {[
                    'MSME Empowerment & Development',
                    'Entrepreneur Empowerment',
                    'Global Business Connectivity',
                    'Inclusive Entrepreneurship',
                    'Market Access & Business Growth',
                    'Import & Export Development',
                    'Knowledge & Skill Development',
                    'Strategic Partnerships',
                    'Innovation & Sustainable Growth',
                    'Community & Nation Building',
                  ].map((pillar, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c] shrink-0" />
                      <span className="font-medium text-slate-800 text-[11px] leading-tight">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Appointment Button */}
              <button
                onClick={() => onMemberClick('become')}
                className="w-full bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Connect with President Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Founder's Letter */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 space-y-8 relative">
              {/* Header Letterhead */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div className="flex items-center gap-2 text-[#c2410c]">
                  <Quote className="w-7 h-7 opacity-50" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
                    Namaste India Group &bull; VUSF Secretariat
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  Official Communication
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Founder&apos;s Message
                </h2>
                <p className="text-base sm:text-lg font-bold text-[#c2410c]">
                  Dear Members, Entrepreneurs, Partners and Well-Wishers,
                </p>
              </div>

              {/* Letter Paragraphs */}
              <div className="space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
                <p className="font-extrabold text-slate-900 text-lg sm:text-xl">
                  Namaste!
                </p>

                <p>
                  When we started <strong>Namaste India Group</strong>, we began with a simple belief — <strong>every entrepreneur deserves an opportunity to grow.</strong>
                </p>

                <p>
                  India is filled with talented entrepreneurs, MSMEs, women business owners, startups, manufacturers, rural enterprises, and young people with powerful ideas. Very often, what they need is not just funding, but the <strong>right guidance, right connections, right knowledge, and right platform at the right time.</strong>
                </p>

                <p className="text-slate-900 font-semibold text-base sm:text-lg border-l-4 border-[#c2410c] pl-4 italic bg-orange-50/50 py-3 rounded-r-xl">
                  Namaste India Group was created to become that bridge.
                </p>

                <p>
                  Our journey is focused on bringing entrepreneurs together and connecting them with <strong>business networks, government opportunities, institutions, markets, mentors, buyers, sellers, investors, and international opportunities.</strong>
                </p>

                <p>
                  From organizing business networking programmes and entrepreneurship initiatives to participating in international exhibitions, buyer–seller meets and business delegations, we continue to expand our ecosystem beyond borders.
                </p>

                <p>
                  Through our initiatives, we are particularly committed to creating opportunities for <strong>women entrepreneurs, SC/ST entrepreneurs, MSMEs, startups, rural entrepreneurs, SHGs, FPOs, manufacturers, exporters, importers, and the next generation of business leaders.</strong>
                </p>

                <div className="p-6 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border-l-4 border-[#c2410c] rounded-r-2xl space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#c2410c]">
                    Our Greater Vision
                  </div>
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                    &ldquo;We want to build an ecosystem where one connection can become a collaboration, one opportunity can become a successful enterprise, and one entrepreneur&apos;s growth can create opportunities for many others.&rdquo;
                  </p>
                </div>

                <p>
                  As Founder, I am grateful to every member, institution, partner, mentor, government representative, industry leader, and team member who has trusted and supported this journey.
                </p>

                <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-2xl space-y-2.5 shadow-md">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    A Message to Every Namaste India Member
                  </span>
                  <p className="text-base sm:text-lg font-extrabold text-amber-300 leading-relaxed">
                    &ldquo;Dream bigger. Explore beyond boundaries. Build meaningful relationships. Keep learning. Keep growing.&rdquo;
                  </p>
                </div>

                <p>
                  Wherever your business journey begins — from a village, a small office, a startup idea, or an established enterprise — we want Namaste India to be a platform that helps you move forward.
                </p>

                <p>
                  Together, we can connect <strong>India&apos;s entrepreneurial potential with opportunities across the world.</strong>
                </p>

                <p className="font-semibold text-slate-900">
                  The journey has only begun, and there is much more to build together.
                </p>

                <div className="text-base sm:text-lg font-black text-[#c2410c] tracking-tight pt-2">
                  Namaste India — From Local Potential to Global Possibilities. 🇮🇳🌏
                </div>
              </div>

              {/* Formal Signature Block */}
              <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-1.5">With gratitude and best wishes,</p>
                  <div className="font-extrabold text-slate-900 text-lg">Pragati Tayde</div>
                  <div className="text-xs font-bold text-slate-700">M.Tech (CSE) &bull; IT &amp; Computer Engineer (9+ Yrs Exp)</div>
                  <div className="text-xs font-bold text-[#c2410c] mt-0.5">Founder &amp; President</div>
                  <div className="text-xs font-bold text-slate-700">Namaste India Group</div>
                  <div className="text-[11px] text-slate-400">Vishwa Udyam Sahayta Foundation</div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/about/overview"
                    className="border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
                  >
                    Vision &amp; Mission &rarr;
                  </Link>
                  <Link
                    to="/about/board"
                    className="border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
                  >
                    Board of Directors &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3. Key Leadership Pillars Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#c2410c]">
            FOUNDER&apos;S STRATEGIC ROADMAP
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Key Leadership Pillars
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Core principles guiding our ecosystem development and entrepreneurship acceleration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {[
            {
              title: 'MSME Empowerment & Development',
              desc: 'Institutional industrial guidance, PMEGP/CMEGP margin money subsidies, and bank-ready DPR formulation.',
              icon: Building2,
            },
            {
              title: 'Entrepreneur Empowerment',
              desc: 'Hands-on mentorship, business guidance, credit linkage, and single-window facilitation for emerging founders.',
              icon: Zap,
            },
            {
              title: 'Global Business Connectivity',
              desc: 'Cross-border trade corridors, international delegations, and bilateral B2B buyer-seller matchmaking.',
              icon: Globe2,
            },
            {
              title: 'Inclusive Entrepreneurship',
              desc: 'Dedicated wings for women founders (Stree Shakti), SC/ST entrepreneurs, and grassroots makers.',
              icon: Users,
            },
            {
              title: 'Market Access & Business Growth',
              desc: 'Expanding enterprise reach through national trade fairs, retail distribution, and procurement networks.',
              icon: TrendingUp,
            },
            {
              title: 'Import & Export Development',
              desc: 'Facilitating international trade, export compliance, factory visits, and global sourcing corridors.',
              icon: Award,
            },
            {
              title: 'Knowledge & Skill Development',
              desc: 'Industry-oriented masterclasses, language training, digital marketing, and management development.',
              icon: ShieldCheck,
            },
            {
              title: 'Strategic Partnerships',
              desc: 'Collaborations with universities, industry chambers, state departments, and global trade networks.',
              icon: Briefcase,
            },
            {
              title: 'Innovation & Sustainable Growth',
              desc: 'Modern industrial park development, tech modernization, green compliance, and clean energy adoption.',
              icon: Sparkles,
            },
            {
              title: 'Community & Nation Building',
              desc: 'Uplifting rural SHGs, FPOs, and creating sustainable livelihood opportunities across India.',
              icon: HeartHandshake,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#c2410c] transition-all space-y-2.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-orange-100 group-hover:bg-[#c2410c] text-[#c2410c] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors leading-snug">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
