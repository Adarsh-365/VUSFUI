import {
  Publication,
  PressReleaseItem,
  EventItem,
  PodcastEpisode,
  SpotlightItem,
  MajorInitiative,
  OfficeBearer,
} from '../types';

export const FOUNDATION_INFO = {
  name: 'Vishwa Udyam Sahayta Foundation',
  shortName: 'Namaste Vishwa Udyam',
  tagline: 'Empowering MSMEs, Startups & Global Trade',
  subTagline: 'Connecting Businesses • Fostering Creativity • Encouraging Collaboration',
  cin: 'U88900MH2025NPL437820',
  registeredYear: '2021',
  incorporationDate: 'January 9, 2025',
  website: 'https://namastevishwaudyam.org',
  email: 'info@namastevishwaudyam.org',
  phone: '+91-8169080686',
  address: 'Office No. 123, 1st Floor, Mahaveer Market, Plot No. 1, Sector 18, Vashi, Navi Mumbai - 400703, Maharashtra, India',
  city: 'Navi Mumbai',
  state: 'Maharashtra',
  pincode: '400703',
  iso: 'ISO 9001:2015 Certified Non-Profit Organization (Section 8, MCA, Govt. of India)',
  social: {
    youtube: 'https://www.youtube.com/@namaste_india_foundation',
    linkedin: 'https://www.linkedin.com/company/vishwa-udyam-sahayta-foundation/',
    instagram: 'https://www.instagram.com/namasteindia.group/',
    facebook: 'https://www.facebook.com/namasteindiagroup/',
  },
};

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: 'vusf-msme-export-index',
    title: 'MSME Export Index',
    subtitle: 'Unlocking Cross-Border Trade & Global Sourcing for Indian MSMEs into 2030',
    partner: 'Namaste Global Trade Bureau',
    date: 'August 2026',
    coverColor: '#0c1b33',
    summary:
      'A strategic roadmap by Vishwa Udyam Sahayta Foundation delineating export readiness, tariff rationalization, and direct market linkage for Indian MSMEs in South Asian and Southeast Asian trade corridors.',
    tags: ['MSME Exports', 'Global Trade', 'Namaste Nepal', 'Trade Finance'],
  },
  {
    id: 'vusf-industrial-infra',
    title: 'INFRASTRUCTURE BLUEPRINT',
    subtitle: 'Comprehensive Planning, Modern Design and Scalable Industrial Parks for MSMEs',
    partner: 'VUSF Infra Hub',
    date: 'July 2026',
    coverColor: '#0b3d1b',
    summary:
      'Detailed framework on development of modern industrial infrastructure, common effluent treatment facilities, pre-engineered building (PEB) clusters, and smart warehouse logistics.',
    tags: ['Infrastructure', 'Industrial Parks', 'Industrial Solutions', 'Logistics'],
  },
  {
    id: 'vusf-nepal-trade-study',
    title: 'India-Nepal Trade Horizons',
    subtitle: 'Opportunities in Agro-Processing, Food & Beverage, and Cross-Border B2B Supply',
    partner: 'Namaste Nepal Wing',
    date: 'June 2026',
    coverColor: '#1d2a78',
    summary:
      'Special analytical report on bilateral business expansion, buyer-seller network outcomes from the Nepal Food & Beverage Expo, and duty-free trade facilitation.',
    tags: ['India-Nepal Trade', 'Food & Beverage', 'B2B Matchmaking', 'South Asia'],
  },
  {
    id: 'vusf-women-scst-entrepreneurship',
    title: 'INCLUSIVE ENTERPRISE 2026',
    subtitle: 'Empowering Women & SC/ST Entrepreneurs through Subsidies, Mentorship & Market Access',
    partner: 'VUSF Inclusivity Cell',
    date: 'May 2026',
    coverColor: '#9a3412',
    summary:
      'Policy recommendations on maximizing PMEGP, CMEGP, and Stand-Up India credit schemes, paired with dedicated one-on-one business mentorship for first-generation founders.',
    tags: ['Women Founders', 'SC/ST Enterprise', 'PMEGP', 'Mentorship'],
  },
  {
    id: 'vusf-china-sourcing-guide',
    title: 'Global Sourcing & Supply Chain',
    subtitle: 'A Practical Guide to Sourcing Machinery, Raw Materials and Strategic Trade Linkages',
    partner: 'Namaste China Desk',
    date: 'April 2026',
    coverColor: '#422415',
    summary:
      'Strategic insights for Indian importers and manufacturers on reliable OEM supplier verification, quality audits, customs clearance, and global trade dispute resolution.',
    tags: ['Global Sourcing', 'Machinery', 'Namaste China', 'Import-Export'],
  },
];

