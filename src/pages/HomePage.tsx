import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { PressRelease } from '../components/PressRelease';
import { ForthcomingEvents } from '../components/ForthcomingEvents';
import { EventHighlights } from '../components/EventHighlights';
import { PodcastSeries } from '../components/PodcastSeries';
import { MajorInitiatives } from '../components/MajorInitiatives';
import { OfficeBearers } from '../components/OfficeBearers';
import { StrategicCollaborations } from '../components/StrategicCollaborations';
import { SocialConnect } from '../components/SocialConnect';
import { BLOGS_DATA } from '../data/blogData';
import {
  PressReleaseItem,
  EventItem,
  MajorInitiative,
  OfficeBearer,
  Publication,
} from '../types';

interface HomePageProps {
  onSearchOpen: (query?: string) => void;
  onVoiceAssistantOpen: () => void;
  onSelectPressRelease: (pr: PressReleaseItem) => void;
  onSelectEvent: (event: EventItem | { title: string; date: string; location: string; description?: string }) => void;
  onSelectPublication: (pub: Publication) => void;
  onSelectLeader: (bearer: OfficeBearer) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSearchOpen,
  onVoiceAssistantOpen,
  onSelectPressRelease,
  onSelectEvent,
  onSelectPublication,
  onSelectLeader,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <HeroSlider
        onSearchClick={() => onSearchOpen()}
        onVoiceAssistantClick={onVoiceAssistantOpen}
        onPillarClick={(pillar) => {
          onSearchOpen(pillar);
        }}
      />

      {/* Press Release & Bulletins */}
      <PressRelease
        onSelectPressRelease={(pr) => {
          const matchedBlog = BLOGS_DATA.find(
            (b) =>
              b.slug === pr.blogSlug ||
              b.id === pr.id ||
              (pr.blogSlug && b.id.includes(pr.blogSlug)) ||
              (pr.id && b.id.includes(pr.id.replace('pr-', '')))
          );
          if (matchedBlog) {
            navigate(`/blog/${matchedBlog.slug}`);
          } else {
            navigate('/events');
          }
        }}
        onViewAll={() => navigate('/events')}
      />

      {/* Forthcoming Events */}
      <ForthcomingEvents
        onRegisterClick={(ev) => {
          if (ev && ev.id) {
            navigate(`/events/${ev.id}`);
          } else {
            navigate('/events');
          }
        }}
        onViewAll={() => navigate('/events')}
      />

      {/* Event Highlights */}
      <EventHighlights
        onViewAll={() => navigate('/events')}
      />

      {/* Audio Series */}
      <PodcastSeries
        onExploreMore={() => onSearchOpen('Podcast')}
        onPlayEpisode={() => {}}
      />

      {/* Major Initiatives */}
      <MajorInitiatives
        onSelectInitiative={(init: MajorInitiative) => {
          onSelectPublication({
            id: init.id,
            title: init.name,
            subtitle: init.tagline,
            partner: 'VUSF Flagship Wing',
            date: 'Active 2026',
            coverColor: init.bgColor,
            summary: init.description,
            tags: ['Initiative', 'MSME Development', 'Global Corridor'],
          });
        }}
        onViewAll={() => onSearchOpen('Initiative')}
      />

      {/* Governing Council & Office Bearers */}
      <OfficeBearers
        onSelectBearer={onSelectLeader}
      />

      {/* Strategic Collaborations & Institutional Partners */}
      <StrategicCollaborations />

      {/* Connect with VUSF */}
      <SocialConnect />
    </div>
  );
};
