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
  externalLink?: string;
  eventLink?: string;
  highlights?: string[];
  keyPeople?: string[];
  impactMetrics?: { label: string; value: string }[];
  galleryImages?: string[];
  milestoneSlug?: string;
}

export const BLOGS_DATA: BlogPost[] = [
  {
    id: 'pillai-university-strategic-mou-incubation',
    slug: 'pillai-mou-sign',
    title: 'VUSF Signs Landmark Strategic MOU with Pillai University & Group of Institutions',
    subtitle: 'Strategic MoU with Pillai University – Education, Incubation, Languages & Enterprise Scaling.',
    category: 'Academia-Industry & Skill Incubation',
    badge: 'UNIVERSITY MOU & INCUBATION',
    date: 'August 20, 2026',
    readTime: '4 min read',
    author: 'Namaste India Group & VUSF Directorate of Academic Alliances',
    authorRole: 'Strategic Academic Alliances & Incubation',
    image: '/timeline_photos/college/16_20250710_130302_0015.jpeg',
    summary:
      'Historic Memorandum of Understanding (MoU) signed between Namaste India Group / Vishwa Udyam Sahayta Foundation (Pragati Tayde, President & Founder) and Pillai University, Panvel (Dr. R. Chandran, Dean – School of Business, and Ms. Upasana Chaudhary, Director of Corporate Relations MDP) uniting academia with real-world enterprise incubation.',
    highlights: [
      'MoU signed by Dr. R. Chandran (Dean - School of Business, Pillai University) and Pragati Tayde (Founder & President, Namaste India Group / VUSF)',
      'Special leadership and coordination by Ms. Upasana Chaudhary, Director of Corporate Relations MDP, Pillai University',
      'Launching Basic Chinese Language Learning Programs for traders, exporters, and students for overseas negotiation',
      'Dedicated SC/ST & Women Entrepreneurship Incubation tracks with credit linkages, subsidy handholding & DPR guidance',
      'Industry–Academia engagement through live internships, MSME cluster research, and executive MDPs',
      'Formalized at the Pillai University Executive Boardroom, Panvel Campus on 20 August 2026',
    ],
    keyPeople: [
      'Dr. R. Chandran (Dean – School of Business, Pillai University)',
      'Ms. Upasana Chaudhary (Director of Corporate Relations MDP, Pillai University)',
      'Pragati Tayde (President & Founder, Namaste India Group & VUSF)',
    ],
    impactMetrics: [
      { label: 'Academic Partner', value: 'Pillai University, Panvel' },
      { label: 'Key Programs', value: 'Chinese Language, SC/ST & Women Startups' },
      { label: 'Campus Venue', value: 'Executive Boardroom, Panvel Campus' },
      { label: 'MoU Date', value: '20 August 2026' },
    ],
    content: [
      'On 20 August 2026, Namaste India Group and Vishwa Udyam Sahayta Foundation (VUSF) entered into a historic strategic collaboration with Pillai University, Panvel through the formal signing of a comprehensive Memorandum of Understanding (MoU) at the Pillai University Executive Boardroom, Panvel Campus.',
      'The milestone agreement was officially signed by Dr. R. Chandran, Dean – School of Business, Pillai University, and Pragati Tayde, Founder & President of Namaste India Group and VUSF.',
      'Special appreciation and gratitude was extended to Ms. Upasana Chaudhary, Director of Corporate Relations MDP, Pillai University, for her instrumental leadership and coordination in bringing this academia-industry alliance to fruition.',
      'Under the strategic MoU, the partners are introducing impactful collaborative initiatives:',
      '• Basic Chinese Language Learning Programs:\nEquipping Indian traders, exporters, and students with practical Mandarin for business negotiations, factory visits, and cross-border trade matchmaking in China and Southeast Asian sourcing markets.',
      '• SC/ST & Women Entrepreneurship Incubation Tracks:\nProviding comprehensive credit counseling, DPR (Detailed Project Report) formulation, government capital subsidies (PMEGP, CMEGP, Stand-Up India), and business mentorship for inclusive enterprise scaling.',
      '• Industry–Academia Engagement & MDPs:\nFacilitating live enterprise internships, joint research on regional MSME clusters, and executive Management Development Programs (MDPs) designed to elevate management capability for growing businesses.',
      'The alliance seamlessly integrates academic excellence with real-world entrepreneurial incubation, turning classroom knowledge into tangible socioeconomic opportunity and empowering the next generation of Indian innovators.',
    ],
    galleryImages: [
      '/timeline_photos/college/16_20250710_130302_0015.jpeg',
      '/timeline_photos/college/17_20250710_130302_0016.jpeg',
      '/timeline_photos/college/18_20250710_130302_0017.jpeg',
      '/timeline_photos/college/5_20250710_130301_0004.jpeg',
      '/timeline_photos/college/IMG-20250614-WA0075.jpeg',
      '/timeline_photos/college/IMG-20250614-WA0076.jpg',
      '/timeline_photos/college/IMG-20250614-WA0077.jpg',
      '/timeline_photos/college/IMG-20250614-WA0078.jpeg',
      '/timeline_photos/college/IMG-20250614-WA0085.jpg',
      '/timeline_photos/channel partner/Blue White Modern Geometric Certificate of Completion_20260106_123118_0000.jpeg',
      '/timeline_photos/channel partner/Untitled-design-35-1.jpeg',
    ],
    milestoneSlug: 'pillai-university-strategic-mou-incubation',
    tags: [
      'Pillai University',
      'Strategic MoU',
      'Education & Incubation',
      'Chinese Language',
      'SC/ST Startups',
      'Women Entrepreneurship',
      'Panvel Campus',
    ],
  },
  {
    id: 'namaste-entrepreneur-free-edition-contributors',
    slug: 'namaste-entrepreneur-2026-contributor-free-edition',
    title: 'Namaste Entrepreneur 2026: Open Call for Contributors & Free National Edition',
    subtitle: '5,000+ national prints across 10+ states with 50% exclusive coverage dedicated to visionary MSME leaders, homegrown innovators, and export champions.',
    category: 'National Business Magazine & MSME Profiles',
    badge: 'COMPLIMENTARY DIGITAL COPIES OPEN',
    date: 'National Release: 02 October 2026',
    readTime: '5 min read',
    author: 'Namaste Entrepreneur Editorial Council & VUSF',
    authorRole: 'National Business Magazine & Publications',
    image: '/banner/magazine.jpeg',
    eventLink: '/events/namaste-india-magazine',
    summary:
      'Namaste Entrepreneur 2026 Magazine is the official high-impact business publication by Vishwa Udyam Sahayta Foundation, celebrating India’s most visionary MSME trailblazers, startup innovators, exporters, and industrial champions. 5,000+ national prints across 10+ states with complimentary digital edition access.',
    highlights: [
      '5,000+ Glossy National Hard Copies Distributed to Chambers, Ministries & Trade Desks',
      '50% Dedicated Features on Indian MSME Champions, Manufacturing & Export Leaders',
      '100% Free Interactive Digital Edition Delivered Directly to Your Registered Email',
      'Editorial Story Submissions & Brand Feature Inquiries: 7499492860 | info@namastevishwa.com',
      'Submission Deadline: 20 September 2026 | National Release Date: 02 October 2026',
    ],
    keyPeople: [
      'Namaste Entrepreneur Editorial Council',
      'MSME & Grassroots Indian Founders Panel',
      'Ashwini Bansode (Chief Editor, Namaste Entrepreneur Editorial Council / VUSF)',
    ],
    impactMetrics: [
      { label: 'National Prints', value: '5,000+ Hard Copies' },
      { label: 'States Distribution', value: '10+ States Pan-India' },
      { label: 'MSME Coverage', value: '50% Dedicated Features' },
      { label: 'Digital Access', value: '100% Free PDF Delivery' },
    ],
    content: [
      'Namaste Entrepreneur 2026 Magazine is the official high-impact business publication by Vishwa Udyam Sahayta Foundation (VUSF) and Namaste India Group, celebrating India’s most visionary MSME trailblazers, startup innovators, exporters, and industrial champions.',
      'The upcoming 2026 National Edition features 5,000+ physical prints distributed across 10+ states to trade chambers, ministries, corporate procurement heads, and export promotion councils.',
      'Over 50% of the editorial space is exclusively dedicated to celebrating transformative MSME leaders and homegrown founders. Indian entrepreneurs, innovators, and enterprise leaders can register for the 100% Free Digital E-Magazine or book a collector’s hardbound physical print copy.',
      'KEY BENEFITS & EDITORIAL SCOPE:\n\n1. 100% Free Digital E-Magazine:\nReceive the complete high-resolution digital edition directly in your email inbox immediately upon registration with zero fees.\n\n2. 50% Dedicated MSME Stories:\nIn-depth case studies, scaling strategies, and inspirational founder journeys of India’s top 50+ MSME champions.\n\n3. 5,000+ National Print Circulation:\nDistributed physically across 10+ states to government ministries, DIC offices, trade chambers, and corporate boardrooms.\n\n4. Cross-Industry B2B Insights:\nGain valuable market intelligence on export corridors, bank credit linkages, government subsidies, and supply chain trends.',
      'EDITORIAL TIMELINE & DISTRIBUTION SCHEDULE:\n• 20 September 2026: Deadline for Story Submissions & Founder Profiles to info@namastevishwa.com / 7499492860.\n• 25 September 2026: Editorial Review, Layout & Proofing.\n• 02 October 2026 (11:00 AM): Grand National Release & Digital Broadcast.\n• 05 October 2026: Physical Print Copies Courier Dispatch across 10+ states with tracking.',
    ],
    tags: [
      'Namaste India Magazine',
      'Namaste Entrepreneur 2026',
      'Free Digital Edition',
      'MSME Stories',
      'Call for Contributors',
      'National Distribution',
    ],
  },
  {
    id: 'navi-mumbai-business-summit-success',
    slug: 'navi-mumbai-business-summit-2026-conducted',
    title: 'Navi Mumbai Business Summit 2026 Successfully Concluded with 300+ Enterprise Leaders',
    subtitle: 'A landmark gathering uniting MMR entrepreneurs, manufacturers, exporters, importers, and financial experts for B2B acceleration.',
    category: 'Enterprise Conclave & B2B Hub',
    badge: 'NAVI MUMBAI BUSINESS SUMMIT',
    date: '18 July 2026',
    readTime: '4 min read',
    author: 'Namaste India Group & VUSF Summit Directorate',
    authorRole: 'Enterprise Conclaves & B2B Hub',
    image: '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0006.jpeg',
    summary:
      'Navi Mumbai Business Summit 2026 brought together 300+ entrepreneurs, manufacturers, exporters, importers, startups, and financial experts for a landmark day of learning, cross-industry networking, and B2B business acceleration at Convention Center, Sector 18 / Vashi Business Hub.',
    highlights: [
      'Keynote export sessions by Mr. Vipul Mandlesha (Export Head) and India Post Export Promotion Team on Dak Niryat Kendras',
      'Financial resilience and wealth planning sessions by Mr. Rajesh Menon and Mr. Ujjwal Ravindran (Founder, Secure Life Fincorp)',
      'Dynamic B2B networking creating high-value trade linkages, supply contracts, and business growth collaborations',
      'Attended by 300+ founders, exporters, manufacturers, and corporate leaders across Mumbai and Navi Mumbai',
    ],
    keyPeople: [
      'Mr. Vipul Mandlesha (Export Head)',
      'India Post Export Promotion Directorate',
      'Mr. Rajesh Menon (Financial Planning Expert)',
      'Mr. Ujjwal Ravindran (Founder, Secure Life Fincorp)',
      'Pragati Tayde (Summit Convener & President, Namaste India Group & VUSF)',
    ],
    impactMetrics: [
      { label: 'Attendance', value: '300+ Business Founders' },
      { label: 'Summit Venue', value: 'Vashi Business Hub, Navi Mumbai' },
      { label: 'Key Sessions', value: 'Postal Exports, Finance & B2B Hub' },
      { label: 'Summit Date', value: '18 July 2026' },
    ],
    content: [
      'On 18 July 2026, the mega Navi Mumbai Business Summit 2026 convened over 300 entrepreneurs, manufacturers, exporters, importers, startups, and corporate leaders for an intensive day of business acceleration, B2B matchmaking, and financial strategy at Convention Center, Sector 18 / Vashi Business Hub, Navi Mumbai.',
      'The prestigious summit featured distinguished keynote speakers and institutional partners:',
      '• Dak Niryat Kendras & Postal Exports:\nMr. Vipul Mandlesha (Export Head) and the India Post Export Promotion Team shared actionable frameworks on leveraging postal export channels (Dak Niryat Kendras) for cost-effective global e-commerce shipments, documentation ease, and customs facilitation.',
      '• Financial Resilience & Scalable Planning:\nMr. Rajesh Menon (Financial Planner) and Mr. Ujjwal Ravindran (Founder, Secure Life Fincorp) delivered impactful masterclasses on business risk management, working capital preservation, credit readiness, and scalable financial planning.',
      '• Dynamic B2B Matchmaking & Supplier Linkages:\nBeyond knowledge sessions, the Business Hub facilitated dynamic B2B roundtables where participants exchanged supplier contracts, forged joint marketing alliances, and explored direct global export entries.',
      'The summit solidified Namaste India Group and VUSF’s standing as the premier catalyst for Maharashtra’s MSME and entrepreneurial ecosystem.',
    ],
    galleryImages: [
      '/temp/IMAGES.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG-20260622-WA0102.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG-20260623-WA0074.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG-20260707-WA0026.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0006.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0007.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0008.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0009.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0010.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0011.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0012.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0013.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0014.jpg',
    ],
    milestoneSlug: 'navi-mumbai-business-hub-2026-summit',
    tags: [
      'Navi Mumbai Business Summit',
      'Vashi Business Hub',
      'India Post Exports',
      'Dak Niryat Kendra',
      'B2B Meet',
      'MSME Conclave',
      'Pragati Tayde',
    ],
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
    image: '/banner/Namast china.jpeg',
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
