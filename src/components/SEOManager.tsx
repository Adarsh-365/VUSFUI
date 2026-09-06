import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaData {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
}

const BASE_URL = 'https://namastevishwaudyam.org';

const ALIAS_CANONICAL_MAP: Record<string, string> = {
  '/service': '/services',
  '/chapter': '/chapters',
  '/career': '/careers',
  '/csr': '/csr-initiative',
  '/event/women-entrepreneur-growth-program': '/events/women-entrepreneur-growth-program',
  '/event/sc-st-startup-program': '/events/sc-st-startup-program',
  '/event/sc-st-entrepreneur-program': '/events/sc-st-entrepreneur-program',
  '/event/canton-fair-delegation': '/events/canton-fair-delegation',
};

const STATIC_SEO_MAP: Record<string, MetaData> = {
  '/': {
    title: 'Vishwa Udyam Sahayta Foundation | Empowering MSMEs, Startups & Global Trade',
    description: 'Empowering Indian MSMEs, startups, and entrepreneurs through international trade delegations, government scheme facilitation, and industrial infrastructure development.',
    image: '/banner/navi-mumbai-export-summit.jpeg',
  },
  '/about': {
    title: 'About Us | Vishwa Udyam Sahayta Foundation',
    description: 'Learn about Vishwa Udyam Sahayta Foundation, a Section 8 non-profit organization catalyzing Indian MSME growth, industrial clusters, and global trade corridors.',
    image: '/banner/navi-mumbai-export-summit.jpeg',
  },
  '/about/overview': {
    title: 'Overview & Mission | Vishwa Udyam Sahayta Foundation',
    description: 'Explore the vision, mission, and nationwide ecosystem initiatives of Vishwa Udyam Sahayta Foundation connecting businesses with government and global markets.',
    image: '/banner/navi-mumbai-export-summit.jpeg',
  },
  '/about/president': {
    title: 'Founder & President’s Desk | Vishwa Udyam Sahayta Foundation',
    description: 'Message and vision from Pragati Tayde, Founder and President of Vishwa Udyam Sahayta Foundation, dedicated to grassroots enterprise and women entrepreneurship.',
    image: '/members/pragati.jpeg',
  },
  '/about/board': {
    title: 'Board of Directors & Trustees | Vishwa Udyam Sahayta Foundation',
    description: 'Meet the visionary leaders, directors, and trustees guiding Vishwa Udyam Sahayta Foundation in industrial advancement and enterprise acceleration.',
  },
  '/service': {
    title: 'Comprehensive MSME & Trade Services | Vishwa Udyam Sahayta Foundation',
    description: 'Explore full-spectrum enterprise services including B2B linkages, company incorporation, export advisory, GeM portal assistance, and startup grants.',
  },
  '/services': {
    title: 'Comprehensive MSME & Trade Services | Vishwa Udyam Sahayta Foundation',
    description: 'Explore full-spectrum enterprise services including B2B linkages, company incorporation, export advisory, GeM portal assistance, and startup grants.',
  },
  '/services/b2b-service': {
    title: 'B2B Business Matchmaking Services | Vishwa Udyam Sahayta Foundation',
    description: 'Connect with verified institutional buyers, trade partners, and cross-border commercial desks through specialized B2B networking and trade facilitation.',
  },
  '/services/start-company': {
    title: 'Start a Company: Incorporation & Regulatory Handholding | VUSF',
    description: 'End-to-end guidance for company incorporation, MCA filings, DPIIT recognition, GSTIN, and compliance setup for emerging entrepreneurs and startups.',
  },
  '/services/start-import-export': {
    title: 'Start an Import-Export Business: DGFT & Customs Setup | VUSF',
    description: 'Complete advisory for launching an export-import enterprise: IEC code issuance, AD Code registration, ICEGATE enablement, and international market research.',
  },
  '/services/one-to-one-counselling': {
    title: 'One-to-One Enterprise Counselling & Mentorship | VUSF',
    description: 'Personalized executive consultation for MSME founders on financial structuring, export expansion, technology upgrades, and business scaling roadmaps.',
  },
  '/services/product-launch-other-country': {
    title: 'Launch a Product in Another Country: Global Expansion | VUSF',
    description: 'Comprehensive cross-border product launch assistance: overseas regulatory compliance, phytosanitary certifications, distribution channels, and retail entry.',
  },
  '/services/start-business-other-country': {
    title: 'Start a Business in Another Country: Offshore Setup | VUSF',
    description: 'Set up overseas business entities, free zone licenses, corporate bank accounts, and commercial branch offices in key international trade hubs like the UAE and China.',
  },
  '/services/infrastructure-development': {
    title: 'Industrial Infrastructure Development & Cluster Planning | VUSF',
    description: 'Turnkey planning for MSME industrial parks, pre-engineered building (PEB) clusters, common effluent treatment facilities, and warehousing logistics.',
  },
  '/services/exhibitions': {
    title: 'Trade Exhibitions & Global Expo Delegations | VUSF',
    description: 'Participate in national and international trade expos with subsidized stalls, curated buyer meetings, and turnkey exhibition management services.',
  },
  '/services/seminars-webinars': {
    title: 'Business Seminars, Webinars & Masterclasses | VUSF',
    description: 'High-impact seminars and technical masterclasses on export compliance, government subsidies, trade finance, and industrial modernization.',
  },
  '/services/gem-portal': {
    title: 'GeM Portal Onboarding, Vendor Assessment & Bidding | VUSF',
    description: 'Access eligible public sector procurement opportunities on Government e-Marketplace (GeM) with OEM assessment, cataloguing, and compliant bid strategy.',
  },
  '/services/namaste-china': {
    title: 'Namaste China: Direct OEM Sourcing & Canton Fair Delegations | VUSF',
    description: 'Direct factory sourcing, verified machinery procurement, Canton Fair business delegations, and on-site factory quality inspections across China.',
  },
  '/services/foreign-investment': {
    title: 'Foreign Direct Investment (FDI) & Cross-Border Advisory | VUSF',
    description: 'Strategic advisory for foreign investments, joint ventures, sovereign wealth collaboration, and technology transfers into Indian manufacturing corridors.',
  },
  '/services/finance-and-investment': {
    title: 'Finance & Investment: CGTMSE Loans, Subsidies & Debt Capital | VUSF',
    description: 'Unlock collateral-free bank credit up to ₹5 crore via CGTMSE, central capital subsidies, term loans, and working capital syndication for MSMEs.',
  },
  '/services/government-msme-support': {
    title: 'Government MSME Schemes, PMEGP & Subsidy Facilitation | VUSF',
    description: 'Navigate government MSME incentives: PMEGP, Stand-Up India, ZED certification, Lean manufacturing subsidies, and interest equalization benefits.',
  },
  '/services/market-linkage': {
    title: 'Supply Chain & Market Linkage Across 20 Global Economies | VUSF',
    description: 'Bridge local Indian manufacturing with institutional buyers across 20 strategic economies including Nepal, China, the UAE, Germany, and Southeast Asia.',
  },
  '/services/startup': {
    title: 'Startup Acceleration: DPIIT, Section 80-IAC & Seed Grants | VUSF',
    description: 'Institutional startup acceleration: fast-track DPIIT recognition, guidance on Section 80-IAC tax holiday filings, and non-dilutive seed fund linkages.',
  },
  '/sectors': {
    title: 'Focus Industrial Sectors | Vishwa Udyam Sahayta Foundation',
    description: 'Discover strategic initiatives across key sectors: agriculture, automotive, aerospace, renewable energy, chemicals, textiles, and engineering.',
  },
  '/chapter': {
    title: 'Regional & District Chapters | Vishwa Udyam Sahayta Foundation',
    description: 'Explore our growing network of state chapters, district trade desks, and international liaison offices bridging grassroots enterprise with global trade.',
  },
  '/chapters': {
    title: 'Regional & District Chapters | Vishwa Udyam Sahayta Foundation',
    description: 'Explore our growing network of state chapters, district trade desks, and international liaison offices bridging grassroots enterprise with global trade.',
  },
  '/international': {
    title: 'International Trade Hub & 20 Country Corridors | VUSF',
    description: 'Connect with 20 international trade desks including the UAE, China, Nepal, Vietnam, Germany, Japan, and Singapore for seamless export-import expansion.',
  },
  '/namaste-india-group': {
    title: 'Namaste India Group Timeline & Milestones | VUSF',
    description: 'Explore the journey and international milestones of Namaste India Group and Vishwa Udyam Sahayta Foundation across bilateral trade summits and expos.',
  },
  '/events': {
    title: 'Business Summits, Expos & Conclaves | Vishwa Udyam Sahayta Foundation',
    description: 'Register for upcoming export conclaves, national MSME summits, buyer-seller meets, and executive trade delegations organized by VUSF.',
  },
  '/events/women-entrepreneur-growth-program': {
    title: 'Women Entrepreneurship Growth Program | Pillai University & VUSF',
    description: 'Exclusive 1-day executive development program for women founders, offering mentorship, funding pathways, and export linkages at Pillai University, Panvel.',
    image: '/banner/women-enter-growth-prg1da.jpeg',
  },
  '/events/canton-fair-delegation': {
    title: 'Canton Fair 2026 Delegation - Guangzhou | Namaste China & VUSF',
    description: 'Join India’s premier Canton Fair sourcing delegation in Guangzhou: direct factory visits, OEM suppliers, machinery sourcing, and bilateral trade facilitation.',
    image: '/banner/namaste-china.jpeg',
  },
  '/events/sc-st-startup-program': {
    title: 'SC/ST Entrepreneurship & Startup Program | Pillai University & VUSF',
    description: 'Dedicated 1-day entrepreneurship acceleration workshop empowering SC/ST entrepreneurs with Stand-Up India financing, GeM access, and market linkage.',
    image: '/banner/sc-ststartup1day.jpeg',
  },
  '/events/sc-st-entrepreneur-program': {
    title: 'SC / ST Entrepreneur Growth & Empowerment Program | VUSF',
    description: 'Specialized 3-day empowerment masterclass offering comprehensive bank credit linkages, government subsidies (PMEGP/CMEGP), and bank-ready DPR preparation.',
    image: '/banner/sc-ststartup1day.jpeg',
  },
  '/csr-initiative': {
    title: 'CSR Initiatives: Agroforestry, Health & Community Empowerment | VUSF',
    description: 'Explore VUSF CSR projects: mass agroforestry plantation drives, rural menstrual hygiene programs, and vocational skilling for inclusive national growth.',
    image: '/banner/navi-mumbai-export-summit.jpeg',
  },
  '/career': {
    title: 'Careers & Internship Opportunities | Vishwa Udyam Sahayta Foundation',
    description: 'Join Vishwa Udyam Sahayta Foundation to build meaningful careers in international trade facilitation, MSME policy research, and corporate development.',
    image: '/banner/navi-mumbai-export-summit.jpeg',
  },
  '/contact': {
    title: 'Contact Us | Vishwa Udyam Sahayta Foundation Apex Secretariat',
    description: 'Contact Vishwa Udyam Sahayta Foundation at our Navi Mumbai corporate secretariat or designated state and international trade desks for immediate support.',
    image: '/banner/navi-mumbai-export-summit.jpeg',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Vishwa Udyam Sahayta Foundation',
    description: 'Official privacy policy of Vishwa Udyam Sahayta Foundation outlining data protection practices, non-disclosure commitments, and user rights.',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Vishwa Udyam Sahayta Foundation',
    description: 'Terms and conditions governing the use of Vishwa Udyam Sahayta Foundation platform, conference passes, advisory services, and memberships.',
  },
  '/msme-charter': {
    title: 'MSME Charter & Code of Ethics | Vishwa Udyam Sahayta Foundation',
    description: 'The ethical commitments, governance principles, and service standards guiding Vishwa Udyam Sahayta Foundation in empowering Indian MSMEs.',
  },
  '/admin': {
    title: 'Admin Dashboard | Vishwa Udyam Sahayta Foundation',
    description: 'Internal administrative dashboard for event bookings and registrations.',
  },
};

