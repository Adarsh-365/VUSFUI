export interface Publication {
  id: string;
  title: string;
  partner: string;
  date: string;
  badge?: string;
  subtitle: string;
  summary: string;
  tags: string[];
  coverColor: string;
  coverImage?: string;
  downloadUrl?: string;
}

export interface PressReleaseItem {
  id: string;
  date: string;
  category: string;
  title: string;
  source?: string;
  content: string;
  linkText?: string;
  linkUrl?: string;
  blogSlug?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  featured?: boolean;
  category?: string;
  description: string;
  gallery?: string[];
  dignitaries?: string[];
  outcomes?: string[];
  fullStory?: string;
  highlights?: string[];
}

export interface PodcastEpisode {
  id: string;
  title: string;
  episodeNumber: number;
  series: string;
  date: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  summary: string;
  guest: string;
  guestTitle: string;
  host: string;
  hostTitle: string;
  topics: string[];
}

export interface SpotlightItem {
  id: string;
  outlet: string;
  date: string;
  title: string;
  link: string;
}

export interface MajorInitiative {
  id: string;
  name: string;
  tagline: string;
  theme: string;
  bgColor: string;
  textColor: string;
  description: string;
}

export interface OfficeBearer {
  id: string;
  name: string;
  designation: string;
  image: string;
  company?: string;
  bio: string;
  leadershipAreas?: string[];
  roleCategory?: 'founder' | 'executive';
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
  email?: string;
  phone?: string;
  credentials?: string;
}