export const PRESS_RELEASES_DATA: PressReleaseItem[] = [
  {
    id: 'pr-pillai-mou',
    date: 'Aug 20, 2026',
    category: 'ACADEMIC MOU & INCUBATION',
    title: 'VUSF executes historic strategic MOU with Pillai University to launch on-campus MSME Incubation Desk & Stree Shakti Mentorship',
    source: 'VUSF Academic Alliances Directorate',
    content:
      'Vishwa Udyam Sahayta Foundation officially executes a historic Memorandum of Understanding (MOU) with Pillai Group of Institutions / Pillai University to establish student entrepreneurship incubators, MSME mentorship cells, and women startup bootcamps.',
    linkText: 'Read Official Blog & MOU Details',
    blogSlug: 'pillai-mou-sign',
  },
  {
    id: 'pr-namaste-entrepreneur-contributors',
    date: 'Aug 22, 2026',
    category: 'MEDIA & ANNOUNCEMENT',
    title: 'Open Call for Contributors announced for Free 2026 National Edition of Namaste India Entrepreneur Magazine (Last Date: 20 Sep 2026)',
    source: 'Namaste India Editorial Board',
    content:
      'Inviting visionary entrepreneurs, startup founders, industry experts, and researchers across India to contribute articles, case studies, and enterprise journeys for the upcoming free national edition of Namaste India Entrepreneur Magazine. Publishing Date: 02 October 2026.',
    linkText: 'Read Contributor Guidelines & Editorial Blog',
    blogSlug: 'namaste-entrepreneur-2026-contributor-free-edition',
  },
  {
    id: 'pr-navi-mumbai-summit',
    date: 'Jul 18, 2026',
    category: 'SUMMIT BULLETIN',
    title: 'Navi Mumbai Business Summit 2026 successfully concludes in Vashi with 200+ enterprise exporters and banking dignitaries',
    source: 'VUSF Regional Commerce Directorate',
    content:
      'A landmark triumph for the MMR industrial ecosystem — Vishwa Udyam Sahayta Foundation successfully organized the Navi Mumbai Business Summit 2026, facilitating cross-border B2B dialogues, bank credit tie-ups, and export corridor agreements.',
    linkText: 'Read Full Summit Recap & Outcomes',
    blogSlug: 'navi-mumbai-business-summit-2026-conducted',
  },
  {
    id: 'pr-namaste-china',
    date: 'Aug 17, 2025',
    category: 'GLOBAL SOURCING DESK',
    title: 'VUSF launches "Namaste China" bilateral sourcing desk and official Canton Fair delegations (Visit namastechina.org)',
    source: 'Namaste China Bilateral Trade Bureau',
    content:
      'Introducing Namaste China (visit namastechina.org), an exclusive international sourcing desk and delegation platform connecting Indian manufacturers, importers, and MSMEs directly with verified Chinese factories, OEM suppliers, and the Canton Fair.',
    linkText: 'Visit Official Portal: namastechina.org',
    linkUrl: 'https://namastechina.org',
    blogSlug: 'namaste-china-visit-namastechina-org',
  },
];

