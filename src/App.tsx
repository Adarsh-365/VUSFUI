import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AboutOverviewPage } from './pages/AboutOverviewPage';
import { PresidentDeskPage } from './pages/PresidentDeskPage';
import { BoardOfDirectorsPage } from './pages/BoardOfDirectorsPage';
import { ServicePage } from './pages/ServicePage';

// 13 Distinct Dedicated Service Pages
import { B2BServicePage } from './pages/services/B2BServicePage';
import { StartCompanyPage } from './pages/services/StartCompanyPage';
import { StartImportExportPage } from './pages/services/StartImportExportPage';
import { OneToOneCounsellingPage } from './pages/services/OneToOneCounsellingPage';
import { ProductLaunchOtherCountryPage } from './pages/services/ProductLaunchOtherCountryPage';
import { StartBusinessOtherCountryPage } from './pages/services/StartBusinessOtherCountryPage';
import { InfrastructureDevelopmentPage } from './pages/services/InfrastructureDevelopmentPage';
import { ExhibitionSeminarWebinarPage } from './pages/services/ExhibitionSeminarWebinarPage';
import { ExhibitionPage } from './pages/services/ExhibitionPage';
import { SeminarWebinarPage } from './pages/services/SeminarWebinarPage';
import { GeMPortalPage } from './pages/services/GeMPortalPage';
import { NamasteChinaPage } from './pages/services/NamasteChinaPage';
import { ForeignInvestmentPage } from './pages/services/ForeignInvestmentPage';
import { FinanceAndInvestmentPage } from './pages/services/FinanceAndInvestmentPage';
import { GovernmentMSMESupportPage } from './pages/services/GovernmentMSMESupportPage';
import { MarketLinkagePage } from './pages/services/MarketLinkagePage';
import { StartupPage } from './pages/services/StartupPage';

// Sectors Hub and Dedicated Sector Page
import { SectorsPage } from './pages/SectorsPage';
import { SectorDetailPage } from './pages/SectorDetailPage';

// Chapter Page
import { ChapterPage } from './pages/ChapterPage';

// International Hub & Dedicated Country Pages
import { InternationalPage } from './pages/InternationalPage';
import { NamasteIndiaPage } from './pages/international/NamasteIndiaPage';
import { NamasteIndiaEventDetailPage } from './pages/international/NamasteIndiaEventDetailPage';
import { CountryCorridorPage } from './pages/international/CountryCorridorPage';

// Events & Media
import { EventsPage } from './pages/EventsPage';
import { EventLandingPage } from './pages/EventLandingPage';
import { BlogDetailPage } from './pages/BlogDetailPage';

// CSR Initiative & Career Pages
import { CSRInitiativePage } from './pages/CSRInitiativePage';
import { CareerPage } from './pages/CareerPage';

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

      {/* 1. Top Bar */}
      <TopBar
        onContactClick={() => {
          const footer = document.querySelector('footer');
          footer?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Main Navigation Bar */}
      <Navbar
        onSearchOpen={handleSearchOpen}
        onMemberClick={(type) => setMemberModalType(type)}
      />

      {/* 3. Multi-Page Route Outlet */}
      <main className="flex-1">
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

          {/* Fallback */}
          <Route
            path="*"
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
        </Routes>
      </main>

      {/* 4. Footer */}
      <Footer
        onLegalClick={(type) => {
          alert(`${type}: Official policy documentation of Vishwa Udyam Sahayta Foundation.`);
        }}
        onLinkClick={(link) => {
          handleSearchOpen(link);
        }}
      />

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
      <WhatsAppButton />

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
