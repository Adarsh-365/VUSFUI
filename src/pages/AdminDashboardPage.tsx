import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Award,
  Crown,
  IndianRupee,
  RefreshCw,
  LogOut,
  Download,
  Search,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  Eye,
  EyeOff,
  X,
  Mail,
  Phone,
  Lock,
  KeyRound,
  ArrowLeft,
  AlertCircle,
} from 'lucide-react';

export interface EventRegistration {
  id: string;
  name: string;
  mob: string;
  email: string;
  age: number | string;
  occupation: string;
  what_do_you_expect: string;
  order_id: string;
  pass_type: string;
  amount: number;
  currency: string;
  timestamp: string;
  key?: string;
  status: 'paid' | 'created' | 'pending' | 'failed';
  signature?: string;
  update_at?: string;
  payment_id?: string;
  event_name?: string;
}

const INITIAL_REGISTRATIONS: EventRegistration[] = [
  {
    id: '3ce1ad7b-b178-4f12-a13f-2f17fb325b83',
    name: 'gajanan',
    mob: '7777777777',
    email: 'tadarsh2701@gmail.com',
    age: 78,
    occupation: 'Entrepreneur',
    what_do_you_expect: 'dfhhy',
    order_id: 'order_TYKjnxzSbWdk2F',
    pass_type: 'Delegate Pass',
    amount: 3540.0,
    currency: 'INR',
    timestamp: '2026-09-05 16:38:25.082358+00',
    key: 'rzp_live_TNfc6pQ3kOm87o',
    status: 'paid',
    signature: '10d3948d24c20c9cb59a336bccceec009483adccfa04bd542029d88aa5421f16',
    update_at: '2026-09-05 11:09:00.58968+00',
    payment_id: 'pay_TYKk6zpeC0v7La',
    event_name: 'Women Entrepreneurship Growth Program',
  },
  {
    id: '71c657ae-04f2-418c-8b4f-f3a897ae4bd6',
    name: 'gajanan',
    mob: '7777777777',
    email: 'tadarsh2701@gmail.com',
    age: 78,
    occupation: 'Entrepreneur',
    what_do_you_expect: 'dfhhy',
    order_id: 'order_TYLR380uG4B0j0',
    pass_type: 'vip_pass',
    amount: 100.0,
    currency: 'INR',
    timestamp: '2026-09-05 16:38:25.082358+00',
    key: 'rzp_live_TNfc6pQ3kOm87o',
    status: 'paid',
    signature: '5d97e39c1b7f7f31e0a51cf407fe36c162987692cd3254c0be487311681c25b6',
    update_at: '2026-09-05 11:50:07.125158+00',
    payment_id: 'pay_TYLRRYAsOgxLdD',
    event_name: 'Women Entrepreneurship Growth Program',
  },
];

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('vusf_admin_auth') === 'true';
  });
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Authenticate against .env credentials
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError(null);

    const expectedUser = (
      import.meta.env.VITE_ADMIN_USERNAME ||
      import.meta.env.VITE_ADMIN_USER ||
      import.meta.env.VITE_ADMIN_LOGIN ||
      'admin'
    ).trim();

    const expectedPass = (
      import.meta.env.VITE_ADMIN_PASSWORD ||
      import.meta.env.VITE_ADMIN_PASS ||
      'admin@vusf2026'
    ).trim();

    if (loginUsername.trim() === expectedUser && loginPassword.trim() === expectedPass) {
      sessionStorage.setItem('vusf_admin_auth', 'true');
      setIsAuthenticated(true);
      setLoginError(null);
      setLoginPassword('');
    } else {
      setLoginError('Invalid administrator credentials. Access denied.');
    }
    setIsSubmitting(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('vusf_admin_auth');
    setIsAuthenticated(false);
    setLoginPassword('');
    setLoginError(null);
  };

  const [registrations, setRegistrations] = useState<EventRegistration[]>(() => {
    const saved = localStorage.getItem('vusf_event_registrations');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error('Failed to parse saved registrations:', e);
      }
    }
    return INITIAL_REGISTRATIONS;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [eventFilter, setEventFilter] = useState<string>('all');
  const [passFilter, setPassFilter] = useState<'all' | 'delegate' | 'vip'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'paid' | 'pending'>('all');
  const [selectedRecord, setSelectedRecord] = useState<EventRegistration | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [lastDataSource, setLastDataSource] = useState<string>('Local Cache');

  // Extract all distinct event names dynamically
  const availableEvents = useMemo(() => {
    const eventsSet = new Set<string>();
    registrations.forEach((r) => {
      const name = (r.event_name || '').trim();
      if (name) {
        eventsSet.add(name);
      }
    });
    return Array.from(eventsSet).sort();
  }, [registrations]);

  // Fetch all users from API: /event/get-all-users
  const fetchAllUsers = async () => {
    setIsRefreshing(true);
    const backendBase = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/+$/, '');
    const endpoints = [
      ...(backendBase ? [`${backendBase}/event/get-all-users`, `${backendBase}/get-all-users`] : []),
      '/event/get-all-users',
      '/get-all-users',
      'http://127.0.0.1:8000/event/get-all-users',
      'http://127.0.0.1:8000/get-all-users',
    ];

    let items: any[] | null = null;
    let successfulEndpoint = '';

    for (const ep of endpoints) {
      try {
        const res = await fetch(ep, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data?.rows)) {
            // Handle SQL matrix { rows: [[...], [...]], clumns: [...] }
            const columns: string[] = data.clumns || data.columns || [
              'id', 'name', 'mob', 'email', 'age', 'occupation', 'what_do_you_expect',
              'order_id', 'pass_type', 'amount', 'currency', 'timestamp', 'key',
              'status', 'signature', 'update_at', 'payment_id', 'event_name'
            ];
            items = data.rows.map((row: any) => {
              if (Array.isArray(row)) {
                const obj: any = {};
                columns.forEach((col: string, idx: number) => {
                  obj[col] = row[idx];
                });
                return obj;
              }
              return row;
            });
          } else if (Array.isArray(data)) {
            items = data;
          } else if (Array.isArray(data?.data)) {
            items = data.data;
          } else if (Array.isArray(data?.users)) {
            items = data.users;
          } else if (Array.isArray(data?.registrations)) {
            items = data.registrations;
          } else if (Array.isArray(data?.result)) {
            items = data.result;
          }

          if (items) {
            successfulEndpoint = ep;
            break;
          }
        }
      } catch {
        // try next endpoint
      }
    }

    if (items && items.length > 0) {
      const parsed: EventRegistration[] = items.map((r: any, idx: number) => ({
        id: r.id || `rec-${idx}`,
        name: r.name || 'Anonymous',
        mob: r.mob || r.phone || r.mobile || '',
        email: r.email || '',
        age: r.age ?? '-',
        occupation: r.occupation || '-',
        what_do_you_expect: r.what_do_you_expect || r.expectations || '-',
        order_id: r.order_id || '',
        pass_type: r.pass_type === 'vip_pass' ? 'VIP Pass' : (r.pass_type === 'delegate_pass' ? 'Delegate Pass' : (r.pass_type || 'Delegate Pass')),
        amount: typeof r.amount === 'number' ? r.amount : (parseFloat(r.amount) || 0),
        currency: r.currency || 'INR',
        timestamp: r.timestamp || new Date().toISOString(),
        key: r.key || '',
        status: (r.status === 'paid' || r.status === 'created' || r.status === 'pending' || r.status === 'failed') ? r.status : 'paid',
        signature: r.signature || '',
        update_at: r.update_at || r.updated_at || '',
        payment_id: r.payment_id || '',
        event_name: r.event_name || 'Women Entrepreneurship Growth Program',
      }));

      setRegistrations(parsed);
      setLastDataSource(`Live API (${successfulEndpoint})`);
      try {
        localStorage.setItem('vusf_event_registrations', JSON.stringify(parsed));
      } catch (e) {}
    } else {
      // If API returned nothing or was unreachable, fallback to localStorage or initial
      const saved = localStorage.getItem('vusf_event_registrations');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setRegistrations(parsed);
          }
        } catch (e) {}
      }
    }
    setIsRefreshing(false);
  };

  // Call on component mount only if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchAllUsers();
    }
  }, [isAuthenticated]);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('vusf_event_registrations', JSON.stringify(registrations));
  }, [registrations]);

  // Handle Refresh
  const handleRefresh = async () => {
    await fetchAllUsers();
  };

  // Copy to clipboard helper
  const handleCopy = (text: string, idKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(idKey);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Download CSV Export
  const handleDownloadCSV = () => {
    const headers = [
      'ID',
      'Name',
      'Mobile',
      'Email',
      'Age',
      'Occupation',
      'Pass Type',
      'Amount',
      'Currency',
      'Status',
      'Order ID',
      'Payment ID',
      'Event Name',
      'Expectations',
      'Timestamp',
      'Updated At',
    ];

    const rows = filteredRegistrations.map((r) => [
      r.id,
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.mob}"`,
      `"${r.email}"`,
      r.age,
      `"${r.occupation}"`,
      `"${r.pass_type}"`,
      r.amount,
      r.currency,
      r.status,
      `"${r.order_id}"`,
      `"${r.payment_id || ''}"`,
      `"${(r.event_name || '').replace(/"/g, '""')}"`,
      `"${(r.what_do_you_expect || '').replace(/"/g, '""')}"`,
      `"${r.timestamp}"`,
      `"${r.update_at || ''}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `event_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate KPIs (scoped to event filter if selected)
  const stats = useMemo(() => {
    const target =
      eventFilter === 'all'
        ? registrations
        : registrations.filter(
            (r) => (r.event_name || '').trim().toLowerCase() === eventFilter.toLowerCase()
          );

    const totalBookings = target.length;
    const silverDelegates = target.filter(
      (r) => r.pass_type.toLowerCase().includes('delegate') || r.pass_type.toLowerCase().includes('silver')
    ).length;
    const goldDelegates = target.filter(
      (r) => r.pass_type.toLowerCase().includes('vip') || r.pass_type.toLowerCase().includes('gold')
    ).length;
    const totalRevenue = target
      .filter((r) => r.status === 'paid')
      .reduce((sum, r) => sum + (Number(r.amount) || 0), 0);

    return { totalBookings, silverDelegates, goldDelegates, totalRevenue };
  }, [registrations, eventFilter]);

  // Filtered registrations
  const filteredRegistrations = useMemo(() => {
    return registrations.filter((r) => {
      // Search
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        r.name.toLowerCase().includes(query) ||
        r.email.toLowerCase().includes(query) ||
        r.mob.includes(query) ||
        r.order_id.toLowerCase().includes(query) ||
        (r.payment_id && r.payment_id.toLowerCase().includes(query)) ||
        (r.event_name && r.event_name.toLowerCase().includes(query)) ||
        r.occupation.toLowerCase().includes(query);

      // Event Filter
      let matchesEvent = true;
      if (eventFilter !== 'all') {
        matchesEvent = (r.event_name || '').trim().toLowerCase() === eventFilter.toLowerCase();
      }

      // Pass Filter
      const p = r.pass_type.toLowerCase();
      let matchesPass = true;
      if (passFilter === 'delegate') {
        matchesPass = p.includes('delegate') || p.includes('silver');
      } else if (passFilter === 'vip') {
        matchesPass = p.includes('vip') || p.includes('gold');
      }

      // Status Filter
      let matchesStatus = true;
      if (statusFilter === 'paid') {
        matchesStatus = r.status === 'paid';
      } else if (statusFilter === 'pending') {
        matchesStatus = r.status !== 'paid';
      }

      return matchesSearch && matchesEvent && matchesPass && matchesStatus;
    });
  }, [registrations, searchQuery, eventFilter, passFilter, statusFilter]);

  // If not authenticated, render Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070e1a] flex items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Subtle glowing ambient accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-md bg-[#0b1626] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 shadow-inner">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              Admin Portal Login
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              VUSF Administrative Management • Restricted Access
            </p>
          </div>

          {/* Error Notice */}
          {loginError && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                Admin Username
              </label>
              <input
                type="text"
                required
                autoFocus
                value={loginUsername}
                onChange={(e) => {
                  setLoginUsername(e.target.value);
                  if (loginError) setLoginError(null);
                }}
                placeholder="Enter administrator ID"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginPassword}
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                    if (loginError) setLoginError(null);
                  }}
                  placeholder="Enter administrator password"
                  className="w-full px-3.5 pr-10 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <KeyRound className="w-4 h-4" />
              <span>Sign In to Admin Console</span>
            </button>
          </form>

          {/* Return to website */}
          <div className="pt-3 border-t border-slate-800/80 text-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070e1a] text-slate-100 font-sans">
      {/* Top Header Bar */}
      <header className="bg-[#0b1626] border-b border-slate-800/80 sticky top-0 z-30 shadow-lg">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Admin Dashboard
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Event Bookings Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-[11px] font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{lastDataSource}</span>
            </div>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700/80 transition-all cursor-pointer disabled:opacity-50 shadow-sm"
              title="Refresh Records from /event/get-all-users"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-amber-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Syncing...' : 'Refresh'}</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 text-xs font-bold border border-red-800/40 transition-all cursor-pointer shadow-sm"
              title="Logout & Lock Dashboard"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* KPI Cards Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Total Bookings */}
          <div className="bg-[#0b1628] border border-slate-800/90 p-5 rounded-2xl shadow-md hover:border-slate-700 transition-colors flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-2xl">👥</span>
              <div className="text-3xl font-black text-white tracking-tight">
                {stats.totalBookings}
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Total Bookings
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Users className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Silver / Delegate Passes */}
          <div className="bg-[#0b1628] border border-slate-800/90 p-5 rounded-2xl shadow-md hover:border-slate-700 transition-colors flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-2xl">🥈</span>
              <div className="text-3xl font-black text-white tracking-tight">
                {stats.silverDelegates}
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Silver Delegates
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-400/10 border border-slate-400/20 flex items-center justify-center text-slate-300">
              <Award className="w-6 h-6" />
            </div>
          </div>

          {/* Card 3: Gold / VIP Passes */}
          <div className="bg-[#0b1628] border border-slate-800/90 p-5 rounded-2xl shadow-md hover:border-slate-700 transition-colors flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-2xl">🥇</span>
              <div className="text-3xl font-black text-white tracking-tight">
                {stats.goldDelegates}
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Gold Delegates
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Crown className="w-6 h-6" />
            </div>
          </div>

          {/* Card 4: Total Revenue */}
          <div className="bg-[#0b1628] border border-slate-800/90 p-5 rounded-2xl shadow-md hover:border-slate-700 transition-colors flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-2xl">💰</span>
              <div className="text-3xl font-black text-emerald-400 tracking-tight">
                ₹{stats.totalRevenue.toLocaleString('en-IN')}
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Total Revenue
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <IndianRupee className="w-6 h-6" />
            </div>
          </div>
        </section>

        {/* Bookings Section */}
        <section className="bg-[#0b1628] border border-slate-800/90 rounded-2xl shadow-xl overflow-hidden">
          {/* Section Bar */}
          <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
                <span>Event Bookings</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                  {filteredRegistrations.length} {filteredRegistrations.length === 1 ? 'record' : 'records'}
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Real-time attendee registrations and verified payment orders
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadCSV}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download CSV</span>
              </button>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="p-4 sm:px-6 bg-[#081220] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, email, phone, order ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-amber-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Event Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-medium">Event:</span>
                <select
                  value={eventFilter}
                  onChange={(e) => setEventFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer max-w-[220px] truncate"
                >
                  <option value="all">All Events ({availableEvents.length})</option>
                  {availableEvents.map((ev) => (
                    <option key={ev} value={ev}>
                      {ev}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pass Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-medium">Pass:</span>
                <select
                  value={passFilter}
                  onChange={(e) => setPassFilter(e.target.value as any)}
                  className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="all">All Passes</option>
                  <option value="delegate">Delegate Pass (Silver)</option>
                  <option value="vip">VIP Pass (Gold)</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-medium">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending / Created</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/80 border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-3.5 px-4">Participant</th>
                  <th className="py-3.5 px-4">Profile</th>
                  <th className="py-3.5 px-4">Pass Type</th>
                  <th className="py-3.5 px-4">Amount</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Order ID &amp; Payment ID</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {filteredRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-slate-400">
                      <div className="space-y-2">
                        <Users className="w-8 h-8 text-slate-500 mx-auto" />
                        <div className="text-sm font-semibold text-slate-300">No bookings found</div>
                        <p className="text-xs text-slate-500">Try changing your search query or filters.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map((reg) => (
                    <tr
                      key={reg.id}
                      className="hover:bg-slate-800/40 transition-colors group cursor-default"
                    >
                      {/* Participant */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-white text-sm capitalize">{reg.name}</div>
                        <div className="text-slate-400 text-[11px] flex items-center gap-1 mt-0.5">
                          <Mail className="w-3 h-3 text-slate-500" />
                          <span>{reg.email}</span>
                        </div>
                        <div className="text-slate-400 text-[11px] flex items-center gap-1 mt-0.5">
                          <Phone className="w-3 h-3 text-slate-500" />
                          <span>{reg.mob}</span>
                        </div>
                      </td>

                      {/* Profile */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="text-slate-200 font-semibold">{reg.occupation}</div>
                        <div className="text-slate-500 text-[11px]">Age: {reg.age}</div>
                      </td>

                      {/* Pass Type */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold ${
                            reg.pass_type.toLowerCase().includes('vip') || reg.pass_type.toLowerCase().includes('gold')
                              ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                              : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                          }`}
                        >
                          {reg.pass_type.toLowerCase().includes('vip') ? (
                            <Crown className="w-3 h-3 text-amber-400" />
                          ) : (
                            <Award className="w-3 h-3 text-blue-400" />
                          )}
                          <span>{reg.pass_type}</span>
                        </span>
                        {reg.event_name && (
                          <div className="text-[10px] text-slate-500 mt-1 max-w-[150px] truncate" title={reg.event_name}>
                            {reg.event_name}
                          </div>
                        )}
                      </td>

                      {/* Amount */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-black text-white text-sm">
                          ₹{Number(reg.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="text-[10px] text-slate-500 uppercase">{reg.currency}</div>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {reg.status === 'paid' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Paid</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                            <Clock className="w-3 h-3" />
                            <span>Pending</span>
                          </span>
                        )}
                      </td>

                      {/* Order ID & Payment ID */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5">
                          <code className="text-[11px] font-mono text-cyan-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-700/60">
                            {reg.order_id}
                          </code>
                          <button
                            onClick={() => handleCopy(reg.order_id, `order-${reg.id}`)}
                            title="Copy Order ID"
                            className="text-slate-500 hover:text-white p-1 rounded transition-colors cursor-pointer"
                          >
                            {copiedId === `order-${reg.id}` ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>

                        {reg.payment_id ? (
                          <div className="flex items-center gap-1.5 mt-1">
                            <code className="text-[11px] font-mono text-emerald-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-700/60">
                              {reg.payment_id}
                            </code>
                            <button
                              onClick={() => handleCopy(reg.payment_id!, `pay-${reg.id}`)}
                              title="Copy Payment ID"
                              className="text-slate-500 hover:text-white p-1 rounded transition-colors cursor-pointer"
                            >
                              {copiedId === `pay-${reg.id}` ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-500 italic mt-1 block">Awaiting payment</span>
                        )}
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-400 text-[11px]">
                        {reg.timestamp ? (
                          <>
                            <div>{new Date(reg.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
                            <div className="text-slate-500">{new Date(reg.timestamp).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</div>
                          </>
                        ) : (
                          '—'
                        )}
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <button
                          onClick={() => setSelectedRecord(reg)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5 text-amber-400" />
                          <span>Details</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Record Details Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0b172a] border border-slate-700 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-5 bg-gradient-to-r from-[#0d1d33] to-[#16253d] border-b border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase font-extrabold text-amber-400 tracking-wider">
                  Registration Dossier
                </div>
                <h3 className="text-lg font-bold text-white capitalize">
                  {selectedRecord.name} &bull; {selectedRecord.pass_type}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRecord(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs flex-1">
              {/* Status Header */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Payment Status:</span>
                  {selectedRecord.status === 'paid' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>PAID &amp; VERIFIED</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      <Clock className="w-3.5 h-3.5" />
                      <span>PENDING</span>
                    </span>
                  )}
                </div>

                <div className="font-black text-base text-white">
                  ₹{Number(selectedRecord.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </div>
              </div>

              {/* Grid of Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Email Address</div>
                  <div className="font-semibold text-white">{selectedRecord.email}</div>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Mobile Phone</div>
                  <div className="font-semibold text-white">{selectedRecord.mob}</div>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Occupation &amp; Age</div>
                  <div className="font-semibold text-white">
                    {selectedRecord.occupation} (Age: {selectedRecord.age})
                  </div>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Event Name</div>
                  <div className="font-semibold text-white truncate" title={selectedRecord.event_name}>
                    {selectedRecord.event_name || 'Women Entrepreneurship Program'}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Razorpay Order ID</div>
                  <code className="text-cyan-300 font-mono text-[11px] block truncate">
                    {selectedRecord.order_id}
                  </code>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Razorpay Payment ID</div>
                  <code className="text-emerald-300 font-mono text-[11px] block truncate">
                    {selectedRecord.payment_id || 'Not generated yet'}
                  </code>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Registration Timestamp</div>
                  <div className="text-slate-300 text-[11px]">
                    {selectedRecord.timestamp || '—'}
                  </div>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Updated At</div>
                  <div className="text-slate-300 text-[11px]">
                    {selectedRecord.update_at || '—'}
                  </div>
                </div>
              </div>

              {/* What do you expect */}
              <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1.5">
                <div className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                  Expectations From Program
                </div>
                <p className="text-slate-200 text-xs leading-relaxed italic bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                  &ldquo;{selectedRecord.what_do_you_expect || 'No specific expectations entered.'}&rdquo;
                </p>
              </div>

              {/* Signature & Key Details */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2 text-[10px] text-slate-400">
                <div className="font-bold uppercase text-slate-500">Security &amp; Audit Logs</div>
                {selectedRecord.key && (
                  <div>
                    <span className="text-slate-500">Razorpay Key: </span>
                    <code className="text-slate-300">{selectedRecord.key}</code>
                  </div>
                )}
                {selectedRecord.signature && (
                  <div className="truncate" title={selectedRecord.signature}>
                    <span className="text-slate-500">Signature: </span>
                    <code className="text-slate-300">{selectedRecord.signature}</code>
                  </div>
                )}
                <div>
                  <span className="text-slate-500">Record UUID: </span>
                  <code className="text-slate-300">{selectedRecord.id}</code>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                VUSF Official Registration DB Record
              </span>
              <button
                onClick={() => setSelectedRecord(null)}
                className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};