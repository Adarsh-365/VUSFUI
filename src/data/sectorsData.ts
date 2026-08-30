export interface SectorItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  paragraphs: string[];
}

export const SECTORS_DATA: SectorItem[] = [
  {
    id: 'advertising-publishing',
    slug: 'advertising-publishing',
    name: 'Advertising / Publishing',
    category: 'Media & Communications',
    paragraphs: [
      'The Advertising and Publishing sector plays an important role in helping businesses communicate their products, services, and ideas to customers. It includes advertising agencies, digital marketing companies, publishers, content creators, media buying firms, and branding agencies.',
      'Digital transformation has significantly changed this industry, with businesses increasingly investing in social media marketing, search advertising, influencer marketing, video content, and data-driven campaigns. At the same time, traditional print, publishing, outdoor advertising, and corporate communication continue to serve important markets.',
      'Businesses operating in this sector can explore opportunities through partnerships, technology adoption, content distribution, brand collaborations, and domestic and international market expansion.',
    ],
  },
  {
    id: 'agri-livestock-horticulture',
    slug: 'agri-livestock-horticulture',
    name: 'Agri, Livestock & Horticulture',
    category: 'Agriculture & Food',
    paragraphs: [
      'The Agriculture, Livestock and Horticulture sector includes farming, dairy, poultry, fisheries, agricultural inputs, food cultivation, floriculture, fruits, vegetables, seeds, fertilizers, and related agricultural services. It remains an important source of employment and entrepreneurship across India.',
      'Technology is creating new opportunities through precision agriculture, farm automation, drones, improved irrigation, cold-chain infrastructure, digital marketplaces, and better crop-management systems. Growing demand for processed, organic and sustainably produced agricultural products is also creating opportunities for MSMEs.',
      'Enterprises in this sector can explore domestic and export markets, technology partnerships, food-processing opportunities, supply-chain collaborations, government schemes, and connections with buyers and distributors.',
    ],
  },
  {
    id: 'animation-gaming',
    slug: 'animation-gaming',
    name: 'Animation & Gaming',
    category: 'Media & Technology',
    paragraphs: [
      'The Animation and Gaming sector includes animation studios, game developers, VFX companies, AR/VR developers, digital artists, simulation companies, and interactive entertainment businesses. Demand for digital entertainment and immersive content continues to expand across multiple industries.',
      'Indian companies increasingly provide animation, visual effects, game development, and creative technology services to domestic and international clients. Technologies such as artificial intelligence, virtual reality, augmented reality, real-time rendering and cloud gaming are expanding the possibilities for creators.',
      'Businesses can explore opportunities in entertainment, education, advertising, simulation, gaming, film production and international outsourcing. Collaboration between creative professionals and technology companies can further support innovation and global market access.',
    ],
  },
  {
    id: 'auto-ancillaries-e-mobility',
    slug: 'auto-ancillaries-e-mobility',
    name: 'Auto, Auto Ancillaries & E-Mobility',
    category: 'Automotive & Mobility',
    paragraphs: [
      'The automotive sector includes vehicle manufacturers, auto-component suppliers, engineering companies, dealerships, maintenance businesses and companies involved in electric mobility. Auto ancillary companies form an important supply network supporting vehicle manufacturers.',
      'Electric vehicles are creating new opportunities in batteries, motors, power electronics, charging infrastructure, battery management systems and EV components. Automotive companies are also investing in connected vehicles, automation, lightweight materials and advanced manufacturing technologies.',
      'MSMEs can participate through component manufacturing, technology partnerships, aftermarket services, EV infrastructure and supplier relationships with larger manufacturers. Export markets also provide significant opportunities for automotive components and engineering products.',
    ],
  },
  {
    id: 'aviation',
    slug: 'aviation',
    name: 'Aviation',
    category: 'Logistics & Infrastructure',
    paragraphs: [
      'The Aviation sector includes airlines, airports, aircraft maintenance, aviation equipment, ground handling, training, logistics and aerospace-related services. Expansion in passenger and cargo transportation continues to create opportunities throughout the aviation ecosystem.',
      'Technology, airport infrastructure development and growing regional connectivity are increasing demand for aviation services and specialized suppliers. Maintenance, repair and overhaul, airport technology, aviation software, safety equipment and professional training are important supporting areas.',
      'Businesses can explore opportunities as suppliers, technology providers and service partners for airlines, airports and aviation organizations. Specialized MSMEs can also participate in component manufacturing, engineering and aviation-support services.',
    ],
  },
  {
    id: 'banks-nbfc',
    slug: 'banks-nbfc',
    name: 'Banks & NBFC',
    category: 'Banking & Financial Services',
    paragraphs: [
      'Banks and Non-Banking Financial Companies provide financial services including loans, deposits, business financing, asset financing, payments and credit facilities. They play an important role in supporting businesses, consumers, entrepreneurs and MSMEs.',
      'Digital banking and fintech technologies have transformed financial services through online payments, digital lending, automated credit assessment and mobile banking. Financial institutions are increasingly using artificial intelligence, analytics and automation to improve their services.',
      'MSMEs can engage with banks and NBFCs for working capital, equipment financing, business expansion and trade finance. Partnerships between financial institutions, fintech companies and businesses are also creating new financial products and services.',
    ],
  },
  {
    id: 'broking-commodity-broking',
    slug: 'broking-commodity-broking',
    name: 'Broking & Commodity Broking',
    category: 'Banking & Financial Services',
    paragraphs: [
      'The Broking and Commodity Broking sector connects investors and businesses with financial and commodity markets. It includes stock brokers, commodity brokers, investment platforms, financial intermediaries and related advisory services.',
      'Technology has significantly transformed brokerage operations through online trading platforms, mobile applications, automated systems and digital investment services. Data analytics and financial technology continue to improve market accessibility.',
      'Companies operating in this sector can explore opportunities in technology integration, investor services, research, financial education and digital platforms while operating within applicable regulatory frameworks.',
    ],
  },
  {
    id: 'cements',
    slug: 'cements',
    name: 'Cements',
    category: 'Infrastructure & Building Materials',
    paragraphs: [
      'The Cement sector is an important part of the construction and infrastructure ecosystem. It supplies essential materials for residential construction, commercial projects, roads, bridges, industrial facilities and large infrastructure developments.',
      'Demand for efficient and sustainable construction materials is encouraging manufacturers to improve production technology, energy efficiency and environmental performance. Ready-mix concrete and specialized construction materials are also expanding the market.',
      'Opportunities exist for manufacturers, distributors, logistics providers, equipment suppliers and construction-material businesses. MSMEs can participate throughout the cement and building-material supply chain.',
    ],
  },
  {
    id: 'chemicals-petrochemicals',
    slug: 'chemicals-petrochemicals',
    name: 'Chemicals & Petrochemicals',
    category: 'Chemicals & Materials',
    paragraphs: [
      'The Chemicals and Petrochemicals sector supplies materials used across agriculture, manufacturing, pharmaceuticals, textiles, automobiles, construction and consumer products. It includes specialty chemicals, industrial chemicals, polymers and petrochemical products.',
      'Growing industrial demand and specialized applications are creating opportunities for companies producing higher-value chemical products. Sustainability, recycling, process efficiency and environmentally responsible manufacturing are increasingly important considerations.',
      'Businesses can explore opportunities in manufacturing, distribution, research, technology partnerships and exports. Specialized MSMEs can participate in niche chemical products and industrial supply chains.',
    ],
  },
  {
    id: 'construction-real-estate',
    slug: 'construction-real-estate',
    name: 'Construction & Real Estate',
    category: 'Infrastructure & Real Estate',
    paragraphs: [
      'Construction and Real Estate includes residential developments, commercial properties, industrial facilities, infrastructure construction, architecture and associated professional services. The sector supports a large ecosystem of suppliers and service providers.',
      'Urbanization, industrial development and infrastructure investment continue to create demand for housing, commercial space, warehouses and industrial facilities. Digital construction tools, prefabrication and sustainable building technologies are also changing the industry.',
      'Opportunities exist for developers, contractors, architects, engineering companies, material suppliers, technology providers and MSMEs serving construction projects.',
    ],
  },
  {
    id: 'consultancy-professional',
    slug: 'consultancy-professional',
    name: 'Consultancy / Professional',
    category: 'Professional Services',
    paragraphs: [
      'The Consultancy and Professional Services sector provides specialized expertise to organizations across business strategy, technology, finance, taxation, law, human resources, management and operations.',
      'Companies increasingly rely on external professionals for digital transformation, compliance, market expansion, process improvement and specialized technical expertise. Independent professionals and boutique consulting firms also play an important role.',
      'Consulting businesses can expand through industry specialization, technology-enabled services, partnerships and international clients. MSMEs can also use professional services to improve productivity and access new markets.',
    ],
  },
  {
    id: 'defence-aerospace',
    slug: 'defence-aerospace',
    name: 'Defence & Aerospace',
    category: 'Defence & Engineering',
    paragraphs: [
      'The Defence and Aerospace sector includes defence equipment, aircraft components, electronics, communication systems, drones, aerospace engineering and specialized manufacturing.',
      'Advanced manufacturing, indigenous technology development and increasing participation by private companies are creating opportunities for suppliers and technology businesses. Areas such as unmanned systems, sensors, cybersecurity and advanced materials are particularly important.',
      'MSMEs can participate as component manufacturers, engineering partners and technology suppliers while complying with applicable licensing, security and procurement requirements.',
    ],
  },
  {
    id: 'education-skilling',
    slug: 'education-skilling',
    name: 'Education & Skilling',
    category: 'Education & Human Resources',
    paragraphs: [
      'The Education and Skilling sector includes schools, universities, vocational institutes, training organizations, EdTech companies and professional certification providers.',
      'Digital learning platforms, online courses, AI-assisted education and industry-focused training are changing how people acquire knowledge and professional skills. Demand for employability-focused education continues to grow.',
      'Organizations can collaborate with educational institutions, companies and government programs to provide training, certifications, internships and entrepreneurship development programs.',
    ],
  },
  {
    id: 'electricals-electronics',
    slug: 'electricals-electronics',
    name: 'Electricals & Electronics',
    category: 'Electronics & Hardware',
    paragraphs: [
      'The Electricals and Electronics sector includes electrical equipment, electronic components, consumer electronics, industrial automation, power systems and control equipment.',
      'Growth in manufacturing, renewable energy, electric mobility, automation and digital infrastructure is increasing demand for electronic and electrical products. Domestic manufacturing also creates opportunities for component suppliers.',
      'MSMEs can participate through manufacturing, assembly, distribution, repair, engineering and specialized component production for domestic and international customers.',
    ],
  },
  {
    id: 'engineering',
    slug: 'engineering',
    name: 'Engineering',
    category: 'Industrial & Engineering',
    paragraphs: [
      'The Engineering sector covers industrial machinery, fabrication, precision engineering, automation, tooling, equipment manufacturing and engineering services.',
      'Modern manufacturing increasingly uses robotics, CNC equipment, digital design, sensors and automation to improve productivity and quality. Engineering companies are therefore important technology partners across industries.',
      'Opportunities exist in contract manufacturing, machinery exports, industrial automation, component manufacturing and engineering services for both Indian and international clients.',
    ],
  },
  {
    id: 'entertainment-media',
    slug: 'entertainment-media',
    name: 'Entertainment & Media',
    category: 'Media & Entertainment',
    paragraphs: [
      'Entertainment and Media includes film, television, music, OTT platforms, digital media, radio, content production and associated creative services.',
      'Online streaming, social platforms and mobile entertainment have transformed content consumption. Businesses increasingly require high-quality digital, regional and interactive content.',
      'Companies can explore opportunities in production, distribution, licensing, digital platforms, advertising, technology and collaborations with creators and international media businesses.',
    ],
  },
  {
    id: 'environment-waste-management',
    slug: 'environment-waste-management',
    name: 'Environment & Waste Management',
    category: 'Sustainability & Environment',
    paragraphs: [
      'This sector includes waste collection, recycling, water treatment, pollution control, environmental consulting and sustainability services.',
      'Environmental regulations and sustainability objectives are increasing demand for recycling technologies, waste processing, wastewater management and cleaner industrial processes.',
      'Businesses can develop solutions for municipalities, industries, commercial establishments and communities while creating value from recycling, resource recovery and circular-economy models.',
    ],
  },
  {
    id: 'event-management-exhibition',
    slug: 'event-management-exhibition',
    name: 'Event Management & Exhibition',
    category: 'Events & Trade Promotion',
    paragraphs: [
      'The Event Management and Exhibition sector organizes conferences, exhibitions, trade fairs, corporate events, business meetings and promotional activities.',
      'Businesses increasingly use exhibitions and networking events to showcase products, discover suppliers, meet buyers and develop partnerships. Hybrid and technology-enabled events have expanded participation possibilities.',
      'Event companies can collaborate with venues, associations, exhibitors, government organizations and international delegations to organize business-focused programs and trade events.',
    ],
  },
  {
    id: 'foods-fmcg',
    slug: 'foods-fmcg',
    name: 'Foods & FMCG',
    category: 'Consumer Goods & Retail',
    paragraphs: [
      'Foods and FMCG includes packaged food, household products, personal care products, beverages and other frequently purchased consumer goods.',
      'Changing lifestyles, organized retail, e-commerce and increasing demand for convenient products continue to drive innovation in this sector. Packaging, branding and distribution are critical competitive factors.',
      'MSMEs can explore opportunities in food processing, private-label manufacturing, distribution, exports and supplying products to modern retail and online marketplaces.',
    ],
  },
  {
    id: 'healthcare-pharma',
    slug: 'healthcare-pharma',
    name: 'Healthcare & Pharma',
    category: 'Healthcare & Life Sciences',
    paragraphs: [
      'Healthcare and Pharma includes hospitals, clinics, pharmaceutical manufacturers, biotechnology companies, healthcare technology and associated services.',
      'Growing healthcare requirements and advances in biotechnology, digital health and pharmaceutical research are creating new opportunities across the sector.',
      'Businesses can participate through manufacturing, healthcare services, research, distribution, technology solutions and international pharmaceutical and healthcare markets.',
    ],
  },
  {
    id: 'homeland-security-security-services',
    slug: 'homeland-security-security-services',
    name: 'Homeland Security & Security Services',
    category: 'Security & Defence',
    paragraphs: [
      'This sector includes physical security, surveillance systems, access control, cybersecurity, emergency management and specialized security services.',
      'Organizations increasingly require integrated security systems combining cameras, sensors, software, identity management and cybersecurity technologies.',
      'Businesses can provide security equipment, installation, monitoring, consulting and technology services to commercial, industrial and public-sector customers.',
    ],
  },
  {
    id: 'insurance',
    slug: 'insurance',
    name: 'Insurance',
    category: 'Banking & Financial Services',
    paragraphs: [
      'The Insurance sector provides financial protection through life, health, general, commercial and specialized insurance products.',
      'Digital platforms and InsurTech companies are simplifying policy distribution, claims management, customer service and risk assessment.',
      'Businesses can engage with insurers for commercial risk management while technology companies can develop solutions for distribution, analytics, claims processing and customer engagement.',
    ],
  },
  {
    id: 'it-ites-e-commerce',
    slug: 'it-ites-e-commerce',
    name: 'IT, ITES & E-Commerce',
    category: 'Technology & E-Commerce',
    paragraphs: [
      'The IT, ITES and E-Commerce sector includes software development, cloud services, artificial intelligence, cybersecurity, BPO, SaaS platforms and online marketplaces.',
      'Digital transformation is increasing demand for automation, AI, data analytics, cloud infrastructure and cybersecurity solutions across almost every industry.',
      'Indian technology companies and startups can access domestic and global markets through software products, professional services, outsourcing and digital commerce platforms.',
    ],
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics',
    category: 'Logistics & Supply Chain',
    paragraphs: [
      'The Logistics sector includes transportation, warehousing, freight forwarding, courier services, supply-chain management and last-mile delivery.',
      'E-commerce and expanding domestic and international trade are increasing demand for efficient logistics infrastructure and technology-enabled supply chains.',
      'Opportunities exist in warehousing, cold chains, freight management, logistics software, transportation and integrated supply-chain services.',
    ],
  },
  {
    id: 'luxury-lifestyle',
    slug: 'luxury-lifestyle',
    name: 'Luxury & Lifestyle',
    category: 'Consumer Goods & Retail',
    paragraphs: [
      'Luxury and Lifestyle covers premium fashion, jewellery, accessories, beauty products, home décor and other high-value consumer products.',
      'Growing consumer aspirations and digital commerce are expanding the market for premium and personalized products. Brand identity and customer experience are particularly important.',
      'Businesses can explore opportunities through premium retail, e-commerce, exports, designer collaborations and partnerships with hospitality and lifestyle brands.',
    ],
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing',
    category: 'Industrial & Engineering',
    paragraphs: [
      'Manufacturing includes the production of machinery, equipment, consumer products, components and industrial goods across numerous industries.',
      'Automation, robotics, digital manufacturing and advanced quality-control systems are helping manufacturers improve productivity and compete globally.',
      'MSMEs can participate through contract manufacturing, component supply, private-label production, exports and partnerships with larger manufacturers.',
    ],
  },
  {
    id: 'medical-devices-diagnostics',
    slug: 'medical-devices-diagnostics',
    name: 'Medical Devices & Diagnostics',
    category: 'Healthcare & Life Sciences',
    paragraphs: [
      'This sector includes diagnostic equipment, medical instruments, laboratory equipment, imaging systems and healthcare testing technologies.',
      'Increasing healthcare infrastructure and diagnostic awareness are driving demand for reliable and affordable medical technologies.',
      'Businesses can explore manufacturing, distribution, research, healthcare partnerships and exports while meeting applicable medical-device quality and regulatory requirements.',
    ],
  },
  {
    id: 'metals-mining',
    slug: 'metals-mining',
    name: 'Metals & Mining',
    category: 'Heavy Industry & Mining',
    paragraphs: [
      'Metals and Mining includes mineral extraction, steel, aluminium, non-ferrous metals, processing and related industrial activities.',
      'These materials form the foundation of construction, automobiles, engineering, energy and manufacturing industries.',
      'Opportunities exist in processing, recycling, equipment supply, logistics, value-added metal products and technology solutions that improve efficiency and sustainability.',
    ],
  },
  {
    id: 'plastics-rubber',
    slug: 'plastics-rubber',
    name: 'Plastics/Rubber',
    category: 'Chemicals & Materials',
    paragraphs: [
      'The Plastics and Rubber sector produces materials and components used in automotive, packaging, healthcare, electronics and consumer products.',
      'Advanced polymers, recycling technologies and demand for lightweight materials are influencing product development across the industry.',
      'MSMEs can participate through moulding, extrusion, component manufacturing, recycling, tooling and specialized industrial products.',
    ],
  },
  {
    id: 'printing-packaging',
    slug: 'printing-packaging',
    name: 'Printing & Packaging',
    category: 'Industrial & Packaging',
    paragraphs: [
      'Printing and Packaging includes commercial printing, labels, cartons, flexible packaging, corrugated packaging and specialized packaging solutions.',
      'Growth in e-commerce, food processing, pharmaceuticals and consumer products continues to increase demand for innovative packaging.',
      'Businesses can explore opportunities in sustainable packaging, digital printing, customized packaging, labels and export-oriented packaging solutions.',
    ],
  },
  {
    id: 'renewable-non-renewable-energy',
    slug: 'renewable-non-renewable-energy',
    name: 'Renewable & Non-Renewable Energy',
    category: 'Energy & Utilities',
    paragraphs: [
      'The Energy sector includes solar, wind, hydroelectric power, oil, natural gas, conventional power generation and energy storage.',
      'Renewable-energy adoption is creating opportunities in solar equipment, batteries, power electronics, energy management and supporting infrastructure.',
      'Businesses can participate as manufacturers, installers, engineering companies, technology providers and service partners across the energy value chain.',
    ],
  },
  {
    id: 'retail-trade',
    slug: 'retail-trade',
    name: 'Retail & Trade',
    category: 'Consumer Goods & Retail',
    paragraphs: [
      'Retail and Trade connects manufacturers and producers with consumers and businesses through wholesalers, distributors, retailers and online marketplaces.',
      'Digital commerce and omnichannel retail are changing how products are marketed, sold and delivered to customers.',
      'Businesses can expand through distribution partnerships, franchising, e-commerce, imports, exports and B2B trade networks.',
    ],
  },
  {
    id: 'road-rail-infrastructure',
    slug: 'road-rail-infrastructure',
    name: 'Road & Rail Infrastructure',
    category: 'Infrastructure & Real Estate',
    paragraphs: [
      'This sector includes highways, bridges, railway networks, metro systems, stations and associated engineering infrastructure.',
      'Large infrastructure projects require construction materials, engineering expertise, machinery, technology and numerous supporting services.',
      'MSMEs can participate as contractors, manufacturers, technology providers and suppliers to infrastructure companies and project developers.',
    ],
  },
  {
    id: 'service-industry',
    slug: 'service-industry',
    name: 'Service Industry',
    category: 'Professional Services',
    paragraphs: [
      'The Service Industry includes business support, facility management, outsourcing, maintenance and a wide range of professional and operational services.',
      'As businesses focus on their core operations, demand continues to grow for specialized external service providers.',
      'Service businesses can scale through specialization, technology adoption, standardized processes and partnerships with larger enterprises.',
    ],
  },
  {
    id: 'shipping-ports',
    slug: 'shipping-ports',
    name: 'Shipping & Ports',
    category: 'Logistics & Supply Chain',
    paragraphs: [
      'Shipping and Ports support domestic and international movement of goods through maritime transportation, terminals and port infrastructure.',
      'International trade depends heavily on efficient shipping, freight forwarding, customs support, warehousing and port operations.',
      'Businesses can explore opportunities in maritime logistics, ship services, cargo handling, technology, warehousing and international freight networks.',
    ],
  },
  {
    id: 'sports',
    slug: 'sports',
    name: 'Sports',
    category: 'Consumer & Lifestyle',
    paragraphs: [
      'The Sports sector includes sporting goods, fitness, sports technology, training academies, event management and professional sports services.',
      'Increasing interest in fitness and organized sports is creating opportunities for products, facilities, coaching and digital platforms.',
      'Businesses can participate through equipment manufacturing, sports academies, fitness services, sponsorship, events and sports technology.',
    ],
  },
  {
    id: 'telecom',
    slug: 'telecom',
    name: 'Telecom',
    category: 'Technology & E-Commerce',
    paragraphs: [
      'The Telecom sector provides mobile connectivity, broadband, networking infrastructure, communication equipment and related digital services.',
      'Expansion of 5G, IoT and connected devices is creating demand for advanced networking and communication technologies.',
      'Businesses can participate through equipment manufacturing, network services, software, infrastructure support and enterprise communication solutions.',
    ],
  },
  {
    id: 'textiles-technical-textiles',
    slug: 'textiles-technical-textiles',
    name: 'Textiles & Technical Textiles',
    category: 'Industrial & Manufacturing',
    paragraphs: [
      'The Textile sector includes yarn, fabrics, garments, home textiles and specialized technical textiles used across industrial applications.',
      'Automation, sustainable materials and advanced textile technologies are creating new opportunities for manufacturers and exporters.',
      'Indian businesses can explore international markets through apparel, fabrics, home textiles, technical products and contract manufacturing.',
    ],
  },
  {
    id: 'tobacco',
    slug: 'tobacco',
    name: 'Tobacco',
    category: 'Agriculture & Commodities',
    paragraphs: [
      'The Tobacco sector includes cultivation, processing, manufacturing, packaging and distribution of tobacco-related products.',
      'Companies operating in this industry function within extensive taxation, health-warning, advertising and regulatory frameworks that vary by jurisdiction.',
      'Any business activity in this sector requires careful compliance with applicable manufacturing, packaging, marketing, taxation and trade regulations.',
    ],
  },
  {
    id: 'trade-associations-trusts-societies',
    slug: 'trade-associations-trusts-societies',
    name: 'Trade Associations, Trusts & Societies',
    category: 'Institutional & Non-Profit',
    paragraphs: [
      'This sector includes industry associations, chambers of commerce, charitable trusts, societies and other membership-based organizations.',
      'Such organizations often support members through networking, representation, training, research, trade promotion and knowledge-sharing initiatives.',
      'They can also facilitate partnerships between businesses, government organizations, educational institutions and international trade bodies.',
    ],
  },
  {
    id: 'travel-tourism-hospitality',
    slug: 'travel-tourism-hospitality',
    name: 'Travel, Tourism & Hospitality',
    category: 'Travel & Hospitality',
    paragraphs: [
      'Travel, Tourism and Hospitality includes hotels, resorts, restaurants, travel agencies, tour operators and tourism-related services.',
      'Digital booking platforms and changing traveller preferences are creating opportunities for personalized experiences, sustainable tourism and specialized travel services.',
      'Businesses can develop partnerships with hotels, transport providers, travel platforms and international tourism organizations to reach larger markets.',
    ],
  },
  {
    id: 'wine-beverages',
    slug: 'wine-beverages',
    name: 'Wine & Beverages',
    category: 'Consumer Goods & Retail',
    paragraphs: [
      'The Wine and Beverages sector includes beverage manufacturing, processing, bottling, packaging and distribution across various product categories.',
      'Changing consumer preferences and demand for premium, functional and innovative beverages are influencing product development and branding.',
      'Businesses can explore manufacturing, packaging, hospitality supply, distribution and export opportunities while complying with applicable food, beverage and alcohol regulations.',
    ],
  },
  {
    id: 'wood-crafts',
    slug: 'wood-crafts',
    name: 'Wood & Crafts',
    category: 'Artisans & Handicrafts',
    paragraphs: [
      'Wood and Crafts includes furniture, handicrafts, decorative products, artisan goods, wood processing and traditional craft industries.',
      'Indian craftsmanship provides opportunities to combine traditional skills with modern designs, sustainable materials and digital commerce.',
      'Artisans and MSMEs can reach domestic and international buyers through exhibitions, exporters, e-commerce marketplaces and institutional partnerships.',
    ],
  },
  {
    id: 'others',
    slug: 'others',
    name: 'Others',
    category: 'Emerging & Multi-Disciplinary',
    paragraphs: [
      'This category covers businesses and organizations whose activities do not clearly fall within the predefined industry sectors.',
      'It can include emerging technologies, multidisciplinary businesses, specialized professional activities and new business models that span multiple industries.',
      'Organizations selecting this category can provide additional details about their activities to enable appropriate classification, networking and business matchmaking.',
    ],
  },
];
