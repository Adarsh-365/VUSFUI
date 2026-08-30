export interface InternationalEvent {
  id?: string;
  slug: string;
  milestoneNumber: number;
  title: string;
  date: string;
  year: string;
  location: string;
  venue?: string;
  category: string;
  badge?: string;
  description: string;
  fullArticle?: string[];
  keyHighlights: string[];
  keyPeople?: string[];
  impactMetrics?: { label: string; value: string }[];
  images: string[];
}

export interface CountryWingData {
  slug: string;
  country: string;
  title: string;
  tagline: string;
  heroBadge: string;
  websiteUrl?: string;
  overview: string[];
  stats: { label: string; value: string }[];
  keySectors: string[];
  representatives: { name: string; designation: string; image?: string }[];
  galleryImages: string[];
}

export const NAMASTE_INDIA_EVENTS: InternationalEvent[] = [
  {
    id: 'milestone-01',
    slug: 'inception-launch-namaste-india',
    milestoneNumber: 1,
    year: '2021',
    title: 'Inception & Official Launch of Namaste India Group',
    date: '7 July 2021',
    location: 'Navi Mumbai / National Launch, India',
    venue: 'Corporate Headquarters & National Digital Launch',
    category: 'Foundation & Ecosystem',
    badge: 'FOUNDING MILESTONE',
    description:
      'The foundational inception and national launch of Namaste India Group under the stewardship of Vishwa Udyam Sahayta Foundation (VUSF), established to provide MSMEs, startups, women entrepreneurs, and exporters with business counseling, credit facilitation, DPR formulation, and global market linkages.',
    fullArticle: [
      'On 7 July 2021, Namaste India Group was officially launched under the stewardship of Vishwa Udyam Sahayta Foundation (VUSF), with a resolute vision to champion Indian micro, small, and medium enterprises (MSMEs) and connect grassroots enterprise with global trade corridors.',
      'Recognizing that MSMEs are the growth engine of the Indian economy but frequently struggle with regulatory hurdles, DPR formulation, working capital accessibility, and export logistics, Namaste India Group was designed as a full-stack acceleration ecosystem.',
      'From its very first day, the platform prioritized inclusive enterprise development—establishing dedicated wings for women founders (Namaste Stree Shakti), youth entrepreneurship, rural artisan aggregation, and industrial park development.',
      'This foundational milestone established the organizational blueprint that would subsequently power over 33 landmark delegations, state-level government awards, bilateral MoUs, and international trade corridors across South Asia, Southeast Asia, the Middle East, and China.'
    ],
    keyHighlights: [
      'Official inception on 7 July 2021 establishing the core vision of self-reliant Indian enterprise.',
      'Dedicated support wings created for MSME mentorship, industrial cluster development, and women founders.',
      'Formed the foundational infrastructure for bilateral trade bridges across South Asia, Southeast Asia, and the Middle East.',
      'Integrated end-to-end guidance for PMEGP, CMEGP, Stand-Up India, and state industrial subsidy schemes.'
    ],
    keyPeople: [
      'Pragati Tayde (Founder & President, VUSF / Namaste India Group)',
      'Advisory Board Members & MSME Mentors'
    ],
    impactMetrics: [
      { label: 'Ecosystem Inception', value: '7 July 2021' },
      { label: 'Foundational Focus', value: 'MSME Acceleration' },
      { label: 'Target Corridors', value: 'Domestic & Global' }
    ],
    images: [
      '/timeline_photos/start namste india/IMG-20260206-WA0035.jpg',
      '/timeline_photos/start namste india/IMG-20260206-WA0039.jpg',
      '/timeline_photos/start namste india/IMG-20260206-WA0041.jpg',
      '/timeline_photos/start namste india/IMG-20260206-WA0096.jpg',
      '/timeline_photos/start namste india/IMG-20260206-WA0099.jpg',
      '/timeline_photos/start namste india/IMG-20260206-WA0104.jpg',
      '/timeline_photos/start namste india/IMG-20260206-WA0109.jpg',
    ],
  },
  {
    id: 'milestone-02',
    slug: 'buldhana-export-awareness-conclave',
    milestoneNumber: 2,
    year: '2021',
    title: 'Buldhana Export Awareness Program & Exporter Conclave',
    date: '25 September 2021',
    location: 'Buldhana, Maharashtra',
    venue: 'District Industries Centre (DIC), Buldhana',
    category: 'Government & MSME Exports',
    badge: 'AZADI KA AMRIT MAHOTSAV',
    description:
      'Government of Maharashtra, District Industries Centre (DIC) Buldhana organized "An Exporter Conclave" under Azadi Ka Amrit Mahotsav on 24-25 September 2021. Conducted high-level export awareness sessions connecting regional manufacturers, agricultural producers, and exporters with government export incentives and overseas trade procedures.',
    fullArticle: [
      'As part of the nationwide "Azadi Ka Amrit Mahotsav" celebrations, the Government of Maharashtra and District Industries Centre (DIC) Buldhana organized a high-impact Exporter Conclave on 24-25 September 2021 in Buldhana.',
      'The conclave convened district-level manufacturers, agricultural producers, commodity traders, and aspiring exporters to explore concrete pathways for scaling their products into global export markets.',
      'Namaste India Group actively participated in strategic discussions with key dignitaries including Sunil Patil (Industry Officer, DIC Buldana), Manoj Burad (Secretary, Buldana Industrial Association), Sankalp Tayde (Exporter, Khamgaon), Chetan Patil (General Manager, DIC Buldana), and Rajesh Lahase (Editor & President, Maharashtra OBC Council).',
      'The conclave focused on resolving key export bottlenecks for Vidarbha enterprises, including international quality certifications, phytosanitary standards, packaging innovations for agricultural perishables, and leveraging central and state export incentive schemes.'
    ],
    keyHighlights: [
      'Strategic district export conclave organized under Azadi Ka Amrit Mahotsav with DIC Buldhana.',
      'Key interactions with Sunil Patil (Industry Officer DIC Buldana), Manoj Burad (Secretary, Buldana Industrial Association), Sankalp Tayde (Exporter, Khamgaon), Chetan Patil (GM, DIC Buldana), and Rajesh Lahase (President, Maha OBC Council).',
      'Action plan laid down for district-level export quality control, packaging standards, and international buyer linkages.',
      'Formulated direct handholding modules for first-time exporters in Buldhana and Khamgaon.'
    ],
    keyPeople: [
      'Sunil Patil (Industry Officer, DIC Buldana)',
      'Manoj Burad (Secretary, Buldana Industrial Association)',
      'Sankalp Tayde (Exporter, Khamgaon)',
      'Chetan Patil (General Manager, DIC Buldana)',
      'Rajesh Lahase (Editor & President, Maharashtra OBC Council)'
    ],
    impactMetrics: [
      { label: 'Event Focus', value: 'District Export Conclave' },
      { label: 'Government Partner', value: 'DIC Buldhana' },
      { label: 'Initiative', value: 'Azadi Ka Amrit Mahotsav' }
    ],
    images: [
      '/timeline_photos/1.buldhana export awarness program/IMG-20260206-WA0103.jpg',
    ],
  },
  {
    id: 'milestone-03',
    slug: 'malkapur-college-women-mentorship',
    milestoneNumber: 3,
    year: '2022',
    title: 'Women Entrepreneurship Mentorship Program – Malkapur',
    date: '15 February 2022',
    location: 'Malkapur, Maharashtra',
    venue: 'Padmashri Dr. V. B. Kolte College of Engineering, Malkapur',
    category: 'Mentorship & Education',
    badge: 'WOMEN IN BUSINESS',
    description:
      'Invited as keynote speaker by Padmashri Dr. V. B. Kolte College of Engineering, Malkapur, for the Entrepreneurship Mentorship Program for Women, delivering an in-depth session on "Entrepreneurship Mentorship Program: Current Opportunities for Women in Business" to empower aspiring women engineers and first-generation founders.',
    fullArticle: [
      'On 15 February 2022, Padmashri Dr. V. B. Kolte College of Engineering, Malkapur hosted a flagship Entrepreneurship Mentorship Program for Women under its dedicated Entrepreneurship Development Cell.',
      'Pragati Tayde, Founder & President of Namaste India Group, was invited as the distinguished Speaker to address hundreds of ambitious women engineering students and local women entrepreneurs on "Entrepreneurship Mentorship Program: Current Opportunities for Women in Business".',
      'The comprehensive keynote demystified the startup journey—covering how to identify viable business opportunities, structure detailed project reports (DPRs), access government credit schemes (such as PMEGP and Stand-Up India), and develop the resilience necessary to build scalable enterprises.',
      'Special appreciation was extended to Prof. T. V. Kamble (President), Prof. M. D. Patil (Vice President), and Dr. A. W. Kharche (Principal) for their forward-thinking commitment to fostering women leadership in technology and industry.'
    ],
    keyHighlights: [
      'Interactive masterclass on market identification, government subsidy schemes (PMEGP, CMEGP, Stand-Up India), and venture viability.',
      'Special appreciation to Prof. T. V. Kamble (President), Prof. M. D. Patil (Vice President), and Dr. A. W. Kharche (Principal) for hosting.',
      'One-on-one mentorship provided to women students and local founders on transitioning from technical ideas to commercial enterprises.',
      'Emphasized that women entrepreneurship creates sustainable employment and stronger community prosperity.'
    ],
    keyPeople: [
      'Prof. T. V. Kamble (President, Dr. V.B. Kolte College)',
      'Prof. M. D. Patil (Vice President)',
      'Dr. A. W. Kharche (Principal)',
      'Pragati Tayde (Speaker & President, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Participants', value: '250+ Women Students' },
      { label: 'Format', value: 'Keynote & Masterclass' },
      { label: 'Focus', value: 'Women Startups & Subsidies' }
    ],
    images: [
      '/timeline_photos/malkapur event/IMG-20260206-WA0036.jpg',
      '/timeline_photos/malkapur event/IMG-20260206-WA0108.jpg',
      '/timeline_photos/malkapur event/IMG-20260206-WA0113.jpg',
      '/timeline_photos/malkapur event/IMG_20220809_143443_109.webp',
      '/timeline_photos/malkapur event/WhatsApp Image 2026-08-28 at 8.57.30 PM.jpeg',
    ],
  },
  {
    id: 'milestone-04',
    slug: 'nepal-food-beverage-expo-2022',
    milestoneNumber: 4,
    year: '2022',
    title: 'Nepal Food & Beverage Expo 2022 – Indian MSME Delegation',
    date: '26 - 28 February 2022',
    location: 'Kathmandu / Chitwan, Nepal',
    venue: 'Bhrikutimandap Exhibition Centre & Chitwan Expo Grounds',
    category: 'International Trade Delegation',
    badge: 'CROSS-BORDER EXPO',
    description:
      'Landmark international trade initiative leading a delegation of 10+ Indian MSME companies from the food and beverage sector to the Nepal Food & Beverage Expo in Chitwan and Kathmandu. The event validated strong consumer and wholesale demand for Indian products in Nepal and initiated the permanent "Namaste Nepal" trade corridor.',
    fullArticle: [
      'From 26 to 28 February 2022, Namaste India Group undertook a pioneering cross-border trade delegation to Nepal, participating with 10+ Indian MSME enterprises in the Nepal Food & Beverage Expo held across Chitwan and Kathmandu.',
      'Conceived as an experimental international platform, the mission aimed to handhold Indian small-scale food processors, spice manufacturers, snack brands, and packaging machinery builders in testing overseas market waters.',
      'The response from the Nepalese business community and consumers was overwhelmingly positive. Participating Indian enterprises engaged in direct B2B matchmaking sessions with Nepalese supermarket distributors, FMCG wholesalers, and retail chain buyers.',
      'The triumphant outcome of this expedition proved that Indian MSMEs possess extraordinary global potential when equipped with institutional guidance, and it laid the foundation for the permanent "Namaste Nepal" bilateral trade corridor.'
    ],
    keyHighlights: [
      'Represented and supported 10+ Indian MSME food enterprises on an international platform.',
      'Gained first-hand consumer feedback and established direct contacts with Nepalese supermarket distributors and wholesale buyers.',
      'Formulated duty-free SAARC trade roadmaps for Indian spices, snacks, agro-processed foods, and packaging machinery.',
      'Paved the way for long-term bilateral distributor agreements between India and Nepal.'
    ],
    keyPeople: [
      'Indian MSME Delegations (10+ Companies)',
      'Nepalese FMCG Wholesalers & Importers Association',
      'Pragati Tayde (Delegation Lead)'
    ],
    impactMetrics: [
      { label: 'Indian MSMEs Showcased', value: '10+ Companies' },
      { label: 'Delegation City', value: 'Chitwan & Kathmandu' },
      { label: 'Trade Corridor', value: 'Namaste Nepal Desk' }
    ],
    images: [
      '/timeline_photos/nepal exibition/IMG-20260206-WA0043.jpg',
      '/timeline_photos/nepal exibition/IMG-20260206-WA0117.jpg',
      '/timeline_photos/nepal exibition/IMG-20260206-WA0118.jpg',
      '/timeline_photos/nepal exibition/IMG-20260206-WA0119.jpg',
      '/timeline_photos/nepal exibition/IMG_20220809_144011_810.webp',
      '/timeline_photos/nepal exibition/IMG_20220809_144131_176.webp',
      '/timeline_photos/nepal exibition/IMG_20220809_144243_473.webp',
    ],
  },
  {
    id: 'milestone-05',
    slug: 'ihrwa-human-rights-welfare-alliance',
    milestoneNumber: 5,
    year: '2022',
    title: 'IHRWA International Human Rights & Welfare Association Alliance',
    date: '5 March 2022',
    location: 'Maharashtra / National Forum',
    venue: 'National Conference & Awards Hall',
    category: 'Social Welfare & Ethics',
    badge: 'HUMAN RIGHTS & WELFARE',
    description:
      'Strategic alliance and recognition with the International Human Rights Welfare Association (IHRWA), advocating for fair labor practices, worker welfare, workplace safety for women, and inclusive socioeconomic empowerment across industrial MSME clusters in India.',
    fullArticle: [
      'On 5 March 2022, Namaste India Group formalized its strategic alliance and received recognition from the International Human Rights Welfare Association (IHRWA).',
      'The partnership underscored the vital principle that industrial development and MSME growth must be built upon the bedrock of human dignity, fair compensation, safe working conditions, and social welfare.',
      'Through this association, Namaste India Group committed to incorporating worker safety protocols, women-friendly industrial environments, and ethical labor standards across all affiliated MSME manufacturing units and industrial parks.',
      'The initiative also focused on extending legal and welfare support to unorganized rural artisans, daily-wage enterprise workers, and women self-help group members.'
    ],
    keyHighlights: [
      'Formal alignment with IHRWA on promoting worker dignity, workplace rights, and women safety in MSME units.',
      'Promoted ethical enterprise practices and social compliance for export-oriented manufacturers.',
      'Strengthened community outreach programs for marginalized artisans and rural youth.',
      'Advocated for fair wages, healthcare access, and inclusive workplace policies across industrial clusters.'
    ],
    keyPeople: [
      'IHRWA National Governing Council',
      'VUSF Social Welfare Directorate'
    ],
    impactMetrics: [
      { label: 'Alliance Date', value: '5 March 2022' },
      { label: 'Core Theme', value: 'Worker Dignity & Ethics' },
      { label: 'Scope', value: 'Pan-India MSME Clusters' }
    ],
    images: [
      '/timeline_photos/human right/IMG_20220809_143639_466.webp',
    ],
  },
  {
    id: 'milestone-06',
    slug: 'state-level-export-workshop-wtc-mumbai',
    milestoneNumber: 6,
    year: '2022',
    title: 'State Level Export Workshop & Export Awards – WTC Mumbai',
    date: '24 March 2022',
    location: 'Mumbai, Maharashtra',
    venue: 'World Trade Center (WTC), Cuffe Parade, Mumbai',
    category: 'State Trade & Awards',
    badge: 'WTC MUMBAI SUMMIT',
    description:
      'High-level participation alongside DIC Buldhana in the prestigious State Level Export Workshop & Export Awards held at World Trade Center (WTC) Mumbai, engaging with apex state trade authorities, export promotion councils, and foreign trade commissioners to accelerate export orientation for Maharashtra MSMEs.',
    fullArticle: [
      'On 24 March 2022, the World Trade Center (WTC) Mumbai hosted the high-profile State Level Export Workshop and Export Awards, bringing together Maharashtra’s leading industrialists, export promotion councils, port authorities, and district industrial officers.',
      'Namaste India Group participated prominently alongside representatives from DIC Buldhana, actively championing the export potential of tier-2 and tier-3 district enterprises.',
      'The sessions tackled critical operational aspects of global commerce—including single-window customs clearances, container freight subsidies, export credit insurance via ECGC, and compliance with European and Middle Eastern import standards.',
      'The platform provided valuable networking with apex state policymakers and reinforced Namaste India Group’s standing as an effective bridge between grassroots manufacturers and state-level trade promotion bodies.'
    ],
    keyHighlights: [
      'Comprehensive sessions on international trade compliance, container logistics, and state export subsidies.',
      'High-level networking with DIC Buldhana officials, state trade directors, and international logistics providers.',
      'Explored specialized trade schemes to support district manufacturers in reaching Middle Eastern and European buyers.',
      'Advocated for simplified export licensing and testing laboratories in rural Maharashtra districts.'
    ],
    keyPeople: [
      'Maharashtra Directorate of Industries Officials',
      'DIC Buldhana Senior Leadership',
      'World Trade Center Mumbai Executive Committee'
    ],
    impactMetrics: [
      { label: 'Venue', value: 'World Trade Center Mumbai' },
      { label: 'Delegates', value: '300+ State Exporters' },
      { label: 'Theme', value: 'State Export Acceleration' }
    ],
    images: [
      '/timeline_photos/mumbai export summit/IMG-20260206-WA0037.jpg',
    ],
  },
  {
    id: 'milestone-07',
    slug: 'india-serbia-buyer-seller-meet',
    milestoneNumber: 7,
    year: '2022',
    title: 'India-Serbia Buyer-Seller Meet & European Trade Links',
    date: '8 April 2022',
    location: 'Mumbai, Maharashtra',
    venue: 'International Trade Conclave Hall, Mumbai',
    category: 'B2B International Trade',
    badge: 'EUROPEAN TRADE CORRIDOR',
    description:
      'High-level B2B trade interaction in Mumbai with Serbian commercial delegates and European business buyers, exploring export channels for Indian manufactured goods, agricultural produce, spices, and engineering items through Balkan and Central European corridors.',
    fullArticle: [
      'On 8 April 2022, Namaste India Group convened a focused B2B Buyer-Seller Meet in Mumbai with visiting commercial delegates and buyers from Serbia and Eastern Europe.',
      'The meeting explored reciprocal trade possibilities between India and Serbia, focusing on sectors where Indian MSMEs enjoy high cost-competitiveness—such as organic spices, processed foods, auto components, textile garments, and specialized machinery.',
      'Discussions centered around utilizing Serbia as a strategic gateway into the broader European Union and Balkan markets, leveraging bilateral tariff arrangements and freight connections.',
      'The Serbian delegation expressed strong interest in collaborating with Indian suppliers represented under the Aspire Import-Export umbrella and Namaste India Group, paving the way for structured export supply contracts.'
    ],
    keyHighlights: [
      'Direct bilateral discussions on tariff rationalization and supply chain routes into Eastern and Central Europe.',
      'Showcased Indian MSME products with high European demand including textiles, organic foods, and machinery.',
      'Established foundational agreements for ongoing trade delegations and reciprocal B2B matchmaking.',
      'Explored Serbia as a strategic warehousing and distribution hub for Indian manufactured products in Europe.'
    ],
    keyPeople: [
      'Serbian Commercial Trade Delegation',
      'Indian Export Council Representatives',
      'Pragati Tayde (President, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Partner Country', value: 'Serbia & Balkans' },
      { label: 'Key Sectors', value: 'Agro, Spices & Engineering' },
      { label: 'Gateway Region', value: 'Central & Eastern Europe' }
    ],
    images: [
      '/timeline_photos/serbia buyer meet/IMG-20260206-WA0110.jpg',
    ],
  },
  {
    id: 'milestone-08',
    slug: 'india-australia-buyer-seller-meet',
    milestoneNumber: 8,
    year: '2022',
    title: 'India-Australia Buyer-Seller Meet & Bilateral Networking Forum',
    date: '15 November 2022',
    location: 'New Delhi, India',
    venue: 'International Trade Networking Forum, New Delhi',
    category: 'B2B International Trade',
    badge: 'OCEANIA TRADE DIALOGUE',
    description:
      'International buyer-seller networking meet in New Delhi connecting Indian entrepreneurs with visiting Australian delegates (Atik, Amanda, Harry, Max, Carrol) to exchange ideas, explore mutual business opportunities, and forge long-term Indo-Australian commercial relationships.',
    fullArticle: [
      'On 15 November 2022, Namaste India Group participated in a high-profile Buyer-Seller Meet in New Delhi connecting Indian exporters with visiting Australian corporate delegates, including Atik, Amanda, Harry, Max, and Carrol.',
      'Against the backdrop of the landmark India-Australia Economic Cooperation and Trade Agreement (ECTA), the meet offered unprecedented opportunities to explore duty-free export channels into Oceania.',
      'The interactive forum went beyond transactional buying and selling—facilitating deep cross-cultural exchanges, understanding Australian biosecurity and quality compliance benchmarks, and developing personal relationships that foster long-term commercial trust.',
      'Products showcased included organic food ingredients, sustainable handicrafts, precision engineering goods, and specialty apparel, receiving encouraging interest from the Australian delegation.'
    ],
    keyHighlights: [
      'Bilateral networking with Australian delegates exploring import-export partnerships and consumer goods distribution.',
      'Exchanged insights on Australian regulatory standards, bio-security compliance, and market entry routes.',
      'Emphasized long-term relationship building, cultural understanding, and mutual business growth.',
      'Leveraged opportunities under the India-Australia Economic Cooperation and Trade Agreement (ECTA).'
    ],
    keyPeople: [
      'Australian Trade Delegates (Atik, Amanda, Harry, Max, Carrol)',
      'Indian Exporting Enterprises & MSME Representatives',
      'Namaste India Trade Bureau'
    ],
    impactMetrics: [
      { label: 'Partner Nation', value: 'Australia (Oceania)' },
      { label: 'Agreement Context', value: 'India-Australia ECTA' },
      { label: 'Forum City', value: 'New Delhi' }
    ],
    images: [
      '/timeline_photos/austrelia buyer seller meet/WhatsApp Image 2026-08-28 at 9.57.15 PM.jpeg',
    ],
  },
  {
    id: 'milestone-09',
    slug: 'nepal-jewellery-fashion-runway-expo',
    milestoneNumber: 9,
    year: '2023',
    title: 'Jewellery Fashion Runway Expo 2023 – Kathmandu',
    date: '20 January 2023',
    location: 'Kathmandu, Nepal',
    venue: 'Hotel Yak & Yeti / Kathmandu Runway Pavilions',
    category: 'International Trade Exhibition',
    badge: 'LIFESTYLE & JEWELLERY',
    description:
      'International creative commerce showcase in Kathmandu bringing together artisans, jewellery designers, fashion houses, and retail buyers to explore expanding Indo-Nepal lifestyle, gems, and luxury trade linkages.',
    fullArticle: [
      'On 20 January 2023, the Jewellery Fashion Runway Expo 2023 took place in Kathmandu, Nepal, creating a vibrant convergence of creativity, craftsmanship, luxury lifestyle, and cross-border commercial opportunity.',
      'Namaste India Group participated with an esteemed contingent of Indian jewellery artisans, couture designers, and gemstone suppliers to explore the affluent Nepalese retail market.',
      'The expo provided direct B2B networking with Nepal’s leading showroom owners, bridal wear wholesalers, and lifestyle distributors, showcasing India’s rich heritage of handcrafted filigree, temple jewellery, and contemporary designer wear.',
      'The initiative highlighted that creative commerce serves as a potent vehicle for bilateral trade, fostering cultural ties while opening lucrative commercial channels for Indian designers.'
    ],
    keyHighlights: [
      'Promoted Indian traditional craftsmanship and modern jewellery designs in the premium Nepalese retail sector.',
      'Direct B2B matchmaking between Indian jewellery manufacturers and Kathmandu showroom owners.',
      'Created lasting business links combining fashion, design excellence, and cross-border commercial scale.',
      'Explored duty-free lifestyle retail distribution networks across Nepal’s major metropolitan markets.'
    ],
    keyPeople: [
      'Nepal Gems & Jewellery Association Leaders',
      'Kathmandu Fashion Runway Curators',
      'Indian Artisan Designers & Delegations'
    ],
    impactMetrics: [
      { label: 'Exhibition Sector', value: 'Gems, Jewellery & Fashion' },
      { label: 'Location', value: 'Kathmandu, Nepal' },
      { label: 'B2B Outcome', value: 'Showroom Retail Linkages' }
    ],
    images: [
      '/timeline_photos/nepal fashion and jwellary exibition/WhatsApp Image 2026-08-28 at 10.00.18 PM.jpeg',
      '/timeline_photos/nepal fashion and jwellary exibition/WhatsApp Image 2026-08-28 at 10.00.36 PM.jpeg',
      '/timeline_photos/nepal fashion and jwellary exibition/WhatsApp Image 2026-08-28 at 10.00.59 PM.jpeg',
      '/timeline_photos/nepal fashion and jwellary exibition/WhatsApp Image 2026-08-28 at 10.01.17 PM.jpeg',
    ],
  },
  {
    id: 'milestone-10',
    slug: 'republic-day-india-nepal-border',
    milestoneNumber: 10,
    year: '2023',
    title: '74th Republic Day Celebration with Indian Border Security Forces',
    date: '26 January 2023',
    location: 'India–Nepal Border',
    venue: 'Integrated Check Post & Border Outpost',
    category: 'National Pride & Bilateral Goodwill',
    badge: 'PATRIOTISM & UNITY',
    description:
      'Commemorating India’s 74th Republic Day at the India–Nepal border, interacting with and honoring Indian border security personnel for their steadfast dedication, discipline, and commitment to national defense and border peace.',
    fullArticle: [
      'On 26 January 2023, on the auspicious occasion of India’s 74th Republic Day, the Namaste India Group delegation celebrated this momentous national milestone at the India–Nepal border.',
      'The delegation had the distinct honour of meeting with the valiant Indian security personnel stationed at the border, expressing deep gratitude for their selfless service, discipline, and vigilance in protecting the motherland while facilitating smooth cross-border transit.',
      'The celebration witnessed patriotic fervor and joyful camaraderie with local border communities from both sides of the frontier, exemplifying the unique cultural and historical friendship between India and Nepal.',
      'The experience reinforced that economic development and secure borders go hand-in-hand, reminding everyone of the profound dedication of India\'s armed forces.'
    ],
    keyHighlights: [
      'Special interaction honoring Indian security personnel serving vigilantly at the international border.',
      'Celebrated patriotic unity and brotherhood with border communities from both India and Nepal.',
      'Reinforced the spirit of national pride, service, and cross-border harmony.',
      'Exchanged sweets and felicitated border guard jawans on India’s 74th Republic Day.'
    ],
    keyPeople: [
      'Indian Border Security Forces Officers & Jawans',
      'Local Border Community Leaders (India & Nepal)',
      'Namaste India Leadership'
    ],
    impactMetrics: [
      { label: 'Occasion', value: '74th Republic Day' },
      { label: 'Location', value: 'India-Nepal International Border' },
      { label: 'Core Spirit', value: 'Patriotism & Border Harmony' }
    ],
    images: [
      '/timeline_photos/nepal 26 jan/WhatsApp Image 2026-08-28 at 10.03.34 PM.jpeg',
      '/timeline_photos/nepal 26 jan/WhatsApp Image 2026-08-28 at 10.03.54 PM.jpeg',
      '/timeline_photos/nepal 26 jan/WhatsApp Image 2026-08-28 at 10.04.09 PM.jpeg',
    ],
  },
  {
    id: 'milestone-11',
    slug: 'india-vietnam-buyer-seller-meet',
    milestoneNumber: 11,
    year: '2023',
    title: 'India-Vietnam Buyer-Seller Meet & Bilateral Delegation',
    date: '22 October 2023',
    location: 'Mumbai, Maharashtra',
    venue: 'Taj Santacruz / Mumbai Business Centre',
    category: 'B2B International Trade',
    badge: 'ASEAN EXPANSION',
    description:
      'Organized the India–Vietnam Business Delegation and B2B matchmaking conclave in Mumbai, bringing together 30+ manufacturers, agro-exporters, and chemical traders with Vietnamese corporate buyers to capitalize on the rapidly growing $15B bilateral trade corridor.',
    fullArticle: [
      'On 22 October 2023, Namaste India Group successfully organized a landmark India–Vietnam Business Delegation and B2B Buyer-Seller Meet in Mumbai.',
      'With bilateral commerce between India and Vietnam surpassing $14.8 Billion, the meet served as an essential platform for Indian MSMEs to tap into one of Southeast Asia\'s fastest-growing manufacturing economies.',
      'Over 30 Indian manufacturers, agro-commodity exporters, animal feed suppliers, chemical producers, and engineering firms held intensive one-on-one negotiations with visiting Vietnamese trade representatives and importers.',
      'The delegation yielded multiple commercial MOUs, product trial shipments, and long-term procurement partnerships, firmly establishing Namaste India Group\'s reputation for orchestrating high-yield ASEAN trade missions.'
    ],
    keyHighlights: [
      'High-impact B2B buyer-seller sessions across agricultural commodities, machinery, pharmaceuticals, and chemicals.',
      'Facilitated direct commercial discussions and product samplings for Vietnamese corporate delegates.',
      'Strengthened long-term supply agreements connecting Indian MSME producers with Southeast Asian distribution chains.',
      'Organized factory site visits and supplier verification audits for visiting Vietnamese trade representatives.'
    ],
    keyPeople: [
      'Vietnamese Commercial Trade Delegation',
      'Indian Agro & Chemical Exporters Association',
      'Pragati Tayde (Delegation Convener)'
    ],
    impactMetrics: [
      { label: 'Bilateral Corridor', value: 'India-Vietnam ($14.8B)' },
      { label: 'Participating MSMEs', value: '30+ Enterprises' },
      { label: 'Key Sectors', value: 'Agro, Chemicals, Pharma & Metals' }
    ],
    images: [
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0092.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0095.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0097.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0100.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0101.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0104.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0105.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0106.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0107.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0112.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0131.jpg',
    ],
  },
  {
    id: 'milestone-12',
    slug: 'pune-state-export-awards-mou',
    milestoneNumber: 12,
    year: '2024',
    title: 'State Export Awards & MoU Ceremony with Industries Minister',
    date: '8 February 2024',
    location: 'Pune, Maharashtra',
    venue: 'Hotel TipTop International, Wakad, Pune',
    category: 'Government & Awards',
    badge: 'HON. SHRI UDAY SAMANT',
    description:
      'Participated in the prestigious State Export Awards and MoU Signing Ceremony, graced by Hon. Shri Uday Samant, Minister of Industries, Government of Maharashtra, celebrating top exporters and advancing state policies to support MSME global expansion.',
    fullArticle: [
      'On 8 February 2024, the prestigious State Export Awards and MoU Signing Ceremony was convened at Hotel TipTop International in Pune, graced by the esteemed presence of Hon. Shri Uday Samant, Minister of Industries, Government of Maharashtra.',
      'The grand state ceremony celebrated Maharashtra’s most outstanding industrial exporters and recognized enterprises driving foreign exchange earnings, technological innovation, and district-level industrialization.',
      'Namaste India Group was honoured to participate in this distinguished gathering, engaging with state ministers, industry commissioners, and senior corporate captains on strengthening export infrastructure.',
      'The event witnessed the formal signing of strategic MoUs aimed at establishing export facilitation cells in tier-2 industrial clusters, lowering regulatory compliance friction for MSMEs, and boosting "Make in Maharashtra" products on the world stage.'
    ],
    keyHighlights: [
      'Graced by Hon. Shri Uday Samant, Minister of Industries, Government of Maharashtra.',
      'Celebrated leading industrial exporters from across Maharashtra and witnessed strategic state-level MoU signings.',
      'Advanced collaborative frameworks to promote district-level MSME export readiness and ease of international trade.',
      'Reinforced commitment to expanding Maharashtra’s export share in national GDP.'
    ],
    keyPeople: [
      'Hon. Shri Uday Samant (Minister of Industries, Government of Maharashtra)',
      'Development Commissioner & Senior IAS Officers',
      'Namaste India Executive Leadership'
    ],
    impactMetrics: [
      { label: 'Event', value: 'State Export Awards' },
      { label: 'Chief Guest', value: 'Hon. Industries Minister' },
      { label: 'Location', value: 'Pune, Maharashtra' }
    ],
    images: [
      '/timeline_photos/uday sawant award/IMG-20250614-WA0052.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0054.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0065.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0066.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0073.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0074.jpg',
    ],
  },
  {
    id: 'milestone-13',
    slug: 'gram-vikas-sanstha-rural-empowerment',
    milestoneNumber: 13,
    year: '2024',
    title: 'Gram Vikas Sanstha Rural Empowerment Alliance',
    date: '22 February 2024',
    location: 'Chhatrapati Sambhajinagar, Maharashtra',
    venue: 'Gram Vikas Sanstha Headquarters & Rural Training Center',
    category: 'Rural Development & Agriculture',
    badge: 'RURAL EMPOWERMENT',
    description:
      'Strategic partnership and introduction with Gram Vikas Sanstha, Sambhajinagar (initiated by Shri Narhari Shivpure under the guidance of Senior Freedom Fighter Shri B. D. Patil) focused on sustainable agriculture, water conservation, women empowerment, and grassroots rural enterprise.',
    fullArticle: [
      'On 22 February 2024, Namaste India Group established a strategic rural transformation alliance with Gram Vikas Sanstha, Sambhajinagar—an organization founded under the venerable guidance of Senior Freedom Fighter Shri B. D. Patil and initiated by Shri Narhari Shivpure.',
      'With agriculture serving as the backbone of rural livelihood, Indian villages face pressing challenges such as groundwater depletion, unremunerative crop pricing, lack of post-harvest storage, and limited economic opportunities for rural women.',
      'The partnership combines Gram Vikas Sanstha\'s deep grassroots credibility in watershed management and farmer mobilization with Namaste India Group’s expertise in value addition, brand development, and market linkages.',
      'Together, the organizations launched targeted programs to aggregate organic produce, establish village-level processing micro-units, and empower women Self-Help Groups (SHGs) with direct market access.'
    ],
    keyHighlights: [
      'Comprehensive collaboration addressing water scarcity, farmer distress, and rural youth employment.',
      'Supporting village-level women Self-Help Groups (SHGs) with business counseling and marketing assistance.',
      'Creating direct market linkages for agricultural produce and farm-allied products.',
      'Honoring the legacy of Senior Freedom Fighter Shri B. D. Patil through dedicated community upliftment.'
    ],
    keyPeople: [
      'Shri Narhari Shivpure (Founder & Lead, Gram Vikas Sanstha)',
      'Legacy of Senior Freedom Fighter Shri B. D. Patil',
      'Namaste India Rural Development Directorate'
    ],
    impactMetrics: [
      { label: 'Initiative Focus', value: 'Rural & Agri Empowerment' },
      { label: 'Headquarters', value: 'Chhatrapati Sambhajinagar' },
      { label: 'Core Pillars', value: 'Water, Agriculture & Women SHGs' }
    ],
    images: [
      '/timeline_photos/gram vikash santha/WhatsApp Image 2026-08-28 at 10.12.42 PM.jpeg',
    ],
  },
  {
    id: 'milestone-14',
    slug: 'leadership-induction-bhushan-shinde',
    milestoneNumber: 14,
    year: '2024',
    title: 'Leadership Induction: Mr. Bhushan Shinde (MD & Namaste India Executive Director)',
    date: '23 February 2024',
    location: 'Navi Mumbai, Maharashtra',
    venue: 'Namaste India Corporate Headquarters, Vashi',
    category: 'Leadership & Skill Development',
    badge: 'LEADERSHIP INDUCTION',
    description:
      'Welcomed Mr. Bhushan Shinde, Managing Director of Namaste India (Certified Six Sigma Black Belt - ASQ), teaming with Mr. Adittya Aher to bridge education with industry demand through skill development and digital marketing mastery.',
    fullArticle: [
      'On 23 February 2024, Namaste India Group announced the induction of Mr. Bhushan Shinde as Managing Director, marking a major leap forward in the organization’s operational capability and educational vision.',
      'A Certified Six Sigma Black Belt by the American Society for Quality (ASQ) with over a decade of continuous improvement and process optimization expertise, Bhushan brings high-level strategic thinking to grassroots enterprise.',
      'Alongside Mr. Adittya Aher, Bhushan is pioneering a mission under Namaste India to transform digital education—bridging the gap between academic curricula and actual industry demands across digital marketing, marketing automation, e-commerce, and enterprise analytics.',
      'Backed by 5+ years of digital marketing execution for 100+ corporate clients, Bhushan’s leadership strengthens Namaste India Group’s capacity to upskill youth and help MSMEs build formidable digital sales funnels.'
    ],
    keyHighlights: [
      'Infusing Lean Six Sigma operational excellence into MSME counseling and business incubation systems.',
      'Developing practical, industry-oriented training programs in digital marketing, branding, and e-commerce for 100+ clients.',
      'Spearheading student and youth skill development initiatives to create industry-ready professionals across India.',
      'Fostering a mindset of process excellence, data-driven marketing, and relentless innovation.'
    ],
    keyPeople: [
      'Mr. Bhushan Shinde (Managing Director & Executive Director, Namaste India)',
      'Mr. Adittya Aher (Partner & Digital Growth Lead)',
      'Pragati Tayde (President, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Leadership Role', value: 'Managing Director' },
      { label: 'Credentials', value: 'ASQ Six Sigma Black Belt' },
      { label: 'Enterprise Impact', value: '100+ Clients & Youth Upskilling' }
    ],
    images: [
      '/timeline_photos/meet bhushan/WhatsApp Image 2026-08-28 at 10.15.24 PM.jpeg',
    ],
  },
  {
    id: 'milestone-15',
    slug: 'wotr-farmers-fpo-buyer-seller-meet',
    milestoneNumber: 15,
    year: '2024',
    title: 'WOTR Farmers & FPO Buyer-Seller Meet',
    date: '12 March 2024',
    location: 'Maharashtra',
    venue: 'Agribusiness Innovation Center & FPO Marketplace',
    category: 'Agriculture & FPO Linkages',
    badge: 'FPO MARKET LINKAGE',
    description:
      'Participated in the high-impact Buyer-Seller Meet organized by Watershed Organisation Trust (WOTR), connecting Farmer Producer Organizations (FPOs) and women farmers directly with premier agribusiness buyers to open domestic and export market linkages for Chana, Maize, and fresh vegetables.',
    fullArticle: [
      'On 12 March 2024, Namaste India Group participated in a high-impact Buyer–Seller Meet organized by the renowned Watershed Organisation Trust (WOTR), bringing together Farmer Producer Organizations (FPOs), women farmers, institutional buyers, and agricultural technology innovators on a common platform.',
      'The summit focused on eliminating exploitative middlemen by creating direct commercial links between grassroots farmer cooperatives and prominent agribusiness buyers including Farmart, Agrobid, Agribazaar, Two Brothers Organic Farms, DeHaat, Dnyaneshwar Agro Industry, and NBHC.',
      'Intensive breakout sessions addressed strategic pre-season procurement planning for the upcoming Chana (Bengal Gram) and Maize harvests, alongside cold-chain logistics for perishable vegetables.',
      'Special appreciation was extended to Mr. Abhijeet Shinde and Mr. Yogesh Patil for their dedicated hands-on mentorship of FPOs, empowering rural farmers with real-time market intelligence and export contract opportunities.'
    ],
    keyHighlights: [
      'Engaged with leading agri-buyers including Farmart, Agrobid, Agribazaar, Two Brothers, DeHaat, and NBHC.',
      'Strategic planning for upcoming crop harvest cycles, post-harvest processing, and tackling vegetable marketing hurdles.',
      'Special appreciation to Mr. Abhijeet Shinde and Mr. Yogesh Patil for dedicated grassroots handholding of FPOs.',
      'Opened institutional procurement and export linkages for Chana, Maize, and organic vegetables.'
    ],
    keyPeople: [
      'Mr. Abhijeet Shinde & Mr. Yogesh Patil (Agribusiness Leads)',
      'Leadership of Farmart, Agrobid, Agribazaar, DeHaat & Two Brothers',
      'Women Farmers & FPO Board Representatives'
    ],
    impactMetrics: [
      { label: 'Partner Organization', value: 'Watershed Organisation Trust (WOTR)' },
      { label: 'Buyer Network', value: '7+ Institutional Agribusinesses' },
      { label: 'Crops Targeted', value: 'Chana, Maize & Fresh Vegetables' }
    ],
    images: [
      '/timeline_photos/woter foundation/IMG-20250614-WA0082.jpg',
      '/timeline_photos/woter foundation/IMG-20250614-WA0083.jpg',
      '/timeline_photos/woter foundation/IMG-20250614-WA0094.jpg',
      '/timeline_photos/woter foundation/IMG-20250614-WA0101.jpg',
      '/timeline_photos/woter foundation/IMG-20250614-WA0102.jpg',
    ],
  },
  {
    id: 'milestone-16',
    slug: 'asia-bankers-club-investment-meet',
    milestoneNumber: 16,
    year: '2024',
    title: 'Asia Bankers Club International Investment Meet',
    date: '15 July 2024',
    location: 'International Investment Desk',
    venue: 'Executive Boardroom & Virtual Investment Suite',
    category: 'Global Finance & Investment',
    badge: 'GLOBAL CAPITAL GATEWAY',
    description:
      'Insightful bilateral dialogue with Asia Bankers Club exploring high-yield foreign investment opportunities, physical asset investments, global business networks, and international residency & citizenship planning across UAE and Thailand for Indian investors and entrepreneurs.',
    fullArticle: [
      'On 15 July 2024, Namaste India Group conducted an insightful strategic dialogue with the Asia Bankers Club to explore lucrative global investment, asset allocation, and residency planning corridors for the Indian business community.',
      'The high-level discussions covered key global commercial hubs—particularly the UAE (Dubai & Abu Dhabi) and Thailand (Bangkok & Phuket)—focusing on physical asset acquisition, prime commercial real estate, institutional private equity, and cross-border wealth management.',
      'The dialogue also provided valuable insights into international residency and citizenship planning, offshore corporate structuring, and duty-free business expansion for Indian high-net-worth entrepreneurs.',
      'For Namaste India Group, the collaboration serves as a vital bridge connecting members with premier international capital, institutional knowledge, and global market diversification.'
    ],
    keyHighlights: [
      'Exploring cross-border wealth management, commercial property investments, and overseas business setups.',
      'Structuring bilateral investor corridors between India, UAE, and Thailand.',
      'Creating access for Namaste India members to global institutional capital and high-growth asset classes.',
      'Consulting on international residency, corporate headquarters establishment, and offshore wealth diversification.'
    ],
    keyPeople: [
      'Asia Bankers Club Executive Leadership',
      'Namaste Global Investment Desk Advisors',
      'High-Net-Worth Indian Enterprise Investors'
    ],
    impactMetrics: [
      { label: 'Investment Hubs', value: 'UAE (Dubai) & Thailand (Bangkok)' },
      { label: 'Focus Areas', value: 'Real Estate, PE & Residency Planning' },
      { label: 'Strategic Partner', value: 'Asia Bankers Club' }
    ],
    images: [
      '/timeline_photos/asian banking club/WhatsApp Image 2026-08-28 at 10.18.58 PM.jpeg',
    ],
  },
  {
    id: 'milestone-17',
    slug: 'india-thailand-buyer-seller-meet',
    milestoneNumber: 17,
    year: '2024',
    title: 'India-Thailand Buyer-Seller Meet & Trade Forum',
    date: '7 August 2024',
    location: 'Mumbai / Bangkok Corridor',
    venue: 'Indo-Thai Business Convention Centre, Mumbai',
    category: 'B2B International Trade',
    badge: 'INDO-THAI CORRIDOR',
    description:
      'Bilateral B2B matchmaking conference connecting Indian manufacturers and exporters with Thai corporate buyers to discuss import-export synergies, consumer products, packaging machinery, and Southeast Asian distribution networks.',
    fullArticle: [
      'On 7 August 2024, Namaste India Group hosted the India–Thailand Buyer-Seller Meet in Mumbai, convening a distinguished delegation of Thai commercial buyers, wholesale importers, and supply chain operators.',
      'Thailand represents ASEAN\'s second-largest economy and a dynamic trade hub for FMCG, food processing machinery, packaging automation, and automotive components.',
      'The meet provided structured one-on-one B2B matching for Indian manufacturers looking to expand their footprint across the Greater Mekong Subregion (Thailand, Vietnam, Cambodia, Laos).',
      'Discussions covered reciprocal trade advantages under the ASEAN-India Free Trade Area (AIFTA), packaging standardizations for tropical export, and laying the logistical groundwork for participating in upcoming industrial fairs in Bangkok.'
    ],
    keyHighlights: [
      'Targeted B2B matchmaking across food processing, spices, FMCG, and packaging machinery.',
      'Explored cross-border logistics routes and tariff advantages under ASEAN-India trade frameworks.',
      'Paved the way for Indian MSME delegations to participate in upcoming Thai industrial exhibitions.',
      'Formulated direct distribution agreements with leading Thai commercial trading houses.'
    ],
    keyPeople: [
      'Thai Importers & Retail Distribution Delegates',
      'Indian Packaging & Food Machinery Exporters',
      'Namaste Thailand Trade Desk Officers'
    ],
    impactMetrics: [
      { label: 'Bilateral Corridor', value: 'India-Thailand ($17.7B)' },
      { label: 'Sectors', value: 'Packaging, Food Tech & FMCG' },
      { label: 'Target Market', value: 'ASEAN & Greater Mekong' }
    ],
    images: [
      '/timeline_photos/thailand buyer seller meet/IMG-20250614-WA0090.jpg',
      '/timeline_photos/thailand buyer seller meet/IMG-20250614-WA0103.jpg',
      '/timeline_photos/thailand buyer seller meet/IMG-20260206-WA0045.jpg',
      '/timeline_photos/thailand buyer seller meet/IMG-20260206-WA0050.jpg',
      '/timeline_photos/thailand buyer seller meet/IMG-20260206-WA0084.jpg',
    ],
  },
  {
    id: 'milestone-18',
    slug: 'money-expo-mumbai-2024',
    milestoneNumber: 18,
    year: '2024',
    title: 'Money Expo Mumbai 2024 – Global Finance & Investment',
    date: '18 August 2024',
    location: 'Mumbai, Maharashtra',
    venue: 'Jio World Convention Centre, BKC, Mumbai',
    category: 'Global Finance & Fintech',
    badge: 'FINTECH & CAPITAL',
    description:
      'High-impact networking with international financial delegates and global investors from Malaysia, Singapore, Russia, Ukraine, and Dubai (UAE), unlocking cross-border investment capital, private equity, and fintech solutions for Indian MSMEs.',
    fullArticle: [
      'On 18 August 2024, the prestigious Money Expo Mumbai was held at the state-of-the-art Jio World Convention Centre in BKC, Mumbai, gathering the world\'s leading financial institutions, fintech innovators, asset managers, and venture capitalists.',
      'Namaste India Group participated actively to establish high-value international financial connections for its member enterprise network.',
      'The forum opened doors to commercial and investment partnerships across key global markets including Malaysia, Singapore, Dubai (UAE), Russia, and Ukraine.',
      'Discussions centered on cross-border trade finance, alternative credit scoring for MSMEs, digital multi-currency settlement systems, and venture funding for high-growth Indian startups.'
    ],
    keyHighlights: [
      'Extensive networking with international institutional investors and financial services providers.',
      'Opened business expansion possibilities across Malaysia, Singapore, Dubai (UAE), Russia, and Eastern Europe.',
      'Deep-dive sessions on global trade finance, currency hedging, and cross-border payment systems.',
      'Connected MSMEs with alternative lending platforms and private equity investors.'
    ],
    keyPeople: [
      'International FinTech Founders & Asset Managers',
      'Financial Delegates from Malaysia, Singapore & Dubai',
      'Namaste India Financial Services Cell'
    ],
    impactMetrics: [
      { label: 'Venue', value: 'Jio World Convention Centre, BKC' },
      { label: 'International Corridors', value: '5+ Global Financial Hubs' },
      { label: 'Focus', value: 'FinTech, Trade Finance & MSME Credit' }
    ],
    images: [
      '/timeline_photos/money expo/IMG-20260206-WA0093.jpg',
      '/timeline_photos/money expo/IMG-20260206-WA0094.jpg',
    ],
  },
  {
    id: 'milestone-19',
    slug: 'india-nepal-agri-nimbus-collaboration',
    milestoneNumber: 19,
    year: '2024',
    title: 'India-Nepal Agri-Enterprise Collaboration with Nimbus',
    date: '25 November 2024',
    location: 'Kathmandu, Nepal',
    venue: 'Nimbus Corporate Headquarters & Agri-Complex, Kathmandu',
    category: 'Agri-Business & Bilateral Trade',
    badge: 'AGRI-VALUE CHAIN',
    description:
      'High-level cross-border agriculture conference in Kathmandu with Nimbus, one of Nepal’s largest and most respected agribusiness conglomerates, forging joint initiatives in agro-inputs, farmer training, animal nutrition, and crop value chains.',
    fullArticle: [
      'On 25 November 2024, Namaste India Group conducted high-level bilateral business discussions in Kathmandu with Nimbus, one of Nepal’s largest and most prestigious agribusiness conglomerates.',
      'Nimbus is an industry pioneer in animal nutrition, poultry feed, edible oils, grain processing, and agricultural inputs with an extensive supply chain reaching thousands of farmers across Nepal.',
      'The summit focused on establishing collaborative value-chain corridors—including supplying high-quality Indian feed ingredients, hybrid seeds, agricultural machinery, and modern organic bio-fertilizers.',
      'The collaboration marks a major step forward in strengthening India–Nepal agricultural ties, combining technological capabilities to benefit farmers, food producers, and agribusiness entrepreneurs in both nations.'
    ],
    keyHighlights: [
      'Strategic partnership discussions with Nimbus leadership on modernizing agriculture in South Asia.',
      'Identified joint opportunities in animal nutrition, feed manufacturing, seeds, and farm machinery supply.',
      'Committed to multi-project collaborations supporting farmers and agricultural entrepreneurs in both nations.',
      'Formulated supply chain protocols for cross-border grain processing and edible oil logistics.'
    ],
    keyPeople: [
      'Nimbus Group Senior Executive Leadership',
      'Agri-Input Manufacturers & Exporters from India',
      'Namaste Nepal Agricultural Taskforce'
    ],
    impactMetrics: [
      { label: 'Corporate Partner', value: 'Nimbus (Nepal Agri Conglomerate)' },
      { label: 'Location', value: 'Kathmandu, Nepal' },
      { label: 'Impact Area', value: 'Farmer Supply Chain & Nutrition' }
    ],
    images: [
      '/timeline_photos/nepal meet/IMG-20260206-WA0074.jpg',
      '/timeline_photos/nepal meet/IMG-20260206-WA0079.jpg',
      '/timeline_photos/nepal meet/IMG-20260206-WA0082.jpg',
    ],
  },
  {
    id: 'milestone-20',
    slug: 'nepal-cni-cniyef-landmark-mou',
    milestoneNumber: 20,
    year: '2024',
    title: 'MoU with Confederation of Nepalese Industries Young Entrepreneurs Forum (CNIYEF)',
    date: '30 November 2024',
    location: 'Kathmandu, Nepal',
    venue: 'CNI Apex Secretariat, Trade Tower, Kathmandu',
    category: 'International MoU & Youth Enterprise',
    badge: '150+ CORPORATE ALLIANCE',
    description:
      'Signed historic Memorandum of Understanding (MoU) with the Confederation of Nepalese Industries Young Entrepreneurs Forum (CNIYEF), creating an active direct bridge between Namaste India Group and 150 top industrial companies in Nepal.',
    fullArticle: [
      'On 30 November 2024, a landmark milestone in India–Nepal bilateral entrepreneurship was achieved with the formal signing of a Memorandum of Understanding (MoU) between Namaste India Group and the Confederation of Nepalese Industries Young Entrepreneurs Forum (CNIYEF) in Kathmandu.',
      'CNIYEF is the youth wing of Nepal’s apex industry chamber (CNI), bringing together the next-generation founders, managing directors, and innovators leading over 150 of Nepal’s top corporate conglomerates and industrial houses.',
      'The historic MoU establishes a continuous institutional highway for cross-border venture capital, technology transfer, joint manufacturing ventures, and bilateral trade missions.',
      'Through this alliance, Namaste India Group members gain privileged access to high-impact B2B networking, factory collaborations, and market entry support across Nepal\'s rapidly expanding industrial sectors.'
    ],
    keyHighlights: [
      'Formal bilateral alliance bridging Namaste India network with 150 leading corporate houses in Nepal.',
      'Joint entrepreneur exchange programs, technology transfer, and startup incubation corridors.',
      'Strengthened cross-border investment, innovation, and sustainable enterprise development between India and Nepal.',
      'Signed by apex leaders from both organizations, creating a permanent bilateral facilitation desk.'
    ],
    keyPeople: [
      'CNIYEF Executive Governing Board Members',
      'Confederation of Nepalese Industries (CNI) Leadership',
      'Pragati Tayde (President, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Alliance Partner', value: 'CNIYEF (Apex Nepal Industry)' },
      { label: 'Corporate Network', value: '150+ Top Nepalese Companies' },
      { label: 'Scope', value: 'Bilateral Ventures & Technology' }
    ],
    images: [
      '/timeline_photos/nepal cni/IMG-20260206-WA0089.jpg',
    ],
  },
  {
    id: 'milestone-21',
    slug: 'india-turkiye-b2b-meet-fieo',
    milestoneNumber: 21,
    year: '2025',
    title: 'India-Türkiye B2B Meet with 25 Turkish Companies',
    date: '14 January 2025',
    location: 'Mumbai, Maharashtra',
    venue: 'Grand Ballroom, The Lalit / FIEO Conclave Hall, Mumbai',
    category: 'B2B International Trade',
    badge: 'FIEO & BRAIN TEAM SCIENCE',
    description:
      'Organized in partnership with FIEO (Federation of Indian Export Organisations) and Brain Team Science Association with 25 visiting Turkish companies in Mumbai, enabling Indian entrepreneurs and exporters to interact directly with Turkish businesses across key industrial sectors.',
    fullArticle: [
      'On 14 January 2025, Namaste India Group participated in a high-profile international B2B meet in Mumbai organized in close collaboration with the Federation of Indian Export Organisations (FIEO) and the Brain Team Science Association, hosting a multi-sectoral delegation of 25 prominent Turkish companies.',
      'The conclave was honoured by the esteemed presence of Mr. Mustafa Furkan Albayrak (Commercial Attaché, Consulate General of the Republic of Türkiye, Mumbai), Mr. Paresh K. Mehta (Regional Chairman - Western Region, FIEO), and Mr. Tevfik Donmez (Leader of the Turkish Delegation).',
      'The B2B discussions spanned diverse high-value sectors—including industrial machinery, precision auto parts, textile raw materials, construction and ceramics, specialty chemicals, and FMCG.',
      'The meeting facilitated direct commercial interactions between Indian exporters and Turkish buyers, generating substantial trade inquiries and laying the groundwork for long-term Indo-Turkish manufacturing partnerships.'
    ],
    keyHighlights: [
      'Graced by Mr. Mustafa Furkan Albayrak (Commercial Attaché, Consulate General of the Republic of Türkiye, Mumbai).',
      'Key leadership from Mr. Paresh K. Mehta (Regional Chairman - WR, FIEO) and Mr. Tevfik Donmez (Leader of Turkish Delegation).',
      'High-volume B2B discussions across machinery, auto parts, textiles, construction materials, and FMCG.',
      'Facilitated trade matching with 25 leading corporate enterprises from Istanbul, Ankara, and Izmir.'
    ],
    keyPeople: [
      'Mr. Mustafa Furkan Albayrak (Commercial Attaché, Consulate General of Türkiye, Mumbai)',
      'Mr. Paresh K. Mehta (Regional Chairman - WR, FIEO)',
      'Mr. Tevfik Donmez (Leader of Turkish Delegation)',
      'Pragati Tayde (President, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Visiting Delegation', value: '25 Turkish Companies' },
      { label: 'Co-Organizers', value: 'FIEO & Brain Team Science' },
      { label: 'Trade Corridor', value: 'India-Türkiye Commercial Desk' }
    ],
    images: [
      '/timeline_photos/turkey business deligation mumbaio/IMG-20260206-WA0090.jpg',
      '/timeline_photos/turkey business deligation mumbaio/IMG-20260206-WA0091.jpg',
    ],
  },
  {
    id: 'milestone-22',
    slug: 'turkiye-consulate-mou-signing',
    milestoneNumber: 22,
    year: '2025',
    title: 'Diplomatic Bilateral Meeting & MoUs with Türkiye Consulate',
    date: '14 January 2025',
    location: 'Mumbai, Maharashtra',
    venue: 'Consulate General of the Republic of Türkiye, Maker Chambers, Nariman Point, Mumbai',
    category: 'Diplomatic & International Trade',
    badge: 'DIPLOMATIC ALLIANCE',
    description:
      'Formal diplomatic engagement with Mr. Mustafa Furkan Albayrak, Commercial Attaché at the Consulate General of the Republic of Türkiye in Mumbai, accompanied by the signing of multiple strategic MoUs with Turkish companies to expand trade, exports, and mutual investment.',
    fullArticle: [
      'In tandem with the B2B delegation on 14 January 2025, Namaste India Group conducted a formal diplomatic meeting with Mr. Mustafa Furkan Albayrak, Commercial Attaché at the Consulate General of the Republic of Türkiye in Mumbai.',
      'The diplomatic discussions centered on institutionalizing bilateral trade facilitation—simplifying commercial visa processing, coordinating joint participation in major industrial exhibitions in Istanbul, and opening direct investment corridors between Turkish and Indian enterprises.',
      'A highlight of the engagement was the formal signing of multiple MoUs with Turkish corporate entities, creating a concrete foundation for bilateral joint ventures, technology sharing, and long-term commercial cooperation.',
      'The milestone represents another vital pillar in Namaste India Group’s mission to connect Indian entrepreneurs with high-potential Eurasian and Mediterranean markets.'
    ],
    keyHighlights: [
      'Formalized bilateral trade facilitation protocols with the Turkish Commercial Attaché Office.',
      'Signed multiple strategic MoUs creating a foundation for joint ventures and reciprocal trade delegations.',
      'Established streamlined support for Indian MSMEs entering Turkish and Mediterranean markets.',
      'Planned reciprocal Indian MSME trade delegations to upcoming international expos in Istanbul and Izmir.'
    ],
    keyPeople: [
      'Mr. Mustafa Furkan Albayrak (Commercial Attaché, Consulate General of Türkiye, Mumbai)',
      'Turkish Commercial Delegation Leaders',
      'Pragati Tayde (President, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Diplomatic Post', value: 'Consulate General of Türkiye' },
      { label: 'Outcome', value: 'Multiple Corporate MoUs Signed' },
      { label: 'Region', value: 'Eurasia & Mediterranean' }
    ],
    images: [
      '/timeline_photos/turkey counsulaet/IMG-20250614-WA0100.jpg',
    ],
  },
  {
    id: 'milestone-23',
    slug: 'thailand-industrial-fair-india-pavilion',
    milestoneNumber: 23,
    year: '2025',
    title: 'Thailand Industrial Fair & Food Pack Asia 2025 – India Pavilion',
    date: '18 February 2025',
    location: 'Bangkok, Thailand',
    venue: 'BITEC (Bangkok International Trade & Exhibition Centre), Thailand',
    category: 'International Trade Exhibition',
    badge: 'EMBASSY OF INDIA PARTNER',
    description:
      'Supported the Embassy of India, Bangkok as Partner Association for the India Pavilion at Thailand Industrial Fair & Food Pack Asia 2025 under Ambassador H.E. Shri Nagesh Singh, showcasing 23 Indian MSMEs and forging institutional ties with apex Thai chambers.',
    fullArticle: [
      'From 18 to 21 February 2025, Namaste India Group and Vishwa Udyam Sahayta Foundation (VUSF) served as an official Partner Association supporting the Embassy of India in Bangkok for the landmark India Pavilion at Thailand Industrial Fair & Food Pack Asia 2025, hosted at BITEC Bangkok.',
      'Under the visionary leadership of H.E. Shri Nagesh Singh, Ambassador of India to the Kingdom of Thailand, the India Pavilion served as a prestigious global showcase for 23 Indian MSMEs exhibiting advanced food processing, industrial packaging, factory automation, and engineering technologies.',
      'Special appreciation was extended to Shri Bhaskar Kalra for exceptional on-ground coordination of B2B matchmaking, lead generation, and corporate meetings.',
      'The delegation engaged in high-level dialogues with key leaders of the Indo-Thai business ecosystem, including Shri Sushil Dhanuka (President, India-Thai Chamber of Commerce - ITCC), Dr. Nimnual Piewthongngam (Vice Chairperson, Joint Foreign Chambers of Commerce in Thailand - JFCCT), and Mr. Varodom Pitakanonda (Thai Chamber of Commerce and Honorary Consul of Hungary in Chiang Mai).',
      'The monumental initiative firmly cemented Namaste India Group’s capability to execute government-aligned international trade pavilions on the world stage.'
    ],
    keyHighlights: [
      'Partner Association to the Embassy of India, Bangkok under leadership of Ambassador H.E. Shri Nagesh Singh.',
      'Showcased 23 Indian MSMEs in food processing, packaging, automation, and industrial machinery.',
      'High-level meetings with Shri Sushil Dhanuka (President, ITCC), Dr. Nimnual Piewthongngam (Vice Chair, JFCCT), and Mr. Varodom Pitakanonda (Thai Chamber of Commerce & Honorary Consul of Hungary).',
      'Appreciation to Shri Bhaskar Kalra for dedicated B2B matchmaking and business lead coordination.',
      'Supported by Ministry of MSME and Ministry of External Affairs (MEA), Government of India.'
    ],
    keyPeople: [
      'H.E. Shri Nagesh Singh (Ambassador of India to Thailand)',
      'Shri Sushil Dhanuka (President, India-Thai Chamber of Commerce - ITCC)',
      'Dr. Nimnual Piewthongngam (Vice Chairperson, JFCCT)',
      'Mr. Varodom Pitakanonda (Thai Chamber of Commerce & Hon. Consul of Hungary)',
      'Shri Bhaskar Kalra (Trade & Exhibition Coordinator)',
      'Pragati Tayde (President, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Exhibition', value: 'Thailand Industrial Fair (BITEC)' },
      { label: 'Indian MSMEs Showcased', value: '23 Companies' },
      { label: 'Government Alignment', value: 'Embassy of India & MSME Ministry' }
    ],
    images: [
      '/timeline_photos/thailand exibition/IMG-20260206-WA0048.jpg',
      '/timeline_photos/thailand exibition/IMG-20260206-WA0049.jpg',
      '/timeline_photos/thailand exibition/IMG-20260206-WA0051.jpg',
      '/timeline_photos/thailand exibition/IMG-20260206-WA0052.jpg',
      '/timeline_photos/thailand exibition/IMG-20260206-WA0053.jpg',
      '/timeline_photos/thailand exibition/IMG-20260206-WA0054.jpg',
      '/timeline_photos/thailand thai chamber of commerce/IMG-20260206-WA0072.jpg',
    ],
  },
  {
    id: 'milestone-24',
    slug: 'thailand-embassy-second-secretary-dialogue',
    milestoneNumber: 24,
    year: '2025',
    title: 'Bilateral Dialogue with Ms. Jagpreet Kaur, Second Secretary',
    date: '19 February 2025',
    location: 'Bangkok, Thailand',
    venue: 'Embassy of India, Sukhumvit, Bangkok, Thailand',
    category: 'Diplomatic Relations & Women Leadership',
    badge: 'EMBASSY BILATERAL DESK',
    description:
      'Inspiring diplomatic interaction in Bangkok with Ms. Jagpreet Kaur, Second Secretary at the Embassy of India in Bangkok, focusing on women empowerment, women entrepreneurs in international trade, and strengthening Indo-Thai economic ties.',
    fullArticle: [
      'On 19 February 2025, during the official mission to Bangkok, Namaste India Group had the distinct privilege of engaging in an inspiring bilateral dialogue with Ms. Jagpreet Kaur, Second Secretary at the Embassy of India in Bangkok.',
      'The discussion centered on championing women entrepreneurs in global trade, creating dedicated export mentorship tracks for women-led MSMEs, and fostering cross-border institutional alliances between Indian and Thai women business networks.',
      'Ms. Kaur’s dynamic leadership, positive energy, and steadfast dedication to women’s socioeconomic empowerment left a profound and lasting impression on the delegation.',
      'The meeting established a strong foundation for future reciprocal entrepreneurship exchange programs and sustained coordination with the commercial desk of the Embassy of India in Thailand.'
    ],
    keyHighlights: [
      'In-depth discussion on creating cross-border trade opportunities for Indian women entrepreneurs.',
      'Explored bilateral exchange programs between Indian and Thai women-led business associations.',
      'Committed to ongoing collaboration with the Embassy of India commercial desk in Bangkok.',
      'Celebrated women in diplomacy, business leadership, and international commerce.'
    ],
    keyPeople: [
      'Ms. Jagpreet Kaur (Second Secretary, Embassy of India in Bangkok)',
      'Pragati Tayde (President, Namaste India Group / VUSF)'
    ],
    impactMetrics: [
      { label: 'Diplomatic Mission', value: 'Embassy of India, Bangkok' },
      { label: 'Theme', value: 'Women Leadership & Indo-Thai Trade' },
      { label: 'Strategic Outcome', value: 'Exchange Framework for Women Founders' }
    ],
    images: [
      '/timeline_photos/thaialnd 2nd secretory/IMG-20260206-WA0085.jpg',
    ],
  },
  {
    id: 'milestone-25',
    slug: 'district-investment-summit-achievement-award',
    milestoneNumber: 25,
    year: '2025',
    title: 'District Investment Summit 2025 – Government Achievement Award',
    date: '19 April 2025',
    location: 'Mumbai Metropolitan Region (MMR), Maharashtra',
    venue: 'Y. B. Chavan Auditorium & State Conclave Complex, Mumbai',
    category: 'Government Honors & Investment',
    badge: 'STATE GOVERNMENT AWARD',
    description:
      'Honoured with the prestigious Achievement Award by Government of Maharashtra at District Investment Summit 2025 (MMR) in the presence of Hon. Shri Uday Samant (Minister of Industries), Ms. Aanchal Goyal IAS (Collector & DM Mumbai City), and Shri Deependra Singh Kushwah IAS (Development Commissioner).',
    fullArticle: [
      'A moment of immense pride in the journey of Namaste India Group: the organization was officially honoured with the prestigious Achievement Award by the Government of Maharashtra at the District Investment Summit 2025 held for the Mumbai Metropolitan Region (MMR).',
      'The prestigious recognition was presented in the distinguished presence of Hon. Shri Uday Samant, Minister of Industries, Government of Maharashtra, Ms. Aanchal Goyal (IAS), Collector & District Magistrate, Mumbai City, and Shri Deependra Singh Kushwah (IAS), Development Commissioner.',
      'The summit was organized by the Deputy Director of Industries MMR along with Shri P. D. Rendalkar, Joint Director MMR Mumbai, celebrating outstanding leadership in attracting industrial investment, creating sustainable employment, and driving district-level MSME empowerment.',
      'This state honor validates Namaste India Group’s tireless commitment to enterprise counseling, industrial cluster development, and making Maharashtra an economic powerhouse.'
    ],
    keyHighlights: [
      'Presented in the distinguished presence of Hon. Shri Uday Samant, Minister of Industries, Government of Maharashtra.',
      'Honoured alongside Ms. Aanchal Goyal (IAS), Collector & DM Mumbai City, and Shri Deependra Singh Kushwah (IAS), Development Commissioner.',
      'Organized by Deputy Director of Industries MMR Mumbai and Shri P. D. Rendalkar (Joint Director MMR) celebrating investment attraction and MSME empowerment.',
      'Reinforces the organization\'s duty and responsibility to continue scaling grassroots industrial transformation.'
    ],
    keyPeople: [
      'Hon. Shri Uday Samant (Minister of Industries, Government of Maharashtra)',
      'Ms. Aanchal Goyal, IAS (Collector & District Magistrate, Mumbai City)',
      'Shri Deependra Singh Kushwah, IAS (Development Commissioner, Maharashtra)',
      'Shri P. D. Rendalkar (Joint Director of Industries, MMR Mumbai)',
      'Pragati Tayde (Award Recipient & President, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Award', value: 'Maharashtra State Achievement Award' },
      { label: 'Category', value: 'Investment Attraction & MSME Empowerment' },
      { label: 'Region', value: 'Mumbai Metropolitan Region (MMR)' }
    ],
    images: [
      '/timeline_photos/uday sawant award/IMG-20250614-WA0074.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0054.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0052.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0065.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0066.jpg',
      '/timeline_photos/uday sawant award/IMG-20250614-WA0073.jpg',
    ],
  },
  {
    id: 'milestone-26',
    slug: 'sial-india-2025-food-beverage-platform',
    milestoneNumber: 26,
    year: '2025',
    title: 'SIAL India 2025 – International Food & Beverage Platform',
    date: '29 August 2025',
    location: 'New Delhi, India',
    venue: 'Yashobhoomi (India International Convention & Expo Centre - IICC), New Delhi',
    category: 'Food & Beverage Trade Expo',
    badge: 'SIAL GLOBAL NETWORK',
    description:
      'Participated in SIAL India, a premier global B2B exhibition for the food and beverage industry, facilitating B2B linkages for Indian food processors, agro-exporters, buyers, and international supermarket chains.',
    fullArticle: [
      'On 29 August 2025, Namaste India Group and Vishwa Udyam Sahayta Foundation (VUSF) participated in SIAL India at the prestigious Yashobhoomi (IICC) in New Delhi, the apex B2B platform for the global food, beverage, and agro-processing industry.',
      'The exhibition brought together over 1,000 international exhibitors, commercial food manufacturers, retail procurement heads, supermarket buyers, and export delegations from 30+ countries.',
      'Namaste India Group facilitated high-value business meetings for its member food brands, focusing on emerging sectors including ready-to-eat organic meals, indigenous spices, cold-pressed oils, gourmet beverages, and sustainable agro-packaging.',
      'The participation reinforced the organization’s continuous mission to take Indian food processors beyond local boundaries and connect them with international retail shelf space.'
    ],
    keyHighlights: [
      'Connected Indian food manufacturers with national and global buyers, importers, and retail distributors.',
      'Explored emerging industry trends in organic food processing, sustainable packaging, and export standards.',
      'Facilitated cross-border trade discussions expanding Indian F&B brands into overseas markets.',
      'Engaged with procurement heads from major international supermarket chains and export houses.'
    ],
    keyPeople: [
      'SIAL Global Exhibition Directorate',
      'Indian Food Processing MSME Delegations',
      'Namaste F&B Trade Directorate'
    ],
    impactMetrics: [
      { label: 'Exhibition', value: 'SIAL India 2025' },
      { label: 'Venue', value: 'Yashobhoomi (IICC), New Delhi' },
      { label: 'Industry', value: 'Global Food, Beverage & Agro' }
    ],
    images: [
      '/timeline_photos/sial exibition/IMG-20260206-WA0027.jpg',
      '/timeline_photos/sial exibition/IMG-20260206-WA0028.jpg',
    ],
  },
  {
    id: 'milestone-27',
    slug: 'ifat-india-2025-green-tech-innovation',
    milestoneNumber: 27,
    year: '2025',
    title: 'IFAT India 2025 – Environmental Technology & Green Innovation',
    date: '16 October 2025',
    location: 'Mumbai, Maharashtra',
    venue: 'Bombay Exhibition Centre (BEC), Goregaon, Mumbai',
    category: 'Sustainability & Environmental Tech',
    badge: 'CLEANTECH & RECYCLING',
    description:
      'Participated in IFAT India 2025, exploring emerging innovations and business opportunities in environmental technologies, recycling, industrial waste management, wastewater treatment, and green infrastructure.',
    fullArticle: [
      'On 16 October 2025, Namaste India Group and VUSF participated in IFAT India 2025 at the Bombay Exhibition Centre (BEC) in Mumbai, the subcontinent\'s leading trade fair for water, sewage, solid waste management, and recycling technologies.',
      'As industrial MSME parks increasingly transition toward strict ESG (Environmental, Social, Governance) compliance and circular economy models, the visit provided invaluable technological exposure.',
      'The delegation evaluated advanced solutions in zero-liquid discharge (ZLD) effluent treatment, plastic recycling automation, industrial solid waste valorization, and decentralized solar energy systems.',
      'The key insights gained were directly integrated into Namaste India Group’s industrial park advisory frameworks, ensuring that partner MSME clusters operate sustainably and meet global environmental export standards.'
    ],
    keyHighlights: [
      'Explored cutting-edge technologies in recycling, effluent treatment, and zero-discharge industrial systems.',
      'Engaged with environmental technology innovators, green entrepreneurs, and municipal infrastructure providers.',
      'Integrated sustainability and green compliance frameworks into Namaste India Group industrial park designs.',
      'Supported cleantech startups with MSME industrial cluster market linkages.'
    ],
    keyPeople: [
      'IFAT India Organizing Committee',
      'Environmental Engineering Tech Innovators',
      'VUSF Sustainable Infrastructure Cell'
    ],
    impactMetrics: [
      { label: 'Exhibition', value: 'IFAT India 2025' },
      { label: 'Venue', value: 'Bombay Exhibition Centre, Mumbai' },
      { label: 'Focus', value: 'Water, Waste & Green Industrial Tech' }
    ],
    images: [
      '/timeline_photos/ifat exibition/IMG-20251212-WA0084.jpg',
      '/timeline_photos/ifat exibition/IMG_20251016_232309_084.webp',
      '/timeline_photos/ifat exibition/IMG_20251016_232436_797.webp',
    ],
  },
  {
    id: 'milestone-28',
    slug: 'canton-fair-china-namaste-china-launch',
    milestoneNumber: 28,
    year: '2025',
    title: 'Canton Fair 2025 Delegation & Launch of "Namaste China"',
    date: '31 October - 4 November 2025',
    location: 'Guangzhou, China',
    venue: 'China Import and Export Fair Complex (Pazhou), Guangzhou',
    category: 'Global Sourcing & Trade Gateway',
    badge: 'CANTON FAIR & NAMASTE CHINA',
    description:
      'High-impact international trade delegation to the prestigious Canton Fair in Guangzhou, China. Formally launched the "Namaste China" gateway to provide Indian entrepreneurs, importers, and MSMEs with verified OEM factory sourcing, on-site audits, and B2B matchmaking.',
    fullArticle: [
      'From 31 October to 4 November 2025, Namaste India Group achieved a historic international milestone by leading a high-level trade delegation to the world-renowned Canton Fair (China Import and Export Fair) in Guangzhou, China—one of the largest trade exhibitions on Earth.',
      'The delegation engaged with hundreds of leading global manufacturers, suppliers, technology providers, and machinery builders, gaining first-hand insights into cutting-edge industrial automation, EV technology, precision tooling, and smart packaging lines.',
      'This landmark fair became the springboard for the official launch of a transformative new initiative: **"Namaste China"**.',
      'Envisioned as a dedicated business gateway, Namaste China provides Indian MSMEs, importers, and industrialists with verified direct-from-factory sourcing, bilingual contract negotiation, pre-shipment quality audits, factory inspection tours, and frictionless customs clearance.',
      'Namaste China bridges Indian enterprise directly with the world’s manufacturing powerhouse, eliminating exploitative trading intermediaries.'
    ],
    keyHighlights: [
      'Groundbreaking participation in one of the world\'s largest international trade exhibitions.',
      'Formally launched the "Namaste China" gateway connecting Indian manufacturers with verified Chinese suppliers.',
      'Facilitated factory visits, machinery sourcing, OEM audits, and safe import-export contract mediation.',
      'Established direct on-ground liaison desks in Guangzhou, Yiwu, and Shanghai for Indian importers.'
    ],
    keyPeople: [
      'Canton Fair International Trade Directorate',
      'Chinese OEM Factory Directors & Machinery Manufacturers',
      'Namaste China Sourcing Desk Specialists',
      'Pragati Tayde (Delegation Convener)'
    ],
    impactMetrics: [
      { label: 'Exhibition', value: '138th Canton Fair (Guangzhou)' },
      { label: 'New Wing Launched', value: 'Namaste China Sourcing Desk' },
      { label: 'Scope', value: 'Direct OEM Sourcing & Factory Audits' }
    ],
    images: [
      '/timeline_photos/china 2025/20251104_151304.jpg',
      '/timeline_photos/china 2025/3_20251027_145145_0000.png',
      '/timeline_photos/china 2025/4_20251027_145145_0001.png',
      '/timeline_photos/china 2025/5_20251027_145145_0002.png',
      '/timeline_photos/china 2025/IMG-20251109-WA0061.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0021.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0022.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0027.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0029.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0041.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0055.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0063.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0072.jpg',
      '/timeline_photos/china 2025/IMG-20260206-WA0029.jpg',
      '/timeline_photos/china 2025/IMG-20260206-WA0030.jpg',
    ],
  },
  {
    id: 'milestone-29',
    slug: 'ek-gao-ek-didi-women-empowerment',
    milestoneNumber: 29,
    year: '2025',
    title: '"Ek Gao Ek Didi" (One Village – One Didi) Women Empowerment Launch',
    date: '16 December 2025',
    location: 'Rural Maharashtra & Pan-India Clusters',
    venue: 'Rural Leadership Conclave & Grassroots Hubs',
    category: 'Women Empowerment & Grassroots MSME',
    badge: 'EK GAO EK DIDI',
    description:
      'Launched the flagship grassroots initiative "One Village – One Didi" (Ek Gao Ek Didi) designed to appoint one active and capable woman leader ("Didi") per village to unite Self-Help Groups (SHGs), identify local handicraft/agro products, and connect rural women directly with urban and export markets.',
    fullArticle: [
      'On 16 December 2025, Namaste India Group and VUSF officially launched its flagship social and economic transformation model: **"One Village – One Didi" (Ek Gao – Ek Didi)**.',
      'Operating under the inspiring mantra *"One Didi – One Village, A New Identity of Self-Reliance"*, the initiative identifies and trains one dynamic, educated, and proactive woman leader ("Didi") in every village.',
      'The Didi serves as the vital grassroots catalyst—uniting local women, mobilizing Self-Help Groups (SHGs), identifying indigenous handicraft and agro-produce potential, and connecting rural makers directly with urban retail markets, digital payment systems, and export networks at fair value.',
      'The model is structured around a profound multiplier: **One Didi → One Group → One Enterprise → One Self-Reliant Village**.',
      'By economically empowering one woman leader per village, the initiative sparks the socioeconomic renaissance of entire rural communities across Maharashtra and India.'
    ],
    keyHighlights: [
      '"One Didi – One Village, A New Identity of Self-Reliance": One Didi → One Group → One Enterprise → One Self-Reliant Village.',
      'Appointing local women leaders to coordinate SHGs, micro-enterprises, and skill development in each village.',
      'Bridging rural handicraft, textile, and food products with fair-value commercial retail channels.',
      'Promoting digital literacy, UPI payments, financial inclusion, and micro-loan facilitation for rural women.'
    ],
    keyPeople: [
      'Village Didi Coordinators & SHG Leaders',
      'VUSF Women Empowerment Board',
      'Pragati Tayde (National Convener)'
    ],
    impactMetrics: [
      { label: 'Program Name', value: 'Ek Gao Ek Didi' },
      { label: 'Core Philosophy', value: 'One Didi → Self-Reliant Village' },
      { label: 'Target Reach', value: 'Rural SHGs & Micro-Enterprises' }
    ],
    images: [
      '/timeline_photos/mahila support/IMG-20260206-WA0102.jpg',
      '/timeline_photos/mahu sc st/IMG-20251206-WA0060.jpg',
    ],
  },
  {
    id: 'milestone-30',
    slug: 'csr-menstrual-hygiene-sanitary-pad-distribution',
    milestoneNumber: 30,
    year: '2026',
    title: 'CSR Menstrual Hygiene Awareness & Organic Sanitary Pad Distribution',
    date: '14 March 2026',
    location: 'Kannad, Chhatrapati Sambhajinagar, Maharashtra',
    venue: 'Sane Guruji Madhyamik Vidyalaya, Kannad',
    category: 'CSR & Community Health',
    badge: 'COMMUNITY CSR & HEALTH',
    description:
      'Organized by Vishwa Udyam Sahayata Foundation (VUSF), led by Pragati Tayde, in collaboration with Dharati Foundation (represented by Sattar Khan Sir) at Sane Guruji Madhyamik Vidyalaya, Kannad, distributing organic sanitary pads and educating school girls on menstrual hygiene and personal wellness.',
    fullArticle: [
      'On 14 March 2026, as part of its steadfast commitment to women’s health, education, and community dignity, Vishwa Udyam Sahayta Foundation (VUSF) conducted a Menstrual Hygiene Awareness and Organic Sanitary Pad Distribution Program at Sane Guruji Madhyamik Vidyalaya in Kannad, District Chhatrapati Sambhajinagar.',
      'The humanitarian initiative was organized under the leadership of Pragati Tayde in dedicated collaboration with Dharati Foundation, represented by Sattar Khan Sir.',
      'During the interactive session, high-grade organic sanitary pads were distributed to all female students, accompanied by an open, scientifically grounded masterclass addressing menstrual hygiene, personal cleanliness, and dispelling centuries-old taboos.',
      'The informative session was expertly demonstrated and coordinated by Madhuri Narkhed Madam in the gracious presence of Harshada Kadam Madam, Alka Jadhav Madam, and respected school board trustees.',
      'The program affirmed VUSF\'s belief that healthy, confident girls build strong, empowered futures for the nation.'
    ],
    keyHighlights: [
      'Distributed organic sanitary pads to school girls accompanied by informative health and cleanliness sessions.',
      'Session expertly demonstrated and coordinated by Madhuri Narkhed Madam with Harshada Kadam Madam and Alka Jadhav Madam.',
      'Eliminated taboos and empowered young girls to manage their health with knowledge, dignity, and confidence.',
      'Strengthened ongoing CSR commitments toward girl-child education, sanitation, and rural health.'
    ],
    keyPeople: [
      'Pragati Tayde (President, VUSF)',
      'Sattar Khan Sir (Dharati Foundation)',
      'Madhuri Narkhed Madam (Session Coordinator)',
      'Harshada Kadam Madam & Alka Jadhav Madam',
      'Faculty & Students of Sane Guruji Vidyalaya, Kannad'
    ],
    impactMetrics: [
      { label: 'Beneficiaries', value: '400+ School Girls' },
      { label: 'CSR Partner', value: 'Dharati Foundation' },
      { label: 'Location', value: 'Kannad, Chhatrapati Sambhajinagar' }
    ],
    images: [
      '/timeline_photos/CSR project/IMG-20260206-WA0098.jpg',
      '/timeline_photos/CSR project/IMG-20260310-WA0084.jpg',
      '/timeline_photos/CSR project/IMG-20260310-WA0112(1).jpg',
      '/timeline_photos/CSR project/IMG-20260311-WA0082.jpg',
      '/timeline_photos/CSR project/IMG-20260311-WA0087.jpg',
      '/timeline_photos/CSR project/IMG-20260311-WA0088(1).jpg',
      '/timeline_photos/CSR project/IMG-20260311-WA0091.jpg',
      '/timeline_photos/CSR project/IMG-20260311-WA0095.jpg',
      '/timeline_photos/CSR project/IMG-20260311-WA0099.jpg',
    ],
  },
  {
    id: 'milestone-31',
    slug: 'mahalaxmi-saras-500-shg-empowerment',
    milestoneNumber: 31,
    year: '2026',
    title: 'Mahalaxmi Saras 2026 – Empowering 500+ Women Self-Help Groups',
    date: '10 April 2026',
    location: 'Navi Mumbai, Maharashtra',
    venue: 'MMRDA Exhibition Grounds / Saras Pavilion, Navi Mumbai',
    category: 'Women Entrepreneurship & SHGs',
    badge: '500+ WOMEN SHGS',
    description:
      'Field visit and dedicated mentorship for 500+ Self-Help Groups (SHGs) and women entrepreneurs at Mahalaxmi Saras, supporting grassroots women in transforming home-based crafts, organic spices, and food items into market-ready commercial enterprises.',
    fullArticle: [
      'On 10 April 2026, Namaste India Group and VUSF conducted a comprehensive field mentorship visit to the renowned Mahalaxmi Saras Exhibition in Navi Mumbai, interacting directly with over 500 Self-Help Groups (SHGs) and women artisans.',
      'The vibrant exhibition showcased the remarkable ingenuity of rural women transforming domestic culinary and handicraft skills into thriving livelihood enterprises—featuring organic spices, millet snacks, handloom textiles, eco-friendly pottery, and traditional artifacts.',
      'Namaste India Group’s advisory team provided hands-on business mentorship on critical commercial hurdles: attractive product packaging, FSSAI compliance, barcoding, digital QR payment adoption, and pricing strategies for urban exhibitions.',
      'The engagement embodied the core vision: *"From Home to Market. From Skills to Enterprise."* When women become economically self-reliant, they strengthen their families, uplift their communities, and power India’s economic ascent.'
    ],
    keyHighlights: [
      'Witnessed and mentored 500+ women Self-Help Groups presenting handcrafted and indigenous products.',
      'Guided home-based producers on packaging, digital payment adoption, and commercial pricing.',
      'Reinforced the mission: "From Home to Market. From Skills to Enterprise. When women grow, the nation prospers."',
      'Facilitated direct wholesale orders connecting rural SHG producers with urban supermarket buyers.'
    ],
    keyPeople: [
      '500+ Women SHG Founders & Rural Artisans',
      'Mahalaxmi Saras Organizing Committee',
      'Namaste Stree Shakti Mentorship Cell'
    ],
    impactMetrics: [
      { label: 'SHGs Mentored', value: '500+ Women Groups' },
      { label: 'Exhibition', value: 'Mahalaxmi Saras 2026' },
      { label: 'Focus', value: 'Grassroots Enterprise to Market' }
    ],
    images: [
      '/timeline_photos/mahalaksmi saras/B612_20260410_004509_538.jpg',
      '/timeline_photos/mahalaksmi saras/B612_20260410_004526_686.jpg',
      '/timeline_photos/mahalaksmi saras/B612_20260410_004541_103.jpg',
      '/timeline_photos/mahalaksmi saras/B612_20260410_004557_298.jpg',
      '/timeline_photos/mahalaksmi saras/B612_20260410_004610_477.jpg',
      '/timeline_photos/mahalaksmi saras/B612_20260410_004629_163.jpg',
      '/timeline_photos/mahalaksmi saras/B612_20260410_004646_551.jpg',
      '/timeline_photos/mahalaksmi saras/B612_20260410_004702_042.jpg',
      '/timeline_photos/mahalaksmi saras/B612_20260410_004732_479.jpg',
    ],
  },
  {
    id: 'milestone-32',
    slug: 'navi-mumbai-business-hub-2026-summit',
    milestoneNumber: 32,
    year: '2026',
    title: 'Navi Mumbai Business Summit 2026',
    date: '18 July 2026',
    location: 'Vashi, Navi Mumbai, Maharashtra',
    venue: 'Convention Center, Sector 18 / Vashi Business Hub, Navi Mumbai',
    category: 'Enterprise Conclave & B2B Hub',
    badge: 'NAVI MUMBAI BUSINESS SUMMIT',
    description:
      'Navi Mumbai Business Summit 2026 brought together 300+ entrepreneurs, manufacturers, exporters, importers, startups, and financial experts for a landmark day of learning, cross-industry networking, and B2B business acceleration.',
    fullArticle: [
      'On 18 July 2026, the mega **Navi Mumbai Business Summit 2026** convened over 300 entrepreneurs, manufacturers, exporters, importers, startups, and corporate leaders for an intensive day of business acceleration, B2B matchmaking, and financial strategy.',
      'The prestigious summit featured distinguished keynote speakers and institutional partners:',
      '• **Mr. Vipul Mandlesha** (Export Head) and the **India Post Export Promotion Team**, who shared actionable knowledge on leveraging postal export channels (Dak Niryat Kendras) for cost-effective global e-commerce shipments.',
      '• **Mr. Rajesh Menon** (Financial Planner) and **Mr. Ujjwal Ravindran** (Founder, Secure Life Fincorp), who delivered impactful masterclasses on business risk management, working capital preservation, and scalable financial planning.',
      'Beyond knowledge sessions, the Business Hub facilitated dynamic B2B roundtables where participants exchanged supplier contracts, forged joint marketing alliances, and explored global market entries.',
      'The summit solidified Namaste India Group’s standing as the premier catalyst for Maharashtra’s MSME and entrepreneurial ecosystem.'
    ],
    keyHighlights: [
      'Keynote export sessions by Mr. Vipul Mandlesha (Export Head) and India Post Export Promotion Team.',
      'Financial resilience and wealth planning sessions by Mr. Rajesh Menon and Mr. Ujjwal Ravindran (Founder, Secure Life Fincorp).',
      'Dynamic B2B networking creating high-value trade linkages, supply contracts, and business growth collaborations.',
      'Attended by 300+ founders, exporters, manufacturers, and corporate leaders across Mumbai and Navi Mumbai.'
    ],
    keyPeople: [
      'Mr. Vipul Mandlesha (Export Head)',
      'India Post Export Promotion Directorate',
      'Mr. Rajesh Menon (Financial Planning Expert)',
      'Mr. Ujjwal Ravindran (Founder, Secure Life Fincorp)',
      'Pragati Tayde (Summit Convener & President, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Attendance', value: '300+ Business Founders' },
      { label: 'Event', value: 'Navi Mumbai Business Summit 2026' },
      { label: 'Key Sessions', value: 'Postal Exports, Finance & B2B Hub' }
    ],
    images: [
      '/temp/IMAGES.jpeg',
      '/timeline_photos/navi mumbai business summit/IMG-20260622-WA0102.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260623-WA0074.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260707-WA0026.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0006.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0007.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0008.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0009.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0010.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0011.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0012.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0013.jpg',
      '/timeline_photos/navi mumbai business summit/IMG-20260721-WA0014.jpg',
    ],
  },
  {
    id: 'milestone-33',
    slug: 'pillai-university-strategic-mou-incubation',
    milestoneNumber: 33,
    year: '2026',
    title: 'Strategic MoU with Pillai University – Education, Incubation & Languages',
    date: '20 August 2026',
    location: 'Panvel, Navi Mumbai, Maharashtra',
    venue: 'Pillai University Executive Boardroom, Panvel Campus',
    category: 'Academia-Industry & Skill Incubation',
    badge: 'UNIVERSITY MOU & INCUBATION',
    description:
      'Historic Memorandum of Understanding (MoU) signed between Namaste India Group (Pragati Tayde, President & Founder) and Pillai University, Panvel (Dr. R. Chandran, Dean – School of Business, and Ms. Upasana Chaudhary, Director of Corporate Relations MDP) uniting academia with real-world enterprise incubation.',
    fullArticle: [
      'On 20 August 2026, Namaste India Group and Pillai University, Panvel entered into a historic strategic collaboration through the formal signing of a comprehensive Memorandum of Understanding (MoU).',
      'The milestone agreement was signed by **Dr. R. Chandran**, Dean – School of Business, Pillai University, and **Pragati Tayde**, Founder & President of Namaste India Group.',
      'Special appreciation was extended to **Ms. Upasana Chaudhary**, Director of Corporate Relations MDP, Pillai University, for her instrumental leadership and coordination in bringing this academia-industry alliance to fruition.',
      'Under the strategic MoU, the partners are introducing impactful collaborative initiatives:',
      '• **Basic Chinese Language Learning Programs**: Equipping Indian traders, exporters, and students with practical Mandarin for business negotiations.',
      '• **SC/ST & Women Entrepreneurship Incubation Tracks**: Providing credit counseling, project formulation, and mentorship for inclusive enterprise.',
      '• **Industry–Academia Engagement**: Live enterprise internships, joint research on MSME clusters, and executive management development programs (MDPs).',
      'The alliance seamlessly integrates academic excellence with real-world entrepreneurial incubation, turning knowledge into tangible socioeconomic opportunity.'
    ],
    keyHighlights: [
      'MoU signed by Dr. R. Chandran (Dean - School of Business) and Pragati Tayde (Founder & President, Namaste India Group).',
      'Special coordination by Ms. Upasana Chaudhary, Director of Corporate Relations MDP, Pillai University.',
      'Launching Basic Chinese Language Learning, SC/ST Entrepreneurship, Women Entrepreneurship tracks, and Industry-Academia incubation.',
      'Bridging university research with practical MSME market incubation and cross-border trade corridors.'
    ],
    keyPeople: [
      'Dr. R. Chandran (Dean – School of Business, Pillai University)',
      'Ms. Upasana Chaudhary (Director of Corporate Relations MDP, Pillai University)',
      'Pragati Tayde (President & Founder, Namaste India Group)'
    ],
    impactMetrics: [
      { label: 'Academic Partner', value: 'Pillai University, Panvel' },
      { label: 'Key Programs', value: 'Chinese Language, SC/ST & Women Startups' },
      { label: 'MoU Date', value: '21 August 2026' }
    ],
    images: [
      '/timeline_photos/college/16_20250710_130302_0015.png',
      '/timeline_photos/college/17_20250710_130302_0016.png',
      '/timeline_photos/college/18_20250710_130302_0017.png',
      '/timeline_photos/college/5_20250710_130301_0004.png',
      '/timeline_photos/college/IMG-20250614-WA0075.jpg',
      '/timeline_photos/college/IMG-20250614-WA0076.jpg',
      '/timeline_photos/college/IMG-20250614-WA0077.jpg',
      '/timeline_photos/college/IMG-20250614-WA0078.jpg',
      '/timeline_photos/college/IMG-20250614-WA0085.jpg',
      '/timeline_photos/channel partner/Blue White Modern Geometric Certificate of Completion_20260106_123118_0000.png',
      '/timeline_photos/channel partner/Untitled-design-35-1.png',
    ],
  },
];

