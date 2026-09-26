import React, { useState } from 'react';
import { X, CheckCircle2, Building, User, Mail, Send, MapPin, Phone } from 'lucide-react';
import { BrandIcon } from './BrandLogo';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    fullName: '',
    workEmail: '',
    phone: '',
    locationCount: '1',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.fullName || !formData.workEmail) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-trial-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1322] border border-[#263352] p-6 sm:p-8 shadow-2xl space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <BrandIcon size={32} />
          <div>
            <h3 id="modal-trial-title" className="text-xl font-serif font-bold text-white">
              Request a Guided 7-Day Trial
            </h3>
            <p className="text-xs text-slate-400">
              Personalized setup · No credit card required
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-white">Request Received</h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Our team will review your location details and email you at <strong className="text-white">{formData.workEmail}</strong> to schedule your guided setup call.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#1A73E8] hover:bg-[#1557B0] text-xs font-semibold text-white rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {error && (
              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-800 text-xs text-red-200">
                {error}
              </div>
            )}

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Business Name *
              </label>
              <input
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Cedar Street Dental"
                className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Jane Smith"
                  className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 000-0000"
                  className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Number of Locations
                </label>
                <select
                  value={formData.locationCount}
                  onChange={(e) => setFormData({ ...formData, locationCount: e.target.value })}
                  className="w-full bg-[#090D18] text-xs text-slate-200 border border-[#1E293B] rounded-lg px-3 py-2.5 focus:border-blue-500 focus:outline-none cursor-pointer"
                >
                  <option value="1">1 Location</option>
                  <option value="2-5">2 to 5 Locations</option>
                  <option value="6-20">6 to 20 Locations</option>
                  <option value="20+">20+ Locations</option>
                </select>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Our team follows up to arrange setup. No automatic renewals.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
