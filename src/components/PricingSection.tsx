import React from 'react';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingProps {
  onRequestTrial: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onRequestTrial }) => {
  const plans = [
    {
      name: 'Single Location',
      description: 'Ideal for independent restaurants, medical practices, salons, and local service pros.',
      highlight: false,
      trialNote: 'Includes guided 7-day trial with 1 NFC hardware stand',
      features: [
        '1 Verified Google Business location',
        'Custom QR code generator & NFC table/counter kit',
        'AI review draft assistant (Customer view)',
        'Private feedback inbox with instant SMS/Email alerts',
        'AI reply assistant for incoming reviews',
        'Direct onboarding specialist setup call',
      ],
    },
    {
      name: 'Multi-Location Team',
      description: 'Built for regional brands, clinics, and multi-unit franchises needing centralized oversight.',
      highlight: true,
      trialNote: 'Includes guided 7-day trial across up to 3 pilot locations',
      features: [
        '2 to 20+ Physical locations supported',
        'Location-specific QR & NFC routing kits',
        'Centralized dashboard with location sentiment comparison',
        'Manager and staff permission levels',
        'Custom tone presets matching brand guidelines',
        'Dedicated account manager & staff training session',
      ],
    },
    {
      name: 'Agency Partner',
      description: 'For digital marketing, SEO, and reputation agencies managing client portfolios.',
      highlight: false,
      trialNote: 'Includes guided 7-day trial with agency multi-client sandbox',
      features: [
        'Unlimited client account structure',
        'White-label portal with custom client branding',
        'Client-specific approval workflows',
        'Agency master billing with wholesale location rates',
        'Bulk NFC hardware ordering support',
        'Agency partner success manager & co-marketing assets',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#090D1A] border-t border-[#162035]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span>Plans & Custom Written Quotes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F8FAFC] tracking-tight">
            Transparent setup. <br />
            No surprise subscriptions.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every business begins with our guided 7-day trial. Our team coordinates setup, helps place your first campaign, and prepares a tailored written quote based strictly on your location count.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl flex flex-col justify-between p-7 sm:p-8 transition-all ${
                plan.highlight
                  ? 'bg-[#0D1528] border-2 border-blue-500/60 shadow-xl shadow-blue-950/40 relative'
                  : 'bg-[#0D1322] border border-[#1E293B] hover:border-[#2A3B5C]'
              }`}
            >
              <div>
                {/* Badge if highlight */}
                {plan.highlight && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4">
                    <span>Most Popular for Growing Teams</span>
                  </div>
                )}

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Trial Scope Callout */}
                <div className="p-3 rounded-xl bg-[#11182A] border border-[#1E293B] mb-6 text-xs text-blue-300">
                  <span className="font-semibold block text-white mb-0.5">Guided Trial Included:</span>
                  {plan.trialNote}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 block">
                    What is included:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={onRequestTrial}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? 'bg-[#1A73E8] hover:bg-[#1557B0] text-white shadow-lg shadow-blue-900/40'
                      : 'bg-[#162035] hover:bg-[#1E293B] text-slate-200 border border-[#263352]'
                  }`}
                >
                  <span>Request 7-day trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  Personalized setup call · No card required
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guided Trial Guarantee Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-[#070A13] border border-[#1E293B] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-1 flex-1">
              <h4 className="text-base font-semibold text-white">
                How our 7-day guided trial operates
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Clicking the request button does not immediately charge or start an unassisted timer. A member of our team reviews your business information and contacts you within one business day to coordinate your guided trial setup. After 7 days, service only transitions to a paid plan if you accept a written custom quote tailored to your exact locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
