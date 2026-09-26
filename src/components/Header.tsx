import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onRequestTrial: () => void;
  onOpenResources?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestTrial, onOpenResources }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Product', href: '#product-preview' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Agencies', href: '#for-agencies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#070A13]/90 backdrop-blur-md border-[#1E293B]/70 shadow-lg shadow-black/20'
          : 'bg-[#070A13]/60 backdrop-blur-sm border-[#162035]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Brand Wordmark & Icon */}
          <div className="flex items-center shrink-0">
            <a
              href="#"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              aria-label="5-Star.AI Home"
            >
              <BrandLogo variant="light" size="sm" />
            </a>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#C8D1E0]"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href === '#resources' && onOpenResources) {
                    e.preventDefault();
                    onOpenResources();
                  }
                }}
                className="hover:text-white transition-colors relative py-1 text-[14px] font-medium tracking-tight"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRequestTrial}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4.5 py-2 text-xs font-semibold text-white bg-[#1A73E8] hover:bg-[#1557B0] active:scale-[0.98] transition-all rounded-lg shadow-md shadow-blue-900/30 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Request a guided 7-day trial</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-100" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#C8D1E0] hover:text-white hover:bg-[#162035] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-18 bottom-0 bg-[#070A13]/98 backdrop-blur-xl border-t border-[#1E293B] z-50 flex flex-col justify-between p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold px-2">
              Navigation
            </div>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.href === '#resources' && onOpenResources) {
                      e.preventDefault();
                      onOpenResources();
                    }
                  }}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-[#11182A] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#1E293B] space-y-3 pb-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestTrial();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1A73E8] hover:bg-[#1557B0] rounded-xl shadow-lg shadow-blue-900/40"
            >
              <span>Request a guided 7-day trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-center text-slate-400">
              No credit card required · Setup consultation with a specialist
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
