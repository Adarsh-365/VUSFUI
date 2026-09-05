import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Globe2,
  Users,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Mail,
  Phone,
} from 'lucide-react';

interface ChapterPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const chapterMembers = [
  {
    chapter: 'Namaste Uttar Pradesh',
    name: 'Abhishek Singh',
    image: '/img/c11.png',
    type: 'National',
  },
  {
    chapter: 'Namaste Uttar Pradesh',
    name: 'Neeraj Kumar Patel',
    image: '/img/c12.png',
    type: 'National',
  },
  {
    chapter: 'Namaste Maharashtra',
    name: 'Ajit Shah',
    image: '/img/c13.png',
    type: 'National',
  },
  {
    chapter: 'Namaste Maharashtra',
    name: 'Madhuri Narkhede',
    image: '/img/c14.png',
    type: 'National',
  },
  {
    chapter: 'Namaste Maharashtra',
    name: 'Pruthviraj Landge',
    image: '/img/c15.png',
    type: 'National',
  },
  {
    chapter: 'Namaste Maharashtra',
    name: 'Vinod Singh',
    image: '/img/c16.png',
    type: 'National',
  },
  {
    chapter: 'Namaste Gujarat',
    name: 'Hardik Sorathiya',
    image: '/img/c17.png',
    type: 'National',
  },
  {
    chapter: 'Namaste Dubai',
    name: 'Kamlesh Kumar',
    image: '/members/kamlesh.jpeg',
    type: 'International',
  },
  {
    chapter: 'Namaste Nepal',
    name: 'Mohan Kaushal',
    image: '/img/c18.png',
    type: 'International',
  },
  {
    chapter: 'Namaste Nepal',
    name: 'Pradip Shah',
    image: '/img/c100.png',
    type: 'International',
  },
  {
    chapter: 'Namaste Nepal',
    name: 'Pushkar Malla',
    image: '/img/c111.png',
    type: 'International',
  },
  {
    chapter: 'Namaste UAE',
    name: 'R. Bhattacharya',
    image: '/img/c122.png',
    type: 'International',
  },
  {
    chapter: 'Namaste UAE',
    name: 'Saleem Sagar',
    image: '/img/c133.png',
    type: 'International',
  },
  {
    chapter: 'Namaste Vidharbha',
    name: 'Subham Rajendrao Naik',
    image: '/img/c155.png',
    type: 'National',
  },
  {
    chapter: 'Namaste Navi Mumbai',
    name: 'Ujjwal Ravindran',
    image: '/img/c144.png',
    type: 'National',
  },
  {
    chapter: 'Namaste Vietnam',
    name: 'Tran Thuy Duong (Naomi)',
    image: '/img/c177.png',
    type: 'International',
  },
  {
    chapter: 'Namaste Thailand',
    name: 'Vardhaman',
    image: '/img/c188.png',
    type: 'International',
  },
  {
    chapter: 'Namaste Sri Lanka',
    name: 'Prasad Sirinama',
    image: '/img/c199.png',
    type: 'International',
  },
  {
    chapter: 'Namaste China',
    name: 'Jevy Cai',
    image: '/img/ch11.png',
    type: 'International',
  },
];

export const ChapterPage: React.FC<ChapterPageProps> = ({ onMemberClick }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'National' | 'International'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique chapters
  const uniqueChapters = useMemo(() => {
    return Array.from(new Set(chapterMembers.map((m) => m.chapter)));
  }, []);

  // Filtered members
  const filteredMembers = useMemo(() => {
    return chapterMembers.filter((m) => {
      const matchesFilter = selectedFilter === 'All' || m.type === selectedFilter;
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.chapter.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* 1. Header Banner */}
      <section className="relative bg-[#0c1b33] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-amber-600/20 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4 tracking-wide uppercase">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Chapters</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>REGIONAL &bull; NATIONAL &bull; INTERNATIONAL CHAPTERS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Chapter Leadership Network
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Meet our distinguished chapter heads, regional convenors, and international representatives driving MSME facilitation, industrial growth, and bilateral trade across India and global markets.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 text-xs">
            {(['All', 'National', 'International'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === filter
                    ? 'bg-[#c2410c] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter === 'All' ? `All Chapters (${chapterMembers.length})` : filter === 'National' ? 'India Chapters' : 'International Chapters'}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by member name or chapter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-[#c2410c] focus:bg-white transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>
        </div>
      </section>

      {/* 3. Chapter Members Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#c2410c] transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Member Image Header */}
              <div className="relative h-64 bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    // Fallback placeholder image if remote asset is temporarily unavailable
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Fallback Icon Box if image fails to render */}
                <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-slate-400 space-y-2">
                  <Users className="w-12 h-12 text-slate-300" />
                  <span className="text-xs font-semibold">{member.name}</span>
                </div>

                {/* Chapter Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs ${
                    member.type === 'International'
                      ? 'bg-[#0c1b33] text-amber-300 border border-amber-500/30'
                      : 'bg-[#c2410c] text-white'
                  }`}>
                    {member.type}
                  </span>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-[#c2410c] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{member.chapter}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    {member.name}
                  </h3>

                  <p className="text-[11px] text-slate-500 font-medium">
                    Executive Chapter Representative &bull; Vishwa Udyam Sahayta Foundation
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onMemberClick('become')}
                    className="w-full bg-slate-50 hover:bg-[#c2410c] text-slate-700 hover:text-white text-xs font-bold py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5 group-hover:bg-[#c2410c] group-hover:text-white"
                  >
                    <span>Connect with Chapter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Launch a Chapter CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#0c1b33] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-bold">Start a VUSF Chapter in Your District or Country</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Partner with Vishwa Udyam Sahayta Foundation to lead industrial growth, trade delegations, and MSME facilitation in your region.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-[#c2410c] hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Apply to Form a Chapter
          </button>
        </div>
      </section>
    </div>
  );
};
