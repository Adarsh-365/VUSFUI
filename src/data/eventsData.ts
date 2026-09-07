export interface DelegatePass {
  id: string;
  name: string;
  price: number;
  gstPercentage: number;
  isGstInclusive?: boolean;
  recommended?: boolean;
  badge?: string;
  shortDesc: string;
  benefits: string[];
  seatsLeft?: number;
  dates?: string;
  categories?: string[];
  earlyBirdDiscount?: string;
  pricingText?: string;
}

export interface EventSpeaker {
  name: string;
  designation: string;
  organization: string;
  image: string;
  expertise: string;
  topic?: string;
}

export interface EventBenefit {
  number: string;
  title: string;
  description: string;
  category: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
  type?: 'keynote' | 'panel' | 'workshop' | 'networking' | 'felicitation' | 'delegation';
}

export interface EventStat {
  value: string;
  label: string;
  subtext?: string;
}

export interface EventAudience {
  title: string;
  description: string;
  iconName?: string;
}

export interface EventFAQ {
  question: string;
  answer: string;
}

export interface DetailedEvent {
  id: string;
  slug: string;
  title: string;
  statusBadge: string;
  eventType: string;
  tagline: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  location: string;
  city: string;
  state: string;
  country: string;
  organizer: string;
  brand: string;
  image: string;
  filterCategory: string;
  description: string;
  longDescription: string[];
  stats: EventStat[];
  highlights: string[];
  galleryImages: string[];
  videoUrl?: string;
  youtubeId?: string;
  benefits: EventBenefit[];
  agendaTitle?: string;
  agendaSubtitle?: string;
  agenda: AgendaItem[];
  passes: DelegatePass[];
  targetAudience: EventAudience[];
  speakers: EventSpeaker[];
  faqs: EventFAQ[];
  supportPhone: string;
  supportWhatsapp: string;
  supportEmail: string;
  inclusions?: string[];
  exclusions?: string[];
  cancellationPolicy?: string;
  doublePhaseDiscount?: {
    title: string;
    description: string;
    actionText?: string;
  };
  consultationBanner?: {
    title: string;
    subtitle: string;
    stats: { value: string; label: string }[];
    ctaText?: string;
  };
  seatAlert?: {
    title: string;
    message: string;
    actionText: string;
  };
  brochureUrl?: string;
}

