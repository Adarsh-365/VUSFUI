import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, ChevronDown, Menu, X, Globe, Globe2, Sparkles, LayoutGrid } from 'lucide-react';
import logoImg from '../images/logo.png';
import { SECTORS_DATA } from '../data/sectorsData';

interface NavbarProps {
  onSearchOpen: (query?: string) => void;
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchOpen,
  onMemberClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({
    about: true,
    service: false,
    sectors: false,
    international: false,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileSubmenu = (id: string) => {
    setMobileExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      hasDropdown: false,
      subItems: [],
    },
    {
      id: 'about',
      label: 'About',
      path: '/about/overview',
      hasDropdown: true,
      subItems: [
        { label: 'Overview', path: '/about/overview' },
        { label: 'Board of Directors', path: '/about/board' },
        { label: "President's Desk", path: '/about/president' },
      ],
    },
    {
      id: 'service',
      label: 'Service',
      path: '/service',
      hasDropdown: true,
      subItems: [
        { label: 'B2B Service', path: '/services/b2b-service' },
        { label: 'Start company', path: '/services/start-company' },
        { label: 'Start import and export', path: '/services/start-import-export' },
        { label: 'One to One Counselling', path: '/services/one-to-one-counselling' },
        { label: 'Product launch other country', path: '/services/product-launch-other-country' },
        { label: 'Start business in other country', path: '/services/start-business-other-country' },
        { label: 'Infrastructure development', path: '/services/infrastructure-development' },
        { label: 'Trade Exhibitions & Expos', path: '/services/exhibitions' },
        { label: 'Seminars & Webinars', path: '/services/seminars-webinars' },
        { label: 'GeM PORTAL', path: '/services/gem-portal' },
        { label: 'Namste china', path: '/services/namaste-china' },
        { label: 'Foreign investment', path: '/services/foreign-investment' },
        { label: 'Finance and investment', path: '/services/finance-and-investment' },
        { label: 'Government and MSME support', path: '/services/government-msme-support' },
        { label: 'Market Linkage', path: '/services/market-linkage' },
        { label: 'StartUp', path: '/services/startup' },
      ],
    },
    {
      id: 'sectors',
      label: 'Sectors',
      path: '/sectors',
      hasDropdown: true,
      subItems: SECTORS_DATA.map((s) => ({
        label: s.name,
        path: `/sectors/${s.slug}`,
      })),
    },
    {
      id: 'chapter',
      label: 'Chapter',
      path: '/chapter',
      hasDropdown: false,
      subItems: [],
    },
    {
      id: 'international',
      label: 'International',
      path: '/international',
      hasDropdown: true,
      subItems: [
        { label: 'India (Anchor Hub)', path: '/namaste-india-group', flag: '/flags/in.png' },
        { label: 'Nepal', path: '/international/nepal', flag: '/flags/np.png' },
        { label: 'China', path: '/international/china', flag: '/flags/cn.png' },
        { label: 'Bangladesh', path: '/international/bangladesh', flag: '/flags/bd.png' },
        { label: 'Sri Lanka', path: '/international/sri-lanka', flag: '/flags/lk.png' },
        { label: 'Thailand', path: '/international/thailand', flag: '/flags/th.png' },
        { label: 'Japan', path: '/international/japan', flag: '/flags/jp.png' },
        { label: 'Vietnam', path: '/international/vietnam', flag: '/flags/vn.png' },
        { label: 'Malaysia', path: '/international/malaysia', flag: '/flags/my.png' },
        { label: 'Singapore', path: '/international/singapore', flag: '/flags/sg.png' },
        { label: 'Indonesia', path: '/international/indonesia', flag: '/flags/id.png' },
        { label: 'Taiwan', path: '/international/taiwan', flag: '/flags/tw.png' },
        { label: 'South Korea', path: '/international/south-korea', flag: '/flags/kr.png' },
        { label: 'UAE', path: '/international/uae', flag: '/flags/ae.png' },
        { label: 'Oman', path: '/international/oman', flag: '/flags/om.png' },
        { label: 'Qatar', path: '/international/qatar', flag: '/flags/qa.png' },
        { label: 'South Africa', path: '/international/south-africa', flag: '/flags/za.png' },
        { label: 'Ethiopia', path: '/international/ethiopia', flag: '/flags/et.png' },
        { label: 'Germany', path: '/international/germany', flag: '/flags/de.png' },
        { label: 'Russia', path: '/international/russia', flag: '/flags/ru.png' },
      ],
    },
    {
      id: 'namaste-india-group',
      label: 'Namaste India Group',
      path: '/namaste-india-group',
      hasDropdown: false,
      subItems: [],
    },
    {
      id: 'events',
      label: 'Events',
      path: '/events',
      hasDropdown: false,
      subItems: [],
    },
    {
      id: 'csr-initiative',
      label: 'CSR initiative',
      path: '/csr-initiative',
      hasDropdown: false,
      subItems: [],
    },
    {
      id: 'career',
      label: 'Career',
      path: '/career',
      hasDropdown: false,
      subItems: [],
    },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchOpen(searchQuery.trim());
      setSearchQuery('');
    }
  };

