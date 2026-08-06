import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components';
import { APP_NAME, ROUTES } from '@/constants/routes';
import {
  CLINIC_SOFTWARE_ITEMS,
  DISCIPLINES_ITEMS,
  ROLES_ITEMS,
  NAV_ITEMS,
} from '@/constants/nav-menus';
import { NavDropdown, MobileNavDropdown } from './NavDropdown';
import { cn } from '@/lib/cn';

const FOOTER_COMPANY = [
  { label: 'Home', to: ROUTES.landing.home },
  { label: 'Pricing', to: ROUTES.landing.pricing },
  { label: 'Campus Blog', to: ROUTES.landing.blog },
  { label: 'Careers', to: ROUTES.landing.careers },
  { label: 'Terms of Service', to: ROUTES.landing.terms },
  { label: 'Privacy Policy', to: ROUTES.landing.privacy },
  { label: 'Security', to: ROUTES.landing.security },
  { label: 'Sitemap', to: ROUTES.landing.sitemap },
];

const FOOTER_CONTACT = [
  { label: 'Book a Demo', to: ROUTES.auth.register },
  { label: 'Contact Us', to: ROUTES.landing.contact },
  { label: 'Support Request', to: ROUTES.landing.support },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
];

function TendoLogoMark({ className }) {
  return (
    <svg viewBox="0 0 48 32" className={className} fill="none" aria-hidden>
      <path
        d="M4 20c6-10 12-14 20-14s14 4 20 14"
        stroke="#48b2e0"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M8 24h32" stroke="#48b2e0" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function FooterLinkList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.label}>
          <Link to={item.to} className="text-[0.8125rem] text-white/75 transition-colors hover:text-white">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function CapterraFooterBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect width="24" height="24" rx="4" fill="#ff9d28" />
        <path d="M14 8.5a4 4 0 1 0 0 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="text-[0.75rem] font-semibold text-white">Capterra</span>
      <span className="text-[0.75rem] font-bold text-white">4.7</span>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="h-3 w-3 text-[#ffb800]" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setOpenDropdown(null);
    setMobileDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const closeDesktopDropdown = () => setOpenDropdown(null);
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden border-b border-[#e8e8e8] bg-white md:block">
        <div className="mx-auto flex h-9 max-w-content items-center justify-end gap-6 px-8">
          <Link to={ROUTES.landing.contact} className="text-[0.75rem] text-[#666666] hover:text-[#1a1a1a]">
            Contact Us
          </Link>
          <Link to={ROUTES.auth.login} className="text-[0.75rem] text-[#666666] hover:text-[#1a1a1a]">
            Login
          </Link>
        </div>
      </div>

      {/* Main dark navbar */}
      <div className="bg-brand-nav text-white">
        <div className="mx-auto flex h-[60px] max-w-content items-center justify-between px-4 md:px-8">
          <Link to={ROUTES.landing.home} className="flex items-center gap-2.5">
            <TendoLogoMark className="h-7 w-10" />
            <span className="text-lg font-black tracking-[0.08em]">{APP_NAME.toUpperCase()}</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.items ? (
                <NavDropdown
                  key={item.id}
                  label={item.label}
                  items={item.items}
                  isOpen={openDropdown === item.id}
                  onToggle={() =>
                    setOpenDropdown((current) => (current === item.id ? null : item.id))
                  }
                  onClose={closeDesktopDropdown}
                />
              ) : (
                <Link
                  key={item.id}
                  to={item.to}
                  className={cn(
                    'text-[0.875rem] font-medium transition-colors',
                    location.pathname === item.to
                      ? 'text-[#00a3ad]'
                      : 'text-white/90 hover:text-white',
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:flex">
            <Link to={ROUTES.auth.register}>
              <Button variant="primary" size="md" pill className="min-w-[132px] px-5 font-semibold shadow-orange">
                Book a Demo
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 px-4 py-4 lg:hidden">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) =>
                item.items ? (
                  <MobileNavDropdown
                    key={item.id}
                    label={item.label}
                    items={item.items}
                    isOpen={mobileDropdown === item.id}
                    onToggle={() =>
                      setMobileDropdown((current) => (current === item.id ? null : item.id))
                    }
                    onNavigate={closeMobile}
                  />
                ) : (
                  <Link
                    key={item.id}
                    to={item.to}
                    className="border-b border-white/10 py-3 text-body font-medium text-white"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link to={ROUTES.auth.register} onClick={closeMobile} className="mt-4">
                <Button variant="primary" fullWidth pill>
                  Book a Demo
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="bg-brand-nav text-white">
      <div className="mx-auto max-w-content px-4 py-14 md:px-8 md:py-16">
        <div className="mb-10 md:mb-12">
          <TendoLogoMark className="h-8 w-12" />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <h4 className="mb-4 text-[0.9375rem] font-semibold text-white">{APP_NAME}</h4>
            <FooterLinkList items={FOOTER_COMPANY} />
          </div>

          <div>
            <h4 className="mb-4 text-[0.9375rem] font-semibold text-white">Clinic Software</h4>
            <FooterLinkList items={CLINIC_SOFTWARE_ITEMS} />
          </div>

          <div>
            <h4 className="mb-4 text-[0.9375rem] font-semibold text-white">Disciplines</h4>
            <FooterLinkList items={DISCIPLINES_ITEMS} />
            <h4 className="mb-4 mt-8 text-[0.9375rem] font-semibold text-white">Roles</h4>
            <FooterLinkList items={ROLES_ITEMS} />
          </div>

          <div>
            <h4 className="mb-4 text-[0.9375rem] font-semibold text-white">Get in Touch</h4>
            <FooterLinkList items={FOOTER_CONTACT} />
            <ul className="mt-4 space-y-2 text-[0.8125rem] text-white/75">
              <li>Sales: 1-866-643-3041 ext.1</li>
              <li>Support: 1-866-643-3041 ext.2</li>
              <li>Billing: 1-866-643-3041 ext.3</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[0.8125rem] text-white/50">
            © {new Date().getFullYear()} {APP_NAME}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
            <CapterraFooterBadge />
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MarketingLayout({ children }) {
  return <div className="min-h-screen bg-white">{children ?? <Outlet />}</div>;
}
