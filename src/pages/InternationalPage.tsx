import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup,
} from 'react-simple-maps';
import {
  Globe2,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  ChevronRight,
  TrendingUp,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
} from 'lucide-react';

interface InternationalPageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
  onSearchOpen?: (query?: string) => void;
}

interface CountryNode {
  id: string;
  slug: string;
  name: string;
  flag: string;
  flagUrl: string;
  code: string;
  region: 'domestic' | 'south-asia' | 'southeast-asia' | 'east-asia' | 'middle-east' | 'africa' | 'europe';
  hub: string;
  tagline: string;
  stats: string;
  status: string;
  coordinates: [number, number]; // [Longitude, Latitude]
  color: string;
  strokeColor: string;
  hoverColor: string;
}

const geoUrl = '/world-110m.json';

export const InternationalPage: React.FC<InternationalPageProps> = ({ onMemberClick }) => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeCountry, setActiveCountry] = useState<string>('IN');
  const [mapPosition, setMapPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [65, 20],
    zoom: 1.1,
  });

  const mumbaiCoordinates: [number, number] = [72.8777, 19.0760]; // Mumbai Anchor Hub

  const countries: CountryNode[] = [
    {
      id: 'IN',
      slug: 'india',
      name: 'India',
      flag: '🇮🇳',
      flagUrl: '/flags/in.png',
      code: 'IN',
      region: 'domestic',
      hub: 'Mumbai / JNPT Port & National Hub',
      tagline: 'Apex National Platform & Global Maritime Gateway',
      stats: '33+ State Conclaves',
      status: 'Anchor Global Hub',
      coordinates: [72.8777, 19.0760],
      color: '#ea580c', // Saffron Orange
      strokeColor: '#fb923c',
      hoverColor: '#f97316',
    },
    {
      id: 'NP',
      slug: 'nepal',
      name: 'Nepal',
      flag: '🇳🇵',
      flagUrl: '/flags/np.png',
      code: 'NP',
      region: 'south-asia',
      hub: 'Kathmandu, Birgunj Dry Port & Bhairahawa',
      tagline: 'Cross-Border SAARC Trade & CNIYEF Partnership',
      stats: 'NPR 1,134+ Bn Trade',
      status: 'Active Bilateral Desk',
      coordinates: [85.3240, 27.7172],
      color: '#e11d48', // Royal Crimson
      strokeColor: '#fb7185',
      hoverColor: '#f43f5e',
    },
    {
      id: 'CN',
      slug: 'china',
      name: 'China',
      flag: '🇨🇳',
      flagUrl: '/flags/cn.png',
      code: 'CN',
      region: 'east-asia',
      hub: 'Guangzhou, Yiwu, Shanghai & Shenzhen',
      tagline: 'Direct OEM Machinery Sourcing & Canton Fair Delegations',
      stats: 'Direct Factory Audits',
      status: 'Active Overseas Desk',
      coordinates: [113.2644, 23.1291],
      color: '#dc2626', // Crimson Red
      strokeColor: '#f87171',
      hoverColor: '#ef4444',
    },
    {
      id: 'BD',
      slug: 'bangladesh',
      name: 'Bangladesh',
      flag: '🇧🇩',
      flagUrl: '/flags/bd.png',
      code: 'BD',
      region: 'south-asia',
      hub: 'Dhaka, Chittagong Port & Petrapole Border',
      tagline: 'Duty-Free SAFTA Cross-Border & Maritime Gateway',
      stats: 'US$ 15+ Bn Trade',
      status: 'Bilateral Trade Linkage',
      coordinates: [90.4125, 23.8103],
      color: '#059669', // Emerald Green
      strokeColor: '#34d399',
      hoverColor: '#10b981',
    },
    {
      id: 'LK',
      slug: 'sri-lanka',
      name: 'Sri Lanka',
      flag: '🇱🇰',
      flagUrl: '/flags/lk.png',
      code: 'LK',
      region: 'south-asia',
      hub: 'Colombo Port & Kandy Commercial Center',
      tagline: 'ISFTA Preferential Maritime Channel via Tuticorin/JNPT',
      stats: '48-72 Hr Transit',
      status: 'Bilateral Trade Linkage',
      coordinates: [79.8612, 6.9271],
      color: '#d97706', // Amber Gold
      strokeColor: '#fbbf24',
      hoverColor: '#f59e0b',
    },
    {
      id: 'TH',
      slug: 'thailand',
      name: 'Thailand',
      flag: '🇹🇭',
      flagUrl: '/flags/th.png',
      code: 'TH',
      region: 'southeast-asia',
      hub: 'Bangkok & Laem Chabang Deep Sea Port',
      tagline: 'ASEAN 2nd Largest Economy & B2B Trade Bridge',
      stats: 'USD 513 Bn GDP',
      status: 'Active Delegation Desk',
      coordinates: [100.5018, 13.7563],
      color: '#6366f1', // Vivid Indigo
      strokeColor: '#a5b4fc',
      hoverColor: '#818cf8',
    },
    {
      id: 'JP',
      slug: 'japan',
      name: 'Japan',
      flag: '🇯🇵',
      flagUrl: '/flags/jp.png',
      code: 'JP',
      region: 'east-asia',
      hub: 'Tokyo, Osaka & Yokohama Port',
      tagline: 'India-Japan CEPA High-Tech Industrial Cooperation',
      stats: '94%+ Zero Duty Lines',
      status: 'Strategic Trade Desk',
      coordinates: [139.6917, 35.6895],
      color: '#f43f5e', // Rose Coral
      strokeColor: '#fda4af',
      hoverColor: '#fb7185',
    },
    {
      id: 'VN',
      slug: 'vietnam',
      name: 'Vietnam',
      flag: '🇻🇳',
      flagUrl: '/flags/vn.png',
      code: 'VN',
      region: 'southeast-asia',
      hub: 'Ho Chi Minh City & Hanoi Port',
      tagline: 'High-Growth Southeast Asian Supply Chain & Contract Mfg',
      stats: 'US$ 14.82 Bn Trade',
      status: 'Active Delegation Desk',
      coordinates: [105.8342, 21.0278],
      color: '#0d9488', // Deep Teal
      strokeColor: '#5eead4',
      hoverColor: '#14b8a6',
    },
    {
      id: 'MY',
      slug: 'malaysia',
      name: 'Malaysia',
      flag: '🇲🇾',
      flagUrl: '/flags/my.png',
      code: 'MY',
      region: 'southeast-asia',
      hub: 'Kuala Lumpur & Port Klang',
      tagline: 'MICECA Bilateral Comprehensive Economic Cooperation',
      stats: 'US$ 19+ Bn Trade',
      status: 'ASEAN Corridor Hub',
      coordinates: [101.6869, 3.1390],
      color: '#8b5cf6', // Violet Purple
      strokeColor: '#c4b5fd',
      hoverColor: '#a78bfa',
    },
    {
      id: 'SG',
      slug: 'singapore',
      name: 'Singapore',
      flag: '🇸🇬',
      flagUrl: '/flags/sg.png',
      code: 'SG',
      region: 'southeast-asia',
      hub: 'Jurong Industrial Hub & Port of Singapore',
      tagline: 'APAC Financial Clearing, Holding Entity & Maritime Gateway',
      stats: 'Top FDI Source',
      status: 'Global Financial Hub',
      coordinates: [103.8198, 1.3521],
      color: '#06b6d4', // Cyan
      strokeColor: '#67e8f9',
      hoverColor: '#22d3ee',
    },
    {
      id: 'ID',
      slug: 'indonesia',
      name: 'Indonesia',
      flag: '🇮🇩',
      flagUrl: '/flags/id.png',
      code: 'ID',
      region: 'southeast-asia',
      hub: 'Jakarta (Tanjung Priok) & Surabaya Port',
      tagline: 'Largest ASEAN Economy, Energy & Agro Commodity Linkage',
      stats: 'US$ 38+ Bn Trade',
      status: 'Resource & Energy Hub',
      coordinates: [106.8456, -6.2088],
      color: '#65a30d', // Lime Forest
      strokeColor: '#bef264',
      hoverColor: '#84cc16',
    },
    {
      id: 'TW',
      slug: 'taiwan',
      name: 'Taiwan',
      flag: '🇹🇼',
      flagUrl: '/flags/tw.png',
      code: 'TW',
      region: 'east-asia',
      hub: 'Taipei & Kaohsiung Port',
      tagline: 'Global Leader in Microelectronics, PCB & Hardware Tooling',
      stats: '60%+ Global Chips',
      status: 'High-Tech Sourcing Desk',
      coordinates: [121.5654, 25.0330],
      color: '#d946ef', // Fuchsia
      strokeColor: '#f0abfc',
      hoverColor: '#e879f9',
    },
    {
      id: 'KR',
      slug: 'south-korea',
      name: 'South Korea',
      flag: '🇰🇷',
      flagUrl: '/flags/kr.png',
      code: 'KR',
      region: 'east-asia',
      hub: 'Seoul & Busan International Port',
      tagline: 'India-Korea CEPA Smart Manufacturing & EV Technology',
      stats: 'US$ 27+ Bn Trade',
      status: 'Industrial Tech Hub',
      coordinates: [126.9780, 37.5665],
      color: '#0284c7', // Sky Blue
      strokeColor: '#7dd3fc',
      hoverColor: '#38bdf8',
    },
    {
      id: 'AE',
      slug: 'uae',
      name: 'UAE',
      flag: '🇦🇪',
      flagUrl: '/flags/ae.png',
      code: 'AE',
      region: 'middle-east',
      hub: 'Dubai, Abu Dhabi, RAKEZ & JAFZA',
      tagline: 'India-UAE CEPA Zero-Duty Gateway & GCC Re-Export Hub',
      stats: 'US$ 100 Bn Target',
      status: 'Active Freezone Hub',
      coordinates: [55.2708, 25.2048],
      color: '#ca8a04', // Warm Gold
      strokeColor: '#fde047',
      hoverColor: '#eab308',
    },
    {
      id: 'OM',
      slug: 'oman',
      name: 'Oman',
      flag: '🇴🇲',
      flagUrl: '/flags/om.png',
      code: 'OM',
      region: 'middle-east',
      hub: 'Muscat & Sohar Industrial Port',
      tagline: 'Direct Sea Route to GCC & Sohar Freezone Transshipment',
      stats: '3-4 Day Shipping',
      status: 'Bilateral GCC Linkage',
      coordinates: [58.4059, 23.5880],
      color: '#f97316', // Tangerine
      strokeColor: '#fdba74',
      hoverColor: '#fb923c',
    },
    {
      id: 'QA',
      slug: 'qatar',
      name: 'Qatar',
      flag: '🇶🇦',
      flagUrl: '/flags/qa.png',
      code: 'QA',
      region: 'middle-east',
      hub: 'Doha & Hamad Deep Sea Port',
      tagline: 'Major LNG Energy Partner & Commercial Infrastructure Gateway',
      stats: 'US$ 18+ Bn Trade',
      status: 'Gulf Trade Linkage',
      coordinates: [51.5310, 25.2854],
      color: '#9f1239', // Maroon Wine
      strokeColor: '#fda4af',
      hoverColor: '#be123c',
    },
    {
      id: 'ZA',
      slug: 'south-africa',
      name: 'South Africa',
      flag: '🇿🇦',
      flagUrl: '/flags/za.png',
      code: 'ZA',
      region: 'africa',
      hub: 'Johannesburg & Durban Port',
      tagline: 'Springboard to the 16-Nation Southern African SADC Free Trade Area',
      stats: 'US$ 18+ Bn Trade',
      status: 'Africa Gateway Hub',
      coordinates: [28.0473, -26.2041],
      color: '#9333ea', // Electric Purple
      strokeColor: '#d8b4fe',
      hoverColor: '#a855f7',
    },
    {
      id: 'ET',
      slug: 'ethiopia',
      name: 'Ethiopia',
      flag: '🇪🇹',
      flagUrl: '/flags/et.png',
      code: 'ET',
      region: 'africa',
      hub: 'Addis Ababa & Modjo Dry Port',
      tagline: 'Fast-Growing East African Economy & Industrial Park Sourcing Base',
      stats: 'Top 3 Foreign Investor',
      status: 'East Africa Linkage',
      coordinates: [38.7578, 8.9806],
      color: '#16a34a', // Grass Green
      strokeColor: '#86efac',
      hoverColor: '#22c55e',
    },
    {
      id: 'DE',
      slug: 'germany',
      name: 'Germany',
      flag: '🇩🇪',
      flagUrl: '/flags/de.png',
      code: 'DE',
      region: 'europe',
      hub: 'Frankfurt & Hamburg Port',
      tagline: 'Europe’s Largest Economy, Industry 4.0 & Engineering Gateway',
      stats: 'US$ 30+ Bn Trade',
      status: 'EU Technology Corridor',
      coordinates: [8.6821, 50.1109],
      color: '#eab308', // Mustard Gold
      strokeColor: '#fef08a',
      hoverColor: '#fde047',
    },
    {
      id: 'RU',
      slug: 'russia',
      name: 'Russia',
      flag: '🇷🇺',
      flagUrl: '/flags/ru.png',
      code: 'RU',
      region: 'europe',
      hub: 'Moscow, St. Petersburg & Vladivostok',
      tagline: 'INSTC Multimodal Logistics & Rupee-Rouble Strategic Trade Corridor',
      stats: 'US$ 65+ Bn Trade',
      status: 'Eurasian Energy Hub',
      coordinates: [37.6173, 55.7558],
      color: '#2563eb', // Royal Blue
      strokeColor: '#93c5fd',
      hoverColor: '#3b82f6',
    },
  ];

  // Map country name or ISO id to country node for color matching
  const getCountryStyle = (geoName: string, geoId: string) => {
    const name = (geoName || '').toLowerCase();
    const id = String(geoId || '');

    const found = countries.find((c) => {
      const cName = c.name.toLowerCase();
      return (
        name === cName ||
        (cName === 'india' && (name.includes('india') || id === '356')) ||
        (cName === 'nepal' && (name.includes('nepal') || id === '524')) ||
        (cName === 'china' && (name.includes('china') || id === '156')) ||
        (cName === 'bangladesh' && (name.includes('bangladesh') || id === '050' || id === '50')) ||
        (cName === 'sri lanka' && (name.includes('sri lanka') || id === '144')) ||
        (cName === 'thailand' && (name.includes('thailand') || id === '764')) ||
        (cName === 'japan' && (name.includes('japan') || id === '392')) ||
        (cName === 'vietnam' && (name.includes('vietnam') || id === '704')) ||
        (cName === 'malaysia' && (name.includes('malaysia') || id === '458')) ||
        (cName === 'singapore' && (name.includes('singapore') || id === '702')) ||
        (cName === 'indonesia' && (name.includes('indonesia') || id === '360')) ||
        (cName === 'taiwan' && (name.includes('taiwan') || id === '158')) ||
        (cName === 'south korea' && (name.includes('south korea') || name.includes('korea') || id === '410')) ||
        (cName === 'uae' && (name.includes('united arab emirates') || name.includes('emirates') || id === '784')) ||
        (cName === 'oman' && (name.includes('oman') || id === '512')) ||
        (cName === 'qatar' && (name.includes('qatar') || id === '634')) ||
        (cName === 'south africa' && (name.includes('south africa') || id === '710')) ||
        (cName === 'ethiopia' && (name.includes('ethiopia') || id === '231')) ||
        (cName === 'germany' && (name.includes('germany') || id === '276')) ||
        (cName === 'russia' && (name.includes('russia') || id === '643'))
      );
    });

    if (found) {
      const isSelected = activeCountry === found.id;
      return {
        isMatch: true,
        fill: isSelected ? found.hoverColor : found.color,
        stroke: found.strokeColor,
        hoverFill: found.hoverColor,
        node: found,
      };
    }

    return {
      isMatch: false,
      fill: '#132740',
      stroke: '#1d3d63',
      hoverFill: '#1e3a5f',
      node: null,
    };
  };

  const filteredCountries = countries.filter((c) => {
    if (selectedRegion === 'all') return true;
    if (selectedRegion === 'domestic') return c.region === 'domestic';
    if (selectedRegion === 'asia') return c.region === 'east-asia' || c.region === 'south-asia' || c.region === 'southeast-asia';
    if (selectedRegion === 'middle-east') return c.region === 'middle-east';
    if (selectedRegion === 'africa') return c.region === 'africa';
    if (selectedRegion === 'europe-russia') return c.region === 'europe';
    return true;
  });

  const selectedCountryData = countries.find((c) => c.id === activeCountry) || countries[0];

  const handleCountryNavigation = (node: { slug: string; id?: string }) => {
    if (node.slug === 'india' || node.id === 'IN') {
      navigate('/namaste-india-group');
    } else {
      navigate(`/international/${node.slug}`);
    }
  };

  const handleZoomIn = () => {
    if (mapPosition.zoom >= 4) return;
    setMapPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.3 }));
  };

  const handleZoomOut = () => {
    if (mapPosition.zoom <= 0.8) return;
    setMapPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.3 }));
  };

  const handleResetZoom = () => {
    setMapPosition({ coordinates: [65, 20], zoom: 1.1 });
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 selection:bg-orange-500 selection:text-white font-sans">
      {/* 1. Master International Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-600/20 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <span className="text-amber-400">International Corridors</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Globe2 className="w-4 h-4 text-orange-400" />
                <span>GLOBAL CORRIDOR NETWORK &bull; 20 DEDICATED COUNTRY CORRIDORS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Global Commerce Network: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                  20 Strategic Country Desks &amp; Trade Corridors
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Connecting Indian enterprises with 20 strategic economies across South Asia, Southeast Asia, East Asia, the Middle East, Africa, and Europe. Explore dedicated trade corridor pages with bilateral market intelligence, Free Trade Agreement advisory, and direct overseas liaison.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-[#c2410c] to-[#ea580c] hover:from-[#ea580c] hover:to-[#f97316] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-950/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Connect with International Directorate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#interactive-world-map"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Globe2 className="w-4 h-4 text-cyan-400" />
                  <span>Interactive World Map &darr;</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="lg:col-span-4 bg-[#0d1c2e]/95 border-2 border-cyan-500/40 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Global Footprint</span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Dedicated Country Pages:</span>
                  <span className="font-bold text-cyan-300">20 Sovereign Corridors</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Central Maritime Gateway:</span>
                  <span className="font-bold text-white">Mumbai &bull; JNPT Nhava Sheva</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">International Summits:</span>
                  <span className="font-bold text-amber-300">33+ Global Conclaves</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Bilateral FTA Advantage:</span>
                  <span className="font-bold text-emerald-400">CEPA, AIFTA, SAFTA, ISFTA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive World Map Visualizer Section */}
      <section id="interactive-world-map" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>INTERACTIVE GLOBAL CORRIDORS MAP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            20 Strategic Corridors Radiating from Mumbai
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Click on any country pin or territory on the map to inspect its bilateral trade metrics, or open its dedicated country corridor page.
          </p>
        </div>

        {/* Map Container Card */}
        <div className="bg-[#071322] border-2 border-cyan-500/50 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden mb-12">
          {/* Zoom Controls */}
          <div className="absolute top-6 right-6 z-20 flex flex-col gap-2 bg-slate-900/90 border border-slate-700 p-1.5 rounded-xl shadow-xl backdrop-blur-md">
            <button
              onClick={handleZoomIn}
              aria-label="Zoom In Map"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-cyan-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              aria-label="Zoom Out Map"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-cyan-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              aria-label="Reset Map View"
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-cyan-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* React Simple Maps Canvas */}
          <div className="w-full aspect-[16/9] max-h-[580px] overflow-hidden rounded-2xl bg-[#0b1b30] border border-cyan-900/40 relative">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 135,
              }}
              className="w-full h-full"
            >
              <ZoomableGroup
                zoom={mapPosition.zoom}
                center={mapPosition.coordinates}
                onMoveEnd={(pos) => setMapPosition(pos)}
              >
                {/* World Geography Layer with Unique Color for Each Corridor Country */}
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const geoName = geo.properties?.name || '';
                      const geoId = String(geo.id || '');
                      const styleInfo = getCountryStyle(geoName, geoId);

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={styleInfo.fill}
                          stroke={styleInfo.stroke}
                          strokeWidth={styleInfo.isMatch ? 0.9 : 0.5}
                          onClick={() => {
                            if (styleInfo.node) {
                              handleCountryNavigation(styleInfo.node);
                            }
                          }}
                          style={{
                            default: { outline: 'none', cursor: styleInfo.isMatch ? 'pointer' : 'default' },
                            hover: { fill: styleInfo.hoverFill, outline: 'none' },
                            pressed: { outline: 'none' },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* Trade Trajectory Lines from Mumbai to Destination Countries */}
                {countries
                  .filter((c) => c.id !== 'IN')
                  .map((c) => {
                    const isSelected = activeCountry === c.id;
                    return (
                      <Line
                        key={`line-${c.id}`}
                        from={mumbaiCoordinates}
                        to={c.coordinates}
                        stroke={isSelected ? '#ffffff' : c.strokeColor}
                        strokeWidth={isSelected ? 3.5 : 1.4}
                        strokeDasharray={isSelected ? '6 4' : '3 3'}
                        strokeOpacity={isSelected ? 1 : 0.6}
                      />
                    );
                  })}

                {/* Destination Country Markers: Clean Dot & Floating FreeFlagIcons */}
                {countries.map((c) => {
                  const isSelected = activeCountry === c.id;
                  const isAnchor = c.id === 'IN';

                  return (
                    <Marker
                      key={`marker-${c.id}`}
                      coordinates={c.coordinates}
                      onClick={() => handleCountryNavigation(c)}
                      className="cursor-pointer group"
                    >
                      {/* Outer pulse circle for selected */}
                      {isSelected && !isAnchor && (
                        <circle
                          r={14}
                          fill="none"
                          stroke={c.strokeColor}
                          strokeWidth={2}
                          className="animate-ping"
                        />
                      )}

                      {/* Clean Location Dot */}
                      <circle
                        r={isAnchor ? 7.5 : isSelected ? 7 : 5}
                        fill={c.color}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? 2.5 : 1.5}
                        className="transition-all duration-200"
                      />

                      {/* Floating FreeFlagIcon image on Map */}
                      <image
                        href={c.flagUrl}
                        x={-9}
                        y={-22}
                        width={18}
                        height={18}
                        className="select-none pointer-events-none drop-shadow-md"
                      />
                    </Marker>
                  );
                })}
              </ZoomableGroup>
            </ComposableMap>
          </div>

          {/* Active Country Detail Spotlight Overlay Bar */}
          <div
            className="mt-6 border-2 rounded-2xl p-4 sm:p-6 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl transition-all"
            style={{
              backgroundColor: '#0f2138',
              borderColor: selectedCountryData.strokeColor,
            }}
          >
            <div className="flex items-center gap-4">
              <img
                src={selectedCountryData.flagUrl}
                alt={selectedCountryData.name}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full shadow-lg border border-slate-700 bg-slate-900/80 p-0.5"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedCountryData.name} Corridor
                  </h3>
                  <span
                    className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: selectedCountryData.color }}
                  >
                    {selectedCountryData.status}
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  <span className="font-semibold text-cyan-300">Key Port / Cities: </span>
                  {selectedCountryData.hub}
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  <span className="font-semibold text-amber-300">Trade Scope: </span>
                  {selectedCountryData.tagline}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <Link
                to={selectedCountryData.id === 'IN' ? '/namaste-india-group' : `/international/${selectedCountryData.slug}`}
                className="text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto hover:brightness-110"
                style={{ backgroundColor: selectedCountryData.color }}
              >
                <span>Open {selectedCountryData.name} Dedicated Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 20 Dedicated Country Pages Directory */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              All 20 Dedicated Country Corridor Pages
            </h3>
            <p className="text-xs text-slate-400">
              Each country has its own dedicated corridor page with bilateral trade data, representatives, and export roadmaps
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All 20 Countries' },
              { id: 'domestic', label: 'India (Anchor Hub)' },
              { id: 'asia', label: 'South, East & Southeast Asia' },
              { id: 'middle-east', label: 'Middle East & GCC' },
              { id: 'africa', label: 'Africa Corridors' },
              { id: 'europe-russia', label: 'Europe & Russia' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedRegion === tab.id
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-950'
                    : 'bg-slate-800/90 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 20 Country Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((c) => {
            const isSelected = activeCountry === c.id;
            const targetPath = c.id === 'IN' ? '/namaste-india-group' : `/international/${c.slug}`;

            return (
              <div
                key={c.id}
                onClick={() => handleCountryNavigation(c)}
                className={`bg-[#0d1b2e] rounded-2xl border transition-all p-6 flex flex-col justify-between group space-y-4 cursor-pointer hover:shadow-xl ${
                  isSelected ? 'shadow-2xl bg-[#0f233a]' : 'hover:border-slate-600'
                }`}
                style={{
                  borderColor: isSelected ? c.strokeColor : '#1e293b',
                  borderTopWidth: '3px',
                  borderTopColor: c.color,
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={c.flagUrl}
                        alt={c.name}
                        className="w-10 h-10 object-contain rounded-full shadow-md border border-slate-700/80 bg-slate-900/60 p-0.5 group-hover:scale-110 transition-transform"
                      />
                      <div>
                        <h4
                          className="text-base font-black text-white transition-colors"
                          style={{ color: isSelected ? c.strokeColor : '#ffffff' }}
                        >
                          {c.name}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          {c.code}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase text-white shadow-xs"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.status}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs pt-2 border-t border-slate-800/80">
                    <div className="text-slate-300 font-medium">
                      <span className="text-cyan-400 font-semibold">Hub: </span>
                      {c.hub}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-light line-clamp-2">
                      {c.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-300">{c.stats}</span>
                  <Link
                    to={targetPath}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-white hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Page</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Global Capabilities Banner */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="bg-gradient-to-r from-orange-700 via-amber-700 to-yellow-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Expand Your Global Footprint with Namaste India Group</h3>
            <p className="text-xs sm:text-sm text-orange-100 max-w-2xl font-light">
              Join international trade missions, participate in foreign expos, establish overseas entities, and connect with verified buyers across all 20 sovereign country corridors.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-orange-950 hover:bg-orange-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Join International Directorate
          </button>
        </div>
      </section>
    </div>
  );
};