export const SEOManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let meta = STATIC_SEO_MAP[pathname];

    if (!meta) {
      if (pathname.startsWith('/sectors/')) {
        const sectorSlug = pathname.replace('/sectors/', '').replace(/-/g, ' ');
        const formatted = sectorSlug.replace(/\b\w/g, (c) => c.toUpperCase());
        meta = {
          title: `${formatted} Sector Solutions | Vishwa Udyam Sahayta Foundation`,
          description: `Explore strategic opportunities, government incentives, supply chain linkages, and trade prospects in India’s ${formatted} industry.`,
          image: '/banner/navi-mumbai-export-summit.jpeg',
        };
      } else if (pathname.startsWith('/international/')) {
        const countrySlug = pathname.replace('/international/', '').replace(/-/g, ' ');
        const formatted = countrySlug.replace(/\b\w/g, (c) => c.toUpperCase());
        meta = {
          title: `Namaste ${formatted} Trade Corridor & Desk | VUSF`,
          description: `Bilateral trade opportunities, buyer-seller meetings, export regulations, and market entry facilitation connecting Indian enterprises with ${formatted}.`,
          image: '/banner/navi-mumbai-export-summit.jpeg',
        };
      } else if (pathname.startsWith('/events/')) {
        const eventSlug = pathname.replace('/events/', '').replace(/-/g, ' ');
        const formatted = eventSlug.replace(/\b\w/g, (c) => c.toUpperCase());
        meta = {
          title: `${formatted} | VUSF Official Event Registration`,
          description: `Official registration details, delegate passes, keynote agendas, and expected participant benefits for ${formatted} by VUSF.`,
          image: '/banner/navi-mumbai-export-summit.jpeg',
        };
      } else if (pathname.startsWith('/blog/') || pathname.startsWith('/blogs/')) {
        const blogSlug = pathname.split('/').pop()?.replace(/-/g, ' ') || 'Article';
        const formatted = blogSlug.replace(/\b\w/g, (c) => c.toUpperCase());
        meta = {
          title: `${formatted} | Vishwa Udyam Industry Insights`,
          description: `In-depth analysis and policy updates on Indian MSME competitiveness, export strategies, and trade corridor developments from Vishwa Udyam Foundation.`,
          image: '/banner/MAGZINE.jpeg',
        };
      } else {
        meta = {
          title: 'Page Not Found (404) | Vishwa Udyam Sahayta Foundation',
          description: 'The requested page could not be located on Vishwa Udyam Sahayta Foundation’s digital platform. Return to the homepage or search our services.',
          image: '/banner/navi-mumbai-export-summit.jpeg',
        };
      }
    }

    // Determine Canonical URL (normalize aliases)
    let canonicalPath = ALIAS_CANONICAL_MAP[pathname];
    if (!canonicalPath) {
      if (pathname.startsWith('/event/')) {
        canonicalPath = pathname.replace('/event/', '/events/');
      } else {
        canonicalPath = pathname;
      }
    }
    if (canonicalPath.length > 1 && canonicalPath.endsWith('/')) {
      canonicalPath = canonicalPath.slice(0, -1);
    }
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    // Compute absolute image URL
    const rawImage = meta.image || '/banner/navi-mumbai-export-summit.jpeg';
    const absoluteImageUrl = rawImage.startsWith('http') ? rawImage : `${BASE_URL}${rawImage}`;

    // 1. Set Document Title
    document.title = meta.title;

    // Helper to safely set/create meta tags
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Meta Description
    setMetaTag('name', 'description', meta.description);

    // 3. OpenGraph Tags
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', pathname.startsWith('/blog') ? 'article' : 'website');
    setMetaTag('property', 'og:site_name', 'Vishwa Udyam Sahayta Foundation');
    setMetaTag('property', 'og:image', absoluteImageUrl);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', absoluteImageUrl);
    setMetaTag('name', 'twitter:site', '@VishwaUdyam');

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 6. Robots Meta Tag (Enforce noindex on admin portal)
    if (pathname.startsWith('/admin')) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow, max-image-preview:large');
    }
  }, [pathname]);

  return null;
};
