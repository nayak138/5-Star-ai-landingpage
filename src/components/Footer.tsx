import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ModalContentType } from './PolicyModal';

interface FooterProps {
  onOpenModal: (type: ModalContentType) => void;
  onRequestTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onRequestTrial }) => {
  return (
    <footer className="bg-[#05070E] border-t border-[#162035] text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#162035]">
          {/* Brand info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="sm" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              5-Star.AI is the reputation-management system for local businesses, regional multi-location teams, and digital marketing agencies. Customers keep full control over every word.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span>Personalized setup · No credit card required</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#product-preview" className="hover:text-white transition-colors">
                  Customer Experience
                </a>
              </li>
              <li>
                <a href="#demo-generator" className="hover:text-white transition-colors">
                  AI Review Generator Demo
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Private Feedback System
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions & Pricing */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#for-agencies" className="hover:text-white transition-colors">
                  For Agencies & Portfolios
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing & Custom Quotes
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onRequestTrial}
                  className="text-[#1A73E8] hover:text-blue-300 transition-colors font-medium text-left"
                >
                  Request 7-Day Guided Trial
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Real Destinations: About, Resources, Privacy, Terms */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Governance & Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About 5-Star.AI
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('resources')}
                  className="hover:text-white transition-colors text-left"
                >
                  Best Practices & Resources
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} 5-Star.AI. All rights reserved.
          </div>
          <div className="text-center sm:text-right max-w-xl text-slate-400 leading-normal">
            Independent software tool. Google and Google Reviews are trademarks of Google LLC. Sample mockups and demo reviews are for demonstration purposes only.
          </div>
        </div>
      </div>
    </footer>
  );
};
