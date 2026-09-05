import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, HelpCircle, Compass } from 'lucide-react';

interface NotFoundPageProps {
  onSearchOpen?: (query?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onSearchOpen }) => {
  return (
    <div className="min-h-[75vh] bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange-50 border border-orange-200 text-[#c2410c]">
          <span className="text-4xl font-black">404</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            The route or resource you are seeking is either unavailable, has been relocated, or does not exist on Vishwa Udyam Sahayta Foundation’s platform.
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Popular Destinations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold">
            <Link
              to="/"
              className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-[#c2410c] border border-slate-200 transition-colors flex flex-col items-center gap-1.5"
            >
              <Home className="w-4 h-4 text-slate-600" />
              <span>Home</span>
            </Link>
            <Link
              to="/services"
              className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-[#c2410c] border border-slate-200 transition-colors flex flex-col items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-slate-600" />
              <span>Services</span>
            </Link>
            <Link
              to="/events"
              className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-[#c2410c] border border-slate-200 transition-colors flex flex-col items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-slate-600" />
              <span>Events</span>
            </Link>
            <Link
              to="/contact"
              className="p-3 rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-[#c2410c] border border-slate-200 transition-colors flex flex-col items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-slate-600" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          {onSearchOpen && (
            <button
              onClick={() => onSearchOpen()}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl border border-slate-300 transition-all cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search Platform</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