export const EVENT_HIGHLIGHTS_DATA: EventItem[] = [
  {
    id: 'district-investment-summit-achievement-award',
    title: 'Maharashtra District Investment Summit & State Achievement Award by Hon. Minister Uday Samant',
    date: '16 April 2025',
    location: 'Mumbai Metropolitan Region (MMR), Mumbai, Maharashtra',
    featured: true,
    image: '/timeline_photos/uday sawant award/IMG-20250614-WA0074.jpeg',
    category: 'Government Recognition & State Honors',
    description:
      'Honoured by the Government of Maharashtra with the State Achievement Award for attracting industrial investment and driving district MSME empowerment, presented by Hon. Shri Uday Samant, Minister of Industries, Government of Maharashtra.',
  },
  {
    id: 'navi-mumbai-business-hub-2026-summit',
    title: 'Navi Mumbai Business Summit 2026',
    date: '18 July 2026',
    location: 'Vashi, Navi Mumbai, Maharashtra',
    featured: false,
    image: '/temp/IMAGES.jpeg',
    category: 'Regional Business & Export Conclave',
    description:
      'Navi Mumbai Business Summit 2026 brought together 200+ entrepreneurs, manufacturers, exporters, importers, startups, and industry experts for learning, networking, collaboration, and business growth with dedicated sessions on India Post exports, financial planning, and wealth protection.',
  },
  {
    id: 'india-vietnam-buyer-seller-meet',
    title: 'India–Vietnam International Business Delegation & B2B Meet',
    date: 'February 2026',
    location: 'Ho Chi Minh City & Hanoi, Vietnam',
    featured: false,
    image: '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0092.jpeg',
    category: 'International Trade & B2B Matchmaking',
    description:
      'Proudly connecting Indian entrepreneurs and businesses with Vietnamese importers and distributors, exploring bilateral trade opportunities, cross-border manufacturing tie-ups, and expanding Asian market footprints.',
  },
  {
    id: 'canton-fair-china-namaste-china-launch',
    title: 'Namaste India at Canton Fair 2025 — Gateway to China',
    date: 'November 2025',
    location: 'Guangzhou, China',
    featured: false,
    image: '/timeline_photos/china 2025/20251104_151304.jpeg',
    category: 'Global Sourcing & Factory Delegations',
    description:
      'Landmark participation of Namaste India Group at the Canton Fair in Guangzhou, China, interacting with OEM manufacturers, suppliers, buyers, and establishing the groundwork for the Namaste China bilateral sourcing desk.',
  },
];

export const PODCAST_DATA: PodcastEpisode = {
  id: 'navi-mumbai-summit-2026-video',
  title: 'Navi Mumbai Business Summit 2026 | Official Event Highlights',
  episodeNumber: 1,
  series: 'Namaste India Audio Series',
  date: '18 July 2026',
  duration: 'Official Highlights',
  youtubeId: 'hSLZkM2AzJY',
  thumbnail: '/temp/IMAGES.jpeg',
  summary:
    'Experience the best moments from the Navi Mumbai Business Summit 2026, where entrepreneurs, MSME owners, startup founders, manufacturers, exporters, professionals, and business leaders came together to build meaningful connections and explore new business opportunities.',
  guest: 'Pragati Tayde',
  guestTitle: 'President, Vishwa Udyam Sahayta Foundation',
  host: 'Kamlesh Kumar',
  hostTitle: 'Managing Director, Vishwa Udyam Sahayta Foundation',
  topics: [
    'Empowering MSMEs, startups, manufacturers & exporters across Maharashtra',
    'Postal export masterclass by India Post Export Promotion Team',
    'Financial risk management & wealth planning with SecureLife Fincorp',
    'B2B matchmaking, supply chain tie-ups & bilateral market linkages',
  ],
};

export const BUSINESS_DIGEST_DATA = {
  issue: 'August, 2026',
  coverTitle: 'Connecting MSMEs to Global Trade & Industrial Infrastructure',
  coverSubtitle: 'NAMASTE VISHWA UDYAM Business Digest',
  articles: [
    {
      id: 'bd-1',
      title: 'Indian MSME Sector Set to Contribute 50% to National GDP by 2030',
      color: '#16a34a', // green
    },
    {
      id: 'bd-2',
      title: 'Vishwa Udyam Sahayta Foundation Signs MoUs with Cross-Border Trade Associations',
      color: '#16a34a', // green
    },
    {
      id: 'bd-3',
      title: 'Industrial Infrastructure: Scaling Modern Pre-Engineered Factories for Startups',
      color: '#16a34a', // green
    },
    {
      id: 'bd-4',
      title: 'Namaste Nepal Buyer-Seller Delegation Generates Over ₹45 Cr in Projected Business Inquiries',
      color: '#ea580c', // orange
    },
    {
      id: 'bd-5',
      title: 'Women in Manufacturing: Groundbreaking Success Stories from VUSF Incubation Cell',
      color: '#ea580c', // orange
    },
    {
      id: 'bd-6',
      title: 'Quarterly Survey on MSME Credit, Raw Material Prices & Export Bottlenecks',
      color: '#ea580c', // orange
    },
  ],
};

