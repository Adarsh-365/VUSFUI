import {
  Handshake,
  Rocket,
  Ship,
  Users,
  Send,
  Building2,
  Construction,
  CalendarCheck,
  ShieldCheck,
  Globe2,
  TrendingUp,
  Landmark,
  Award,
  Video,
  Compass,
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  category: string;
  badge: string;
  icon: any;
  summary: string;
  fullDescription: string[];
  features?: string[];
  whyChooseUs?: string[];
  ctaText?: string;
  externalLink?: {
    text: string;
    url: string;
  };
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'b2b-service',
    slug: 'b2b-service',
    title: 'B2B Service & Business Matchmaking',
    shortTitle: 'B2B Service',
    tag: 'GLOBAL BUSINESS MATCHMAKING',
    category: 'Trade & Matchmaking',
    badge: 'B2B Matchmaking',
    icon: Handshake,
    summary:
      'Arranging structured one-on-one business meetings and connecting visiting international business delegations with Indian industry leaders.',
    fullDescription: [
      'Business To Business, a division of Namaste India, regularly arranges one-on-one business meetings for visiting business delegations from various countries using its extensive collection of business directories. This resource is crucial for organizing effective matchmaking.',
      'In order to facilitate finding the ideal business partner, this portal offers detailed information about visiting business delegations, including their contact details and business interests. Additionally, it provides access to business inquiries, tenders, and searchable business directories from different countries.',
      'Our dedicated B2B desks assist enterprises in establishing strategic distributor agreements, joint ventures, OEM supply contracts, and long-term bilateral trade partnerships.',
    ],
    features: [
      'Access to international verified business directories',
      'One-on-One curated business delegation meetings',
      'Inbound and outbound buyer-seller matchmakings',
      'Global trade inquiries, tenders, and RFPs',
    ],
    whyChooseUs: [
      'Over 10,000+ active trade contacts across South Asia & Asia-Pacific',
      'Direct liaison with visiting foreign trade delegates',
      'Pre-vetted commercial partners and transparent credentials',
    ],
    ctaText: 'Request B2B Matchmaking Meeting',
  },
  {
    id: 'start-company',
    slug: 'start-company',
    title: 'Start Company: Launch Your Business with Expert Guidance',
    shortTitle: 'Start company',
    tag: 'EMPOWERING ENTREPRENEURS',
    category: 'Startup & Incorporation',
    badge: 'Company Incorporation',
    icon: Rocket,
    summary:
      'End-to-end guidance for entrepreneurs covering business registration, strategic planning, legal compliance, and financial forecasting.',
    fullDescription: [
      'Empowering Entrepreneurs: Launch Your Business with Expert Guidance.',
      'At Namaste India, we specialize in helping entrepreneurs navigate the complexities of starting a business. Our services cover everything from business registration and strategic planning to financial guidance and marketing strategies.',
      'We understand the challenges of starting a new venture and provide tailored solutions to fit your unique needs. Our experienced team offers expertise in legal compliance, financial forecasting, and operational efficiency, ensuring you have the support needed to succeed.',
      'With Namaste India you\'re not just starting a business; you\'re embarking on a journey with a dedicated partner committed to your long-term success. Contact us today to begin your entrepreneurial journey with confidence and clarity. Let\'s build your business together.',
    ],
    features: [
      'Pvt Ltd, LLP, OPC, Section 8 and Partnership registration',
      'Startup India DPIIT recognition & tax exemption filing',
      'Bank-ready business plans & cash-flow financial models',
      'GSTIN, PAN, TAN, MSME Udyam & statutory licensing',
    ],
    whyChooseUs: [
      'Comprehensive handholding from idea to operational launch',
      'Direct tie-ups with nationalized banks and legal specialists',
      'Post-incorporation compliance and annual advisory',
    ],
    ctaText: 'Incorporate Your Business Today',
  },
  {
    id: 'start-import-export',
    slug: 'start-import-export',
    title: 'Start Import and Export Business: Expert Guidance Every Step',
    shortTitle: 'Start import and export',
    tag: 'INTERNATIONAL TRADE ACCELERATION',
    category: 'Global Trade & Export',
    badge: 'Import & Export Setup',
    icon: Ship,
    summary:
      'Complete roadmap for international trade, covering DGFT IEC licensing, market analysis, customs compliance, and supply chain logistics.',
    fullDescription: [
      'Starting Your Import and Export Business: Expert Guidance Every Step of the Way.',
      'Embarking on an import and export business can be both exhilarating and daunting. At Namaste India, we specialize in guiding aspiring entrepreneurs through the intricacies of international trade, ensuring a smooth and successful launch.',
      'Comprehensive Services:',
      '1. Market Research and Analysis: Understand target markets, consumer behavior, and competitive landscape to make informed decisions.',
      '2. Legal and Regulatory Compliance: Navigate customs regulations, import/export laws, and documentation requirements seamlessly.',
      '3. Supply Chain Management: Optimize logistics and transportation to ensure timely delivery and cost-efficiency.',
      '4. Financial Planning and Risk Management: From currency fluctuations to payment terms, we help mitigate financial risks and maximize profitability.',
      '5. Marketing and Sales Strategy: Develop effective strategies to promote your products or services internationally and expand your customer base.',
      'Start your journey into global trade confidently with Namaste India, where success knows no borders.',
    ],
    features: [
      'DGFT IEC (Import Export Code) issuance & RCMC registration',
      'In-depth target country market research and tariff assessments',
      'International contract structuring & Letters of Credit (LC) advisory',
      'Cross-border freight, customs clearance & supply chain optimization',
    ],
    whyChooseUs: [
      'Expertise and Experience: Benefit from our years of experience and deep understanding of global trade dynamics.',
      'Personalized Approach: We provide tailored solutions to address your unique business goals and challenges.',
      'Network and Partnerships: Access our network of suppliers, distributors, and trade professionals to facilitate business growth.',
    ],
    externalLink: {
      text: 'Join Live Classes: "Unlocking Global Markets: Your Roadmap to Import and Export Success"',
      url: '/services/start-import-export#masterclass-section',
    },
    ctaText: 'Start Your Global Trade Journey',
  },
  {
    id: 'one-to-one-counselling',
    slug: 'one-to-one-counselling',
    title: 'One to One Business Counselling & Mentorship',
    shortTitle: 'One to One Counselling',
    tag: 'PERSONALIZED STRATEGY',
    category: 'Advisory & Mentorship',
    badge: '1-on-1 Mentorship',
    icon: Users,
    summary:
      'Confidential and tailored 1-on-1 counseling with senior industry leaders, resolving operational bottlenecks and accelerating enterprise growth.',
    fullDescription: [
      'At Namaste India, we offer personalized one-on-one counseling to empower entrepreneurs at every stage of their journey.',
      'Our experienced counselors provide tailored guidance to address your specific business challenges and goals. Whether you\'re launching a startup or seeking to optimize an existing business, our approach is designed to help you develop strategic plans, navigate obstacles, and capitalize on opportunities.',
      'We prioritize confidentiality and trust, creating a supportive environment where you can openly discuss your concerns and aspirations.',
      'With our commitment to long-term partnership, we\'re here to support your ongoing success, ensuring you have the tools and insights needed to achieve your business objectives. Contact us today to schedule your consultation and begin your personalized path to entrepreneurial excellence.',
    ],
    features: [
      'One-on-One deep-dive business diagnostic sessions',
      'Growth bottleneck identification and turnaround roadmaps',
      'Cash flow management & working capital counseling',
      'Confidential mediation & strategic business guidance',
    ],
    whyChooseUs: [
      '100% confidential and trusted advisory framework',
      'Access to senior industry veterans and chartered advisors',
      'Practical, milestone-driven execution roadmaps',
    ],
    ctaText: 'Schedule 1-on-1 Counselling Session',
  },
  {
    id: 'product-launch-other-country',
    slug: 'product-launch-other-country',
    title: 'Product Launch in Other Country: Global Market Entry Packages',
    shortTitle: 'Product launch other country',
    tag: 'GLOBAL PRODUCT LAUNCH',
    category: 'International Expansion',
    badge: 'Overseas Product Launch',
    icon: Send,
    summary:
      'Tailored international market entry packages covering market research, overseas compliance, local logistics, and regional marketing.',
    fullDescription: [
      'Launching your product in a new country is a pivotal step towards global expansion, and at Namaste India, we specialize in guiding businesses through this process with our tailored packages designed for success.',
      'Our comprehensive services cover every aspect of the international product launch journey. We begin with in-depth market research and analysis to understand local consumer behavior, market trends, and competition, laying a solid foundation for your market entry strategy.',
      'Our expertise in regulatory compliance ensures smooth navigation of import/export regulations and certifications required to enter the new market legally and seamlessly.',
      'We optimize logistics and distribution channels to guarantee efficient supply chain management, from warehousing to delivery, minimizing costs and maximizing speed. Our customized marketing strategies are crafted to resonate with the target audience, leveraging digital marketing, advertising, and PR to establish your brand\'s presence effectively.',
      'Whether you opt for our basic, advanced, or custom package, our goal remains the same: to support your business in achieving a successful and sustainable product launch abroad.',
    ],
    features: [
      'Local market consumer research & competitive benchmarking',
      'Foreign regulatory compliance, labeling, & packaging certifications',
      'Overseas warehousing, distribution, & retail channel tie-ups',
      'Targeted international digital PR and influencer marketing',
    ],
    whyChooseUs: [
      'End-to-end comprehensive packages (Basic, Advanced, and Custom)',
      'Direct on-ground agency networks in Nepal, UAE, East Asia & Europe',
      'Faster time-to-market with minimized operational risk',
    ],
    ctaText: 'Plan Your International Product Launch',
  },
  {
    id: 'start-business-other-country',
    slug: 'start-business-other-country',
    title: 'Start Business in Other Country: Global Office & Entity Setup',
    shortTitle: 'Start business in other country',
    tag: 'GLOBAL EXPANSION & ENTITY SETUP',
    category: 'International Expansion',
    badge: 'Overseas Entity Setup',
    icon: Building2,
    summary:
      'Setting up overseas branch offices, subsidiaries, staffing, local compliances, and operational headquarters in key foreign markets.',
    fullDescription: [
      'Expanding Your Business Globally: Establishing Offices and Operations in New Markets.',
      'At Namaste India, we specialize in assisting businesses with expanding their operations into new countries by setting up offices or establishing a presence abroad.',
      'Our services cater to every aspect of international expansion, including market research, legal and regulatory compliance, office setup, staffing, and operational support.',
      'Whether you\'re looking to open a new office, establish a subsidiary, or set up a branch in another country, our experienced team provides comprehensive guidance and support tailored to your specific needs and goals.',
      'With Namaste India, you can navigate the complexities of global expansion confidently, ensuring a smooth and successful transition into new markets.',
    ],
    features: [
      'Foreign entity incorporation (Subsidiary, Branch, Liaison Office)',
      'Local commercial real estate & co-working space setup',
      'Cross-border tax compliance, banking & accounting systems',
      'Expatriate and local staff recruitment & visa assistance',
    ],
    whyChooseUs: [
      'Global presence coordination in South Asia, UAE, Singapore & China',
      'End-to-end regulatory adherence with local country laws',
      'Seamless multi-currency cross-border banking setup',
    ],
    ctaText: 'Expand Business Abroad',
  },
  {
    id: 'infrastructure-development',
    slug: 'infrastructure-development',
    title: 'Infrastructure Development Services: Building Foundation for Growth',
    shortTitle: 'Infrastructure development',
    tag: 'CIVIL & INDUSTRIAL INFRASTRUCTURE',
    category: 'Industrial Engineering',
    badge: 'Industrial Infra',
    icon: Construction,
    summary:
      'Comprehensive planning, design, and robust execution for manufacturing facilities, commercial premises, and smart logistics parks.',
    fullDescription: [
      'Infrastructure Development Services: Building the Foundation for Growth.',
      'At Namaste India, we specialize in infrastructure development to support businesses in achieving their growth objectives. Whether you\'re expanding existing facilities or starting anew, our services encompass comprehensive planning, design, and execution.',
      'We focus on creating efficient and scalable infrastructure solutions tailored to your specific industry and operational needs. From concept to completion, our team ensures that projects meet regulatory requirements, budget constraints, and timelines.',
      'Whether it\'s manufacturing facilities, commercial spaces, or logistical hubs, our expertise and dedication ensure that your infrastructure development aligns with your business goals. Contact us today to discuss how we can support your infrastructure needs and propel your business towards sustained growth and success.',
    ],
    features: [
      'Master planning & architectural layouts for industrial parks',
      'Pre-Engineered Building (PEB) steel structure engineering',
      'Common Effluent Treatment Plants (CETP) & green energy integration',
      'Fire, MIDC, pollution control board & statutory clearances',
    ],
    whyChooseUs: [
      'Complete execution from soil testing to factory commissioning',
      'Cost-optimized engineering saving up to 25% on capex',
      'Strict adherence to industrial safety and environment norms',
    ],
    ctaText: 'Request Infrastructure Consultation',
  },
  {
    id: 'exhibitions',
    slug: 'exhibitions',
    title: 'Trade Exhibitions & Industrial Expos: Connect & Showcase',
    shortTitle: 'Trade Exhibitions & Expos',
    tag: 'GLOBAL EXPOS & TRADE FAIRS',
    category: 'Exhibitions & Trade Fairs',
    badge: 'Expos & Trade Fairs',
    icon: CalendarCheck,
    summary:
      'Curating premier domestic and international trade exhibitions, country pavilions, B2B product expos, and stall showcases connecting Indian MSMEs with global buyers.',
    fullDescription: [
      'Trade Exhibitions & Industrial Expos: Building Global Market Access for Indian Enterprise.',
      'Our exhibitions division organizes and manages premier national and international industrial expos, country-level bilateral trade pavilions, and specialized product showcases across India, Nepal, Dubai, Thailand, and China.',
      'From custom stall fabrication and booth infrastructure to high-profile B2B buyer-seller meets, VIP investor lounges, and government delegation walkthroughs, we provide comprehensive end-to-end event infrastructure.',
      'Participating MSMEs gain unmatched brand visibility, direct procurement links with bulk buyers, and opportunities to sign commercial MoUs on-site.',
    ],
    features: [
      'Flagship international exhibitions & country pavilions (Nepal Expo, Canton Fair)',
      'Custom stall fabrication, booth branding, and display logistics',
      'Curated B2B buyer-seller matchmaking and VIP delegation walkthroughs',
      'Extensive media coverage, trade directory features, and government dignitary inaugurations',
    ],
    whyChooseUs: [
      'Proven track record of hosting 150+ international delegations',
      'Over 10,000+ verified trade buyers and procurement heads per exhibition',
      'Direct government support and subsidized MSME participation schemes',
    ],
    ctaText: 'Book an Exhibition Stall',
  },
  {
    id: 'seminars-webinars',
    slug: 'seminars-webinars',
    title: 'Seminars & Digital Webinars: Policy, Learning & Knowledge',
    shortTitle: 'Seminars & Webinars',
    tag: 'KNOWLEDGE & POLICY SESSIONS',
    category: 'Seminars & Webinars',
    badge: 'Knowledge Conclaves',
    icon: Video,
    summary:
      'Organizing high-impact industry seminars, government policy conclaves, and interactive digital webinars connecting entrepreneurs with policymakers and sector experts.',
    fullDescription: [
      'Seminars & Webinars: Bridging Policy Knowledge, Industry Insights & Practical Growth Strategies.',
      'Vishwa Udyam Sahayta Foundation conducts specialized physical seminars, policy roundtables, and high-definition digital webinars designed to equip MSMEs, startup founders, and exporters with real-world actionable knowledge.',
      'Our conclaves bring together senior ministry officials, District Industries Centre (DIC) heads, top bankers, chartered accountants, and international trade consultants to decode government subsidy schemes (PMEGP, CMEGP), export compliances, and capital mobilization.',
      'Our interactive global webinars connect thousands of registered participants from across India and overseas trade corridors for live masterclasses and Q&A sessions.',
    ],
    features: [
      'Policy-driven seminars with ministries, DICs, and premier banking institutions',
      'Interactive digital webinars and masterclasses broadcasted nationwide',
      'Specialized workshops on PMEGP/CMEGP subsidies, DPR preparation, and GST exports',
      'Live Q&A panels, downloadable session kits, and verified participation certificates',
    ],
    whyChooseUs: [
      'Direct interface with policy architects, bank heads, and industry leaders',
      'Actionable DPR formulation and subsidy guidance directly from certified specialists',
      'Access to exclusive recorded webinar libraries and digital knowledge assets',
    ],
    ctaText: 'Register for Upcoming Seminars & Webinars',
  },
  {
    id: 'gem-portal',
    slug: 'gem-portal',
    title: 'GeM Portal: Government e-Marketplace Onboarding & Bidding',
    shortTitle: 'GeM PORTAL',
    tag: 'PUBLIC PROCUREMENT',
    category: 'Government Procurement',
    badge: 'GeM Registration & Tenders',
    icon: ShieldCheck,
    summary:
      'Seamless GeM seller registration, product cataloguing, OEM vendor assessment, and winning bids on Government e-Marketplace.',
    fullDescription: [
      'Government e-Marketplace (GeM) is the official public procurement portal for Central & State Ministries, Public Sector Undertakings (PSUs), and Defense establishments.',
      'At Namaste India, we handhold MSMEs and manufacturers to register, get verified, upload compliant product/service catalogues, and participate actively in high-value government tenders.',
      'Our team ensures complete statutory compliance, OEM vendor assessment completion, Caution Money management, and L1 bid strategy support to maximize your government contract wins.',
    ],
    features: [
      'Primary & Secondary GeM seller registration and validation',
      'OEM Vendor Assessment & Brand creation on GeM',
      'Product and Service cataloguing with precise specifications',
      'Direct purchase, L1 bidding & custom tender participation assistance',
    ],
    whyChooseUs: [
      'Tap into India\'s multi-billion dollar public procurement demand',
      'Fast-track approval of brand and OEM catalogues',
      'Dedicated bid desk assisting in technical & financial evaluation',
    ],
    ctaText: 'Get GeM Onboarding Support',
  },
  {
    id: 'namaste-china',
    slug: 'namaste-china',
    title: 'Namaste China: Machinery Sourcing, Canton Fair & Factory Audits',
    shortTitle: 'Namaste China',
    tag: 'DIRECT OEM SOURCING',
    category: 'Global Trade & Export',
    badge: 'China Sourcing Desk',
    icon: Globe2,
    summary:
      'Direct industrial machinery sourcing, Canton Fair buyer delegations, factory background verification, and quality audits in China.',
    fullDescription: [
      'Namaste China Sourcing Desk, Canton Fair Delegations & OEM Factory Audits.',
      'Enabling Indian manufacturers and entrepreneurs to source high-grade industrial machinery, automation tools, raw materials, electronics, and precision components directly from verified manufacturing hubs in Guangzhou, Shanghai, Yiwu, and Shenzhen.',
      'Our bilingual sourcing specialists organize end-to-end buyer delegations to the Canton Fair (Phases 1, 2, and 3), perform on-site factory quality inspections, negotiate direct manufacturer pricing, and manage cross-border shipping documentation.',
    ],
    features: [
      'Curated business delegations to the Canton Fair & Yiwu markets',
      'On-site factory quality audits & corporate background checks',
      'Direct price negotiation with original equipment manufacturers (OEMs)',
      'Container load consolidation, customs clearance & sea freight shipping',
    ],
    whyChooseUs: [
      'On-ground presence in Guangzhou and Shanghai',
      'Eliminate middlemen markups and trade fraud risks',
      'Complete legal contract mediation and quality assurance',
    ],
    ctaText: 'Join Namaste China Sourcing Desk',
  },
  {
    id: 'foreign-investment',
    slug: 'foreign-investment',
    title: 'Foreign Direct Investment (FDI) Facilitation & Global Capital',
    shortTitle: 'Foreign investment',
    tag: 'CROSS-BORDER CAPITAL',
    category: 'Investment & Banking',
    badge: 'FDI Advisory',
    icon: TrendingUp,
    summary:
      'Facilitating cross-border Foreign Direct Investment (FDI), joint ventures, and capital flows adhering to RBI & FEMA regulations.',
    fullDescription: [
      'Foreign direct investment (FDI) plays a pivotal role in the global economy, facilitating capital flows and fostering economic development across borders.',
      'It involves investments made by individuals, businesses, or governments in foreign countries, aiming to establish lasting interests and significant influence. FDI impacts host countries by contributing to economic growth, enhancing infrastructure, and creating job opportunities. Conversely, it presents challenges related to sovereignty, cultural integration, and economic dependency.',
      'Key international organizations such as the World Bank and the IMF promote policies that encourage FDI, emphasizing transparency, stability, and investor protection. As globalization continues to reshape economic landscapes, FDI remains a crucial catalyst for interconnectedness and prosperity worldwide.',
      'Our investment desk assists overseas investors and Indian enterprises in structuring joint ventures, private equity allocations, and statutory FEMA/RBI compliance.',
    ],
    features: [
      'FDI policy advisory & automatic vs. government approval route structuring',
      'RBI FIRMS portal reporting & FC-GPR/FC-TRS compliances',
      'Bilateral joint venture agreements & escrow account management',
      'Cross-border corporate structuring and due diligence',
    ],
    whyChooseUs: [
      'Deep expertise in Indian foreign investment regulations & FEMA',
      'Network with overseas institutional investors and diaspora funds',
      'Transparent, risk-mitigated deal structuring',
    ],
    ctaText: 'Consult on Foreign Investment',
  },
  {
    id: 'finance-and-investment',
    slug: 'finance-and-investment',
    title: 'Finance & Investment Advisory: Managing, Protecting & Growing Assets',
    shortTitle: 'Finance and investment',
    tag: 'FINANCIAL WEALTH & CREDIT',
    category: 'Investment & Banking',
    badge: 'Corporate Finance',
    icon: Landmark,
    summary:
      'Comprehensive financial advisory, term loans, working capital lines, wealth management, and risk mitigation for enterprises.',
    fullDescription: [
      'In the realm of finance and investment, services encompass a wide array of offerings aimed at managing, protecting, and growing financial assets.',
      'These services include investment management, wealth advisory, retirement planning, and risk management. Financial institutions and advisors play a crucial role in providing personalized strategies to meet diverse client needs, from individuals seeking to build their savings to corporations managing large portfolios.',
      'With the advent of digital platforms, accessibility to financial services has expanded, offering convenience and real-time insights.',
      'Effective financial service providers prioritize transparency, compliance with regulations, and innovative solutions to navigate complex market landscapes and deliver sustainable returns for their clients.',
    ],
    features: [
      'Bank term loans, project finance & working capital lines (CC/OD)',
      'Corporate treasury management & structured debt syndication',
      'CMA data, DSCR modeling & financial risk mitigation',
      'Equity valuation, angel rounds & private placement advisory',
    ],
    whyChooseUs: [
      'Direct liaison with nationalized banks, private banks & NBFCs',
      'Higher approval rates with precision financial modeling',
      'Transparent advisory adhering strictly to banking guidelines',
    ],
    ctaText: 'Explore Finance & Investment Options',
  },
  {
    id: 'government-msme-support',
    slug: 'government-msme-support',
    title: 'Government & MSME Support: Schemes, Grants & Subsidies',
    shortTitle: 'Government and MSME support',
    tag: 'GOVERNMENT SUBSIDIES & GRANTS',
    category: 'Government Schemes',
    badge: 'PMEGP / CMEGP / ZED',
    icon: Award,
    summary:
      'Unlocking up to 35% margin money subsidies under PMEGP, CMEGP, CGTMSE collateral-free loans, and ZED quality certification.',
    fullDescription: [
      'The government\'s MSME (Micro, Small, and Medium Enterprises) support service aims to bolster small businesses through comprehensive assistance programs.',
      'These initiatives typically include financial aid, such as loans and grants, tailored to the needs of MSMEs. Additionally, the government provides advisory services, capacity building programs, and facilitates access to markets and technology.',
      'The objective is to enhance competitiveness, promote entrepreneurship, and foster sustainable growth within the MSME sector. By addressing challenges like access to finance and market linkages, these services strive to create a conducive environment for MSMEs to thrive, thereby contributing significantly to economic development and job creation.',
    ],
    features: [
      'PMEGP & CMEGP capital margin money subsidy applications (up to 35%)',
      'CGTMSE collateral-free bank loans up to Rs. 5 crore',
      'MSME ZED (Zero Defect Zero Effect) certification and cash subsidies',
      'Delayed payment grievance settlement through MSME Samadhaan',
    ],
    whyChooseUs: [
      'Over 2,500+ successful subsidy and DPR sanctions processed',
      'Direct institutional assistance from application to fund release',
      'Special 35% subsidy realization for Women, SC/ST & Rural Founders',
    ],
    ctaText: 'Apply for MSME Subsidy Schemes',
  },
  {
    id: 'market-linkage',
    slug: 'market-linkage',
    title: 'Market Linkage: Mumbai to Pan-India States & 20 International Corridors',
    shortTitle: 'Market Linkage',
    tag: 'DOMESTIC & GLOBAL CORRIDORS',
    category: 'Trade & Distribution',
    badge: '20 Global Corridors',
    icon: Compass,
    summary:
      'Connecting local production from Mumbai across all Indian states and 20 strategic world countries including Nepal, China, UAE, Japan, Vietnam, Germany, and Russia.',
    fullDescription: [
      'Market Linkage is a comprehensive trade facilitation service designed to connect Indian manufacturers, agro-producers, MSMEs, and exporters directly with high-volume buyers, retail chains, and institutional procurement networks.',
      'Domestically, the linkage radiates from Mumbai—India’s commercial capital and maritime gateway—to all 28 states and 8 union territories, establishing wholesale pipelines, cold chain distribution, and APMC mandi linkages.',
      'Internationally, VUSF operates active trade corridors spanning 20 strategic global economies: India, Nepal, China, Bangladesh, Sri Lanka, Thailand, Japan, Vietnam, Malaysia, Singapore, Indonesia, Taiwan, South Korea, UAE, Oman, Qatar, South Africa, Ethiopia, Germany, and Russia.',
      'Through structured B2B buyer matchmaking, preferential FTA tariff advisory (CEPA/AIFTA/SAFTA), JNPT container logistics, and overseas liaison desks, we eliminate intermediaries and maximize profit margins for Indian enterprise.',
    ],
    features: [
      'Domestic distribution network from Mumbai to all Indian states and UTs',
      '20 active global trade corridors with on-ground buyer linkages & trade desks',
      'Comprehensive JNPT / Mundra ocean freight, cold chain, and customs clearance',
      'Bilateral Free Trade Agreement (CEPA, AIFTA, SAFTA) zero-duty compliance',
    ],
    whyChooseUs: [
      'Direct access to 5,000+ verified domestic wholesale buyers & overseas importers',
      'End-to-end corridor support from product sampling to bulk container delivery',
      'On-ground presence and liaison desks across South Asia, ASEAN, GCC, and Europe',
    ],
    ctaText: 'Explore Market Linkage Corridors',
  },
  {
    id: 'startup',
    slug: 'startup',
    title: 'StartUp: DPIIT Recognition, Grant Funding, Investor Connect & Sandbox Support',
    shortTitle: 'StartUp',
    tag: 'STARTUP INDIA & SOVEREIGN PRIVILEGES',
    category: 'Startup Acceleration',
    badge: 'DPIIT & Seed Grants',
    icon: Rocket,
    summary:
      'Complete acceleration support for innovative startups: Startup India DPIIT recognition, 100% Tax Exemption (80-IAC), ₹50L+ non-dilutive seed grants (SISFS/BIG), Angel/VC investor connect, and RBI/SEBI/IRDAI sandbox testing.',
    fullDescription: [
      'The VUSF Startup Advisory Cell is dedicated to empowering emerging founders and tech entrepreneurs with institutional acceleration, government recognition, and venture capital linkages.',
      'We facilitate rapid 48-hour DPIIT certification under Startup India, unlocking sovereign privileges including Section 80-IAC 3-year tax holidays, Section 56(2)(viib) angel tax exemptions, 80% patent fee waivers, and priority access to GeM public procurement tenders.',
      'For capital requirements, our specialised grant division handholds founders in securing non-dilutive grants of up to ₹50 lakh under the Startup India Seed Fund Scheme (SISFS), BIRAC BIG, MeitY TIDE 2.0, SAMRIDH, and state government innovation funds.',
      'We actively bridge startups with 500+ angel syndicates and early-stage venture capital funds while guiding disruptive FinTech, InsurTech, and WealthTech startups through RBI, IRDAI, and SEBI live Regulatory Sandboxes.',
    ],
    features: [
      'Fast-track DPIIT Recognition & Section 80-IAC tax holiday filings (subject to eligibility)',
      'Non-dilutive grant proposal drafting up to ₹50 lakh (SISFS, BIRAC BIG, MeitY TIDE)',
      '1-on-1 Angel & Venture Capital matchmaking with pitch deck & financial modeling',
      'Regulatory Sandbox application & live cohort authorization (RBI, SEBI, IRDAI)',
    ],
    whyChooseUs: [
      'Over 1,200+ startups certified under DPIIT with zero compliance rejections',
      '₹250+ crore in non-dilutive grants and institutional seed capital unlocked',
      'Dedicated regulatory affairs desk for fintech, healthtech & deeptech sandboxes',
    ],
    ctaText: 'Accelerate Your Startup with VUSF',
  },
];