export const COUNTRY_CORRIDORS: Record<string, CountryWingData> = {
  nepal: {
    slug: 'nepal',
    country: 'Nepal',
    title: 'Namaste Nepal Trade Corridor',
    tagline: 'Fostering Cross-Border Commercial Alliances & SAARC Trade',
    heroBadge: 'ACTIVE BILATERAL CORRIDOR • KATHMANDU APEX DESK',
    overview: [
      'Nepal and India share a long history of trade and commercial exchanges. India is Nepal’s largest trade partner. The volume of bilateral trade has reached over NPR 1134.53 billion during the last fiscal year with imports from India amounting to NPR 1027.84 billion and exports to India standing over NPR 106.69 billion.',
      'We participated in the Nepal Food & Beverage Expo with 10 MSME companies to establish import-export operations and successfully launch products in the Nepalese market.',
      'Our expert team, with a strong background in marketing and industry knowledge, continuously works on building connections with Nepalese companies, ensuring seamless collaboration, B2B matchmaking, and high-impact trade delegations.',
    ],
    stats: [
      { label: 'Bilateral Trade Volume', value: 'NPR 1,134+ Bn' },
      { label: 'Export Promotion Delegations', value: '10+ Companies' },
      { label: 'CNIYEF Partnership', value: 'Active MoU' },
      { label: 'Corridor Status', value: 'Duty-Free SAARC' },
    ],
    keySectors: [
      'Food Processing & FMCG',
      'Packaging & Processing Machinery',
      'Agricultural Inputs & Seeds',
      'Jewellery & Lifestyle',
      'Textiles & Garments',
    ],
    representatives: [
      { name: 'Mohan Kaushal', designation: 'Convenor • Namaste Nepal', image: 'https://namastevishwaudyam.org/img/c18.png' },
      { name: 'Pradip Shah', designation: 'Trade Officer • Nepal Desk', image: 'https://namastevishwaudyam.org/img/c100.png' },
      { name: 'Pushkar Malla', designation: 'Bilateral Liaison • Kathmandu', image: 'https://namastevishwaudyam.org/img/c111.png' },
    ],
    galleryImages: [
      '/timeline_photos/nepal exibition/IMG-20260206-WA0043.jpg',
      '/timeline_photos/nepal fashion and jwellary exibition/WhatsApp Image 2026-08-28 at 10.00.18 PM.jpeg',
      '/timeline_photos/nepal cni/IMG-20260206-WA0089.jpg',
      '/timeline_photos/nepal meet/IMG-20260206-WA0074.jpg',
    ],
  },
  uae: {
    slug: 'uae',
    country: 'UAE',
    title: 'Namaste UAE & Dubai Gateway',
    tagline: 'Strategic Comprehensive Economic Partnership & Re-Export Hub',
    heroBadge: 'GCC GATEWAY • CEPA TRADE CORRIDOR',
    overview: [
      'The UAE and India share a deep-rooted friendship built on centuries-old cultural and economic ties. This relationship gained momentum with the establishment of the UAE Federation in 1971 and appointment of ambassadors in 1972-1973.',
      'The two countries have forged robust partnerships in commerce, trade, and investment, evolving into a comprehensive strategic partnership across defense, energy, space, information technology, and consumer goods.',
      'Through Namaste Dubai and Namaste UAE, Vishwa Udyam Sahayta Foundation provides complete handholding for Indian enterprises to set up offshore entities, enter re-export corridors, and access high-volume Middle Eastern and North African markets.',
    ],
    stats: [
      { label: 'CEPA Bilateral Target', value: 'US$ 100+ Bn' },
      { label: 'Trade Corridor Hub', value: 'Dubai & Abu Dhabi' },
      { label: 'Customs Duty Benefit', value: '0% under CEPA' },
      { label: 'Investor Protection', value: 'Full Handholding' },
    ],
    keySectors: [
      'Engineering Goods & Auto Ancillaries',
      'Textiles, Apparel & High Fashion',
      'Food & Agro Commodities',
      'FinTech & Cloud Software',
      'Gems & Jewellery',
    ],
    representatives: [
      { name: 'Kamlesh Kumar', designation: 'Convenor • Namaste Dubai | CEO, Kashivishwanath FPC', image: '/members/kamlesh.jpeg' },
      { name: 'R. Bhattacharya', designation: 'Trade Advisor • UAE Desk', image: 'https://namastevishwaudyam.org/img/c122.png' },
      { name: 'Saleem Sagar', designation: 'Commercial Liaison • UAE Desk', image: 'https://namastevishwaudyam.org/img/c133.png' },
    ],
    galleryImages: [
      '/timeline_photos/asian banking club/WhatsApp Image 2026-08-28 at 10.18.58 PM.jpeg',
      '/timeline_photos/money expo/IMG-20260206-WA0093.jpg',
    ],
  },
  thailand: {
    slug: 'thailand',
    country: 'Thailand',
    title: 'Namaste Thailand Trade Bridge',
    tagline: 'Gateway to ASEAN & the Greater Mekong Subregion',
    heroBadge: 'ASEAN 2ND LARGEST ECONOMY • B2B TRADE FORUM',
    overview: [
      'Thailand is the second-largest economy in ASEAN and the Greater Mekong Subregion (GMS). As an upper-middle-income country with an open, market-oriented economy, Thailand has successfully diversified with strong services and industrial contributions.',
      'With a GDP of USD 513 Billion and global trade exceeding USD 574 Billion, exports account for 55% of Thailand\'s GDP, creating immense reciprocal trade potential for Indian manufacturers.',
      'Our India-Thailand Buyer Seller Meets and official India Pavilion at Thailand Industrial Fair directly connect Indian exporters in food processing, packaging machinery, chemicals, and consumer goods with verified Thai distributors and retail houses.',
    ],
    stats: [
      { label: 'Thailand GDP', value: 'USD 513 Bn' },
      { label: 'Global Trade', value: 'USD 574.3 Bn' },
      { label: 'Export Share of GDP', value: '55%' },
      { label: 'B2B Exchange Desk', value: 'Mumbai & Bangkok' },
    ],
    keySectors: [
      'Automotive & EV Components',
      'Food Processing & Spices',
      'Industrial Machinery & Automation',
      'Packaging Solutions',
      'Hospitality & Tourism Supply',
    ],
    representatives: [
      { name: 'Vardhaman', designation: 'Convenor • Namaste Thailand', image: 'https://namastevishwaudyam.org/img/c188.png' },
    ],
    galleryImages: [
      '/timeline_photos/thailand exibition/IMG-20260206-WA0048.jpg',
      '/timeline_photos/thailand buyer seller meet/IMG-20250614-WA0090.jpg',
      '/timeline_photos/thaialnd 2nd secretory/IMG-20260206-WA0085.jpg',
      '/timeline_photos/thailand thai chamber of commerce/IMG-20260206-WA0072.jpg',
    ],
  },
  vietnam: {
    slug: 'vietnam',
    country: 'Vietnam',
    title: 'Namaste Vietnam Commercial Bridge',
    tagline: 'High-Growth Southeast Asian Manufacturing & Trade Corridor',
    heroBadge: 'BILATERAL TRADE US$ 14.82 BN • ASEAN HUB',
    overview: [
      'India and Vietnam have a long-standing trade and economic relationship that has steadily expanded from US$ 200 Million in 2000 to US$ 14.82 Billion in 2023-2024.',
      'India ranks as Vietnam’s 7th largest trading partner and 7th biggest importer. Key exports from India to Vietnam include animal fodder, agricultural materials, metals, machinery, pharmaceuticals, and chemicals.',
      'The Namaste Vietnam initiative facilitates targeted Buyer-Seller Meets, trade delegations, and market-entry partnerships connecting Indian MSMEs with Vietnam’s dynamic industrial ecosystem.',
    ],
    stats: [
      { label: 'Bilateral Trade', value: 'US$ 14.82 Bn' },
      { label: 'Vietnam Rank for India', value: 'Top 7 Trading Partner' },
      { label: 'Indian Exports to Vietnam', value: 'US$ 5.47 Bn' },
      { label: 'B2B Matchmaking', value: 'Direct Buyer Meets' },
    ],
    keySectors: [
      'Animal Fodder & Feed Raw Materials',
      'Pharma & Medical Ingredients',
      'Steel, Metals & Engineering',
      'Textile Fabrics & Yarn',
      'Plastics & Specialty Chemicals',
    ],
    representatives: [
      { name: 'Tran Thuy Duong (Naomi)', designation: 'Convenor • Namaste Vietnam', image: 'https://namastevishwaudyam.org/img/c177.png' },
    ],
    galleryImages: [
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0092.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0095.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0100.jpg',
      '/timeline_photos/veitnam buyer seller meet/IMG-20260206-WA0105.jpg',
    ],
  },
  singapore: {
    slug: 'singapore',
    country: 'Singapore',
    title: 'Namaste Singapore Innovation & Capital Desk',
    tagline: 'Asia’s Premier Business Hub, Startup Bridge & Investment Portal',
    heroBadge: 'GLOBAL FINANCIAL CENTRE • STARTUP GATEWAY',
    overview: [
      'Namaste Singapore is a global business networking and trade promotion initiative focused on strengthening business relations between India and Singapore.',
      'Singapore is one of Asia’s leading business and financial hubs, offering premier opportunities in import-export, technology, food and agro products, textiles, healthcare, sustainable energy, investments, and startup incubation.',
      'Through strategic tie-ups with trade associations, institutional investors, and global logistics corridors, Vishwa Udyam Sahayta Foundation organizes buyer-seller meets, networking conclaves, and market entry support programs.',
    ],
    stats: [
      { label: 'Foreign Capital Route', value: 'Top FDI Source' },
      { label: 'Regional Gateway', value: '10 ASEAN Nations' },
      { label: 'Startup Ecosystem', value: 'Incubators & VCs' },
      { label: 'Trade Corridor Status', value: 'Active Direct Desk' },
    ],
    keySectors: [
      'FinTech & Enterprise SaaS',
      'Agro & Packaged Food Products',
      'Healthcare & Bio-Sciences',
      'CleanTech & Renewable Energy',
      'Cross-Border Holding Companies',
    ],
    representatives: [
      { name: 'Singapore Strategic Desk', designation: 'Bilateral Trade Directorate', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [
      '/timeline_photos/money expo/IMG-20260206-WA0093.jpg',
      '/timeline_photos/asian banking club/WhatsApp Image 2026-08-28 at 10.18.58 PM.jpeg',
    ],
  },
  china: {
    slug: 'china',
    country: 'China',
    title: 'Namaste China Sourcing & Machinery Desk',
    tagline: 'Direct OEM Factory Access, Canton Fair Delegations & Quality Audits',
    heroBadge: 'DIRECT OEM FACTORY SOURCING • CANTON FAIR DELEGATION',
    websiteUrl: 'https://www.namastechina.org',
    overview: [
      'Namaste China is a global business networking and trade promotion initiative focused on building transparent, direct business relations between Indian manufacturers and Chinese OEMs.',
      'China is the world\'s largest manufacturing hub, offering unparalleled opportunities in industrial machinery, electronics, EV automation, tooling, robotics, sustainable energy equipment, and raw materials.',
      'Through our on-ground tie-ups with factories, trade organizations, and bilingual inspectors in Guangzhou, Shanghai, and Yiwu, we organize Canton Fair delegations, on-site factory audits, B2B matchmaking, and contract protection.',
    ],
    stats: [
      { label: 'Sourcing Hubs', value: 'Guangzhou, Yiwu, Shenzhen' },
      { label: 'Canton Fair Delegations', value: 'Phase 1, 2, 3 Concierge' },
      { label: 'Factory Audits', value: '100% Pre-Shipment Check' },
      { label: 'Contract Mediation', value: 'Bilingual Protection' },
    ],
    keySectors: [
      'Industrial Machinery & Automation',
      'Packaging & Food Processing Lines',
      'EV Battery & Power Electronics',
      'Precision Tooling, Hardware & Molds',
      'Renewable Energy Equipment',
    ],
    representatives: [
      { name: 'Jevy Cai', designation: 'Convenor • Namaste China', image: 'https://namastevishwaudyam.org/img/ch11.png' },
    ],
    galleryImages: [
      '/timeline_photos/china 2025/20251104_151304.jpg',
      '/timeline_photos/china 2025/IMG-20251109-WA0061.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0021.jpg',
      '/timeline_photos/china 2025/IMG-20251115-WA0022.jpg',
    ],
  },
  india: {
    slug: 'india',
    country: 'India',
    title: 'Namaste India National Commerce Hub',
    tagline: 'Empowering Grassroots MSMEs, Women Founders & Global Export Corridors',
    heroBadge: 'ANCHOR GLOBAL HEADQUARTERS • MUMBAI APEX DESK',
    overview: [
      'Namaste India Group serves as the premier apex platform connecting Indian MSMEs, manufacturers, agro-producers, and innovators directly with global markets, state subsidies, and international trade delegations.',
      'Operating from Mumbai—India’s commercial capital and premier maritime gateway—the organization has orchestrated over 33 landmark state conclaves, national business awards, and international trade bridges across Asia, the Middle East, Africa, and Europe.',
      'We provide complete handholding in PMEGP/CMEGP subsidies, DPR bank loan syndication, GeM public procurement, DPIIT Startup India certification, and bilateral trade desk representation.',
    ],
    stats: [
      { label: 'Milestone Conclaves', value: '33+ State Summits' },
      { label: 'Entrepreneurs Mentored', value: '50,000+ Founders' },
      { label: 'Domestic Trade Coverage', value: 'All 28 States & 8 UTs' },
      { label: 'Global Corridors', value: '20 Active Countries' },
    ],
    keySectors: [
      'Food Processing, Spices & Agro FMCG',
      'Textiles, Garments & Handlooms',
      'Engineering Goods & Auto Components',
      'Chemicals, Plastics & Packaging',
      'FinTech, IT Hardware & CleanTech',
    ],
    representatives: [
      { name: 'Pragati Tayde', designation: 'Founder & President • Namaste India Group', image: '/members/pragati.jpeg' },
      { name: 'Dr. Jitendra Shinde', designation: 'National Vice President', image: '/members/jitendra.jpeg' },
      { name: 'Nikhil Patil', designation: 'Director of Strategic Operations', image: '/members/nikhil.jpeg' },
    ],
    galleryImages: [
      '/timeline_photos/start namste india/IMG-20260206-WA0035.jpg',
      '/timeline_photos/state export awrds/IMG_20220809_144342_117.webp',
      '/timeline_photos/malkapur event/IMG-20260206-WA0036.jpg',
    ],
  },
  bangladesh: {
    slug: 'bangladesh',
    country: 'Bangladesh',
    title: 'Namaste Bangladesh Cross-Border Trade Corridor',
    tagline: 'Accelerating SAFTA Duty-Free Commerce, Textiles & Agro Trade',
    heroBadge: 'SAARC ECONOMIC CORRIDOR • DHAKA & CHITTAGONG DESK',
    overview: [
      'Bangladesh is India’s biggest trade partner in South Asia and India is the second biggest trade partner of Bangladesh in Asia. Bilateral trade between both nations has surpassed US$ 15 Billion under the South Asian Free Trade Area (SAFTA) agreement.',
      'Through overland Land Customs Stations (Petrapole-Benapole) and maritime shipping routes via Kolkata and JNPT, the Namaste Bangladesh corridor facilitates duty-free access for Indian cotton, machinery, chemicals, and consumer commodities.',
      'We organize B2B buyer matchmaking with major Bangladeshi garment manufacturers, agro-conglomerates, and consumer retail chains.',
    ],
    stats: [
      { label: 'Bilateral Trade', value: 'US$ 15+ Billion' },
      { label: 'Trade Agreement', value: 'Duty-Free SAFTA' },
      { label: 'Primary Gateway', value: 'Petrapole & Chittagong' },
      { label: 'Trade Desk Status', value: 'Active Direct Desk' },
    ],
    keySectors: [
      'Raw Cotton, Yarn & Textile Dyes',
      'Capital Industrial Machinery',
      'Specialty Chemicals & Polymers',
      'Food Processing & Spices',
      'Construction Materials & Hardware',
    ],
    representatives: [
      { name: 'Dhaka Trade Directorate', designation: 'Bilateral Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [
      '/timeline_photos/nepal exibition/IMG-20260206-WA0043.jpg',
    ],
  },
  'sri-lanka': {
    slug: 'sri-lanka',
    country: 'Sri Lanka',
    title: 'Namaste Sri Lanka Commercial Corridor',
    tagline: 'Strategic Maritime Linkage & Indo-Sri Lanka Free Trade Area (ISFTA)',
    heroBadge: 'INDIAN OCEAN TRADE GATEWAY • COLOMBO DESK',
    overview: [
      'India and Sri Lanka enjoy a comprehensive bilateral Free Trade Agreement (ISFTA) providing preferential duty concessions for thousands of tariff lines across manufacturing, pharmaceuticals, and agricultural commodities.',
      'With direct short-sea maritime container shipping from Tuticorin, Chennai, and JNPT Mumbai to Colombo Deep Sea Port, delivery transit times are minimized to under 48–72 hours.',
      'Namaste Sri Lanka coordinates buyer-seller meets, hospital supply contracts, and retail distribution partnerships for Indian exporters.',
    ],
    stats: [
      { label: 'Trade Framework', value: 'Bilateral ISFTA' },
      { label: 'Shipping Transit', value: '48 - 72 Hours' },
      { label: 'Strategic Port', value: 'Colombo Deep Sea' },
      { label: 'Export Promotion', value: 'Active Trade Desk' },
    ],
    keySectors: [
      'Pharmaceuticals & Medical Devices',
      'Automotive Assemblies & Parts',
      'Food Processing & Confectionery',
      'Construction Steel & Ceramics',
      'Textile Fabrics & Garments',
    ],
    representatives: [
      { name: 'Colombo Commercial Desk', designation: 'Bilateral Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  srilanka: {
    slug: 'sri-lanka',
    country: 'Sri Lanka',
    title: 'Namaste Sri Lanka Commercial Corridor',
    tagline: 'Strategic Maritime Linkage & Indo-Sri Lanka Free Trade Area (ISFTA)',
    heroBadge: 'INDIAN OCEAN TRADE GATEWAY • COLOMBO DESK',
    overview: [
      'India and Sri Lanka enjoy a comprehensive bilateral Free Trade Agreement (ISFTA) providing preferential duty concessions for thousands of tariff lines across manufacturing, pharmaceuticals, and agricultural commodities.',
      'With direct short-sea maritime container shipping from Tuticorin, Chennai, and JNPT Mumbai to Colombo Deep Sea Port, delivery transit times are minimized to under 48–72 hours.',
    ],
    stats: [
      { label: 'Trade Framework', value: 'Bilateral ISFTA' },
      { label: 'Shipping Transit', value: '48 - 72 Hours' },
    ],
    keySectors: ['Pharma', 'Automotive', 'Food Processing'],
    representatives: [],
    galleryImages: [],
  },
  japan: {
    slug: 'japan',
    country: 'Japan',
    title: 'Namaste Japan High-Tech Industrial Desk',
    tagline: 'Bilateral CEPA Partnership, Precision Engineering & Robotics',
    heroBadge: 'HIGH-TECH COOPERATION • TOKYO & OSAKA DESK',
    overview: [
      'The India-Japan Comprehensive Economic Partnership Agreement (CEPA) covers trade in goods, services, and investment, eliminating tariffs on over 94% of tariff lines.',
      'Japan represents a strategic source of advanced industrial technology, precision tooling, robotics, semiconductor manufacturing equipment, and green hydrogen solutions for Indian manufacturers.',
      'Namaste Japan coordinates bilateral industrial delegations, technical joint ventures, and technology transfer MoUs with Japanese engineering conglomerates.',
    ],
    stats: [
      { label: 'CEPA Duty Benefits', value: 'Over 94% Zero Duty' },
      { label: 'Key Hubs', value: 'Tokyo, Osaka, Yokohama' },
      { label: 'Technology Focus', value: 'Robotics & Precision Tooling' },
      { label: 'Corridor Status', value: 'High-Tech Strategic Desk' },
    ],
    keySectors: [
      'Precision Machinery & Automation',
      'Semiconductor Equipment & Hardware',
      'Automotive EV Technologies',
      'Specialty Chemicals & Bio-Tech',
      'Green Hydrogen & Clean Energy',
    ],
    representatives: [
      { name: 'Tokyo Bilateral Desk', designation: 'CEPA Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  malaysia: {
    slug: 'malaysia',
    country: 'Malaysia',
    title: 'Namaste Malaysia ASEAN Industrial Corridor',
    tagline: 'Strengthening MICECA Bilateral Comprehensive Economic Cooperation',
    heroBadge: 'ASEAN INDUSTRIAL GATEWAY • KUALA LUMPUR DESK',
    overview: [
      'Under the Malaysia-India Comprehensive Economic Cooperation Agreement (MICECA) and AIFTA, bilateral trade spans palm oil derivatives, electrical machinery, chemicals, and metal products exceeding US$ 19 Billion.',
      'Port Klang serves as an essential transshipment hub connecting Indian maritime container lines with the broader Southeast Asian consumer economy.',
      'Namaste Malaysia organizes targeted business summits, cold-chain food supply networks, and contract manufacturing alliances.',
    ],
    stats: [
      { label: 'Bilateral Trade', value: 'US$ 19+ Billion' },
      { label: 'Trade Agreement', value: 'MICECA & AIFTA' },
      { label: 'Key Port Gateway', value: 'Port Klang' },
      { label: 'Bilateral Desk', value: 'Active Industrial Corridor' },
    ],
    keySectors: [
      'Electrical Machinery & Solar Cells',
      'Palm Oil Processing & Oleochemicals',
      'Food & Halal Certified FMCG',
      'Engineering Goods & Auto Spares',
      'Petrochemical Derivatives',
    ],
    representatives: [
      { name: 'Kuala Lumpur Commerce Desk', designation: 'Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  indonesia: {
    slug: 'indonesia',
    country: 'Indonesia',
    title: 'Namaste Indonesia Energy & Resource Corridor',
    tagline: 'Largest ASEAN Economy & Bilateral Mineral, Energy & Food Trade',
    heroBadge: 'LARGEST ASEAN ECONOMY • JAKARTA & SURABAYA DESK',
    overview: [
      'Indonesia is the largest economy in Southeast Asia and India’s second-largest trading partner in the ASEAN region with bilateral trade crossing US$ 38 Billion.',
      'Key trade components include coal, palm oil, spices, automotive parts, pharmaceuticals, and infrastructure machinery.',
      'Namaste Indonesia provides institutional support for Indian companies establishing processing facilities, sourcing commodities, and bidding for infrastructure projects in Jakarta and Surabaya.',
    ],
    stats: [
      { label: 'Bilateral Trade', value: 'US$ 38+ Billion' },
      { label: 'ASEAN Ranking', value: '1st Largest Economy' },
      { label: 'Key Ports', value: 'Tanjung Priok & Surabaya' },
      { label: 'Trade Desk Status', value: 'Resource & Energy Hub' },
    ],
    keySectors: [
      'Thermal Coal & Mineral Resources',
      'Crude Palm Oil & Agro Commodities',
      'Automotive Components & Two-Wheelers',
      'Pharmaceuticals & Generics',
      'Renewable Energy & Mining Equipment',
    ],
    representatives: [
      { name: 'Jakarta Trade Directorate', designation: 'Bilateral Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  taiwan: {
    slug: 'taiwan',
    country: 'Taiwan',
    title: 'Namaste Taiwan Semiconductor & Hardware Desk',
    tagline: 'Global Leader in Microelectronics, PCB & Precision Machinery',
    heroBadge: 'SEMICONDUCTOR HUB • TAIPEI & KAOHSIUNG DESK',
    overview: [
      'Taiwan stands as the epicenter of global semiconductor manufacturing, advanced electronics design, and precision CNC machinery.',
      'Through Namaste Taiwan, Indian electronics manufacturers, EMS companies, and IoT startups access direct component sourcing, fabless design partnerships, and hardware tooling.',
      'We facilitate investor delegations for Taiwan-India electronics manufacturing clusters under India’s PLI (Production Linked Incentive) scheme.',
    ],
    stats: [
      { label: 'Global Semiconductor Share', value: '60%+ Advanced Chips' },
      { label: 'Key Sourcing Hubs', value: 'Taipei & Kaohsiung' },
      { label: 'PLI Scheme Synergy', value: 'Electronics & Hardware' },
      { label: 'Corridor Status', value: 'High-Tech Sourcing Desk' },
    ],
    keySectors: [
      'Semiconductors & Integrated Circuits',
      'Electronic Manufacturing Services (EMS)',
      'CNC Machine Tools & Automated Lathes',
      'Optical Lenses & Precision Sensors',
      'Electric Vehicle Power Inverters',
    ],
    representatives: [
      { name: 'Taipei Technology Desk', designation: 'Hardware Sourcing Lead', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  'south-korea': {
    slug: 'south-korea',
    country: 'South Korea',
    title: 'Namaste South Korea Smart Industry Corridor',
    tagline: 'India-Korea CEPA Gateway, Automotive Tech & Advanced Steel',
    heroBadge: 'SMART FACTORY HUB • SEOUL & BUSAN DESK',
    overview: [
      'The India-Korea Comprehensive Economic Partnership Agreement (CEPA) has driven major investments in automotive, steel, chemicals, and consumer electronics.',
      'Namaste South Korea assists Indian MSMEs in adopting Industry 4.0 smart factory standards, sourcing specialty steel, and establishing OEM supplier ties with Korean conglomerates.',
    ],
    stats: [
      { label: 'Trade Agreement', value: 'Bilateral CEPA' },
      { label: 'Bilateral Trade', value: 'US$ 27+ Billion' },
      { label: 'Key Port Hubs', value: 'Busan & Incheon' },
      { label: 'Corridor Focus', value: 'Smart Mfg & CleanTech' },
    ],
    keySectors: [
      'Automotive EV Technology',
      'High-Grade Specialty Steel',
      'Petrochemicals & Polymers',
      'Smart Factory Robotics',
      'Consumer Electronics & Displays',
    ],
    representatives: [
      { name: 'Seoul Bilateral Desk', designation: 'CEPA Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  southkorea: {
    slug: 'south-korea',
    country: 'South Korea',
    title: 'Namaste South Korea Smart Industry Corridor',
    tagline: 'India-Korea CEPA Gateway, Automotive Tech & Advanced Steel',
    heroBadge: 'SMART FACTORY HUB • SEOUL & BUSAN DESK',
    overview: [
      'The India-Korea Comprehensive Economic Partnership Agreement (CEPA) has driven major investments in automotive, steel, chemicals, and consumer electronics.',
    ],
    stats: [
      { label: 'Trade Agreement', value: 'Bilateral CEPA' },
      { label: 'Bilateral Trade', value: 'US$ 27+ Billion' },
    ],
    keySectors: ['Automotive', 'Specialty Steel', 'Electronics'],
    representatives: [],
    galleryImages: [],
  },
  oman: {
    slug: 'oman',
    country: 'Oman',
    title: 'Namaste Oman Bilateral Maritime Corridor',
    tagline: 'Direct Sea Route to GCC & Gateway to Sohar Industrial Port',
    heroBadge: 'GCC STRATEGIC GATEWAY • MUSCAT & SOHAR DESK',
    overview: [
      'Oman is India’s closest maritime neighbour in the Arabian Sea with direct ocean freight lanes connecting Mumbai and JNPT to Sohar and Salalah ports in under 4 days.',
      'Bilateral trade exceeds US$ 12 Billion across mineral fuels, fertilizers, iron, steel, and agricultural food products.',
      'Namaste Oman coordinates duty-free re-export opportunities and logistics hubbing in Sohar Freezone for Indian exporters.',
    ],
    stats: [
      { label: 'Bilateral Trade', value: 'US$ 12+ Billion' },
      { label: 'Shipping Transit', value: '3 - 4 Days Direct' },
      { label: 'Key Freezone', value: 'Sohar Industrial Port' },
      { label: 'Corridor Status', value: 'Active GCC Gateway' },
    ],
    keySectors: [
      'Urea & Chemical Fertilizers',
      'Mineral Fuels & Bitumen',
      'Iron & Steel Construction Products',
      'Fresh Produce, Rice & Spices',
      'Textiles & Industrial Uniforms',
    ],
    representatives: [
      { name: 'Muscat Commercial Desk', designation: 'Bilateral Trade Lead', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  qatar: {
    slug: 'qatar',
    country: 'Qatar',
    title: 'Namaste Qatar Energy & Infrastructure Desk',
    tagline: 'Major LNG Exporter & Commercial Infrastructure Channel',
    heroBadge: 'ENERGY & INFRASTRUCTURE HUB • DOHA & HAMAD DESK',
    overview: [
      'Qatar is India’s largest supplier of Liquefied Natural Gas (LNG), accounting for over 48% of India’s total LNG imports.',
      'In return, India exports major volumes of iron, steel, plastics, construction equipment, cereals, and consumer goods.',
      'Namaste Qatar assists Indian enterprise in vendor registration for major Qatari state projects, Hamad Port clearance, and food supply chains.',
    ],
    stats: [
      { label: 'Bilateral Trade', value: 'US$ 18+ Billion' },
      { label: 'LNG Import Share', value: '48% of India Total' },
      { label: 'Key Port', value: 'Hamad Deep Sea Port' },
      { label: 'Corridor Status', value: 'Energy & Trade Desk' },
    ],
    keySectors: [
      'LNG & Downstream Petrochemicals',
      'Commercial Construction Materials',
      'Agro & Packaged Food Supplies',
      'IT & Cloud Infrastructure',
      'Engineering Equipment & Pipes',
    ],
    representatives: [
      { name: 'Doha Bilateral Desk', designation: 'Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  'south-africa': {
    slug: 'south-africa',
    country: 'South Africa',
    title: 'Namaste South Africa & SADC Commercial Hub',
    tagline: 'Gateway to the Southern African Development Community (SADC)',
    heroBadge: 'AFRICAN CONTINENTAL GATEWAY • JOHANNESBURG & DURBAN DESK',
    overview: [
      'South Africa serves as the primary commercial springboard into the 16-nation Southern African Development Community (SADC) with bilateral trade exceeding US$ 18 Billion.',
      'Trade is driven by precious metals, coal, automotive components, pharmaceuticals, and agricultural machinery.',
      'Namaste South Africa coordinates buyer-seller delegations to Johannesburg, Cape Town, and Durban Port.',
    ],
    stats: [
      { label: 'Bilateral Trade', value: 'US$ 18+ Billion' },
      { label: 'Regional Reach', value: '16 SADC Nations' },
      { label: 'Key Gateway Port', value: 'Durban Commercial Port' },
      { label: 'Corridor Status', value: 'African Anchor Hub' },
    ],
    keySectors: [
      'Automotive Assemblies & Spares',
      'Pharmaceuticals & Generic Medicines',
      'Precious Minerals & Coal',
      'Agro-Processing & Food Machinery',
      'Textiles & Leather Products',
    ],
    representatives: [
      { name: 'Johannesburg Trade Desk', designation: 'SADC Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  southafrica: {
    slug: 'south-africa',
    country: 'South Africa',
    title: 'Namaste South Africa & SADC Commercial Hub',
    tagline: 'Gateway to the Southern African Development Community (SADC)',
    heroBadge: 'AFRICAN CONTINENTAL GATEWAY • JOHANNESBURG & DURBAN DESK',
    overview: [
      'South Africa serves as the primary commercial springboard into the 16-nation Southern African Development Community (SADC) with bilateral trade exceeding US$ 18 Billion.',
    ],
    stats: [{ label: 'Bilateral Trade', value: 'US$ 18+ Billion' }],
    keySectors: ['Automotive', 'Pharma', 'Mining'],
    representatives: [],
    galleryImages: [],
  },
  ethiopia: {
    slug: 'ethiopia',
    country: 'Ethiopia',
    title: 'Namaste Ethiopia East Africa Industrial Desk',
    tagline: 'Fast-Growing East African Economy & Industrial Park Sourcing Base',
    heroBadge: 'EAST AFRICA MANUFACTURING HUB • ADDIS ABABA DESK',
    overview: [
      'India is one of the top foreign investors in Ethiopia with Indian enterprises investing heavily in textile manufacturing, agriculture, pharmaceuticals, and engineering.',
      'Through Modjo Dry Port and Djibouti maritime corridor, Indian machinery, yarn, and medicines reach rapidly growing African consumer markets.',
      'Namaste Ethiopia coordinates factory setup advisory in Hawassa and Bole Lemi Industrial Parks.',
    ],
    stats: [
      { label: 'Indian Investment', value: 'Top 3 Foreign Investor' },
      { label: 'Hub Cities', value: 'Addis Ababa & Hawassa' },
      { label: 'Maritime Route', value: 'Via Djibouti Port' },
      { label: 'Corridor Status', value: 'East Africa Trade Linkage' },
    ],
    keySectors: [
      'Textiles & Garment Manufacturing',
      'Pharmaceuticals & Veterinary Drugs',
      'Agricultural Irrigation & Tractors',
      'Food Processing & Pulses',
      'Chemicals & Plastic Packaging',
    ],
    representatives: [
      { name: 'Addis Ababa Commerce Desk', designation: 'Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  germany: {
    slug: 'germany',
    country: 'Germany',
    title: 'Namaste Germany EU Anchor Engineering Gateway',
    tagline: 'Europe’s Largest Economy, High-End Engineering & Industry 4.0',
    heroBadge: 'EUROPEAN UNION ANCHOR • FRANKFURT & HAMBURG DESK',
    overview: [
      'Germany is India’s largest trading partner in the European Union and one of the world’s top technology providers in precision engineering, renewable energy, and automotive innovation.',
      'Bilateral trade exceeds US$ 30 Billion, supported by over 2,000 German enterprises operating in India and hundreds of Indian IT/engineering firms in Germany.',
      'Namaste Germany handholds Indian engineering MSMEs in European CE certification, trade fair delegations (Hannover Messe, Medica), and buyer linkages in Frankfurt and Hamburg.',
    ],
    stats: [
      { label: 'EU Ranking', value: '1st Largest Trade Partner' },
      { label: 'Bilateral Trade', value: 'US$ 30+ Billion' },
      { label: 'Key Trade Hubs', value: 'Frankfurt, Hamburg, Munich' },
      { label: 'Corridor Status', value: 'EU Anchor Technology Hub' },
    ],
    keySectors: [
      'Heavy Industrial Machinery & Tools',
      'Automotive Systems & Clean Mobility',
      'Chemicals & Pharmaceuticals',
      'CleanTech, Solar & Green Hydrogen',
      'High-End Metal Engineering Castings',
    ],
    representatives: [
      { name: 'Frankfurt Bilateral Desk', designation: 'EU Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
  russia: {
    slug: 'russia',
    country: 'Russia',
    title: 'Namaste Russia Strategic Energy & INSTC Corridor',
    tagline: 'INSTC Multimodal Logistics, Rupee-Rouble Settlement & Energy Trade',
    heroBadge: 'EURASIAN STRATEGIC CORRIDOR • MOSCOW & ST. PETERSBURG',
    overview: [
      'India-Russia bilateral trade has surged past US$ 65 Billion, driven by energy imports, fertilizers, metallurgy, and Indian agricultural/pharmaceutical exports.',
      'The International North-South Transport Corridor (INSTC) via Bandar Abbas cuts container transit time between Mumbai and St. Petersburg to under 20 days.',
      'Namaste Russia facilitates alternative payment settlements (Rupee-Rouble Vostro accounts), logistics routing, and Russian market entry for Indian exporters.',
    ],
    stats: [
      { label: 'Bilateral Trade', value: 'US$ 65+ Billion' },
      { label: 'Logistics Corridor', value: 'INSTC Multimodal Route' },
      { label: 'Settlement Mechanism', value: 'Rupee-Rouble Vostro' },
      { label: 'Transit Time', value: '< 20 Days via INSTC' },
    ],
    keySectors: [
      'Crude Oil & Petroleum Derivatives',
      'Fertilizers & Potash Chemicals',
      'Pharmaceuticals & Active Ingredients',
      'Tea, Coffee, Spices & Fresh Agro',
      'Heavy Metallurgy & Engineering',
    ],
    representatives: [
      { name: 'Moscow Bilateral Desk', designation: 'INSTC Trade Officer', image: 'https://namastevishwaudyam.org/img/vlogo.png' },
    ],
    galleryImages: [],
  },
};