export const SPOTLIGHT_DATA: SpotlightItem[] = [
  {
    id: 'sp-1',
    outlet: 'economic times msme',
    date: 'Aug 10, 2026',
    title: 'How Vishwa Udyam Sahayta Foundation is helping micro enterprises transition into global exporters',
    link: '#',
  },
  {
    id: 'sp-2',
    outlet: 'maharashtra business times',
    date: 'Aug 04, 2026',
    title: 'Navi Mumbai based Foundation leads massive Indian delegation to Nepal Food & Beverage Expo',
    link: '#',
  },
  {
    id: 'sp-3',
    outlet: 'msme insight today',
    date: 'Jul 28, 2026',
    title: 'Modern industrial infrastructure emerges as game-changer for greenfield MSME manufacturing hubs',
    link: '#',
  },
];

export const MAJOR_INITIATIVES_DATA: MajorInitiative[] = [
  {
    id: 'women-entrepreneur',
    name: 'WOMEN ENTREPRENEUR CELL',
    tagline: 'Namaste Stree Shakti • SHGs • Subsidies & Mentorship',
    theme: 'women',
    bgColor: '#e11d48',
    textColor: '#ffffff',
    description:
      'Dedicated empowerment cell providing bank credit linkages, government subsidies (PMEGP / CMEGP), bank-ready DPR formulation, business mentorship, and retail market linkages for women founders, Self-Help Groups (SHGs), and women-led MSMEs.',
  },
  {
    id: 'kids-entrepreneur',
    name: 'KIDS ENTREPRENEUR CELL',
    tagline: 'Junior Innovators • Financial Literacy • Creative Mindset',
    theme: 'kids',
    bgColor: '#4f46e5',
    textColor: '#ffffff',
    description:
      'Fostering creative problem-solving, financial literacy, early business acumen, and school-level innovation incubation to nurture India’s youngest creators, junior inventors, and future entrepreneurs.',
  },
  {
    id: 'sc-st-entrepreneur',
    name: 'SC / ST ENTREPRENEUR CELL',
    tagline: 'Stand-Up India • DIC Subsidy Linkages • Bankable DPRs',
    theme: 'sc-st',
    bgColor: '#ea580c',
    textColor: '#ffffff',
    description:
      'Specialized inclusive empowerment cell facilitating Stand-Up India funding, DIC subsidies, bank-ready Detailed Project Report (DPR) preparation, and government procurement linkages for SC/ST entrepreneurs across Maharashtra and pan-India.',
  },
  {
    id: 'gen-z-entrepreneur',
    name: 'GEN-Z ENTREPRENEUR CELL',
    tagline: 'Tech Startups • AI & E-Commerce • Venture Incubation',
    theme: 'gen-z',
    bgColor: '#059669',
    textColor: '#ffffff',
    description:
      'High-velocity innovation and startup incubation launchpad tailored for collegiate innovators, tech founders, e-commerce creators, digital nomads, and next-generation Gen-Z entrepreneurs.',
  },
];

