import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Calendar, FileText, User, ArrowRight } from 'lucide-react';
import {
  PUBLICATIONS_DATA,
  PRESS_RELEASES_DATA,
  EVENT_HIGHLIGHTS_DATA,
  OFFICE_BEARERS_DATA,
  MAJOR_INITIATIVES_DATA,
} from '../data/ficciData';
import { DETAILED_EVENTS } from '../data/eventsData';

interface SearchModalProps {
  isOpen: boolean;
  initialQuery?: string;
  onClose: () => void;
  onSelectResult: (type: string, item: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  initialQuery = '',
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState<'all' | 'publications' | 'events' | 'press' | 'leadership'>('all');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
    const results: Array<{
      type: 'publication' | 'event' | 'press' | 'leader' | 'initiative';
      title: string;
      subtitle: string;
      item: any;
    }> = [];

    // Publications
    if (filter === 'all' || filter === 'publications') {
      PUBLICATIONS_DATA.forEach((pub) => {
        if (
          pub.title.toLowerCase().includes(q) ||
          pub.subtitle.toLowerCase().includes(q) ||
          pub.partner.toLowerCase().includes(q) ||
          pub.tags.some((t) => t.toLowerCase().includes(q))
        ) {
          results.push({
            type: 'publication',
            title: `${pub.title}: ${pub.subtitle}`,
            subtitle: `Knowledge Hub Study (${pub.partner} • ${pub.date})`,
            item: pub,
          });
        }
      });
    }

    // Events
    if (filter === 'all' || filter === 'events') {
      DETAILED_EVENTS.forEach((ev) => {
        if (
          ev.title.toLowerCase().includes(q) ||
          ev.location.toLowerCase().includes(q) ||
          ev.city.toLowerCase().includes(q) ||
          ev.eventType.toLowerCase().includes(q) ||
          ev.description.toLowerCase().includes(q)
        ) {
          results.push({
            type: 'event',
            title: ev.title,
            subtitle: `Forthcoming Conclave (${ev.date} • ${ev.city})`,
            item: ev,
          });
        }
      });

      EVENT_HIGHLIGHTS_DATA.forEach((ev) => {
        if (
          ev.title.toLowerCase().includes(q) ||
          ev.location.toLowerCase().includes(q) ||
          ev.category?.toLowerCase().includes(q)
        ) {
          results.push({
            type: 'event',
            title: ev.title,
            subtitle: `Event (${ev.date} • ${ev.location})`,
            item: ev,
          });
        }
      });

      if ('nepal food & beverage expo'.includes(q) || 'kathmandu'.includes(q) || 'trade meet'.includes(q)) {
        results.push({
          type: 'event',
          title: 'Nepal Food & Beverage Expo & India-Nepal Buyer-Seller Meet 2026',
          subtitle: 'Flagship Trade Expo (Oct 14-16, 2026 • Kathmandu, Nepal)',
          item: {
            title: 'Nepal Food & Beverage Expo & India-Nepal Buyer-Seller Meet 2026',
            date: 'Oct 14-16, 2026',
            location: 'Bhrikutimandap Hall, Kathmandu, Nepal',
          },
        });
      }
    }

    // Press Releases
    if (filter === 'all' || filter === 'press') {
      PRESS_RELEASES_DATA.forEach((pr) => {
        if (pr.title.toLowerCase().includes(q) || pr.content.toLowerCase().includes(q)) {
          results.push({
            type: 'press',
            title: pr.title,
            subtitle: `Press Release (${pr.date})`,
            item: pr,
          });
        }
      });
    }

    // Leadership
    if (filter === 'all' || filter === 'leadership') {
      OFFICE_BEARERS_DATA.forEach((ob) => {
        if (
          ob.name.toLowerCase().includes(q) ||
          ob.designation.toLowerCase().includes(q) ||
          ob.bio.toLowerCase().includes(q)
        ) {
          results.push({
            type: 'leader',
            title: `${ob.name} - ${ob.designation}`,
            subtitle: ob.company || 'Vishwa Udyam Sahayta Foundation Leadership',
            item: ob,
          });
        }
      });
    }

    return results;
  }, [query, filter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-orange-600 shrink-0" />
          <input
            type="text"
            placeholder="Search VUSF schemes, trade delegations, infrastructure, leadership..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 text-sm sm:text-base outline-none text-slate-800 placeholder-slate-400"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'publications', label: 'Knowledge Hub' },
            { id: 'events', label: 'Trade Events' },
            { id: 'press', label: 'Press Releases' },
            { id: 'leadership', label: 'Leadership' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1 rounded-full font-medium transition-colors shrink-0 ${
                filter === tab.id
                  ? 'bg-[#c2410c] text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-slate-100 space-y-1">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-400 text-xs">
              <p>Type keywords such as <strong>&quot;Nepal Expo&quot;</strong>, <strong>&quot;PMEGP Subsidy&quot;</strong>, <strong>&quot;Industrial Infra&quot;</strong>, <strong>&quot;Pragati Tayde&quot;</strong>, or <strong>&quot;MSME Registration&quot;</strong></p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-xs">
              No results found matching &quot;{query}&quot;. Try broader terms like &apos;MSME&apos;, &apos;Nepal&apos;, &apos;Infrastructure&apos;.
            </div>
          ) : (
            searchResults.map((res, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectResult(res.type, res.item);
                  onClose();
                }}
                className="pt-2 pb-2.5 px-2 hover:bg-orange-50/60 rounded-md cursor-pointer transition-colors group flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-slate-100 text-[#c2410c] shrink-0 mt-0.5">
                    {res.type === 'publication' && <BookOpen className="w-4 h-4" />}
                    {res.type === 'event' && <Calendar className="w-4 h-4" />}
                    {res.type === 'press' && <FileText className="w-4 h-4" />}
                    {res.type === 'leader' && <User className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#c2410c] leading-snug">
                      {res.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{res.subtitle}</p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#c2410c] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
