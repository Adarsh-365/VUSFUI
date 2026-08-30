import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronsRight } from 'lucide-react';
import { EVENT_HIGHLIGHTS_DATA } from '../data/ficciData';
import { EventItem } from '../types';

interface EventHighlightsProps {
  onSelectEvent?: (event: EventItem) => void;
  onViewAll?: () => void;
}

export const EventHighlights: React.FC<EventHighlightsProps> = ({
  onSelectEvent,
  onViewAll,
}) => {
  const navigate = useNavigate();
  const featuredEvent = EVENT_HIGHLIGHTS_DATA[0];
  const sideEvents = EVENT_HIGHLIGHTS_DATA.slice(1);

  const handleEventClick = (event: EventItem) => {
    navigate(`/namaste-india-group/${event.id}`);
  };

  return (
    <section id="event-highlights" className="relative py-12 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with "Events" watermark */}
        <div className="relative flex items-center justify-between pb-6">
          <div className="relative">
            <span className="absolute -top-7 -left-1 text-5xl sm:text-6xl font-serif-title section-watermark">
              Events
            </span>
            <h2 className="relative text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
              Event Highlights &amp; Conclaves
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Major trade expos, buyer-seller meetings and industrial summits
            </p>
          </div>

          <button
            onClick={() => {
              if (onViewAll) onViewAll();
              else navigate('/events');
            }}
            className="flex items-center gap-1 text-slate-500 hover:text-[#c2410c] font-bold text-lg transition-colors p-1 cursor-pointer"
            title="View all Event Highlights"
          >
            <ChevronsRight className="w-6 h-6" />
          </button>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
          {/* Left Column: Featured Event (Uday Samant Award) */}
          {featuredEvent && (
            <div
              onClick={() => handleEventClick(featuredEvent)}
              className="lg:col-span-5 group cursor-pointer flex flex-col bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all"
            >
              {/* Image banner with backdrop */}
              <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/20 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-xs px-3 py-1 rounded text-[10px] font-extrabold text-[#7c2d12] shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{featuredEvent.category || 'Government Recognition & State Honors'}</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors leading-tight">
                    {featuredEvent.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 font-normal">
                    {featuredEvent.date} • {featuredEvent.location}
                  </p>
                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {featuredEvent.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold text-[#c2410c] group-hover:underline inline-flex items-center gap-1">
                    Explore Conclave Details &amp; Highlights →
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: 3 Stacked Event Cards (Navi Mumbai, Vietnam Meet, China 2025) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {sideEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => handleEventClick(event)}
                className="group cursor-pointer flex flex-col sm:flex-row items-stretch bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all p-3 sm:p-3.5 gap-3.5 sm:gap-4"
              >
                {/* Thumbnail */}
                <div className="w-full sm:w-48 aspect-[16/10] sm:aspect-auto rounded-lg overflow-hidden bg-slate-900 shrink-0 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100 min-h-[95px]"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-amber-300 text-[9px] font-extrabold px-2 py-0.5 rounded">
                    {event.date}
                  </div>
                </div>

                {/* Text details */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-[#c2410c] tracking-wider block mb-1">
                      {event.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#c2410c] transition-colors leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 font-normal">
                      {event.location}
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#c2410c] group-hover:underline">
                      Explore Conclave &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
