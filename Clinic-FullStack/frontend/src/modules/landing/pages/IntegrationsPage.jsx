import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MarketingHeader, MarketingFooter } from '@/app/layouts/MarketingLayout';
import { Button, FadeIn } from '@/components';
import { ROUTES } from '@/constants/routes';
import { SectionShell } from '../components/SectionShell';
import { IntegrationsHeroVisual } from '../components/IntegrationsMockups';
import {
  INTEGRATION_CATEGORIES,
  INTEGRATIONS_BY_CATEGORY,
} from '../data/integrations-data';
import { cn } from '@/lib/cn';

function IntegrationCard({ item }) {
  return (
    <div className="relative flex h-full flex-col rounded-xl border border-[#e8ecea] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] md:p-6">
      {item.comingSoon && (
        <span className="absolute right-4 top-4 rounded bg-[#00a3ad] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          Coming Soon!
        </span>
      )}
      <div className="mb-5 flex h-14 items-center">
        <div
          className="flex h-12 min-w-[48px] items-center justify-center rounded-lg px-2 text-[10px] font-bold leading-tight text-white sm:text-[11px]"
          style={{ backgroundColor: item.color }}
        >
          {item.name}
        </div>
      </div>
      <h3 className="mb-2 font-heading text-body font-bold text-[#1a1a1a] md:text-body-lg">
        {item.name}
      </h3>
      <p className="flex-1 text-body-sm leading-relaxed text-[#666666] md:text-body">
        {item.description}
      </p>
    </div>
  );
}

function IntegrationsCTA() {
  return (
    <SectionShell className="bg-primary py-14 md:py-16 lg:py-20" innerClassName="text-center">
      <FadeIn>
        <h2 className="mx-auto mb-3 max-w-[640px] font-heading text-[1.75rem] font-bold leading-snug text-white md:text-[2rem]">
          Looking for more information?
        </h2>
        <p className="mx-auto mb-8 max-w-[480px] text-body-lg text-white/95">
          We&apos;d love to talk to you!
        </p>
        <Link
          to={ROUTES.landing.contact}
          className="inline-flex min-w-[180px] items-center justify-center rounded-lg bg-white px-10 py-3.5 text-base font-semibold text-primary shadow-md transition-colors hover:bg-white/95"
        >
          Contact Us
        </Link>
      </FadeIn>
    </SectionShell>
  );
}

export function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState('billing');
  const sectionRefs = useRef({});

  const scrollToCategory = (id) => {
    setActiveCategory(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="overflow-x-hidden bg-white">
      <MarketingHeader />

      <main>
        {/* Hero — large image LEFT, text RIGHT */}
        <SectionShell className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <IntegrationsHeroVisual />
            </FadeIn>
            <FadeIn delay={0.08} className="order-1 lg:order-2 lg:pl-4 xl:pl-8">
              <p className="mb-3 text-caption font-semibold uppercase tracking-[0.14em] text-[#999999]">
                Partners &amp; Integrations
              </p>
              <h1 className="mb-5 text-balance font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[2.5rem] lg:text-[2.75rem]">
                Integrations make your workday{' '}
                <span className="font-accent italic text-primary">even easier</span>
              </h1>
              <p className="mb-8 max-w-lg text-body-lg leading-relaxed text-[#666666]">
                Connect Tendo to services and tools you use regularly and explore our network of
                partners to enhance your practice.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to={ROUTES.auth.register}>
                  <Button variant="primary" size="lg" pill className="min-w-[160px] shadow-orange">
                    Book a Demo
                  </Button>
                </Link>
                <Link
                  to={ROUTES.landing.developers}
                  className="inline-flex items-center gap-2 text-body font-semibold text-[#1a1a1a] hover:text-primary"
                >
                  Explore Our API
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </SectionShell>

        {/* Category nav */}
        <SectionShell className="sticky top-[60px] z-40 border-y border-[#eeeeee] bg-white/95 py-4 backdrop-blur-sm md:top-[96px]">
          <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <nav className="flex w-max min-w-full gap-2 md:justify-center">
              {INTEGRATION_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => scrollToCategory(cat.id)}
                  className={cn(
                    'whitespace-nowrap rounded-full px-4 py-2 text-body-sm font-medium transition-colors md:px-5 md:py-2.5',
                    activeCategory === cat.id
                      ? 'bg-[#1a1a1a] text-white'
                      : 'bg-[#f0f0f0] text-[#666666] hover:bg-[#e8e8e8]',
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
          </div>
        </SectionShell>

        {/* Integration grids */}
        <SectionShell className="space-y-16 bg-white py-14 md:space-y-20 md:py-20 lg:py-24">
          {INTEGRATION_CATEGORIES.map((cat, sectionIndex) => {
            const section = INTEGRATIONS_BY_CATEGORY[cat.id];
            return (
              <div
                key={cat.id}
                id={cat.id}
                ref={(el) => {
                  sectionRefs.current[cat.id] = el;
                }}
                className="scroll-mt-36"
              >
                <FadeIn delay={sectionIndex * 0.03}>
                  <h2 className="mb-8 font-heading text-[1.5rem] font-bold text-[#1a1a1a] md:text-[1.75rem]">
                    {section.title}
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {section.items.map((item, i) => (
                      <FadeIn key={item.name} delay={i * 0.02}>
                        <IntegrationCard item={item} />
                      </FadeIn>
                    ))}
                  </div>
                </FadeIn>
              </div>
            );
          })}

          <FadeIn className="border-t border-[#eeeeee] pt-10 text-center md:pt-12">
            <p className="text-body text-[#666666]">
              Not seeing an application used in your clinic? Check out{' '}
              <Link to={ROUTES.landing.developers} className="font-semibold text-primary hover:underline">
                Tendo&apos;s open API
              </Link>
              .
            </p>
          </FadeIn>
        </SectionShell>

        <IntegrationsCTA />
      </main>

      <MarketingFooter />
    </div>
  );
}
