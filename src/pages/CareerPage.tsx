import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  Award,
  DollarSign,
  TrendingUp,
  Mail,
  PhoneCall,
  Sparkles,
  Building2,
  FileCheck,
  Target,
  BadgePercent,
  Table as TableIcon,
  LayoutGrid,
} from 'lucide-react';

interface CareerPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({ onMemberClick }) => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');

  const jobOpenings = [
    {
      id: 1,
      position: 'Team Leader ',
      experience: '3+ Years',
      salary: '₹3,00,000 – ₹3,60,000 / Year',
      salaryLPA: '3.00 – 3.60 LPA',
      monthlyBreakup: '₹25,000 – ₹30,000 / month',
      responsibilities:
        'Lead and manage the team; monitor leads, calling, follow-ups and conversions; drive targets; provide daily, weekly and monthly reports; guide and motivate team members.',
      targetIncentive: 'Target & Performance-Based',
      vacancies: 1,
      department: 'Operations & Tele-Calling',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Full-Time',
    },
    {
      id: 2,
      position: 'Business Relation Marketing Executive',
      experience: '1+ Year',
      salary: '₹1,56,000 – ₹1,80,000 / Year',
      salaryLPA: '1.56 – 1.80 LPA',
      monthlyBreakup: '₹13,000 – ₹15,000 / month',
      responsibilities:
        'Work on incoming leads; contact and follow up with prospects; convert leads; regularly connect with members; promote upcoming programmes and events; maintain member relationships.',
      targetIncentive: 'Target-Based',
      vacancies: 6,
      department: 'Marketing & Member Relations',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Full-Time',
    },
    {
      id: 3,
      position: 'China Import Manager',
      experience: '3+ Years',
      salary: '₹2,40,000 – ₹3,00,000 / Year',
      salaryLPA: '2.40 – 3.00 LPA',
      monthlyBreakup: '₹20,000 – ₹25,000 / month',
      responsibilities:
        'Handle China import enquiries; coordinate with China team/suppliers; prepare quotations and pricing; convert enquiries into orders; manage documentation and import process through successful delivery in India.',
      targetIncentive: 'Target-Based + Deal Incentives',
      vacancies: 1,
      department: 'Namaste China Bilateral Desk',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Full-Time',
    },
    {
      id: 4,
      position: 'Export Manager',
      experience: '3+ Years',
      salary: '₹2,40,000 – ₹3,00,000 / Year',
      salaryLPA: '2.40 – 3.00 LPA',
      monthlyBreakup: '₹20,000 – ₹25,000 / month',
      responsibilities:
        'Handle export enquiries; support companies exporting internationally; assist with documentation; coordinate with international channel partners; support market expansion and successful export deals.',
      targetIncentive: 'Target-Based + Deal Incentives',
      vacancies: 1,
      department: 'Global Trade & Corridors',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Full-Time',
    },
    {
      id: 5,
      position: 'Startup & Incubation Programme Manager',
      experience: '2+ Years',
      salary: '₹1,80,000 – ₹2,40,000 / Year',
      salaryLPA: '1.80 – 2.40 LPA',
      monthlyBreakup: '₹15,000 – ₹20,000 / month',
      responsibilities:
        'Manage SC/ST Entrepreneurship, Women Entrepreneurship, Chinese Learning and other Startup & Incubation programmes; handle provided leads; counsel participants; follow up, convert leads and coordinate execution.',
      targetIncentive: 'Target-Based + Incentives',
      vacancies: 1,
      department: 'Incubation & Inclusive Programs',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Full-Time',
    },
    {
      id: 6,
      position: 'MSME Programme Manager',
      experience: '2–3+ Years',
      salary: '₹1,80,000 – ₹2,40,000 / Year',
      salaryLPA: '1.80 – 2.40 LPA',
      monthlyBreakup: '₹15,000 – ₹20,000 / month',
      responsibilities:
        'Work on MSME and government schemes; handle enquiries; identify relevant schemes and subsidies; coordinate with departments/channel partners; assist with documentation and business support.',
      targetIncentive: 'Target & Performance-Based',
      vacancies: 1,
      department: 'MSME & Government Schemes',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Full-Time',
    },
    {
      id: 7,
      position: 'Accounts, Finance & Documentation Executive',
      experience: 'Experience Preferred',
      salary: '₹1,80,000 – ₹2,40,000 / Year',
      salaryLPA: '1.80 – 2.40 LPA',
      monthlyBreakup: '₹15,000 – ₹20,000 / month',
      responsibilities:
        'Maintain accounts and financial records; prepare quotations; maintain payment and transaction records; handle member/business documentation; support routine finance and documentation activities.',
      targetIncentive: 'Performance-Based',
      vacancies: 1,
      department: 'Finance & Administration',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Full-Time',
    },
    {
      id: 8,
      position: 'Domestic Events & Business Networking Manager',
      experience: '2+ Years',
      salary: '₹1,80,000 – ₹2,40,000 / Year',
      salaryLPA: '1.80 – 2.40 LPA',
      monthlyBreakup: '₹15,000 – ₹20,000 / month',
      responsibilities:
        'Plan and execute domestic/international exhibitions, business events and networking programmes; develop collaborations; coordinate and sign MOUs with event partners; manage stakeholders and ensure successful execution.',
      targetIncentive: 'Performance-Based',
      vacancies: 1,
      department: 'Events & Strategic Alliances',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Full-Time',
    },
  ];

  const totalVacancies = jobOpenings.reduce((sum, j) => sum + j.vacancies, 0);

  return (
    <div className="min-h-screen bg-[#070e1a] text-slate-100 selection:bg-orange-500 selection:text-white font-sans">
      {/* 1. Careers Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-600/20 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <span className="text-amber-400">Careers &amp; Openings</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Briefcase className="w-4 h-4 text-orange-400" />
                <span>VISHWA UDYAM SAHAYTA FOUNDATION (VUSF) / NAMASTE INDIA GROUP</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Current Job Openings: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                  Build Your Career in MSME Growth &amp; Global Trade
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Join our fast-growing corporate secretariat and trade execution teams in Navi Mumbai. We are actively hiring across marketing, China imports, international exports, startup incubation, MSME schemes, finance, and domestic business networking.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#openings-table"
                  className="bg-gradient-to-r from-[#c2410c] to-[#ea580c] hover:from-[#ea580c] hover:to-[#f97316] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-950/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore 8 Positions ({totalVacancies} Vacancies)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => onMemberClick('employee')}
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all cursor-pointer"
                >
                  Employee Portal Login &rarr;
                </button>
              </div>
            </div>

            {/* Quick Vacancy Metric Card */}
            <div className="lg:col-span-4 bg-[#0f172a]/95 border-2 border-orange-500/40 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>Hiring Overview</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Total Active Roles:</span>
                  <span className="font-bold text-white">8 Job Profiles</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Total Open Vacancies:</span>
                  <span className="font-bold text-amber-300 text-sm">13 Positions</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-bold text-cyan-300">Navi Mumbai, India</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Compensation:</span>
                  <span className="font-bold text-emerald-400">Fixed + Incentives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Openings Section */}
      <section id="openings-table" className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>OFFICIAL VACANCIES MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Current Job Openings (8 Positions &bull; {totalVacancies} Total Vacancies)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Vishwa Udyam Sahayta Foundation (VUSF) / Namaste India Group &bull; Navi Mumbai Corporate Desk
            </p>
          </div>

          {/* Toggle Table / Cards Mode */}
          <div className="flex items-center gap-2 bg-[#0c182a] p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'table' ? 'bg-orange-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Table View</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'cards' ? 'bg-orange-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards View</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Table View on Desktop (Hidden on Mobile) + Mobile Card Stream */}
        {viewMode === 'table' && (
          <>
            {/* Desktop Structured Table (lg and above) */}
            <div className="hidden lg:block bg-[#0b1728] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden w-full">
              <div className="w-full">
                <table className="w-full text-left border-collapse text-xs table-auto">
                  <thead>
                    <tr className="bg-[#0f2138] border-b border-slate-700 text-slate-300 uppercase tracking-wider font-bold">
                      <th className="py-3.5 px-3 text-center w-12 text-amber-400">#</th>
                      <th className="py-3.5 px-3.5 w-[21%]">Position</th>
                      <th className="py-3.5 px-3 w-[10%]">Experience</th>
                      <th className="py-3.5 px-3.5 w-[18%] text-emerald-400">Yearly Package (CTC / LPA)</th>
                      <th className="py-3.5 px-4 w-[27%]">Key Responsibilities</th>
                      <th className="py-3.5 px-3.5 w-[13%]">Target / Incentive</th>
                      <th className="py-3.5 px-2.5 text-center w-[5%]">Vacancies</th>
                      <th className="py-3.5 px-3 text-center w-[6%]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {jobOpenings.map((job) => (
                      <tr
                        key={job.id}
                        className="hover:bg-[#0f223a] transition-colors group"
                      >
                        <td className="py-3.5 px-3 text-center font-extrabold text-amber-400 text-xs">
                          {job.id}
                        </td>
                        <td className="py-3.5 px-3.5">
                          <div className="font-extrabold text-xs sm:text-[13px] text-white group-hover:text-amber-300 transition-colors leading-snug">
                            {job.position}
                          </div>
                          <div className="text-[10.5px] text-slate-400 mt-0.5">{job.department}</div>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="inline-block bg-slate-800 text-slate-200 px-2 py-0.5 rounded text-[11px] font-semibold border border-slate-700 whitespace-nowrap">
                            {job.experience}
                          </span>
                        </td>
                        <td className="py-3.5 px-3.5">
                          <div className="font-bold text-emerald-400 text-xs bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded inline-block shadow-2xs whitespace-nowrap">
                            {job.salary}
                          </div>
                          <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                            {job.salaryLPA} &bull; <span className="text-slate-400">{job.monthlyBreakup}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-300 leading-relaxed font-light text-[11.5px]">
                          {job.responsibilities}
                        </td>
                        <td className="py-3.5 px-3.5">
                          <span className="text-amber-300 font-semibold bg-amber-950/30 border border-amber-800/40 px-2 py-0.5 rounded inline-block text-[10.5px]">
                            {job.targetIncentive}
                          </span>
                        </td>
                        <td className="py-3.5 px-2.5 text-center">
                          <span
                            className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full font-black text-xs border ${
                              job.vacancies > 1
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                : 'bg-orange-600/30 text-orange-300 border-orange-500/40'
                            }`}
                          >
                            {job.vacancies}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <button
                            onClick={() => onMemberClick('become')}
                            className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-xs hover:scale-105"
                          >
                            Apply
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total Vacancies Footer Row */}
              <div className="p-4 bg-[#0f2138] border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-extrabold text-white">
                    Showing: <span className="text-amber-300">8 Core Job Positions</span> &bull; Total Openings: <span className="text-amber-300">{totalVacancies} Vacancies</span>
                  </span>
                </div>
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold px-6 py-2 rounded-xl transition-all cursor-pointer shadow-md hover:scale-105"
                >
                  Submit Direct Application &rarr;
                </button>
              </div>
            </div>

            {/* Mobile Adaptive Cards View (visible on mobile / tablet < lg) */}
            <div className="block lg:hidden space-y-4">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-[#0b1728] rounded-2xl border border-slate-800 p-5 space-y-4 shadow-xl"
                >
                  {/* Header: Badge & Openings */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-md inline-block">
                        #{job.id} &bull; {job.department}
                      </span>
                      <h3 className="text-base font-extrabold text-white leading-snug">
                        {job.position}
                      </h3>
                    </div>
                    <span className="shrink-0 bg-orange-600/30 text-orange-300 border border-orange-500/40 text-[11px] font-extrabold px-2.5 py-1 rounded-full whitespace-nowrap">
                      {job.vacancies} {job.vacancies > 1 ? 'Vacancies' : 'Vacancy'}
                    </span>
                  </div>

                  {/* Salary & Experience Box */}
                  <div className="grid grid-cols-2 gap-2 bg-[#070e1a] p-3 rounded-xl border border-slate-850">
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Yearly CTC</div>
                      <div className="text-xs font-black text-emerald-400">{job.salary}</div>
                      <div className="text-[9.5px] text-slate-400">{job.salaryLPA}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Experience</div>
                      <div className="text-xs font-bold text-amber-300">{job.experience}</div>
                      <div className="text-[9.5px] text-slate-400">{job.monthlyBreakup}</div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-1 text-xs text-slate-300">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block">
                      Responsibilities:
                    </span>
                    <p className="leading-relaxed font-light text-slate-300 text-xs">
                      {job.responsibilities}
                    </p>
                  </div>

                  {/* Incentive Tag */}
                  <div className="p-2 bg-[#0f2138] rounded-lg border border-slate-800 text-[11px] text-amber-300 font-medium flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Incentive: {job.targetIncentive}</span>
                  </div>

                  {/* Mobile Action Footer */}
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-orange-400" />
                      Navi Mumbai
                    </span>
                    <button
                      onClick={() => onMemberClick('become')}
                      className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-md"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Mobile Summary Banner */}
              <div className="p-4 bg-[#0f2138] rounded-2xl border border-slate-700 text-center space-y-3">
                <div className="text-xs font-bold text-white">
                  Total Vacancies: <span className="text-amber-300">{totalVacancies} Positions</span> across 8 Functions
                </div>
                <button
                  onClick={() => onMemberClick('become')}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md"
                >
                  Submit Direct Application &rarr;
                </button>
              </div>
            </div>
          </>
        )}

        {/* View Mode 2: Card Grid View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-[#0b1728] rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-5 hover:border-orange-500/60 transition-all shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-md">
                        #{job.id} &bull; {job.department}
                      </span>
                      <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors mt-2">
                        {job.position}
                      </h3>
                    </div>
                    <span className="shrink-0 bg-orange-600 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
                      {job.vacancies} {job.vacancies > 1 ? 'Vacancies' : 'Vacancy'}
                    </span>
                  </div>

                  {/* Compensation & Experience Badges */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Yearly Package (CTC)</span>
                      <div className="text-sm font-extrabold text-emerald-400">{job.salary}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{job.salaryLPA} &bull; {job.monthlyBreakup}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Experience</span>
                      <div className="text-sm font-extrabold text-amber-300">{job.experience}</div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                      Key Responsibilities:
                    </span>
                    <p className="leading-relaxed font-light text-slate-300">
                      {job.responsibilities}
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#0f2138] rounded-xl border border-slate-800 text-[11px] text-amber-300 font-semibold flex items-center gap-2">
                    <Target className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Incentive: {job.targetIncentive}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-orange-400" />
                    {job.location}
                  </span>
                  <button
                    onClick={() => onMemberClick('become')}
                    className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-md"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Direct Resume Submission & HR Contact */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-[#0f223a] via-[#0b1728] to-[#070e1a] border-2 border-orange-500/30 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Direct Application &amp; CV Submission</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-light">
              Interested candidates can send their updated Resume / CV mentioning the position name in the subject line to our HR Directorate:
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-bold text-amber-300">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                careers@namastevishwaudyam.org
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                +91 70305 88914 / Navi Mumbai Desk
              </span>
            </div>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Submit Application Form
          </button>
        </div>
      </section>
    </div>
  );
};
