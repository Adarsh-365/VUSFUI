import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Download,
  Share2,
  Users,
  BookOpen,
  Building2,
  FileText,
  MessageSquare,
  ShieldCheck,
  Phone,
  Mail,
  X,
  CreditCard,
  QrCode,
  Lock,
  Printer,
  CheckCheck,
  HelpCircle,
  Coffee,
  Utensils,
  Lightbulb,
  Layers,
  GraduationCap,
  TrendingUp,
  Target
} from 'lucide-react';

interface ScStEntrepreneurship1DayPageProps {
  onMemberClick?: (type: 'become' | 'members' | 'employee') => void;
}

export const ScStEntrepreneurship1DayPage: React.FC<ScStEntrepreneurship1DayPageProps> = () => {
  // Pass Selection State (2 Passes: Delegate ₹3,000 & VIP ₹5,000)
  const [selectedPassTier, setSelectedPassTier] = useState<'delegate' | 'vip'>('delegate');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'payment' | 'success'>('details');

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    businessName: '',
    category: 'SC Community Founder',
    businessStage: 'Informal / Home-Based Operations',
    sector: 'Manufacturing & Industrial Ancillary',
    incomeBracket: '₹1 lakh – ₹5 lakh',
    preferredLanguage: 'Mixed Hindi & Marathi',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    quantity: 1,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'neft'>('upi');
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const passes = [
    {
      id: 'delegate',
      name: 'Delegate Pass',
      price: 3000,
      gstPercentage: 18,
      recommended: true,
      badge: 'STANDARD PASS',
      tagline: 'Full 1-day action workshop at Pillai University campus with personal GOV SCHEMES Snapshot & application clinic.',
      seatsLeft: 25,
      benefits: [
        'Full 1-Day Access to All 4 Core Sessions & Hands-On Application Clinic',
        'Personal 1-Page Pre-Drafted GOV SCHEMES Snapshot (Refined 1-on-1)',
        'Hands-On Support to Start Real Scheme Application (Stand-Up India / NSSH / PMEGP / MUDRA)',
        'Step-by-Step Guidance for GeM Onboarding & 4% Public Procurement Mandate',
        'In-House Prepared Breakfast, Hot Buffet Lunch & Afternoon High Tea Included',
        'Official Pillai University Certificate of Participation',
        'Entry into Dedicated Cohort WhatsApp Support Group for Post-Event Mentoring',
      ],
    },
    {
      id: 'vip',
      name: 'VIP Pass',
      price: 5000,
      gstPercentage: 18,
      badge: 'VIP ACCESS',
      tagline: 'Includes full workshop, priority front seating, 1-on-1 DPR & loan pre-screening review, and PSU vendor roadmap.',
      seatsLeft: 10,
      benefits: [
        'All Delegate Pass Privileges Included',
        'Priority Front-Row Executive Seating in Workshop & Application Clinic',
        '1-on-1 Dedicated DPR & Loan Proposal Pre-Screening Review with Specialists',
        'Direct Business Networking Table with Pragati Tayde & Keynote Mentors',
        'Exclusive PSU Vendor Registration & GeM Tender Sourcing Dossier',
        'Official Pillai University Certificate of Participation with VIP Distinction',
      ],
    },
  ];

  const currentPass = passes.find((p) => p.id === selectedPassTier) || passes[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookPass = (passId: 'delegate' | 'vip') => {
    setSelectedPassTier(passId);
    setCheckoutStep('details');
    setIsCheckoutOpen(true);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10)
      errors.mobileNumber = 'Valid 10-digit mobile number is required';
    if (!formData.emailAddress.trim() || !formData.emailAddress.includes('@'))
      errors.emailAddress = 'Valid email address is required';
    if (!formData.businessName.trim()) errors.businessName = 'Business or venture name is required';
    if (!formData.city.trim()) errors.city = 'City is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setCheckoutStep('payment');
    }
  };

  const handleCompletePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      const randomId = 'VUSF-SCST-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmedOrderId(randomId);
      setIsProcessingPayment(false);
      setCheckoutStep('success');
    }, 1800);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const basePrice = currentPass.price * formData.quantity;
  const gstAmount = Math.round((basePrice * 18) / 100);
  const totalPayable = basePrice + gstAmount;

  return (
    <div className="min-h-screen bg-[#060c16] text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. TOP BREADCRUMB & STICKY SUB-NAV */}
      <div className="bg-[#091424] border-b border-slate-800/80 sticky top-0 z-30 shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/events" className="hover:text-amber-400 transition-colors">Events &amp; Summits</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold truncate">SC/ST Entrepreneurship 1-Day Program</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
            <button
              onClick={() => scrollToSection('passes-section')}
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold px-4 py-1.5 rounded-lg text-xs shadow-md shadow-orange-950/50 cursor-pointer"
            >
              Book Pass (₹3,000)
            </button>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#0a182c] via-[#081220] to-[#060c16] border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none -ml-40 -mb-40" />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Headlines & Key Coordinates */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-500/40 text-amber-300 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>1-DAY ACTION WORKSHOP • REGISTRATION OPEN</span>
              </span>
              <span className="bg-slate-800/90 text-cyan-300 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-500/30">
                PILLAI UNIVERSITY CAMPUS, NAVI MUMBAI
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              SC / ST Entrepreneurship <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                1-Day Action Program
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              From informal business &amp; pre-launch idea to registered enterprise, government scheme credit &amp; public procurement access. A practical, jargon-free 1-day action workshop designed for SC/ST founders to access Stand-Up India, MUDRA, NSSH 25% subsidies, and unlock the 4% public procurement mandate on GeM.
            </p>

            {/* Coordinates Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 sm:p-5 bg-[#0b1626]/90 border border-slate-800 rounded-2xl backdrop-blur-md shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Date &amp; Schedule</div>
                  <div className="text-sm font-extrabold text-white">October 24, 2026</div>
                  <div className="text-xs text-amber-400">Saturday (Full 1-Day Action Program)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Timing &amp; Meals</div>
                  <div className="text-sm font-extrabold text-white">09:30 AM – 04:45 PM IST</div>
                  <div className="text-xs text-slate-400">Includes In-House Breakfast, Lunch &amp; Tea</div>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-start gap-3 pt-3 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Venue &amp; Location</div>
                  <div className="text-sm font-extrabold text-white">Pillai University Campus</div>
                  <div className="text-xs text-slate-300">
                    Dr. K. M. Vasudevan Pillai Campus, Sector 16, New Panvel, Navi Mumbai, Maharashtra 410206
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => scrollToSection('passes-section')}
                  className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-base font-black px-8 py-4 rounded-xl shadow-xl shadow-orange-950/70 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>REGISTER NOW (₹3,000 + GST)</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="https://wa.me/917499492860?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20the%20SC/ST%20Entrepreneurship%201-Day%20Program%20at%20Pillai%20University."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 px-5 py-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Coordinator</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 pt-1">
                <div className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>GOV SCHEMES Eligibility Snapshot</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1 text-slate-300">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GeM 4% Public Procurement Focus</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Pillai University Certificate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Banner Visual & Clean Register Button */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group">
              <img
                src="/banner/sc-ststartup1day.jpeg"
                alt="SC/ST Entrepreneurship 1-Day Program"
                className="w-full h-auto object-contain rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-lg">
                <Building2 className="w-3.5 h-3.5 text-orange-400" />
                <span>Pillai University Campus Venue</span>
              </div>
            </div>

            {/* Single Prominent Register Seat Button */}
            <div className="pt-1">
              <button
                onClick={() => scrollToSection('passes-section')}
                className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-base font-black py-4 px-6 rounded-2xl shadow-xl shadow-orange-950/70 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REGISTER SEAT NOW →</span>
              </button>
            </div>

            <div className="p-4 bg-[#0b1626] rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-light">
              <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>The Underutilized Public Opportunity</span>
              </div>
              <p>
                Ministry of MSME data shows SC enterprises at 6.8% and ST enterprises at 2.1% of registered units. Public procurement under the 4% mandate reached only 1.59%. This program bridges the awareness and paperwork gap to turn policy mandates into real revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY STATS & IMMEDIATE TAKEAWAYS */}
      <section className="py-10 px-4 sm:px-6 bg-[#081220] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">1 Full Day</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Action Workshop</div>
            <div className="text-[11px] text-slate-400">09:30 AM to 04:45 PM at Pillai Campus</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">GOV SCHEMES</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">National &amp; State Schemes</div>
            <div className="text-[11px] text-slate-400">Stand-Up India, MUDRA, NSSH 25%, PMEGP</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">4% Mandate</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">GeM Procurement</div>
            <div className="text-[11px] text-slate-400">PSU vendor onboarding &amp; tendering route</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b1a30] border border-slate-800 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-orange-400">Pillai Univ.</div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">Official Certificate</div>
            <div className="text-[11px] text-slate-400">Certificate of Participation Awarded</div>
          </div>
        </div>
      </section>

      {/* 4. PARTICIPANT PROFILE: WHO IS THIS PROGRAM FOR? */}
      <section className="py-16 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>PARTICIPANT PROFILE &amp; SECTOR REPRESENTATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Designed For SC / ST Founders &amp; Micro-Enterprises
            </h2>
            <p className="text-sm text-slate-400 font-light">
              From first-time founders with new ideas to existing manufacturing units and service contractors seeking formalisation and capital access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-orange-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Aspiring First-Time Founders</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                SC/ST individuals with pre-launch business concepts seeking clarity on Udyam registration, business structures, current bank accounts, and early-stage capital.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-amber-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Manufacturing &amp; Production Units</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Fabrication, auto-component ancillaries, plastics, machinery parts, job-work units, and food processing eligible for <strong>NSSH 25% machinery capital subsidy</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-cyan-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Service Contractors &amp; Logistics</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Facility management, transport, logistics, IT hardware, electrical contractors, and maintenance services looking to register on <strong>GeM for PSU procurement</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1626] border border-slate-800 hover:border-emerald-500/50 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Retail, Wholesale &amp; Trade</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Traders, distributors, packaging suppliers, and commercial vendors seeking <strong>Stand-Up India</strong> (₹10L to ₹1Cr) and <strong>CGTMSE</strong> collateral-free loans.
              </p>
            </div>
          </div>

          {/* Multilingual Reassurance Bar */}
          <div className="p-5 bg-gradient-to-r from-[#0b1a30] via-[#0d213f] to-[#0b1a30] rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
              <div className="text-xs text-slate-200">
                <strong className="text-white">Accessible Multilingual Instruction:</strong> Sessions run in an encouraging, plain-language mix of <strong>Hindi, English, and Marathi/Regional Language</strong> decided dynamically with attendees.
              </div>
            </div>
            <div className="text-xs text-amber-400 font-bold shrink-0">
              Zero Prior Banking Jargon Assumed
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONCRETE LEARNING OBJECTIVES */}
      <section className="py-16 px-4 sm:px-6 bg-[#081220] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <CheckCheck className="w-3.5 h-3.5" />
              <span>WHAT YOU WALK AWAY WITH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Actionable Deliverables in Hand by 04:45 PM
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Scoped to what a single day can realistically deliver: concrete applications started, verified scheme eligibility, and direct procurement onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b172a] border border-slate-800 space-y-3">
              <div className="text-2xl font-black text-orange-400">01</div>
              <h3 className="text-base font-bold text-white">GOV SCHEMES Snapshot</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Your personal 1-page Scheme Eligibility Snapshot naming the exact government schemes and grants you qualify for based on your sector.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b172a] border border-slate-800 space-y-3">
              <div className="text-2xl font-black text-amber-400">02</div>
              <h3 className="text-base font-bold text-white">Started Application in Hand</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Begin an actual scheme application (Stand-Up India / NSSH / PMEGP / MUDRA) with an expert facilitator sitting next to you.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b172a] border border-slate-800 space-y-3">
              <div className="text-2xl font-black text-emerald-400">03</div>
              <h3 className="text-base font-bold text-white">GeM &amp; 4% Procurement Route</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Understand the 4% public procurement mandate reserved for SC/ST enterprises and receive on-the-spot GeM vendor onboarding steps.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b172a] border border-slate-800 space-y-3">
              <div className="text-2xl font-black text-cyan-400">04</div>
              <h3 className="text-base font-bold text-white">Pillai Univ. Certificate</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Official Certificate of Participation from Pillai University MDP, plus ongoing access to the cohort WhatsApp support network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DETAILED SESSION-BY-SESSION CURRICULUM */}
      <section className="py-20 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>DETAILED 4-SESSION MASTERCLASS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Full-Day Curriculum &amp; Workshop Schedule
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Carefully structured from 09:30 AM to 04:45 PM for concrete, actionable takeaways and zero time wasted.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            {/* Intake */}
            <div className="p-6 rounded-2xl bg-[#091526] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-black uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  <span>09:30 AM – 10:00 AM &bull; Registration &amp; Breakfast</span>
                </div>
                <h3 className="text-lg font-bold text-white">Arrival, Profile Intake &amp; Networking Breakfast</h3>
                <p className="text-xs text-slate-300 font-light">
                  Sign-in, welcome kit distribution, and collection of basic profile data (sector, business stage, turnover) so facilitators can pre-draft your personal GOV SCHEMES Snapshot before Session 3.
                </p>
              </div>
              <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] text-slate-400 font-semibold shrink-0">
                Hot Breakfast Included
              </div>
            </div>

            {/* Session 1 */}
            <div className="p-6 rounded-2xl bg-[#0b1a30] border-2 border-orange-500/40 space-y-4 shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="inline-flex items-center gap-1.5 text-orange-400 text-xs font-black uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  <span>10:00 AM – 11:00 AM &bull; Core Module 1</span>
                </div>
                <span className="bg-orange-500/20 text-orange-300 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-orange-500/40">
                  Mindset &amp; Sector Pathways
                </span>
              </div>
              <h3 className="text-xl font-black text-white">Session 1: Mindset, Myth-Busting &amp; Startup Fundamentals</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Overcoming common misconceptions and establishing a strong formal business foundation:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Myth-Busting:</strong> Clarifying what is realistically accessible to SC/ST entrepreneurs in banking today.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sector Opportunities:</strong> Manufacturing production units, ancillary supply, job work, logistics, and skilled trades.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Udyam Registration:</strong> Step-by-step verification, category tagging, and MSME certificate generation.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Business Structures:</strong> Choosing Sole Proprietorship, Partnership, LLP, OPC, or Pvt Ltd + Current Account opening.</span>
                </div>
              </div>
            </div>

            {/* Tea Break */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span><strong>11:00 AM – 11:15 AM:</strong> Morning Tea &amp; Peer Connect</span>
              </div>
              <span className="text-slate-500">Fresh Tea &amp; Cookies</span>
            </div>

            {/* Session 2 */}
            <div className="p-6 rounded-2xl bg-[#0b1a30] border-2 border-amber-500/40 space-y-4 shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-black uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  <span>11:15 AM – 12:45 PM &bull; Core Module 2</span>
                </div>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-amber-500/40">
                  Finance &amp; Capital Schemes
                </span>
              </div>
              <h3 className="text-xl font-black text-white">Session 2: Access to Finance, Bank Loans &amp; Subsidies</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Comprehensive deep dive into major credit and subsidy mechanisms specifically structured for SC/ST enterprises:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Stand-Up India:</strong> Greenfield bank loans from ₹10 lakh to ₹1 crore with dedicated branch allocation.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>National SC-ST Hub (NSSH):</strong> Special Credit Linked Capital Subsidy offering 25% subsidy up to ₹25 lakh on machinery.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>MUDRA Loans:</strong> Funding across Shishu (up to ₹50k), Kishor (₹50k–₹5L) and Tarun (₹5L–₹10L) tiers.</span>
                </div>
                <div className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>CGTMSE &amp; PMEGP:</strong> Collateral-free credit guarantees and higher special category subsidy rates under PMEGP.</span>
                </div>
              </div>
              <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                <strong>12:45 PM – 01:00 PM:</strong> Built-in buffer for individual bank eligibility doubts before lunch.
              </div>
            </div>

            {/* Lunch */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-400" />
                <span><strong>01:00 PM – 02:00 PM:</strong> Networking Luncheon (In-House Prepared Hot Buffet)</span>
              </div>
              <span className="font-semibold text-emerald-400">Pillai Campus Dining Hall</span>
            </div>

            {/* Session 3 */}
            <div className="p-6 rounded-2xl bg-[#0b1a30] border-2 border-cyan-500/40 space-y-4 shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs font-black uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  <span>02:00 PM – 03:00 PM &bull; Core Module 3 (Hands-On)</span>
                </div>
                <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-cyan-500/40">
                  Market Access &amp; Application Clinic
                </span>
              </div>
              <h3 className="text-xl font-black text-white">Session 3: GeM Onboarding, 4% Public Procurement &amp; Application Clinic</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Practical execution: unlock government sales and start your real scheme application with facilitator guidance:
              </p>
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>The 1-Page Personal GOV SCHEMES Snapshot &amp; GeM Registration:</span>
                </div>
                <p>
                  Every participant refines a pre-drafted 1-page Scheme Eligibility Snapshot naming the 2 to 3 qualifying schemes for their sector, begins a real scheme application in hand, and learns how to register on GeM to bid under the 4% public procurement mandate reserved for SC/ST enterprises.
                </p>
              </div>
              <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                <strong>03:00 PM – 03:15 PM:</strong> Buffer for 1-on-1 clinic follow-up and document verification.
              </div>
            </div>

            {/* Session 4 */}
            <div className="p-6 rounded-2xl bg-[#0b1a30] border-2 border-emerald-500/40 space-y-4 shadow-xl">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-black uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  <span>03:15 PM – 03:45 PM &bull; Core Module 4</span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  Peer Networking
                </span>
              </div>
              <h3 className="text-xl font-black text-white">Session 4: Peer Networking &amp; Local Business Linkages</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Structured networking with fellow SC/ST entrepreneurs, industrial contractors, and operating small business leaders for joint venture opportunities and vendor partnerships.
              </p>
            </div>

            {/* Closing */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d2340] to-[#091526] border border-slate-700 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-black uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>03:45 PM – 04:45 PM &bull; Keynote &amp; Certification</span>
              </div>
              <h3 className="text-lg font-bold text-white">Keynote Q&amp;A, Certificate Award &amp; Next-Stage Desk</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                • <strong>03:45 – 04:00 PM:</strong> Action roadmap and cohort WhatsApp community setup.<br />
                • <strong>04:00 – 04:25 PM:</strong> Keynote address by Upasana Chaudhari (Pillai University) on institutional scaling &amp; incubation, followed by an open Q&amp;A floor.<br />
                • <strong>04:25 – 04:45 PM:</strong> Distribution of official Pillai University Certificates of Participation and on-the-spot enrollment desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRAINER & FACILITATOR */}
      <section className="py-16 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>EXPERT FACILITATION &amp; UNIVERSITY LEADERSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Master Trainers &amp; Keynote Mentors
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Led by specialist practitioners and university leaders experienced in breaking down complex scheme mechanics into plain, actionable language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            <div className="bg-[#0b1626] rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-4">
                <img
                  src="/members/pragati.jpeg"
                  alt="Pragati Tayde"
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/60 shadow-md"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Pragati Tayde</h3>
                  <div className="text-xs text-amber-400 font-semibold">President &amp; Founder / Master Trainer</div>
                  <div className="text-[11px] text-slate-400">Vishwa Udyam Sahayta Foundation</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed border-t border-slate-800 pt-3">
                Specializes in teaching scheme mechanics, NSSH capital subsidies, Stand-Up India, and bank loan approvals in plain language across mixed literacy and language levels. Personally guides the Session 3 Hands-On Clinic.
              </p>
            </div>

            <div className="bg-[#0b1626] rounded-2xl border border-slate-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/20 border-2 border-amber-500/60 flex items-center justify-center text-amber-300 font-black text-xl shadow-md">
                  UC
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Upasana Chaudhari</h3>
                  <div className="text-xs text-amber-400 font-semibold">Keynote Mentor &amp; Leadership</div>
                  <div className="text-[11px] text-cyan-300 font-bold">Pillai University</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed border-t border-slate-800 pt-3">
                Academic and innovation leader at Pillai University, championing inclusive entrepreneurship, incubation development, and public procurement linkages for underserved communities across Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PASSES / REGISTRATION PRICING (2 PASSES: Delegate ₹3,000 & VIP ₹5,000) */}
      <section id="passes-section" className="py-20 px-4 sm:px-6 bg-[#070d18] border-b border-slate-800 scroll-mt-12">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <CreditCard className="w-3.5 h-3.5" />
              <span>OFFICIAL REGISTRATION TIERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Select Your Program Pass
            </h2>
            <p className="text-sm text-slate-400 font-light">
              All passes include Pillai University on-campus entry, in-house breakfast, hot buffet lunch &amp; high tea, 1-page Scheme Snapshot, application clinic, and Pillai University Certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {passes.map((pass) => {
              const isRec = pass.recommended;
              const passGst = Math.round((pass.price * (pass.gstPercentage || 18)) / 100);
              const passTotal = pass.price + passGst;

              return (
                <div
                  key={pass.id}
                  className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                    isRec
                      ? 'bg-gradient-to-b from-[#14233c] to-[#0b172a] border-2 border-orange-500 ring-4 ring-orange-500/20 transform md:-translate-y-2'
                      : 'bg-[#0b1626] border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {pass.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                      {pass.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white">{pass.name}</h3>
                      <p className="text-xs text-slate-300 font-light leading-relaxed min-h-[36px]">
                        {pass.tagline}
                      </p>
                    </div>

                    <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-1">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs text-slate-400 font-bold">INR</span>
                        <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                          ₹{pass.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-amber-400 font-bold">+ 18% GST</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Total Payable: <strong className="text-slate-200">₹{passTotal.toLocaleString('en-IN')}</strong> (incl. ₹{passGst.toLocaleString('en-IN')} GST)
                      </div>
                      <div className="text-[11px] text-orange-400 font-semibold pt-1">
                        Limited seats available — contact us to check availability
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Pass Benefits:</div>
                      <ul className="space-y-2.5 text-xs text-slate-200">
                        {pass.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => handleBookPass(pass.id as 'delegate' | 'vip')}
                      className={`w-full py-4 px-6 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                        isRec
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-orange-950/70'
                          : 'bg-slate-800 hover:bg-orange-600 text-white hover:shadow-orange-950/40'
                      }`}
                    >
                      <span>BOOK {pass.name.toUpperCase()}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-[10px] text-center text-slate-500 mt-2 font-medium">
                      Instant Confirmation &bull; In-House Breakfast &amp; Lunch Included
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FAQS */}
      <section className="py-16 px-4 sm:px-6 bg-[#060c16] border-b border-slate-800">
        <div className="max-w-[1000px] mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Common Questions Answered</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What language will the 1-day program be conducted in?',
                a: 'Sessions run in an accessible, practical mix of Hindi, English, and Marathi/Regional language based on participant comfort. We avoid heavy corporate jargon to ensure everyone understands the schemes clearly.',
              },
              {
                q: 'Do I need to have a registered company before attending?',
                a: 'Not at all! The program is specifically built for SC/ST founders at idea stage or running informal manufacturing and service businesses. Session 1 walks you step-by-step through Udyam registration, choosing the right legal structure, and opening a bank account.',
              },
              {
                q: 'What is the 4% Public Procurement Mandate on GeM?',
                a: 'Under the Public Procurement Policy, Central Ministries, Departments, and PSUs are mandated to procure at least 4% of their total annual purchases from SC/ST-owned enterprises. We provide concrete steps for GeM onboarding and PSU vendor registration.',
              },
              {
                q: 'What is the NSSH Special Capital Subsidy?',
                a: 'Under the National SC-ST Hub (NSSH), eligible SC/ST manufacturing enterprises can access a 25% Special Credit Linked Capital Subsidy (up to ₹25 lakh) for purchasing new plant and machinery.',
              },
              {
                q: 'Where is the venue and is food provided?',
                a: 'The program is hosted on-campus at Pillai University (Dr. K. M. Vasudevan Pillai Campus, Sector 16, New Panvel, Navi Mumbai). Full in-house prepared breakfast, hot buffet lunch, and afternoon tea are included with your pass.',
              },
              {
                q: 'How does the post-event WhatsApp support group work?',
                a: 'All attendees are added to a dedicated cohort WhatsApp group before leaving. Facilitators answer follow-up questions, share scheme updates, and keep the cohort connected for ongoing peer learning.',
              },
            ].map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="bg-[#0b1626] border border-slate-800 rounded-2xl overflow-hidden transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-slate-800/80 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL BOTTOM CTA & DIRECT HELPDESK */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-t from-[#0b1a30] via-[#070d18] to-[#070d18] border-b border-slate-800 text-center space-y-8">
        <div className="max-w-[1100px] mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>LIMITED TO 15–20 PARTICIPANTS PER BATCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Formalise &amp; Scale Your Venture?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto">
            Take the first concrete step toward registered enterprise status, NSSH subsidies, Stand-Up India credit, and 4% public procurement access.
          </p>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-amber-400 font-extrabold">
            <span>Saturday, October 24, 2026</span>
            <span>&bull;</span>
            <span>Pillai University Campus, Navi Mumbai</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('passes-section')}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-base px-10 py-4 rounded-xl shadow-2xl shadow-orange-950/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>REGISTER YOUR SEAT NOW →</span>
            </button>

            <a
              href="https://wa.me/917499492860?text=Hello%2C%20I%20have%20questions%20about%20registering%20for%20the%20SC/ST%20Entrepreneurship%201-Day%20Program."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat with Coordinator on WhatsApp</span>
            </a>
          </div>

          {/* Contact Details Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-slate-400 border-t border-slate-800/80 max-w-lg mx-auto">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-4 h-4 text-orange-400" />
              <span>+91 7499492860</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>info@namastevishwa.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CHECKOUT MODAL (Delegate ₹3,000 / VIP ₹5,000) */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in">
          <div className="bg-[#0b172a] text-slate-100 rounded-3xl border border-slate-700 shadow-2xl w-full max-w-2xl overflow-hidden my-8 relative flex flex-col max-h-[90vh]">
            <div className="p-5 bg-gradient-to-r from-[#0c1c33] to-[#1e293b] border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="space-y-0.5">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                  OFFICIAL PROGRAM REGISTRATION &bull; PILLAI UNIVERSITY CAMPUS
                </div>
                <h3 className="text-lg font-bold text-white">SC/ST Entrepreneurship - 1-Day Growth Program</h3>
              </div>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div className="p-4 bg-[#081220] rounded-2xl border border-orange-500/30 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Selected Pass Tier:</div>
                  <div className="text-sm font-black text-amber-300">{currentPass.name}</div>
                  <div className="text-xs text-slate-400">
                    ₹{currentPass.price.toLocaleString('en-IN')} + 18% GST (Includes In-House Breakfast &amp; Lunch)
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    scrollToSection('passes-section');
                  }}
                  className="text-xs text-amber-400 hover:underline font-bold"
                >
                  Change Pass
                </button>
              </div>

              {checkoutStep === 'details' && (
                <form onSubmit={handleProceedToPayment} className="space-y-4">
                  <div className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                    1. Participant &amp; Venture Profile (For Pre-Drafting GOV SCHEMES Snapshot)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Gaikwad"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                      />
                      {formErrors.fullName && <p className="text-[10px] text-red-400 mt-0.5">{formErrors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Mobile Number (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        placeholder="10-digit WhatsApp number"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                      />
                      {formErrors.mobileNumber && <p className="text-[10px] text-red-400 mt-0.5">{formErrors.mobileNumber}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address (for Pass &amp; GST Invoice) *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        placeholder="name@gmail.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                      />
                      {formErrors.emailAddress && <p className="text-[10px] text-red-400 mt-0.5">{formErrors.emailAddress}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Business / Venture Name (or Idea) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Precision Engineering / Idea Stage"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                      />
                      {formErrors.businessName && <p className="text-[10px] text-red-400 mt-0.5">{formErrors.businessName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Community / Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none cursor-pointer"
                      >
                        <option value="SC Community Founder">Scheduled Caste (SC) Founder</option>
                        <option value="ST Community Founder">Scheduled Tribe (ST) Founder</option>
                        <option value="OBC / General Ally Founder">Allied MSME Founder</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Business Stage *
                      </label>
                      <select
                        value={formData.businessStage}
                        onChange={(e) => setFormData({ ...formData, businessStage: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none cursor-pointer"
                      >
                        <option value="Pre-Launch Idea Stage">Pre-Launch Idea Stage</option>
                        <option value="Informal / Unregistered Unit">Informal / Unregistered Unit</option>
                        <option value="Registered MSME (0–2 Years)">Registered MSME (0–2 Years)</option>
                        <option value="Operating Supplier / Contractor">Operating Supplier / Contractor</option>
                        <option value="Scaling Up for Public Tenders">Scaling Up for Public Tenders</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Business Sector *
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none cursor-pointer"
                      >
                        <option value="Manufacturing & Industrial Ancillary">Manufacturing &amp; Industrial Ancillary</option>
                        <option value="Job Work & Engineering Fabrication">Job Work &amp; Engineering Fabrication</option>
                        <option value="Logistics, Transport & Fleet">Logistics, Transport &amp; Fleet</option>
                        <option value="Facility Management & Services">Facility Management &amp; Services</option>
                        <option value="Retail, Trade & Distribution">Retail, Trade &amp; Distribution</option>
                        <option value="IT, Hardware & Skilled Trades">IT, Hardware &amp; Skilled Trades</option>
                        <option value="Other / Exploring">Other / Exploring</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        City &amp; State *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Panvel, Navi Mumbai"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                      />
                      {formErrors.city && <p className="text-[10px] text-red-400 mt-0.5">{formErrors.city}</p>}
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-sm py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>PROCEED TO PAYMENT (₹{totalPayable.toLocaleString('en-IN')}) →</span>
                    </button>
                  </div>
                </form>
              )}

              {checkoutStep === 'payment' && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      2. Payment Method &amp; Tax Breakdown
                    </div>
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('details')}
                      className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-bold"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Details</span>
                    </button>
                  </div>

                  <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Pass: {currentPass.name} (x{formData.quantity})</span>
                      <span className="font-semibold text-white">₹{basePrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>GST @ 18% (Itemized Tax Invoice)</span>
                      <span className="font-semibold text-amber-400">₹{gstAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-slate-800">
                      <span>Total Amount Payable</span>
                      <span className="text-amber-400">₹{totalPayable.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Select Payment Mode:
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          paymentMethod === 'upi'
                            ? 'border-orange-500 bg-orange-500/10 text-white'
                            : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <QrCode className="w-5 h-5 text-orange-400" />
                        <div>
                          <div className="text-xs font-bold">UPI / QR Code</div>
                          <div className="text-[10px] text-slate-400">GPay, PhonePe, Paytm</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          paymentMethod === 'card'
                            ? 'border-orange-500 bg-orange-500/10 text-white'
                            : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <CreditCard className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="text-xs font-bold">Credit / Debit Card</div>
                          <div className="text-[10px] text-slate-400">Visa, Mastercard, RuPay</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('netbanking')}
                        className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          paymentMethod === 'netbanking'
                            ? 'border-orange-500 bg-orange-500/10 text-white'
                            : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <Building2 className="w-5 h-5 text-emerald-400" />
                        <div>
                          <div className="text-xs font-bold">Net Banking</div>
                          <div className="text-[10px] text-slate-400">50+ Indian Banks</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('neft')}
                        className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          paymentMethod === 'neft'
                            ? 'border-orange-500 bg-orange-500/10 text-white'
                            : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <FileText className="w-5 h-5 text-amber-400" />
                        <div>
                          <div className="text-xs font-bold">NEFT / RTGS</div>
                          <div className="text-[10px] text-slate-400">Direct Foundation A/C</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                    {paymentMethod === 'upi' && (
                      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <div className="w-24 h-24 bg-white p-2 rounded-xl shrink-0 flex items-center justify-center">
                          <QrCode className="w-20 h-20 text-slate-900" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-white">Scan &amp; Pay via Any UPI App</div>
                          <div className="text-[11px] text-slate-400">
                            VPA: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-300">vusf@icici</code>
                          </div>
                          <div className="text-[11px] text-emerald-400 font-semibold">
                            Instant QR Confirmation &bull; Zero Surcharge
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'card' && (
                      <div className="space-y-2 text-xs">
                        <input
                          type="text"
                          placeholder="Card Number (0000 0000 0000 0000)"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="MM / YY"
                            className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                          />
                          <input
                            type="password"
                            placeholder="CVV"
                            className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'netbanking' && (
                      <div className="text-xs space-y-2">
                        <select className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none">
                          <option>State Bank of India (SBI)</option>
                          <option>HDFC Bank</option>
                          <option>ICICI Bank</option>
                          <option>Axis Bank</option>
                          <option>Bank of Baroda</option>
                          <option>Kotak Mahindra Bank</option>
                        </select>
                      </div>
                    )}

                    {paymentMethod === 'neft' && (
                      <div className="text-xs text-slate-300 space-y-1 bg-slate-900/60 p-3 rounded-lg">
                        <div><strong>Account:</strong> Vishwa Udyam Sahayta Foundation</div>
                        <div><strong>Bank:</strong> ICICI Bank, Vashi Branch</div>
                        <div><strong>IFSC:</strong> ICIC0000151</div>
                        <div><strong>A/C No:</strong> 015105009874</div>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleCompletePayment}
                    disabled={isProcessingPayment}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isProcessingPayment ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Securing Transaction &amp; Issuing Pass...</span>
                      </div>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>PAY ₹{totalPayable.toLocaleString('en-IN')} SECURELY NOW</span>
                      </>
                    )}
                  </button>

                  <div className="text-[10px] text-center text-slate-500 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>256-Bit SSL Encrypted &bull; Section 8 Non-Profit registered with the Ministry of Corporate Affairs &bull; ISO 9001:2015</span>
                  </div>
                </div>
              )}

              {checkoutStep === 'success' && (
                <div className="space-y-6 text-center py-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCheck className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      REGISTRATION CONFIRMED &bull; PASS ISSUED
                    </div>
                    <h3 className="text-2xl font-black text-white">Welcome, {formData.fullName}!</h3>
                    <p className="text-xs text-slate-300 font-light max-w-md mx-auto">
                      Your delegate pass and official GST Tax Invoice have been confirmed and sent to{' '}
                      <strong className="text-amber-300">{formData.emailAddress}</strong>.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#0c1c33] to-[#16233b] border-2 border-orange-500/50 p-6 rounded-3xl text-left space-y-4 max-w-md mx-auto shadow-2xl relative">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-amber-400">OFFICIAL WORKSHOP PASS</div>
                        <h4 className="text-base font-extrabold text-white">SC/ST Entrepreneurship 1-Day Program</h4>
                      </div>
                      <div className="w-14 h-14 bg-white p-1 rounded-xl shrink-0 flex items-center justify-center shadow-md">
                        <QrCode className="w-12 h-12 text-slate-950" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-700/80 pt-3">
                      <div>
                        <div className="text-[10px] text-slate-400">Participant Name:</div>
                        <div className="font-bold text-white">{formData.fullName}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Venture / Sector:</div>
                        <div className="font-bold text-white">{formData.businessName}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Pass Type:</div>
                        <div className="font-bold text-amber-300">{currentPass.name}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Pass ID:</div>
                        <div className="font-bold text-cyan-300">{confirmedOrderId}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Date &amp; Venue:</div>
                        <div className="font-bold text-white">24 Oct 2026 • Pillai Univ.</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Amount Paid:</div>
                        <div className="font-bold text-emerald-400">₹{totalPayable.toLocaleString('en-IN')} (Incl. GST)</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => window.print()}
                      className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-5 py-3 rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-4 h-4 text-slate-300" />
                      <span>Print Official Pass</span>
                    </button>

                    <button
                      onClick={() => {
                        alert(`GST Tax Invoice ${confirmedOrderId}-INV generated. A copy has been dispatched to ${formData.emailAddress}`);
                      }}
                      className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Tax Invoice</span>
                    </button>

                    <button
                      onClick={() => setIsCheckoutOpen(false)}
                      className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold px-5 py-3 rounded-xl transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
