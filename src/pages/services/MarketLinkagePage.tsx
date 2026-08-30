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
  Truck,
  Ship,
  Plane,
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers,
  Store,
  Boxes,
  Compass,
  Navigation,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';

interface MarketLinkagePageProps {
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

interface CountryNode {
  id: string;
  name: string;
  flag: string;
  flagUrl: string;
  code: string;
  region: 'domestic' | 'south-asia' | 'southeast-asia' | 'east-asia' | 'middle-east' | 'africa' | 'europe';
  hub: string;
  commodities: string;
  corridor: string;
  status: string;
  coordinates: [number, number]; // [Longitude, Latitude]
  color: string;
  strokeColor: string;
  hoverColor: string;
}

const geoUrl = '/world-110m.json';

export const MarketLinkagePage: React.FC<MarketLinkagePageProps> = ({
  onMemberClick,
}) => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeCountry, setActiveCountry] = useState<string>('IN');
  const [mapPosition, setMapPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [65, 20],
    zoom: 1.1,
  });

  const handleCountryNavigation = (node: { id: string; name: string }) => {
    const slugMap: Record<string, string> = {
      IN: 'india',
      NP: 'nepal',
      CN: 'china',
      BD: 'bangladesh',
      LK: 'sri-lanka',
      TH: 'thailand',
      JP: 'japan',
      VN: 'vietnam',
      MY: 'malaysia',
      SG: 'singapore',
      ID: 'indonesia',
      TW: 'taiwan',
      KR: 'south-korea',
      AE: 'uae',
      OM: 'oman',
      QA: 'qatar',
      ZA: 'south-africa',
      ET: 'ethiopia',
      DE: 'germany',
      RU: 'russia',
    };
    const slug = slugMap[node.id] || node.name.toLowerCase().replace(/\s+/g, '-');
    if (slug === 'india' || node.id === 'IN') {
      navigate('/namaste-india-group');
    } else {
      navigate(`/international/${slug}`);
    }
  };

  const mumbaiCoordinates: [number, number] = [72.8777, 19.0760]; // Mumbai Anchor Hub

  const countries: CountryNode[] = [
    {
      id: 'IN',
      name: 'India',
      flag: '🇮🇳',
      flagUrl: '/flags/in.png',
      code: 'IN',
      region: 'domestic',
      hub: 'Mumbai / JNPT Port & National Hub',
      commodities: 'Agro, Engineering, Textiles, Pharmaceuticals & FMCG',
      corridor: 'Anchor Global Hub connecting Mumbai to all 28 States & 8 UTs',
      status: 'Active Headquarters Hub',
      coordinates: [72.8777, 19.0760],
      color: '#ea580c', // Saffron Orange
      strokeColor: '#fb923c',
      hoverColor: '#f97316',
    },
    {
      id: 'NP',
      name: 'Nepal',
      flag: '🇳🇵',
      flagUrl: '/flags/np.png',
      code: 'NP',
      region: 'south-asia',
      hub: 'Kathmandu, Birgunj Dry Port & Bhairahawa',
      commodities: 'Agro Commodities, FMCG, Spices, Textiles & Construction Materials',
      corridor: 'India-Nepal Treaty of Transit & Duty-Free SAFTA Land Custom Corridors',
      status: 'Active Bilateral Desk',
      coordinates: [85.3240, 27.7172],
      color: '#e11d48', // Royal Crimson
      strokeColor: '#fb7185',
      hoverColor: '#f43f5e',
    },
    {
      id: 'CN',
      name: 'China',
      flag: '🇨🇳',
      flagUrl: '/flags/cn.png',
      code: 'CN',
      region: 'east-asia',
      hub: 'Guangzhou, Yiwu, Shanghai & Shenzhen',
      commodities: 'Industrial Machinery, Robotics, Hardware, Electronics & Tooling',
      corridor: 'Namaste China Direct OEM Sourcing & Canton Fair Corridors',
      status: 'Active Overseas Desk',
      coordinates: [113.2644, 23.1291],
      color: '#dc2626', // Crimson Red
      strokeColor: '#f87171',
      hoverColor: '#ef4444',
    },
    {
      id: 'BD',
      name: 'Bangladesh',
      flag: '🇧🇩',
      flagUrl: '/flags/bd.png',
      code: 'BD',
      region: 'south-asia',
      hub: 'Dhaka, Chittagong Port & Petrapole Border',
      commodities: 'Cotton Yarn, Dyes, Chemicals, Capital Machinery & Agro Produce',
      corridor: 'Cross-Border Overland & Maritime Duty-Free SAFTA Route',
      status: 'Bilateral Trade Linkage',
      coordinates: [90.4125, 23.8103],
      color: '#059669', // Emerald Green
      strokeColor: '#34d399',
      hoverColor: '#10b981',
    },
    {
      id: 'LK',
      name: 'Sri Lanka',
      flag: '🇱🇰',
      flagUrl: '/flags/lk.png',
      code: 'LK',
      region: 'south-asia',
      hub: 'Colombo Port & Kandy Commercial Center',
      commodities: 'Pharmaceuticals, Food Processing, Auto Parts & Construction Materials',
      corridor: 'ISFTA Bilateral Maritime Trade Channel via Tuticorin / JNPT',
      status: 'Bilateral Trade Linkage',
      coordinates: [79.8612, 6.9271],
      color: '#d97706', // Amber Gold
      strokeColor: '#fbbf24',
      hoverColor: '#f59e0b',
    },
    {
      id: 'TH',
      name: 'Thailand',
      flag: '🇹🇭',
      flagUrl: '/flags/th.png',
      code: 'TH',
      region: 'southeast-asia',
      hub: 'Bangkok & Laem Chabang Deep Sea Port',
      commodities: 'Food Packaging Tech, Auto Components, Rubber & Industrial Machinery',
      corridor: 'ASEAN-India Free Trade Area (AIFTA) Industrial Corridor',
      status: 'Active Delegation Desk',
      coordinates: [100.5018, 13.7563],
      color: '#6366f1', // Vivid Indigo
      strokeColor: '#a5b4fc',
      hoverColor: '#818cf8',
    },
    {
      id: 'JP',
      name: 'Japan',
      flag: '🇯🇵',
      flagUrl: '/flags/jp.png',
      code: 'JP',
      region: 'east-asia',
      hub: 'Tokyo, Osaka & Yokohama Port',
      commodities: 'Precision Tooling, Robotics, Semiconductor Equipment & Bio-Chemicals',
      corridor: 'India-Japan CEPA High-Tech Industrial Cooperation',
      status: 'Strategic Trade Desk',
      coordinates: [139.6917, 35.6895],
      color: '#f43f5e', // Rose Coral
      strokeColor: '#fda4af',
      hoverColor: '#fb7185',
    },
    {
      id: 'VN',
      name: 'Vietnam',
      flag: '🇻🇳',
      flagUrl: '/flags/vn.png',
      code: 'VN',
      region: 'southeast-asia',
      hub: 'Ho Chi Minh City & Hanoi Port',
      commodities: 'Agro Commodities, Electronic Components, Seafood & Specialty Chemicals',
      corridor: 'Rapid-Growth Southeast Asian Supply Chain & Contract Mfg.',
      status: 'Active Delegation Desk',
      coordinates: [105.8342, 21.0278],
      color: '#0d9488', // Deep Teal
      strokeColor: '#5eead4',
      hoverColor: '#14b8a6',
    },
    {
      id: 'MY',
      name: 'Malaysia',
      flag: '🇲🇾',
      flagUrl: '/flags/my.png',
      code: 'MY',
      region: 'southeast-asia',
      hub: 'Kuala Lumpur & Port Klang',
      commodities: 'Palm Oil Processing, Electrical Machinery, Oleochemicals & Solar Cells',
      corridor: 'MICECA Bilateral Comprehensive Economic Cooperation',
      status: 'ASEAN Corridor Hub',
      coordinates: [101.6869, 3.1390],
      color: '#8b5cf6', // Violet Purple
      strokeColor: '#c4b5fd',
      hoverColor: '#a78bfa',
    },
    {
      id: 'SG',
      name: 'Singapore',
      flag: '🇸🇬',
      flagUrl: '/flags/sg.png',
      code: 'SG',
      region: 'southeast-asia',
      hub: 'Jurong Industrial Hub & Port of Singapore',
      commodities: 'High-Tech Electronics, Refined Fuel, Precious Metals & FinTech',
      corridor: 'APAC Financial Clearing, Holding Entity & Maritime Gateway',
      status: 'Global Financial Hub',
      coordinates: [103.8198, 1.3521],
      color: '#06b6d4', // Cyan
      strokeColor: '#67e8f9',
      hoverColor: '#22d3ee',
    },
    {
      id: 'ID',
      name: 'Indonesia',
      flag: '🇮🇩',
      flagUrl: '/flags/id.png',
      code: 'ID',
      region: 'southeast-asia',
      hub: 'Jakarta (Tanjung Priok) & Surabaya Port',
      commodities: 'Coal, Palm Oil, Spices, Automotive Parts & Mining Equipment',
      corridor: 'ASEAN Mineral, Agro & Renewable Energy Supply Corridor',
      status: 'Resource & Energy Hub',
      coordinates: [106.8456, -6.2088],
      color: '#65a30d', // Lime Forest
      strokeColor: '#bef264',
      hoverColor: '#84cc16',
    },
    {
      id: 'TW',
      name: 'Taiwan',
      flag: '🇹🇼',
      flagUrl: '/flags/tw.png',
      code: 'TW',
      region: 'east-asia',
      hub: 'Taipei & Kaohsiung Port',
      commodities: 'Semiconductors, Microelectronics, Precision Machinery & Optical Gear',
      corridor: 'Global Semiconductor & Electronics Hardware Linkage',
      status: 'High-Tech Sourcing Desk',
      coordinates: [121.5654, 25.0330],
      color: '#d946ef', // Fuchsia
      strokeColor: '#f0abfc',
      hoverColor: '#e879f9',
    },
    {
      id: 'KR',
      name: 'South Korea',
      flag: '🇰🇷',
      flagUrl: '/flags/kr.png',
      code: 'KR',
      region: 'east-asia',
      hub: 'Seoul & Busan International Port',
      commodities: 'Automotive Tech, Petrochemicals, Steel & Advanced Electronics',
      corridor: 'India-Korea CEPA Industrial & Smart Factory Corridor',
      status: 'Industrial Tech Hub',
      coordinates: [126.9780, 37.5665],
      color: '#0284c7', // Sky Blue
      strokeColor: '#7dd3fc',
      hoverColor: '#38bdf8',
    },
    {
      id: 'AE',
      name: 'UAE',
      flag: '🇦🇪',
      flagUrl: '/flags/ae.png',
      code: 'AE',
      region: 'middle-east',
      hub: 'Dubai, Abu Dhabi, RAKEZ & Jebel Ali Free Zone',
      commodities: 'Gems & Jewellery, Food Commodities, Petroleum Products & FMCG',
      corridor: 'India-UAE CEPA Zero-Duty Gateway & GCC Transshipment Hub',
      status: 'Active Freezone Hub',
      coordinates: [55.2708, 25.2048],
      color: '#ca8a04', // Warm Gold
      strokeColor: '#fde047',
      hoverColor: '#eab308',
    },
    {
      id: 'OM',
      name: 'Oman',
      flag: '🇴🇲',
      flagUrl: '/flags/om.png',
      code: 'OM',
      region: 'middle-east',
      hub: 'Muscat & Sohar Industrial Port',
      commodities: 'Fertilizers, Mineral Fuels, Iron & Steel & Agricultural Produce',
      corridor: 'Strategic GCC Maritime Gateway & Direct Sea Route to Mumbai',
      status: 'Bilateral GCC Linkage',
      coordinates: [58.4059, 23.5880],
      color: '#f97316', // Tangerine
      strokeColor: '#fdba74',
      hoverColor: '#fb923c',
    },
    {
      id: 'QA',
      name: 'Qatar',
      flag: '🇶🇦',
      flagUrl: '/flags/qa.png',
      code: 'QA',
      region: 'middle-east',
      hub: 'Doha & Hamad Deep Sea Port',
      commodities: 'LNG & Petrochemicals, Construction Tech, Plastics & Food Supplies',
      corridor: 'Energy Supply Chain & Commercial Infrastructure Trade',
      status: 'Gulf Trade Linkage',
      coordinates: [51.5310, 25.2854],
      color: '#9f1239', // Maroon Wine
      strokeColor: '#fda4af',
      hoverColor: '#be123c',
    },
    {
      id: 'ZA',
      name: 'South Africa',
      flag: '🇿🇦',
      flagUrl: '/flags/za.png',
      code: 'ZA',
      region: 'africa',
      hub: 'Johannesburg & Durban Port',
      commodities: 'Precious Minerals, Automotive Assemblies, Coal & Agro-processing',
      corridor: 'SADC Gateway to Southern African Free Trade Area',
      status: 'Africa Gateway Hub',
      coordinates: [28.0473, -26.2041],
      color: '#9333ea', // Electric Purple
      strokeColor: '#d8b4fe',
      hoverColor: '#a855f7',
    },
    {
      id: 'ET',
      name: 'Ethiopia',
      flag: '🇪🇹',
      flagUrl: '/flags/et.png',
      code: 'ET',
      region: 'africa',
      hub: 'Addis Ababa & Modjo Dry Port',
      commodities: 'Textiles, Coffee, Pulses, Pharmaceuticals & Irrigation Machinery',
      corridor: 'East Africa Industrial Park & Agro-Processing Sourcing Base',
      status: 'East Africa Trade Linkage',
      coordinates: [38.7578, 8.9806],
      color: '#16a34a', // Grass Green
      strokeColor: '#86efac',
      hoverColor: '#22c55e',
    },
    {
      id: 'DE',
      name: 'Germany',
      flag: '🇩🇪',
      flagUrl: '/flags/de.png',
      code: 'DE',
      region: 'europe',
      hub: 'Frankfurt & Hamburg Port',
      commodities: 'Heavy Machinery, Automotive Engineering, CleanTech & Precision Tools',
      corridor: 'European Union Anchor Gateway for High-End Engineering MSMEs',
      status: 'EU Technology Corridor',
      coordinates: [8.6821, 50.1109],
      color: '#eab308', // Mustard Gold
      strokeColor: '#fef08a',
      hoverColor: '#fde047',
    },
    {
      id: 'RU',
      name: 'Russia',
      flag: '🇷🇺',
      flagUrl: '/flags/ru.png',
      code: 'RU',
      region: 'europe',
      hub: 'Moscow, St. Petersburg & Vladivostok',
      commodities: 'Crude Oil, Fertilizers, Metallurgy, Diamond Roughs & Edible Oils',
      corridor: 'INSTC (International North-South Transport Corridor) Rupee-Rouble Trade',
      status: 'Eurasian Energy & Agro Corridor',
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
    <div className="min-h-screen bg-[#070e1b] text-slate-100 selection:bg-cyan-500 selection:text-white font-sans">
      {/* 1. Global Trade Hero */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-cyan-950/60">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:underline text-slate-400">Home</Link>
            <span>/</span>
            <Link to="/service" className="hover:underline text-slate-400">Services</Link>
            <span>/</span>
            <span className="text-cyan-400">Market Linkage</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>MUMBAI TO ALL INDIAN STATES &bull; 20 STRATEGIC GLOBAL TRADE CORRIDORS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Market Linkage: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300">
                  From Mumbai to All States &amp; 20 International Corridors
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light">
                Empowering manufacturers, exporters, agro-producers, and MSMEs with full-spectrum supply chain linkages. We bridge local production from Mumbai across every Indian state and connect domestic enterprises directly with institutional buyers across 20 strategic global economies including Nepal, China, UAE, Germany, Japan, and Russia.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onMemberClick('become')}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-950/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Connect with Market Linkage Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#react-simple-world-map"
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-cyan-400" />
                  <span>Interactive World Map &darr;</span>
                </a>
              </div>
            </div>

            {/* Hub Metric Card */}
            <div className="lg:col-span-4 bg-[#0d1c2e]/95 border-2 border-cyan-500/40 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Trade Corridor Coverage</span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Domestic Reach:</span>
                  <span className="font-bold text-white">Mumbai &rarr; 28 States &amp; 8 UTs</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">International Corridors:</span>
                  <span className="font-bold text-cyan-300">20 Strategic Countries</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Maritime Sourcing Hub:</span>
                  <span className="font-bold text-teal-300">JNPT / Nhava Sheva Port</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">B2B Trade Networks:</span>
                  <span className="font-bold text-amber-300">5,000+ Verified Buyers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pan-India Domestic Distribution: From Mumbai to All States */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-[#0c1829] to-[#08111e] rounded-3xl border-2 border-cyan-900/60 p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              <span>DOMESTIC LOGISTICS &amp; WHOLESALE HIGHWAYS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Domestic Market Linkage: Mumbai to Pan-India
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Operating out of Mumbai — India’s commercial capital and premier maritime port gateway — VUSF establishes direct trade pipelines connecting Maharashtra&apos;s industrial clusters, agricultural APMC mandis, and manufacturing hubs to every state across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {[
              {
                zone: 'North India Corridor',
                states: 'Delhi NCR, Punjab, Haryana, Uttar Pradesh, Rajasthan & Uttarakhand',
                focus: 'FMCG, Agro Commodities, Textiles, Auto Parts & Industrial Tools',
              },
              {
                zone: 'West & Central India',
                states: 'Maharashtra, Gujarat, Madhya Pradesh, Goa & Chhattisgarh',
                focus: 'Chemicals, Plastics, Engineering, Electronics & Cotton Yarn',
              },
              {
                zone: 'South India Corridor',
                states: 'Karnataka, Tamil Nadu, Telangana, Andhra Pradesh & Kerala',
                focus: 'IT Hardware, Spices, Heavy Engineering, Precision Tooling & Pharma',
              },
              {
                zone: 'East India Corridor',
                states: 'West Bengal, Odisha, Bihar & Jharkhand',
                focus: 'Steel, Metals, Jute, Mineral Commodities & Food Processing',
              },
              {
                zone: 'Northeast India Gateways',
                states: 'Assam, Meghalaya, Tripura, Nagaland, Mizoram & Sikkim',
                focus: 'Organic Agro, Tea, Handlooms, Forest Produce & Border Trade',
              },
            ].map((z, idx) => (
              <div
                key={idx}
                className="bg-[#0f1d32]/90 p-5 rounded-2xl border border-slate-800 space-y-3 hover:border-cyan-500/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black uppercase text-cyan-400 tracking-wider">
                    {z.zone}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">{z.states}</h4>
                </div>
                <div className="text-[11px] text-slate-300 border-t border-slate-800/80 pt-2 font-light">
                  <span className="text-cyan-300 font-medium">Core Focus: </span>
                  {z.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. React-Simple-Maps Interactive World Map Section */}
      <section id="react-simple-world-map" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>REACT-SIMPLE-MAPS GLOBAL VISUALIZER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Global Trade Map &amp; Corridors from Mumbai
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Each strategic country is highlighted with a distinct color on the world map. Click on any country flag icon or territory to inspect bilateral trade links.
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
                  <span className="font-semibold text-cyan-300">Key Port &amp; Hubs: </span>
                  {selectedCountryData.hub}
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  <span className="font-semibold text-amber-300">Primary Trade: </span>
                  {selectedCountryData.commodities}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => onMemberClick('become')}
                className="text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto hover:brightness-110"
                style={{ backgroundColor: selectedCountryData.color }}
              >
                <span>Inquire {selectedCountryData.name} Trade Linkage</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 20 Country Cards: Sleek Country Name and Flag Icon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              All 20 Bilateral Trade Corridors
            </h3>
            <p className="text-xs text-slate-400">
              Select any corridor to spotlight on the world map and initiate trade liaison
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

        {/* Sleek Country Name & Flag Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredCountries.map((c) => {
            const isSelected = activeCountry === c.id;
            return (
              <div
                key={c.id}
                onClick={() => {
                  setActiveCountry(c.id);
                  setMapPosition({ coordinates: c.coordinates, zoom: 1.8 });
                }}
                className={`bg-[#0d1b2e] rounded-2xl border transition-all p-4 flex items-center justify-between group cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                  isSelected ? 'shadow-2xl bg-[#0f233a]' : 'hover:border-slate-600'
                }`}
                style={{
                  borderColor: isSelected ? c.strokeColor : '#1e293b',
                  borderLeftWidth: '4px',
                  borderLeftColor: c.color,
                }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={c.flagUrl}
                    alt={c.name}
                    className="w-8 h-8 object-contain rounded-full shadow-md border border-slate-700/80 bg-slate-900/60 p-0.5 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <h4
                      className="text-sm sm:text-base font-black text-white transition-colors"
                      style={{ color: isSelected ? c.strokeColor : '#ffffff' }}
                    >
                      {c.name}
                    </h4>
                  </div>
                </div>
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: c.color }}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Complete Market Linkage Pillars */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">
            END-TO-END CORRIDOR FACILITATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Market Linkage Services &amp; Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Delivering the complete trade infrastructure for manufacturers to sell across India and export globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0c192c] rounded-2xl border border-cyan-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">B2B Buyer Matchmaking</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pre-verified wholesale buyer networks, institutional off-take contracts, retail supermarket placement, and corporate vendor registration.
            </p>
          </div>

          <div className="bg-[#0c192c] rounded-2xl border border-blue-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Ship className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Freight &amp; Port Logistics</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ocean container consolidation (FCL/LCL), cold chain transport, JNPT Nhava Sheva port logistics, air cargo, and interstate road freight.
            </p>
          </div>

          <div className="bg-[#0c192c] rounded-2xl border border-teal-900/50 p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Tariffs &amp; Bilateral FTA Advisory</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Maximizing preferential tariff benefits under CEPA (UAE), CEPA (Japan), AIFTA (ASEAN), and SAFTA with full DGFT customs compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">Expand Your Market from Mumbai to the World</h3>
            <p className="text-xs sm:text-sm text-cyan-100 max-w-2xl font-light">
              Connect with our Market Linkage Directorate to access verified buyers across all Indian states and 20 international country corridors.
            </p>
          </div>
          <button
            onClick={() => onMemberClick('become')}
            className="bg-white text-cyan-950 hover:bg-cyan-50 text-xs sm:text-sm font-black px-8 py-4 rounded-xl shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Connect with Market Linkage Desk
          </button>
        </div>
      </section>
    </div>
  );
};
