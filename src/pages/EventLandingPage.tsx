import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Share2,
  Download,
  Printer,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Video,
  Sparkles,
  Award,
  Phone,
  Mail,
  MessageSquare,
  QrCode,
  CreditCard,
  Building,
  Check,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Lock,
  AlertCircle,
  FileText,
  BadgePercent,
  CheckCheck,
} from 'lucide-react';
import { DETAILED_EVENTS, DetailedEvent, DelegatePass } from '../data/eventsData';

interface EventLandingPageProps {
  onMemberClick?: (type: 'become' | 'members' | 'employee') => void;
}

export const EventLandingPage: React.FC<EventLandingPageProps> = ({ onMemberClick }) => {
  const { eventSlug } = useParams<{ eventSlug: string }>();
  const navigate = useNavigate();

  // Find the event by slug or id
  const event: DetailedEvent = useMemo(() => {
    if (!eventSlug) return DETAILED_EVENTS[0];
    const found = DETAILED_EVENTS.find(
      (e) => e.slug.toLowerCase() === eventSlug.toLowerCase() || e.id.toLowerCase() === eventSlug.toLowerCase()
    );
    return found || DETAILED_EVENTS[0];
  }, [eventSlug]);

  // Pass selection & checkout modal state
  const [selectedPass, setSelectedPass] = useState<DelegatePass | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<'details' | 'payment' | 'success'>('details');

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    companyName: '',
    city: '',
    state: '',
    shippingAddress: '',
    pincode: '',
    turnover: '₹50 lakh – ₹2 crore',
    natureOfBusiness: 'Manufacturing & Industrial',
    productDetails: '',
    challengesFaced: 'Expanding into Overseas Export Corridors',
    quantity: 1,
  });

  // Form errors
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'neft'>('upi');
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('');

  // Lightbox Modal state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Copy Link notification
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedReservationPhase, setSelectedReservationPhase] = useState<string>('phase-2-package');
  const [downloadedBrochure, setDownloadedBrochure] = useState(false);

  const isMagazine = event.id === 'namaste-india-magazine' || event.passes.some((p) => p.price === 0);

  // Set default pass when event loads
  useEffect(() => {
    if (event && event.passes && event.passes.length > 0) {
      const rec = event.passes.find((p) => p.recommended) || event.passes[0];
      setSelectedPass(rec);
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }, [event]);

  // Open Checkout with specific pass
  const handleBookPass = (pass: DelegatePass) => {
    setSelectedPass(pass);
    setCheckoutStep('details');
    setIsCheckoutOpen(true);
  };

  // Scroll to passes section
  const scrollToPasses = () => {
    const el = document.getElementById('delegate-passes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10)
      errors.mobileNumber = 'Valid 10-digit mobile number is required';
    if (!formData.emailAddress.trim() || !formData.emailAddress.includes('@'))
      errors.emailAddress = 'Valid email address is required';
    if (!formData.companyName.trim()) errors.companyName = 'Company / Enterprise name is required';
    if (!formData.city.trim()) errors.city = 'City is required';

    if (selectedPass && selectedPass.id === 'physical-print-pass') {
      if (!formData.shippingAddress.trim()) errors.shippingAddress = 'Delivery address is required for courier dispatch';
      if (!formData.pincode.trim() || formData.pincode.length < 6) errors.pincode = 'Valid 6-digit Pincode is required';
    }

    if (!isMagazine && !formData.productDetails.trim()) {
      errors.productDetails = 'Please provide brief product or service details';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (selectedPass && selectedPass.price === 0) {
        // Free digital edition - instant confirmation
        setIsProcessingPayment(true);
        setTimeout(() => {
          const randomId = 'VUSF-MAG-' + Math.floor(100000 + Math.random() * 900000);
          setConfirmedOrderId(randomId);
          setIsProcessingPayment(false);
          setCheckoutStep('success');
        }, 800);
      } else {
        setCheckoutStep('payment');
      }
    }
  };

  const handleCompletePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      const prefix = isMagazine ? 'VUSF-PRNT-' : 'VUSF-DEL-';
      const randomId = prefix + Math.floor(100000 + Math.random() * 900000);
      setConfirmedOrderId(randomId);
      setIsProcessingPayment(false);
      setCheckoutStep('success');
    }, 1800);
  };

  // Handle Share / Copy Link
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null || !event.galleryImages || event.galleryImages.length === 0) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % event.galleryImages.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + event.galleryImages.length) % event.galleryImages.length : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, event.galleryImages]);

  // Price calculations
  const basePrice = selectedPass ? selectedPass.price * formData.quantity : 0;
  const gstAmount = selectedPass && selectedPass.price > 0 ? Math.round((basePrice * (selectedPass.gstPercentage || 18)) / 100) : 0;
  const shippingFee = selectedPass && selectedPass.id === 'physical-print-pass' ? 60 * formData.quantity : 0;
  const totalPayable = basePrice + gstAmount + shippingFee;

  // Other forthcoming events
  const otherEvents = useMemo(() => {
    return DETAILED_EVENTS.filter((e) => e.id !== event.id).slice(0, 3);
  }, [event.id]);

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. TOP BREADCRUMB & STICKY SUB-HEADER */}
      {/* ========================================================================= */}
      <div className="bg-[#0b1626] border-b border-slate-800/80 sticky top-0 z-30 shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/events" className="hover:text-amber-400 transition-colors">
              Events
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {event.title}
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            {event.brochureUrl && (
              <a
                href={event.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-900 transition-all cursor-pointer font-bold text-xs shadow-sm"
                title="Download Brochure PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Brochure PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
              title="Share event link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={scrollToPasses}
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold px-4 py-1.5 rounded-lg shadow-md shadow-orange-950/60 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book Delegate Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Seat Alert Notification Banner */}
      {event.seatAlert && (
        <div className="bg-gradient-to-r from-red-950 via-orange-950 to-amber-950 border-b border-orange-600/40 py-3 px-4 sm:px-6">
          <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-amber-200">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shrink-0" />
              <span className="font-extrabold uppercase text-amber-400 tracking-wider">
                {event.seatAlert.title}:
              </span>
              <span className="text-slate-200 font-medium">{event.seatAlert.message}</span>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('reserve-seat-form') || document.getElementById('delegate-passes');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-orange-600 hover:bg-orange-500 text-white font-extrabold px-4 py-1.5 rounded-lg text-xs transition-all shadow-md shrink-0 cursor-pointer"
            >
              {event.seatAlert.actionText} →
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#0b172a] via-[#070d18] to-[#070d18]">
        {/* Background glow flares */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Event Metadata & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Category Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/20 border border-orange-500/40 text-amber-300 text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>{event.statusBadge}</span>
              </span>

              <span className="bg-slate-800/90 text-cyan-300 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-500/30">
                {event.eventType}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {event.title}
            </h1>

            {/* Sub-headline / Value proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {event.tagline}
            </p>

            {/* Key Event Coordinates Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 sm:p-5 bg-[#0b1626]/90 border border-slate-800 rounded-2xl backdrop-blur-md shadow-xl">
              {/* Date & Day */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {isMagazine ? 'Release Schedule' : 'Date & Schedule'}
                  </div>
                  <div className="text-sm font-extrabold text-white">{event.date}</div>
                  <div className="text-xs text-amber-400">{event.day}</div>
                </div>
              </div>

              {/* Time / Delivery Format */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {isMagazine ? 'Format & Delivery' : 'Timing'}
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    {isMagazine ? 'Free Digital Access & Hardcopy' : event.time}
                  </div>
                  <div className="text-xs text-slate-400">
                    {isMagazine ? 'Instant PDF via Email • Print Dispatched' : 'Full day interactive conclave'}
                  </div>
                </div>
              </div>

              {/* Distribution / Venue */}
              <div className="sm:col-span-2 flex items-start gap-3 pt-3 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {isMagazine ? 'Circulation & Reach' : 'Venue & Location'}
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    {isMagazine ? '10+ States Pan-India Distribution & Digital Broadcast' : event.venue}
                  </div>
                  <div className="text-xs text-slate-300">
                    {isMagazine ? '5,000+ Glossy National Hard Copies + Nationwide Digital Access' : event.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTA & Trust Line */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={scrollToPasses}
                  className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-base font-black px-8 py-4 rounded-xl shadow-xl shadow-orange-950/70 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>{isMagazine ? 'GET YOUR FREE DIGITAL COPY / ORDER PRINT' : 'CHOOSE YOUR DELEGATE PASS'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {event.brochureUrl && (
                  <a
                    href={event.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-950/90 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 px-5 py-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span>Brochure PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={`https://wa.me/${event.supportWhatsapp.replace(/[^0-9]/g, '')}?text=Hello%2C%20I%20would%20like%20information%20regarding%20${encodeURIComponent(event.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 px-5 py-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>{isMagazine ? 'Submit Story on WhatsApp' : 'WhatsApp Trade Desk'}</span>
                </a>
              </div>

              {/* Reassurance text */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400">
                <div className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isMagazine ? '5,000+ National Prints' : 'Limited Capacity'}</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isMagazine ? '100% Free Digital Edition' : 'Secure Online Payment'}</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1 text-slate-300">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isMagazine ? '50% MSME Leader Stories' : 'Instant GST Tax Invoice'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Fast Registration Teaser */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-auto object-contain rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />

              {/* Organizer Badge Overlay */}
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-[11px] font-bold text-amber-300 flex items-center gap-1.5 shadow-lg">
                <Building2 className="w-3.5 h-3.5 text-orange-400" />
                <span>{event.brand}</span>
              </div>
            </div>

            {/* Quick Pass Price Snippet below the banner so it never covers banner text */}
            <div className="bg-[#0b182c] p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-xl flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  {isMagazine ? 'Publication Editions' : 'Passes Starting From'}
                </div>
                <div className="text-xl sm:text-2xl font-black text-amber-400">
                  {isMagazine ? (
                    <>
                      <span className="text-emerald-400">Digital FREE</span>{' '}
                      <span className="text-xs text-slate-300 font-normal">• Hardcopy ₹500 + GST</span>
                    </>
                  ) : (
                    <>
                      ₹{event.passes[0]?.price.toLocaleString('en-IN')}{' '}
                      <span className="text-xs text-slate-400 font-normal">+ 18% GST</span>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={scrollToPasses}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-black px-5 py-3 rounded-xl transition-all shadow-md shadow-orange-950/60 cursor-pointer shrink-0"
              >
                {isMagazine ? 'Get Your Copy →' : 'View Passes →'}
              </button>
            </div>

            {/* Event Description Card */}
            <div className="p-4 bg-[#0b1626] rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed font-light">
              <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{isMagazine ? 'About this National Publication' : 'About this Conclave'}</span>
              </div>
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EVENT HIGHLIGHTS & KEY STATISTICS */}
      {/* ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 bg-[#091220] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-10">
          {/* Key Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {event.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#0b182b] p-5 sm:p-6 rounded-2xl border border-slate-800/90 text-center space-y-2 relative overflow-hidden shadow-lg group hover:border-orange-500/50 transition-all"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-amber-500">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                {stat.subtext && <div className="text-[11px] text-slate-400 font-light">{stat.subtext}</div>}
              </div>
            ))}
          </div>

          {/* 4 Feature Highlight Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {event.highlights.map((hl, i) => (
              <div
                key={i}
                className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3 text-xs text-slate-200"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold leading-snug">{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY ATTEND / WHAT YOU WILL WALK AWAY WITH */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 bg-[#070d18] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>CORE ATTENDEE VALUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              WHAT YOU WILL WALK AWAY WITH
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Practical commercial advantages, statutory certifications, and direct buyer access engineered to propel your enterprise forward.
            </p>
          </div>

          {/* 6 Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="bg-[#0b1728] p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-orange-500/60 transition-all duration-300 space-y-4 relative group shadow-xl hover:shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-orange-500/40 group-hover:text-orange-400 transition-colors font-mono">
                      {benefit.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-800/40 px-2.5 py-0.5 rounded">
                      {benefit.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                  <span>Expected Participant Benefit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EVENT AGENDA & TIMELINE */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 bg-[#091322] border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>TOUR ITINERARY &amp; SESSIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {event.agendaTitle || `A DAY BUILT FOR ${event.title.toUpperCase()}`}
              </h2>
              <p className="text-sm text-slate-400 font-light">
                {event.agendaSubtitle || 'Carefully structured itinerary combining keynotes, technical workshops, and structured B2B matchmaking.'}
              </p>
            </div>

            {event.brochureUrl ? (
              <a
                href={event.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold px-6 py-3.5 rounded-xl text-xs transition-all shadow-lg shadow-cyan-950/70 shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Complete Itinerary Brochure</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                onClick={() => {
                  setDownloadedBrochure(true);
                  setTimeout(() => setDownloadedBrochure(false), 3000);
                }}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-cyan-500/40 px-5 py-3 rounded-xl text-xs font-extrabold transition-all shadow-lg shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{downloadedBrochure ? 'Brochure Downloaded!' : 'Download Complete Itinerary Brochure'}</span>
              </button>
            )}
          </div>

          {/* Timeline List */}
          <div className="space-y-4">
            {event.agenda.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b182b] rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-lg hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md">
                      {item.time}
                    </span>
                    {item.type && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {item.type}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">{item.description}</p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={() => handleBookPass(event.passes[0])}
                    className="text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-orange-600 px-3.5 py-2 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                  >
                    Register for Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DELEGATE PASSES / PRICING SECTION */}
      {/* ========================================================================= */}
      <section id="delegate-passes" className="py-20 px-4 sm:px-6 bg-[#070d18] border-b border-slate-800 scroll-mt-12">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <CreditCard className="w-3.5 h-3.5" />
              <span>
                {event.id === 'canton-fair-delegation'
                  ? 'CHOOSE YOUR CANTON FAIR PHASE'
                  : isMagazine
                  ? 'AVAILABLE MAGAZINE EDITIONS'
                  : 'OFFICIAL REGISTRATION TIERS'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {event.id === 'canton-fair-delegation'
                ? 'Choose Your Canton Fair Phase'
                : isMagazine
                ? 'GET YOUR COPY OF NAMASTE ENTREPRENEUR 2026'
                : 'CHOOSE YOUR DELEGATE PASS'}
            </h2>
            <p className="text-sm text-slate-400 font-light">
              {event.id === 'canton-fair-delegation'
                ? 'Click below to toggle dates, industries, and corporate packages.'
                : isMagazine
                ? 'Read the 100% Free Digital E-Magazine or order a collector’s hardbound glossy print copy delivered to your doorstep across 10+ states.'
                : 'Select the right pass for your organization. All passes include GST tax invoicing, delegate kit, and official certification.'}
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className={`grid grid-cols-1 ${event.passes.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8 items-stretch`}>
            {event.passes.map((pass) => {
              const isRec = pass.recommended;
              const passGst = Math.round((pass.price * (pass.gstPercentage || 18)) / 100);
              const passShipping = isMagazine && pass.price > 0 ? 60 : 0;
              const passTotal = pass.price + passGst + passShipping;
              const isFree = pass.price === 0;

              return (
                <div
                  key={pass.id}
                  className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                    isRec
                      ? 'bg-gradient-to-b from-[#14233c] to-[#0b172a] border-2 border-orange-500 ring-4 ring-orange-500/20 transform md:-translate-y-2'
                      : 'bg-[#0b1626] border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Badge */}
                  {pass.badge && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg ${
                      isFree ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950' : 'bg-gradient-to-r from-orange-600 to-amber-500 text-slate-950'
                    }`}>
                      {pass.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Title & Short Desc */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-black text-white">{pass.name}</h3>
                      <p className="text-xs text-slate-300 font-light leading-relaxed min-h-[36px]">
                        {pass.shortDesc}
                      </p>
                    </div>

                    {/* Early Bird Special Box */}
                    {pass.earlyBirdDiscount && (
                      <div className="p-3 bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-orange-500/15 border border-orange-500/30 rounded-xl text-xs text-amber-300 font-bold flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>🎉 Early Bird Special: {pass.earlyBirdDiscount}</span>
                      </div>
                    )}

                    {/* Core Categories List if present */}
                    {pass.categories && pass.categories.length > 0 && (
                      <div className="space-y-2 bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800/80">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                          Core Categories:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {pass.categories.map((cat, ci) => (
                            <li key={ci} className="flex items-start gap-2">
                              <span className="text-orange-400 font-black">•</span>
                              <span className="leading-snug">{cat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Price Breakdown */}
                    <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-1">
                      {isFree ? (
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">FREE</span>
                            <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                              Instant Email Access
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1">
                            Total Payable: <strong className="text-emerald-400">₹0 (100% Free Complimentary Copy)</strong>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xs text-slate-400 font-bold">INR</span>
                            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                              ₹{pass.price.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs text-amber-400 font-bold">+ {pass.gstPercentage || 18}% GST {isMagazine && '+ Delivery'}</span>
                          </div>
                          <div className="text-[11px] text-slate-400">
                            Total Payable: <strong className="text-slate-200">₹{passTotal.toLocaleString('en-IN')}</strong> (incl. ₹{passGst.toLocaleString('en-IN')} GST {isMagazine && '+ ₹60 courier'})
                          </div>
                        </div>
                      )}
                      {pass.seatsLeft && (
                        <div className="text-[11px] text-orange-400 font-semibold pt-1">
                          {isFree ? 'Open to all registered business owners' : 'Limited capacity — contact us to check availability'}
                        </div>
                      )}
                    </div>

                    {/* Benefits Checklist */}
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {isMagazine ? 'Edition Features:' : 'Package Inclusions & Benefits:'}
                      </div>
                      <ul className="space-y-2.5 text-xs text-slate-200">
                        {pass.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isFree ? 'text-emerald-400' : 'text-amber-400'}`} />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-8">
                    <button
                      onClick={() => handleBookPass(pass)}
                      className={`w-full py-4 px-6 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                        isFree
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-950/70'
                          : isRec
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-orange-950/70'
                          : 'bg-slate-800 hover:bg-orange-600 text-white hover:shadow-orange-950/40'
                      }`}
                    >
                      <span>
                        {isFree
                          ? 'GET FREE DIGITAL COPY NOW'
                          : isMagazine
                          ? 'ORDER PHYSICAL PRINT (₹500 + GST)'
                          : 'BOOK THIS PASS'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-[10px] text-center text-slate-500 mt-2 font-medium">
                      {isFree ? 'Instant Email Delivery • Free Lifetime Access' : 'Official Tax Invoicing • Speed Post Courier Dispatch'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Double Phase Sourcing Discount Banner */}
          {event.doublePhaseDiscount && (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#172554] via-[#0f172a] to-[#1e1b4b] border-2 border-cyan-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{event.doublePhaseDiscount.title}</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-medium max-w-3xl">
                  {event.doublePhaseDiscount.description}
                </p>
              </div>
              <button
                onClick={() => {
                  const doublePass = event.passes.find((p) => p.id === 'double-phase-package') || event.passes[0];
                  handleBookPass(doublePass);
                }}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-cyan-950/80 transition-all shrink-0 cursor-pointer"
              >
                {event.doublePhaseDiscount.actionText || 'Register Double Phase'} →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6B. PACKAGE INCLUSIONS & PACKAGE EXCLUSIONS */}
      {/* ========================================================================= */}
      {event.inclusions && event.exclusions && (
        <section className="py-16 px-4 sm:px-6 bg-[#091220] border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>DELEGATION SCOPE &amp; TRANSPARENCY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                PACKAGE INCLUSIONS &amp; EXCLUSIONS
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                Clear, transparent breakdown of what is covered in your official delegation package.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="bg-[#0b172a] rounded-3xl p-6 sm:p-8 border border-emerald-500/30 space-y-6 shadow-xl">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white">Package Inclusions</h3>
                    <div className="text-xs text-emerald-400 font-semibold">Fully Covered in Delegation Fee</div>
                  </div>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                  {event.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-[#0b172a] rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-xl">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center font-bold">
                    <X className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white">Package Exclusions</h3>
                    <div className="text-xs text-slate-400 font-semibold">Self-funded / Optional Extra Items</div>
                  </div>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  {event.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                      <span className="leading-relaxed font-light">{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6C. CANCELLATION POLICY & VISA PROTECTION */}
      {/* ========================================================================= */}
      {event.cancellationPolicy && (
        <section className="py-12 px-4 sm:px-6 bg-[#070e1a] border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d2238] via-[#0b172a] to-[#0c1f36] border-2 border-cyan-500/40 shadow-2xl flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center md:text-left flex-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-400">
                🛡️ Cancellation Policy &amp; Visa Protection
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                100% Peace of Mind Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                {event.cancellationPolicy}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6D. RESERVE DELEGATION SEAT INLINE FORM */}
      {/* ========================================================================= */}
      <section id="reserve-seat-form" className="py-16 px-4 sm:px-6 bg-[#091322] border-b border-slate-800">
        <div className="max-w-[800px] mx-auto bg-[#0b182b] rounded-3xl border border-slate-700 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RESERVE DELEGATION SEAT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Reserve Your Sourcing Delegation Slot
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Reserve your seat now. Contact us for pricing and deposit details.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const passToBook = event.passes.find((p) => p.id === selectedReservationPhase) || event.passes[0];
              handleBookPass(passToBook);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunil Singhal"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sunil@singhaltextiles.com"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone / Mobile (WhatsApp preferred) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98300 98300"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Selected Delegation Phase *
                </label>
                <select
                  value={selectedReservationPhase}
                  onChange={(e) => setSelectedReservationPhase(e.target.value)}
                  className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
                >
                  <option value="phase-2-package">Phase 2: Building Materials &amp; Furniture (Apr 23 - 29)</option>
                  <option value="phase-3-package">Phase 3: Textiles, Fashion &amp; Health Products (Apr 30 - May 7)</option>
                  <option value="double-phase-package">Double Phase: Phase 2 + Phase 3 (Apr 23 - May 7)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                What products do you plan to source? (Helps guide matchmaking)
              </label>
              <textarea
                rows={3}
                placeholder="E.g. Sourcing outdoor rattan furniture, sanitaries..."
                value={formData.productDetails}
                onChange={(e) => setFormData({ ...formData, productDetails: e.target.value })}
                className="w-full text-xs px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-orange-500 outline-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-xs sm:text-sm py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Sourcing Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${event.supportWhatsapp.replace(/[^0-9]/g, '')}?text=Hello%2C%20I%20want%20to%20reserve%20a%20seat%20for%20Canton%20Fair%202026%20Delegation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consult Booking Desk on WhatsApp</span>
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WHO SHOULD ATTEND */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 bg-[#091322] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>TARGET AUDIENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              WHO SHOULD ATTEND?
            </h2>
            <p className="text-sm text-slate-400 font-light">
              This conclave is specifically tailored for enterprise leaders, exporters, and founders ready for accelerated scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {event.targetAudience.map((aud, i) => (
              <div
                key={i}
                className="bg-[#0b182b] p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all space-y-3 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{aud.title}</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{aud.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SPEAKERS / INDUSTRY LEADERS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 bg-[#070d18] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ORGANIZATIONAL LEADERSHIP &amp; MENTORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              INDUSTRY EXPERTS &amp; BUSINESS LEADERS
            </h2>
            <p className="text-sm text-slate-400 font-light">
              Guided by recognized MSME leaders, export advisors, and state felicitated mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {event.speakers.map((sp, i) => (
              <div
                key={i}
                className="bg-[#0b1626] rounded-2xl border border-slate-800 overflow-hidden shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={sp.image}
                      alt={sp.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/members/pragati.jpeg';
                      }}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/60 shadow-md"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white">{sp.name}</h3>
                      <div className="text-xs text-amber-400 font-semibold">{sp.designation}</div>
                      <div className="text-[11px] text-slate-400">{sp.organization}</div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 font-light leading-relaxed border-t border-slate-800 pt-3">
                    <strong>Expertise:</strong> {sp.expertise}
                  </div>

                  {sp.topic && (
                    <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl text-xs text-orange-300 font-medium">
                      <strong>Conclave Keynote:</strong> &ldquo;{sp.topic}&rdquo;
                    </div>
                  )}
                </div>

                <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">VUSF Executive Directorate</span>
                  <span className="text-amber-400 font-bold">Keynote Speaker</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. EVENT GALLERY (WITH LIGHTBOX) */}
      {/* ========================================================================= */}
      {event.galleryImages && event.galleryImages.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-[#091220] border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 bg-orange-500/15 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>PHOTOGRAPHIC ARCHIVE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">GLIMPSES FROM PREVIOUS EVENTS</h2>
                <p className="text-xs sm:text-sm text-slate-400 font-light">
                  Click any photo to enlarge and view our historical delegation and summit milestones.
                </p>
              </div>

              <Link
                to="/namaste-india-group"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 shrink-0 hover:underline"
              >
                <span>View Full 33-Milestone Interactive Timeline</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {event.galleryImages.map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative h-48 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg cursor-pointer hover:border-orange-500 transition-all"
                >
                  <img
                    src={imgUrl}
                    alt={`Event gallery ${i + 1}`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/timeline_photos/start namste india/IMG-20260206-WA0035.jpeg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[11px] font-bold text-white flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Click to enlarge</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 10. VIDEO SECTION */}
      {/* ========================================================================= */}
      {event.youtubeId && (
        <section className="py-16 px-4 sm:px-6 bg-[#070d18] border-b border-slate-800">
          <div className="max-w-[1000px] mx-auto space-y-8 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Video className="w-3.5 h-3.5" />
                <span>OFFICIAL EVENT BROADCAST</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">WATCH PREVIOUS CONCLAVE HIGHLIGHTS</h2>
              <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
                Experience the atmosphere, cross-border business discussions, and participant feedback from our previous summits.
              </p>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${event.youtubeId}?rel=0`}
                title="VUSF Event Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 11. SOCIAL PROOF & TRUST BADGES */}
      {/* ========================================================================= */}
      <section className="py-14 px-4 sm:px-6 bg-[#0a1526] border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0b1a30] border border-slate-800 space-y-2.5">
            <ShieldCheck className="w-8 h-8 text-cyan-400" />
            <h3 className="text-base font-bold text-white">ISO 9001:2015 Certified Foundation</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Incorporated under Section 8 of the Companies Act, 2013, Ministry of Corporate Affairs (Govt. of India). CIN: U88900MH2025NPL437820.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b1a30] border border-slate-800 space-y-2.5">
            <Award className="w-8 h-8 text-amber-400" />
            <h3 className="text-base font-bold text-white">State Achievement Award Winner</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Honored by the Government of Maharashtra, presented by Hon. Shri Uday Samant, Minister of Industries, for driving district industrial investment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b1a30] border border-slate-800 space-y-2.5">
            <Users className="w-8 h-8 text-emerald-400" />
            <h3 className="text-base font-bold text-white">33+ Landmark Conclaves Since 2021</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Successfully organized high-impact delegations across China, Vietnam, Thailand, Nepal, Serbia, and pan-India industrial clusters.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 bg-[#070d18] border-b border-slate-800">
        <div className="max-w-[1000px] mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>EVERYTHING YOU NEED TO KNOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Clear answers regarding registrations, tax invoices, venue amenities, and pass transfers.
            </p>
          </div>

          <div className="space-y-3">
            {event.faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800 bg-[#0b1626] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FINAL BOTTOM CONVERSION CTA */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-t from-[#0b1a30] via-[#070d18] to-[#070d18] border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-500/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>SECURE YOUR DELEGATE REGISTRATION TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Join {event.title}?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto">
            Connect with industry captains, scale your commercial opportunities, and build high-value partnerships that propel your enterprise forward.
          </p>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-amber-400 font-extrabold">
            <span>{event.date}</span>
            <span>&bull;</span>
            <span>{event.venue}, {event.city}</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToPasses}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-black text-base px-10 py-4 rounded-xl shadow-2xl shadow-orange-950/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>REGISTER NOW →</span>
            </button>

            <a
              href={`https://wa.me/${event.supportWhatsapp.replace(/[^0-9]/g, '')}?text=Hello%2C%20I%20have%20questions%20about%20${encodeURIComponent(event.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Contact Registration Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13B. READY TO SOURCE PRODUCTS FROM CHINA? CONSULTATION BANNER */}
      {/* ========================================================================= */}
      {event.consultationBanner && (
        <section className="py-14 px-4 sm:px-6 bg-gradient-to-r from-[#0b172a] via-[#091e33] to-[#0b172a] border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto text-center space-y-8">
            <div className="space-y-3 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {event.consultationBanner.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {event.consultationBanner.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {event.consultationBanner.stats.map((s, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">{s.value}</div>
                  <div className="text-xs font-semibold text-slate-300">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('reserve-seat-form') || document.getElementById('delegate-passes');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                {event.consultationBanner.ctaText || 'Book Free Consultation'}
              </button>
              <a
                href={`https://wa.me/${event.supportWhatsapp.replace(/[^0-9]/g, '')}?text=Hello%2C%20I%20am%20ready%20to%20source%20products%20from%20China.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-950"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us Now</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 14. WHATSAPP & DIRECT SUPPORT DESK */}
      {/* ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 bg-[#050912] border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto p-8 rounded-3xl bg-[#091526] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 justify-center md:justify-start">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Need Help with Registration or Corporate Passes?</span>
            </h3>
            <p className="text-xs text-slate-300 font-light">
              Get immediate assistance with pass selection, corporate discounts, payment assistance, or venue directions.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
              <div className="flex items-center gap-1 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>{event.supportPhone}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{event.supportEmail}</span>
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${event.supportWhatsapp.replace(/[^0-9]/g, '')}?text=Hello%2C%20I%20need%20help%20with%20registration%20for%20${encodeURIComponent(event.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950 flex items-center gap-2 shrink-0 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP US NOW</span>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. EXPLORE OTHER FORTHCOMING EVENTS */}
      {/* ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 bg-[#070d18]">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Explore Other Upcoming Summits</h3>
              <p className="text-xs text-slate-400 mt-0.5">Discover more international trade delegations and regional conclaves</p>
            </div>
            <Link
              to="/events"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline shrink-0"
            >
              <span>View All 11 Upcoming Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherEvents.map((other) => (
              <Link
                key={other.id}
                to={`/events/${other.slug}`}
                className="bg-[#0b1626] rounded-2xl border border-slate-800 overflow-hidden hover:border-orange-500/60 transition-all group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-full aspect-[16/10] overflow-hidden relative bg-slate-950 border-b border-slate-800">
                    <img
                      src={other.image}
                      alt={other.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-orange-600 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded">
                      {other.eventType}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{other.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {other.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 font-light">{other.description}</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/60 border-t border-slate-800 text-xs font-bold text-amber-400 flex items-center justify-between">
                  <span>View Details &amp; Register</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ONBOARDING / REGISTRATION & PAYMENT MODAL */}
      {/* ========================================================================= */}
      {isCheckoutOpen && selectedPass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in">
          <div className={`rounded-[14px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full max-w-2xl overflow-hidden my-8 relative flex flex-col max-h-[90vh] ${checkoutStep === 'details' ? 'bg-white text-gray-900 border border-gray-100' : 'bg-[#0b172a] text-slate-100 border border-slate-700'}`}>
            
            {checkoutStep === 'details' ? (
              <>
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 flex items-center justify-center transition-colors z-10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="p-8 overflow-y-auto flex-1">
                  <div className="text-center mb-8">
                    <h3 className="text-[22px] font-semibold text-[#0d3b44] mb-2">Complete Your Registration</h3>
                    <div className="text-gray-600 text-[15px]">
                      You have selected: <span className="font-bold text-[#0d3b44]">{selectedPass.name} ({selectedPass.price === 0 ? 'Free' : `INR ${selectedPass.price.toLocaleString('en-IN')}`})</span>
                    </div>
                  </div>
                  
                  <form onSubmit={handleProceedToPayment} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#0d3b44] mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#0d3b44] focus:ring-1 focus:ring-[#0d3b44] outline-none transition-shadow text-[15px]"
                        />
                        {formErrors.fullName && <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0d3b44] mb-1.5">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          placeholder="10-digit mobile number"
                          className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#0d3b44] focus:ring-1 focus:ring-[#0d3b44] outline-none transition-shadow text-[15px]"
                        />
                        {formErrors.mobileNumber && <p className="text-xs text-red-500 mt-1">{formErrors.mobileNumber}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0d3b44] mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.emailAddress}
                          onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#0d3b44] focus:ring-1 focus:ring-[#0d3b44] outline-none transition-shadow text-[15px]"
                        />
                        {formErrors.emailAddress && <p className="text-xs text-red-500 mt-1">{formErrors.emailAddress}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0d3b44] mb-1.5">Company Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Enter company name"
                          className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#0d3b44] focus:ring-1 focus:ring-[#0d3b44] outline-none transition-shadow text-[15px]"
                        />
                        {formErrors.companyName && <p className="text-xs text-red-500 mt-1">{formErrors.companyName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0d3b44] mb-1.5">City *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Mumbai"
                          className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#0d3b44] focus:ring-1 focus:ring-[#0d3b44] outline-none transition-shadow text-[15px]"
                        />
                        {formErrors.city && <p className="text-xs text-red-500 mt-1">{formErrors.city}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0d3b44] mb-1.5">Company Turnover *</label>
                        <select
                          value={formData.turnover}
                          onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-900 focus:border-[#0d3b44] focus:ring-1 focus:ring-[#0d3b44] outline-none transition-shadow text-[15px] cursor-pointer"
                        >
                          <option value="Under ₹50 lakh">Under ₹50 lakh</option>
                          <option value="₹50 lakh – ₹2 crore">₹50 lakh – ₹2 crore</option>
                          <option value="₹2 crore – ₹10 crore">₹2 crore – ₹10 crore</option>
                          <option value="Above ₹10 crore">Above ₹10 crore</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0d3b44] mb-1.5">Nature of Business *</label>
                        <select
                          value={formData.natureOfBusiness}
                          onChange={(e) => setFormData({ ...formData, natureOfBusiness: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-900 focus:border-[#0d3b44] focus:ring-1 focus:ring-[#0d3b44] outline-none transition-shadow text-[15px] cursor-pointer"
                        >
                          <option value="Manufacturing & Industrial">Manufacturing &amp; Industrial</option>
                          <option value="Export & Import">Export &amp; Import</option>
                          <option value="Agro & Food Processing">Agro &amp; Food Processing</option>
                          <option value="Technology & Startup">Technology &amp; Startup</option>
                          <option value="Wholesale & Trading">Wholesale &amp; Trading</option>
                          <option value="Services & Consulting">Services &amp; Consulting</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0d3b44] mb-1.5">Product / Service Details *</label>
                        <input
                          type="text"
                          required
                          value={formData.productDetails}
                          onChange={(e) => setFormData({ ...formData, productDetails: e.target.value })}
                          placeholder="Briefly describe products"
                          className="w-full px-4 py-2.5 rounded-[10px] bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#0d3b44] focus:ring-1 focus:ring-[#0d3b44] outline-none transition-shadow text-[15px]"
                        />
                        {formErrors.productDetails && <p className="text-xs text-red-500 mt-1">{formErrors.productDetails}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-[#0d3b44] mb-1.5">Challenges Faced Doing Business *</label>
                        <textarea
                          rows={3}
                          required
                          value={formData.challengesFaced}
                          onChange={(e) => setFormData({ ...formData, challengesFaced: e.target.value })}
                          placeholder="Describe the key challenges you are currently facing in your business operations..."
                          className="w-full px-4 py-3 rounded-[10px] bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#0d3b44] focus:ring-1 focus:ring-[#0d3b44] outline-none transition-shadow text-[15px] resize-none"
                        />
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isProcessingPayment}
                        className="w-full py-3.5 rounded-[10px] bg-[#d4af37] hover:bg-[#c5a030] text-[#0d3b44] font-semibold text-[15px] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isProcessingPayment ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-[#0d3b44] border-t-transparent rounded-full animate-spin" />
                            <span>Processing...</span>
                          </div>
                        ) : (
                          <>
                            PROCEED TO PAYMENT →
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <>
                {/* Modal Header */}
                <div className="p-5 bg-gradient-to-r from-[#0c1c33] to-[#1e293b] border-b border-slate-800 flex items-center justify-between shrink-0">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                      {isMagazine
                        ? (selectedPass.price === 0 ? 'COMPLIMENTARY DIGITAL MAGAZINE' : 'ORDER PHYSICAL HARD COPY')
                        : `OFFICIAL EVENT REGISTRATION • ${event.brand}`}
                    </div>
                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  </div>
                  <button
                    onClick={() => setIsCheckoutOpen(false)}
                    className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body with Step Progress */}
                <div className="p-6 overflow-y-auto space-y-6 flex-1">
                {/* Step 2: Payment Gateway Selection */}
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

                  {/* Summary Box */}
                  <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>{selectedPass.name} (x{formData.quantity})</span>
                      <span className="font-semibold text-white">₹{basePrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>GST @ 18% (Itemized Tax Invoice)</span>
                      <span className="font-semibold text-amber-400">₹{gstAmount.toLocaleString('en-IN')}</span>
                    </div>
                    {shippingFee > 0 && (
                      <div className="flex justify-between text-slate-300">
                        <span>Speed Post / Doorstep Courier Delivery</span>
                        <span className="font-semibold text-cyan-400">₹{shippingFee.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-slate-800">
                      <span>Total Amount Payable</span>
                      <span className="text-amber-400">₹{totalPayable.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Payment Method Selector */}
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

                  {/* Payment Simulator Box */}
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
                            Instant QR Generation &bull; Zero Gateway Surcharge
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
                          <option>HDFC Bank</option>
                          <option>State Bank of India (SBI)</option>
                          <option>ICICI Bank</option>
                          <option>Axis Bank</option>
                          <option>Kotak Mahindra Bank</option>
                          <option>Bank of Baroda</option>
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

                  {/* Pay Button */}
                  <button
                    type="button"
                    onClick={handleCompletePayment}
                    disabled={isProcessingPayment}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isProcessingPayment ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Securing Transaction &amp; Processing Order...</span>
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
                    <span>256-Bit SSL Encrypted &bull; ISO 9001:2015 Registered Non-Profit Foundation</span>
                  </div>
                </div>
              )}

              {/* Step 3: Success Confirmation & Download */}
              {checkoutStep === 'success' && (
                <div className="space-y-6 text-center py-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCheck className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {isMagazine
                        ? (selectedPass.price === 0 ? 'DIGITAL E-MAGAZINE CONFIRMED' : 'PHYSICAL PRINT ORDER CONFIRMED')
                        : 'REGISTRATION CONFIRMED • PASS ISSUED'}
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      {isMagazine && selectedPass.price === 0 ? `Thank you, ${formData.fullName}!` : `Welcome, ${formData.fullName}!`}
                    </h3>
                    <p className="text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
                      {isMagazine && selectedPass.price === 0 ? (
                        <>
                          Your complimentary copy of <strong>Namaste Entrepreneur 2026 Magazine</strong> has been sent via Email to{' '}
                          <strong className="text-amber-300">{formData.emailAddress}</strong>.
                        </>
                      ) : isMagazine ? (
                        <>
                          Your physical print order has been placed. Order confirmation and GST tax invoice have been dispatched to{' '}
                          <strong className="text-amber-300">{formData.emailAddress}</strong>.
                        </>
                      ) : (
                        <>
                          Your delegate pass and official GST Tax Invoice have been confirmed and sent to{' '}
                          <strong className="text-amber-300">{formData.emailAddress}</strong>.
                        </>
                      )}
                    </p>
                  </div>

                  {/* Confirmation Badge Card */}
                  <div className="bg-gradient-to-br from-[#0c1c33] to-[#16233b] border-2 border-orange-500/50 p-6 rounded-3xl text-left space-y-4 max-w-md mx-auto shadow-2xl relative">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-amber-400">
                          {isMagazine ? 'OFFICIAL PUBLICATION REGISTRATION' : 'OFFICIAL DELEGATE PASS'}
                        </div>
                        <h4 className="text-base font-extrabold text-white">{event.title}</h4>
                      </div>
                      <div className="w-14 h-14 bg-white p-1 rounded-xl shrink-0 flex items-center justify-center shadow-md">
                        <QrCode className="w-12 h-12 text-slate-950" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-700/80 pt-3">
                      <div>
                        <div className="text-[10px] text-slate-400">{isMagazine ? 'Reader / Recipient:' : 'Delegate Name:'}</div>
                        <div className="font-bold text-white">{formData.fullName}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Company:</div>
                        <div className="font-bold text-white">{formData.companyName}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Edition / Pass:</div>
                        <div className="font-bold text-amber-300">{selectedPass.name}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Reference ID:</div>
                        <div className="font-bold text-cyan-300">{confirmedOrderId}</div>
                      </div>
                      {selectedPass.id === 'physical-print-pass' && (
                        <div className="col-span-2">
                          <div className="text-[10px] text-slate-400">Delivery Address:</div>
                          <div className="font-semibold text-slate-200 text-[11px]">{formData.shippingAddress}, {formData.city} - {formData.pincode}</div>
                        </div>
                      )}
                      <div>
                        <div className="text-[10px] text-slate-400">Status:</div>
                        <div className="font-bold text-emerald-400">
                          {selectedPass.price === 0 ? 'Email Dispatched' : 'Order Placed & Invoiced'}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Total:</div>
                        <div className="font-bold text-emerald-400">
                          {selectedPass.price === 0 ? 'FREE (₹0)' : `₹${totalPayable.toLocaleString('en-IN')}`}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    {isMagazine && selectedPass.price === 0 ? (
                      <>
                        <button
                          onClick={() => {
                            alert(`Downloading Namaste Entrepreneur 2026 Magazine PDF. A permanent download link has also been sent to ${formData.emailAddress}`);
                          }}
                          className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download E-Magazine PDF</span>
                        </button>

                        <a
                          href={`https://wa.me/917499492860?text=Hello%2C%20I%20have%20registered%20for%20Namaste%20Entrepreneur%202026%20Magazine%20(Ref%3A%20${confirmedOrderId})%20and%20would%20like%20to%20inquire%20about%20editorial%20story%20submissions.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-5 py-3 rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4 text-emerald-400" />
                          <span>Submit Story on WhatsApp</span>
                        </a>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => window.print()}
                          className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-5 py-3 rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Printer className="w-4 h-4 text-slate-300" />
                          <span>Print Receipt / Pass</span>
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
                      </>
                    )}

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
            </>
          )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LIGHTBOX PHOTO MODAL */}
      {/* ========================================================================= */}
      {lightboxIndex !== null && event.galleryImages && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-orange-400 p-2 bg-slate-900/80 rounded-full transition-colors cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null ? (prev - 1 + event.galleryImages.length) % event.galleryImages.length : 0))
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 p-3 bg-slate-900/80 rounded-full transition-colors cursor-pointer z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % event.galleryImages.length : 0))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-400 p-3 bg-slate-900/80 rounded-full transition-colors cursor-pointer z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
            <img
              src={event.galleryImages[lightboxIndex]}
              alt={`Gallery preview ${lightboxIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-slate-700"
            />
            <div className="text-xs text-slate-400 mt-3 font-semibold">
              Photo {lightboxIndex + 1} of {event.galleryImages.length} &bull; {event.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
