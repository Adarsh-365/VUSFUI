import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Core Landing Page (immediate load)
import { HomePage } from './pages/HomePage';

// Lazy Loaded Pages
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const AboutOverviewPage = lazy(() => import('./pages/AboutOverviewPage').then(m => ({ default: m.AboutOverviewPage })));
const PresidentDeskPage = lazy(() => import('./pages/PresidentDeskPage').then(m => ({ default: m.PresidentDeskPage })));
const BoardOfDirectorsPage = lazy(() => import('./pages/BoardOfDirectorsPage').then(m => ({ default: m.BoardOfDirectorsPage })));
const ServicePage = lazy(() => import('./pages/ServicePage').then(m => ({ default: m.ServicePage })));

// 13 Distinct Dedicated Service Pages
const B2BServicePage = lazy(() => import('./pages/services/B2BServicePage').then(m => ({ default: m.B2BServicePage })));
const StartCompanyPage = lazy(() => import('./pages/services/StartCompanyPage').then(m => ({ default: m.StartCompanyPage })));
const StartImportExportPage = lazy(() => import('./pages/services/StartImportExportPage').then(m => ({ default: m.StartImportExportPage })));
const OneToOneCounsellingPage = lazy(() => import('./pages/services/OneToOneCounsellingPage').then(m => ({ default: m.OneToOneCounsellingPage })));
const ProductLaunchOtherCountryPage = lazy(() => import('./pages/services/ProductLaunchOtherCountryPage').then(m => ({ default: m.ProductLaunchOtherCountryPage })));
const StartBusinessOtherCountryPage = lazy(() => import('./pages/services/StartBusinessOtherCountryPage').then(m => ({ default: m.StartBusinessOtherCountryPage })));
const InfrastructureDevelopmentPage = lazy(() => import('./pages/services/InfrastructureDevelopmentPage').then(m => ({ default: m.InfrastructureDevelopmentPage })));
const ExhibitionSeminarWebinarPage = lazy(() => import('./pages/services/ExhibitionSeminarWebinarPage').then(m => ({ default: m.ExhibitionSeminarWebinarPage })));
const ExhibitionPage = lazy(() => import('./pages/services/ExhibitionPage').then(m => ({ default: m.ExhibitionPage })));
const SeminarWebinarPage = lazy(() => import('./pages/services/SeminarWebinarPage').then(m => ({ default: m.SeminarWebinarPage })));
const GeMPortalPage = lazy(() => import('./pages/services/GeMPortalPage').then(m => ({ default: m.GeMPortalPage })));
const NamasteChinaPage = lazy(() => import('./pages/services/NamasteChinaPage').then(m => ({ default: m.NamasteChinaPage })));
const ForeignInvestmentPage = lazy(() => import('./pages/services/ForeignInvestmentPage').then(m => ({ default: m.ForeignInvestmentPage })));
const FinanceAndInvestmentPage = lazy(() => import('./pages/services/FinanceAndInvestmentPage').then(m => ({ default: m.FinanceAndInvestmentPage })));
const GovernmentMSMESupportPage = lazy(() => import('./pages/services/GovernmentMSMESupportPage').then(m => ({ default: m.GovernmentMSMESupportPage })));
const MarketLinkagePage = lazy(() => import('./pages/services/MarketLinkagePage').then(m => ({ default: m.MarketLinkagePage })));
const StartupPage = lazy(() => import('./pages/services/StartupPage').then(m => ({ default: m.StartupPage })));

// Sectors Hub and Dedicated Sector Page
const SectorsPage = lazy(() => import('./pages/SectorsPage').then(m => ({ default: m.SectorsPage })));
const SectorDetailPage = lazy(() => import('./pages/SectorDetailPage').then(m => ({ default: m.SectorDetailPage })));

// Chapter Page
const ChapterPage = lazy(() => import('./pages/ChapterPage').then(m => ({ default: m.ChapterPage })));

