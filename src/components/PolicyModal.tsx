import React from 'react';
import { X, Shield, FileText, BookOpen, Building, CheckCircle2 } from 'lucide-react';
import { BrandIcon } from './BrandLogo';

export type ModalContentType = 'about' | 'resources' | 'privacy' | 'terms' | null;

interface PolicyModalProps {
  type: ModalContentType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0D1322] border border-[#263352] shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#1E293B] bg-[#090E1B]">
          <div className="flex items-center gap-3">
            <BrandIcon size={28} />
            <div>
              <h3 className="text-lg font-serif font-bold text-white capitalize">
                {type === 'about' && 'About 5-Star.AI'}
                {type === 'resources' && 'Reputation Best Practices & Resources'}
                {type === 'privacy' && 'Privacy Policy'}
                {type === 'terms' && 'Terms of Service'}
              </h3>
              <p className="text-xs text-slate-400">
                Official documentation & guidelines
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {type === 'about' && (
            <div className="space-y-4">
              <p>
                <strong>5-Star.AI</strong> was founded with a singular conviction: genuine customer satisfaction should never get lost in friction.
              </p>
              <p>
                Most loyal customers genuinely want to support their favorite neighborhood cafes, medical specialists, and local contractors. However, when faced with an empty textbox, many hesitate and abandon the process.
              </p>
              <p>
                We built 5-Star.AI to bridge this divide respectfully. By offering structured reflection (highlight tags) and assistive wording in the customer's selected tone, we help customers express what they loved about their visit — while keeping them in 100% control of the final words they post.
              </p>
              <div className="p-4 rounded-xl bg-[#11182A] border border-[#1E293B] space-y-2">
                <h4 className="font-semibold text-white">Our Core Commitments:</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Never gate, manipulate, or artificially restrict authentic reviews.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Ensure customers authenticate and post directly to Google.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Provide private channels for constructive feedback so owners can resolve issues.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {type === 'resources' && (
            <div className="space-y-4">
              <p>
                Explore our practical guides for local business owners and digital marketing agencies:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#11182A] border border-[#1E293B]">
                  <h4 className="font-semibold text-white text-sm">
                    1. Google Review Policy & Anti-Incentive Rules
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Why offering discounts, gifts, or raffles in exchange for reviews violates Google terms and can trigger penalties. Learn the compliant way to invite feedback.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#11182A] border border-[#1E293B]">
                  <h4 className="font-semibold text-white text-sm">
                    2. The Science of the "Natural Moment of Delight"
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Where and when to position NFC cards and QR stands. Comparative conversion between countertop touchpoints, table tents, and post-visit SMS follow-ups.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#11182A] border border-[#1E293B]">
                  <h4 className="font-semibold text-white text-sm">
                    3. De-escalating Negative Feedback
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    A blueprint for responding to 1-star reviews with poise, empathy, and constructive resolution that actually attracts prospective customers.
                  </p>
                </div>
              </div>
            </div>
          )}

          {type === 'privacy' && (
            <div className="space-y-4">
              <p>
                <strong>Last Updated:</strong> March 2026
              </p>
              <p>
                At 5-Star.AI, your privacy and your customers' trust are paramount.
              </p>
              <h4 className="font-semibold text-white text-sm">1. Customer Feedback & Draft Data</h4>
              <p>
                Text drafted within the 5-Star.AI review generation interface is processed in real time to assist customer formulation. We do not sell customer text or personal contact data to third parties or data brokers.
              </p>
              <h4 className="font-semibold text-white text-sm">2. Private Feedback Handling</h4>
              <p>
                When a customer submits a private feedback note (for 1–3 star experiences), that submission is transmitted directly and securely to the designated business owner or manager via encrypted transport (TLS 1.3).
              </p>
              <h4 className="font-semibold text-white text-sm">3. Business Account Information</h4>
              <p>
                Information provided during trial requests (such as work email, business name, and location count) is utilized strictly for setup consultation, customer support, and tailored invoicing.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-4">
              <p>
                <strong>Last Updated:</strong> March 2026
              </p>
              <h4 className="font-semibold text-white text-sm">1. Scope of Service</h4>
              <p>
                5-Star.AI provides marketing software tools including contactless NFC campaign entry points, generative draft assistance for customers, private feedback routing, and response drafting for business owners.
              </p>
              <h4 className="font-semibold text-white text-sm">2. Independent Service & Platform Marks</h4>
              <p>
                5-Star.AI is an independent software application and is not affiliated with, sponsored by, or endorsed by Google LLC. Google and Google Reviews are registered trademarks of Google LLC.
              </p>
              <h4 className="font-semibold text-white text-sm">3. Guided 7-Day Trial Terms</h4>
              <p>
                Submission of a trial request initiates onboarding coordination. Trials run for 7 consecutive calendar days. There are no automatic charges or involuntary renewals. Paid service commencement requires explicit written acceptance of a formal quote.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1E293B] bg-[#090E1B] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#162035] hover:bg-[#1E293B] text-slate-200 text-xs font-semibold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
