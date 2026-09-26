import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Send, Clock, Building, User, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { BrandIcon } from './BrandLogo';

export const TrialRequestSection: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    fullName: '',
    workEmail: '',
    phone: '',
    locationCount: '1',
    businessType: 'Local Business',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.businessName.trim() || !formData.fullName.trim() || !formData.workEmail.trim()) {
      setErrorMessage('Please fill in your business name, full name, and work email.');
      return;
    }

    if (!formData.workEmail.includes('@') || !formData.workEmail.includes('.')) {
      setErrorMessage('Please provide a valid work email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate consultation submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="trial-request" className="py-20 lg:py-28 bg-[#070A13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0D1322] border border-[#1E293B] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Clear Terms & Reassurance */}
          <div className="lg:col-span-5 p-8 lg:p-10 bg-[#090E1B] border-b lg:border-b-0 lg:border-r border-[#1E293B] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <BrandIcon size={36} />

              <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                Request your guided 7-day trial
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Take 5-Star.AI for a test run with your actual team. Our specialists handle campaign setup, provide hardware recommendations, and review results with you.
              </p>

              {/* Guarantees List */}
              <div className="pt-3 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>No credit card required</strong> to submit this request.</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Personalized onboarding call</strong> before trial launch.</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>No automatic renewal</strong> or surprise recurring charges.</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Paid plans begin only upon written custom quote approval.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1E293B] text-[11px] text-slate-500 font-mono">
              Inquiries reviewed during standard business hours (M–F, 8am–6pm EST).
            </div>
          </div>

          {/* Right Column: Working Request Form */}
          <div className="lg:col-span-7 p-8 lg:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif text-white">
                  Trial Request Received!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span>. An onboarding specialist will reach out to <span className="text-white font-medium">{formData.workEmail}</span> within one business day to coordinate your guided setup.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        businessName: '',
                        fullName: '',
                        workEmail: '',
                        phone: '',
                        locationCount: '1',
                        businessType: 'Local Business',
                        notes: '',
                      });
                    }}
                    className="text-xs text-blue-400 hover:text-blue-300 font-medium underline"
                  >
                    Submit another location request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-semibold text-white">Your Business Details</h4>
                  <span className="text-xs text-slate-500">* Required fields</span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-200">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Business or Agency Name *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Cedar Street Dental"
                        className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg pl-9 pr-3 py-2.5 focus:border-blue-500 focus:outline-none placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Contact Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg pl-9 pr-3 py-2.5 focus:border-blue-500 focus:outline-none placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Work Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg pl-9 pr-3 py-2.5 focus:border-blue-500 focus:outline-none placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Phone (Optional) */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg pl-9 pr-3 py-2.5 focus:border-blue-500 focus:outline-none placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Number of Locations */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Number of Locations
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                      <select
                        value={formData.locationCount}
                        onChange={(e) => setFormData({ ...formData, locationCount: e.target.value })}
                        className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg pl-9 pr-3 py-2.5 focus:border-blue-500 focus:outline-none cursor-pointer"
                      >
                        <option value="1">1 Location</option>
                        <option value="2-5">2 to 5 Locations</option>
                        <option value="6-20">6 to 20 Locations</option>
                        <option value="20+">20+ Locations (Enterprise/Franchise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Business Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Organization Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none cursor-pointer"
                    >
                      <option value="Local Business">Local Business / Storefront</option>
                      <option value="Medical / Healthcare">Medical / Healthcare Clinic</option>
                      <option value="Hospitality / Restaurant">Hospitality / Food & Drink</option>
                      <option value="Multi-Location Brand">Regional Multi-Location Brand</option>
                      <option value="Marketing Agency">Marketing / SEO Agency</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Primary Goal or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us what you would like to test during your 7-day trial..."
                    className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg p-2.5 focus:border-blue-500 focus:outline-none resize-none placeholder:text-slate-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Request...' : 'Submit Guided Trial Request'}</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Submitting this form does not charge any fees or start an automatic subscription.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