export const OFFICE_BEARERS_DATA: OfficeBearer[] = [
  {
    id: 'pragati-tayde',
    name: 'Pragati Tayde',
    designation: 'Founder & President',
    company: 'Vishwa Udyam Sahayta Foundation',
    image: '/members/pragati.jpeg',
    credentials: '9+ Years Exp • M.Tech in CSE • 20+ Countries Global Network • 10,000+ MSMEs Supported',
    bio: 'As the Founder & President, she brings 9+ years of experience in entrepreneurship, international trade, import-export, business networking, and MSME ecosystem development. Holding a Master of Technology (M.Tech) in Computer Science & Engineering, with a background in Information Technology and Computer Engineering, she brings a technology-driven and structured approach to entrepreneurship and ecosystem development. Over the years, she has built a strong international business network across 20+ countries, connecting Indian entrepreneurs, MSMEs, industry leaders, institutions, and global business communities. Through various initiatives and programmes, she has contributed to supporting and connecting 10,000+ MSMEs, with a strong focus on entrepreneurship development, market access, government initiatives, business networking, import-export, and international trade opportunities. Her leadership is driven by a vision to build an inclusive and opportunity-driven ecosystem where MSMEs, startups, women entrepreneurs, SC/ST entrepreneurs, and emerging business leaders can access the right knowledge, networks, markets, and platforms for sustainable growth. Her mission is to strengthen Indian entrepreneurship and enable businesses to connect locally, expand nationally, and grow globally.',
    phone: '+91 7030588914',
    whatsapp: 'https://wa.me/917030588914',
    email: 'taydepra@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pragati-tayde/',
    instagram: 'https://www.instagram.com/unstoppable.pragati/',
    facebook: 'https://www.facebook.com/tayde.pragati',
    leadershipAreas: [
      'MSME Ecosystem & Policy',
      '20+ Countries Trade Corridors',
      '10,000+ MSMEs Supported',
      'Technology & Engineering (M.Tech)',
      'Inclusive & Women Entrepreneurship',
    ],
    roleCategory: 'founder',
  },
  {
    id: 'kamlesh-kumar',
    name: 'Kamlesh Kumar',
    designation: 'Managing Director',
    company: 'Vishwa Udyam Sahayta Foundation',
    image: '/members/kamlesh.jpeg',
    credentials: 'Agro Export Specialist • Middle East & Dubai Corridors • CEO, Kashivishwanath FPC',
    bio: 'Managing Director and seasoned Agro Export Specialist with deep expertise in cross-border trade across Dubai (UAE) and Middle East corridors. Serving as CEO of Kashivishwanath Farmer Producer Company, he spearheads agricultural value chains, farm-to-port export logistics, and international trade linkages for Indian agro-enterprises and FPOs.',
    leadershipAreas: [
      'Agro & Food Processing Exports',
      'Dubai & Middle East Trade',
      'FPO Incubation & Scaling',
      'Bilateral Supply Chains',
    ],
    roleCategory: 'executive',
  },
  {
    id: 'vignesh-j',
    name: 'Vignesh J',
    designation: 'Vice President',
    company: 'Vishwa Udyam Sahayta Foundation',
    image: '/members/vignesh.jpeg',
    credentials: 'B.E. (ECE) • CBO at FINNMIN (STPI FinBlue / MeitY) • 10+ Yrs Exp in FinTech & Growth',
    bio: 'Vice President with over 10 years of experience in entrepreneurship, business development, and ecosystem building. Completed Bachelor of Engineering in Electronics & Communication Engineering (BE – ECE) in 2015. Serving as Chief Business Officer (CBO) at FINNMIN under STPI FinBlue (supported by MeitY, Govt. of India) and Advisor to Karpine Technology, he brings deep expertise spanning fintech, enterprise sales, blockchain ecosystems, and social entrepreneurship.',
    linkedin: 'https://www.linkedin.com/in/vignesh5ire/',
    leadershipAreas: [
      'Fintech & Digital Transformation',
      'Enterprise Partnerships',
      'MeitY / STPI Ecosystems',
      'Startup Scaling & Growth',
    ],
    roleCategory: 'executive',
  },
  {
    id: 'bhushan-shinde',
    name: 'Bhushan Shinde',
    designation: 'Executive Director',
    company: 'Vishwa Udyam Sahayta Foundation',
    image: '/members/bhushan.jpeg',
    credentials: 'Certified Six Sigma Black Belt • Senior Operations & Lean Manufacturing Specialist',
    bio: 'Certified Six Sigma Black Belt and senior operations specialist with extensive expertise in optimizing manufacturing systems, SAP Material Requirements Planning (MRP), and Lean transformation. Drawing on leadership experience from Forbes & Company Limited and Levers for Change, he steers VUSF’s operational excellence, industrial infrastructure blueprints, and enterprise process modernization.',
    leadershipAreas: [
      'Operational Excellence',
      'Lean & Six Sigma Systems',
      'Manufacturing & SAP MRP',
      'Industrial Infrastructure',
    ],
    roleCategory: 'executive',
  },
];