export const DETAILED_EVENTS: DetailedEvent[] = [
  {
    id: 'canton-fair-delegation',
    slug: 'canton-fair-delegation',
    title: 'Canton Fair 2026 Delegation - Guangzhou',
    statusBadge: 'SEAT LIMIT APPROACHING • 12 SEATS REMAIN',
    eventType: 'INTERNATIONAL TRADE DELEGATION',
    tagline: "Join India's leading trade delegation for the world's largest import-export exhibition.",
    brochureUrl: 'https://drive.google.com/file/d/1yqkb4ZFaYHCYq91uUVpOL7-E3EzZTh7q/view?usp=sharing',
    date: 'Phase 1: 15 Oct – 19 Oct 2026 | Phase 3: 31 Oct – 04 Nov 2026',
    day: 'Phase 1 (15–19 Oct) & Phase 3 (31 Oct – 04 Nov)',
    time: '09:00 AM – 06:00 PM (China Standard Time)',
    venue: 'China Import and Export Fair Complex (Pazhou Complex), Haizhu District',
    location: 'Guangzhou, Guangdong, China',
    city: 'Guangzhou',
    state: 'Guangdong',
    country: 'China',
    organizer: 'Vishwa Udyam Sahayta Foundation & Namaste China Desk',
    brand: 'Namaste China × VUSF',
    image: '/banner/namaste-china.jpeg',
    filterCategory: 'delegations',
    description: "Join India's leading trade delegation for the world's largest import-export exhibition in Guangzhou, China. Direct factory visits, verified OEM suppliers, machinery sourcing, and cross-border trade matchmaking.",
    longDescription: [
      "Join India's leading trade delegation for the world's largest import-export exhibition at the Pazhou Exhibition Complex in Guangzhou, China.",
      "Seat Limit Approaching: Only 12 registration seats remain for Phase 1 delegation. Deadlines close this month! Choose between Phase 1 (Electronics, Machinery & Hardware: 15–19 October 2026) and Phase 3 (Textiles, Fashion & Health Products: 31 October – 04 November 2026).",
      "Includes return flights on premium airlines (Singapore/Cathay), 4-star luxury hotel stay in Guangzhou, normal business visa processing support, daily Indian catering dinners, trade interpreters, and dedicated on-ground assistance."
    ],
    stats: [
      { value: '180+', label: 'Importers Served', subtext: 'Indian businesses successfully scaled' },
      { value: '70%', label: 'Visa Success Rate', subtext: 'Full refund protection on refusal' },
      { value: '4-Star', label: 'Hotel Luxury Stay', subtext: 'Guangzhou city center accommodation' },
      { value: '12 Seats', label: 'Remaining Seats', subtext: 'Phase 1 registration deadline closing' },
    ],
    highlights: [
      'Return Flight (Premium Airlines - Singapore/Cathay)',
      'Normal Business Visa processing support (includes official invitations)',
      '4-Star Luxury Hotel stay with Daily Indian catering dinners',
      'Basic Canton Fair Entry Registration Badge & Interpreter Allocation',
      'Factory Visit',
    ],
    seatAlert: {
      title: 'Seat Limit Approaching',
      message: 'Only 12 registration seats remain for Phase 1 delegation. Deadlines close this month!',
      actionText: 'Register Seats Now',
    },
    galleryImages: [
      '/timeline_photos/china 2025/20251104_151304.jpeg',
      '/timeline_photos/china 2025/IMG-20251115-WA0021.jpeg',
      '/timeline_photos/china 2025/IMG-20251115-WA0022.jpeg',
      '/timeline_photos/china 2025/IMG-20251115-WA0041.jpeg',
      '/timeline_photos/china 2025/IMG-20251115-WA0069.jpeg',
      '/timeline_photos/china 2025/IMG-20251115-WA0072.jpeg',
    ],
    youtubeId: 'hSLZkM2AzJY',
    benefits: [
      {
        number: '01',
        title: 'Direct Factory & OEM Pricing',
        description: 'Bypass costly middlemen and trading agents to negotiate volume pricing and bespoke white-label manufacturing directly with principal factory owners.',
        category: 'Sourcing & Cost Optimization',
      },
      {
        number: '02',
        title: 'Factory Visits & Industrial Inspections',
        description: 'Tour automated manufacturing plants in Foshan, Dongguan, and Shenzhen to inspect quality control, testing labs, and assembly lines firsthand.',
        category: 'Quality Assurance',
      },
      {
        number: '03',
        title: 'Bilingual Trade Interpreter Allocation',
        description: 'Delegates are paired with experienced trade escorts and professional translators for technical specifications, contract negotiations, and payment terms.',
        category: 'On-Ground Support',
      },
      {
        number: '04',
        title: 'Customs & Import Structuring',
        description: 'Receive specialized guidance on Indian HSN classification, BIS certification, port clearance, and sea/air freight optimization from VUSF trade experts.',
        category: 'Compliance & Logistics',
      },
      {
        number: '05',
        title: 'Cross-Border B2B Matchmaking',
        description: 'Participate in pre-arranged bilateral meetings tailored to your specific product specifications, machinery requirements, or raw material needs.',
        category: 'Business Networking',
      },
      {
        number: '06',
        title: 'Post-Fair Sourcing Continuity',
        description: 'Access continuous post-event supplier verification, sample dispatch coordination, and trade finance advisory through the permanent Namaste China Desk.',
        category: 'Ongoing Support',
      },
    ],
    agendaTitle: 'TOUR ITINERARY',
    agendaSubtitle: 'Carefully structured itinerary combining trade fair exploration, technical evaluations, and industrial visits.',
    agenda: [
      {
        time: 'Day 01',
        title: 'Depart Mumbai / Delhi',
        description: 'Board international flight to Guangzhou, China. Meet the delegation group at transit.',
        type: 'delegation',
      },
      {
        time: 'Day 02',
        title: 'Arrive in Guangzhou',
        description: 'Transfer in premium AC coaches to our 4-star hotel. Welcome Indian dinner and registration badge briefing.',
        type: 'delegation',
      },
      {
        time: 'Day 03 - 07',
        title: 'Canton Fair Sourcing Days',
        description: 'Daily breakfast buffet. Transfer to the exhibition complex. Explore thousands of verified suppliers. Evening networking dinners with logistics advisors.',
        type: 'networking',
      },
      {
        time: 'Day 08',
        title: 'Departure & Flight to India',
        description: 'Breakfast. Check out. Transfer to Guangzhou International Airport. Flight back to Mumbai.',
        type: 'felicitation',
      },
    ],
    passes: [
      {
        id: 'phase-1-package',
        name: 'Phase 1 Package: Electronics, Machinery & Hardware',
        price: 145000,
        gstPercentage: 5,
        recommended: true,
        badge: '🎉 Early Bird Special - Get 10% OFF',
        shortDesc: '15 - 19 October 2026 • Consumer Electronics, Industrial Machinery, Hardware, Tools & Automation.',
        seatsLeft: 12,
        dates: '15 - 19 October 2026',
        earlyBirdDiscount: 'Get 10% OFF • Contact us for exclusive pricing',
        categories: [
          'Consumer Electronics & Information Products',
          'Industrial Automation & Intelligent Manufacturing',
          'Machinery, Processing Equipment & Power Machinery',
          'Hardware, Tools, Lighting & Electrical Equipment',
        ],
        benefits: [
          'Return Flight (Premium Airlines - Singapore/Cathay)',
          'Normal Business Visa processing support (includes official invitations)',
          '4-Star Luxury Hotel stay in Guangzhou',
          'Daily breakfast buffet & Indian catering dinners',
          'Exhibition complex daily coach shuttles',
          'Basic Canton Fair Entry Registration Badge',
          'English-Chinese trade interpreter allocation',
          'Travel Insurance (Up to 55 years)',
          'Early Bird Special: 10% OFF Available',
        ],
      },
      {
        id: 'phase-3-package',
        name: 'Phase 3 Package: Textiles, Fashion & Health Products',
        price: 145000,
        gstPercentage: 5,
        badge: '🎉 Early Bird Special - Get 10% OFF',
        shortDesc: '31 October - 04 November 2026 • Textiles, Fashion, Footwear, Medical Devices & Stationery.',
        seatsLeft: 8,
        dates: '31 October - 04 November 2026',
        earlyBirdDiscount: 'Get 10% OFF • Contact us for exclusive pricing',
        categories: [
          'Textiles, Fabrics, Yarns & Clothing',
          'Shoes, Travel Bags & Suitcases',
          'Medicines, Devices & Health Products',
          'Office Supplies, Toys & Stationery',
        ],
        benefits: [
          'Return Flight (Premium Airlines - Singapore/Cathay)',
          'Normal Business Visa processing support (includes official invitations)',
          '4-Star Luxury Hotel stay in Guangzhou',
          'Daily breakfast buffet & Indian catering dinners',
          'Exhibition complex daily coach shuttles',
          'Basic Canton Fair Entry Registration Badge',
          'English-Chinese trade interpreter allocation',
          'Travel Insurance (Up to 55 years)',
          'Early Bird Special: 10% OFF Available',
        ],
      },
    ],
    inclusions: [
      'Return Flight (Premium Airlines - Singapore/Cathay)',
      'Normal Business Visa processing support (includes official invitations)',
      '4-Star Luxury Hotel stay in Guangzhou',
      'Daily breakfast buffet & Indian catering dinners',
      'Exhibition complex daily coach shuttles',
      'Basic Canton Fair Entry Registration Badge',
      'English-Chinese trade interpreter allocation',
      'Travel Insurance (Up to 55 years)',
    ],
    exclusions: [
      'Daily Lunch at exhibition complex (available inside the venue)',
      'GST @ 5% & TCS @ 2% on package cost (compulsory Government tax)',
      'Customary tour guide gratuity - USD 25 per head',
      'Personal minibar, laundry, or premium excess baggage fees',
      'Custom sample shipping back to India (can be handled via our logistics desk)',
    ],
    consultationBanner: {
      title: 'Ready to Source Products from China?',
      subtitle: 'Get expert guidance from our Mumbai and China teams. We handle everything from supplier verification to doorstep delivery.',
      stats: [
        { value: '500+', label: 'Suppliers Verified' },
        { value: '100+', label: 'Indian Businesses Served' },
        { value: 'On-Ground', label: 'Team in China' },
        { value: 'End-to-End', label: 'Import Support' },
      ],
      ctaText: 'Book Free Consultation',
    },
    targetAudience: [
      { title: 'Manufacturers & Factory Owners', description: 'Upgrading machinery, automation lines, precision tooling, and industrial components.' },
      { title: 'Importers & Distributors', description: 'Seeking new product lines, consumer goods, smart electronics, and hardware.' },
      { title: 'E-Commerce Brands & D2C Founders', description: 'Sourcing high-volume private label goods and packaging materials directly from OEMs.' },
      { title: 'Hardware & Construction MSMEs', description: 'Procuring building materials, sanitaryware, LED systems, and electrical fittings.' },
      { title: 'Textile & Apparel Leaders', description: 'Finding premium fabrics, specialized yarn, garment accessories, and footwear.' },
      { title: 'Startup Founders & Innovators', description: 'Developing hardware prototypes and exploring contract manufacturing capabilities.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Cross-Border Bilateral Trade, MSME Policy & Global Trade Corridors',
        topic: 'Opening Global Corridors: Indian MSME Sourcing Strategy for 2026–2030',
      },
      {
        name: 'Madhuri Narkhede',
        designation: 'Chapter Director',
        organization: 'Namaste Maharashtra Chapter / VUSF',
        image: '/img/c14.png',
        expertise: 'Trade Delegation Coordination, Chapter Linkages & Industrial Networking',
        topic: 'Bridging Regional MSMEs with Global Sourcing and International Trade Desks',
      },
    ],
    faqs: [
      {
        question: 'What is the Visa Rejection Protection Policy?',
        answer: 'In the event of a visa rejection by the Chinese Consulate, Namaste China provides a Full Refund of your package deposit, less a processing/consulate fee of ₹5,000. Book with absolute peace of mind.',
      },
      {
        question: 'Does the delegation pass include international flights and hotel stay?',
        answer: 'Yes. All packages include Return Flights on Premium Airlines (Singapore Airlines / Cathay Pacific), 4-Star Luxury Hotel accommodation in Guangzhou, and daily Indian catering dinners.',
      },
      {
        question: 'What language support is provided during fair negotiations and factory visits?',
        answer: 'Every delegation group is paired with experienced bilingual trade interpreters fluent in Mandarin and English/Hindi who have specialized knowledge in trade negotiations and technical specifications.',
      },
      {
        question: 'What are the core categories in Phase 1 vs Phase 3?',
        answer: 'Phase 1 (15–19 October 2026) covers Consumer Electronics, Industrial Machinery, Hardware, Tools, Automation, and Lighting. Phase 3 (31 October – 04 November 2026) covers Textiles, Fabrics, Garments, Shoes, Travel Bags, Medicines, Devices, Health Products, and Stationery.',
      },
      {
        question: 'What if our business requires ongoing sourcing and shipment to India after the fair?',
        answer: 'Our on-ground team in China and our Mumbai headquarters handle end-to-end post-event supplier verification, sample dispatch, pre-shipment quality inspection, and customs clearance to your doorstep.',
      },
    ],
    supportPhone: '+91-8169080686',
    supportWhatsapp: '+91-8169080686',
    supportEmail: 'info@namastevishwaudyam.org',
  },
  {
    id: 'sc-st-entrepreneur-program',
    slug: 'sc-st-entrepreneur-program',
    title: 'SC / ST Entrepreneur Growth & Empowerment Program',
    statusBadge: 'SUBSIDIZED REGISTRATION OPEN',
    eventType: 'INCLUSIVE EMPOWERMENT & SUBSIDY CONCLAVE',
    tagline: 'Unlock government credit subsidies, bank linkages, PMEGP/CMEGP sanctions, and direct business mentorship for SC & ST founders.',
    date: 'December 12–14, 2026',
    day: 'Saturday to Monday (3-Day Masterclass)',
    time: '10:00 AM – 05:30 PM IST',
    venue: 'Dr. Ambedkar Business & Convention Centre, CBD Belapur',
    location: 'Navi Mumbai & Maharashtra Regional Desks, Maharashtra, India',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    country: 'India',
    organizer: 'Vishwa Udyam Sahayta Foundation',
    brand: 'VUSF Affirmative Action Cell',
    image: '/banner/sc-ststartup1day.jpeg',
    filterCategory: 'entrepreneurship',
    description: 'Specialized 3-day empowerment initiative offering comprehensive bank credit linkages, government subsidies (PMEGP / CMEGP), bank-ready DPR preparation, and expert business mentorship.',
    longDescription: [
      'The SC / ST Entrepreneur Program is a flagship mission by Vishwa Udyam Sahayta Foundation dedicated to fostering affirmative industrial growth, accessible credit linkages, and institutional support for Scheduled Caste and Scheduled Tribe business owners.',
      'Over three intensive days, delegates receive hands-on training on government subsidy frameworks including PMEGP (up to 35% margin money subsidy), CMEGP, Stand-Up India, CGTMSE collateral-free lending, and DIC institutional grants.',
      'Participants will work directly with chartered accountants and bank empanelled project consultants to prepare bank-ready Detailed Project Reports (DPRs) and connect with leading nationalized banks.'
    ],
    stats: [
      { value: '35%', label: 'Max Subsidy Margin', subtext: 'Under PMEGP/CMEGP government schemes' },
      { value: '3 Days', label: 'Hands-on Bootcamp', subtext: 'Financial structuring & DPR preparation' },
      { value: '250+', label: 'Entrepreneurs Enrolled', subtext: 'Across manufacturing & services' },
      { value: '₹50 lakh', label: 'Collateral-Free Limit', subtext: 'Under CGTMSE credit mechanisms' },
    ],
    highlights: [
      'Direct Interaction with Nationalized Bank Credit Managers & DIC Officers',
      'Step-by-Step Bank-Ready DPR (Detailed Project Report) Preparation',
      'Guidance on Stand-Up India, PMEGP, CMEGP & State MSME Subsidies',
      '1-on-1 Business Mentoring with Veteran Entrepreneurs & Industrialists',
    ],
    galleryImages: [
      '/timeline_photos/mahu sc st/IMG-20251206-WA0060.jpeg',
      '/timeline_photos/start namste india/IMG-20260206-WA0035.jpeg',
      '/timeline_photos/start namste india/IMG-20260206-WA0096.jpeg',
      '/timeline_photos/college/IMG-20250614-WA0086.jpeg',
    ],
    benefits: [
      {
        number: '01',
        title: 'Bank Credit & Subsidy Sanctions',
        description: 'Understand the exact criteria for securing government credit schemes with up to 35% capital subsidies without getting trapped in documentation rejections.',
        category: 'Finance & Subsidies',
      },
      {
        number: '02',
        title: 'Live Bank-Ready DPR Formulation',
        description: 'Draft your business Detailed Project Report alongside financial analysts with realistic cash-flow projections and debt-service coverage ratios.',
        category: 'Project Planning',
      },
      {
        number: '03',
        title: 'GeM Portal & Public Procurement Linkages',
        description: 'Learn how to secure mandatory 4% public procurement reservations for SC/ST enterprises on the Government e-Marketplace (GeM).',
        category: 'Market Access',
      },
      {
        number: '04',
        title: 'Collateral-Free Loan Guidance',
        description: 'Leverage the CGTMSE framework to secure working capital and term loans up to ₹2 crore without pledging residential or commercial collateral.',
        category: 'Credit Enhancement',
      },
      {
        number: '05',
        title: 'Factory & Unit Setup Counseling',
        description: 'Receive advice on industrial land allotment in MIDC/state industrial parks with applicable power tariff and stamp duty waivers.',
        category: 'Infrastructure',
      },
      {
        number: '06',
        title: '1-Year Continuous Post-Event Support',
        description: 'Get free quarterly compliance check-ins and handholding through the VUSF Affirmative Action Helpdesk until loan disbursement.',
        category: 'Sustained Growth',
      },
    ],
    agendaTitle: '3 DAYS OF EMPOWERMENT & SCALING',
    agendaSubtitle: 'Structured curriculum designed to take your enterprise from concept to subsidized bank sanction.',
    agenda: [
      {
        time: 'Day 1 (10:00 AM – 05:30 PM)',
        title: 'Government Scheme Masterclass & Eligibility Mapping',
        description: 'Deep dive into PMEGP, CMEGP, Stand-Up India, and National SC-ST Hub (NSSH) incentives with state industry officers.',
        type: 'keynote',
      },
      {
        time: 'Day 2 (10:00 AM – 05:30 PM)',
        title: 'Hands-on DPR Workshop & Financial Modeling',
        description: 'Collaborative workshop drafting financial ratios, cost of project estimates, and CMA data required by branch managers.',
        type: 'workshop',
      },
      {
        time: 'Day 3 (10:00 AM – 05:30 PM)',
        title: 'Banker-Entrepreneur Meet & Institutional Linkages',
        description: 'Direct pitch desks with nationalized bank representatives, GeM onboarding counter, and distribution of Program Completion Certificates.',
        type: 'networking',
      },
    ],
    passes: [
      {
        id: 'subsidized-delegate',
        name: 'Subsidized Delegate Pass',
        price: 1999,
        gstPercentage: 18,
        shortDesc: 'Affirmative subsidized pass for grassroots SC/ST entrepreneurs and micro-founders.',
        seatsLeft: 35,
        benefits: [
          '3-Day Full Access to All Interactive Sessions & Workshops',
          'Comprehensive Scheme Dossier & Financial Toolkits',
          'Daily Networking Lunch & Refreshments',
          'Official Program Certificate of Completion',
          'Access to GeM Portal Quick Onboarding Counter',
        ],
      },
      {
        id: 'standard-entrepreneur',
        name: 'Entrepreneur Growth Pass',
        price: 3499,
        gstPercentage: 18,
        recommended: true,
        badge: 'MOST RECOMMENDED',
        shortDesc: 'Includes 1-on-1 personalized DPR review and priority banker interface.',
        seatsLeft: 20,
        benefits: [
          'All Subsidized Delegate Pass Privileges',
          'Personal 1-on-1 DPR Review Session with Financial Expert',
          'Priority Fast-Track Interface with Bank Officers',
          'Dedicated Assistance for PMEGP/CMEGP Portal Application',
          '3 Months Free VUSF Inclusivity Cell Advisory',
        ],
      },
      {
        id: 'mentorship-enterprise',
        name: 'Executive Enterprise Pass',
        price: 7999,
        gstPercentage: 18,
        shortDesc: 'Complete institutional package with end-to-end DPR formulation and 1-year mentoring.',
        seatsLeft: 10,
        benefits: [
          'All Entrepreneur Growth Pass Privileges',
          'Full CA-Certified Bank-Ready Detailed Project Report (DPR)',
          '1-on-1 Strategic Mentorship with VUSF President Pragati Tayde',
          'MIDC Land & Subsidy Application Handholding',
          '1-Year Free Corporate Membership in Namaste India Group',
        ],
      },
    ],
    targetAudience: [
      { title: 'First-Generation SC/ST Founders', description: 'Starting a new manufacturing unit, service enterprise, or trading company.' },
      { title: 'Existing MSME Business Owners', description: 'Looking to expand capacity, modernize machinery, and claim capital subsidies.' },
      { title: 'Rural & Semi-Urban Artisans', description: 'Scaling handmade goods, agro products, and regional craft enterprises.' },
      { title: 'Youth & Tech Innovators', description: 'Seeking seed funding, incubation facilities, and government startup grants.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Affirmative Action, Government Policy & MSME Scale-Up',
        topic: 'Creating Sustainable Wealth: From Subsidies to Scalable Enterprises',
      },
      {
        name: 'Kamlesh Kumar',
        designation: 'Managing Director',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/kamlesh.jpeg',
        expertise: 'Financial Modeling & Banking Interface',
        topic: 'Demystifying Banker Expectations and Ensuring 100% Loan Sanctions',
      },
    ],
    faqs: [
      {
        question: 'Who is eligible for the subsidized delegate pass rate?',
        answer: 'Entrepreneurs belonging to Scheduled Caste (SC) or Scheduled Tribe (ST) communities holding a valid caste certificate or enterprise registration can avail this subsidized initiative.',
      },
      {
        question: 'Will I get an official Detailed Project Report (DPR) from this program?',
        answer: 'Yes. Attendees are trained on drafting their own DPR, and Executive Enterprise Pass holders receive a full CA-reviewed DPR ready for submission to bank loan managers.',
      },
      {
        question: 'What documents should I bring along?',
        answer: 'Please bring your Aadhaar card, PAN card, Udyam Registration (if registered), caste certificate, and basic details about your proposed or existing business.',
      },
      {
        question: 'Is food and study material included in the registration fee?',
        answer: 'Yes, all delegate passes include complete study dossiers, stationery kits, daily networking lunch, and morning/evening high tea.',
      },
    ],
    supportPhone: '+91-8169080686',
    supportWhatsapp: '+91-8169080686',
    supportEmail: 'info@namastevishwaudyam.org',
  },
  {
    id: 'sc-st-startup-program',
    slug: 'sc-st-startup-program',
    title: 'SC / ST Startup Innovation & Incubation Conclave',
    statusBadge: 'STARTUP COHORT NOMINATIONS OPEN',
    eventType: 'STARTUP INCUBATION & SEED ACCELERATOR',
    tagline: 'Accelerate high-potential SC & ST innovators with seed funding facilitation, angel pitch sessions, statutory clearances, and incubation.',
    date: 'October 24, 2026',
    day: 'Saturday (1-Day Intensive Accelerator)',
    time: '09:30 AM – 05:30 PM IST',
    venue: 'Navi Mumbai Innovation Hub, CIDCO Technology Centre',
    location: 'Navi Mumbai, Maharashtra, India',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    country: 'India',
    organizer: 'Vishwa Udyam Sahayta Foundation',
    brand: 'VUSF Startup Accelerator',
    image: '/banner/sc-ststartup1day.jpeg',
    filterCategory: 'entrepreneurship',
    description: 'Accelerating high-potential SC & ST innovators and early-stage founders with seed funding facilitation, investor pitch sessions, statutory registrations, and strategic market expansion support.',
    longDescription: [
      'The SC / ST Startup Innovation & Incubation Program is an intensive 1-day accelerator designed to propel breakthrough ideas into commercially viable, venture-fundable enterprises.',
      'Targeted at technology creators, sustainable manufacturing founders, agro-tech innovators, and D2C brands led by SC/ST youth, this conclave provides immediate access to angel investors, venture funds, incubation mentors, and government seed funds under the Startup India Seed Fund Scheme (SISFS).'
    ],
    stats: [
      { value: '₹25 lakh', label: 'Avg Seed Fund Grant', subtext: 'Facilitated under SISFS & angel networks' },
      { value: '1 Full Day', label: 'Intensive Accelerator', subtext: 'Pitching, mentoring & scaling' },
      { value: '15+', label: 'Active Angel Investors', subtext: 'Evaluating early-stage startups' },
      { value: '100%', label: 'Incubation Support', subtext: 'Legal, IPR & compliance setup' },
    ],
    highlights: [
      'Live 5-Minute Closed-Door Pitch Sessions to Angel Investors & Seed Funds',
      'IPR, Trademark, Patent & Startup India DPIIT Recognition Masterclass',
      'Product-Market Fit (PMF) & Unit Economics Optimization Workshop',
      'MOU Signing with Academic Incubation Centers & Co-Working Hubs',
    ],
    galleryImages: [
      '/timeline_photos/college/IMG-20250614-WA0075.jpeg',
      '/timeline_photos/college/IMG-20250614-WA0093.jpeg',
      '/timeline_photos/mahu sc st/IMG-20251206-WA0060.jpeg',
      '/timeline_photos/team/IMG-20260206-WA0089.jpg',
    ],
    benefits: [
      {
        number: '01',
        title: 'Direct Pitching to Angel Investors',
        description: 'Present your pitch deck directly to early-stage venture capital scouts and angel syndicates looking to back inclusive founders.',
        category: 'Seed Funding',
      },
      {
        number: '02',
        title: 'DPIIT Startup India Recognition',
        description: 'Get step-by-step assistance in securing official Startup India DPIIT recognition to avail 3-year income tax exemptions (Section 80-IAC).',
        category: 'Tax & Compliance',
      },
      {
        number: '03',
        title: 'Patent & Trademark Subsidies',
        description: 'Learn how to claim up to 80% government fee rebates on patent filings and 50% rebates on trademark registrations.',
        category: 'Intellectual Property',
      },
      {
        number: '04',
        title: 'Incubation & Co-Working Access',
        description: 'Gain entry into VUSF-affiliated university incubation centers with subsidized lab infrastructure, prototyping tools, and meeting facilities.',
        category: 'Infrastructure',
      },
      {
        number: '05',
        title: 'B2B Enterprise Pilots',
        description: 'Connect with established MSME manufacturers and corporate chambers ready to pilot and adopt startup software, machinery, or services.',
        category: 'Market Traction',
      },
      {
        number: '06',
        title: 'Executive Pitch Coaching',
        description: 'Receive real-time feedback on your pitch deck narrative, financial milestones, cap-table structuring, and valuation benchmarks.',
        category: 'Pitch Readiness',
      },
    ],
    agendaTitle: 'ACCELERATING TOMORROW’S UNICORNS',
    agendaSubtitle: 'Fast-paced schedule engineered for rapid learning, validation, and venture capital connections.',
    agenda: [
      {
        time: '09:30 AM – 10:30 AM',
        title: 'Registration, Tech Demos & Founder Breakfast',
        description: 'Networking reception and product showcase for participating startup founders.',
        type: 'networking',
      },
      {
        time: '10:30 AM – 12:00 PM',
        title: 'Keynote: Building Sustainable & Scalable Tech MSMEs',
        description: 'Founders who scaled from 0 to ₹50 Cr share real-world playbooks on go-to-market strategies.',
        type: 'keynote',
      },
      {
        time: '12:00 PM – 01:30 PM',
        title: 'DPIIT, IPR & Seed Fund Scheme Deep-Dive',
        description: 'How to access non-dilutive government grants up to ₹50 lakh under SISFS and state innovation funds.',
        type: 'workshop',
      },
      {
        time: '01:30 PM – 02:30 PM',
        title: 'Networking Lunch with Venture Capital Observers',
        description: 'Informal networking with investors, bankers, and industry mentors.',
        type: 'networking',
      },
      {
        time: '02:30 PM – 04:30 PM',
        title: 'Live Pitching Arena & Jury Evaluations',
        description: 'Curated 5-minute pitches by shortlisted startup founders before a panel of angel investors.',
        type: 'delegation',
      },
      {
        time: '04:30 PM – 05:30 PM',
        title: 'Incubation Grants, Felicitations & Next Steps',
        description: 'Awarding cohort incubation certificates, announcing pilot commitments, and concluding tea.',
        type: 'felicitation',
      },
    ],
    passes: [
      {
        id: 'founder-pass',
        name: 'Startup Founder Pass',
        price: 1499,
        gstPercentage: 18,
        shortDesc: 'Full 1-day access to accelerator keynotes, masterclasses, and networking lunch.',
        seatsLeft: 30,
        benefits: [
          'Full-Day Entry to All Masterclasses & Keynotes',
          'Access to DPIIT & IPR Facilitation Desks',
          'Startup Resource Kit & Seed Grant Playbook',
          'Networking Lunch & High Tea',
          'Certificate of Program Participation',
        ],
      },
      {
        id: 'pitch-pass',
        name: 'Pitch & Investor Pass',
        price: 3999,
        gstPercentage: 18,
        recommended: true,
        badge: 'FOR ACTIVE FOUNDERS',
        shortDesc: 'Reserved 5-minute pitch slot before the angel investor panel with personalised feedback.',
        seatsLeft: 15,
        benefits: [
          'All Startup Founder Pass Privileges',
          'Reserved 5-Minute Pitch Slot in Front of Active Investors',
          'One-on-One Pitch Deck Review & Valuation Mentoring',
          'Inclusion in the VUSF Startup Deal Flow Book Distributed to 50+ VCs',
          'Priority Consideration for Seed Incubation Cohort',
        ],
      },
      {
        id: 'cohort-incubation',
        name: 'Full Incubation Cohort Pass',
        price: 8999,
        gstPercentage: 18,
        shortDesc: 'Includes 6 months of active incubation, legal setup, and corporate pilot linkages.',
        seatsLeft: 8,
        benefits: [
          'All Pitch & Investor Pass Privileges',
          '6 Months Virtual/Physical Incubation Support with VUSF Hubs',
          'Full Company Incorporation / DPIIT Registration Handholding',
          'Trademark (IPR) Filing Assistance',
          'Direct Intro to 3 Enterprise Pilot Customers in Maharashtra',
        ],
      },
    ],
    targetAudience: [
      { title: 'Tech & SaaS Innovators', description: 'Building software, mobile platforms, enterprise AI, or logistics tools.' },
      { title: 'Agro-Tech & Food Founders', description: 'Developing post-harvest value additions, organic food processing, and supply chain tech.' },
      { title: 'CleanTech & Renewable Startups', description: 'Innovating in solar technology, EV charging, bio-energy, or circular economy.' },
      { title: 'Hardware & IoT Creators', description: 'Prototyping connected devices, industrial sensors, and electronic products.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Startup Incubation, MSME Alliances & Venture Growth',
        topic: 'Fostering Resilient Startup Ecosystems Across Tier-2 & Tier-3 Hubs',
      },
      {
        name: 'Kamlesh Kumar',
        designation: 'Managing Director',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/kamlesh.jpeg',
        expertise: 'Angel Investing & Strategic Partnerships',
        topic: 'What Early-Stage Investors Truly Look for in Founder Presentations',
      },
    ],
    faqs: [
      {
        question: 'Do I need an incorporated private limited company to attend?',
        answer: 'No. Both early-stage ideators/proprietors and registered startups (Pvt Ltd, LLP, Partnership) are eligible to participate and pitch.',
      },
      {
        question: 'Will angel investors make real funding offers at the conclave?',
        answer: 'Yes. Participating investors and angel syndicates actively scout for promising deals for seed cheques ranging from ₹10 lakh to ₹50 lakh.',
      },
      {
        question: 'Can co-founders attend together on one pass?',
        answer: 'Each pass admits one delegate. If your co-founder wishes to pitch alongside you, a secondary founder pass can be booked at a special 20% discount.',
      },
    ],
    supportPhone: '+91-8169080686',
    supportWhatsapp: '+91-8169080686',
    supportEmail: 'info@namastevishwaudyam.org',
  },
  {
    id: 'women-entrepreneur-growth-program',
    slug: 'women-entrepreneur-growth-program',
    title: 'Women Entrepreneurship Growth Program',
    statusBadge: 'STREE SHAKTI COHORT REGISTRATION OPEN',
    eventType: 'WOMEN BUSINESS MASTERCLASS & SCALING',
    tagline: 'Empower your venture with collateral-free credit, institutional buyer networks, packaging mastery, and executive leadership coaching.',
    date: 'October 10, 2026',
    day: 'Saturday (1-Day Power Growth Workshop)',
    time: '09:30 AM – 05:00 PM',
    venue: 'Pillai University, Panvel',
    location: 'Navi Mumbai & Regional Desks, Maharashtra, India',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    country: 'India',
    organizer: 'Vishwa Udyam Sahayta Foundation',
    brand: 'Namaste Stree Shakti Wing',
    image: '/banner/women-enter-growth-prg1da.jpeg',
    filterCategory: 'women',
    description: 'Empowering women founders and MSME owners with dedicated leadership coaching, collateral-free credit access, digital marketing, packaging solutions, and institutional buyer networks.',
    longDescription: [
      'Namaste Stree Shakti is the premier women empowerment and enterprise acceleration mission by Vishwa Udyam Sahayta Foundation, headed by President Pragati Tayde.',
      'This 1-Day Power Growth Workshop provides women entrepreneurs, manufacturers, boutique owners, and service innovators with actionable tools to scale their revenues, navigate digital commerce, access Stand-Up India & Mudra credit, and expand into pan-India retail and export markets.'
    ],
    stats: [
      { value: '1,500+', label: 'Women Enterprises Scaled', subtext: 'Across Maharashtra and national corridors' },
      { value: '1 Full Day', label: 'Intensive Growth Workshop', subtext: 'Finance, branding & market linkages' },
      { value: '₹10–100L', label: 'Stand-Up India Loans', subtext: 'Dedicated banking facilitation' },
      { value: '100%', label: 'Practical Takeaways', subtext: 'Packaging, pricing & digital sales' },
    ],
    highlights: [
      'Interactive Masterclasses on Stand-Up India, Mudra & State Women MSME Policies',
      'Modern Packaging, Barcoding & Export-Grade Labeling Clinics',
      'Direct Buyer-Seller Linkages with Supermarket Chains & Corporate Gifting Portals',
      'Personalized Financial Planning, Risk Management & Wealth Creation Guidance',
    ],
    galleryImages: [
      '/timeline_photos/mahila support/IMG-20260206-WA0102.jpeg',
      '/timeline_photos/pragati/IMG-20250614-WA0081.jpeg',
      '/timeline_photos/start namste india/IMG-20260206-WA0039.jpeg',
      '/timeline_photos/start namste india/IMG-20260206-WA0104.jpg',
    ],
    benefits: [
      {
        number: '01',
        title: 'Startup & Entrepreneurial Mindset',
        description: 'Business registration & setup, choosing the right business structure, building confidence and overcoming common barriers, and identifying opportunities for women entrepreneurs.',
        category: 'Mindset & Setup',
      },
      {
        number: '02',
        title: 'Finance & Government Schemes',
        description: 'Stand-Up India, Udyogini Scheme, TREAD Scheme, Mahila Udyam Nidhi, PMEGP, and basic costing & bookkeeping.',
        category: 'Finance',
      },
      {
        number: '03',
        title: 'Hands-on Application Support',
        description: 'Understand your business eligibility, identify suitable government schemes, get guidance to start the application process, and receive a personalised Scheme Eligibility Snapshot.',
        category: 'Application Support',
      },
      {
        number: '04',
        title: 'Sourcing & Market Connect',
        description: 'How to find buyers and distributors/vendors, how to approach and pitch professionally, and understanding what to prepare before approaching the market.',
        category: 'Market Connect',
      },
      {
        number: '05',
        title: 'Success Story & Q&A',
        description: 'Real entrepreneurial success story, open Q&A and expert next steps.',
        category: 'Success Story',
      },
      {
        number: '06',
        title: 'Feedback, Certificate & Next Step',
        description: 'Certificate distribution, guidance for the next-level entrepreneurship program, and 50% fee credit toward the next program for eligible participants enrolling within 7 days.',
        category: 'Next Steps',
      },
    ],
    agendaTitle: 'A DAY DEDICATED TO WOMEN IN ENTERPRISE',
    agendaSubtitle: 'High-energy, practical, and inspiring sessions engineered for immediate business implementation.',
    agenda: [
      {
        time: '9:30 AM – 10:00 AM',
        title: 'Registration and Breakfast',
        description: 'Registration and Breakfast for the attendees.',
        type: 'networking',
      },
      {
        time: '10:00 AM – 11:00 AM',
        title: 'Session 1: Startup Process and Mindset',
        description: 'Session on Startup Process and Mindset.',
        type: 'keynote',
      },
      {
        time: '11:00 AM – 11:15 AM',
        title: 'Tea Break',
        description: 'Short break for tea and networking.',
        type: 'networking',
      },
      {
        time: '11:15 AM – 12:45 PM',
        title: 'Session 2: Finance and Schemes Deep Dive',
        description: 'Deep dive into Finance and Government Schemes.',
        type: 'workshop',
      },
      {
        time: '12:45 PM – 1:00 PM',
        title: 'Buffer and Open Questions',
        description: 'Buffer time and open questions from the audience.',
        type: 'networking',
      },
      {
        time: '1:00 PM – 2:00 PM',
        title: 'Lunch',
        description: 'Lunch break.',
        type: 'networking',
      },
      {
        time: '2:00 PM – 3:00 PM',
        title: 'Session 3: Hands-on Application Clinic',
        description: 'Hands-on Application Clinic for the participants.',
        type: 'workshop',
      },
      {
        time: '3:00 PM – 3:15 PM',
        title: 'Buffer and Open Questions',
        description: 'Buffer time and open questions.',
        type: 'networking',
      },
      {
        time: '3:15 PM – 3:45 PM',
        title: 'Session 4: Sourcing and Market Connect',
        description: 'Session on Sourcing and Market Connect.',
        type: 'workshop',
      },
      {
        time: '3:45 PM – 4:00 PM',
        title: 'Your Path Forward',
        description: 'Discussion on your path forward.',
        type: 'keynote',
      },
      {
        time: '4:00 PM – 4:25 PM',
        title: 'Closing: Success Story and Q&A',
        description: 'Real entrepreneurial success story, open Q&A and expert next steps.',
        type: 'keynote',
      },
      {
        time: '4:25 PM – 4:45 PM',
        title: 'Feedback, Certificate and Enrollment Details',
        description: 'Certificate distribution, guidance for the next-level entrepreneurship program.',
        type: 'felicitation',
      },
    ],
    passes: [
      {
        id: 'stree-shakti-pass',
        name: 'Stree Shakti Delegate Pass',
        price: 1999,
        gstPercentage: 18,
        shortDesc: 'Full 1-day pass for women founders, micro-entrepreneurs, and aspiring business owners.',
        seatsLeft: 25,
        benefits: [
          'Full-Day Access to All Workshops & Keynotes',
          'Women MSME Government Policy Handbook',
          'Networking Luncheon & High Tea',
          'Official Stree Shakti Certificate of Completion',
          'Entry to Namaste Stree Shakti WhatsApp Community',
        ],
      },
      {
        id: 'growth-vip-pass',
        name: 'VIP Growth & Matchmaking Pass',
        price: 4499,
        gstPercentage: 18,
        recommended: true,
        badge: 'MOST POPULAR',
        shortDesc: 'Includes dedicated 1-on-1 banking review, product showcase table, and B2B buyer introductions.',
        seatsLeft: 12,
        benefits: [
          'All Stree Shakti Delegate Pass Privileges',
          'Dedicated Product Display Table in the Conclave Foyer',
          '1-on-1 Stand-Up India Loan Dossier Pre-Screening',
          'Direct Introduction to Corporate Gifting & Retail Buyers',
          'Priority Seating in Front Executive Rows',
        ],
      },
      {
        id: 'corporate-leader-pass',
        name: 'Corporate Leader & Mentorship Pass',
        price: 8499,
        gstPercentage: 18,
        shortDesc: 'Comprehensive executive package with personalized mentorship from President Pragati Tayde.',
        seatsLeft: 6,
        benefits: [
          'All VIP Growth Pass Privileges',
          '60-Minute Private Mentoring Session with Pragati Tayde',
          'Full-page Brand Feature in Namaste India Magazine',
          '1-Year Free Premium Membership in VUSF Council',
          'Complimentary Pass for One Additional Woman Executive',
        ],
      },
    ],
    targetAudience: [
      { title: 'Women MSME Founders & Directors', description: 'Scaling manufacturing, apparel, food processing, or chemical enterprises.' },
      { title: 'Boutique & Artisan Brand Owners', description: 'Handicrafts, designer jewelry, natural cosmetics, and lifestyle products.' },
      { title: 'Service & Professional Innovators', description: 'Consultants, educators, event planners, and digital agency owners.' },
      { title: 'Aspiring Women Entrepreneurs', description: 'Transitioning from ideas or home kitchens into registered commercial companies.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Women Leadership, MSME Scaling & Socio-Economic Transformation',
        topic: 'Stree Shakti in Commerce: Building Profitable, Resilient & Independent Brands',
      },
      {
        name: 'Kamlesh Kumar',
        designation: 'Managing Director',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/kamlesh.jpeg',
        expertise: 'Commercial Finance & Supply Chain Governance',
        topic: 'Negotiating Fair Commercial Contracts and Protecting Business Cash Flows',
      },
    ],
    faqs: [
      {
        question: 'Can I display my physical products at the venue?',
        answer: 'Yes! VIP Growth Pass and Corporate Leader Pass holders receive designated display tables in the exhibition foyer to showcase their goods to attendees and corporate buyers.',
      },
      {
        question: 'Is this program suitable for beginners who haven’t registered a company yet?',
        answer: 'Absolutely. The morning sessions specifically walk first-time founders through Udyam registration, GST exemption thresholds, PAN/bank setup, and choosing the right legal entity.',
      },
      {
        question: 'Will there be guidance on securing bank loans without collateral?',
        answer: 'Yes, special sessions cover Stand-Up India, Mudra Kishor/Tarun schemes, and CGTMSE backing specifically structured for women entrepreneurs.',
      },
    ],
    supportPhone: '+91-9167845801',
    supportWhatsapp: '+91-9167845801',
    supportEmail: 'info@namasteindiagroup.org',
  },
  {
    id: 'namaste-india-magazine',
    slug: 'namaste-india-magazine',
    title: 'Namaste Entrepreneur 2026 Magazine',
    statusBadge: 'COMPLIMENTARY DIGITAL COPIES OPEN',
    eventType: 'NATIONAL BUSINESS MAGAZINE & MSME PROFILES',
    tagline: '5,000+ national prints across 10+ states with 50% exclusive coverage dedicated to visionary MSME leaders, homegrown innovators, and export champions. Read free digital edition or order physical print.',
    date: 'National Release: 02 October 2026',
    day: 'Annual Flagship Business Issue',
    time: 'Instant Digital Delivery via Email',
    venue: 'Pan-India Distribution across 10+ States & Global Digital Broadcast',
    location: '10+ States Pan-India Distribution',
    city: '10+ States',
    state: 'National Distribution',
    country: 'India',
    organizer: 'Namaste Entrepreneur Editorial Council & VUSF',
    brand: 'Namaste Entrepreneur Magazine',
    image: '/banner/magazine.jpeg',
    filterCategory: 'awards',
    description: 'Namaste Entrepreneur 2026 Magazine features 5,000+ national prints across 10+ states with 50% exclusive coverage dedicated to MSME leaders, exporters, and trailblazing founders.',
    longDescription: [
      'Namaste Entrepreneur 2026 Magazine is the official high-impact business publication by Vishwa Udyam Sahayta Foundation, celebrating India’s most visionary MSME trailblazers, startup innovators, exporters, and industrial champions.',
      'The upcoming 2026 National Edition features 5,000+ physical prints distributed across 10+ states to trade chambers, ministries, corporate procurement heads, and export promotion councils.',
      'Over 50% of the editorial space is exclusively dedicated to celebrating transformative MSME leaders and homegrown founders. Register for your 100% Free Digital E-Magazine or book a collector’s hardbound physical print copy.'
    ],
    stats: [
      { value: '5,000+', label: 'National Prints', subtext: 'Circulated across 10+ states' },
      { value: '10+', label: 'States Distribution', subtext: 'Pan-India business reach' },
      { value: '50%', label: 'MSME Leader Coverage', subtext: 'Dedicated founder profiles' },
      { value: '100%', label: 'Free Digital Access', subtext: 'Instant PDF sent to your email' },
    ],
    highlights: [
      '5,000+ Glossy National Hard Copies Distributed to Chambers, Ministries & Trade Desks',
      '50% Dedicated Features on Indian MSME Champions, Manufacturing & Export Leaders',
      '100% Free Interactive Digital Edition Delivered Directly to Your Registered Email',
      'Editorial Story Submissions & Brand Feature Inquiries: 7499492860 | info@namastevishwa.com',
    ],
    galleryImages: [],
    benefits: [
      {
        number: '01',
        title: '100% Free Digital E-Magazine',
        description: 'Receive the complete high-resolution digital edition directly in your email inbox immediately upon registration with zero fees.',
        category: 'Digital Access',
      },
      {
        number: '02',
        title: '50% Dedicated MSME Stories',
        description: 'Read in-depth case studies, scaling strategies, and inspirational founder journeys of India’s top 50+ MSME champions.',
        category: 'Founder Profiles',
      },
      {
        number: '03',
        title: '5,000+ National Print Circulation',
        description: 'Distributed physically across 10+ states to government ministries, DIC offices, trade chambers, and corporate boardrooms.',
        category: 'National Reach',
      },
      {
        number: '04',
        title: 'Collector’s Hardbound Option',
        description: 'Order physical collector’s hardbound copies (₹500 + GST + delivery) delivered straight to your office or home address.',
        category: 'Print Edition',
      },
      {
        number: '05',
        title: 'Direct Editorial Connection',
        description: 'Connect directly with the editorial desk at 7499492860 / info@namastevishwa.com to submit your brand’s growth story.',
        category: 'Media Coverage',
      },
      {
        number: '06',
        title: 'Cross-Industry B2B Insights',
        description: 'Gain valuable market intelligence on export corridors, bank credit linkages, government subsidies, and supply chain trends.',
        category: 'Market Intelligence',
      },
    ],
    agendaTitle: 'EDITORIAL TIMELINE & DISTRIBUTION SCHEDULE',
    agendaSubtitle: 'Key milestone schedule for article submissions, proofing, and the grand national release.',
    agenda: [
      {
        time: '20 September 2026',
        title: 'Deadline for Story Submissions & Founder Profiles',
        description: 'Last date for submitting company profile questionnaires, high-res photos, and founder interviews to info@namastevishwa.com.',
        type: 'workshop',
      },
      {
        time: '25 September 2026',
        title: 'Editorial Review, Layout & Proofing',
        description: 'Final layout proofing and editorial approval before entering 5,000+ national print run.',
        type: 'workshop',
      },
      {
        time: '02 October 2026 (11:00 AM)',
        title: 'Grand National Release & Digital Broadcast',
        description: 'Official release of Namaste Entrepreneur 2026 Magazine with instant digital email dispatch to all registered readers.',
        type: 'keynote',
      },
      {
        time: '05 October 2026',
        title: 'Physical Print Copies Courier Dispatch',
        description: 'Hardbound print copies dispatched via Speed Post / Courier across 10+ states with tracking.',
        type: 'felicitation',
      },
    ],
    passes: [
      {
        id: 'digital-free-pass',
        name: 'Digital E-Magazine Edition',
        price: 0,
        gstPercentage: 0,
        recommended: true,
        badge: '100% FREE DIGITAL ACCESS',
        shortDesc: 'Instant high-resolution digital magazine delivered directly to your registered email address.',
        seatsLeft: 5000,
        benefits: [
          '100% Free Access — No Payment Required',
          'Instant High-Resolution Digital E-Magazine PDF sent via Email',
          'Full 50% MSME Leader Case Studies & Feature Articles',
          'Interactive Digital Reader with Zoom, Search & Shareable Articles',
          'Lifetime Complimentary Subscription to Future Digital Issues',
        ],
      },
      {
        id: 'physical-print-pass',
        name: 'Physical Print Edition (Hardbound Copy)',
        price: 500,
        gstPercentage: 18,
        badge: 'COLLECTOR’S HARD COPY',
        shortDesc: 'Collector’s hardbound glossy print edition delivered to your doorstep across India.',
        seatsLeft: 500,
        benefits: [
          'Premium Hardbound Glossy Print Magazine',
          '5,000+ Limited National Print Run',
          'Doorstep Courier Delivery across 10+ States (+ GST & Delivery Charges)',
          'Complimentary High-Res Digital E-Magazine Access Included',
          'Official GST Tax Invoice Provided with Order',
        ],
      },
    ],
    targetAudience: [
      { title: 'Visionary MSME Founders', description: 'Entrepreneurs looking for inspirational case studies, peer insights, and national visibility.' },
      { title: 'Exporters & Importers', description: 'Trade professionals seeking cross-border market intelligence and international trade updates.' },
      { title: 'Industry Leaders & CXOs', description: 'Corporate directors, procurement heads, and chamber members across 10+ states.' },
      { title: 'Aspiring Entrepreneurs', description: 'Innovators seeking actionable guidance on government schemes, subsidies, and credit.' },
    ],
    speakers: [
      {
        name: 'Ashwini Bansode',
        designation: 'Chief Editor',
        organization: 'Namaste Entrepreneur Editorial Council / VUSF',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        expertise: 'Editorial Leadership, National Publications & MSME Features',
        topic: 'Spotlighting the Resilience, Innovation, and Growth of Indian MSMEs',
      },
    ],
    faqs: [
      {
        question: 'How do I receive my free digital copy?',
        answer: 'Simply click "Get Free Digital Copy" above and enter your name and email address. A complimentary high-resolution PDF copy of Namaste Entrepreneur 2026 Magazine will be sent directly to your email inbox.',
      },
      {
        question: 'How does physical print order and delivery work?',
        answer: 'Physical hardbound print copies are priced at ₹500 + 18% GST + delivery charges. Your order is safely dispatched via speed post / registered courier with tracking details sent to your phone and email.',
      },
      {
        question: 'How can our enterprise or founder get featured in the magazine?',
        answer: 'Over 50% of the publication is dedicated to Indian MSME leaders. For feature story submissions, interviews, and brand profiles, contact our editorial team directly at 7499492860 or email info@namastevishwa.com before 20 September 2026.',
      },
      {
        question: 'Who can I contact for bulk corporate orders or distribution queries?',
        answer: 'For bulk distribution, corporate copies, or state chamber partnerships, please call or WhatsApp 7499492860 or email info@namastevishwa.com.',
      },
    ],
    supportPhone: '+91-7499492860',
    supportWhatsapp: '+91-7499492860',
    supportEmail: 'info@namastevishwa.com',
  },
  {
    id: 'women-business-success-program',
    slug: 'women-business-success-program',
    title: 'Women Business Success Program (3-Day Executive Masterclass)',
    statusBadge: 'EXECUTIVE MASTERCLASS REGISTRATION OPEN',
    eventType: 'EXECUTIVE MASTERCLASS & GLOBAL EXPORT BOOTCAMP',
    tagline: 'An intensive 3-day executive coaching program focusing on international export readiness, supply chain mastery, financial governance, and institutional scaling.',
    date: 'January 10–12, 2027',
    day: 'Sunday to Tuesday (3-Day Immersive Residential/Day Bootcamp)',
    time: '10:00 AM – 05:30 PM IST',
    venue: 'Mumbai / Navi Mumbai Executive Learning Center & Convention Suites',
    location: 'Mumbai & Navi Mumbai Executive Center, Maharashtra, India',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    country: 'India',
    organizer: 'Vishwa Udyam Sahayta Foundation',
    brand: 'Namaste Stree Shakti Executive Wing',
    image: '/banner/women-enter-sucess-prog-3day.jpeg',
    filterCategory: 'women',
    description: 'An intensive 3-day executive coaching program focusing on international export readiness, supply chain mastery, financial sustainability, and institutional partnerships for women leaders.',
    longDescription: [
      'The Women Business Success Program is an advanced 3-day masterclass curated specifically for ambitious women entrepreneurs who have established their core enterprise and are now preparing for multi-crore scaling, nationwide distribution, and international export corridors.',
      'Delivered through case studies, real-world simulations, financial restructuring labs, and bilateral trade desk interactions, this program transforms women business owners into globally competitive corporate leaders.'
    ],
    stats: [
      { value: '3 Days', label: 'Executive Immersion', subtext: 'Financial, operational & export scaling' },
      { value: '18+', label: 'Advanced Modules', subtext: 'Taxation, governance & global trade' },
      { value: '100%', label: 'Executive Mentorship', subtext: '1-on-1 strategic growth clinics' },
      { value: '30 Slots', label: 'Exclusive Cohort Size', subtext: 'High-touch personalized coaching' },
    ],
    highlights: [
      'Export Documentation, Customs HS Codes, DGFT Licensing & IEC Setup',
      'Advanced Working Capital & Balance Sheet Restructuring for Bank Audits',
      'Corporate Governance, Shareholder Agreements & Equity Dilution Advisory',
      'Global Sourcing, Freight Logistics & Foreign Buyer Risk Management',
    ],
    galleryImages: [
      '/timeline_photos/pragati/IMG-20250614-WA0098.jpeg',
      '/timeline_photos/mahila support/IMG-20260206-WA0102.jpeg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0073.jpeg',
      '/timeline_photos/start namste india/IMG-20260206-WA0109.jpeg',
    ],
    benefits: [
      {
        number: '01',
        title: 'Global Export Readiness',
        description: 'Understand the complete export cycle: IEC licensing, RCMC registration with EPCs, Letter of Credit (LC) mechanisms, and marine insurance.',
        category: 'Cross-Border Trade',
      },
      {
        number: '02',
        title: 'Balance Sheet Financial Health',
        description: 'Restructure your financial statements, gross margin calculations, and debt servicing ratios to qualify for larger commercial credit lines.',
        category: 'Financial Governance',
      },
      {
        number: '03',
        title: 'Supply Chain & Inventory Mastery',
        description: 'Eliminate dead stock, negotiate robust vendor payment cycles, and implement lean warehouse management systems.',
        category: 'Operations',
      },
      {
        number: '04',
        title: 'Executive Team Delegation',
        description: 'Transition from micro-managing day-to-day operations to building accountable middle management teams and SOP frameworks.',
        category: 'Organizational Scaling',
      },
      {
        number: '05',
        title: 'B2B Contract Drafting & Legal Shields',
        description: 'Protect your enterprise with rock-solid NDAs, vendor master agreements, distributorship contracts, and dispute resolution clauses.',
        category: 'Legal Governance',
      },
      {
        number: '06',
        title: 'Direct Trade Delegation Priority',
        description: 'Graduates receive priority reservation and special subsidies for upcoming international trade delegations to Dubai, Nepal, and China.',
        category: 'Global Corridors',
      },
    ],
    agendaTitle: '3 DAYS TO GLOBAL BUSINESS LEADERSHIP',
    agendaSubtitle: 'A structured executive curriculum blending financial rigor with strategic market expansion.',
    agenda: [
      {
        time: 'Day 1 (10:00 AM – 05:30 PM)',
        title: 'Financial Architecture, Margins & Banking Power',
        description: 'Analyzing P&L health, cash conversion cycles, working capital enhancement, and CGTMSE/Stand-Up India optimizations.',
        type: 'workshop',
      },
      {
        time: 'Day 2 (10:00 AM – 05:30 PM)',
        title: 'Export Masterclass: From Local Brand to Global Exporter',
        description: 'In-depth breakdown of export procedures, international quality packaging, freight liners, and buyer fraud protection.',
        type: 'workshop',
      },
      {
        time: 'Day 3 (10:00 AM – 05:30 PM)',
        title: 'Executive Leadership, Board Strategy & Graduation Gala',
        description: 'Building high-performance teams, personal brand authority, and presentation of Executive Masterclass Diplomas.',
        type: 'felicitation',
      },
    ],
    passes: [
      {
        id: 'masterclass-pass',
        name: '3-Day Masterclass Pass',
        price: 4999,
        gstPercentage: 18,
        shortDesc: 'Full 3-day access to all modules, masterclasses, executive toolkits, and daily gourmet lunches.',
        seatsLeft: 18,
        benefits: [
          '3 Full Days of Interactive Executive Masterclasses',
          'Complete 200+ Page Export & Finance Executive Dossier',
          'Daily 3-Course Gourmet Networking Lunch & High Tea',
          'Official Executive Masterclass Diploma & Certificate',
          'Lifetime Access to the Stree Shakti Executive Alumni Network',
        ],
      },
      {
        id: 'vip-executive-mentorship',
        name: 'VIP Mentorship & Export Pass',
        price: 8999,
        gstPercentage: 18,
        recommended: true,
        badge: 'MOST POPULAR',
        shortDesc: 'Includes 1-on-1 business audit, custom export roadmap, and private consultation with President Pragati Tayde.',
        seatsLeft: 8,
        benefits: [
          'All 3-Day Masterclass Pass Privileges',
          'Comprehensive 1-on-1 Business Model & Export Audit',
          'Private 60-Min Consultation with Pragati Tayde & Trade Directors',
          'Free Review of 2 Commercial Vendor/Export Contracts by Legal Advisors',
          'Priority Slot on the 2027 International Trade Delegation Waitlist',
        ],
      },
      {
        id: 'corporate-delegation-duo',
        name: 'Corporate Executive Duo (2 Passes)',
        price: 14999,
        gstPercentage: 18,
        shortDesc: 'For founder + COO/partner seeking unified strategic alignment for their growing enterprise.',
        seatsLeft: 4,
        benefits: [
          'All VIP Mentorship Privileges for 2 Company Executives',
          'Custom 12-Month Enterprise Scaling Blueprint',
          'Feature Article in Namaste India Entrepreneur Magazine',
          '1-Year Free Corporate Membership with VUSF Chamber',
        ],
      },
    ],
    targetAudience: [
      { title: 'Scaling Women Founders', description: 'Enterprises generating ₹20 lakh to ₹10 crore preparing for their next growth leap.' },
      { title: 'Aspiring Exporters', description: 'Manufacturing high-potential products ready for the Middle East, Europe, or Southeast Asia.' },
      { title: 'Directors & Partners', description: 'Co-directors looking to upgrade governance, compliance, and institutional systems.' },
      { title: 'Family Business Successors', description: 'Next-gen women leaders modernizing and digitizing established family businesses.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Executive Leadership, Strategic MSME Scaling & Export Strategy',
        topic: 'The Multi-Crore Playbook: Transitioning from Founder to Corporate Leader',
      },
      {
        name: 'Kamlesh Kumar',
        designation: 'Managing Director',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/kamlesh.jpeg',
        expertise: 'Cross-Border Supply Chain & Trade Finance',
        topic: 'Navigating Trade Corridors, LC Negotiations & Cross-Border Logistics',
      },
    ],
    faqs: [
      {
        question: 'Is accommodation included in the registration fee?',
        answer: 'The standard registration covers the daytime masterclass, course materials, and gourmet meals. Outstation delegates desiring 5-star hotel room packages can select the accommodation add-on during checkout.',
      },
      {
        question: 'Will I get practical templates for export contracts and finance?',
        answer: 'Yes! All delegates receive an extensive digital vault of customizable NDAs, Export Sales Contracts, Letter of Credit checklists, and CMA financial models.',
      },
      {
        question: 'What is the batch size for this cohort?',
        answer: 'To ensure intense, personalized mentoring and meaningful peer-to-peer interactions, the cohort is strictly capped at 30 executive participants.',
      },
    ],
    supportPhone: '+91-8169080686',
    supportWhatsapp: '+91-8169080686',
    supportEmail: 'info@namastevishwaudyam.org',
  },
  {
    id: 'msme-excellence-awards',
    slug: 'msme-excellence-awards',
    title: 'MSME Excellence Awards & National Felicitations 2026',
    statusBadge: 'AWARD NOMINATIONS OPEN',
    eventType: 'NATIONAL RECOGNITION & GALA AWARDS',
    tagline: 'Celebrating trailblazing MSMEs, manufacturing leaders, and startup visionaries driving India’s industrial and economic growth.',
    date: 'November 22, 2026',
    day: 'Sunday (Grand Gala Evening)',
    time: '04:00 PM – 10:00 PM IST (with Networking Dinner)',
    venue: 'Grand Ballroom, The Orchid / CIDCO Convention Centre',
    location: 'Grand Ballroom, Navi Mumbai, Maharashtra, India',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    country: 'India',
    organizer: 'Vishwa Udyam Sahayta Foundation & Namaste India Group',
    brand: 'MSME Excellence Awards 2026',
    image: '/banner/msme-award.jpeg',
    filterCategory: 'awards',
    description: 'Celebrating and felicitating trailblazing MSMEs, visionary entrepreneurs, manufacturing leaders, and dynamic startup innovators who drive India’s industrial and economic growth.',
    longDescription: [
      'The MSME Excellence Award Show is India’s premier celebration of micro, small, and medium enterprise innovation, manufacturing tenacity, and visionary leadership.',
      'Organized by Vishwa Udyam Sahayta Foundation (recipient of the Maharashtra State Achievement Award presented by Hon. Minister of Industries Shri Uday Samant), this glittering gala evening brings together 500+ industrial captains, ministers, banking dignitaries, trade commissioners, and national media.',
      'Awards will be conferred across 50+ specialized sector categories—including Engineering, Agro-Processing, Green Energy, Women Entrepreneurship, Tech Innovation, and Global Export Leadership.'
    ],
    stats: [
      { value: '50+', label: 'Sector Award Categories', subtext: 'Manufacturing, exports, tech & services' },
      { value: '500+', label: 'Industrial Captains & VIPs', subtext: 'Attending the Grand Gala Evening' },
      { value: '100%', label: 'Impartial Jury Evaluation', subtext: 'Independent panel of industry stalwarts' },
      { value: '25+', label: 'National Media Outlets', subtext: 'Covering the felicitation ceremony' },
    ],
    highlights: [
      'Prestigious Brass & Crystal Trophy Conferred on Stage by High-Ranking Dignitaries',
      'Exclusive Red-Carpet Media Interviews & Official Photo Opportunity',
      'Extensive Coverage in Namaste India Entrepreneur Magazine & Digital Portals',
      '5-Star Grand Banquet Networking Dinner with Industrialists & Bankers',
    ],
    galleryImages: [
      '/timeline_photos/uday sawant award/IMG-20250614-WA0074.jpeg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0052.jpeg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0065.jpeg',
      '/timeline_photos/start namste india/IMG-20260206-WA0035.jpeg',
      '/timeline_photos/pragati/IMG-20250614-WA0081.jpeg',
    ],
    benefits: [
      {
        number: '01',
        title: 'Unmatched National Recognition',
        description: 'Elevate your brand reputation with an authentic, highly coveted national award conferred by respected industry dignitaries.',
        category: 'Brand Prestige',
      },
      {
        number: '02',
        title: 'Client & Tender Credibility',
        description: 'Winning a prestigious award significantly enhances your conversion rate when bidding on government tenders and enterprise corporate vendor empanelments.',
        category: 'Commercial Edge',
      },
      {
        number: '03',
        title: 'High-Value Gala Networking',
        description: 'Connect one-on-one with high-net-worth investors, chamber presidents, bank chairmen, and prominent industrialists over dinner.',
        category: 'Elite Networking',
      },
      {
        number: '04',
        title: 'Full Media Press Kit & Digital Assets',
        description: 'Receive professionally edited 4K stage video clips, red-carpet photo shoots, and a formal press release ready for your PR campaigns.',
        category: 'Media & PR',
      },
      {
        number: '05',
        title: 'Boost Employee Morale & Pride',
        description: 'Celebrate the collective triumph of your team, suppliers, and partners, creating immense pride and long-term organizational loyalty.',
        category: 'Internal Culture',
      },
      {
        number: '06',
        title: 'Permanent Hall of Fame Listing',
        description: 'Enjoy permanent induction into the VUSF National MSME Hall of Fame with a dedicated winner profile page on www.namasteindiagroup.org.',
        category: 'Perpetual Showcase',
      },
    ],
    agendaTitle: 'AN EVENING OF GLAMOUR & TRIUMPH',
    agendaSubtitle: 'A memorable black-tie / formal gala celebrating India’s true wealth creators.',
    agenda: [
      {
        time: '04:00 PM – 05:00 PM',
        title: 'Red Carpet Arrivals & Media Wall Interviews',
        description: 'Guest reception, red-carpet photography, and press interviews in the grand foyer.',
        type: 'networking',
      },
      {
        time: '05:00 PM – 06:00 PM',
        title: 'Inaugural Lamp Lighting & State Industrial Address',
        description: 'Opening remarks by President Pragati Tayde and keynote addresses by visiting state dignitaries.',
        type: 'keynote',
      },
      {
        time: '06:00 PM – 08:30 PM',
        title: 'National MSME Excellence Awards Conferment',
        description: 'Stage felicitations and presentation of trophies to winners across Manufacturing, Services, and Export categories.',
        type: 'felicitation',
      },
      {
        time: '08:30 PM – 10:00 PM',
        title: 'Grand Banquet Dinner & Celebration',
        description: 'Lavish networking dinner, live classical fusion music, and executive business introductions.',
        type: 'networking',
      },
    ],
    passes: [
      {
        id: 'gala-delegate',
        name: 'Gala Delegate Pass',
        price: 2999,
        gstPercentage: 18,
        shortDesc: 'Attend the gala evening, awards ceremony, and grand banquet networking dinner.',
        seatsLeft: 50,
        benefits: [
          'Full Entry to Awards Ceremony & Keynote Addresses',
          'Red-Carpet Photo Opportunity at Official Media Wall',
          'Gourmet 5-Star Gala Dinner & Refreshments',
          'Official MSME Excellence Commemorative Yearbook',
          'Access to Networking Lounge with 500+ Industry Captains',
        ],
      },
      {
        id: 'nominee-vip-pass',
        name: 'Award Nominee & VIP Table Pass',
        price: 11999,
        gstPercentage: 18,
        recommended: true,
        badge: 'MOST POPULAR FOR NOMINEES',
        shortDesc: 'Includes official award nomination evaluation, stage trophy presentation if selected, and VIP seating for 2.',
        seatsLeft: 20,
        benefits: [
          'Official Nomination Submission & Jury Evaluation',
          'On-Stage Trophy & Framed Citation Conferred by Dignitaries (if selected)',
          '2 Premium VIP Table Seats with Gourmet Dinner Service',
          'Dedicated Red-Carpet Video Interview & Press Kit',
          'Full-Page Winner Profile in National MSME Yearbook',
        ],
      },
      {
        id: 'corporate-sponsor-table',
        name: 'Corporate Table (5 VIP Guests)',
        price: 34999,
        gstPercentage: 18,
        shortDesc: 'Full dedicated 5-seater branded table for your leadership team or clients with prominent stage recognition.',
        seatsLeft: 6,
        benefits: [
          'Dedicated Reserved 5-Seater VIP Table in Front Row',
          'Brand Logo Displayed on Stage Screen & Red-Carpet Backdrop',
          '2 Award Nominations in Desired Categories',
          'Stage Felicitation with Crystal Mementos for Company Leadership',
          'Special Double-Spread Feature in Namaste India Magazine',
        ],
      },
    ],
    targetAudience: [
      { title: 'MSME Manufacturers & Industrialists', description: 'Engineering, plastics, packaging, automotive, and precision equipment companies.' },
      { title: 'Exporters & Importers', description: 'Trailblazing global traders representing Indian manufacturing excellence overseas.' },
      { title: 'Fast-Growing Startups & Innovators', description: 'Tech, D2C, fintech, and agro-tech founders scaling disruptive business models.' },
      { title: 'Women Business Pioneers', description: 'Outstanding women entrepreneurs driving innovation and commercial triumph.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Industrial Felicitations, MSME Growth & State Alliances',
        topic: 'Saluting the Unsung Heroes: Indian MSMEs as the Backbone of Viksit Bharat 2047',
      },
      {
        name: 'Kamlesh Kumar',
        designation: 'Managing Director',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/kamlesh.jpeg',
        expertise: 'Commercial Strategy & Public Alliances',
        topic: 'Leveraging Recognition into Unprecedented Market Expansion',
      },
    ],
    faqs: [
      {
        question: 'How are the award winners selected?',
        answer: 'Nominations are evaluated by an independent jury of chartered accountants, former industry directors, and academic professors based on revenue growth, innovation, sustainability, and employment generation.',
      },
      {
        question: 'What happens if our nomination is not selected for an award?',
        answer: 'All evaluated nominees receive a framed National Certificate of Industrial Merit, complete jury feedback analysis, and full access to the Gala Evening and banquet dinner.',
      },
      {
        question: 'Can family members or business partners attend with me?',
        answer: 'Yes! The Nominee VIP Pass includes entry for 2 guests, and the Corporate Table includes entry for 5 delegates. Additional individual passes can be added anytime.',
      },
    ],
    supportPhone: '+91-8169080686',
    supportWhatsapp: '+91-8169080686',
    supportEmail: 'info@namastevishwaudyam.org',
  },
  {
    id: 'navi-mumbai-export-summit',
    slug: 'navi-mumbai-export-summit',
    title: 'Navi Mumbai Export Summit 2026',
    statusBadge: 'DELEGATE PASSES NOW SELLING',
    eventType: 'REGIONAL EXPORT CONCLAVE & BUYER-SELLER MEET',
    tagline: 'Connecting MMR and Konkan manufacturers, agro-producers, and industrial exporters with direct international buyers, shipping liners, and customs specialists.',
    date: 'November 21, 2026',
    day: 'Saturday (Full-Day Conclave)',
    time: '09:30 AM – 06:00 PM IST',
    venue: 'CIDCO Exhibition & Convention Centre, Sector 30A, Vashi',
    location: 'CIDCO Exhibition Centre, Vashi, Navi Mumbai, Maharashtra, India',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    country: 'India',
    organizer: 'Vishwa Udyam Sahayta Foundation',
    brand: 'VUSF Regional Commerce Directorate',
    image: '/banner/navi-mumbai-export-summit.jpeg',
    filterCategory: 'summits',
    description: 'Connecting MMR and Konkan manufacturers, agro-producers, and industrial exporters with direct international buyers, shipping liners, customs clearance specialists, and trade facilitation councils.',
    longDescription: [
      'The Navi Mumbai Export Summit 2026 is the premier cross-border commerce conclave for the Mumbai Metropolitan Region (MMR), Thane, Raigad, and Konkan industrial belts.',
      'With direct proximity to JNPA (Nhava Sheva Port) and the upcoming Navi Mumbai International Airport, this summit convenes over 300+ manufacturers, agro-commodity processors, chemical exporters, shipping lines, container freight stations (CFS), and overseas trade desks.',
      'Delegates will explore practical export expansion into ASEAN, GCC/Middle East, Africa, and Central Asia with dedicated matchmaking lounges and government incentive workshops.'
    ],
    stats: [
      { value: '300+', label: 'Exporting MSMEs & Founders', subtext: 'Engineering, pharma, agro & chemicals' },
      { value: '12+', label: 'International Trade Corridors', subtext: 'Direct buyer & country desk representation' },
      { value: '1 Full Day', label: 'B2B Matchmaking & Panels', subtext: 'Port logistics, finance & buyer meets' },
      { value: '100%', label: 'Actionable Export Linkages', subtext: 'India Post exports, DGFT & customs' },
    ],
    highlights: [
      'Postal Export Masterclass by India Post Export Promotion & Dak Ghar Niryat Kendra',
      'JNPT Port Logistics, Cold-Chain Warehousing & Freight Optimization Clinics',
      'Cross-Border B2B Buyer-Seller Matchmaking for Agro, Pharma & Engineering',
      'Export Credit Guarantee (ECGC) & Hedging Foreign Exchange Risk Masterclass',
    ],
    galleryImages: [
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0010.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0011.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG_4368 (1).jpeg',
      '/timeline_photos/navi mumbai business summit/IMG_4569.jpeg',
      '/timeline_photos/mumbai export summit/IMG-20260206-WA0037.jpeg',
    ],
    youtubeId: 'hSLZkM2AzJY',
    benefits: [
      {
        number: '01',
        title: 'Direct International Buyer Connect',
        description: 'Meet verified overseas buyers and bilateral trade representatives looking to source Indian engineering spares, spices, garments, and chemicals.',
        category: 'Buyer Sourcing',
      },
      {
        number: '02',
        title: 'Port Clearance & JNPA Logistics',
        description: 'Learn how to optimize container dwell times, reduce demurrage fees, and partner with top-tier CFS operators at Nhava Sheva.',
        category: 'Port Logistics',
      },
      {
        number: '03',
        title: 'India Post Dak Ghar Niryat Kendra',
        description: 'Discover how small e-commerce and artisanal exporters can ship commercial parcels globally via India Post with automated customs clearance.',
        category: 'Postal Exports',
      },
      {
        number: '04',
        title: 'Export Subsidies & RoDTEP Benefits',
        description: 'Maximize your Duty Drawback, RoDTEP, and Interest Equalization Scheme claims to add 3% to 6% directly to your bottom line.',
        category: 'Financial Incentives',
      },
      {
        number: '05',
        title: 'Forex Hedging & Payment Security',
        description: 'Protect your overseas receivables from currency fluctuations and buyer defaults using structured ECGC cover and Escrow solutions.',
        category: 'Risk Management',
      },
      {
        number: '06',
        title: 'B2B Exhibition & Product Showcase',
        description: 'Display your export samples to hundreds of visiting trade delegates, merchant exporters, and commercial attachés.',
        category: 'Product Promotion',
      },
    ],
    agendaTitle: 'A DAY BUILT FOR GLOBAL EXPORT EXPANSION',
    agendaSubtitle: 'High-impact keynote addresses, panel discussions, and structured buyer-seller roundtables.',
    agenda: [
      {
        time: '09:30 AM – 10:30 AM',
        title: 'Registration, B2B Exhibition Opening & Breakfast',
        description: 'Delegate badge collection, visiting exhibition stalls, and morning networking reception.',
        type: 'networking',
      },
      {
        time: '10:30 AM – 11:45 AM',
        title: 'Inaugural Session: Unlocking MMR’s ₹10,000 Cr Export Potential',
        description: 'Keynotes by President Pragati Tayde, senior DGFT officers, and Port Authority directors.',
        type: 'keynote',
      },
      {
        time: '11:45 AM – 01:15 PM',
        title: 'Masterclass: Fast-Tracking JNPA Port Logistics & Customs Clearance',
        description: 'Interactive session with customs clearance specialists and shipping liners on freight savings.',
        type: 'workshop',
      },
      {
        time: '01:15 PM – 02:30 PM',
        title: 'Networking Lunch & B2B Buyer-Seller Matchmaking',
        description: 'Pre-scheduled one-on-one meetings between MSME producers and overseas buyers.',
        type: 'networking',
      },
      {
        time: '02:30 PM – 04:00 PM',
        title: 'Financing Exports: Pre-Shipment Credit, ECGC & Currency Hedging',
        description: 'Panel of EXIM bankers and financial risk experts providing actionable liquidity advice.',
        type: 'workshop',
      },
      {
        time: '04:00 PM – 05:30 PM',
        title: 'Felicitation of Leading MMR Exporters & Concluding Address',
        description: 'Honoring stellar regional exporters and distribution of Summit Participation Dossiers.',
        type: 'felicitation',
      },
    ],
    passes: [
      {
        id: 'trade-delegate',
        name: 'Trade Delegate Pass',
        price: 2499,
        gstPercentage: 18,
        shortDesc: 'Full-day access to all technical sessions, export masterclasses, and networking lunch.',
        seatsLeft: 45,
        benefits: [
          'Full-Day Access to All Export Keynotes & Panel Sessions',
          'Official 2026 MMR Exporters Directory & Resource Kit',
          'Lavish 3-Course Networking Luncheon & High Tea',
          'Access to General B2B Networking Lounge',
          'Certificate of Summit Participation',
        ],
      },
      {
        id: 'b2b-buyer-matchmaking',
        name: 'B2B Matchmaking VIP Pass',
        price: 5999,
        gstPercentage: 18,
        recommended: true,
        badge: 'MOST POPULAR',
        shortDesc: 'Includes pre-arranged one-on-one buyer meetings and priority seating.',
        seatsLeft: 18,
        benefits: [
          'All Trade Delegate Pass Privileges',
          '3 Pre-Scheduled One-on-One Meetings with International Buyers',
          'Full Inclusion in the Summit Buyer-Seller Dossier',
          'VIP Front-Row Seating in the Main Plenary Hall',
          '3-Month Complimentary Access to VUSF Export Advisory Desk',
        ],
      },
      {
        id: 'exhibition-kiosk',
        name: 'Exhibition Display Kiosk Pass',
        price: 15000,
        gstPercentage: 18,
        shortDesc: 'Includes a dedicated 2m x 2m branded exhibition table/kiosk to display export samples to 300+ attendees.',
        seatsLeft: 8,
        benefits: [
          'Branded 2m x 2m Display Kiosk in the Main Exhibition Foyer',
          '2 Full VIP Delegate Passes with Lunch Included',
          'Company Logo on Summit Screen & Program Booklet',
          'Opportunity to Distribute Product Catalogs to All Delegates',
          'Special Mention during the Valedictory Session',
        ],
      },
    ],
    targetAudience: [
      { title: 'Manufacturers & Industrialists', description: 'Engineering, auto ancillaries, electricals, packaging, and plastics.' },
      { title: 'Agro & Food Commodity Processors', description: 'Grains, spices, processed foods, dry fruits, and organic consumables.' },
      { title: 'Chemical & Pharma Exporters', description: 'Specialty chemicals, API intermediaries, bulk formulations, and cosmetics.' },
      { title: 'Merchant Exporters & Freight Forwarders', description: 'Seeking new supplier networks and direct shipper cargo bookings.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Export Promotion, Bilateral MoUs & MSME Advocacy',
        topic: 'Leveraging Navi Mumbai as the Strategic Gateway for India’s Export Boom',
      },
      {
        name: 'Kamlesh Kumar',
        designation: 'Managing Director',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/kamlesh.jpeg',
        expertise: 'Port Logistics & International Supply Chains',
        topic: 'Cutting Transit Times and Squeezing Freight Costs at Nhava Sheva',
      },
    ],
    faqs: [
      {
        question: 'Where exactly is the venue located in Navi Mumbai?',
        answer: 'The summit is held at the world-class CIDCO Exhibition & Convention Centre in Sector 30A, Vashi, Navi Mumbai—just 2 minutes from Vashi Railway Station with ample parking.',
      },
      {
        question: 'Can I bring product samples to show to buyers?',
        answer: 'Yes! All delegates can bring compact physical samples or brochures. For larger displays, booking an Exhibition Display Kiosk Pass is highly recommended.',
      },
      {
        question: 'Will there be guidance on starting exports from scratch?',
        answer: 'Yes, specialized morning clinics guide new exporters on IEC registration, RCMC certification, selecting target countries, and finding verified overseas buyers.',
      },
    ],
    supportPhone: '+91-8169080686',
    supportWhatsapp: '+91-8169080686',
    supportEmail: 'info@namastevishwaudyam.org',
  },
  {
    id: 'pune-export-summit',
    slug: 'pune-export-summit',
    title: 'Pune Export Summit 2026 (Western Trade Corridor)',
    statusBadge: 'EARLY-BIRD REGISTRATION OPEN',
    eventType: 'ENGINEERING & AUTO-ANCILLARY EXPORT CONCLAVE',
    tagline: 'Unlocking overseas trade corridors for Pune’s engineering, automotive ancillary, electronics, and precision manufacturing clusters.',
    date: 'November 28, 2026',
    day: 'Saturday',
    time: '09:30 AM – 05:30 PM IST',
    venue: 'Auto Cluster Exhibition & Convention Center, Chinchwad',
    location: 'Auto Cluster Exhibition Center, Pune, Maharashtra, India',
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India',
    organizer: 'Vishwa Udyam Sahayta Foundation',
    brand: 'VUSF Western Trade Bureau',
    image: '/banner/pune.jpeg',
    filterCategory: 'summits',
    description: 'Unlocking overseas trade corridors for Pune’s engineering, automotive ancillary, electronics, and agro-processing clusters with cross-border trade facilitation and buyer linkages.',
    longDescription: [
      'Pune is India’s premier manufacturing and engineering powerhouse. The Pune Export Summit 2026 brings together over 300+ precision component manufacturers, auto ancillary suppliers, robotics developers, and food processors.',
      'Organized at the prestigious Auto Cluster Exhibition Center in Chinchwad, this full-day conclave focuses on expanding tier-2 and tier-3 suppliers into direct global export markets across Europe, North America, Middle East, and ASEAN.'
    ],
    stats: [
      { value: '350+', label: 'Manufacturing & Tech MSMEs', subtext: 'Automotive, precision & electronics' },
      { value: '15+', label: 'OEM & Tier-1 Buyer Desks', subtext: 'Procuring engineering components' },
      { value: '₹500 Cr+', label: 'Export Pipeline Impact', subtext: 'Targeted cross-border business' },
      { value: '1 Full Day', label: 'Intensive Technical Summit', subtext: 'Certifications, B2B meets & finance' },
    ],
    highlights: [
      'B2B Engineering Buyer-Seller Meet with Global Tier-1 Procurement Desks',
      'Masterclass on European & US Quality Certifications (ISO/TS 16949, CE Marking, RoHS)',
      'Defense & Aerospace Precision Sourcing Opportunities for Local MSMEs',
      'State & Central Capital Subsidies for Machinery Modernization (CLCSS & PSI)',
    ],
    galleryImages: [
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0092.jpeg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0104.jpeg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0074.jpeg',
      '/timeline_photos/serbia buyer meet/IMG-20260206-WA0110.jpeg',
    ],
    benefits: [
      {
        number: '01',
        title: 'Direct Global OEM Linkages',
        description: 'Connect with international purchasing offices (IPOs) looking to source castings, forgings, machined components, and electrical assemblies.',
        category: 'OEM Matchmaking',
      },
      {
        number: '02',
        title: 'Global Quality Certifications',
        description: 'Understand the exact compliance steps and subsidy rebates available for achieving international standards like CE, UL, and IATF.',
        category: 'Quality Standards',
      },
      {
        number: '03',
        title: 'Defense & Aerospace Sourcing',
        description: 'Learn how to register on the Indian Defense Procurement Portal (SRIJAN) and supply precision components to domestic and overseas defense primes.',
        category: 'Strategic Sectors',
      },
      {
        number: '04',
        title: 'Export Working Capital at Subsidized Rates',
        description: 'Explore pre-shipment export credit in foreign currency (PCFC) at ultra-competitive LIBOR/SOFR rates to cut your financing costs.',
        category: 'Trade Finance',
      },
      {
        number: '05',
        title: 'Corridor Access: Germany, USA & ASEAN',
        description: 'Gain specialized market intel on engineering component demand, tariff schedules, and free trade agreements (FTAs) in key export zones.',
        category: 'Market Intelligence',
      },
      {
        number: '06',
        title: 'Cluster Collaboration & Shared Consortia',
        description: 'Form joint export consortiums with fellow Pune manufacturers to bid on large international turnkey orders.',
        category: 'Consortium Bidding',
      },
    ],
    agendaTitle: 'A DAY BUILT FOR ENGINEERING EXCELLENCE',
    agendaSubtitle: 'Precision sessions engineered for manufacturing and industrial scale-up.',
    agenda: [
      {
        time: '09:30 AM – 10:30 AM',
        title: 'Registration, Engineering Expo & Morning Networking',
        description: 'Delegate badge collection and informal networking at the Auto Cluster Center.',
        type: 'networking',
      },
      {
        time: '10:30 AM – 11:45 AM',
        title: 'Inaugural Keynote: Scaling Pune MSMEs into Global Supply Chains',
        description: 'Strategic vision for Maharashtra’s engineering corridors by industry veterans and VUSF leaders.',
        type: 'keynote',
      },
      {
        time: '11:45 AM – 01:15 PM',
        title: 'Technical Session: Meeting Global Automotive & Aerospace Standards',
        description: 'Expert panel on zero-defect manufacturing, traceability, and global supplier audits.',
        type: 'workshop',
      },
      {
        time: '01:15 PM – 02:30 PM',
        title: 'Networking Lunch & B2B Matchmaking Roundtables',
        description: 'Curated 1-on-1 business meetings with overseas buyers and merchant exporters.',
        type: 'networking',
      },
      {
        time: '02:30 PM – 04:00 PM',
        title: 'Finance & Subsidies: EXIM Bank Credit Lines & Forex Management',
        description: 'Practical financial structuring to support rapid export order fulfillment.',
        type: 'workshop',
      },
      {
        time: '04:00 PM – 05:30 PM',
        title: 'Valedictory Felicitations & Western Corridor Roadmap',
        description: 'Honoring top Pune manufacturing innovators and networking tea.',
        type: 'felicitation',
      },
    ],
    passes: [
      {
        id: 'industry-delegate',
        name: 'Industry Delegate Pass',
        price: 2499,
        gstPercentage: 18,
        shortDesc: 'Full access to plenary sessions, technical workshops, and networking lunch.',
        seatsLeft: 40,
        benefits: [
          'Full-Day Entry to Plenary & Technical Breakouts',
          'Pune Engineering Exporters Directory & Handbook',
          'Lavish 3-Course Networking Lunch & Tea',
          'Access to Auto Cluster Exhibition Hall',
          'Certificate of Summit Participation',
        ],
      },
      {
        id: 'b2b-exporter-pass',
        name: 'B2B Exporter & Matchmaking Pass',
        price: 5499,
        gstPercentage: 18,
        recommended: true,
        badge: 'MOST POPULAR',
        shortDesc: 'Includes pre-arranged buyer meetings and VIP front-row access.',
        seatsLeft: 15,
        benefits: [
          'All Industry Delegate Pass Privileges',
          'Pre-Arranged One-on-One Meetings with Verified Buyer Desks',
          'Inclusion in the VIP Exporter Sourcing Dossier',
          'Priority VIP Seating in Technical Plenaries',
          '3-Month Dedicated Assistance from VUSF Engineering Cell',
        ],
      },
      {
        id: 'cluster-stall',
        name: 'Cluster Exhibition Stall (2m x 2m)',
        price: 15000,
        gstPercentage: 18,
        shortDesc: 'Dedicated physical exhibition stall to showcase precision engineering samples to 350+ industrialists.',
        seatsLeft: 6,
        benefits: [
          '2m x 2m Fitted Exhibition Booth at Auto Cluster Hall',
          '2 Full VIP Delegate Passes with Meals Included',
          'Branding in the Official Summit Guide & Screen Projections',
          'Direct Opportunity to Host Buyer Visits at Your Stall',
        ],
      },
    ],
    targetAudience: [
      { title: 'Auto Ancillary & Component Manufacturers', description: 'Castings, forgings, precision gears, sheet metal, and plastic injection components.' },
      { title: 'Automation & Robotics Developers', description: 'Industrial automation, PLC systems, sensors, and material handling systems.' },
      { title: 'Precision Tool & Die Makers', description: 'High-precision molds, jigs, fixtures, and CNC machined sub-assemblies.' },
      { title: 'Agro & Food Processors', description: 'Sugar, dairy, processed fruits, and agricultural equipment manufacturers in Western Maharashtra.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Western Corridor Industrial Policy & MSME Alliances',
        topic: 'Transforming Pune Manufacturing Clusters into Global Export Powerhouses',
      },
      {
        name: 'Kamlesh Kumar',
        designation: 'Managing Director',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/kamlesh.jpeg',
        expertise: 'Engineering Sourcing & B2B Matchmaking',
        topic: 'Winning and Executing High-Value International OEM Engineering Contracts',
      },
    ],
    faqs: [
      {
        question: 'Where is the Auto Cluster Exhibition Center located?',
        answer: 'The venue is conveniently located on Old Mumbai-Pune Highway in Chinchwad, Pune—easily accessible from Pimpri-Chinchwad, Talegaon, Chakan, and central Pune.',
      },
      {
        question: 'Will there be automotive and engineering buyers present?',
        answer: 'Yes! Sourcing executives, merchant exporters, and trade commissioners seeking tier-2 and tier-3 precision suppliers will be actively conducting B2B roundtables.',
      },
      {
        question: 'Can MSMEs apply for government stall subsidies?',
        answer: 'VUSF assists eligible registered MSMEs with documentation to claim state market development assistance (MDA) reimbursements where applicable.',
      },
    ],
    supportPhone: '+91-8169080686',
    supportWhatsapp: '+91-8169080686',
    supportEmail: 'info@namastevishwaudyam.org',
  },
  {
    id: 'nashik-export-summit',
    slug: 'nashik-export-summit',
    title: 'Nashik Export Summit 2026 (Agro & Industrial Corridor)',
    statusBadge: 'DELEGATE REGISTRATIONS OPEN',
    eventType: 'AGRO-HORTICULTURE & ENGINEERING CONCLAVE',
    tagline: 'Catalyzing export opportunities for Nashik’s grape, horticulture, agro-commodities, precision engineering, and defense manufacturing clusters.',
    date: 'December 12, 2026',
    day: 'Saturday',
    time: '09:30 AM – 05:30 PM IST',
    venue: 'Nashik Industrial & Agro Exhibition Centre, Ambad Industrial Area',
    location: 'Nashik Industrial & Agro Hub, Maharashtra, India',
    city: 'Nashik',
    state: 'Maharashtra',
    country: 'India',
    organizer: 'Vishwa Udyam Sahayta Foundation',
    brand: 'VUSF North Maharashtra Wing',
    image: '/banner/nashik.jpeg',
    filterCategory: 'summits',
    description: 'Catalyzing export opportunities for Nashik’s grape, horticulture, agro-commodities, precision engineering, and defense manufacturing clusters with global buyers and cold-chain logistics.',
    longDescription: [
      'Nashik is India’s agricultural export capital for fresh grapes, pomegranates, onions, and processed agro-commodities, as well as a rapidly rising engineering and defense hub (HAL Ozar corridor).',
      'The Nashik Export Summit 2026 convenes 250+ progressive farmers, FPOs (Farmer Producer Organizations), cold-chain operators, agro-exporters, and engineering MSMEs to unlock seamless air and sea export linkages.'
    ],
    stats: [
      { value: '250+', label: 'Agro & Industrial Delegates', subtext: 'Exporters, FPOs, processors & MSMEs' },
      { value: '10+', label: 'Cold-Chain & Logistics Desks', subtext: 'Connecting to JNPA & Mumbai Airport' },
      { value: '100%', label: 'APEDA & Phytosanitary Guidance', subtext: 'MRL standards & export testing' },
      { value: '1 Full Day', label: 'Action-Packed Conclave', subtext: 'B2B buyer meets & technical clinics' },
    ],
    highlights: [
      'APEDA Export Standards, GLOBALG.A.P. Certification & MRL Compliance Workshop',
      'Cold-Chain Infrastructure, Reefer Container Logistics & Air Cargo Connectivity',
      'Direct Buyer-Seller Linkages with European, Middle Eastern & Southeast Asian Importers',
      'Packaging Innovations for Fresh Perishables & Food Processing MSME Subsidies',
    ],
    galleryImages: [
      '/timeline_photos/1.buldhana export awarness program/IMG-20260206-WA0103.jpeg',
      '/timeline_photos/malkapur event/IMG-20260206-WA0108.jpeg',
      '/timeline_photos/serbia buyer meet/IMG-20260206-WA0110.jpeg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0092.jpeg',
    ],
    benefits: [
      {
        number: '01',
        title: 'Direct Overseas Food & Agro Buyers',
        description: 'Connect with international produce buyers from the UAE, Saudi Arabia, Netherlands, and UK looking to contract fresh grapes, onions, and processed foods.',
        category: 'Agro Buyer Linkage',
      },
      {
        number: '02',
        title: 'MRL & Phytosanitary Compliance',
        description: 'Learn how to manage Maximum Residue Limits (MRL) and secure accredited lab certifications to avoid container rejection at European ports.',
        category: 'Quality Standards',
      },
      {
        number: '03',
        title: 'Reefer Logistics & Air Cargo Solutions',
        description: 'Optimize your cold-chain logistics from farm-gate to Mumbai Air Cargo and JNPA port with specialized reefer operators.',
        category: 'Cold-Chain Logistics',
      },
      {
        number: '04',
        title: 'MoFPI & PM FME Agro Subsidies',
        description: 'Claim up to 35% capital subsidies for setting up sorting, grading, packhouse, and secondary food processing units.',
        category: 'Government Subsidies',
      },
      {
        number: '05',
        title: 'Engineering & Defense Spares Expansion',
        description: 'Explore industrial diversification into the Nashik Defense Innovation Corridor and supply HAL/aerospace components.',
        category: 'Industrial Scaling',
      },
      {
        number: '06',
        title: 'FPO Aggregation & Direct Exporting',
        description: 'Empower Farmer Producer Organizations to bypass commission agents and export directly to overseas supermarket chains.',
        category: 'FPO Empowerment',
      },
    ],
    agendaTitle: 'A DAY BUILT FOR AGRO & INDUSTRIAL EXPORT POWER',
    agendaSubtitle: 'Uniting North Maharashtra’s agricultural producers and engineering visionaries.',
    agenda: [
      {
        time: '09:30 AM – 10:30 AM',
        title: 'Registration & Agro-Tech Exhibition Foyer',
        description: 'Check-in, delegate kit distribution, and sampling exhibition reception.',
        type: 'networking',
      },
      {
        time: '10:30 AM – 11:45 AM',
        title: 'Inaugural Plenary: Nashik’s Rise as a Global Agro-Export Epicenter',
        description: 'Keynotes by agricultural export commissioners, APEDA representatives, and VUSF leaders.',
        type: 'keynote',
      },
      {
        time: '11:45 AM – 01:15 PM',
        title: 'Technical Clinic: Meeting Global Standards & Cold-Chain Mastery',
        description: 'Hands-on session on GlobalGAP, shelf-life extension, and air-freight corridors.',
        type: 'workshop',
      },
      {
        time: '01:15 PM – 02:30 PM',
        title: 'Networking Luncheon & B2B Buyer-Seller Matchmaking',
        description: 'Pre-scheduled roundtables between local producers, FPOs, and overseas produce buyers.',
        type: 'networking',
      },
      {
        time: '02:30 PM – 04:00 PM',
        title: 'Agro-Processing Subsidies & Defense Sourcing Opportunities',
        description: 'Unlocking PM FME schemes and engineering diversification in Ambad & Satpur clusters.',
        type: 'workshop',
      },
      {
        time: '04:00 PM – 05:30 PM',
        title: 'Valedictory Felicitations & Summit Wrap-Up',
        description: 'Honoring top regional agro-exporters and distribution of certificates.',
        type: 'felicitation',
      },
    ],
    passes: [
      {
        id: 'agro-delegate',
        name: 'Agro & MSME Delegate Pass',
        price: 1999,
        gstPercentage: 18,
        shortDesc: 'Full 1-day pass for farmers, FPOs, agro-processors, and local manufacturing MSMEs.',
        seatsLeft: 35,
        benefits: [
          'Full Entry to All Agro-Export Keynotes & Breakouts',
          'Official Nashik Agro & MSME Export Handbook',
          'Gourmet Networking Lunch & High Tea',
          'Access to General Matchmaking Foyer',
          'Certificate of Summit Participation',
        ],
      },
      {
        id: 'exporter-matchmaking',
        name: 'Exporter-Buyer Matchmaking Pass',
        price: 4999,
        gstPercentage: 18,
        recommended: true,
        badge: 'MOST RECOMMENDED',
        shortDesc: 'Includes curated meetings with visiting produce importers and merchant exporters.',
        seatsLeft: 16,
        benefits: [
          'All Agro & MSME Delegate Pass Privileges',
          'Pre-Arranged One-on-One Meetings with International Produce Buyers',
          'Inclusion in the North Maharashtra Exporter Dossier',
          'Priority VIP Front-Row Seating',
          '3-Month Free Advisory on APEDA & Export Documentation',
        ],
      },
      {
        id: 'agro-tech-stall',
        name: 'Agro-Tech & Industrial Display Stall',
        price: 12500,
        gstPercentage: 18,
        shortDesc: 'Dedicated exhibition booth to display packaging, agro-machinery, or produce samples.',
        seatsLeft: 6,
        benefits: [
          '2m x 2m Branded Exhibition Booth in the Main Conclave Foyer',
          '2 Full VIP Delegate Passes with Meals Included',
          'Company Logo Featured on Summit Backdrops',
          'Opportunity to Distribute Product Catalogs to 250+ Delegates',
        ],
      },
    ],
    targetAudience: [
      { title: 'Grape, Onion & Horticulture Exporters', description: 'Scaling shipments of fresh fruits, vegetables, and flowers to global markets.' },
      { title: 'Farmer Producer Organizations (FPOs)', description: 'Seeking direct overseas buyer contracts and eliminating supply-chain middlemen.' },
      { title: 'Food & Beverage Processors', description: 'Wineries, fruit pulp processors, dehydrated vegetables, and spice mills.' },
      { title: 'Engineering & Defense MSMEs', description: 'Machining, fabrication, electronics, and automotive suppliers in Ambad/Satpur.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Agro-Export Policy, FPO Mentoring & Regional Corridors',
        topic: 'Taking North Maharashtra’s Agro-Wealth from Farm-Gate to Global Supermarkets',
      },
      {
        name: 'Kamlesh Kumar',
        designation: 'Managing Director',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/kamlesh.jpeg',
        expertise: 'Cold-Chain Logistics & International Trade Negotiation',
        topic: 'De-Risking Perishable Logistics and Securing Reliable Payment Terms',
      },
    ],
    faqs: [
      {
        question: 'Where is the Ambad venue located?',
        answer: 'The event is hosted at the Nashik Industrial & Agro Exhibition Centre in Ambad Industrial Area, easily accessible from the Mumbai-Agra National Highway.',
      },
      {
        question: 'Can FPO directors attend together on a group pass?',
        answer: 'Yes! We offer special group packages for FPO board members. Contact our help desk for customized group registrations.',
      },
      {
        question: 'Will there be guidance on overcoming pesticide residue rejections?',
        answer: 'Yes, specialized sessions conducted by agricultural scientists and APEDA consultants cover compliant spray schedules, lab testing, and GlobalGAP protocols.',
      },
    ],
    supportPhone: '+91-8169080686',
    supportWhatsapp: '+91-8169080686',
    supportEmail: 'info@namastevishwaudyam.org',
  },
  {
    id: 'sambhaji-nagar-export-summit',
    slug: 'sambhaji-nagar-export-summit',
    title: 'Chhatrapati Sambhaji Nagar Export Summit 2027',
    statusBadge: 'REGISTRATION OPEN',
    eventType: 'MARATHWADA INDUSTRIAL & PHARMA EXPORT CONCLAVE',
    tagline: 'Accelerating export potential for Marathwada’s automotive, pharmaceutical, plastics, and heavy engineering MSMEs with international trade delegations.',
    date: 'January 17, 2027',
    day: 'Sunday',
    time: '09:30 AM – 05:30 PM IST',
    venue: 'Marathwada Auto Cluster / Industrial Convention Hall, Waluj Industrial Area',
    location: 'Chhatrapati Sambhaji Nagar, Maharashtra, India',
    city: 'Chhatrapati Sambhaji Nagar (Aurangabad)',
    state: 'Maharashtra',
    country: 'India',
    organizer: 'Vishwa Udyam Sahayta Foundation',
    brand: 'VUSF Marathwada Trade Desk',
    image: '/banner/chhatrapati.jpeg',
    filterCategory: 'summits',
    description: 'Accelerating export potential for Marathwada’s automotive, pharmaceutical, plastic, and heavy engineering MSMEs with international trade delegations and port logistics access.',
    longDescription: [
      'Chhatrapati Sambhaji Nagar (Aurangabad) is the industrial capital of Marathwada, renowned for heavy engineering, auto manufacturing, pharmaceuticals, breweries, and specialty plastics.',
      'The Chhatrapati Sambhaji Nagar Export Summit 2027 brings together over 250+ enterprise leaders from Waluj, Shendra, Chikalthana, and the upcoming AURIC (Aurangabad Industrial City / DMIC corridor) to unlock direct export markets and container dry-port logistics.'
    ],
    stats: [
      { value: '250+', label: 'Marathwada Enterprise Leaders', subtext: 'Pharma, auto, engineering & plastics' },
      { value: 'AURIC', label: 'Smart Industrial Corridor', subtext: 'World-class infrastructure linkages' },
      { value: '100%', label: 'Trade Desk Matchmaking', subtext: 'Overseas buyer introductions' },
      { value: '1 Full Day', label: 'Industrial Conclave', subtext: 'Finance, ICD logistics & exports' },
    ],
    highlights: [
      'Dry Port (ICD Waluj) & Rail Cargo Freight Optimization Masterclass',
      'Pharma & Chemical USFDA/WHO-GMP Compliance & Global Market Expansion',
      'Automotive Ancillary & Heavy Engineering B2B Matchmaking Desks',
      'AURIC / DMIC Industrial Investment & Incentive Structuring Workshop',
    ],
    galleryImages: [
      '/timeline_photos/1.buldhana export awarness program/IMG-20260206-WA0103.jpeg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0074.jpeg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0092.jpeg',
      '/timeline_photos/serbia buyer meet/IMG-20260206-WA0110.jpeg',
    ],
    benefits: [
      {
        number: '01',
        title: 'ICD Dry Port & Rail Logistics Savings',
        description: 'Learn how to route export containers through ICD Waluj directly to JNPA with reduced transit time and zero empty-haul surcharges.',
        category: 'Dry Port Logistics',
      },
      {
        number: '02',
        title: 'AURIC Smart City Incentives',
        description: 'Explore plug-and-play industrial land, subsidized power tariffs, and state mega-project incentives in the Shendra-Bidkin industrial belt.',
        category: 'Industrial Parks',
      },
      {
        number: '03',
        title: 'Pharma & Chemical Regulatory Pathways',
        description: 'Demystify regulatory filings for generic formulations, API exports, and cosmetic products into African, CIS, and LATAM markets.',
        category: 'Pharma Exports',
      },
      {
        number: '04',
        title: 'Automotive & Heavy Engineering Sourcing',
        description: 'Connect with overseas EPC contractors seeking heavy fabrication, hydraulic cylinders, gears, and commercial vehicle components.',
        category: 'Heavy Engineering',
      },
      {
        number: '05',
        title: 'Export Working Capital & Factoring',
        description: 'Access non-recourse international invoice factoring to get 80% upfront cash against your foreign buyer invoices.',
        category: 'Export Factoring',
      },
      {
        number: '06',
        title: 'Marathwada Global Trade Alliance',
        description: 'Join the permanent VUSF Marathwada Trade Desk to participate in upcoming trade missions to Germany, UAE, and Vietnam.',
        category: 'Global Alliances',
      },
    ],
    agendaTitle: 'A DAY BUILT FOR MARATHWADA’S INDUSTRIAL PROWESS',
    agendaSubtitle: 'Unlocking direct cross-border trade for regional manufacturing giants and emerging MSMEs.',
    agenda: [
      {
        time: '09:30 AM – 10:30 AM',
        title: 'Registration, B2B Exhibition & Industrial Networking',
        description: 'Delegate badge collection and opening networking tea in Waluj.',
        type: 'networking',
      },
      {
        time: '10:30 AM – 11:45 AM',
        title: 'Inaugural Address: Marathwada as a Global Export Hub',
        description: 'Visionary addresses by President Pragati Tayde and visiting state industrial leaders.',
        type: 'keynote',
      },
      {
        time: '11:45 AM – 01:15 PM',
        title: 'Technical Session: ICD Logistics, Port Connectivity & AURIC Subsidies',
        description: 'Overcoming freight bottlenecks and tapping into state PSI investment schemes.',
        type: 'workshop',
      },
      {
        time: '01:15 PM – 02:30 PM',
        title: 'Networking Lunch & B2B Matchmaking Roundtables',
        description: 'Curated one-on-one buyer meets across Auto Ancillary, Pharma, and Plastics.',
        type: 'networking',
      },
      {
        time: '02:30 PM – 04:00 PM',
        title: 'Export Finance: Invoice Factoring, Letter of Credit & Currency Risk',
        description: 'Panel of trade finance bankers and commercial risk specialists.',
        type: 'workshop',
      },
      {
        time: '04:00 PM – 05:30 PM',
        title: 'Valedictory Felicitations & Distribution of Summit Dossiers',
        description: 'Honoring top Marathwada exporters and concluding tea reception.',
        type: 'felicitation',
      },
    ],
    passes: [
      {
        id: 'regional-delegate',
        name: 'Regional Delegate Pass',
        price: 1999,
        gstPercentage: 18,
        shortDesc: 'Full 1-day pass for manufacturers, plant managers, and MSME founders in Marathwada.',
        seatsLeft: 30,
        benefits: [
          'Full-Day Entry to Plenary & Technical Breakouts',
          'Marathwada Exporters Resource Kit & Directory',
          'Lavish 3-Course Networking Lunch & Tea',
          'Access to General Matchmaking Lounge',
          'Certificate of Summit Participation',
        ],
      },
      {
        id: 'industrial-vip-pass',
        name: 'Industrial VIP & Matchmaking Pass',
        price: 4999,
        gstPercentage: 18,
        recommended: true,
        badge: 'MOST POPULAR',
        shortDesc: 'Includes pre-arranged buyer meetings and VIP front-row seating.',
        seatsLeft: 12,
        benefits: [
          'All Regional Delegate Pass Privileges',
          'Pre-Arranged One-on-One Meetings with Verified Buyer Desks',
          'Inclusion in the Marathwada Industrial Sourcing Dossier',
          'Priority VIP Front-Row Seating',
          '3-Month Free Advisory from VUSF Marathwada Trade Desk',
        ],
      },
      {
        id: 'msme-expo-stall',
        name: 'MSME Industrial Display Stall (2m x 2m)',
        price: 12500,
        gstPercentage: 18,
        shortDesc: 'Fitted exhibition booth to display manufactured components, machinery parts, or pharma samples.',
        seatsLeft: 5,
        benefits: [
          '2m x 2m Fitted Exhibition Booth at Waluj Convention Hall',
          '2 Full VIP Delegate Passes with Meals Included',
          'Branding in the Official Summit Guide & Digital Displays',
          'Direct Opportunity to Distribute Catalogs to 250+ Industrialists',
        ],
      },
    ],
    targetAudience: [
      { title: 'Automotive Ancillary Manufacturers', description: 'Forgings, precision stamping, chassis parts, and specialized automotive assemblies.' },
      { title: 'Pharmaceutical & API Producers', description: 'Finished formulations, active pharma ingredients, packaging, and veterinary drugs.' },
      { title: 'Plastic & Packaging Processors', description: 'Blow molding, polymer films, corrugated packaging, and industrial containers.' },
      { title: 'Heavy Engineering & Fabrication', description: 'Boilers, pressure vessels, structural steel, and material handling systems.' },
    ],
    speakers: [
      {
        name: 'Pragati Tayde',
        designation: 'President & Founder',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/pragati.jpeg',
        expertise: 'Industrial Policy, Marathwada Development & Global Alliances',
        topic: 'Unlocking Marathwada’s Next Industrial Wave: From AURIC to Global Markets',
      },
      {
        name: 'Kamlesh Kumar',
        designation: 'Managing Director',
        organization: 'Vishwa Udyam Sahayta Foundation',
        image: '/members/kamlesh.jpeg',
        expertise: 'Trade Logistics & Commercial Contract Structuring',
        topic: 'Strategic Dry Port Logistics and Expanding into Emerging Trade Corridors',
      },
    ],
    faqs: [
      {
        question: 'Where is the summit held in Chhatrapati Sambhaji Nagar?',
        answer: 'The event is held at the Marathwada Auto Cluster / Industrial Convention Hall in Waluj MIDC, situated centrally in the industrial heart of the district.',
      },
      {
        question: 'Will there be guidance on DMIC / AURIC land allotment schemes?',
        answer: 'Yes! Senior industrial development consultants will explain the single-window clearance, stamp duty waivers, and capital subsidy schemes for expanding into Shendra and Bidkin nodes.',
      },
      {
        question: 'Can pharma and chemical companies get assistance with export regulatory compliance?',
        answer: 'Yes, technical breakout sessions specifically address WHO-GMP compliance, dossier preparation, and export market entry for emerging healthcare markets.',
      },
    ],
    supportPhone: '+91-8169080686',
    supportWhatsapp: '+91-8169080686',
    supportEmail: 'info@namastevishwaudyam.org',
  },
];
