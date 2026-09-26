import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onRequestTrial: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onRequestTrial }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who is 5-Star.AI designed for?',
      a: '5-Star.AI is built for local storefronts, professional practices (dentists, medical clinics, law firms), hospitality venues (restaurants, cafes, hotels), service contractors, and digital marketing agencies that manage multiple client locations. It is ideal for any business that values authentic Google reputation without gimmicks.',
    },
    {
      q: 'Does 5-Star.AI automatically post reviews directly to Google?',
      a: 'No, and this is by strict design. Google’s terms of service require that reviews be submitted directly by authentic, logged-in Google users. 5-Star.AI serves as an intelligent formulation assistant: it helps the customer articulate their genuine thoughts into an editable draft, which they copy and paste directly into Google’s official review submission window.',
    },
    {
      q: 'Do customers have to use the AI draft?',
      a: 'Not at all. Customers retain 100% control over every word. They can edit sentences, delete parts, write their own review from scratch, or choose not to proceed. 5-Star.AI simply solves the "blank-page problem" for busy customers who want to say something nice but do not know how to start.',
    },
    {
      q: 'What happens to drafts and customer data?',
      a: 'Customer feedback drafts generated during an in-person or post-service flow are ephemeral and belong to the customer. We do not sell or harvest customer data, and drafts are not indexed for public model training. When a customer opts for private constructive feedback, their note is routed securely and directly to the business owner or management.',
    },
    {
      q: 'How does private feedback work when an experience is not 5 stars?',
      a: 'If a customer indicates a rating of 1 to 3 stars, the flow automatically guides them to an internal private feedback channel. This allows the customer to express constructive criticism directly to business leadership, providing managers with the immediate opportunity to make things right before the issue becomes a permanent public review.',
    },
    {
      q: 'How does the guided 7-day trial work?',
      a: 'When you submit a trial request, no credit card is taken. A dedicated onboarding specialist reaches out to schedule a 15-minute setup call, helping you configure your pilot campaign and review options. The trial runs for 7 days with zero automatic charges. Paid service begins only if you decide to accept a formal written quote tailored to your location count.',
    },
    {
      q: 'Can marketing agencies manage multiple client accounts?',
      a: 'Yes. Our Agency Partner plan provides a centralized parent management portal where agencies can create isolated client workspaces, invite client managers with restricted permissions, and manage campaigns across dozens of independent brands.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#090D1A] border-t border-[#162035]/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F8FAFC] tracking-tight">
            Straightforward answers.
          </h2>
          <p className="text-base text-slate-300">
            Everything you need to know about customer autonomy, Google compliance, and our guided trial model.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-xl bg-[#0D1322] border border-[#1E293B] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-lg bg-[#162035] text-slate-400 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-[#162035]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA Card */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#111C33] to-[#0A1020] border border-[#2563EB]/40 p-8 sm:p-10 text-center space-y-5 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
            Ready to give your reputation a real system?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Invite genuine reviews, handle private feedback with grace, and draft thoughtful replies. Request your guided 7-day trial with our team today.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onRequestTrial}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#1557B0] rounded-xl shadow-lg shadow-blue-900/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Request a guided 7-day trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-400">
            No credit card required · Team coordinates custom onboarding before any trial begins
          </p>
        </div>
      </div>
    </section>
  );
};