// International Hub & Dedicated Country Pages
const InternationalPage = lazy(() => import('./pages/InternationalPage').then(m => ({ default: m.InternationalPage })));
const NamasteIndiaPage = lazy(() => import('./pages/international/NamasteIndiaPage').then(m => ({ default: m.NamasteIndiaPage })));
const NamasteIndiaEventDetailPage = lazy(() => import('./pages/international/NamasteIndiaEventDetailPage').then(m => ({ default: m.NamasteIndiaEventDetailPage })));
const CountryCorridorPage = lazy(() => import('./pages/international/CountryCorridorPage').then(m => ({ default: m.CountryCorridorPage })));

// Events & Media
const EventsPage = lazy(() => import('./pages/EventsPage').then(m => ({ default: m.EventsPage })));
const EventLandingPage = lazy(() => import('./pages/EventLandingPage').then(m => ({ default: m.EventLandingPage })));
const WomenEntrepreneur1DayPage = lazy(() => import('./pages/events/WomenEntrepreneur1DayPage').then(m => ({ default: m.WomenEntrepreneur1DayPage })));
const ScStEntrepreneurship1DayPage = lazy(() => import('./pages/events/ScStEntrepreneurship1DayPage').then(m => ({ default: m.ScStEntrepreneurship1DayPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));

// CSR Initiative & Career Pages
const CSRInitiativePage = lazy(() => import('./pages/CSRInitiativePage').then(m => ({ default: m.CSRInitiativePage })));
const CareerPage = lazy(() => import('./pages/CareerPage').then(m => ({ default: m.CareerPage })));

// Contact & NotFound Pages
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Legal Pages
const PrivacyPolicyPage = lazy(() => import('./pages/legal/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/legal/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const MsmeCharterPage = lazy(() => import('./pages/legal/MsmeCharterPage').then(m => ({ default: m.MsmeCharterPage })));

// Admin Management Dashboard
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage').then(m => ({ default: m.AdminDashboardPage })));

// SEO Manager
import { SEOManager } from './components/SEOManager';

// Modals
import { SearchModal } from './components/SearchModal';
import { PublicationModal } from './components/PublicationModal';
import { PressReleaseModal } from './components/PressReleaseModal';
import { EventModal } from './components/EventModal';
import { LeaderModal } from './components/LeaderModal';
import { MemberModal } from './components/MemberModal';
// import { VoiceAssistantModal } from './components/VoiceAssistantModal';
import { WhatsAppButton } from './components/WhatsAppButton';

import {
  Publication,
  PressReleaseItem,
  EventItem,
  OfficeBearer,
} from './types';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  // Modal states
  const [searchOpen, setSearchOpen] = useState(false);
  const [initialSearchQuery, setInitialSearchQuery] = useState('');
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const [selectedPressRelease, setSelectedPressRelease] = useState<PressReleaseItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | { title: string; date: string; location: string; description?: string } | null>(null);
  const [selectedLeader, setSelectedLeader] = useState<OfficeBearer | null>(null);
  const [memberModalType, setMemberModalType] = useState<'become' | 'members' | 'employee' | null>(null);
  const [voiceAssistantOpen, setVoiceAssistantOpen] = useState(false);

  const handleSearchOpen = (query?: string) => {
    setInitialSearchQuery(query || '');
    setSearchOpen(true);
  };

  const handleSelectSearchResult = (type: string, item: any) => {
    if (type === 'publication') {
      setSelectedPublication(item);
    } else if (type === 'event') {
      if (item && item.slug) {
        navigate(`/events/${item.slug}`);
      } else {
        setSelectedEvent(item);
      }
    } else if (type === 'press') {
      setSelectedPressRelease(item);
    } else if (type === 'leader') {
      setSelectedLeader(item);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800">
      <ScrollToTop />
      <SEOManager />

      {/* 1. Top Bar */}
      {!isAdmin && (
        <TopBar
          onContactClick={() => {
            navigate('/contact');
          }}
        />
      )}

      {/* 2. Main Navigation Bar */}
      {!isAdmin && (
        <Navbar
          onSearchOpen={handleSearchOpen}
          onMemberClick={(type) => setMemberModalType(type)}
        />
      )}

      {/* 3. Multi-Page Route Outlet */}
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 border-3 border-orange-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">Loading...</span>
            </div>
          }
        >
          <Routes>
          {/* 1. Home */}
          <Route
            path="/"
            element={
              <HomePage
                onSearchOpen={handleSearchOpen}
                onVoiceAssistantOpen={() => setVoiceAssistantOpen(true)}
                onSelectPressRelease={(pr) => setSelectedPressRelease(pr)}
                onSelectEvent={(ev) => setSelectedEvent(ev)}
                onSelectPublication={(pub) => setSelectedPublication(pub)}
                onSelectLeader={(bearer) => setSelectedLeader(bearer)}
              />
            }
          />

          {/* 2. About Hub & Standalone Pages */}
          <Route
            path="/about"
            element={
              <AboutPage
                onSelectBearer={(bearer) => setSelectedLeader(bearer)}
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/about/overview"
            element={
              <AboutOverviewPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/about/president"
            element={
              <PresidentDeskPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/about/board"
            element={
              <BoardOfDirectorsPage
                onSelectBearer={(bearer) => setSelectedLeader(bearer)}
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* 3. Service Overview Hub */}
          <Route
            path="/service"
            element={
              <ServicePage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicePage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* 13 Dedicated Service Pages */}
          <Route
            path="/services/b2b-service"
            element={<B2BServicePage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/start-company"
            element={<StartCompanyPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/start-import-export"
            element={<StartImportExportPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/one-to-one-counselling"
            element={<OneToOneCounsellingPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/product-launch-other-country"
            element={<ProductLaunchOtherCountryPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/start-business-other-country"
            element={<StartBusinessOtherCountryPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/infrastructure-development"
            element={<InfrastructureDevelopmentPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/exhibitions"
            element={<ExhibitionPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/seminars-webinars"
            element={<SeminarWebinarPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/exhibition-seminar-webinar"
            element={<ExhibitionPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/gem-portal"
            element={<GeMPortalPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/namaste-china"
            element={<NamasteChinaPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/foreign-investment"
            element={<ForeignInvestmentPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/finance-and-investment"
            element={<FinanceAndInvestmentPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/government-msme-support"
            element={<GovernmentMSMESupportPage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/market-linkage"
            element={<MarketLinkagePage onMemberClick={(type) => setMemberModalType(type)} />}
          />
          <Route
            path="/services/startup"
            element={<StartupPage onMemberClick={(type) => setMemberModalType(type)} />}
          />

          <Route
            path="/service/:slug"
            element={<ServicePage onMemberClick={(type) => setMemberModalType(type)} />}
          />

          {/* 4. Sectors Hub and Dedicated Sector Pages */}
          <Route
            path="/sectors"
            element={
              <SectorsPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/sectors/:sectorSlug"
            element={
              <SectorDetailPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/sector/:sectorSlug"
            element={
              <SectorDetailPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* 5. Chapter */}
          <Route
            path="/chapter"
            element={
              <ChapterPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/chapters"
            element={
              <ChapterPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* 6. International Hub & Country Desks */}
          <Route
            path="/international"
            element={
              <InternationalPage
                onMemberClick={(type) => setMemberModalType(type)}
                onSearchOpen={handleSearchOpen}
              />
            }
          />
          <Route
            path="/international/:countrySlug"
            element={
              <CountryCorridorPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* 6. Namaste India Group Timeline & Full Event Detail Pages */}
          <Route
            path="/namaste-india-group"
            element={
              <NamasteIndiaPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/namaste-india-group/:eventId"
            element={
              <NamasteIndiaEventDetailPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/international/namaste-india"
            element={
              <NamasteIndiaPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/international/namaste-india/:eventId"
            element={
              <NamasteIndiaEventDetailPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/timeline"
            element={
              <NamasteIndiaPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/timeline/:eventId"
            element={
              <NamasteIndiaEventDetailPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/milestone/:eventId"
            element={
              <NamasteIndiaEventDetailPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/milestones/:eventId"
            element={
              <NamasteIndiaEventDetailPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* 7. International Hub & Country Corridors */}
          <Route
            path="/international"
            element={
              <InternationalPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/international/:countrySlug"
            element={
              <CountryCorridorPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* 8. Events Page & Dedicated Event Landing Pages */}
          <Route
            path="/events"
            element={
              <EventsPage
                onSelectEvent={(ev) => setSelectedEvent(ev)}
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/events/women-entrepreneur-growth-program"
            element={
              <WomenEntrepreneur1DayPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/event/women-entrepreneur-growth-program"
            element={
              <WomenEntrepreneur1DayPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/events/sc-st-startup-program"
            element={
              <ScStEntrepreneurship1DayPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/event/sc-st-startup-program"
            element={
              <ScStEntrepreneurship1DayPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/events/:eventSlug"
            element={
              <EventLandingPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/event/:eventSlug"
            element={
              <EventLandingPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* Dedicated Blog & Article Pages */}
          <Route
            path="/blog/:slug"
            element={<BlogDetailPage />}
          />
          <Route
            path="/blogs/:slug"
            element={<BlogDetailPage />}
          />

          {/* 9. CSR Initiative */}
          <Route
            path="/csr-initiative"
            element={
              <CSRInitiativePage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/csr"
            element={
              <CSRInitiativePage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* 10. Career */}
          <Route
            path="/career"
            element={
              <CareerPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />
          <Route
            path="/careers"
            element={
              <CareerPage
                onMemberClick={(type) => setMemberModalType(type)}
              />
            }
          />

          {/* 11. Contact Page */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* 12. Legal Documentation Pages */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage />}
          />
          <Route
            path="/terms-of-service"
            element={<TermsOfServicePage />}
          />
          <Route
            path="/terms"
            element={<TermsOfServicePage />}
          />
          <Route
            path="/msme-charter"
            element={<MsmeCharterPage />}
          />

          {/* Admin Dashboard */}
          <Route
            path="/admin"
            element={<AdminDashboardPage />}
          />

          {/* Fallback 404 */}
          <Route
            path="*"
            element={<NotFoundPage onSearchOpen={handleSearchOpen} />}
          />
        </Routes>
        </Suspense>
      </main>

      {/* 4. Footer */}
      {!isAdmin && (
        <Footer
          onLegalClick={(type) => {
            alert(`${type}: Official policy documentation of Vishwa Udyam Sahayta Foundation.`);
          }}
          onLinkClick={(link) => {
            handleSearchOpen(link);
          }}
        />
      )}

      {/* Interactive Modals */}
      <SearchModal
        isOpen={searchOpen}
        initialQuery={initialSearchQuery}
        onClose={() => setSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      <PublicationModal
        publication={selectedPublication}
        onClose={() => setSelectedPublication(null)}
      />

      <PressReleaseModal
        item={selectedPressRelease}
        onClose={() => setSelectedPressRelease(null)}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <LeaderModal
        bearer={selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />

      <MemberModal
        type={memberModalType}
        onClose={() => setMemberModalType(null)}
      />

      {/* Floating WhatsApp Support Button */}
      {!isAdmin && <WhatsAppButton />}

      {/* Voice Assistant Hidden for now */}
      {/* <VoiceAssistantModal
        isOpen={voiceAssistantOpen}
        onClose={() => setVoiceAssistantOpen(false)}
        onNavigateSection={(sectionId) => {
          const el = document.querySelector(`#${sectionId}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      /> */}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