  const isCurrentActive = (itemPath: string, subItems: { label: string; path: string }[]) => {
    if (itemPath === '/' && location.pathname === '/') return true;
    if (itemPath !== '/' && location.pathname.startsWith(itemPath)) return true;
    return subItems.some((s) => location.pathname === s.path);
  };

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-40">
      {/* Top Header Row with Official Branding & Logo */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-2 sm:gap-4">
        {/* Main Logo & Title */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="h-10 sm:h-12 w-auto flex items-center">
            <img
              src={logoImg}
              alt="Vishwa Udyam Sahayta Foundation"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block border-l border-slate-300 pl-2.5">
            <div className="text-[12px] sm:text-[13.5px] font-black tracking-tight text-slate-900 leading-none uppercase">
              Vishwa Udyam Sahayta Foundation
            </div>
            <div className="text-[9.5px] text-slate-500 font-medium tracking-wide mt-0.5">
              Empowering MSMEs &bull; India Industrial Infra &bull; Global Corridors
            </div>
          </div>
        </Link>

        {/* Action Buttons: Join as Member, Member Portal, Staff Desk */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2 shrink-0">
          <button
            onClick={() => onMemberClick('become')}
            className="bg-[#15803d] hover:bg-[#166534] text-white text-[11px] lg:text-xs font-semibold px-3 py-1.5 lg:px-3.5 lg:py-2 rounded shadow-xs transition-colors cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            <span>Join as Member</span>
          </button>
          <button
            onClick={() => onMemberClick('members')}
            className="bg-[#ea580c] hover:bg-[#c2410c] text-white text-[11px] lg:text-xs font-semibold px-3 py-1.5 lg:px-3.5 lg:py-2 rounded shadow-xs transition-colors cursor-pointer"
          >
            Member Portal
          </button>
          <button
            onClick={() => onMemberClick('employee')}
            className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-[11px] lg:text-xs font-semibold px-2.5 py-1.5 lg:px-3 lg:py-2 rounded shadow-xs transition-colors cursor-pointer"
          >
            Staff Desk
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-orange-600 rounded-md focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Main Navigation Bar Row - Optimized to display all 10 items */}
      <nav className="hidden md:block bg-[#f8fafc] border-t border-slate-200 text-slate-800">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-0.5 lg:space-x-1 xl:space-x-1.5 py-0.5">
            {/* All 10 Navigation links */}
            {navItems.map((item) => {
              const active = isCurrentActive(item.path, item.subItems);
              const isOpen = item.hasDropdown && activeDropdown === item.id;

              return (
                <div
                  key={item.id}
                  className="relative group shrink-0"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-0.5 lg:gap-1 py-2.5 px-1.5 lg:px-2 xl:px-2.5 text-[11px] lg:text-[11.5px] xl:text-[12.5px] font-bold tracking-tight transition-colors whitespace-nowrap ${
                      active
                        ? 'text-[#c2410c] bg-white border-b-2 border-[#c2410c]'
                        : 'text-slate-700 hover:text-[#c2410c]'
                    }`}
                  >
                    {item.id === 'home' && <Home className="w-3 h-3 fill-[#c2410c] text-[#c2410c]" />}
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-2.5 h-2.5 lg:w-3 lg:h-3 text-slate-400 group-hover:text-[#c2410c] transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#c2410c]' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div
                      className={`absolute top-full bg-white shadow-2xl rounded-b-2xl border border-slate-200 z-50 transition-all ${
                        item.id === 'sectors'
                          ? 'left-0 sm:-left-12 lg:-left-24 w-[640px] xl:w-[720px] max-h-[500px] overflow-y-auto'
                          : item.id === 'international'
                          ? 'left-0 sm:-left-24 lg:-left-44 w-[560px] xl:w-[620px] max-h-[520px] overflow-y-auto'
                          : item.id === 'service'
                          ? 'left-0 w-80 max-h-[460px] overflow-y-auto py-1.5'
                          : 'left-0 w-64 py-1.5'
                      }`}
                    >
                      {item.id === 'sectors' ? (
                        <div className="flex flex-col">
                          {/* Header Bar */}
                          <div className="px-4 py-3 bg-gradient-to-r from-[#0c1b33] to-[#1e293b] text-white flex items-center justify-between sticky top-0 z-10 shadow-xs">
                            <div className="flex items-center gap-2">
                              <LayoutGrid className="w-4 h-4 text-amber-400" />
                              <div>
                                <div className="text-xs font-black uppercase tracking-wider text-white">
                                  Key Industry &amp; MSME Sectors
                                </div>
                                <div className="text-[10px] text-slate-300">
                                  36+ National sectors empowered by Vishwa Udyam Sahayta Foundation
                                </div>
                              </div>
                            </div>
                            <Link
                              to="/sectors"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[11px] font-bold text-amber-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md"
                            >
                              View Overview &rarr;
                            </Link>
                          </div>

                          {/* 2-Column Grid */}
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1 p-3 bg-white">
                            {item.subItems.map((sub, idx) => {
                              const isSubActive = location.pathname === sub.path;
                              return (
                                <Link
                                  key={idx}
                                  to={sub.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-all flex items-center justify-between group/sec border border-transparent ${
                                    isSubActive
                                      ? 'bg-orange-50 text-[#c2410c] font-bold border-orange-200/60'
                                      : 'text-slate-700 hover:bg-orange-50/80 hover:text-[#c2410c] hover:border-orange-100'
                                  }`}
                                >
                                  <div className="flex items-center gap-1.5 truncate pr-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/sec:bg-[#c2410c] transition-colors shrink-0" />
                                    <span className="truncate text-[11.5px] font-medium">{sub.label}</span>
                                  </div>
                                  <span
                                    className={`text-[10px] shrink-0 opacity-0 group-hover/sec:opacity-100 transition-opacity ${
                                      isSubActive ? 'text-[#c2410c] opacity-100' : 'text-slate-400'
                                    }`}
                                  >
                                    &rarr;
                                  </span>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Footer Banner */}
                          <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center sticky bottom-0 z-10">
                            <Link
                              to="/sectors"
                              onClick={() => setActiveDropdown(null)}
                              className="text-xs font-bold text-[#c2410c] hover:text-[#ea580c] transition-colors inline-flex items-center gap-1"
                            >
                              <span>Explore All 36+ Industrial Sectors Directory</span>
                              <span>&rarr;</span>
                            </Link>
                          </div>
                        </div>
                      ) : item.id === 'international' ? (
                        <div className="flex flex-col">
                          {/* Header Bar */}
                          <div className="px-4 py-3 bg-gradient-to-r from-[#0c1b33] to-[#1e293b] text-white flex items-center justify-between sticky top-0 z-10 shadow-xs">
                            <div className="flex items-center gap-2">
                              <Globe2 className="w-4 h-4 text-cyan-400" />
                              <div>
                                <div className="text-xs font-black uppercase tracking-wider text-white">
                                  20 Strategic Trade Corridors
                                </div>
                                <div className="text-[10px] text-slate-300">
                                  Dedicated Bilateral Desks Radiating from Mumbai / JNPT
                                </div>
                              </div>
                            </div>
                            <Link
                              to="/international"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[11px] font-bold text-cyan-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md"
                            >
                              World Map &rarr;
                            </Link>
                          </div>

                          {/* 2-Column Grid with Flags */}
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1 p-3 bg-white">
                            {item.subItems.map((sub: any, idx: number) => {
                              const isSubActive = location.pathname === sub.path;
                              return (
                                <Link
                                  key={idx}
                                  to={sub.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-all flex items-center justify-between group/sec border border-transparent ${
                                    isSubActive
                                      ? 'bg-orange-50 text-[#c2410c] font-bold border-orange-200/60'
                                      : 'text-slate-700 hover:bg-orange-50/80 hover:text-[#c2410c] hover:border-orange-100'
                                  }`}
                                >
                                  <div className="flex items-center gap-2 truncate pr-1">
                                    {sub.flag ? (
                                      <img src={sub.flag} alt={sub.label} className="w-4 h-4 rounded-full object-contain shrink-0 shadow-xs" />
                                    ) : (
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/sec:bg-[#c2410c] transition-colors shrink-0" />
                                    )}
                                    <span className="truncate text-[11.5px] font-medium">{sub.label}</span>
                                  </div>
                                  <span
                                    className={`text-[10px] shrink-0 opacity-0 group-hover/sec:opacity-100 transition-opacity ${
                                      isSubActive ? 'text-[#c2410c] opacity-100' : 'text-slate-400'
                                    }`}
                                  >
                                    &rarr;
                                  </span>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Footer Banner */}
                          <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center sticky bottom-0 z-10">
                            <Link
                              to="/international"
                              onClick={() => setActiveDropdown(null)}
                              className="text-xs font-bold text-[#c2410c] hover:text-[#ea580c] transition-colors inline-flex items-center gap-1"
                            >
                              <span>Explore Interactive 20-Country Global Map</span>
                              <span>&rarr;</span>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <>
                          {item.id === 'service' && (
                            <div className="px-3.5 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                              Our Key Services &amp; Portals
                            </div>
                          )}
                          {item.subItems.map((sub, idx) => {
                            const isSubActive = location.pathname === sub.path;
                            return (
                              <Link
                                key={idx}
                                to={sub.path}
                                onClick={() => setActiveDropdown(null)}
                                className={`w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center justify-between border-b border-slate-50 last:border-0 ${
                                  isSubActive
                                    ? 'bg-orange-50/80 text-[#c2410c] font-bold'
                                    : 'text-slate-700 hover:bg-orange-50 hover:text-[#c2410c]'
                                }`}
                              >
                                <span className="font-medium">{sub.label}</span>
                                <span className={`text-[10px] ${isSubActive ? 'text-[#c2410c]' : 'text-slate-400'}`}>
                                  &rarr;
                                </span>
                              </Link>
                            );
                          })}
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Compact Search Input Box */}
          <form onSubmit={handleSearchSubmit} className="relative py-1 flex items-center shrink-0 ml-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-24 lg:w-32 xl:w-40 text-xs bg-white border border-slate-300 rounded-full py-1 pl-2.5 pr-7 focus:outline-none focus:border-[#c2410c] focus:w-44 transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 text-slate-400 hover:text-[#c2410c] transition-colors cursor-pointer"
            >
              <Search className="w-3 h-3" />
            </button>
          </form>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto">
          {/* Mobile search */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center pb-2 border-b">
            <input
              type="text"
              placeholder="Search services, sectors, schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:border-[#c2410c]"
            />
            <button type="submit" className="absolute right-3 text-slate-400">
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Action buttons on mobile */}
          <div className="grid grid-cols-3 gap-2 pt-1 pb-2 border-b border-slate-100">
            <button
              onClick={() => {
                onMemberClick('become');
                setMobileMenuOpen(false);
              }}
              className="bg-[#15803d] text-white text-[11px] font-semibold py-1.5 px-2 rounded text-center"
            >
              Join Member
            </button>
            <button
              onClick={() => {
                onMemberClick('members');
                setMobileMenuOpen(false);
              }}
              className="bg-[#ea580c] text-white text-[11px] font-semibold py-1.5 px-2 rounded text-center"
            >
              Portal Login
            </button>
            <button
              onClick={() => {
                onMemberClick('employee');
                setMobileMenuOpen(false);
              }}
              className="bg-[#0f172a] text-white text-[11px] font-semibold py-1.5 px-2 rounded text-center"
            >
              Staff Desk
            </button>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isSubExpanded = mobileExpanded[item.id];
              return (
                <div key={item.id} className="py-1 border-b border-slate-50">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-bold text-xs text-slate-800 hover:text-[#c2410c] py-1.5 flex-1"
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => toggleMobileSubmenu(item.id)}
                        className="p-1.5 text-slate-500 hover:text-[#c2410c] focus:outline-none"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isSubExpanded ? 'rotate-180 text-[#c2410c]' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.hasDropdown && isSubExpanded && (
                    <div
                      className={`pl-2 py-1 text-[11px] text-slate-600 max-h-64 overflow-y-auto bg-slate-50/70 rounded-md my-1 border border-slate-100 ${
                        item.id === 'sectors' || item.id === 'international' ? 'grid grid-cols-2 gap-1 p-2' : 'space-y-1'
                      }`}
                    >
                      {item.subItems.map((sub: any, idx) => (
                        <Link
                          key={idx}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-1.5 py-1 px-1.5 hover:bg-orange-50 hover:text-[#c2410c] rounded transition-colors truncate text-[11px]"
                        >
                          {sub.flag ? (
                            <img src={sub.flag} alt={sub.label} className="w-3.5 h-3.5 rounded-full object-contain shrink-0" />
                          ) : (
                            <span className="text-slate-400 shrink-0">&bull;</span>
                          )}
                          <span className="truncate">{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
