import React, { useState } from 'react';
import { ChevronsRight, Play, ArrowRight, Share2, ExternalLink, Calendar, MapPin, Phone, Globe, Building, CheckCircle2 } from 'lucide-react';
import { PODCAST_DATA } from '../data/vusfData';

interface PodcastSeriesProps {
  onExploreMore: () => void;
  onPlayEpisode: () => void;
}

export const PodcastSeries: React.FC<PodcastSeriesProps> = ({
  onExploreMore,
  onPlayEpisode,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    setIsPlaying(true);
    onPlayEpisode();
  };

  const youtubeVideoId = 'hSLZkM2AzJY';
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

  return (
    <section id="podcast-series" className="relative py-12 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with "Series" watermark */}
        <div className="relative flex items-center justify-between pb-6">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark">
              Series
            </span>
            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Namaste India Audio Series – The Fine Print of MSME Trade
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Expert discussions, summit highlights, cross-border trade &amp; entrepreneurship
            </p>
          </div>

          <a
            href="https://www.youtube.com/@namaste_india_foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-500 hover:text-[#c2410c] text-xs sm:text-sm font-bold transition-colors p-1"
            title="Visit official YouTube Channel"
          >
            <span>Watch on YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          {/* Left Column: Video Card */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 shadow-xl border border-slate-200 group">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Navi Mumbai Business Summit 2026 | Official Event Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div
                  onClick={handlePlayToggle}
                  className="w-full h-full relative cursor-pointer flex items-center justify-center overflow-hidden"
                >
                  {/* Video Thumbnail */}
                  <img
                    src="/temp/IMAGES.jpeg"
                    alt="Navi Mumbai Business Summit 2026"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to YouTube Maxres Thumbnail if local image fails
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                  {/* Header Title Overlay */}
                  <div className="absolute top-0 left-0 right-0 p-3.5 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-white text-xs font-bold">
                    <span className="truncate pr-2">Navi Mumbai Business Summit 2026 | Official Event Highlights</span>
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow">
                      YouTube HD
                    </span>
                  </div>

                  {/* Red Center YouTube Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-12 sm:w-20 sm:h-14 bg-[#ff0000] hover:bg-[#cc0000] rounded-2xl flex items-center justify-center shadow-2xl transition-all transform group-hover:scale-110">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      Official Event Highlights
                    </span>
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-black/80 hover:bg-black text-white px-3 py-1 rounded-md text-[11px] font-semibold border border-white/20 flex items-center gap-1"
                    >
                      <span>Watch on</span>
                      <span className="font-bold text-red-500">YouTube</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Event Badges Under Video */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <Calendar className="w-4 h-4 text-[#c2410c] shrink-0" />
                <span className="font-semibold text-slate-800">18 July 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span className="font-semibold text-slate-800 truncate">Fortune Select Exotica, Vashi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Episode Details */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-orange-100 text-[#c2410c] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wide mb-2">
                Official Event Broadcast
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                Navi Mumbai Business Summit 2026 | Official Event Highlights
              </h3>
            </div>

            {/* Narrative */}
            <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              <p>
                Experience the best moments from the <strong>Navi Mumbai Business Summit 2026</strong>, where entrepreneurs, MSME owners, startup founders, manufacturers, exporters, professionals, and business leaders came together to build meaningful connections and explore new business opportunities.
              </p>
              <p>
                Organized by <strong>Vishwa Udyam Sahayta Foundation</strong>, <strong>SecureLife Fincorp</strong>, and <strong>India Post</strong>, the summit featured inspiring keynote sessions, business networking, knowledge sharing, and collaboration aimed at empowering businesses and fostering growth.
              </p>
              <p className="text-slate-600">
                The event created a platform for entrepreneurs to connect, exchange ideas, discover opportunities, and strengthen India's business ecosystem.
              </p>
            </div>

            {/* Organized By */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#c2410c]" />
                <span>Organized By</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Vishwa Udyam Sahayta Foundation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>SecureLife Fincorp</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>India Post</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
