import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { FadeIn } from '@/components';
import { APP_NAME, ROUTES } from '@/constants/routes';
import { COMING_SOON_PAGES } from '@/constants/coming-soon-pages';

export function ComingSoonPage() {
  const { pathname } = useLocation();
  const page = COMING_SOON_PAGES[pathname] ?? {
    title: 'This page',
    description: 'We are building something great. Check back soon for updates.',
  };

  return (
    <>
      <MarketingHeader />
      <main className="bg-gradient-hero">
        <div className="mx-auto flex min-h-[60vh] max-w-content flex-col items-center justify-center px-4 py-20 text-center md:px-8 md:py-28">
          <FadeIn>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-card">
              <Clock className="h-8 w-8 text-primary" strokeWidth={1.75} />
            </div>
            <p className="mb-3 text-body-sm font-semibold uppercase tracking-wider text-primary">
              Coming Soon
            </p>
            <h1 className="mb-4 font-heading text-[1.75rem] font-bold text-[#1a1a1a] md:text-[2.25rem]">
              {page.title}
            </h1>
            <p className="mx-auto mb-10 max-w-md text-body-lg leading-relaxed text-[#666666]">
              {page.description}
            </p>
            <Link
              to={ROUTES.landing.home}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-body-sm font-semibold text-text-primary shadow-orange transition-colors hover:bg-primary-hover"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {APP_NAME} home
            </Link>
          </FadeIn>
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}
