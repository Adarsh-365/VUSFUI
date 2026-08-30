export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  summary: string;
  content: string[];
  tags: string[];
  externalUrl?: string;
  highlights?: string[];
}

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'pillai-mou-signing',
    slug: 'pillai-mou-sign',
    title: 'VUSF Signs Landmark Strategic MOU with Pillai University & Group of Institutions',
    subtitle: 'Bridging higher education with grassroots MSME incubation, student startup funding, and women entrepreneurship bootcamps.',
    category: 'Academic & Incubation Partnership',
    badge: 'ACADEMIC PARTNERSHIP',
    date: 'August 20, 2026',
    readTime: '4 min read',
    author: 'VUSF Directorate of Youth Incubation & Higher Education',
    authorRole: 'Strategic Academic Alliances',
    image: '/timeline_photos/college/16_20250710_130302_0015.png',
    summary:
      'Vishwa Udyam Sahayta Foundation officially executes a historic Memorandum of Understanding (MOU) with the prestigious Pillai Group of Institutions and Pillai University to establish student entrepreneurship incubators, MSME mentorship cells, and women startup bootcamps.',
    highlights: [
      'Establishment of On-Campus VUSF Incubation Desk at Pillai Campus',
      'Direct credit linkage and bank-ready DPR facilitation for student founders',
      'Special focus on Namaste Stree Shakti women founder acceleration',
      'Industrial visits, MSME cluster internships, and patenting guidance',
    ],
    content: [
      'In a momentous step toward fostering youth entrepreneurship and academic-industrial synergy, Vishwa Udyam Sahayta Foundation (VUSF) has officially signed a comprehensive Memorandum of Understanding (MOU) with the renowned Pillai Group of Institutions / Pillai University.',
      'Under this strategic collaboration, VUSF and Pillai University will jointly operate an on-campus Entrepreneurship & MSME Incubation Cell. This cell is designed to guide aspiring graduate and post-graduate students from ideation to commercial enterprise launch.',
      'A core component of this partnership involves empowering young innovators with Detailed Project Report (DPR) preparation, helping them tap into government credit-linked capital subsidy schemes including PMEGP (Prime Minister Employment Generation Programme), CMEGP (Chief Minister Employment Generation Programme), and Stand-Up India.',
      'Special emphasis is placed on the Namaste Stree Shakti Mission, creating dedicated mentoring tracks and seed grant linkages for female students launching technology, agro-processing, design, and manufacturing ventures.',
      'Furthermore, engineering and management students will gain access to direct internships across VUSF-affiliated industrial clusters, PEB manufacturing plants, and international sourcing corridors in China and South Asia.',
    ],
    tags: ['Pillai University', 'MOU', 'Youth Incubation', 'Student Startups', 'Stree Shakti', 'MSME Mentorship'],
  },
  {
    id: 'namaste-entrepreneur-free-edition-contributors',
    slug: 'namaste-entrepreneur-2026-contributor-free-edition',
    title: 'Namaste Entrepreneur 2026: Open Call for Contributors to the Free National Edition',
    subtitle: 'Share your startup journey, enterprise case study, or MSME research with 50,000+ business leaders and policymakers nationwide.',
    category: 'National Magazine & Editorial',
    badge: 'MEDIA & EDITORIAL',
    date: 'August 22, 2026',
    readTime: '5 min read',
    author: 'Editorial Board • Namaste India Entrepreneur Magazine',
    authorRole: 'National Publications Division',
    image: '/banner/MAGZINE.png',
    summary:
      'Inviting visionary entrepreneurs, startup founders, industry experts, and researchers across India to contribute articles, case studies, and enterprise journeys for the upcoming free national edition of Namaste India Entrepreneur Magazine.',
    highlights: [
      'Nationwide circulation across 50,000+ industry leaders, chambers & government bodies',
      'Last Date for Contributor Applications & Article Submissions: 20 September 2026',
      'Official Nationwide Publishing & Release Date: 02 October 2026',
      'Zero publishing fee for selected meritorious MSME & grassroots founders',
    ],
    content: [
      'The Editorial Board of Namaste India Entrepreneur Magazine is proud to announce the commencement of contributor submissions for its highly anticipated 2026 Free National Edition.',
      'This premier publication serves as a nationwide platform amplifying the voices of dynamic MSMEs, first-generation industrialists, women business pioneers, and technology innovators across India.',
      'We welcome original articles, founder thought-leadership pieces, in-depth sector analyses, and export growth case studies across diverse industrial domains, including:',
      '• Cross-Border Trade & Overseas Sourcing Strategies (China, South Asia, UAE)\n• Subsidies, DPR Formulation & Capital Linkages (PMEGP, CMEGP, Stand-Up India)\n• Sustainable Manufacturing, PEB Infrastructure & Industrial Clusters\n• Women in Business & Inclusive Startup Growth (Stree Shakti Initiative)\n• Digital Transformation & Supply Chain Resilience for Micro Enterprises',
      'IMPORTANT DATES & SUBMISSION GUIDELINES:\n- Last Date to Apply & Submit Articles: 20 September 2026\n- Magazine Publishing & Launch Date: 02 October 2026\n\nSelected contributors and featured enterprises will receive widespread national print and digital distribution across industry chambers, bank headquarters, and state industrial development corporations.',
    ],
    tags: ['Namaste India Magazine', 'Call for Contributors', 'Free Edition 2026', 'MSME Stories', 'Entrepreneurship'],
  },
  {
    id: 'navi-mumbai-business-summit-success',
    slug: 'navi-mumbai-business-summit-2026-conducted',
    title: 'Navi Mumbai Business Summit 2026 Successfully Concluded with 200+ Enterprise Leaders',
    subtitle: 'A landmark gathering uniting MMR industrialists, exporters, government officers, and banking institutions.',
    category: 'Summit Recap & Corridors',
    badge: 'SUMMIT RECAP',
    date: 'July 18, 2026',
    readTime: '4 min read',
    author: 'VUSF Regional Commerce Directorate',
    authorRole: 'Events & Trade Conclaves',
    image: '/banner/Namast china.png',
    summary:
      'A landmark triumph for the MMR industrial ecosystem — Vishwa Udyam Sahayta Foundation successfully organized the Navi Mumbai Business Summit 2026, facilitating cross-border B2B dialogues, bank credit tie-ups, and export corridor agreements.',
    highlights: [
      '200+ MSME industrialists, exporters, and founders in attendance',
      '45+ direct B2B business matchmaking and supplier linkages established',
      'Special keynote sessions by District Industries Centre (DIC) and banking heads',
      'Launch of fast-track export guidance desks for China, Nepal, and Southeast Asia',
    ],
    content: [
      'Vishwa Udyam Sahayta Foundation (VUSF) has successfully concluded the landmark Navi Mumbai Business Summit 2026 held in Vashi, Navi Mumbai, drawing over 200 high-profile enterprise delegates, manufacturing heads, banking executives, and trade consultants.',
      'The conclave served as a catalyst to unlock the burgeoning economic potential of the Mumbai Metropolitan Region (MMR), with dedicated focus on leveraging the expanding JNPA port infrastructure, the Navi Mumbai International Airport corridor, and dedicated industrial parks.',
      'Key dignitaries and officials from District Industries Centres (DIC) and premier banking institutions addressed attendees on optimizing capital subsidies, securing collateral-free credit, and navigating GST / customs export compliances.',
      'During the interactive B2B matchmaking sessions, more than 45 commercial partnerships were inked between local component manufacturers, agro-food processors, and international buyer representatives.',
      'President Pragati Tayde reiterated VUSF’s commitment to providing continuous handholding to MSMEs, announcing upcoming regional export summits in Pune, Nashik, and Chhatrapati Sambhaji Nagar.',
    ],
    tags: ['Navi Mumbai Business Summit', 'MSME Conclave', 'MMR Trade', 'Export Corridors', 'B2B Meet'],
  },
  {
    id: 'namaste-china-sourcing-portal',
    slug: 'namaste-china-visit-namastechina-org',
    title: 'Namaste China: Your Direct Gateway to Overseas Sourcing & Canton Fair (Visit namastechina.org)',
    subtitle: 'Eliminating intermediaries with direct factory verification, OEM procurement, quality audits, and Canton Fair business delegations.',
    category: 'International Trade & Sourcing',
    badge: 'GLOBAL SOURCING',
    date: 'August 17, 2025',
    readTime: '6 min read',
    author: 'Namaste China Bilateral Trade Directorate',
    authorRole: 'International Sourcing & OEM Relations',
    image: '/banner/Namast china.png',
    externalUrl: 'https://namastechina.org',
    summary:
      'Introducing Namaste China (visit namastechina.org), an exclusive international sourcing desk and delegation platform connecting Indian manufacturers, importers, and MSMEs directly with verified Chinese factories, OEM suppliers, and the Canton Fair.',
    highlights: [
      'Direct OEM factory verification and physical on-site plant audits',
      'Official Indian delegations to Canton Fair 2026 (Phase 1: 15–19 Oct | Phase 3: 31 Oct–4 Nov)',
      'Pre-shipment quality control, customs clearance, and ocean freight handling',
      'Explore all services & verified directories at namastechina.org',
    ],
    content: [
      'For Indian manufacturers, importers, and MSMEs looking to procure industrial machinery, raw materials, electronic components, and consumer goods directly from overseas factory floors, Namaste China stands as the trusted bilateral gateway.',
      'Accessible online at namastechina.org, this flagship initiative by Vishwa Udyam Sahayta Foundation provides end-to-end transparency, eliminating untrusted middlemen and safeguarding Indian businesses against cross-border trade disputes.',
      'KEY SERVICES FACILITATED VIA NAMASTECHINA.ORG:\n\n1. Direct OEM Factory Verification: Comprehensive background checks, business license authentication, and production capacity audits in industrial clusters like Guangzhou, Shenzhen, Yiwu, and Shanghai.\n\n2. Canton Fair Business Delegations:\nJoin our curated Indian business delegations for the world-famous Canton Fair in Guangzhou:\n• Phase 1 (15–19 Oct 2026): Electronics, Machinery, Industrial Hardware & Building Materials.\n• Phase 3 (31 Oct–4 Nov 2026): Textiles, Footwear, Stationery, Personal Care & Medical Goods.\nDelegates receive VIP expo registration, English/Hindi-speaking business translators, factory site visits, and customized B2B matchmaking.\n\n3. Quality Control & Pre-Shipment Inspection: Ensuring manufactured batches strictly meet quality parameters before containers depart Chinese ports.\n\n4. Ocean Freight, Customs & Port Logistics: Full container load (FCL) and less-than-container load (LCL) freight management with seamless customs clearance into Indian ports.',
      'Indian entrepreneurs, manufacturers, and trade delegates are invited to visit namastechina.org to submit their sourcing requirements, verify suppliers, or register for upcoming Canton Fair delegation slots.',
    ],
    tags: ['Namaste China', 'namastechina.org', 'Canton Fair 2026', 'Factory Sourcing', 'OEM Verification', 'Global Trade'],
  },
];
