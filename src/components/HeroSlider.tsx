import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Mic,
  Search,
  ArrowRight,
  Sparkles,
  MapPin,
  Pause,
  Play,
  Layers,
} from 'lucide-react';

interface HeroSliderProps {
  onSearchClick: () => void;
  onVoiceAssistantClick: () => void;
  onPillarClick: (pillar: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onSearchClick,
  onVoiceAssistantClick,
  onPillarClick,
}) => {
  const slides = [
    {
      id: 'canton-fair-delegation',
      badge: 'GLOBAL TRADE & SOURCING',
      title: 'Canton Fair Business Delegation (Phase 1: 15–19 Oct 2026 | Phase 3: 31 Oct–4 Nov 2026)',
      subtitle:
        'Join our official Indian business delegation to the Canton Fair in Guangzhou, China. Phase 1 (15–19 Oct 2026) & Phase 3 (31 Oct–4 Nov 2026). Direct factory visits, verified OEM suppliers, machinery sourcing, and cross-border trade matchmaking.',
      stat: 'Phase 1: 15–19 Oct 2026 • Phase 3: 31 Oct–4 Nov 2026 • Guangzhou, China',
      location: 'Guangzhou, China',
      image: '/banner/namaste-china.png',
      category: 'International Delegation',
      actionText: 'Join Canton Fair Delegation',
    },
    {
      id: 'sc-st-entrepreneur-program',
      badge: 'INCLUSIVE EMPOWERMENT',
      title: 'SC / ST Entrepreneur Program (12–14 Dec 2026)',
      subtitle:
        'Specialized 3-day empowerment initiative (12–14 Dec 2026) offering comprehensive bank credit linkages, government subsidies (PMEGP / CMEGP), bank-ready DPR preparation, and expert business mentorship.',
      stat: '12–14 Dec 2026 • Subsidies & Bank DPR Guidance',
      location: 'Maharashtra & Pan-India',
      image: '/banner/sc-ststartup1day.png',
      category: 'Entrepreneurship Program',
      actionText: 'Register for SC/ST Program',
    },
    {
      id: 'sc-st-startup-program',
      badge: 'STARTUP ACCELERATION',
      title: 'SC / ST Startup Program (24 Oct 2026)',
      subtitle:
        'Accelerating high-potential SC & ST innovators and early-stage founders (24 Oct 2026) with seed funding facilitation, investor pitch sessions, statutory registrations, and strategic market expansion support.',
      stat: '24 Oct 2026 • Seed Capital & Incubation',
      location: 'Navi Mumbai Innovation Hub',
      image: '/banner/sc-ststartup1day.png',
      category: 'Startup Incubation',
      actionText: 'Apply for Startup Program',
    },
    {
      id: 'women-entrepreneur-growth-program',
      badge: 'STREE SHAKTI MISSION',
      title: 'Women Entrepreneur Growth Program (10 Oct 2026)',
      subtitle:
        'Empowering women founders and MSME owners (10 Oct 2026) with dedicated leadership coaching, collateral-free credit access, digital marketing, packaging solutions, and institutional buyer networks.',
      stat: '10 Oct 2026 • Enterprise Scaling & Finance Linkage',
      location: 'Navi Mumbai & Regional Desks',
      image: '/banner/women-enter-growth-prg1da.png',
      category: 'Women In Business',
      actionText: 'Join Women Growth Program',
    },
    {
      id: 'namaste-india-magazine',
      badge: 'NATIONAL MEDIA & PUBLICATION',
      title: 'Namaste India Entrepreneur Magazine — Last Day: 20 Sep 2026 | Publish: 2 Oct 2026',
      subtitle:
        'Last day to apply: 20 Sep 2026 • Publishing Date: 2 Oct 2026. Feature your enterprise story, brand journey, and innovations in the premier national business publication distributed to industry leaders, trade chambers, and policymakers.',
      stat: 'Apply by 20 Sep 2026 • Publishing 2 Oct 2026 • National Circulation',
      location: 'Pan-India Distribution',
      image: '/banner/magazine.png',
      category: 'National Magazine',
      actionText: 'Apply for Magazine Feature',
    },
    {
      id: 'women-business-success-program',
      badge: 'EXECUTIVE MASTERCLASS',
      title: 'Women Business Success Program (10–12 Jan 2027)',
      subtitle:
        'An intensive 3-day executive coaching program (10–12 Jan 2027) focusing on international export readiness, supply chain mastery, financial sustainability, and institutional partnerships for women leaders.',
      stat: '10–12 Jan 2027 • Global Trade & Enterprise Scaling',
      location: 'Mumbai / Navi Mumbai',
      image: '/banner/women-enter-sucess-prog-3day.png',
      category: 'Executive Program',
      actionText: 'Join Business Success Program',
    },
    {
      id: 'women-enter-success-1day',
      badge: 'ENTREPRENEURSHIP WORKSHOP',
      title: 'Women Entrepreneur Success Program (1-Day Masterclass)',
      subtitle:
        'A high-impact 1-day capacity-building workshop empowering women entrepreneurs with DPR guidance, state subsidies, branding strategy, and B2B vendor onboarding.',
      stat: '1-Day Intensive • Pan-India Women Founders Meet',
      location: 'Navi Mumbai Hub',
      image: '/banner/women-enter-success-prog-1day.png',
      category: 'Women Workshop',
      actionText: 'Register for 1-Day Workshop',
    },
    {
      id: 'msme-excellence-awards',
      badge: 'NATIONAL RECOGNITION',
      title: 'MSME Excellence Award Show (22 Nov 2026)',
      subtitle:
        'Celebrating and felicitating trailblazing MSMEs, visionary entrepreneurs, manufacturing leaders, and dynamic startup innovators who drive India’s industrial and economic growth (22 Nov 2026).',
      stat: '22 Nov 2026 • 50+ Sector Awards & Felicitations',
      location: 'Grand Ballroom, Navi Mumbai',
      image: '/banner/msme-award.png',
      category: 'National Awards',
      actionText: 'Nominate for MSME Awards',
    },
    {
      id: 'navi-mumbai-export-summit',
      badge: 'REGIONAL EXPORT CONCLAVE',
      title: 'Navi Mumbai Export Summit 2026',
      subtitle:
        'Connecting MMR and Konkan manufacturers, agro-producers, and industrial exporters with direct international buyers, shipping liners, customs clearance specialists, and trade facilitation councils.',
      stat: 'Navi Mumbai • International B2B Buyer-Seller Conclave 2026',
      location: 'Vashi, Navi Mumbai',
      image: '/banner/navi-mumbai-export-summit.png',
      category: 'Export Summit',
      actionText: 'Register for Navi Mumbai Summit',
    },
    {
      id: 'pune-export-summit',
      badge: 'WESTERN TRADE CORRIDOR',
      title: 'Pune Export Summit (28 Nov 2026)',
      subtitle:
        'Unlocking overseas trade corridors for Pune’s engineering, automotive ancillary, electronics, and agro-processing clusters (28 Nov 2026) with cross-border trade facilitation and buyer linkages.',
      stat: '28 Nov 2026 • Engineering & Auto Export Forum',
      location: 'Pune, Maharashtra',
      image: '/banner/pune.png',
      category: 'Export Summit',
      actionText: 'Register for Pune Summit',
    },
    {
      id: 'nashik-export-summit',
      badge: 'AGRO & INDUSTRIAL CORRIDOR',
      title: 'Nashik Export Summit (12 Dec 2026)',
      subtitle:
        'Catalyzing export opportunities for Nashik’s grape, horticulture, agro-commodities, precision engineering, and defense manufacturing clusters (12 Dec 2026) with global buyers and cold-chain logistics.',
      stat: '12 Dec 2026 • Agro-Horticulture & Engineering Meet',
      location: 'Nashik, Maharashtra',
      image: '/banner/nashik.png',
      category: 'Export Summit',
      actionText: 'Register for Nashik Summit',
    },
    {
      id: 'sambhaji-nagar-export-summit',
      badge: 'MARATHWADA EXPORT HUB',
      title: 'Chhatrapati Sambhaji Nagar Export Summit (17 Jan 2027)',
      subtitle:
        'Accelerating export potential for Marathwada’s automotive, pharmaceutical, plastic, and heavy engineering MSMEs (17 Jan 2027) with international trade delegations and port logistics access.',
      stat: '17 Jan 2027 • Marathwada Industrial & Pharma Export Meet',
      location: 'Chhatrapati Sambhaji Nagar, Maharashtra',
      image: '/banner/chhatrapati.png',
      category: 'Export Summit',
      actionText: 'Register for Sambhaji Nagar Summit',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  const thumbContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbContainerRef.current) {
      const container = thumbContainerRef.current;
      const activeBtn = container.children[currentIndex] as HTMLElement;
      if (activeBtn) {
        const scrollLeft =
          activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex]);

  return (
    <div
      className="relative w-full bg-slate-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Main Slideshow Container */}
      <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px]">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with subtle Ken Burns zoom */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{ backgroundImage: `url("${slide.image}")` }}
              />

              {/* Rich Multi-Layered Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/60" />

              {/* Content Overlay */}
              <div className="relative z-20 h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-3xl space-y-4 pt-4 sm:pt-0">
                  {/* Top Badge & Meta Info */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 bg-[#c2410c] text-white text-[11px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-sm shadow-md tracking-wider">
                      <Sparkles className="w-3 h-3 text-amber-200" />
                      {slide.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md text-amber-200 text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-amber-500/30">
                      <MapPin className="w-3 h-3 text-amber-300" />
                      {slide.location}
                    </span>
                  </div>

                  {/* Big Hero Title */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
                    {slide.subtitle}
                  </p>

                  {/* Key Metric / Highlight Strip */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded text-xs text-amber-300 font-semibold shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{slide.stat}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-3 flex-wrap">
                    <button
                      onClick={() => onPillarClick(slide.title)}
                      className="bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                    >
                      <span>{slide.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onSearchClick}
                      className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded transition-all cursor-pointer"
                    >
                      View All Initiatives
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Info Pill at Top Center */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-medium shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Vishwa Udyam Sahayta Foundation: Namaste India Initiatives</span>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrev}
        aria-label="Previous Gallery Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md border border-white/25 text-white flex items-center justify-center shadow-xl transition-all transform hover:scale-110 cursor-pointer group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-300 transition-colors" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNext}
        aria-label="Next Gallery Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md border border-white/25 text-white flex items-center justify-center shadow-xl transition-all transform hover:scale-110 cursor-pointer group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-300 transition-colors" />
      </button>

      {/* Bottom Gallery Thumbnail Bar & Controls */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          {/* Slide Indicator Dots & Thumbnails */}
          <div
            ref={thumbContainerRef}
            className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto py-1 max-w-[65%] sm:max-w-[72%] scrollbar-none no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {slides.map((s, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative shrink-0 flex items-center gap-2 px-2.5 py-1.5 rounded-md transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-black/85 backdrop-blur-md border-2 border-[#c2410c] shadow-lg text-white scale-102'
                      : 'bg-black/45 backdrop-blur-xs border border-white/20 text-slate-300 hover:bg-black/65'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <img
                    src={s.image}
                    alt={s.badge}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded object-cover transition-transform ${
                      isActive ? 'scale-105 ring-1 ring-[#c2410c]' : 'opacity-70 group-hover:opacity-100'
                    }`}
                  />
                  <div className="text-left hidden xl:block pr-1 max-w-[130px]">
                    <div className="text-[10px] font-extrabold tracking-wider uppercase truncate">
                      {s.badge}
                    </div>
                    <div className="text-[9px] text-slate-400 truncate">{s.category}</div>
                  </div>
                  {/* Slide number badge */}
                  <span className={`text-[10px] font-bold px-1 rounded ${isActive ? 'bg-[#c2410c] text-white' : 'bg-white/10 text-slate-400'}`}>
                    {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Floating Controls: Play/Pause, Slide Index, Voice Assistant, Search */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Slide Index Badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 text-white text-xs font-bold">
              <Layers className="w-3.5 h-3.5 text-amber-300" />
              <span>
                {String(currentIndex + 1).padStart(2, '0')}{' '}
                <span className="opacity-40">/</span>{' '}
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Play / Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
              title={isPlaying ? 'Pause Gallery' : 'Play Gallery'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>



            {/* Explore Button Pill */}
            <button
              onClick={onSearchClick}
              className="hidden md:flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold py-2 px-3.5 rounded-full shadow-lg transition-all cursor-pointer border border-orange-300/30"
            >
              <Search className="w-3.5 h-3.5 text-amber-200" />
              <span>Explore Portal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

