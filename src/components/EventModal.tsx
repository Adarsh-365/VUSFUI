import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EventItem } from '../types';

interface EventModalProps {
  event: EventItem | { title: string; date: string; location: string } | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [delegateType, setDelegateType] = useState('delegate');

  if (!event) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 bg-[#7c2d12] text-white flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            VUSF Trade Summit &amp; Expo Registration
          </span>
          <button
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {registered ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="text-lg font-bold text-slate-900">Registration Confirmed!</h3>
              <p className="text-xs text-slate-600">
                Your delegate pass for <strong>{event.title}</strong> has been issued. Delegation details and B2B matchmaking schedule have been emailed to {email}.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-4 py-2 bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold rounded-md cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1 font-semibold text-[#00873d]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {'description' in event && (
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  {event.description}
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Delegate / Exhibitor Registration
                </h4>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Full Name / Enterprise Rep
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:border-orange-600 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Official Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@enterprise.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:border-orange-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Participation Type
                    </label>
                    <select
                      value={delegateType}
                      onChange={(e) => setDelegateType(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:border-orange-600 outline-none bg-white"
                    >
                      <option value="delegate">Trade Delegate</option>
                      <option value="exhibitor">Exhibitor / Stall Booth</option>
                      <option value="buyer">International Buyer</option>
                      <option value="msme">MSME Delegator</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold py-2.5 rounded-lg text-xs transition-colors shadow-sm cursor-pointer mt-3"
                >
                  Confirm Delegate Registration
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
