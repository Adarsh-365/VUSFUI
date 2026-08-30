import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import logoImg from '../images/logo.png';

interface FooterProps {
  onLegalClick: (type: string) => void;
  onLinkClick: (link: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick, onLinkClick }) => {
  return (
    <footer className="w-full bg-[#111827] text-white">
      {/* Upper Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1: Foundation Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="bg-white/95 p-2 rounded-lg inline-block shadow-xs">
              <img
                src={logoImg}
                alt="Vishwa Udyam Sahayta Foundation"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Founded in 2021, Vishwa Udyam Sahayta Foundation is a non-governmental, non-profit organization committed to empowering businesses, entrepreneurs, startups, MSMEs, and industry leaders through strategic support, collaboration, and innovation-driven initiatives.
            </p>

            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-[11px]">Section 8 Registered Non-Profit &bull; MCA Govt. of India</span>
            </div>
          </div>

          {/* Column 2: Key Specialized Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
              Key Specialized Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                { label: 'B2B Service', path: '/services/b2b-service' },
                { label: 'Start company', path: '/services/start-company' },
                { label: 'Start import and export', path: '/services/start-import-export' },
                { label: 'One to One Counselling', path: '/services/one-to-one-counselling' },
                { label: 'Product launch other country', path: '/services/product-launch-other-country' },
                { label: 'Start business in other country', path: '/services/start-business-other-country' },
                { label: 'Infrastructure development', path: '/services/infrastructure-development' },
                { label: 'GeM PORTAL', path: '/services/gem-portal' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-orange-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Foundation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
              About Foundation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <Link to="/about/overview" className="hover:text-orange-400 transition-colors block py-0.5">
                  About Us &amp; Overview
                </Link>
              </li>
              <li>
                <Link to="/about/president" className="hover:text-orange-400 transition-colors block py-0.5">
                  Founder &amp; President Desk
                </Link>
              </li>
              <li>
                <Link to="/about/board" className="hover:text-orange-400 transition-colors block py-0.5">
                  Board of Directors &amp; Trustees
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="hover:text-orange-400 transition-colors block py-0.5">
                  Focus Industrial Sectors
                </Link>
              </li>
              <li>
                <Link to="/chapter" className="hover:text-orange-400 transition-colors block py-0.5">
                  Regional &amp; District Desks
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-orange-400 transition-colors block py-0.5">
                  Expos &amp; Press Bulletins
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Apex Secretariat & Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
              Apex Secretariat
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Vishwa Udyam Sahayta Foundation, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra - 400614, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>+91 22 2757 0000 / +91 98200 00000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:secretariat@vusf.org.in" className="hover:text-orange-400 underline">
                  secretariat@vusf.org.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-slate-800 bg-[#0b0f19]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Vishwa Udyam Sahayta Foundation. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onLegalClick('Privacy Policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onLegalClick('Terms of Service')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onLegalClick('MSME Charter')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              MSME Charter
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
